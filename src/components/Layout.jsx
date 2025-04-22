'use client';
import React from 'react';
import Header from './Header';
import Section from './Section';
import Recommendations from './Recommendations';
import NewsSection from './NewsSection';
import ImageCont from './ImageCont';

const Layout = () => {
  return (
    <div className="layoutGrid">
      <div className="w-full overflow-x-hidden border-[#EBF2FB] bg-[#EBF2FB] grid p-4 rounded-2xl h-[100vh]">
        <Header />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Section />
            {/* <ImageCont /> */}
          </div>
          <NewsSection />
        </div>
      </div>
      <Recommendations />
    </div>
  );
};

export default Layout;
