import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";  //use it in functional components to declare state variables and update their values
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");  //initializes a state variable firstName with an initial value of an empty string, and provides a function setFirstName to update its value later
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState();
  const navigate = useNavigate();  //for navigating between different routes in a SPA

  const handleReservation = async (e) => {
    e.preventDefault();     //It prevents the default form submission behavior using to avoid page reload.

    try {
      const { data } = await axios.post(       //It sends a POST request to a reservation API endpoint with form data ({ firstName, lastName, email, phone, date, time }).
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {headers: {"Content-Type": "application/json",},
          withCredentials: true,
        }
      );
      toast.success(data.message);      //message from backend rendered here
      setFirstName("");     //when message of success comes all this will be set empty,resets value to an empty string
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");     //then navigate to success page for 
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>   </p>
            <form>
              <div>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div>
                <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/>
                <input type="time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)}/>
              </div>
              <div>
                <input type="email" placeholder="Email" className="email_tag" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;