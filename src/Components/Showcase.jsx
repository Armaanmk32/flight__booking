import React, { useEffect } from 'react';
import flighpassenger from "../Images/flightpassanger.webp";
import Flught from "../Images/flyght.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

function ShowCase() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="px-4 py-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-20">
        <div className="relative" data-aos="fade-right">
          <img className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded" src={flighpassenger} />
          <img
            className="w-[400px] h-[300px] md:w-[600px] md:h-[400px] absolute left-[-80px] md:left-[-120px] bottom-[-150px] md:bottom-[-200px]"
            src={Flught}
            data-aos="fade-left"
          />
        </div>

        <div className="w-full md:w-[400px] pt-10" data-aos="fade-up">
          <h6 className="font-extralight pb-2">what will you get</h6>
          <h1 className="font-bold text-xl md:text-2xl">Private jet for business and leisure purpose</h1>

          <p className="pt-2">
            I am writing to express my disappointment with my recent flight experience with your airline. The flight was delayed for several hours with no clear communication from the staff, and the in-flight service did not meet expectations. I hope these issues can be addressed to ensure a better experience for future passengers.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-sky-300 h-[120px] w-full md:w-[220px] rounded mt-5 text-center" data-aos="fade-up">
              <i className="text-white text-3xl fa-solid fa-plane-departure"></i>
              <p className="pt-2">Our staff are experienced in handling customer interactions.</p>
            </div>

            <div className="bg-sky-300 h-[120px] w-full md:w-[220px] rounded mt-5 text-center" data-aos="fade-up">
              <i className="text-white text-2xl fa-solid fa-users"></i>
              <p className="pt-2">It is always a pleasure for us to see our customers happy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
