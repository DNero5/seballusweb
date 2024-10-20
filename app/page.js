"use client";
import React from "react";
import Banner from "@/app/_components/Banners";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main className="max-w-full mx-auto h-full "> {/* Set to full height */}
      {/* Carousel with higher z-index to stay at the top layer */}
      <section className="inset-0 z-20 overflow-hidden m-0 p-0"> {/* Remove margin and padding */}
        {/* Assuming Banner contains your slider logic */}
        <Banner />
      </section>

      {/* This section stays below the banner */}
      <section className="max-w-7xl mx-auto px-4 py-8"> {/* No margin-top needed */}
        {/* Title Section */}
        <h2 className="text-3xl font-bold mb-8">Editor's Pick</h2>

        {/* Filter Section */}
        <div className="flex justify-end space-x-8 mb-4 text-gray-500">
          <a href="#" className="font-semibold text-black">Featured</a>
          <a href="#" className="hover:text-black">On Sale</a>
          <a href="#" className="hover:text-black">Top Rated</a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-sm relative">
              {/* Discount Badge */}
              {index === 0 && (
                <span className="absolute top-2 left-2 bg-gray-200 text-black font-semibold text-sm p-1 rounded">-25%</span>
              )}
              {index === 1 && (
                <span className="absolute top-2 left-2 bg-red-500 text-white font-semibold text-sm p-1 rounded">Hot</span>
              )}
              {index === 2 && (
                <span className="absolute top-2 left-2 bg-gray-200 text-black font-semibold text-sm p-1 rounded">-10%</span>
              )}
              {index === 3 && (
                <span className="absolute top-2 left-2 bg-orange-500 text-white font-semibold text-sm p-1 rounded">Sold Out</span>
              )}
              <Image
                src={`/images/modelwoman${(index % 3) + 1}.webp`} // Cycle through model images
                alt={`model${(index % 3) + 1}`}
                width={500} // Replace with the actual image width
                height={600} // Replace with the actual image height
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <span className="text-gray-500 text-sm">Women's Fashion</span>
                <h3 className="font-semibold text-lg">
                  {index === 0 && "Flower Print Dress"}
                  {index === 1 && "Style Modern Dress"}
                  {index === 2 && "Lucida Sleeveless Dress"}
                  {index === 3 && "Style Modern Dress"}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-400 line-through">$235</span>
                  <span className="text-orange-500 font-bold">$150</span>
                </div>
              </div>
              {/* Action Icons */}
              <div className="flex justify-end space-x-4 p-4 text-gray-400">
                <i className="far fa-heart"></i>
                <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
