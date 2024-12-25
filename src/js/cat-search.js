import {
  fetchBreeds,
  fetchCatByBreed,
  fetchBreedImages,
  saveImageToFavorites,
  getFavourites,
  deleteFavourite
} from "./api";
import { notifications } from '../utils/notifications';
import SlimSelect from "slim-select";


const select = document.querySelector('.breed-form .select');
const gallery = document.querySelector('.search-gallery');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

loader.classList.remove('is-hidden');

fetchBreeds()
  .then(({ data }) => renderSelectOptions(data))
  .catch(e => notifications.error(e))
  .finally(() => {
    loader.classList.add('is-hidden');
    select.classList.remove('is-hidden');
  })

select.addEventListener('change', handleSelectChange);

function renderSelectOptions(arr) {
  const markup = arr
    .map(
      ({ id, name }) =>
        `<option class="select-option" value="${id}">${name}</option>`
    )
    .join("");

  select.insertAdjacentHTML('beforeend', markup);

  new SlimSelect({
    select: ".breed-form .select",
  });
}

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

    const { data: [catData] } = catResponse;
    catInfo.innerHTML = renderCatInfo(catData);

    const { data: breedImages } = breedImagesResponse;
    gallery.innerHTML = renderCatImages(breedImages);

    gallery.addEventListener('click', handleFavIconClick)

  } catch (error) {
    notifications.error(e);
  } finally {
    loader.classList.add('is-hidden');
  }
}

function renderCatInfo(object) {
  const {
    url,
    breeds: [{ temperament, name, description }],
  } = object;

  return `
        <div>
          <img class="image" src="${url}" alt="${name}">
        </div>
        <div>
          <h2 class="name">${name}</h2>
          <p class="temper">${temperament}</p>
          <p class="description">${description}</p>
        </div>
      `;
}

function renderCatImages(data) {
  return data
    .filter((el) => el.width > el.height)
    .map(({ url, id }) => {
      return `<li class="item">
            <div>
              <img
                class="image"
                src="${url}" alt=""
              >
              <img
                data-image-id="${id}"
                class="icon"
                src="./img/heart.svg" alt="heart-icon"
              >
            </div>
          </li>`;
    })
    .join("");
}

async function handleFavIconClick(e) {
  if (!e.target.classList.contains('icon')) {
    return;
  }

  const { imageId } = e.target.dataset;
  e.target.setAttribute("src", "./img/heart-broken.svg");

  try {
    const favorites = await getFavourites();

    if (favorites.data.find((el) => el.image_id === imageId)) {
      const elementToDelete = favorites.data.find(
        (el) => el.image_id === imageId
      );
      e.target.setAttribute("src", "./img/heart.svg");
      await deleteFavourite(elementToDelete.id);
      notifications.removedFromFavorites();
      return;
    }

    await saveImageToFavorites(imageId);
    notifications.addedToFavorites();
  } catch (error) {
    console.log(error);
  }
}








