import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'live_WLQQqXqlXgCyO8iGTllE1Jcf8Bc1HoLyi7a4bx4lQAcvuMWBvNPHjGnGkVQIUR3I';

export function fetchBreeds() {
  return axios.get('breeds').then(resp => {
    return resp.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios.get(`images/search?breed_ids=${breedId}`).then(resp => {
    return resp.data;
  });
}