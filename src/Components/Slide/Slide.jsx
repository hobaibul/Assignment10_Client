import React from 'react';
import { useEffect } from "react";
import { HSCarousel } from "preline";
import banner1 from '../../assets/cmmunity.webp'
import banner2 from '../../assets/event_meating.webp'
import banner3 from '../../assets/hiking.webp'

const Slide = () => {

    // Fix: Reinitialize Preline on component mount
    useEffect(() => {
        window.HSCarousel?.autoInit();
    }, []);
    return (

        <div>
            {/* Slider */}
            <div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "isInfiniteLoop": true,
  "slidesQty": 1
}' className="relative">
                <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide relative">
                   
                            <img
                                src={banner1}
                                alt="slide 1"
                                className="w-full h-96 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                      
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-bold text-white drop-shadow-lg">
                                    <h1 className='text-center w-8/12 mx-auto text-white'>Connect with supportive people and build strong relationships through shared hobbies.</h1>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide relative">
                            <img src={banner2} alt="" className='w-full h-96 object-cover' />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <h1 className='text-4xl text-center w-8/12 mx-auto text-white  font-bold  drop-shadow-lg'>Join inspiring community events where ideas grow through meaningful group collaboration.</h1>
                            </div>
                        </div>
                        <div className="hs-carousel-slide relative">
                            <img src={banner3} alt="" className='w-full h-96 object-cover' />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <h1 className='text-4xl text-center w-8/12 mx-auto text-white font-bold drop-shadow-lg'>Explore breathtaking mountain trails with friendly groups for unforgettable outdoor adventures.</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg">
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>

                <div className="hs-carousel-info inline-flex justify-center px-4 absolute bottom-3 start-[50%] -translate-x-[50%] bg-white rounded-lg">
                    <span className="hs-carousel-info-current me-1">0</span>
                    /
                    <span className="hs-carousel-info-total ms-1">0</span>
                </div>
            </div>
            {/* End Slider */}
        </div>
    );
};

export default Slide;