import Slider from '@/features/carousel/slider';
import { getBooks } from '@/service/getBooks';

export default async function Home() {
  const sliderData = await getBooks('추리 소설', 20);

  return (
    <div>
      <div className="mt-4 flex justify-center items-center h-[80vh]">
        <Slider sliderData={sliderData} />
      </div>
    </div>
  );
}
