import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function VirtualTwo() {
  return (
    <div className="bg-[#f6f5e8] font-suisse-medium flex gap-12 p-2  ">
      {/* Image container */}

      <div
        className=" mb-44 w-full h-[500px] bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://www.aesop.com/u1nb1km7t5q7/6FbqraGc96gts4wqXBENFI/7af21353122e60409a730e81ba9e434a/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Desktop_2560x1440px.jpg')",
        }}
      />

      {/* Content Section */}
      <div className="p-12  w-[900px]">
        <h5 className="text-sm mb-9">Tokens of appreciation</h5>
        <h3 className="text-2xl mb-9   ">Corporate gifts</h3>
        <p className="text-gray-700 mb-6">
        Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery. 
        </p>

        {/* Input Section */}
        <div className="w-[300px] ">
          <div className="relative flex items-center border border-black bg-transparent mb-8 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            <input
              type="email"
              className="bg-[#f6f5e8] text-black px-4 py-2 rounded-md pr-10 focus:outline-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              placeholder="Learn more about this services"
            />
            <ArrowForwardIcon className="absolute right-2 text-black cursor-pointer transition-all duration-300 ease-in-out hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualTwo;
