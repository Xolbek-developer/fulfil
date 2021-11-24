const express = require("express");
const { body } = require("express-validator/check");

const authController = require("../controllers/auth");
const isAuth = require("../middleware/is-auth");
const router = express.Router();

// GET -> LOGIN
router.get("/admin/login", authController.getLogin);

// POST -> LOGIN
router.post(
  "/admin/login",
  [
    body("userName", "Please enter a valid username").isLength({ min: 3 }),
    body("password", "Password has to be valid")
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
  ],
  authController.postLogin
);

// GET -> ADMIN PROFILE
router.get("/admin/admin-profile", isAuth, authController.getAdminProfile);

// POST -> ADMIN PROFILE
router.post(
  "/admin/update-admin",
  [
    body(
      "currentPassword",
      "Please enter a password with only numbers and text and at least 5 characters."
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body(
      "newPassword",
      "Please enter a password with only numbers and text and at least 5 characters."
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body("confirmNewPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.newPassword) {
          throw new Error("Passwords have to match!");
        }
        return true;
      }),
  ],
  isAuth,
  authController.postAdminProfile
);

// POST -> ADMIN LOGUT
router.get("/admin/logout", isAuth, authController.postLogout);

// GET -> RESET PASSWORD
router.get("/admin/reset-password", authController.getResetPassword);

// POST -> RESET PASSWORD
router.post("/admin/reset-password", authController.postResetPassword);

// GET -> NEW PASSWORD
router.get("/reset/:token", authController.getNewPassword);

// POST -> NEW PASSWORD
router.post("/reset", authController.postNewPassword);

module.exports = router;
