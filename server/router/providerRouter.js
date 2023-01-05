const express = require("express");
const { check } = require("express-validator");
const providerControllers = require("../controller/providerController");

const providerRouter = express.Router();



module.exports = providerRouter;