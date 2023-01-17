const { Provider } = require("../model/eventManagerModel")

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { response } = require("express");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_AUTH_SERVICE_SID;
const client = require("twilio")(accountSid, authToken);

async function sendOtp(mobile) {
    mobile = Number(mobile);
  
    try {
      const verification = await client.verify.v2
        .services(serviceSid)
        .verifications.create({ to: `+91${mobile}`, channel: "sms" });
      return { status: true, verification };
    } catch (error) {
      return { status: false, error };
    }
    console.log("verification", verification);
    return { status: verification.status };
}
  

async function otpVerifyFunction(otp, mobile) {
    const verification_check = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({ to: `+91${mobile}`, code: otp });
    console.log("verifcation ckeck otp  ", verification_check.status);
    if (verification_check.status == "approved") {
      return { status: true };
    } else {
      return { status: false };
    }
}
  

const signupWithEmail = async (req, res) => {
    console.log("#####################")
    console.log(req.body)
    // const userExits = await User.findOne({
    //   $and: [
    //     {
    //       $or: [{ email: req.body.providerData.email }, { mobile: req.body.providerData.phone }],
    //     },
    //     { verified: true },
    //   ],
    // });
    // if (userExits) {
    //   res
    //     .status(202)
    //     .json({ message: "email,or mobile  already excites, signup failed" });
    // } else {
      const hash = await bcrypt.hash(req.body.providerData.password, 5);
  
      const provider = new Provider({
        companyname: req.body.providerData.companyName,
        description: req.body.providerData.description,
        category: req.body.providerData.services,
        place: req.body.providerData.place,
        email: req.body.providerData.email,
        mobile: req.body.providerData.phone,
          password: hash,
          certificate:req.body.certificateUrl,
        verified: false,
      });
        try {
          console.log("&&&&&&&&&&&&")
            await provider.save();
            console.log("*************")
            const response = await sendOtp(req.body.providerData.phone);
            console.log("^^^^^^^^^^^^^^^^^^")
        if (response.status === true) {
          res.status(201).json({
            message: `success`,
            otpStatus: `sending to${req.body.providerData.phone} `,
          });
        } else {
          res.status(400).json({
            message: `error`,
            otpStatus: `sending to${req.body.providerData.phone} `,
          });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ message: "error", error });
      }
    }
//   };
  exports.signupWithEmail = signupWithEmail;

  
const otpVerify = async (req, res) => {
    try {
      const { mobile, otp } = req.body;
      const response = await otpVerifyFunction(otp, mobile);
      console.log("response of otp", response);
      if (response.status === true) {
        await User.updateOne({ mobile }, { verified: true });
        res.status(201).json({ message: "otp verification successful" });
      } else {
        res.status(400).json({ message: " invalid otp verification " });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "otp failed", error: error.massage });
    }
  };
  exports.otpVerify = otpVerify;