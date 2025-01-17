import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function VirtualFour() {
  return (
    <div className="bg-[#f6f5e8] font-suisse-medium flex gap-12 p-2  ">
      {/* Image container */}

      <div
        className=" mb-44 w-full h-[500px] bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://www.aesop.com/u1nb1km7t5q7/1sbPA6bTjn2ihDQ0ovBxrn/335497031cd59f2a0364a394e5bd83d3/Aesop_Under_the_Microscope_Vitamin_C_Web_Secondary_Mid_01_Desktop_2560x1440px.jpg')",
        }}
      />

      {/* Content Section */}
      <div className="p-12  w-[900px]">
        <h5 className="text-sm mb-9">The Athenaeum</h5>
        <h3 className="text-2xl mb-9   ">
        Skin care protagonists: Vitamin C</h3>
        <p className="text-gray-700 mb-6">
        In this series, we take a closer look at some of the ingredients that we’ve returned to time and again, beginning with anti-oxidant-rich Vitamin C.
              </p>

        {/* Input Section */}
        <div className="w-[300px] ">
          <div className="relative flex items-center border border-black bg-transparent mb-8 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            <input
              type="email"
              className="bg-[#f6f5e8] text-black px-4 py-2 rounded-md pr-10 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              placeholder="Continue reading"
            />
            <ArrowForwardIcon className="absolute right-2 text-black cursor-pointer transition-all duration-300 ease-in-out hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualFour
