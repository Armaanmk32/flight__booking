import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

function ShowcaseThree() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="px-4 py-8 bg-[var(--background-color)] text-[var(--text-color)] dark:bg-[var(--dark-background-color)] dark:text-[var(--dark-text-color)]">
      <div className="flex flex-col lg:flex-row justify-center gap-10 px-4 lg:ml-28 md:px-20">
        <div className="w-[330px] lg:w-[600px] shadow-2xl p-4 lg:pl-2  lg:pt-2 bg-white rounded-md  dark:bg-gray-800" data-aos="slide-right">
          <h1 className="text-2xl lg:text-3xl pt-1 pb-2 font-bold text-center lg:text-left text-black">
            Experience Comfort with SOM-Airline
          </h1>
          <p className="text-center lg:text-left text-black">
            At SOM-Airline, we prioritize your comfort and safety. Fly with us to experience world-class service and hospitality.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-sky-500 py-1 font-serif mt-2 p-3 text-white border-2 border-black rounded-md shadow-2xl w-full lg:w-auto dark:bg-sky-600 dark:border-gray-700">
              Join Us
            </button>
          </div>
        </div>

        <div className="flex flex-col  gap-2 flex-wrap mt-10 ">
          <div className="bg-white text-black rounded-md h-[60px] m-3 w-full sm:w-[210px] shadow-2xl dark:bg-gray-800 dark:text-white">
            <div className="flex items-center justify-center gap-24 lg:gap-6">
              <i className="fa-solid text-sky-500 sm:mr-0 mr-12 text-2xl fa-handshake-simple" data-aos="fade-up"></i>
              <div>
                <h1 data-aos="fade-up">Welcome</h1>
                <h1 data-aos="fade-up">SOM-Airline</h1>
              </div>
            </div>
          </div>

          <div className="bg-white h-[60px] text-black rounded-md m-3 w-full sm:w-[210px] shadow-2xl dark:bg-gray-800 dark:text-white">
            <div className="flex items-center justify-center gap-32 lg:gap-6">
              <div className="flex gap-32 lg:gap-6 items-center">
                <i className="fa-solid text-sky-500 text-2xl fa-earth-americas"></i>
                <div data-aos="fade-up">
                  <h1>Explore</h1>
                  <h1>The World</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-[60px] text-white rounded-md m-3 w-full sm:w-[210px] shadow-2xl dark:bg-gray-800 dark:text-black">
            <div className="flex items-center justify-center sm:gap-4 gap-12">
              <div className="flex items-center gap-32 lg:gap-6">
                <i className="fa-solid text-sky-500 text-2xl fa-plane"></i>
                <div data-aos="fade-up">
                  <h1 className="text-black">Fly</h1>
                  <h1 className="text-black">With Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 flex-wrap mt-10 justify-center lg:justify-start">
          <div className="bg-white text-black rounded-md h-[60px] m-3 w-full sm:w-[200px] shadow-2xl dark:bg-gray-800 dark:text-white">
            <div className="flex items-center gap-32 lg:gap-6 justify-center">
              <i className="fa-solid text-2xl text-sky-500 fa-handshake-simple"></i>
              <div data-aos="fade-up">
                <h1>Welcome</h1>
                <h1>Aboard</h1>
              </div>
            </div>
          </div>

          <div className="bg-white h-[60px] text-black rounded-md m-3 w-full sm:w-[210px] shadow-2xl dark:bg-gray-800 dark:text-white">
            <div className="flex items-center justify-center gap-5">
              <div className="flex gap-32 lg:gap-6 items-center">
                <i className="fa-solid text-2xl text-sky-500 fa-earth-americas"></i>
                <div data-aos="fade-up">
                  <h1>Discover</h1>
                  <h1>New Horizons</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-[60px] text-white rounded-md m-3 w-full sm:w-[210px] shadow-2xl dark:bg-gray-800 dark:text-black">
            <div className="flex items-center justify-center sm:gap-2 gap-5">

              <div className="flex items-center gap-32 lg:gap-6">
                <i className="fa-solid text-sky-500 sm:pr-0 pr-16 text-2xl fa-person-walking-luggage"></i>
                <div data-aos="fade-up">
                  <h1 className="text-black">Fly High</h1>
                  <h1 className="text-black">With Us</h1>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseThree;
