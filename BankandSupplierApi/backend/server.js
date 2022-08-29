const app = require("./app");
const cors = require("cors");
const dotenv= require("dotenv");
////connecting to database
const connectDatabase= require("./config/database");
///handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to uncaught exception`);
    process.exit(1);
});




app.use(cors());

///config
dotenv.config({path:"backend/config/config.env"});
connectDatabase();
const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);

});
///unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    });
});