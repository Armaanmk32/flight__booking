import TwoPassanger from "../Images/TwoPassanger.JPG";
import captanPilot from "../Images/captanPilot.jpg";
import manPassanger from "../Images/manPassanger.jpg";

import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

function PassengerPage() {
    
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8 bg-[var(--background-color)] text-[var(--text-color)] dark:bg-[var(--dark-background-color)] dark:text-[var(--dark-text-color)]">
            <div className="mt-20 text-center">
                <h1 className="text-2xl font-bold pb-4 inline-block overflow-hidden whitespace-nowrap border-r-4 border-black animate-typing-loop dark:border-gray-400">
                    Checkout latest aviation
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                <div>
                    <img
                        className="w-full h-[260px] rounded-t-2xl object-cover"
                        data-aos="slide-left"
                        src={TwoPassanger}
                        alt="Two Passangers"
                    />
                    <div className="bg-white h-[180px] border-2 border-black w-full text-center dark:bg-gray-800 dark:border-gray-700" data-aos="slide-left">
                        <div>
                            <button className="bg-sky-500 px-10 border-2 border-black py-1 mt-5 rounded text-white dark:bg-sky-600 dark:border-gray-700">
                                19/7/2016
                            </button>
                            <h1 className="px-4 sm:px-6 lg:px-10 text-xl sm:text-2xl font-semibold pt-2 dark:text-black">
                                Few reasons people choose to fly on private jet charters
                            </h1>
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        className="w-full h-[260px] rounded-t-2xl object-cover"
                        data-aos="fade-up"
                        src={captanPilot}
                        alt="Captain Pilot"
                    />
                    <div className="bg-white h-[180px] border-2 border-black w-full text-center dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
                        <div>
                            <button className="bg-sky-500 px-10 py-1 mt-5 border-2 border-black rounded text-white dark:bg-sky-600 dark:border-gray-700">
                                22/6/2018
                            </button>
                            <h1 className="px-4 sm:px-6 lg:px-10 text-xl sm:text-2xl font-semibold pt-2 dark:text-gray-300">
                                A first-time flyer’s guide to private jet charters
                            </h1>
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        className="w-full h-[260px] rounded-t-2xl object-cover"
                        data-aos="fade-right"
                        src={manPassanger}
                        alt="Man Passenger"
                    />
                    <div className="bg-white h-[180px] border-2 border-black w-full text-center dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right">
                        <div>
                            <button className="bg-sky-500 px-10 py-1 mt-5 border-2 border-black rounded text-white dark:bg-sky-600 dark:border-gray-700">
                                8/4/2015
                            </button>
                            <h1 className="px-4 sm:px-6 lg:px-10 text-xl sm:text-2xl font-semibold pt-2 dark:text-gray-300">
                                Rent a private jet: everything you need to know about cost
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassengerPage;
