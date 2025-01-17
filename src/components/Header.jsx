import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 font-suisse-medium text-sm  bg-header-bg  sticky top-0 z-10 ">
      {/* Left navigation */}
      <ul className="flex space-x-4">
        {/* Large Screens */}
        <li className="hidden md:block">
          <a href="#" className="relative inline-block">
            New & Notable
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#" className="relative inline-block">
            Skin Care
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#" className="relative inline-block">
            Hand & Body
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#" className="relative inline-block">
            Home
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#" className="relative inline-block">
            Hair
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#" className="relative inline-block">
            Fragrance
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#" className="relative inline-block">
            Kits & Travel
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#" className="relative inline-block">
            Gifts
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#" className="relative inline-block">
            Facial Appointments
          </a>
        </li>

        {/* Small Screens */}
        <li className="block md:hidden">
          <a href="#" className="relative inline-block">
            Shop
          </a>
        </li>
        <li className="block md:hidden">
          <a href="#" className="relative inline-block">
            Read
          </a>
        </li>
        <li className="block md:hidden">
          <a href="#" className="relative inline-block">
            Stores
          </a>
        </li>

        {/* Search Icon visible on all screens */}
        <li className="block">
          <a href="#" className="relative inline-block">
            <SearchIcon />
          </a>
        </li>
      </ul>

      {/* Right navigation */}
      <ul className="flex space-x-4">
        <li className="group">
          <a
            href="#"
            className="relative inline-block hover:no-underline md:hover:no-underline"
          >
            Log in
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full md:w-0 md:group-hover:w-0"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#"
            className="relative inline-block hover:no-underline md:hover:no-underline"
          >
            Cabinet
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full md:w-0 md:group-hover:w-0"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#"
            className="relative inline-block hover:no-underline md:hover:no-underline"
          >
            Cart
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full md:w-0 md:group-hover:w-0"></span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
