//to start the node.js server
import app from "./app.js";                                             //This imports the Express.js application (app) from app.js

app.listen(process.env.PORT,()=>{                                       //app.listen(port, callback) This method starts the Express.js application (app) and listens for incoming HTTP requests on the specified port (process.env.PORT)
    console.log(`Server Running On Port ${process.env.PORT}`);          //process.env.PORT: This accesses the PORT environment variablein .env
});                                                                     //console.log prints the info on terminal