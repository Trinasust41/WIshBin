const express = require("express");
const app = express();
const cookieParser=require("cookie-parser");
const errorMiddleware=require("./middleware/error");
app.use(express.json());
app.use(cookieParser());

app.use(express.json());
const users=require("./routes/bankuserRoute");
app.use("/api/v1",users);
app.use(errorMiddleware);
module.exports= app;
