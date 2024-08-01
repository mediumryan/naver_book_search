'use server';

import { getBooks } from '@/service/getBooks';

export async function searchBookAction(
  prev: any,
  formData: FormData
): Promise<any> {
  const query = formData.get('query') as string;

  try {
    const bookData = await getBooks(query, 100);

    if (bookData && bookData.length > 0) {
      return {
        data: bookData,
        status: 'success',
      };
    }

    return {
      data: [],
      status: 'success',
    };
  } catch (err) {
    // throw new Error('데이터를 불러오는데 실패했습니다.');
    console.log(err);
    return {
      status: 'error',
    };
  }
}
