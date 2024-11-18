import { fetchBreeds, fetchCatByBreed } from './api';
import Swal from 'sweetalert2';

const selectEl = document.querySelector('.breed-form_select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

loader.classList.remove('is-hidden');

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
    loader.classList.add('is-hidden');
    selectEl.classList.remove('is-hidden');
  })

selectEl.addEventListener('change', (e) => {
  catInfo.innerHTML = ``;
  loader.classList.remove('is-hidden');
  const breedId = e.target.value;

  fetchCatByBreed(breedId)
    .then(({ data }) => {
      loader.classList.add('is-hidden');
      renderCatInfo(data[0]);
    })
    .catch(e => {
      Swal.fire({
        title: 'Error!',
        text: e.message,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    });
})

function renderSelectOptions(arr) {
  const markup = arr.map(({ id, name }) =>
    `<option value="${id}">${name}</option>`
  ).join('');
  
  selectEl.innerHTML = markup;
}

function renderCatInfo(object) {
  const { temperament, name, description } = object.breeds[0];

  const markup = `
        <div>
          <img class="cat-info_image" src="${object.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${name}</h2>
          <p class="cat-info_temper">${temperament}</p>
          <p class="cat-info_description">${description}</p>
        </div>
      `;

  catInfo.innerHTML = markup;
}






