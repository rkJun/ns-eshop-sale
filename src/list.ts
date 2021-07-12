import axios from 'axios';
import { BASE_URL, API_POSTFIX_URL } from './constants';
import { ApiParams, ApiResponse } from './interfaces';

axios.defaults.baseURL = BASE_URL;

export const getSaleGames = async (
  apiParams: ApiParams = { country: 'KR', language: 'ko', count: 10, offset: 0 }
): Promise<ApiResponse> => {
  const { country, language, count, offset } = apiParams;
  try {
    const response = await axios.get(`/${country}/${language}/search/sales`, {
      params: {
        count,
        offset,
      },
    });

    if (response.status !== 200) throw new Error('request_failed');

    return response.data as ApiResponse;
  } catch (err) {
    throw err;
  }
};
