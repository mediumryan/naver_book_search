'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useFormState } from 'react-dom';
import { searchBookAction } from './action';
import { useEffect, useState } from 'react';
import BookResults from '@/features/results/card';
import { BookResponse } from '@/service/getBooks';
import Loading from '@/features/loader/loader';

export default function SearchPage() {
  const [state, formAction] = useFormState(searchBookAction, 1);

  const [bookData, setBookData] = useState<BookResponse[]>([]);

  useEffect(() => {
    if (state?.data && state?.status === 'success') {
      setBookData(state?.data);
    }
  }, [state]);

  return (
    <div className="px-96 py-12">
      <form action={formAction}>
        <div className="flex items-center w-1/2 my-0 mx-auto">
          <Input
            type="text"
            name="query"
            maxLength={256}
            placeholder="ex)10000시간의 법칙"
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
