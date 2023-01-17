import axios from 'axios';
const URL = 'https://api.themoviedb.org/3'
const API_KEY = 'eb3837528c14261d8a5e32c0d2687a2a'
const GET_TRENDING = '/trending/movie/day';

export const searchFilm = async () => {
  try {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        language: 'en '
    });

    const url = `${URL}${GET_TRENDING}?${searchParams}`;
    const response = await axios.get(url);
    if (!response.status) {
      throw new Error('Something goes wrong');
    }
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
