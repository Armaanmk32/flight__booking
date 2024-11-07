import React, { useState, useEffect } from "react";
import axios from "axios";
import SideNave from "./SideNave";

function Dashboard() {
  const [totalData, setTotalData] = useState({ total: 0, passengers: 0 });

  const fetchTotalData = async () => {
    try {
      // Fetch total passengers
      const passengerResponse = await axios.get("http://localhost:1000/passanger/total");
      const passengers = passengerResponse.data.passanger;

      // Fetch total price
      const priceResponse = await axios.get("http://localhost:1000/bookings/totalPrice");
      const totalPrice = priceResponse.data.totalPrice;

      // Set data to state
      setTotalData({ total: totalPrice, passengers });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTotalData();
  }, []);

  return (
    <div>
      <SideNave />
      <div className=" sm:ml-[25%] pt-10">
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white hover:bg-sky-500 hover:text-white p-4 rounded-lg shadow">
            <h4 className="text-lg font-bold">Total Price</h4>
            <p className="text-2xl font-semibold">${totalData.total}</p>
          </div>

          <div className="bg-white hover:bg-sky-500 hover:text-white p-4 rounded-lg shadow">
            <h4 className="text-lg font-bold">Total Passengers</h4>
            <p className="text-2xl font-semibold">{totalData.passengers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;