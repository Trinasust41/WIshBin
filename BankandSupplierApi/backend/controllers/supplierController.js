const bankUser=require("../models/bankuserModel");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const sendToken=require("../utils/jwtToken");
exports.supplier = catchAsyncErrors(async (req, res, next) => {
    const user= await bankUser.findById(req.params.id);
    const {
      transaction_id,
      transaction_summary
    } = req.body;
    if(user.transaction.transaction_id!=transaction_id)
    return next(new ErrorHander("transaction_id is not found with this Id", 404));
    else{
      user.transaction.summary=transaction_summary;
      await user.save({ validateBeforeSave: false });
    }

      res.status(201).json({
        success: true,
        user
        
      });
    });