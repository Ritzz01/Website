import React from 'react'

function FotOne() {
  return (
    <div className='bg-[#ebeade] font-suisse-medium text-base flex gap-20 p-14 justify-between'>
      <div className="text-center">
        <h3 className='font-semibold text-base text-gray-700'>Certified B Corp</h3>
        <p className='text-gray-600 text-sm mt-3'>
          We meet the highest verified standards of social and environmental performance, transparency, and accountability.
        </p>
      </div>
      <div className="text-center">
        <h3 className='font-semibold text-base text-gray-700'>Leaping Bunny approved</h3>
        <p className='text-gray-600 text-sm mt-3'>
          Our formulations are approved as cruelty-free under the Cruelty-Free International Leaping Bunny programme.
        </p>
      </div>
      <div className="text-center">
        <h3 className='font-semibold text-base text-gray-700'>PETA recognition</h3>
        <p className='text-gray-600 text-sm mt-3'>
          We appear on PETA's internationally recognised vegan and cruelty-free lists.
        </p>
      </div>
    </div>
  )
}

export default FotOne
