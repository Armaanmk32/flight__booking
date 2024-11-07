
import { useState, useEffect } from "react"
import axios from "axios"
import SideNave from "./SideNave"
function Report(){

    const [getReport, setGetReport] = useState([])


    const getAllReports = ()=>{
        axios.get("http://localhost:1000/report/get").then((response)=>{
            setGetReport(response.data)
        }).catch((error)=> console.log(error))
    }
    useEffect(()=>{
        getAllReports()
    },[])

    return <div className=" ">
        <SideNave/>
        <div className="sm:ml-[25%] ml-5 pt-10">


        {
            getReport.map((report)=>{
                return <div className="">  
                <div className="bg-white shadow-md w-[320px] h-[30px] rounded hover:bg-sky-500 hover:text-white  m-2 "> {report.name} </div>     
                  <div className="bg-white shadow-md w-[320px] h-[30px] rounded hover:bg-sky-500 hover:text-white  m-2 "> {report.email} </div>     
                 <div className="bg-white shadow-md w-[320px] h-[220px] rounded hover:bg-sky-500 hover:text-white p-2 m-2 "> {report.description} </div> 

                 </div>    
            })
        }
   
        </div>
      

        
      
    </div>
}
export default Report