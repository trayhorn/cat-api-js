import axios from 'axios';

const KEY =
  'live_LV7zXu2gVxSKAfBMBcAZGgVB2z3Cb3e51Z9KExvFxmF0NnGnPHSN4mcMnI8uggOr';

axios.defaults.headers.common['x-api-key'] = KEY;
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get('/breeds');
}

export function fetchCatByBreed(breedId) {
  return axios.get(`images/search?breed_ids=${breedId}`)
}


