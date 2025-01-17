import React, { useState, useEffect } from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Top() {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Total number of slides
  const totalSlides = 3;

  // Handle next and previous slide changes
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides); // Loop back to the first slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides); // Loop back to the last slide
  };

  // Auto-slide functionality (change slides automatically every 3 seconds)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-[#F6F5E8] relative w-full h-96 flex">
      {/* Aesop aside */}
      <div className="w-1/4 flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-gray-800 ">Aesop</h2>
      </div>

      {/* Carousel wrapper */}
      <div className="w-3/4 relative h-full overflow-hidden rounded-lg">
        {/* Slide 1 */}
        <div
          className={`flex h-full duration-700 ease-in-out ${currentSlide === 0 ? 'block' : 'hidden'}`}
        >
          <div className="p-12 w-[900px]">
            <h3 className="text-2xl mb-9">Resurgent beginnings</h3>
            <p className="text-gray-700 mb-6">
              This new year, wishes for revitalised energy take form in a curated collection of gifts for family and close companions. Receive complimentary red envelopes with purchases over HKD 900 by entering NY25 at checkout
            </p>
            <div className="w-[300px]">
              <div className="relative flex items-center border border-black bg-transparent mb-8 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                <input
                  type="email"
                  className="bg-[#f6f5e8] text-black px-4 py-2 rounded-md pr-10 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                  placeholder="Explore seasonal gifts"
                />
                <ArrowForwardIcon className="absolute right-2 text-black cursor-pointer transition-all duration-300 ease-in-out hover:text-white" />
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div
            className="w-full h-[500px] bg-cover bg-center mb-44"
            style={{
              backgroundImage: "url('https://www.aesop.com/u1nb1km7t5q7/2MsEAyZPrCIuKcAHUMlVWL/87d3f93847d2fbc9f97d7f89f2f920b4/Aesop_Xin_Nian_2025_RTC_Web_Homepage_Primary_50-50_Desktop_XL_2560x1200px.jpg')",
            }}
          />
        </div>

        {/* Slide 2 */}
        <div
          className={`flex h-full duration-700 ease-in-out ${currentSlide === 1 ? 'block' : 'hidden'}`}
        >
          <div className="p-12 w-[900px]">
            <h5 className='text-sm'>Brilliant performers</h5>
            <h3 className="text-2xl mb-9">Immaculate to exfoliate. Lucent to brighten.</h3>
            <p className="text-gray-700 mb-6">
              Immaculate Facial Tonic and Lucent Facial Concentrate: applied in sequence, these vitamin-rich formulations leave the skin refined, balanced and hydrated.
            </p>
            <div className="w-[300px]">
              <div className="relative flex items-center border border-black bg-transparent mb-8 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                <input
                  type="email"
                  className="bg-[#f6f5e8] text-black px-4 py-2 rounded-md pr-10 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                  placeholder="Discover the duo"
                />
                <ArrowForwardIcon className="absolute right-2 text-black cursor-pointer transition-all duration-300 ease-in-out hover:text-white" />
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div
            className="w-full h-[500px] bg-cover bg-center mb-44"
            style={{
              backgroundImage: "url('https://www.aesop.com/u1nb1km7t5q7/2jAdfiUNjLMKm1ueWgKpPk/5f9bc1aa5a9c8fc2154d27848631574a/Aesop_Brilliant_Performers_2025_Web_Homepage_Primary_GL_50-50_Desktop_XL_2560x1200px.jpg')",
            }}
          />
        </div>

        {/* Slide 3 */}
        <div
          className={`flex h-full duration-700 ease-in-out ${currentSlide === 2 ? 'block' : 'hidden'}`}
        >
          <div className="p-12 w-[900px]">
            <h5 className='text-sm'>Online only</h5>
            <h3 className="text-2xl mb-9">Four bundles for hair, hands and home</h3>
            <p className="text-gray-700 mb-6">
              The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.
            </p>
            <div className="w-[300px]">
              <div className="relative flex items-center border border-black bg-transparent mb-8 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                <input
                  type="email"
                  className="bg-[#f6f5e8] text-black px-4 py-2 rounded-md pr-10 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                  placeholder="Explore bundles"
                />
                <ArrowForwardIcon className="absolute right-2 text-black cursor-pointer transition-all duration-300 ease-in-out hover:text-white" />
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div
            className="w-full h-[500px] bg-cover bg-center mb-44"
            style={{
              backgroundImage: "url('https://www.aesop.com/u1nb1km7t5q7/48WUU7O1mDZ0jSogoWRyNl/151c278f42d867e1d2dd786e74174ab1/Aesop_IFT_Event_TH_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg')",
            }}
          />
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex justify-center bottom-[-40px] left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="text-2xl text-black"
          aria-label="Previous"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <span className="text-2xl text-black">{` ${currentSlide + 1} / ${totalSlides} `}</span>
        <button
          type="button"
          className="text-2xl text-black"
          aria-label="Next"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Top;
