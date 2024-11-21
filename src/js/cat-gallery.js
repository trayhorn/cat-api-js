import { getFavourites, getImageById } from './api';

const gallery = document.querySelector('.fav-gallery');;

async function renderFavourites() {
  const { data } = await getFavourites();
  const favIds = data.map(el => el.image_id);

  const images = await Promise.all(
    favIds.map(async id => {
      const {data: image} = await getImageById(id);
      return image;
    })
  )

  gallery.innerHTML = images
    .map(({ url }) => {
      return `<li class="fav-gallery_item">
              <img
                class="fav-gallery_image"
                src="${url}" alt=""
              >
          </li>`;
    })
    .join('');
}

renderFavourites();