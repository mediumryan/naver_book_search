// features
import Slider from '@/features/carousel/slider';
// service
import { getBooks } from '@/service/getBooks';

export default async function HomePage() {
  const sliderData = await getBooks('추리 소설', 20);

  console.log(sliderData);

  return (
    <div className="mt-4 flex justify-center items-center h-[80vh]">
      <Slider sliderData={sliderData} />
    </div>
  );
}
