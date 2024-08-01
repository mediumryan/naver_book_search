import React from 'react';
// features
import BackBtn from './backBtn';

export default function Navbar() {
  return (
    <div className="flex items-center text-sky-50 text-xl px-4 pt-8 md:pl-[10%] md:pr-[10%] lg:pl-[25%] lg:pr-[25%]">
      <BackBtn />
    </div>
  );
}
