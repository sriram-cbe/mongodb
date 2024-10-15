var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
config = require("./config/dev.json");
utils = require("./common/utils");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var vehicleRouter = require("./routes/vehicles");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/vehicles", vehicleRouter);
userModel = require("./model/usersModel");
vehicleModel = require("./model/vehicleModel");

mongoose = require("mongoose");

var connStr = utils.getConectionString();
mongoose.connect(connStr, {});
var db = mongoose.connection;
db.on(
  "error",
  console.error.bind(
    console,
    "Database connection failed. string " + connStr + " :"
  )
);
db.once("open", function () {
  console.log("Database is connected. connection string " + connStr);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
