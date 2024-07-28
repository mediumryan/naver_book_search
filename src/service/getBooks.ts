import axios from 'axios';

interface SearchBooksParams {
  query?: string;
  display?: number;
  start?: number;
  sort?: 'sim' | 'date';
  d_titl?: string;
  d_isbn?: string;
}

export interface BookResponse {
  title: string;
  link: string;
  image: string;
  author: string;
  discount: string;
  publisher: string;
  pubdate: string;
  isbn: string;
  description: string;
}

export async function getBooks(
  query: string,
  display: number
): Promise<BookResponse[]> {
  try {
    const response = await axios.get(
      'https://openapi.naver.com/v1/search/book.json',
      {
        params: { query: query, display: display, sort: 'sim' },
        headers: {
          'X-Naver-Client-Id': process.env.NEXT_API_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NEXT_API_CLIENT_SECRET,
        },
      }
    );

    return response.data.items;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

// export async function getBestSellerBooks(): Promise<BookResponse[]> {
//   try {
//     const response = await axios.get(
//       'https://openapi.naver.com/v1/search/book_adv.json',
//       {
//         params: {
//           d_catg: '전체',
//           d_titl: '',
//           d_auth: '',
//           d_cont: '',
//           d_publ: '',
//           d_isbn: '',
//           d_snb: '',
//           d_snda: '',
//           d_syear: '',
//           d_eyear: '',
//           display: 10,
//           sort: 'date',
//         },
//         headers: {
//           'X-Naver-Client-Id': process.env.NEXT_API_CLIENT_ID,
//           'X-Naver-Client-Secret': process.env.NEXT_API_CLIENT_SECRET,
//         },
//       }
//     );
//     return response.data.items as BookResponse[];
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//     throw error;
//   }
// }
