// src/components/ContactSection.jsx
import h1_hero from "../images/hero/h1_hero1.jpg";
import { TfiHome } from "react-icons/tfi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#150303] text-white">
      {/* Top Section with Image and Title */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 h-72 flex items-center justify-center">
          <h2 className="text-4xl font-bold font-chivo">Contact</h2>
        </div>
        <div className="w-full md:w-1/2 h-72">
          <img
            src={h1_hero}
            alt="Contact Barber"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Section with Form and Contact Info */}
      <div className="bg-white text-black p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Form */}
        <form className="space-y-4">
          <textarea
            rows="4"
            className="w-full border border-gray-300 p-3"
            placeholder="Enter Message"
          ></textarea>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 border border-gray-300 p-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 border border-gray-300 p-3"
            />
          </div>

          <input
            type="text"
            placeholder="Enter Subject"
            className="w-full border border-gray-300 p-3"
          />

          <button className="border-2 border-red-500 text-red-500 px-6 py-2 font-bold hover:bg-red-500 hover:text-white transition">
            SEND
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl">
              <TfiHome />
            </span>
            <p>
              <strong>Buttonwood, California.</strong>
              <br />
              Rosemead, CA 91770
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">
              <MdOutlinePhoneAndroid />
            </span>
            <p>
              <strong>+1 253 565 2365</strong>
              <br />
              Mon to Fri 9am to 6pm
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">
              <IoIosMail />
            </span>
            <p>
              <strong>support@colorlib.com</strong>
              <br />
              Send us your query anytime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
