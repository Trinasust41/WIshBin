const express=require("express");
const {registerUser, loginUser,bank_logout,getAllbankUser,getSinglebankUser,deletebankUser, newTransaction} = require("../controllers/bankuserController");
const { supplier } = require("../controllers/supplierController");
const router=express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(bank_logout);
router.route("/users").get(getAllbankUser);
router.route("/user/:id").get(getSinglebankUser).delete(deletebankUser);
router.route("/transaction/user/:id").post(newTransaction);
router.route("/supplier/user/:id").post(supplier);
module.exports=router




