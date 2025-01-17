import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function Navigation() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#ebeade] text-[#666] font-suisse-medium p-4 sticky top-0 z-10 whitespace-nowrap">
      {/* Left navigation */}
      <ul className="flex flex-wrap space-x-4">
        {/* List items with separators */}
        <li className="group">
          <a href="#" className="relative inline-block hover:no-underline">
            All Gifts
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <span className="text-black mx-2">|</span>

        <li className="group">
          <a href="#" className="relative inline-block hover:no-underline">
            Seasonal Gift Kits
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="group">
          <a href="#" className="relative inline-block hover:no-underline">
            New Year Offerings
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="group">
          <a href="#" className="relative inline-block hover:no-underline">
            Gift Bundles
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="group">
          <a href="#" className="relative inline-block hover:no-underline">
            Gifts for Home
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="group">
          <a href="#" className="relative inline-block hover:no-underline">
            Gifts for Travel
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      {/* Right navigation (Filter section) */}
      <ul className="flex space-x-4 w-full md:w-auto justify-center md:justify-start mt-4 md:mt-0">
        <li className="group ml-auto text-center w-full md:w-auto">
          <a href="#" className="relative inline-block">
            Filter <AddIcon />
                   </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
