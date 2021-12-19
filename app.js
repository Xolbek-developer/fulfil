const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");
const multer = require("multer");
const compression = require("compression");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

const contentRoute = require("./routes/content");
const adminRoute = require("./routes/admin");
const authRoute = require("./routes/auth");
const errorController = require("./controllers/error");

app.use(compression());
app.use(helmet());

const MONGODB_URI = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "session",
});

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, `a${new Date().getTime().toString()}` + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  next();
});

app.use(contentRoute);
app.use("/admin", adminRoute);
app.use(authRoute);

app.use(errorController.get404);
app.use("/500", errorController.get500);

app.use((error, req, res, next) => {
  res.status(500).render("500", {
    pageTitle: "Error!",
    path: "/500",
    // isAuthenticated: req.session.isLoggedIn,
  });
});

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
