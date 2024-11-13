//making connection with databse
import mongoose from "mongoose";                                //mongoose to interact with mongodb
export const dbConnection = () => {                             
  mongoose.connect(process.env.MONGO_URI, {                     //mongoose.connect() to connect to database specified in mongo_url
      dbName: "RESERVATIONS",
    })
    .then(() => {                                               //if connection made then
      console.log("Connected to database!");
    })
    .catch((err) => {                                          //if error in connection then
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};