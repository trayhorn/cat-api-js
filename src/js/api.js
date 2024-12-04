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

export function fetchBreedImages(breedId) {
  return axios.get('images/search', {
    params: {
      limit: 50,
      page: 0,
      breed_ids: breedId
    }
  });
}

export function saveImageToFavorites(id) {
  const rawBody = JSON.stringify({
    image_id: id,
  });

  return axios({
    method: 'post',
    url: '/favourites',
    data: rawBody,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function getFavourites() {
  return axios.get('/favourites');
}

export function deleteFavourite(fav_id) {
  return axios.delete(`/favourites/${fav_id}`);
}



