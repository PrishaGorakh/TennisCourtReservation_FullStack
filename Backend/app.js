//cors dotenv express mongoose validator
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';                                    //to load environment variables from a configuration file
import { dbConnection } from "./database/dbConnection.js";      //importing the function responsible for establishing a database connection
import {errorMiddleware} from "./error/error.js";               //Importing custom error handling middleware.
import reservationRouter from './routes/reservationRoute.js';   // Importing the router module for handling reservation-related routes.


const app=express();
dotenv.config({path:"./config/config.env"});                    // Loading environment variables from the specified configuration file (config.env).
app.use(                                                        //app.use(path, middleware function/s)
    cors({                                                      //after using app.use cors becomes middleware
      origin:[process.env.FRONTEND_URL]     ,                  //frontend URL that is allowed to access the server
      methods: ["GET","POST"],                                        //get,post,delete,put post:send data to backend
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );   
app.use(express.json());                                        //Middleware to parse incoming JSON data from requests,parse:converting string to an object*/
app.use(express.urlencoded({ extended: true }));                //Middleware to parse URL-encoded data from requests,data is of which type*/

app.use("/api/v1/reservation",reservationRouter);               //This means that any request with a URL that starts with "/reservation" will be handled by reservationRouter
dbConnection();                                                 // Invoking the function to establish a connection to the database

app.use(errorMiddleware);                                      //setting up custom error handling middleware to handle and respond to errors


export default app;                                            //Creating an instance of the Express application.