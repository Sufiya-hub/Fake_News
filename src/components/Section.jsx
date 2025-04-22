import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Section = () => {
  return (
    <div className="grid grid-cols-2 p-4 items-center justify-center">
      <div className="flex flex-col gap-6">
        <h1 className="border-l-2 px-3 font-bold text-xs">BEST OF THE WEEK</h1>
        <p className="font-semibold text-xs text-[#899DAF]">
          Blockchain News <span className="text-gray-500"> 4 hours ago</span>
        </p>
        <h1 className="font-semibold text-2xl w-[25ch]">
          Top Analyst Unveils Ethereum Catalyst That Could Trigger Nearly 50%
          Surge for ETH-Here's His Outlook
        </h1>
        <div className="flex gap-4 text-gray-500 text-xs">
          <h1>#Ethereum</h1>
          <h1>#Analytics</h1>
        </div>
        <div className="flex items-center">
          <button className="bg-white rounded-xl px-3 py-1 font-bold">
            Read article
          </button>
          <div className="bg-white rounded-full p-2 font-bold">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
