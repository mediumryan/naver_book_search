import { ScrollArea } from '@/components/ui/scroll-area';
import { BookResponse } from '@/service/getBooks';
import Image from 'next/image';
import React from 'react';

interface BookResultsProps {
  bookData: BookResponse[];
}

export default function BookResults({ bookData }: BookResultsProps) {
  return (
    <ul className="grid grid-cols-4 gap-4 item">
      {bookData.map((book) => (
        <li key={book.isbn} className="rounded-md bg-slate-800 overflow-hidden">
          <div id="card-image" className="w-[100px] h-[150px]">
            <Image
              src={book.image}
              alt={book.title}
              width={100}
              height={100}
              className="min-w-[100px] min-h-[150px]"
            />
          </div>

          <ScrollArea className="max-h-40 overflow-y-auto text-sky-50 my-4 p-4">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.pubdate}</p>
            <p>{book.description}</p>
            <a href={book.link}>More Info</a>
          </ScrollArea>
        </li>
      ))}
    </ul>
  );
}
