import React, { useEffect } from 'react';
import passanger from "../Images/passanger1.webp";
import {Link} from "react-router-dom"
import 'aos/dist/aos.css';
import AOS from 'aos';

function Body() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center h-[420px] md:h-[270px] mt-20"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${passanger})`,
        }}
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center px-4 md:px-20 pt-10">
          <div className="text-white text-center md:text-left mb-4 md:mb-0" data-aos="fade-up">
            <h1 className="font-bold text-xl md:text-2xl">We fly with you to over 6800</h1>
            <h1 className="font-bold text-xl md:text-2xl">destinations worldwide</h1>
            <p className="font-extralight pt-2">I am writing to express my disappointment</p>
            <p className="font-extralight">with my recent flight experience with your airline.</p>

            <div className="flex flex-col md:flex-row items-center md:items-start">

              <Link to="/bookin"> 
              <button className="bg-sky-500 px-8 border-2 border-white py-2 rounded m-2 mt-4 md:mt-10">Book Now</button>
              </Link>
              
              <button className="bg-white text-black border-2 border-sky-500 px-8 py-2 rounded m-2 mt-4 md:mt-10">Read more</button>
            </div>
          </div>

          <div className="pt-5" data-aos="fade-up">
            <i className="text-white text-7xl md:text-9xl fa-solid fa-plane-departure"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
