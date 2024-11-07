import girlTravel from "../Images/girlTravel.jpg";
import flyghtWindow from "../Images/flyghtWindow.jpg";
import manTravel from "../Images/manTravel.jpg";
import Footer from "../Components/Footer"
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

function MainBookin() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (

        <div>



        <div className="flex justify-center pt-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <img data-aos="slide-left"
                    className="w-full h-[300px] md:h-[500px] rounded object-cover"
                    src={girlTravel}
                    alt="Girl Traveling"
                />
                <div className="w-full h-[250px] md:h-[300px] mt-4 md:mt-10 rounded bg-gradient-to-r from-transparent to-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-transparent transition-all duration-500">
                    <h1 className="text-xl md:text-2xl mb-4 md:mb-5 border-b-2 font-bold border-black" data-aos="slide-left"> An Unforgettable Journey with SomAirline</h1>
                    <p className="text-sm md:text-base" data-aos="slide-right"> Traveling with SomAirline was an absolute delight! The friendly crew made me feel welcome from the moment I boarded. The seats were incredibly comfortable, and the in-flight service was exceptional, with delicious meals and attentive care. I’ve never experienced such a smooth and enjoyable flight. SomAirline is now my top choice for every journey!</p>
                </div>

                <div className="w-full h-[250px] md:h-[300px] mt-4 md:mt-10 rounded bg-gradient-to-r from-transparent to-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-transparent transition-all duration-500">
                    <h1 className="text-xl md:text-2xl mb-4 md:mb-5 border-b-2 font-bold border-black" data-aos="slide-left"> Why I Chose SomAirline for My Next Adventure</h1>
                    <p className="text-sm md:text-base" data-aos="slide-right"> I’ve been searching for the perfect airline to book my upcoming trip, and SomAirline stood out to me immediately. With its outstanding reputation for punctual flights and exceptional customer service, it was an easy decision. The booking process was seamless, and I felt reassured by their affordable prices and excellent safety record. I can’t wait to experience their renowned hospitality firsthand. SomAirline is definitely my airline of choice!</p>
                </div>

                <img data-aos="slide-left"
                    className="w-full h-[300px] md:h-[500px] rounded object-cover"
                    src={flyghtWindow}
                    alt="Flight Window"
                />

                <img data-aos="slide-right"
                    className="w-full h-[300px] md:h-[500px] rounded object-cover"
                    src={manTravel}
                    alt="Man Traveling"
                />

                <div className="w-full h-[250px] md:h-[300px] mt-4 md:mt-10 rounded bg-gradient-to-r from-transparent to-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-transparent transition-all duration-500">
                    <h1 className="text-xl md:text-2xl mb-4 md:mb-5 border-b-2 font-bold border-black" data-aos="slide-right"> Ready to Book My Flight with SomAirline!</h1>
                    <p className="text-sm md:text-base" data-aos="slide-left"> I’ve been searching for the perfect airline to book my upcoming trip, and SomAirline stood out to me immediately. With its outstanding reputation for punctual flights and exceptional customer service, it was an easy decision. The booking process was seamless, and I felt reassured by their affordable prices and excellent safety record. I can’t wait to experience their renowned hospitality firsthand. SomAirline is definitely my airline of choice!</p>
                </div>
            </div>
        </div>
        <Footer/>
        </div>

    );
}

export default MainBookin;
