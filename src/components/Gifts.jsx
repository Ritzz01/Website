import React from 'react';

function Gifts() {
  return (
    <div 
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(https://www.aesop.com/u1nb1km7t5q7/EzKrdFG7ir4RvhbK03YTw/f36c752d2e667432689752f03f82333a/Aesop_Gift_Kits_2024-25_Web_Gift_Guide_Primary_For_the_Avid_Traveller_Full_Bleed_Desktop_2880x1044px.jpg)' }}
    >
      {/* First section: Text on the left */}
      <div className="first text-white pl-8 pt-8">
        Aesop
      </div>

      {/* Second section: Centered content */}
      <div className="second h-[30vh] ">
        <div className="text-xl font-bold mb-4">Gifts for Travel</div>

        {/* Third section content */}
        <div className="third ">
          <p className='text-sm'>From compact versions of beloved formulations to those specially designed for on-the-go care, travel gifts provide ease of ablution and skin refreshment away from the home.</p>
        </div>
      </div>
    </div>
  );
}

export default Gifts;
