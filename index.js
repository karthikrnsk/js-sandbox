// Import stylesheets
import "./style.css";
import moment from "moment";
// Write Javascript code!
const appDiv = document.getElementById("app");
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

let start_limit = new Date("2020", "04", "01", "05", "30");
let end_limit = new Date("2021", "03", "31", "05", "30");

let dates = [
  "01-02-2020",
  "01-12-2020",
  "10-04-2020",
  "30-12-2020",
  "10-01-2021",
  "01-02-2021",
  "31-03-2021"
];

let temp = [];

for (let i = 0; i < dates.length; i++) {
  let p = dates[i].split("-");
  // console.log(p);
  let date = new Date(p[2], p[1], p[0], "05", "30");
  if (
    moment(date).isBetween(moment(start_limit), moment(end_limit), "date", "[]")
  ) {
    temp.push(i);
  }

  if (i == dates.length - 1) {
    console.log(temp);
  }
}
