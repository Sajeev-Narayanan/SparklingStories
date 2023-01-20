const express = require("express");
const { check } = require("express-validator");
const userControllers = require("../controller/userController");

const userRouter = express.Router();

userRouter.post('/signup', userControllers.signup);
userRouter.post('/otpVerify', userControllers.otpVerify);
userRouter.post('/resendOtp', userControllers.resendOtp);


module.exports = userRouter;