'use client';

import { ArrowLeftCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function BackBtn() {
  const router = useRouter();

  return (
    <ArrowLeftCircle
      className="mr-12 cursor-pointer hover:text-red-600 duration-300"
      onClick={() => {
        router.back();
      }}
    />
  );
}
