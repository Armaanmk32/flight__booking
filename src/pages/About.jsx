import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import passanger2 from "../Images/passanger2.jpg";
import diyaradaAbout from "../Images/diyaradaAbout.jpg";
import diyaradaAbout3 from "../Images/diyaradaAbout3.jpg";
import Footer from "../Components/Footer";
import Header1 from "../Components/Header1";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      <Header1 />
      
      <div className="items-center text-center pt-10">
        <h1 className="font-bold text-2xl sm:text-4xl inline-block overflow-hidden whitespace-nowrap border-r-4 border-[var(--text-color)] animate-typing-loop dark:border-white">About Us</h1>
        <h1 className="font-thin text-xl">Come to us with efficiency and speed</h1>
      </div>

      <div className="sm:flex justify-center pt-32 sm:gap-32 sm:mx-0 mx-5">
        <div className="animate-slide-in-left">
          <p className="font-bold sm:ml-0 ml-20 font-serif text-3xl pb-5 dark:text-white">Our Vision</p>
          <p className="dark:text-gray-300">Our vision is to ignite a revolution</p>
          <p className="dark:text-gray-300">in innovation, creating a world where</p>
          <p className="dark:text-gray-300">technology and sustainability go hand</p>
          <p className="dark:text-gray-300">in hand. We aspire to be the trailblazers</p>
          <p className="dark:text-gray-300">of progress, leading</p>
          <p className="pt-5 dark:text-gray-300">forge a future of boundless opportunities</p>
          <p className="dark:text-gray-300">for all. Our dream is to seamlessly blend</p>
          <p className="dark:text-gray-300">creativity and cutting-edge technology, unlocking</p>
          <p className="dark:text-gray-300">enriching lives worldwide.</p>
          <p className="pt-5 dark:text-gray-300">We envision a future where our groundbreaking</p>
          <p className="dark:text-gray-300">a global transformation towards</p>
        </div>

        <div>
          <img className="sm:w-[300px] w-[350px] h-[450px] rounded mt-5 sm:mt-0 animate-slide-in-right" src={diyaradaAbout} alt="Diyarada About" />
        </div>
      </div>

      <div className="sm:flex justify-center pt-32 gap-32 sm:mx-0 mx-5">
        <div>
          <img className="sm:w-[300px] w-[350px] h-[400px] rounded" data-aos="slide-right" src={diyaradaAbout3} alt="Diyarada About 3" />
        </div>
        <div>
          <p className="font-bold font-serif text-3xl pb-5 sm:mt-0 mt-5 dark:text-white" data-aos="slide-left">Our Approach</p>
          <p className="dark:text-gray-300" data-aos="slide-left">Our Approach is to ignite a revolution</p>
          <p className="dark:text-gray-300" data-aos="slide-left">in innovation, creating a world where</p>
          <p className="dark:text-gray-300" data-aos="slide-left">technology and sustainability go hand</p>
          <p className="dark:text-gray-300" data-aos="slide-left">in hand. We aspire to be the trailblazers</p>
          <p className="dark:text-gray-300" data-aos="slide-left">of progress, leading</p>
          <p className="pt-5 dark:text-gray-300" data-aos="slide-left">forge a future of boundless opportunities</p>
          <p className="dark:text-gray-300" data-aos="slide-left">for all. Our dream is to seamlessly blend</p>
          <p className="dark:text-gray-300" data-aos="slide-left">creativity and cutting-edge technology, unlocking</p>
          <p className="dark:text-gray-300" data-aos="slide-left">enriching lives worldwide.</p>
          <p className="pt-5 dark:text-gray-300" data-aos="slide-left">We envision a future where our groundbreaking</p>
          <p className="dark:text-gray-300" data-aos="slide-left">a global transformation towards</p>
        </div>
      </div>

      <div className="sm:flex justify-center pt-32 gap-32 sm:mx-0 mx-5">
        <div data-aos="fade-up">
          <p className="font-bold font-serif text-3xl pb-5 text-center sm:mt-0 mt-5 dark:text-white">Our Process</p>
          <p className="dark:text-gray-300" data-aos="fade-up">Our Process is to ignite a revolution</p>
          <p className="dark:text-gray-300" data-aos="fade-up">in innovation, creating a world where</p>
          <p className="dark:text-gray-300" data-aos="fade-up">technology and sustainability go hand</p>
          <p className="dark:text-gray-300" data-aos="fade-up">in hand. We aspire to be the trailblazers</p>
          <p className="dark:text-gray-300" data-aos="fade-up">of progress, leading</p>
          <p className="pt-5 dark:text-gray-300" data-aos="fade-up">forge a future of boundless opportunities</p>
          <p className="dark:text-gray-300" data-aos="fade-up">for all. Our dream is to seamlessly blend</p>
          <p className="dark:text-gray-300" data-aos="fade-up">creativity and cutting-edge technology, unlocking</p>
          <p className="dark:text-gray-300" data-aos="fade-up">enriching lives worldwide.</p>
          <p className="pt-5 dark:text-gray-300" data-aos="fade-up">We envision a future where our groundbreaking</p>
          <p className="dark:text-gray-300" data-aos="fade-up">a global transformation towards</p>
        </div>
        <div>
          <img className="sm:w-[300px] w-[350px] h-[400px] rounded" data-aos="slide-left" src={passanger2} alt="Passanger 2" />
        </div>
      </div>

      <div className="sm:flex justify-center pt-32 gap-20 sm:mx-0 mx-5">
        <div>
          <p className="font-bold font-serif text-3xl pb-3 dark:text-white" data-aos="slide-right">Our Service</p>
          <p className="dark:text-gray-300" data-aos="slide-right">Our skills lie in seamlessly integrating cutting-edge technology</p>
          <p className="dark:text-gray-300 pb-5" data-aos="slide-right">with strategic thinking to deliver impactful solutions.</p>
          <div>
            <div className="flex" data-aos="slide-left">
              <p>Economy</p>
              <p className="pl-64">89%</p>
            </div>
            <div className="flex" data-aos="slide-right">
              <p className="border-2 border-black sm:w-72 w-64 h-0"></p>
              <p className="border-2 border-gray-600 w-20 h-0"></p>
            </div>
          </div>

          <div className="pt-5" data-aos="slide-left">
            <div className="flex">
              <p>Business</p>
              <p className="pl-64">91%</p>
            </div>
            <div className="flex" data-aos="slide-right">
              <p className="border-2 border-black sm:w-80 w-72 h-0"></p>
              <p className="border-2 border-gray-600 w-12 h-0"></p>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex" data-aos="slide-left">
              <p>Vip</p>
              <p className="pl-72">67%</p>
            </div>
            <div className="flex" data-aos="slide-left">
              <p className="border-2 border-black sm:w-56 w-48 h-0"></p>
              <p className="border-2 border-gray-600 w-36 h-0"></p>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="flex sm:gap-20 gap-5 sm:pt-0 pt-10">
            <div className="text-center font-bold" data-aos="slide-right">
              <p className="text-6xl">10+</p>
              <p>years we working</p>
            </div>
            <div className="text-center font-bold" data-aos="slide-left">
              <p className="text-6xl">3,000+</p>
              <p>Assistants</p>
            </div>
          </div>

          <div className="flex sm:gap-20 gap-5 pt-20">
            <div className="text-center font-bold" data-aos="slide-right">
              <p className="text-6xl">10,900+</p>
              <p>Clients</p>
            </div>
            <div className="text-center font-bold" data-aos="slide-left">
              <p className="text-6xl">500</p>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;
