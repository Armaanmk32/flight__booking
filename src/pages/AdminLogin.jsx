import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
function AdminLogin(){

    
    const [username, setUsernmae] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const handleget = (event)=>{
        event.preventDefault()
        
        axios.post("http://localhost:1000/admin/create",{
            "username": username,
            "password": password
        }).then((response)=>{
            if(response.data.error){
                alert("incorrect username or password")
            }
            else{
                alert("login success")
                localStorage.setItem("admin", JSON.stringify(response.data))
                navigate("/dash")
            }
        })
        
    }
    useEffect(()=>{
        
    })


    return <div className="flex justify-center sm:my-16 my-20">

        
    <form className="bg-sky-400 sm:w-[400px] w-[350px] sm:h-[400px] h-[350px] sm:px-10 sm:py-10 px-5 py-10 rounded">
           
            <input value={username} onChange={(event)=> setUsernmae(event.target.value)} className="w-[300px] border-2 rounded p-2" type="text" placeholder="Enter username" />
            <br />
            <br />
            <input value={password} onChange={(event)=> setPassword(event.target.value)} className="w-[300px] border-2 rounded p-2" type="text" placeholder="Enter password" />
            <br />
            <br />
            <button onClick={handleget} className="bg-sky-500 text-white w-[300px] rounded border-2 py-3 sm:mt-10 mt-5">Login </button>
        </form>

        </div>

}
export default AdminLogin