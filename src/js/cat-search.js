import { fetchBreeds, fetchCatByBreed, fetchBreedImages } from './api';
import { notifications } from '../utils/notifications';

const selectEl = document.querySelector('.breed-form_select');
const selectArrow = document.querySelector('.custom-arrow');
const gallery = document.querySelector('.cat-gallery');
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

async function handleSelectChange(e) {
  catInfo.innerHTML = '';
  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');
  const breedId = e.target.value;

  try {
    const [catResponse, breedImagesResponse] = await Promise.all([
      fetchCatByBreed(breedId),
      fetchBreedImages(breedId),
    ]);

    const { data: catData } = catResponse;
    renderCatInfo(catData[0]);

    const { data: breedImages } = breedImagesResponse;
    gallery.innerHTML = breedImages
      .filter(el => el.width > el.height)
      .map(({ url }) => {
        return `<li class="cat-gallery_item">
            <img class="cat-gallery_image" src="${url}" alt="">
          </li>`;
      })
      .join('');
  } catch (error) {
    notifications.error(e);
  } finally {
    loader.classList.add('is-hidden');
  }
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






