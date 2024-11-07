import london from "../Images/London.jpg";
import paris from "../Images/paris.jpg";
import malaysia from "../Images/malaysia.jpg";
import istanbul from "../Images/istanbul.webp";
import newyork from "../Images/newyork.jpeg";
import doha from "../Images/doha.jpeg";
import {Link} from "react-router-dom"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

function PartSecondBody() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (
        <div>

       
        <div className="px-4 md:px-0">
            {/* First Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-[550px_260px_260px] gap-10 justify-center mt-10">
                <div className="relative overflow-hidden rounded-3xl group" data-aos="slide-right">
                    <img className="w-full h-[300px]" src={london} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">

                    <Link to="/bookin">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                       </Link>

                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                        London
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="slide-left">
                    <img className="w-full h-[300px]" src={paris} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                       <Link to="/bookin">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                       </Link>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                        Paris
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="fade-up">
                    <img className="w-full h-[300px]" src={malaysia} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        
                        <Link to="/bookin">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                        </Link>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                        Malaysia
                    </div>
                </div>
            </div>

            {/* Second Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-[260px_260px_550px] gap-10 justify-center mt-10" data-aos="slide-left">
                <div className="relative overflow-hidden rounded-3xl group">
                    <img className="w-full h-[300px]" src={istanbul} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                    <Link to="/bookin">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                    </Link>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                        Istanbul
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="fade-up">
                    <img className="w-full h-[300px]" src={doha} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                       
                       <Link to="/bookin">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                       </Link>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                        Doha
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="slide-right">
                    <img className="w-full h-[300px]" src={newyork} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        <Link to="/bookin">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                        </Link>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                        New York
                    </div>
                </div>
            </div>

        </div>
            <Link to="/wadamo">
            <button className="bg-sky-500 px-10 text-white text-center mt-7 ml-[120px] sm:ml-[600px] rounded py-2"> See more</button>
            </Link>
        </div>
    );
}

export default PartSecondBody;
