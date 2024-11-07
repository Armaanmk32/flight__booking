
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
function Login(){

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const handleClick = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/user/login",{
            "email": email,
            "password": password
        }).then((response)=>{
            if(response.data.error){
                alert("Inccorect Email or Password")
            }
            else{
                alert("Login Success")
                localStorage.setItem("user", JSON.stringify(response.data))
                navigate("/")
            }
        })
    }

    return <div className="flex justify-center sm:my-16 my-20">

        
        <form className="bg-sky-400 sm:w-[400px] w-[350px] sm:h-[400px] h-[350px] sm:px-10 sm:py-10 px-5 py-10 rounded">
               
                <input value={email} onChange={(event)=> setEmail(event.target.value)} className="w-[300px] border-2 rounded p-2" type="text" placeholder="Enter email" />
                <br />
                <br />
                <input value={password} onChange={(event)=> setPassword(event.target.value)} className="w-[300px] border-2 rounded p-2" type="text" placeholder="Enter password" />
                <br />
                <br />
                <button onClick={handleClick} className="bg-sky-500 text-white w-[300px] rounded border-2 py-3 sm:mt-10 mt-5">Login </button>
                <p className="text-white pt-10">Dont't have account yet? <Link to="/register">Regist here</Link></p>
            </form>

            </div>
}

export default Login