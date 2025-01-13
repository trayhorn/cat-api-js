import { getFavourites, deleteFavourite } from './api';
import { notifications } from '../utils/notifications';
import { createGalleryMarkUp } from './render-functions';


const gallery = document.querySelector('.fav-gallery');
const loader = document.querySelector('.loader');
const themeSwitch = document.querySelector(".slider");

themeSwitch.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('dark-mode');
})

loader.classList.remove('is-hidden');

renderFavourites();

gallery?.addEventListener('click', handleDeleteFav)

async function renderFavourites() {
  try {
    const { data } = await getFavourites();
    gallery.innerHTML = createGalleryMarkUp(data);
  } catch (e) {
    notifications.error(e);
  } finally {
    loader.classList.add('is-hidden');
  }
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