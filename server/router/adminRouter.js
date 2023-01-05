const express = require("express");
const { check } = require("express-validator");
const adminControllers = require("../controller/adminController");
const adminRouter = express.Router();



module.exports = adminRouter;