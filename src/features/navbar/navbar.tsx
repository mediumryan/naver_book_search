import Link from 'next/link';
import React from 'react';
import BackBtn from './backBtn';

export default function Navbar() {
  return (
    <div className="flex items-center text-sky-50 text-xl">
      <BackBtn />
    </div>
  );
}
