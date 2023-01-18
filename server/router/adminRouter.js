const express = require("express");
const { check } = require("express-validator");
const adminControllers = require("../controller/adminController");
const adminRouter = express.Router();

adminRouter.post("/adminLogin", adminControllers.adminLogin);
adminRouter.get("/managerData", adminControllers.managerData);
adminRouter.get("/aprovedManagers", adminControllers.aprovedManagers);
adminRouter.post("/approve", adminControllers.approve);
adminRouter.post("/reject", adminControllers.reject);
adminRouter.post("/blockManagers", adminControllers.blockManagers);
adminRouter.post("/unblockManagers", adminControllers.unblockManagers);

module.exports = adminRouter;