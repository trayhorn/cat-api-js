import { fetchBreeds, fetchCatByBreed } from './api';
import { notifications } from '../utils/notifications';

const selectEl = document.querySelector('.breed-form_select');
const selectArrow = document.querySelector('.custom-arrow');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

loader.classList.remove('is-hidden');

fetchBreeds()
  .then(({ data }) => renderSelectOptions(data))
  .catch(e => notifications.error(e))
  .finally(() => {
    loader.classList.add('is-hidden');
    selectEl.classList.remove('is-hidden');
    selectArrow.classList.remove('is-hidden');
  })

selectEl.addEventListener('change', handleSelectChange);

function handleSelectChange(e) {
  catInfo.innerHTML = '';
  loader.classList.remove('is-hidden');
  const breedId = e.target.value;

  fetchCatByBreed(breedId)
    .then(({ data }) => {
      loader.classList.add('is-hidden');
      renderCatInfo(data[0]);
    })
    .catch(e => notifications.error(e));
}

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






