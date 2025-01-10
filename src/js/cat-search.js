import {
  fetchBreeds,
  fetchCatByBreed,
  fetchBreedImages,
  saveImageToFavorites,
  getFavourites,
  deleteFavourite
} from "./api";
import { renderCatInfo, renderCatImages } from "./render-functions";
import { notifications } from '../utils/notifications';
import SlimSelect from "slim-select";


const select = document.querySelector('.breed-form .select');
const gallery = document.querySelector('.search-gallery');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

loader.classList.remove('is-hidden');


getItemsFromStorage();

fetchBreedsTest();

select.addEventListener('change', handleSelectChange);

//Functions

async function fetchBreedsTest() {
  try {
    const { data } = await fetchBreeds();
    renderSelectOptions(data);
  } catch (e) {
    notifications.error(e);
  } finally {
    loader.classList.add("is-hidden");
    select.classList.remove("is-hidden");
  }
}

function renderSelectOptions(arr) {
  const markup = arr.map(
      ({ id, name }) =>
        `<option class="select-option" value="${id}">${name}</option>`
    ).join("");

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
    localStorage.setItem('catInfo', JSON.stringify(catData));
    catInfo.innerHTML = renderCatInfo(catData);

    const { data: breedImages } = breedImagesResponse;
    localStorage.setItem('catImages', JSON.stringify(breedImages));
    gallery.innerHTML = renderCatImages(breedImages);

    gallery.addEventListener('click', handleFavIconClick)

  } catch (error) {
    notifications.error(e);
  } finally {
    loader.classList.add('is-hidden');
  }
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

function getItemsFromStorage() {
  if (!localStorage.getItem("catInfo") ||
    !localStorage.getItem("catImages")) {
    return;
  }

  catInfo.innerHTML = renderCatInfo(
    JSON.parse(localStorage.getItem("catInfo"))
  );
  gallery.innerHTML = renderCatImages(
    JSON.parse(localStorage.getItem("catImages"))
  );
}