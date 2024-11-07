import captan from "../Images/captan.jpg";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

function CaptanPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div>
      <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-0">
        {/* Image with slide-right animation */}
        <img
          className="w-[300px] h-[320px] md:w-[500px] md:h-[530px] rounded-3xl"
          data-aos="slide-right"
          src={captan}
        />

        {/* Text content */}
        <div className="w-full md:w-[300px] pt-10">
          <h6 className="font-extralight text-center md:text-left" data-aos="slide-left">
            What We Do
          </h6>
          <h1 className="text-2xl md:text-3xl text-center md:text-left" data-aos="slide-right">
            Givin a different feels of traveling with us
          </h1>

          <p className="font-extralight pt-2 text-center md:text-left" data-aos="slide-left">
            SomAirline is a new Somali airline dedicated to providing safe and affordable flights. With a focus on quality service and sustainability, it aims to enhance travel options and promote economic growth.
          </p>

          {/* Icon and Text Rows */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mt-6">
            <i data-aos="slide-left" className="pt-1 text-4xl fa-solid fa-plane-departure"></i>
            <div data-aos="slide-right" className="text-center md:text-left">
              <h1 className="text-2xl">Fly with jetly</h1>
              <p className="font-extralight">Connecting Somalia to various international destinations.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mt-6">
            <i data-aos="slide-left" className="text-4xl pt-2 fa-brands fa-algolia"></i>
            <div data-aos="slide-right" className="text-center md:text-left">
              <h1 className="text-2xl">Book a jet instantly</h1>
              <p className="font-extralight">Connecting Somalia to various international destinations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptanPage;
