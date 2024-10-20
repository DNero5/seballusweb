
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "emailjs-com"; // Import EmailJS

export default function Footer() {

    // State to hold the email input value
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Replace these with your EmailJS credentials
    const serviceID = "QA8X3fG97QebVe8xe";
    const templateID = "template_iivmuhj";
    const userID = "-fewInrnL4LV4fP6sJGxu";

    // Prepare the email data
    const templateParams = {
      email: email,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your email has been sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send email. Please try again.");
        }
      );

    // Reset the email input field
    setEmail("");
  };


    return (
        <main className="max-w-[1260px] mx-auto p-4 height-[100%]">
        <div className="text-gray-800 lg:mt-20">
          {/* Header Section */}
          <header className="bg-white p-4 shadow">
            <div className="container mx-auto text-center">
              <h1 className="text-2xl font-semibold">Are you a Home Owner?</h1>
              <p className="text-orange-500 mt-2">
                Put your email address and get listed.
              </p>
              <form
                className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3"
                onSubmit={sendEmail}
              >
                <input
                  type="email"
                  placeholder="Enter your email here..."
                  className="p-2 border border-gray-300 rounded w-full md:w-auto"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update state on input change
                  required
                />
                <button
                  type="submit" // Change button type to submit
                  className="bg-[#3b83f6d6] text-white hover:bg-[#92400e] p-2 rounded w-full md:w-auto"
                >
                  Get Listed
                </button>
              </form>
            </div>
          </header>

            {/* Main Content */}
            <main className="container mx-auto mt-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description Section */}
                    <div className="col-span-1">
                        <h2 className="text-lg font-semibold text-[#3b83f6d6]">Dinero Real Estate</h2>
                        <div className="mt-4">
                            <Link href='/'>
                                <Image src="/images/logo.png" alt="Logo" width={200} height={250} className="mx-auto" />
                            </Link>
                        </div>
                        <p className="mt-4 text-gray-600">Properties are most budget-friendly, so you have to find opportunities. It is our main responsibility to serve our clients.</p>
                    </div>

                    {/* Information Section */}
                    <div className="col-span-1">
                        <h2 className="text-lg font-semibold text-[#3b83f6d6]">Information</h2>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/contact" className="text-gray-600 hover:text-[#92400e]">About us</a></li>
                            <li><a href="/properties" className="text-gray-600 hover:text-[#92400e]">Properties</a></li>
                            <li><a href="/contact" className="text-gray-600 hover:text-[#92400e]">Contact Us</a></li>
                            <li><a href="/properties" className="text-gray-600 hover:text-[#92400e]">Cities</a></li>
                            <li><a href="/blog" className="text-gray-600 hover:text-[#92400e]">Blog Post</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="col-span-1">
                        <h2 className="text-lg font-semibold text-[#3b83f6d6]">Support</h2>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-[#92400e]">Services</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#92400e]">Create Agency</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#92400e]">Style Guide</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#92400e]">License</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#92400e]">Changelog</a></li>
                        </ul>
                    </div>

                    {/* Address Section */}
                    <div className="col-span-1">
                        <h2 className="text-lg font-semibold text-[#3b83f6d6]">Address</h2>
                        <p className="mt-4 text-gray-600">
                            2104 Charmaine Lane<br />
                            Amarillo, New York
                        </p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://www.facebook.com" className="text-[#3b83f6d6] hover:text-[#92400e]">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="https://www.whatsapp.com" className="text-[#3b83f6d6] hover:text-[#92400e]">
                                <i className="fab fa-whatsapp fa-2x"></i>
                            </a>
                            <a href="https://www.instagram.com/d_nero1?igsh=MW1xYWg5d2lvaG0zbQ%3D%3D&utm_source=qr " className="text-[#3b83f6d6] hover:text-[#92400e]">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="bg-white py-4 mt-8 shadow">
                <div className="container mx-auto text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-right">
                            <p className="text-gray-600">&copy; Brandbes. All Rights Reserved - <a href="#" className="text-[#3b83f6d6] hover:underline">Privacy Policy</a></p>
                        </div>
                    </div>
                    <p className="mt-4 text-[#3b83f6d6]">Powered by Webflow</p>
                </div>
            </footer>

            </div>
        </main>
    );
}

