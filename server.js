const express = require("express");
const routes = require("./routes/gpu");
const app = express();

app.use(express.json());

// TIL: creating a function and having the app use it will
// cause function to be called everytime a request comes in
// before hitting the destination app.use of the call that is
// being made. next() will continue the flow

// Delcaring a function to append time of request
const requestTime = function (req, res, next) {
  let unix = Date.now();
  let computerTime = new Date(unix);
  console.log(unix);
  console.log(computerTime);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[computerTime.getMonth()];
  let date = computerTime.getDate();
  let year = computerTime.getFullYear();
  let hour = computerTime.getHours();
  let min = computerTime.getMinutes();
  let sec = computerTime.getSeconds();
  sec = sec <= 9 ? "0" + sec : sec;
  let time =
    month + " " + date + " " + year + " " + hour + ":" + min + ":" + sec;

  req.requestTime = time;

  next();
};

app.use(requestTime);

// Since this is an api backend only, we can use root for routes
app.use("/", routes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening on port " + listener.address().port);
});
