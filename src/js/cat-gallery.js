import { getFavourites, getImageById, deleteFavourite } from './api';
import { notifications } from '../utils/notifications';


const gallery = document.querySelector('.fav-gallery');
const loader = document.querySelector('.loader');

loader.classList.remove('is-hidden');

renderFavourites();

async function renderFavourites() {
  try {
    const { data } = await getFavourites();
    const favIds = data.map(el => el.image_id);

    const images = await Promise.all(
      favIds.map(async id => {
        const { data: image } = await getImageById(id);
        return image;
      })
    );

    gallery.innerHTML = createMarkUp(images);
    gallery.addEventListener('click', handleDeleteFav);

  } catch (e) {
    notifications.error(e);
  } finally {
    loader.classList.add('is-hidden');
  }

}

function createMarkUp(imagesArray) {
  return imagesArray.map(({ url, id }) => {
      return `<li class="fav-gallery_item">
              <img
                class="fav-gallery_image"
                src="${url}" alt=""
              >
              <button class="fav-image_button">
                <img 
                  class="fav-image_icon"
                  data-image-id="${id}"
                  src="./img/cancel-circle.svg" alt=""
                >
              </button>
          </li>`;
    })
    .join('');
}

async function handleDeleteFav(e) {
  if (!e.target.classList.contains('fav-image_icon')) {
    return;
  }

  const image_id = e.target.dataset.imageId;

  const { data: allFavs } = await getFavourites();
  const { id: idToDelete } = allFavs.find(el => el.image_id === image_id);
  deleteFavourite(idToDelete);

  const imageToDelete = e.target.closest('.fav-gallery_item');
  imageToDelete.remove();
  notifications.removedFromFavorites();
}