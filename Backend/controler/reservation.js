//creation and sending of reservation data to a MongoDB database according to errors
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {  //asyn:bcoz using await //The sendReservation function expects a request (req) containing data (req.body)
    const { firstName, lastName, email, date, time, phone } = req.body;  //want these things from frontend
    if (!firstName || !lastName || !email || !date || !time || !phone) {  //if no firstname or no lastname or no email or no...
      return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));  //then throw error ErrorHander(message,statuscode)
    }                                                                              //400:bad request
  
    try {
      await Reservation.create({ firstName, lastName, email, date, time, phone }); //await:till this is not executed code waits //if all fields present create document in database using model.create
      res.status(202).json({
        success: true,
        message: "Reservation Sent Successfully!",
      });
    } catch (error) {  //here only validation error can come
      // Handle Mongoose validation errors
      if (error.name === 'ValidationError') {       //checks if the name property of the error object matches 'ValidationError'
        const validationErrors = Object.values(error.errors).map(err => err.message);  //Object.values(error.errors) retrieves an array of the values (error objects) from the error.errors object ,for each err its error message retrieved
                                                                                       //This results in an array (validationErrors) containing all the error messages from individual validation errors
        return next(new ErrorHandler(validationErrors.join(', '), 400));  //validationErrors.join(', ') joins the array of error messages (validationErrors) into a single string separated by commas.
      }                                                                   //new errorhandler instance created and passed to next() to forward the validation error to the error-handling middleware 
  
      // Handle other errors
      return next(error);
    }
  };
  
  
