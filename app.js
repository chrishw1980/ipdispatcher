var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var log4js = require("log4js");

var versionRouter = require('./routes/version');
var dispatcherRouter = require('./routes/dispatcher');

var app = express();
var log4js_json = require("./log4j.json");
log4js.configure(log4js_json);
app.use(log4js.connectLogger(log4js.getLogger('http'),{level:log4js.levels.INFO}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/version', versionRouter);
app.use('/dispatcher', dispatcherRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
