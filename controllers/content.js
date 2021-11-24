const Course = require("../models/course");
const Teacher = require("../models/teacher");
const Enroll = require("../models/enroll");
const Feedback = require("../models/feedback");
const Contact = require("../models/contact");
const Partner = require("../models/partner");
const Header = require("../models/header");

exports.getContent = (req, res) => {
  Course.find().then((courses) => {
    Teacher.find()
      .then((teachers) => {
        Feedback.find()
          .then((feedbacks) => {
            Partner.find()
              .then((partners) => {
                Header.findOne()
                  .then((datas) => {
                    res.render("index", {
                      title: "Fulfil",
                      courses: courses,
                      teachers: teachers,
                      feedbacks: feedbacks,
                      partners: partners,
                      header_data: datas,
                    });
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
};

exports.postEnroll = (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const course = req.body.course;
  const _csrf = req.body._csrf;
  console.log(name, _csrf);
  const enroll = new Enroll({
    name: name,
    phone: phone,
    course: course,
  });
  enroll
    .save()
    .then((result) => {
      res.send({
        ok: true,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postContact = (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const contact = new Contact({
    name: name,
    phone: phone,
    email: email,
  });
  contact
    .save()
    .then((result) => {
      res.send({
        ok: true,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
