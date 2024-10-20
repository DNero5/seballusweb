"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useCart } from "./CartContext"; // Import useCart hook

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [cartVisible, setCartVisible] = useState(false); // State to toggle cart visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Function to handle search button click
  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // You can add actual search logic here
    }
  };

  return (
    <main className="max-w-full mx-auto p-2 h-full bg-blue-100">
      {/* Contact Info and Logo */}
      <section className="text-[#2d2c2b] flex flex-col md:flex-row items-center p-4 rounded-lg md:text-left justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <span className="mr-4 italic text-sm md:text-xl">
            Have a question?
            <span className="font-semibold"> +9985 254 784</span>
          </span>
          <Image
            src="/images/seblogo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <span className="ml-4 italic text-sm md:text-xl">
            Visit us: 9am to 10pm (Mon - Fri)
          </span>
        </div>
      </section>

      {/* Navbar with Search & Menu */}
      <nav className="max-w-full mx-auto flex flex-col lg:flex-row justify-between items-center p-4 lg:px-8 lg:py-4 bg-[rgb(14, 14, 14)] relative z-10">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="text-2xl italic">
            <h1>
              <span className="text-2xl text-blue-700 font-bold">S</span>EBALLU
              <span className="text-2xl text-blue-700 font-bold">S</span>
              <span className="text-2xl text-blue-700 font-bold">.</span>LUXRIE
              <span className="text-2xl text-blue-700 font-bold">S</span>
            </h1>
          </div>

          {/* Search Button */}
          <div className="flex items-center mx-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-2 text-black rounded-l-md text-xs md:text-sm lg:text-base"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-400 text-white py-2 px-6 w-full max-w-[550px] focus:ring-blue-700 rounded-r-md hover:bg-blue-700 text-xs md:text-sm lg:text-base"
            >
              Search
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div>
            {mobile ? (
              <IoClose
                className="text-[45px] lg:hidden"
                onClick={() => setMobile(!mobile)}
              />
            ) : (
              <HiOutlineMenu
                className="text-[45px] lg:hidden"
                onClick={() => setMobile(!mobile)}
              />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`cursor-pointer items-center text-2xl md:fixed h-screen top-[100px] right-0 font-semibold flex-col gap-12 w-screen bg-white text-white py-24 ${
            mobile ? "flex" : "hidden"
          } lg:flex lg:flex-row lg:gap-10 lg:relative lg:py-0 lg:text-white lg:bg-inherit lg:h-full lg:top-0 lg:w-fit lg:font-bold lg:text-[20px]`}
        >
          <li className="text-[#2d2c2b] hover:text-blue-500 italic">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#2d2c2b] hover:text-blue-500 italic">
            <Link href="/properties">Shop</Link>
          </li>
          <li className="text-[#2d2c2b] hover:text-blue-500 italic">
            <Link href="/contact">Contact</Link>
          </li>

          {/* Add Property Button */}
          <div className="flex items-center gap-4">
            {/* Cart Icon and Count */}
            <button
              className="flex items-center text-[#2d2c2b] hover:text-blue-500 relative"
              onClick={() => setCartVisible(!cartVisible)} // Toggle cart visibility
            >
              <FiShoppingCart size={24} />
            </button>

            {/* Cart Dropdown */}
            {cartVisible && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg p-4 rounded-lg">
                {/* Close Icon */}
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 z-10"
                  onClick={() => setCartVisible(false)} // Close cart when clicked
                >
                  <IoClose size={24} />
                </button>

                {/* Cart Items Container */}
                <div className="mt-8 max-h-[200px] overflow-y-auto">
                  {/* Cart items here */}
                </div>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </main>
  );
}
