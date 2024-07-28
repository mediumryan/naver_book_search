'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BookResponse } from '@/service/getBooks';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    ></Carousel>
  );
}

interface SliderProps {
  sliderData: BookResponse[];
}

export default function Slider({ sliderData }: SliderProps) {
  return (
    <Link
      href="/search"
      className="flex flex-col items-center hover:scale-105 hover:opacity-90 duration-300"
    >
      <p className="italic text-sky-50 font-bold text-lg mb-4">
        책 검색하러 가기
      </p>
      <Carousel
        className="w-full max-w-xs"
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {sliderData.map((data, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      key={`slider-${index}`}
                      src={data.image}
                      width={250}
                      height={250}
                      alt={data.title}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Link>
  );
}
