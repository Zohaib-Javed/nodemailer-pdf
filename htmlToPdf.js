var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

var users = [
  {
    name: "Shyam",
    age: "26",
  },
  {
    name: "Navjot",
    age: "26",
  },
  {
    name: "Vitthal",
    age: "26",
  },
];
var document = {
  html: html,
  data: {
    header:"Door View",
    users: users,
  },
  path: "./html.pdf",
  type: "",
};

pdf
  .create(document)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });