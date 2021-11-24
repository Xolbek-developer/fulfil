const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { validationResult } = require("express-validator/check");

const Admin = require("../models/admin");
dotenv.config();

const GMAIL = process.env.GMAIL;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL,
    pass: GMAIL_PASSWORD,
  },
});

// GET LOGIN
exports.getLogin = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  Admin.findOne().then((admin) => {
    if (!admin) {
      const userName = "admin";
      const password = "admin";
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const admin = new Admin({
            userName: userName,
            password: hashedPassword,
            email: "",
            firstName: "",
            lastName: "",
            about: "",
          });
          return admin.save();
        })
        .catch((err) => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          return next(error);
        });
    }
  });

  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    errorMessage: message,
    oldInput: {
      userName: "",
      password: "",
    },
  });
};

// POST LOGIN
exports.postLogin = (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render("auth/login", {
      path: "/login",
      pageTitle: "Login",
      isAuthenticated: false,
      errorMessage: errors.array()[0].msg,
      oldInput: {
        userName: userName,
        password: "",
      },
    });
  }

  Admin.findOne({ userName: userName })
    .then((admin) => {
      if (!admin) {
        return res.status(422).render("auth/login", {
          path: "/login",
          pageTitle: "Login",
          errorMessage: "Invalid username",
          oldInput: {
            userName: userName,
            password: "",
          },
        });
      }
      bcrypt.compare(password, admin.password).then((doMatch) => {
        if (doMatch) {
          req.session.isLoggedIn = true;
          return req.session.save((err) => {
            res.redirect("/admin/dashboard");
          });
        }
        return res.status(422).render("auth/login", {
          path: "/login",
          pageTitle: "Login",
          errorMessage: "Invalid password",
          oldInput: {
            userName: userName,
            password: "",
          },
        });
      });
    })
    .catch((err) => {
      res.redirect("/login");
    });
};

// ADMIN PROFILE //////////////////////////////////////////////////////////////////

// GET ADMIN PROFILE
exports.getAdminProfile = (req, res) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  Admin.findOne()
    .then((admin_data) => {
      res.render("admin/user", {
        path: "/admin/user-profile",
        pageTitle: "Admin Profile",
        admin_data: admin_data,
        errorMessage: message,
        oldPassword: "",
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST ADMIN PROFILE
exports.postAdminProfile = (req, res) => {
  const updatedUserName = req.body.userName;
  const updatedEmail = req.body.email;
  const updatedFirstName = req.body.firstName;
  const updatedLastName = req.body.lastName;
  const updatedProfession = req.body.profession;
  const currentPassword = req.body.currentPassword;
  const newPassword = req.body.newPassword;
  const updatedAbout = req.body.about;
  if (currentPassword && newPassword) {
    Admin.findOne()
      .then((admin) => {
        bcrypt.compare(currentPassword, admin.password).then((doMatch) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(422).render("admin/user", {
              path: "/admin/user-profile",
              pageTitle: "Admin Profile",
              admin_data: admin,
              errorMessage: errors.array()[0].msg,
              oldPassword: newPassword,
            });
          }
          if (doMatch) {
            bcrypt
              .hash(newPassword, 12)
              .then((hashedNewPassword) => {
                admin.userName = updatedUserName
                  ? updatedUserName
                  : admin.userName;
                admin.email = updatedEmail ? updatedEmail : admin.email;
                admin.firstName = updatedFirstName
                  ? updatedFirstName
                  : admin.firstName;
                admin.lastName = updatedLastName
                  ? updatedLastName
                  : admin.lastName;
                admin.password = hashedNewPassword;
                admin.about = updatedAbout ? updatedAbout : admin.about;
                return admin.save();
              })
              .then((result) => {
                res.redirect("/admin/admin-profile");
              });
          } else {
            req.flash("error", "Incorrect password");
            res.redirect("/admin/admin-profile");
          }
        });
      })
      .catch((err) => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  } else {
    Admin.findOne()
      .then((admin) => {
        admin.userName = updatedUserName ? updatedUserName : admin.userName;
        admin.email = updatedEmail ? updatedEmail : admin.email;
        admin.firstName = updatedFirstName ? updatedFirstName : admin.firstName;
        admin.lastName = updatedLastName ? updatedLastName : admin.lastName;
        admin.profession = updatedProfession
          ? updatedProfession
          : admin.profession;
        admin.password = admin.password;
        admin.about = updatedAbout ? updatedAbout : admin.about;
        return admin.save();
      })
      .then((result) => {
        res.redirect("/admin/admin-profile");
      })
      .catch((err) => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  }
};

// POST LOGOUT
exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/admin/login");
  });
};

// GET RESET PASSWORD
exports.getResetPassword = (req, res) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("auth/reset", {
    path: "/reset",
    pageTitle: "Reset Password",
    errorMessage: message,
  });
};

exports.postResetPassword = (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      return res.redirect("/admin/reset-password");
    }
    const token = buffer.toString("hex");
    Admin.findOne({ email: req.body.email })
      .then((admin) => {
        if (!admin) {
          req.flash("error", "No account with that email found.");
          return res.redirect("/admin/reset-password");
        }
        admin.resetToken = token;
        admin.resetTokenExpiration = Date.now() + 3600000;
        return admin.save();
      })
      .then((result) => {
        res.redirect("/admin/login");
        transporter.sendMail({
          to: req.body.email,
          from: GMAIL,
          subject: "Password reset",
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http:www.fulfil.uz/reset/${token}">link</a> to set a new password.</p>
          `,
        });
      })
      .catch((err) => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  Admin.findOne({
    resetToken: token,
    resetTokenExpiration: { $gt: Date.now() },
  })
    .then((user) => {
      let message = req.flash("error");
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render("auth/new-password", {
        path: "/new-password",
        pageTitle: "New Password",
        errorMessage: message,
        passwordToken: token,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.newPassword.trim();
  const passwordToken = req.body.passwordToken;

  Admin.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
  })
    .then((admin) => {
      bcrypt.hash(newPassword, 12).then((hashedPassword) => {
        admin.password = hashedPassword;
        admin.resetToken = undefined;
        admin.resetTokenExpiration = undefined;
        return admin.save();
      });
    })
    .then((result) => {
      res.redirect("/admin/login");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
