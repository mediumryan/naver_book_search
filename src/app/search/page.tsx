'use client';

import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';
// components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// features
import BookResults from '@/features/results/card';
import Loading from '@/features/loader/loader';
// actions
import { searchBookAction } from './action';
// service
import { BookResponse } from '@/service/getBooks';

export default function SearchPage() {
  const [state, formAction] = useFormState(searchBookAction, 1);

  const [bookData, setBookData] = useState<BookResponse[]>([]);

  useEffect(() => {
    if (state?.data && state?.status === 'success') {
      setBookData(state?.data);
    }
  }, [state]);

  return (
    <div className="px-8 max-h-[85vh] md:pl-[10%] md:pr-[10%] lg:pl-[25%] lg:pr-[25%] py-12 overflow-y-auto">
      <form action={formAction}>
        <div className="flex items-center w-3/4 md:w-1/2 lg:w-1/2 my-0 mx-auto">
          <Input
            type="text"
            name="query"
            maxLength={256}
            placeholder="ex)1만 시간의 법칙"
          />
          <Button type="submit" className="ml-2">
            검색
          </Button>
        </div>
        <div className="relative">
          <BookResults bookData={bookData} />
          <Loading />
        </div>
      </form>
    </div>
  );
}
