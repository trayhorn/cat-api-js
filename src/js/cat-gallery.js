import { fetchBreeds, fetchBreedImages } from './api';
import Swal from 'sweetalert2';

const selectEl = document.querySelector('.breed-form_select');
const gallery = document.querySelector('.cat-gallery');

fetchBreeds()
  .then(({ data }) => renderSelectOptions(data))
  .catch(e => {
    Swal.fire({
      title: 'Error!',
      text: e.message,
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  })
  .finally(() => {
    selectEl.classList.remove('is-hidden');
  });

selectEl.addEventListener('change', e => {
  const breedId = e.target.value;

  fetchBreedImages(breedId).then((res) => {
    gallery.innerHTML = res.data.map(({ url }) => {
      return `<li class="cat-gallery_item">
        <img class="cat-gallery_image" src="${url}" alt="">
      </li>`;
    }).join('');
  })
})



function renderSelectOptions(arr) {
  const markup = arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');

  selectEl.innerHTML = markup;
}