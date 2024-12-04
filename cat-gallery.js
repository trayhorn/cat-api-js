import{g as o,n as r,d as n}from"./assets/notifications-DhPoR_Xn.js";import"./assets/vendor-DCC95h-G.js";const i=document.querySelector(".fav-gallery"),s=document.querySelector(".loader");s.classList.remove("is-hidden");c();async function c(){try{const{data:e}=await o();console.log(e),i.innerHTML=l(e),i.addEventListener("click",g)}catch(e){r.error(e)}finally{s.classList.add("is-hidden")}}function l(e){return e.map(({id:a,image:{url:t}})=>`<li class="fav-gallery_item">
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
          </li>`).join("")}async function g(e){if(!e.target.classList.contains("fav-image_icon"))return;const a=e.target.dataset.imageId;n(a),e.target.closest(".fav-gallery_item").remove(),r.removedFromFavorites()}
//# sourceMappingURL=cat-gallery.js.map
