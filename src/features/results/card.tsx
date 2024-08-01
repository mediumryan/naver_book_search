import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// components
import { ScrollArea } from '@/components/ui/scroll-area';
// service
import { BookResponse } from '@/service/getBooks';

interface BookResultsProps {
  bookData: BookResponse[];
}

export default function BookResults({ bookData }: BookResultsProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 item mt-6">
      {bookData &&
        bookData.map((book) => (
          <li
            key={book.isbn}
            className="rounded-md bg-slate-800 overflow-hidden"
          >
            <div id="card-image" className="w-[120px] h-[150px] relative">
              <Image
                src={book.image}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            <ScrollArea className="max-h-40 overflow-y-auto text-sky-50 my-4 p-4">
              <h2 className="text-lg text-yellow-300">{book.title}</h2>
              <div className="flex items-start">
                <p className="basis-1/4 md:basis-1/3 lg:basis-1/2">저자 : </p>
                <p className="basis-3/4 md:basis-2/3 lg:basis-1/2">
                  {book.author}
                </p>
              </div>
              <div className="flex items-start">
                <p className="basis-1/4 md:basis-1/3 lg:basis-1/2">출판사 : </p>
                <p className="basis-3/4 md:basis-2/3 lg:basis-1/2">
                  {book.publisher}
                </p>
              </div>
              <div className="flex items-start">
                <p className="basis-1/4 md:basis-1/3 lg:basis-1/2">출간일 : </p>
                <p className="basis-3/4 md:basis-2/3 lg:basis-1/2">
                  {book.pubdate}
                </p>
              </div>
              <div className="flex items-start">
                <p className="basis-1/4 md:basis-1/3 lg:basis-1/2">책 소개</p>
                <p className="basis-3/4 md:basis-2/3 lg:basis-1/2"></p>
              </div>
              <div>
                <p className="text-slate-300 text-sm">{book.description}</p>
              </div>
              <div className="flex justify-center mt-4">
                <Link
                  href={book.link}
                  className="text-yellow-200 bg-yellow-700 px-2 rounded-md hover:opacity-75 duration-300"
                >
                  More Info
                </Link>
              </div>
            </ScrollArea>
          </li>
        ))}
    </ul>
  );
}
