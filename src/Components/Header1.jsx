import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Header1() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // State cusub oo lagu hayo theme

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const Logout = ()=>{
    localStorage.clear()
  }

  const getUser = localStorage.getItem("user")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="relative mb-5 sm:mb-0">
      <div className="sm:flex justify-between sm:px-16 px-5 items-center py-4 ">
        <h1 className="sm:text-4xl text-2xl font-bold animate-slide-in-left">
          SOM{" "}
          <span className="text-sky-500">Airline</span>
        </h1>

        <ul
          style={{ display: isOpen ? "block" : "" }}
          className="gap-8 font-semibold sm:ml-20 sm:pt-0 pt-5 sm:flex hidden "
        >
          <Link to="/">
            <li className="hover:border-b-2 border-white">Home</li>
          </Link>

          <Link to="/about">
            <li className="hover:border-b-2 border-white">About</li>
          </Link>

          <Link to="/contactus">
            <li className="hover:border-b-2 border-white">Contact Us</li>
          </Link>
        </ul>

        <div style={{ display: isOpen ? "none" : "block" }}>
          <i
            onClick={handleOpen}
            className="absolute text-5xl right-3 top-4 sm:hidden fa-solid fa-bars"
          ></i>
        </div>
        <i
          onClick={handleClose}
          style={{ display: isOpen ? "block" : "none" }}
          className="absolute text-5xl right-3 top-4 fa-solid fa-circle-xmark hidden"
        ></i>

        <div
          style={{ display: isOpen ? "block" : "" }}
          className="sm:flex gap-4 hidden"
        >

          {
            getUser ? <div> <Link to="/login"><button onClick={Logout} className="bg-sky-500 px-6 border-2 border-black py-1 rounded text-white"> Logout </button></Link>  </div> : <div> <Link to="/login">
            <button className="py-1 bg-sky-500 rounded-md border-2 px-5 animate-slide-in-right">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="py-1  bg-sky-500 rounded-md border-2 sm:m-2 m-2 px-5 animate-slide-in-right">SignUp </button>
          </Link>
          </div>
          }
          
        </div>

         <div className="flex gap-6">

        <i
          onClick={toggleTheme}
          className={`text-4xl ${theme === "light" ? "text-black" : "text-yellow-500"} absolute text-4xl right-32 top-4 fa-solid fa-moon cursor-pointer`}
          ></i>

          <Link to="/admin">
           <i class=" absolute text-4xl right-20 top-4 text-sky-500 fa-solid fa-user"></i>
          </Link>

          </div>

      </div>
    </div>
  );
}
export default Header1;
