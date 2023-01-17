const express = require("express");
const { check } = require("express-validator");
const providerControllers = require("../controller/providerController");

const providerRouter = express.Router();

providerRouter.post("/signupEmail",providerControllers.signupWithEmail);
providerRouter.post("/otpVerify",providerControllers.otpVerify);

module.exports = providerRouter;