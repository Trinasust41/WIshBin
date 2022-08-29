const bankUser = require("../models/bankuserModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const { use } = require("../routes/bankuserRoute");

//register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, amount } = req.body;
  const user = await bankUser.create({
    name,
    email,
    password,
    amount,
    transaction: {
      summary: "just account created",
      transaction_Amount: 0,
      transaction_id: -1,
     
    },
  });
  sendToken(user, 201, res);
});
// //login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  //check if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHander("please enter email and password", 400));
  }
  const user = await bankUser.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHander("invalid email or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHander("invalid email or password", 401));
  }
  sendToken(user, 200, res);
});
/ /; //logout user
exports.bank_logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "logged out",
  });
});
//     ///get all users-------------admin
exports.getAllbankUser = catchAsyncErrors(async (req, res, next) => {
  const user = await bankUser.find();
  res.status(200).json({
    success: true,
    user,
  });
});
//   ///get single user-------------admin
exports.getSinglebankUser = catchAsyncErrors(async (req, res, next) => {
  const user = await bankUser.findById(req.params.id);
  if (!user) {
    return next(new ErrorHander(`user doesn't exist with id:${req.params.id}`));
  }
  res.status(200).json({
    success: true,
    user,
  });
});
// const ErrorHander = require("../utils/errorhander");
// const sendToken=require("../utils/jwtToken");
// const { use } = require("express/lib/application");
// //const sendEmail=require("../utils/sendEmail")
// const crypto=require("crypto");

///delete user --admin
exports.deletebankUser = catchAsyncErrors(async (req, res, next) => {
  const user = await bankUser.findById(req.params.id);
  //cloudinary will be removed later
  if (!user) {
    return next(
      new ErrorHander(`user doesn't exist with id: ${req.params.id}`)
    );
  }
  await user.remove();
  res.status(200).json({
    success: true,
    message: "user deleted successfully",
  });
});
//transaction
// exports.newTransaction = catchAsyncErrors(async (req, res, next) => {
//   const user = await bankUser.findById(req.params.id);
//   const { transaction_amount, new_summary } = req.body;
//   // bankUser.amount+=transaction_amount;
//   let x = 0,
//     y = 0,
//     z = "";
//   x = user.amount + transaction_amount;
//   z = new_summary;
//   y = transaction_amount;
//   let r = Math.floor(Math.random() * 1000000000000) + 1;
//   //       // const options = { upsert: true };

//   //       // var newvalues = { $set: {amount:x, summary:z,transaction_Amount:y} };
//   //       // const result = await connectDatabase().updateOne(user,newvalues, options);
//         var MongoClient = require('mongodb').MongoClient;
//         var url = "mongodb://localhost:27017/";

//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myquery = user.email;
//     var newvalues = { $set: {amount:x,summary:z,transaction_Amount:y,transaction_id:r} };
//     dbo.collection("Bank").updateOne(myquery, newvalues, function(err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       db.close();
//     });
//   });

//   // user = await bankUser.findByIdAndUpdate(req.params.id, req.body, {
//   //   new: true,
//   //   runValidators: true,
//   //   useFindAndModify: false,
//   // });

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

exports.newTransaction = catchAsyncErrors(async (req, res, next) => {
const user=await bankUser.findById(req.params.id);
const { transaction_amount, new_summary,to_id } = req.body;
const user1=await bankUser.findById(to_id);

user.amount-=transaction_amount;
user1.amount+=transaction_amount;
user.transaction.summary=new_summary;
user1.transaction.summary=new_summary;
let r = Math.floor(Math.random() * 1000000000000) + 1;
user.transaction.transaction_id=r;
user1.transaction.transaction_id=r;
user.transaction.transaction_Amount=transaction_amount;
user1.transaction.transaction_Amount=transaction_amount;
await user1.save({ validateBeforeSave: false });
await user.save({ validateBeforeSave: false });
res.status(200).json({
    success:true,
    user
});
});

  
async function theCurrentTransaction(id,transaction,summary) {
  const user = await bankUser.findById(id);

  user.amount+=transaction;
  user.transaction.summary=summary;
  let r = Math.floor(Math.random() * 1000000000000) + 1;
  user.transaction.transaction_id=r;
  

  await user.save({ validateBeforeSave: false });
}