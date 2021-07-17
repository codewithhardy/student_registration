const express = require("express");
const router = express.Router();

const signUpTemplateCopy = require("./models/SignupModel");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
    roll: req.body.roll,
    password: securePassword,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json(e);
    });
});

router.get("/signup", async (req, res) => {
  try {
    const registerData = await signUpTemplateCopy.find();
    res.send(registerData);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
