import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function VirtualOne() {
    return (
        <div className="bg-[#f6f5e8] font-suisse-medium flex gap-12 p-2">
         
    
          {/* Content Section */}
          <div className="p-12  w-[900px]">
            <h3 className="text-2xl mb-9   ">
            Store locator
            </h3>
            <p className="text-gray-700 mb-6">
            Our consultants are available to host you in-store and provide tailored guidance on gift purchases. 
                        </p>
    
            {/* Input Section */}
            <div className="w-[300px]">
              <div className="relative flex items-center border border-black bg-transparent mb-8 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                <input
                  type="email"
                  className="bg-[#f6f5e8] text-black px-4 py-2 rounded-md pr-10 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                  placeholder="Find a nearby store"
                />
                <ArrowForwardIcon className="absolute right-2 text-black cursor-pointer transition-all duration-300 ease-in-out hover:text-white" />
              </div>
            </div>
          </div>

           {/* Image container */}
           <div
            className="w-full h-[500px] bg-cover bg-center mb-44"
            style={{
              backgroundImage:
                "url('https://www.aesop.com/u1nb1km7t5q7/48WUU7O1mDZ0jSogoWRyNl/151c278f42d867e1d2dd786e74174ab1/Aesop_IFT_Event_TH_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg')",
            }}
          />
        </div>
      );
}

export default VirtualOne
