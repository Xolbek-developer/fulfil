const express = require("express");
const router = express.Router();

const contentController = require("../controllers/content");

// GET -> CONTENT
router.get("/", contentController.getContent);

// POST -> ENROLL
router.post("/enroll", contentController.postEnroll);

// POST -> CONTACT
router.post("/contact", contentController.postContact);

module.exports = router;
