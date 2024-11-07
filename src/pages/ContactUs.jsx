import React from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer';
import { useState } from "react"
import axios from "axios"
function ContactUs() {

  const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")


  const handleClick = (event)=>{
    event.preventDefault()
    axios.post("http://localhost:1000/report",{
        "name": name,
        "email": email,
        "description": description
    }).then(()=>{
        alert("Report has been sent successfully")
        
    })
}


  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      <Header1/>
      <section className="text-center py-16 shadow-2xl">
        <h2 className="text-4xl font-semibold inline-block overflow-hidden whitespace-nowrap border-r-4 border-[var(--text-color)] animate-typing-loop">Contact Us</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="flex flex-col lg:flex-row justify-between px-4 lg:px-8 py-16 bg-[var(--card-background-color)] shadow-2xl">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan eros, sit amet auctor nunc.
          </p>
          <ul className="mt-6 space-y-3">
            <li><strong><i className="fa-solid text-sky-500 fa-location-dot"></i> Address:</strong> Mogadishu Eye, Banadir, Somalia</li>
            <li><strong><i className="fa-solid text-sky-500 fa-phone"></i> Phone Number:</strong> +252-61x-xxxx</li>
            <li><strong><i className="fa-solid text-sky-500 fa-envelope"></i> E-Mail:</strong> Crewcoder@email.com</li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-sky-500"><i className="fa-brands fa-square-x-twitter"></i> Twitter</a>
            <a href="#" className="text-sky-500"><i className="fa-brands fa-square-facebook"></i> Facebook</a>
            <a href="#" className="text-sky-500"><i className="fa-brands fa-square-instagram"></i> Instagram</a>
            <a href="#" className="text-sky-500"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-8">
          <h3 className="text-2xl font-semibold">Send a Message</h3>
          <form className="mt-6 space-y-4">
            <input value={name} onChange={(event)=> setName(event.target.value)}
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            />
            <input value={email} onChange={(event)=> setEmail(event.target.value)}
              type="email"
              placeholder="E-mail address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            />
            <textarea value={description} onChange={(event)=> setDescription(event.target.value)}
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            ></textarea>
            <button onClick={handleClick}
              type="submit"
              className="w-full p-3 bg-sky-500 text-white font-semibold rounded-md hover:bg-black"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="px-4 lg:px-8 py-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030948.8030006777!2d43.934992241895014!3d4.105914665615316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d60adbf85fa73a3%3A0x836bc67a0e4d4629!2sSomalia!5e0!3m2!1sen!2sso!4v1693810734943!5m2!1sen!2sso"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </section>
      <Footer/>
    </div>
  );
}

export default ContactUs;
