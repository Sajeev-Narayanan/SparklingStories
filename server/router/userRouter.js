const express = require("express");
const { check } = require("express-validator");
const userControllers = require("../controller/userController");

const userRouter = express.Router();



module.exports = userRouter;