const express = require("express");
const validator = require("email-validator");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("Welcome to Firebase Cloud Functions");
});

app.post("/emailValidate", (req, res) => {
  const email = req.body?.email;

  if (typeof email !== "string" || email.trim() === "") {
    return res.status(400).json({
      status: "wrong input",
    });
  }

  return res.json({
    status: validator.validate(email.trim()),
  });
});

module.exports = app;