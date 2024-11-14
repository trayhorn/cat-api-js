import { fetchBreeds, fetchCatByBreed } from './js/api';

const selectEl = document.querySelector('.breed-form_select');
const catInfo = document.querySelector('.cat-info');

fetchBreeds()
  .then(({ data }) => renderSelectOptions(data))
  .catch(e => console.log(e));

selectEl.addEventListener('change', (e) => {
  catInfo.innerHTML = '';
  const breedId = e.target.value;

  fetchCatByBreed(breedId)
    .then(({ data }) => {
      renderCatInfo(data[0]);
    })
    .catch(e => console.log(e));
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






