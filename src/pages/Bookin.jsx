import React, { useState, useEffect } from 'react';
import MainBookin from './MainBookin';
import Header1 from '../Components/Header1';
import axios from "axios";

const Bookin = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [price, setPrice] = useState('Price not available');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(0);
  const [flightClass, setFlightClass] = useState('Economy');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [getData, setgetData] = useState([]);

  const isLogin = localStorage.getItem("user");

  const prices = {
    // Mogadisho Safarada
    "London-Mogadisho": 1500,
    "Mogadisho-London": 1500,
    "Istanbul-Mogadisho": 256,
    "Mogadisho-Istanbul": 256,
    "Kuala Lumpur-Mogadisho": 2333,
    "Mogadisho-Kuala Lumpur": 2333,
    "Doha-Mogadisho": 2323,
    "Mogadisho-Doha": 2323,
    "New York-Mogadisho": 6575,
    "Mogadisho-New York": 6575,
    "Paris-Mogadisho": 6863,
    "Mogadisho-Paris": 6863,
    "Malaysia-Mogadisho": 588,
    "Mogadisho-Malaysia": 588,
    // Singapore Safarada
    "London-Singapore": 393,
    "Singapore-London": 393,
    "Istanbul-Singapore": 339.99,
    "Singapore-Istanbul": 339.99,
    "Kuala Lumpur-Singapore": 839,
    "Singapore-Kuala Lumpur": 839,
    "Doha-Singapore": 4748,
    "Singapore-Doha": 4748,
    "New York-Singapore": 3829,
    "Singapore-New York": 3829,
    "Paris-Singapore": 683,
    "Singapore-Paris": 683,
    "Malaysia-Singapore": 629,
    "Singapore-Malaysia": 629,
    // London Safarada
    "Istanbul-London": 383.99,
    "London-Istanbul": 383.99,
    "Kuala Lumpur-London": 4949,
    "London-Kuala Lumpur": 4949,
    "Doha-London": 3378,
    "London-Doha": 3378,
    "New York-London": 3088,
    "London-New York": 3088,
    "Paris-London": 6383,
    "London-Paris": 6383,
    // Kuala Lumpur Safarada
    "Doha-Kuala Lumpur": 350,
    "Kuala Lumpur-Doha": 350,
    "New York-Kuala Lumpur": 580,
    "Kuala Lumpur-New York": 580,
    "Paris-Kuala Lumpur": 490,
    "Kuala Lumpur-Paris": 490,
    "Malaysia-Kuala Lumpur": 900,
    "Kuala Lumpur-Malaysia": 900,
    // New York Safarada
    "Paris-New York": 799,
    "New York-Paris": 799,
    "Malaysia-New York": 6543,
    "New York-Malaysia": 6543,
  };

  // Calculate and update price whenever fromCity, toCity, or passengers change
  useEffect(() => {
    if (fromCity && toCity) {
      const route = `${fromCity.trim()}-${toCity.trim()}`; // Trim whitespace
      console.log(`Route: ${route}`); // Debugging to check route

      const basePrice = prices[route] !== undefined ? prices[route] : 'Price not available';

      // Only update the price if it's available
      if (basePrice !== 'Price not available') {
        setPrice(basePrice * passengers); // Multiply by number of passengers
      } else {
        setPrice('Price not available');
      }
    } else {
      setPrice('Price not available');
    }
  }, [fromCity, toCity, passengers]); // Recalculate price on change of fromCity, toCity, or passengers

  const handleBooking = () => {
    if (!isLogin) {
      alert("Please login first");
      return;
    }

    axios.post("http://localhost:1000/create", {
      "from": fromCity,
      "to": toCity,
      "departure": departureDate,
      "return": returnDate,
      "passanger": passengers,
      "price": price,
      "class": flightClass,
      "name": name,
      "email": email
    }).then((response) => {
      setgetData(response.data);
      alert("Booking has been successfully made");
    }).catch((error) => {
      alert("Booking Failed");
      console.error(error);
    });
  };

  return (
    <div>
      <Header1 />
      <div className="bg-[url('/path-to-image.jpg')] bg-cover flex items-center justify-center sm:mt-0 mt-32 sm:mb-0 mb-28 h-screen">
        <div className="bg-sky-500 bg-opacity-80 sm:mb-0 mb-10 sm:mt-0 mt-24 p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-4">Search Flights</h2>
          <p className="text-sm sm:pb-6">Get the latest on our SomAirline response</p>

          <div className="flex flex-wrap gap-4 mb-4">
            {/* Name */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
              <label className="mb-2">Name:</label>
              <input
                type="text"
                className="p-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

          
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
              <label className="mb-2">Email:</label>
              <input
                type="email"
                className="p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* From City */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
              <label className="mb-2">From:</label>
              <select
                className="p-2 border rounded"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
              >
                <option value="">Select a city</option>
                <option value="Mogadisho">Mogadisho</option>
                <option value="London">London</option>
                <option value="Singapore">Singapore</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Istanbul">Istanbul</option>
                <option value="Doha">Doha</option>
                <option value="New York">New York</option>
                <option value="Paris">Paris</option>
              </select>
            </div>

            {/* To City */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
              <label className="mb-2">To:</label>
              <select
                className="p-2 border rounded"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
              >
                <option value="">Select a city</option>
                <option value="Mogadisho">Mogadisho</option>
                <option value="London">London</option>
                <option value="Singapore">Singapore</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Istanbul">Istanbul</option>
                <option value="Doha">Doha</option>
                <option value="New York">New York</option>
                <option value="Paris">Paris</option>
              </select>
            </div>

            {/* Departure Date */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
              <label className="mb-2">Departure:</label>
              <input
                type="date"
                className="p-2 border rounded"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>

            {/* Return Date */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
              <label className="mb-2">Return:</label>
              <input
                type="date"
                className="p-2 border rounded"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>

            {/* Passengers */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
              <label className="mb-2">Passengers:</label>
              <input
                type="number"
                className="p-2 border rounded"
                min="1"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              />
            </div>

            {/* Flight Class */}
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
              <label className="mb-2">Class:</label>
              <select
                className="p-2 border rounded"
                value={flightClass}
                onChange={(e) => setFlightClass(e.target.value)}
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </div>
          </div>

          {/* Price and Book Button */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-6">
            <p className="text-lg mb-4 md:mb-0">Price: {price}</p>
            <button
              className="bg-white  dark:bg-white dark:text-white text-black py-2 px-6 rounded"
              onClick={handleBooking}
            >
              Book now
            </button>
          </div>
        </div>
      </div>
      <MainBookin />
    </div>
  );
};

export default Bookin;
