const express = require("express");
const ConnectDB = require("./ConnectDB.js");
const app =express();
app.use(express.json());
ConnectDB()
app.use("/contactlist",require("./routes/contactlist"));
const PORT = 5000;
app.listen(PORT,(err)=>{
    if(err)
        throw(err);
    
     console.log(`server is runnig a port 5000`)
})