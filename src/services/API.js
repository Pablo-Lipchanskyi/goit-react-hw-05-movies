import axios from 'axios';
const API_KEY = 'eb3837528c14261d8a5e32c0d2687a2a'

axios.defaults.baseURL = 'https://api.themoviedb.org';
async function fetchFilms(queryType = 'trending/movie/day', searchedFilm = '') {
  const response = await axios.get(
    `/3/${queryType}?api_key=${API_KEY}${searchedFilm}`
  );
  console.log(response.data);
  return response.data;
}

export default fetchFilms;