import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function VirtualFive() {
  return (
    <div>
    <div className="bg-[#f6f5e8] font-suisse-medium flex gap-12 p-2">
    
 

    {/* Content Section */}

    <div className="p-12   w-[900px]">
       <h5 className='text-sm mb-9'>Festive giving </h5>
      <h3 className="text-2xl mb-9   ">
      A complimentary sleeve for your gifts
      </h3>
      <p className="text-gray-700 mb-6">
      Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the ‘gift packaging’ option at checkout. Exclusions apply.    
                            </p>

      {/* Input Section */}
      <div className="w-[300px]">
        <div className="relative flex items-center border border-black bg-transparent mb-8 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
          <input
            type="email"
            className="bg-[#f6f5e8] text-black px-4 py-2 rounded-md pr-10 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            placeholder="Explore gifts"
          />
          <ArrowForwardIcon className="absolute right-2 text-black cursor-pointer transition-all duration-300 ease-in-out hover:text-white" />
        </div>
      </div>
    </div>

     {/* Image container */}
     <div
      className=" w-full h-[500px] bg-cover bg-center mb-44"
      style={{
        backgroundImage:
          "url('https://www.aesop.com/u1nb1km7t5q7/23mX2EVjoEY3EflqXW2ajg/7fb9b7d000b8cdb875fd12bbb5ad95b0/Aesop_Festive_Sleeve_HK_2024_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg')",
      }}
    />
  </div>
 
</div>
  )
}

export default VirtualFive
