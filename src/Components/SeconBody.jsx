import diyaaradagacanta from "../Images/diyaaradagacanta.png";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

function SeconBody() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-0">
                {/* Image with slide-in-left animation */}
                <img
                    className="w-[500px] sm:shadow-none shadow-2xl h-[300px] md:w-[500px] md:h-[500px] rounded-2xl"
                    data-aos="slide-right"
                    src={diyaaradagacanta}
                />

                {/* Text content with slide-in-right animation */}
                <div className="w-full md:w-[500px] text-center md:text-left pt-10 md:pt-20 px-4 md:px-0" data-aos="slide-left">
                    <h6 className="font-extralight">What will you get</h6>
                    <h1 className="text-2xl md:text-4xl font-bold pb-5">Popular charter destinations</h1>
                    <p>
                        Our airline proudly connects you to some of the world's most exciting cities. Experience the vibrant culture and historic landmarks of London and Paris, where tradition meets modernity. Enjoy the dynamic energy of New York, the city that never sleeps, known for its skyline and bustling streets. Discover the stunning blend of old and new in Istanbul, a city rich in history and diversity. Lastly, explore the futuristic skyline and luxurious offerings of Doha, a destination that combines innovation with rich cultural heritage.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SeconBody;
