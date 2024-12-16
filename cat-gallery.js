import{g as n,n as r,d as o}from"./assets/notifications-CaSNLay6.js";import"./assets/vendor-S7NC7oBj.js";const i=document.querySelector(".fav-gallery"),s=document.querySelector(".loader");s.classList.remove("is-hidden");c();async function c(){try{const{data:e}=await n();i.innerHTML=l(e),i.addEventListener("click",m)}catch(e){r.error(e)}finally{s.classList.add("is-hidden")}}function l(e){return e.map(({id:a,image:{url:t}})=>`<li class="fav-gallery_item">
              <img
                class="fav-gallery_image"
                src="${t}" alt=""
              >
              <button class="fav-image_button">
                <img 
                  class="fav-image_icon"
                  data-image-id="${a}"
                  src="./img/cancel-circle.svg" alt=""
                >
              </button>
          </li>`).join("")}async function m(e){if(!e.target.classList.contains("fav-image_icon"))return;const a=e.target.dataset.imageId;o(a),e.target.closest(".fav-gallery_item").remove(),r.removedFromFavorites()}
//# sourceMappingURL=cat-gallery.js.map
