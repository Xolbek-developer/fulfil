const fileHelper = require("../utils/file");

const Course = require("../models/course");
const Teacher = require("../models/teacher");
const Feedback = require("../models/feedback");
const Partner = require("../models/partner");
const Enroll = require("../models/enroll");
const Contact = require("../models/contact");
const Header = require("../models/header");

exports.getDashboard = (req, res) => {
  Header.findOne()
    .then((header_datas) => {
      if (!header_datas) {
        const header = new Header({
          students: "0",
          lessons: "0",
          teachers: "0",
          groups: "0",
          content: " - zamonaviy kasblar maktabi",
        });
        header.save();
      }
      res.render("admin/dashboard", {
        path: "/admin/dashboard",
        header_data: header_datas,
        pageTitle: "Dashboard",
        editing: false,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getEditHeader = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/admin/dashboard");
  }
  const headerId = req.params.headerId;
  Header.findById(headerId)
    .then((header_datas) => {
      if (!header_datas) {
        return res.redirect("/admin/dashboard");
      }
      res.render("admin/dashboard", {
        header_data: header_datas,
        path: "/admin/dashboard",
        pageTitle: "Dashboard",
        editing: editMode,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST EDIT HEADER
exports.postEditHeader = (req, res, next) => {
  const headerId = req.body.headerId;
  const updatedStudents = req.body.students;
  const updatedLessons = req.body.lessons;
  const updatedTeachers = req.body.teachers;
  const updatedGroups = req.body.groups;
  const updatedContent = req.body.content;

  Header.findById(headerId)
    .then((data) => {
      data.students = updatedStudents;
      data.lessons = updatedLessons;
      data.teachers = updatedTeachers;
      data.groups = updatedGroups;
      data.content = updatedContent;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/dashboard");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// COURSE START //////////////////////////////////////////////

// GET ADD COURSE
exports.getAddCourse = (req, res) => {
  Course.find()
    .then((courses) => {
      course = courses;
      res.render("admin/add-course", {
        courses: courses,
        path: "/admin/add-course",
        pageTitle: "Courses",
        editing: false,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST ADD COURSE
exports.postAddCourse = (req, res) => {
  const title = req.body["course-name"];
  const description = req.body["course-description"];
  const image = req.file;
  const imageUrl = image ? image.path : null;
  if (!image) {
    return res.status(422).redirect("/admin/add-course");
  }
  const course = new Course({
    title: title,
    description: description,
    imageUrl: imageUrl,
  });
  course
    .save()
    .then((result) => {
      res.redirect("/admin/add-course");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// GET EDIT COURSE
exports.getEditCourse = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/admin/add-course");
  }
  const courseId = req.params.courseId;
  Course.findById(courseId)
    .then((course) => {
      if (!course) {
        return res.redirect("/admin/add-course");
      }
      res.render("admin/add-course", {
        courses: [course],
        course: course,
        path: "/admin/add-course",
        pageTitle: "Edit Course",
        editing: editMode,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST EDIT COURSE
exports.postEditCourse = (req, res, next) => {
  const courseId = req.body.courseId;
  const image = req.file;
  const updatedTitle = req.body["course-name"];
  const updatedDescription = req.body["course-description"];
  const updatedImageUrl = image ? image.path : null;

  Course.findById(courseId)
    .then((course) => {
      course.title = updatedTitle;
      if (image) {
        fileHelper.deleteFile(course.imageUrl);
        course.imageUrl = updatedImageUrl;
      }
      course.description = updatedDescription;
      return course.save();
    })
    .then((result) => {
      res.redirect("/admin/add-course");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST DELETE COURSE
exports.postDeleteCourse = (req, res, next) => {
  const courseId = req.body.courseId;

  Course.findById(courseId)
    .then((course) => {
      if (!course) {
        return next(new Error("Course not found"));
      }
      fileHelper.deleteFile(course.imageUrl);
      return Course.deleteOne({ _id: courseId });
    })
    .then((result) => {
      res.redirect("/admin/add-course");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
// COURSE END /////////////////////////////////////////////////////////////////////
// TEACHERS START /////////////////////////////////////////////////////////////////

// GET TEACHERS
exports.getAddTeacher = (req, res) => {
  Teacher.find()
    .then((teachers) => {
      res.render("admin/teachers", {
        teachers: teachers,
        path: "/admin/teachers",
        pageTitle: "Teachers",
        editing: false,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST TEACHER
exports.postAddTeacher = (req, res) => {
  const title = req.body["teacher-name"];
  const description = req.body["teacher-description"];
  const image = req.file;
  const imageUrl = image ? image.path : null;
  if (!image) {
    return res.status(422).redirect("/admin/teachers");
  }
  const teacher = new Teacher({
    title: title,
    description: description,
    imageUrl: imageUrl,
  });
  teacher
    .save()
    .then((result) => {
      res.redirect("/admin/teachers");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// GET EDIT TEACHER
exports.getEditTeacher = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/admin/teachers");
  }
  const teacherId = req.params.teacherId;
  Teacher.findById(teacherId)
    .then((teacher) => {
      if (!teacher) {
        return res.redirect("/admin/teachers");
      }
      res.render("admin/teachers", {
        teachers: [teacher],
        teacher: teacher,
        path: "/admin/teachers",
        pageTitle: "Edit Teacher",
        editing: editMode,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST EDIT TEACHER
exports.postEditTeacher = (req, res, next) => {
  const teacherId = req.body.teacherId;
  const image = req.file;
  const updatedTitle = req.body["teacher-name"];
  const updatedDescription = req.body["teacher-description"];
  const updatedImageUrl = image ? image.path : null;

  Teacher.findById(teacherId)
    .then((teacher) => {
      teacher.title = updatedTitle;
      if (image) {
        fileHelper.deleteFile(teacher.imageUrl);
        teacher.imageUrl = updatedImageUrl;
      }
      teacher.description = updatedDescription;
      return teacher.save();
    })
    .then((result) => {
      res.redirect("/admin/teachers");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST DELETE TEACHER
exports.postDeleteTeacher = (req, res, next) => {
  const teacherId = req.body.teacherId;

  Teacher.findById(teacherId)
    .then((teacher) => {
      if (!teacher) {
        return next(new Error("Teacher not found"));
      }
      fileHelper.deleteFile(teacher.imageUrl);
      return Teacher.deleteOne({ _id: teacherId });
    })
    .then((result) => {
      res.redirect("/admin/teachers");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// TEACHER END //////////////////////////////////////////////////////////////////////
// FEEDBACK START ///////////////////////////////////////////////////////////////////

// GET FEEDBACK
exports.getFeedbacks = (req, res) => {
  Feedback.find()
    .then((feedbacks) => {
      res.render("admin/feedback", {
        feedbacks: feedbacks,
        path: "/admin/feedbacks",
        pageTitle: "Feedbacks",
        editing: false,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST FEEDBACK
exports.postAddFeedback = (req, res) => {
  const title = req.body["student-name"];
  const course = req.body["student-course"];
  const description = req.body["student-description"];
  const image = req.file;
  const imageUrl = image ? image.path : null;
  if (!image) {
    return res.status(422).redirect("/admin/feedbacks");
  }
  const feedback = new Feedback({
    name: title,
    course: course,
    imageUrl: imageUrl,
    description: description,
  });
  feedback
    .save()
    .then((result) => {
      res.redirect("/admin/feedbacks");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// GET EDIT FEEDBACK
exports.getEditFeedback = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/admin/feedbacks");
  }
  const feedbackId = req.params.feedbackId;
  Feedback.findById(feedbackId)
    .then((feedback) => {
      if (!feedback) {
        return res.redirect("/admin/feedbacks");
      }
      res.render("admin/feedback", {
        feedbacks: [feedback],
        feedback: feedback,
        path: "/admin/feedbacks",
        pageTitle: "Edit Feedback",
        editing: editMode,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST EDIT FEEDBACK
exports.postEditFeedback = (req, res, next) => {
  const feedbackId = req.body.feedbackId;
  const updatedTitle = req.body["student-name"];
  const updatedCourse = req.body["student-course"];
  const updatedDescription = req.body["student-description"];
  const image = req.file;
  const updatedImageUrl = image ? image.path : null;

  Feedback.findById(feedbackId)
    .then((feedback) => {
      feedback.name = updatedTitle;
      if (image) {
        fileHelper.deleteFile(feedback.imageUrl);
        feedback.imageUrl = updatedImageUrl;
      }
      feedback.description = updatedDescription;
      feedback.course = updatedCourse;
      return feedback.save();
    })
    .then((result) => {
      res.redirect("/admin/feedbacks");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// DELETE FEEDBACK
exports.postDeleteFeedback = (req, res, next) => {
  const feedbackId = req.body.feedbackId;

  Feedback.findById(feedbackId)
    .then((feedback) => {
      if (!feedback) {
        return next(new Error("Course not found"));
      }
      fileHelper.deleteFile(feedback.imageUrl);
      return Feedback.deleteOne({ _id: feedbackId });
    })
    .then((result) => {
      res.redirect("/admin/feedbacks");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// FEEDBACK END ///////////////////////////////////////////////////////////////////////
// PARTNER START /////////////////////////////////////////////////////////////////////

// GET ADD PARTNER
exports.getPartner = (req, res) => {
  Partner.find()
    .then((partners) => {
      res.render("admin/partner", {
        partners: partners,
        path: "/admin/partners",
        pageTitle: "Partners",
        editing: false,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST ADD PARTNER
exports.postAddPartner = (req, res) => {
  const image = req.file;
  const link = req.body["partner-link"];
  const logo = image ? image.path : null;
  if (!image) {
    return res.status(422).redirect("/admin/partners");
  }
  const partner = new Partner({
    logo: logo,
    link: link,
  });
  partner
    .save()
    .then((result) => {
      res.redirect("/admin/partners");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// GET EDIT PARTNER
exports.getEditPartner = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/admin/partners");
  }
  const partnerId = req.params.partnerId;
  Partner.findById(partnerId)
    .then((partner) => {
      if (!partner) {
        return res.redirect("/admin/partners");
      }
      res.render("admin/partner", {
        partners: [partner],
        partner: partner,
        path: "/admin/partners",
        pageTitle: "Edit Partner",
        editing: editMode,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST EDIT PARTNER
exports.postEditPartner = (req, res, next) => {
  const partnerId = req.body.partnerId;
  const image = req.file;
  const updatedLink = req.body["partner-link"];
  const updatedLogo = image ? image.path : null;

  Partner.findById(partnerId)
    .then((partner) => {
      if (image) {
        fileHelper.deleteFile(partner.logo);
        partner.logo = updatedLogo;
      }
      partner.link = updatedLink;
      return partner.save();
    })
    .then((result) => {
      res.redirect("/admin/partners");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST DELETE PARTNER
exports.postDeletePartner = (req, res, next) => {
  const partnerId = req.body.partnerId;

  Partner.findById(partnerId)
    .then((partner) => {
      if (!partner) {
        return next(new Error("Partner not found"));
      }
      fileHelper.deleteFile(partner.logo);
      return Partner.deleteOne({ _id: partnerId });
    })
    .then((result) => {
      res.redirect("/admin/partners");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// PARTNER END /////////////////////////////////////////////////////////////////////////
// ENROLLS START //////////////////////////////////////////////////////////////////////

// GET ENROLLS
exports.getEnrolls = (req, res) => {
  Enroll.find()
    .then((enrolls) => {
      res.render("admin/enroll", {
        path: "/admin/enrolls",
        pageTitle: "Enrolls",
        enrolls: enrolls,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST DELETE ENROLLS
exports.postDeleteEnroll = (req, res) => {
  const enrollId = req.body.enrollId;

  Enroll.findByIdAndRemove(enrollId)
    .then((result) => {
      res.redirect("/admin/enrolls");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// ENROLL END ///////////////////////////////////////////////////////////////////////////
// CONTACTS START //////////////////////////////////////////////////////////////////////

// GET CONTACT
exports.getContacts = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.render("admin/contact", {
        path: "/admin/contacts",
        pageTitle: "Contacts",
        contacts: contacts,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// POST DELETE CONTACTS
exports.postDeleteContact = (req, res) => {
  const contactId = req.body.contactId;

  Contact.findByIdAndRemove(contactId)
    .then((result) => {
      res.redirect("/admin/contacts");
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// CONTACTS END ///////////////////////////////////////////////////////////////////////////