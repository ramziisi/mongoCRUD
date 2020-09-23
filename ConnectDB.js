const mongoose= require('mongoose')
const database_url = "mongodb://localhost:27017/CONTACT";

const ConnectDB = () => {
    mongoose.connect(
      database_url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          throw err;
        }
        console.log("Database Connected...");
      }
    );
  };
  
  module.exports = ConnectDB;