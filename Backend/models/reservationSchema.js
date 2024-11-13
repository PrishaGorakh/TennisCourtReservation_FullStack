import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name must be of at least 3 Characters."],
      maxLength: [30, "First name cannot exceed 30 Characters."],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, "Last name must be of at least 3 Characters."],
      maxLength: [30, "Last name cannot exceed 30 Characters."],
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
      type: String,
      required: true,
      minLength: [10, "Phone number must contain 11 Digits."],
      maxLength: [10, "Phone number must contain 11 Digits."],
    },
  });
                                                                                      //schemas define the structure and behavior of the documents
  export const Reservation = mongoose.model("Reservation", reservationSchema);       //Creates a Mongoose model named "Reservation" using the reservationSchema
                                                                                    //When a Mongoose model is created with a specific name (e.g., "Reservation"), Mongoose automatically maps it to a MongoDB collection (e.g., "reservations" by default) by adding s to the model name.