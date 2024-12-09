import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { BiSolidLeaf } from "react-icons/bi";

export default function AboutSection(){
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] text-[#272343] font-semibold text-center mb-12">
        What makes our Brand Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] md:text-[22px] font-normal text-[#007580] flex items-center justify-center pt-5">
            <FaTruck className="text-[#007580] mb-2" />
            Next day as standard
          </h3>
          <p className="text-[16px] md:text-[18px] font-normal text-[#007580]  mt-4">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] md:text-[22px] font-normal text-[#007580] flex items-center justify-center pt-5">
            <FaCheck className="text-[#007580] mr-2" />
            Made by true artisans
          </h3>
          <p className="text-[16px] md:text-[18px] font-normal text-[#007580] mt-4 text-left">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] md:text-[22px] font-normal text-[#007580] flex items-center justify-center pt-5">
            <IoFileTrayOutline className="text-[#007580] mr-3" />
            Unbeatable prices
          </h3>
          <p className="text-[16px] md:text-[18px] font-normal text-[#007580] mt-4">
            For our materials and quality you will not find better prices anywhere
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] md:text-[22px] font-normal text-[#007580] flex items-center justify-center pt-5">
            <BiSolidLeaf className="text-[#007580] mr-3" />
            Recycled packaging
          </h3>
          <p className="text-[16px] md:text-[18px] font-normal text-[#007580] mt-4">
            We use 100% recycled material to ensure our footprint is more
            manageable
          </p>
        </div>
      </div>
    </div>
  );
};

