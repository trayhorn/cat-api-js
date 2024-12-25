import { getFavourites, deleteFavourite } from './api';
import { notifications } from '../utils/notifications';


const gallery = document.querySelector('.fav-gallery');
const loader = document.querySelector('.loader');
const themeSwitch = document.querySelector(".slider");

themeSwitch.addEventListener('click', (e) => {
  document.querySelector('body').classList.toggle('dark-mode');
})

loader.classList.remove('is-hidden');

renderFavourites();

async function renderFavourites() {
  try {
    const { data } = await getFavourites();

    gallery.innerHTML = createMarkUp(data);
    gallery.addEventListener('click', handleDeleteFav);

  } catch (e) {
    notifications.error(e);
  } finally {
    loader.classList.add('is-hidden');
  }
}

function createMarkUp(imagesArray) {
  return imagesArray
    .map(({ id, image: { url } }) => {
      return `<li class="item">
              <img
                class="image"
                src="${url}" alt=""
              >
              <button class="icon-container">
                <img
                  class="icon"
                  data-image-id="${id}"
                  src="./img/cancel-circle.svg" alt=""
                >
              </button>
          </li>`;
    })
    .join("");
}

async function handleDeleteFav(e) {
  if (!e.target.classList.contains('icon')) {
    return;
  }

  const { imageId } = e.target.dataset;
  deleteFavourite(imageId);

  const imageToDelete = e.target.closest('.item');
  imageToDelete.remove();
  notifications.removedFromFavorites();
}