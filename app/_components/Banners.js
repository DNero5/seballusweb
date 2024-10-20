"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="relative w-full h-screen bg-pink-100">
      {/* Static Text Overlay */}
      <div className="absolute top-0 w-full text-blue-100 z-20 text-center px-4">
        <p className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold uppercase  text-xs md:text-base lg:text-lg">
          Sale: Extra 25% Off Selected Styles!*
        </p>
        <p className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold uppercase  text-xs md:text-base lg:text-lg">
          Already up to 70% off - Use code:{" "}
          <span className="font-bold">LUCKY</span>
        </p>
      </div>

      {/* Top navigation */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center z-20 p-4 md:p-6 lg:p-8">
        <button className="px-4 py-2 bg-blue-100 text-black font-semibold uppercase hover:bg-pink-400 text-xs md:text-sm lg:text-base">
          Women
        </button>
        <button className="px-4 py-2 bg-blue-100 text-black font-semibold uppercase hover:bg-pink-400 text-xs md:text-sm lg:text-base">
          Men
        </button>
      </div>

      {/* Main content with buttons */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center z-20">
        {/* Women's Section */}
        <div className="w-full md:w-1/3 flex items-center justify-center h-full">
          <button className="bg-blue-100 text-black py-2 px-6 uppercase font-bold text-xs md:text-sm lg:text-lg hover:bg-blue-700">
            Shop Womens
          </button>
        </div>

        {/* Asos Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <h2 className="bg-blue-100 text-4xl md:text-6xl lg:text-7xl font-bold italic px-4 rounded-lg">
            This is <span className="text-blue-700">S</span>EB
            <span className="text-blue-700">S</span>
          </h2>
        </div>

        {/* Men's Section */}
        <div className="w-full md:w-1/3 flex items-center justify-center h-full">
          <button className="bg-blue-100 text-black py-2 px-6 uppercase font-bold text-xs md:text-sm lg:text-lg hover:bg-blue-700">
            Shop Mens
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex justify-center space-x-8">
        <a
          href="https://www.facebook.com"
          className="text-[#3b83f6d6] hover:text-[#3629ed] bg-blue-100 w-20 h-20 flex items-center justify-center rounded-lg"
        >
          <i className="fab fa-facebook fa-3x"></i>
        </a>
        <a
          href="https://www.whatsapp.com"
          className="text-[#3b83f6d6] hover:text-[#3629ed] bg-blue-100 w-20 h-20 flex items-center justify-center rounded-lg"
        >
          <i className="fab fa-whatsapp fa-3x"></i>
        </a>
        <a
          href="https://www.instagram.com/d_nero1?igsh=MW1xYWg5d2lvaG0zbQ%3D%3D&utm_source=qr"
          className="text-[#3b83f6d6] hover:text-[#3629ed] bg-blue-100 w-20 h-20 flex items-center justify-center rounded-lg"
        >
          <i className="fab fa-instagram fa-3x"></i>
        </a>
      </div>

      {/* Slider with Images */}
      <Slider {...settings} className="relative z-10">
        <div className="h-screen">
          <Image
            src="/images/banner2.jpg"
            alt="Banner2"
            className="object-cover w-full h-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="h-screen">
          <Image
            src="/images/banner1.jpg"
            alt="Banner1"
            className="object-cover w-full h-full"
            width={1920}
            height={1080}
          />
        </div>
      </Slider>
    </div>
  );
}
