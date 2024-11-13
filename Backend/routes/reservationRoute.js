import express from 'express';                                      //express router           
import {sendReservation} from '../controler/reservation.js'
const router=express.Router(); /*created an instance of router*/
router.get('/', (req, res) => {  //router should handle an HTTP GET request ,req-HTTP request object ,res-HTTP respond object 
    // Route logic               //defines a route for handling HTTP GET requests to the root path ('/')
                                //When a GET request is made to '/', the callback function (req, res) is executed-res.send is executed basically
    res.send('Reservation Route'); //res.send() method is an Express.js method used to send a response back to the client. here string reservation route is being sent
  });
router.post("/send",sendReservation)  //defines a route for handling HTTP POST requests to the path '/send'.
export default router;                //When a POST request is made to '/send', the sendReservation function imported from ../controler/reservation.js is invoked to handle the request.