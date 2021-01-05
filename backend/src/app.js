require('dotenv').config()
require('./config/db')
require('./config/nodeMailer')

const cors = require("cors");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const User = require("./models/user.js")

//My routes
const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/data");
const rankRoutes = require("./routes/leaderboard");
const scoreRoutes = require("./routes/score");

//Middlewares
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//My Routes
app.use("/", authRoutes);
app.use("/game", dataRoutes);
app.use("/leaderboard", rankRoutes);
app.use("/updatescores",scoreRoutes);

function scheduleReset() {
    // get current time
    let reset = new Date();
    // update the Hours, mins, secs to the 24th hour (which is when the next day starts)
    reset.setHours(24, 0, 0, 0);
    // calc amount of time until restart
    let t = reset.getTime() - Date.now();
    setTimeout(function() {
        // reset variable
        User.updateMany({daypoints: 0},(err,result)=>{
            if (err) {
                console.log(err)
              } 
        })
        // schedule the next variable reset
        scheduleReset();
    }, t);
}

scheduleReset();
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
