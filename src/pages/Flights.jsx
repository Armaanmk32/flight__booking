import Dashboard from "./SideNave"
import axios from "axios"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Flights(){

    const [flights, setFlights] = useState([])
    const navigate = useNavigate()

    const getAdmin = localStorage.getItem("admin")
    const protectRouter = ()=>{

        if(!getAdmin){
            navigate("/login")
        }
    }

    const handleFlight =()=>{
        axios.get("http://localhost:1000/results").then((response)=>{
            setFlights(response.data)
        }).catch((error)=> console.log(error))
    }

    useEffect(()=>{
        handleFlight()
        protectRouter()
    })



    return  <div>
            <Dashboard/>
            <div className="  sm:ml-[20%] pt-10">
           <table className="border-2 border-sky-500  px-36">
            <tr className="border-2 border-sky-500 sm:p-3">
            <th className="border-2 border-sky-500  p-1">Nme</th>
            <th className="border-2 border-sky-500  p-1">Email</th>
            <th className="border-2 border-sky-500  p-1">From</th>
            <th className="border-2 border-sky-500  p-1">To</th>
            <th className="border-2 border-sky-500  p-1">Departure</th>
            <th className="border-2 border-sky-500  p-1">Return</th>
            <th className="border-2 border-sky-500  p-1">Passangers</th>
            <th className="border-2 border-sky-500  p-1">Price</th>
            <th className="border-2 border-sky-500  p-1">Class</th>

            </tr>

                {
                    flights.map((flight)=>{
                        return  <tr>
                        <td className="border-2 border-sky-500  p-1">{flight.name}</td>
                        <td className="border-2 border-sky-500  p-1">{flight.email}</td>
                        <td className="border-2 border-sky-500  p-1">{flight.from}</td>
                        <td className="border-2 border-sky-500  p-1">{flight.to} </td>
                        <td className="border-2 border-sky-500  p-1">{flight.departure}</td>
                        <td className="border-2 border-sky-500  p-1">{flight.return}</td>
                        <td className="border-2 border-sky-500  p-1">{flight.passanger}</td>
                        <td className="border-2 border-sky-500  p-1">{flight.price}</td>
                        <td className="border-2 border-sky-500  p-1">{flight.class}</td>

                     </tr>
                    })
                }
        </table>
    </div>
        </div> 
           
           
}
export default Flights