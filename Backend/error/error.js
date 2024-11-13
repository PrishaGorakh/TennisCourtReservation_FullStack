/*error handling*/
class ErrorHandler extends Error {  /*Error class is already present in javascript*/
    constructor(message, statusCode) {
      super(message); /*message is already in Error class*/
      this.statusCode = statusCode;  
    }
  }

  export const errorMiddleware = (err, req, res, next) => { /*middleware created to to use ErrorHandler*/ //err:prev error object passed by route handler,req:request obj,res:rsponse object,next:callback function to pass control to next middleware
    err.message = err.message || "Internal Server Error";  /* checks if err.message available if not then "Internal Server Error"*/
    err.statusCode = err.statusCode || 500;  /*if not err.statuscode then 500*/
    return res.status(err.statusCode).json({
        success: false, /*false because jab func false return karega tabhi error aaega*/
        message: err.message,
    });
 };

 export default ErrorHandler;