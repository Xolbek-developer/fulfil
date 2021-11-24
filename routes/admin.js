const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

// GET -> DASHBOARD
router.get("/dashboard", isAuth, adminController.getDashboard);

// GET -> ADMIN
router.get("/add-course", isAuth, adminController.getAddCourse);

// POST -> ADD COURSE
router.post("/add-course", isAuth, adminController.postAddCourse);

// GET -> EDIT COURSE
router.get("/edit-course/:courseId", isAuth, adminController.getEditCourse);

// POST -> EDIT COURSE
router.post("/edit-course", isAuth, adminController.postEditCourse);

// POST -> DELETE COURSE
router.post("/delete-course", isAuth, adminController.postDeleteCourse);

// GET -> TEACHERS
router.get("/teachers", isAuth, adminController.getAddTeacher);

// POST -> ADD TEACHER
router.post("/teachers", isAuth, adminController.postAddTeacher);

// GET -> EDIT TEACHER
router.get("/edit-teacher/:teacherId", isAuth, adminController.getEditTeacher);

// POST -> EDIT TEACHER
router.post("/edit-teacher", isAuth, adminController.postEditTeacher);

// POST -> DELETE TEACHER
router.post("/delete-teacher", isAuth, adminController.postDeleteTeacher);

// GET -> FEEDBACKS
router.get("/feedbacks", isAuth, adminController.getFeedbacks);

// POST -> POST FEEDBACK
router.post("/feedbacks", isAuth, adminController.postAddFeedback);

// GET EDIT FEEDBACK
router.get(
  "/edit-feedback/:feedbackId",
  isAuth,
  adminController.getEditFeedback
);

// POST -> EDIT FEEDBACK
router.post("/edit-feedback", isAuth, adminController.postEditFeedback);

// POST -> DELETE FEEDBACK
router.post("/delete-feedback", isAuth, adminController.postDeleteFeedback);

// GET -> PARTNERS
router.get("/partners", isAuth, adminController.getPartner);

// POST -> PARTNERS
router.post("/partners", isAuth, adminController.postAddPartner);

// GET -> EDIT PARTNER
router.get("/edit-partner/:partnerId", isAuth, adminController.getEditPartner);

// POST -> EDIT PARTNER
router.post("/edit-partner", isAuth, adminController.postEditPartner);

// POST -> DELETE PARTNER
router.post("/delete-partner", isAuth, adminController.postDeletePartner);

// GET -> GET ENROLLS
router.get("/enrolls", isAuth, adminController.getEnrolls);

// POST -> POST DELETE ENROLL
router.post("/delete-enroll", isAuth, adminController.postDeleteEnroll);

// GET -> GET CONTACTS
router.get("/contacts", isAuth, adminController.getContacts);

// POST -> POST DELETE CONTACT
router.post("/delete-contact", isAuth, adminController.postDeleteContact);

// GET -> EDIT HEADER
router.get("/edit-header/:headerId", isAuth, adminController.getEditHeader);

// POST -> EDIT HEADER
router.post("/edit-header", isAuth, adminController.postEditHeader);

module.exports = router;
