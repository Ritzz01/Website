import React from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Slider() {
  return (
    <div className='bg-[#f6f5e8]  p-32 font-suisse-medium flex gap-16'>
      
      <div className='w-1/2'>
        <h5 className='text-sm mb-5'>Skin Care+</h5>
        <h2 className='text-xl mb-5'>Intensive formulations for complex skin</h2>
        <p className='mb-10'>
          Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.
        </p>
        <h3 className='text-sm flex items-center'>
          Browse formulations <ArrowForwardIcon className='ml-2'/>
        </h3>
      </div>

      <div className='w-1/2'>
        {/* Image Container */}
        <div 
          className='w-full h-full bg-cover bg-center mb-6' 
          style={{
            backgroundImage: "url('https://images.ctfassets.net/u1nb1km7t5q7/4L0fsTIKdIT0SK2g8jXJAd/c0bf85c64a4dae8aa5c115c7c326ac6d/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Large-901x478px.png')"
          }}
        />
        <h3 className='text-lg font-bold'>B Triple C Facial Balancing Gel</h3>
        <h3 className='text-sm'>Embracing, vitamin-rich hydration</h3>
      </div>
      <div className='w-1/2'>
        {/* Image Container */}
        <div 
          className='w-full h-full bg-cover bg-center mb-6' 
          style={{
            backgroundImage: "url('https://images.ctfassets.net/u1nb1km7t5q7/4L0fsTIKdIT0SK2g8jXJAd/c0bf85c64a4dae8aa5c115c7c326ac6d/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Large-901x478px.png')"
          }}
        />
        <h3 className='text-lg font-bold'>B Triple C Facial Balancing Gel</h3>
        <h3 className='text-sm'>Embracing, vitamin-rich hydration</h3>
      </div>
      <div className='w-1/2'>
        {/* Image Container */}
        <div 
          className='w-full h-full bg-cover bg-center mb-6' 
          style={{
            backgroundImage: "url('https://images.ctfassets.net/u1nb1km7t5q7/4L0fsTIKdIT0SK2g8jXJAd/c0bf85c64a4dae8aa5c115c7c326ac6d/Aesop-Skin-Sublime-Replenishing-Night-Masque-60mL-Large-901x478px.png')"
          }}
        />
        <h3 className='text-lg font-bold'>B Triple C Facial Balancing Gel</h3>
        <h3 className='text-sm'>Embracing, vitamin-rich hydration</h3>
      </div>
      
    </div>
  );
}

export default Slider;
