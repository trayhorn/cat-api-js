export function renderCatInfo(object) {
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

export function renderCatImages(data) {
  return data
    .map(({ url, id, width, height }) => {
      return `
        <li class='item ${width < height ? "vertical" : ""}'>
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