import imageone from "../Images/sky.jpg";
import flyght from "../Images/flyght.png";
import {Link} from "react-router-dom"
function Header() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[700px] sm:h-[600px] relative top-0 transition-colors duration-100"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${imageone})`,
        }}
      >
        <div className="sm:flex justify-between sm:px-20">
          <div className="sm:pt-40 pt-10 sm:pl-20 pl-5 animate-slide-in-left">
            {/* Apply continuous typing animation to the welcome text */}
            <p className="font-bold text-2xl sm:text-4xl text-white inline-block overflow-hidden whitespace-nowrap border-r-4 border-[var(--text-color)] animate-typing-loop">
              Welcome to our SomAirline
            </p>
            <h1 className="font-serif text-3xl pt-2 text-white">Save Time &</h1>
            <h1 className="font-serif text-3xl text-white">Fly with comfort</h1>

            <Link to="/bookin">
            <button className="bg-sky-500 sm:px-16 px-10 border-2 border-white mt-6 py-2 rounded-md text-2xl text-white">
              Booking Now
            </button>
            </Link>

          </div>

          <img
            className="sm:w-[800px] sm:h-[800px] w-[600px] h-[600px] pb-48 airplane-takeoff-left" 
            src={flyght}
            alt="Airplane"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
