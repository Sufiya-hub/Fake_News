import React from 'react';
import { Headers } from '@/constants';
import { PiCubeBold } from 'react-icons/pi';

const Header = () => {
  return (
    <div className="flex gap-4 text-xs">
      <h1 className="flex items-center gap-2 bg-white px-3 py-1 rounded-full font-bold">
        <PiCubeBold size={14} />
        CryptoNews
      </h1>
      {Headers.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-2 px-3 py-1 font-semibold rounded-full bg-[#F1F7FC]"
        >
          <h1>{item.label}</h1>
          <h1>{item.icon}</h1>
        </div>
      ))}
    </div>
  );
};

export default Header;
