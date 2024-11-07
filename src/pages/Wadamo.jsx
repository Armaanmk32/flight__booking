import Header1 from "../Components/Header1";
import dubai from "../Images/dubai.jpg";
import farance from "../Images/farance.jpg";
import maldevis from "../Images/maldevis.jpg";
import natherland from "../Images/natherland.jpg";
import newyor from "../Images/newyor.jpg";
import norway from "../Images/norway.jpg";
import sweden from "../Images/sweden.jpg";
import toronto from "../Images/toronto.jpg";
import turkey from "../Images/turkey.jpg";
import Footer from "../Components/Footer";

function Wadamo() { 

  

    return ( 
        <div>
        <Header1/>
        <div className="px-4 md:px-0">
            {/* First Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-[550px_260px_260px] gap-10 justify-center mt-10">
                <div className="relative overflow-hidden rounded-3xl group" data-aos="slide-right">
                    <img className="w-full h-[300px]" src={dubai} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                       
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                        
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                        Dubai
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="slide-left">
                    <img className="w-full h-[300px]" src={farance} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                        Paris
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="fade-up">
                    <img className="w-full h-[300px]" src={sweden} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                        Sweden
                    </div>
                </div>
            </div>

            {/* Second Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-[260px_260px_550px] gap-10 justify-center mt-10" data-aos="slide-left">
                <div className="relative overflow-hidden rounded-3xl group">
                    <img className="w-full h-[300px]" src={natherland} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Book Now
                        </button>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                      Natherland
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="fade-up">
                    <img className="w-full h-[300px]" src={newyor} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                      Newyor
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="slide-right">
                    <img className="w-full h-[300px]" src={norway} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                    Norway
                    </div>
                </div>
            </div>


            
            <div className="grid grid-cols-1 md:grid-cols-[550px_260px_260px] gap-10 justify-center mt-10" data-aos="slide-left">
                <div className="relative overflow-hidden rounded-3xl group">
                    <img className="w-full h-[300px]" src={maldevis} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now 
                        </button>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                    Sweden
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="fade-up">
                    <img className="w-full h-[300px]" src={toronto} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                       Toronto
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl group" data-aos="slide-right">
                    <img className="w-full h-[300px]" src={turkey} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center z-10">
                        <button className="bg-white text-black px-8 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Book Now
                        </button>
                    </div>
                    <div className="absolute left-4 bottom-2 text-white text-xl font-bold z-20">
                      Turkey
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>

    );
}

export default Wadamo;