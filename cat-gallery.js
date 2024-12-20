import{g as o,n as r,d as s}from"./assets/notifications-CaSNLay6.js";import"./assets/vendor-S7NC7oBj.js";const i=document.querySelector(".fav-gallery"),c=document.querySelector(".loader"),n=document.querySelector(".slider");n.addEventListener("click",e=>{document.querySelector("body").classList.toggle("dark-mode")});c.classList.remove("is-hidden");l();async function l(){try{const{data:e}=await o();i.innerHTML=d(e),i.addEventListener("click",m)}catch(e){r.error(e)}finally{c.classList.add("is-hidden")}}function d(e){return e.map(({id:t,image:{url:a}})=>`<li class="item">
              <img
                class="image"
                src="${a}" alt=""
              >
              <button class="icon-container">
                <img
                  class="icon"
                  data-image-id="${t}"
                  src="./img/cancel-circle.svg" alt=""
                >
              </button>
          </li>`).join("")}async function m(e){if(!e.target.classList.contains("icon"))return;const t=e.target.dataset.imageId;s(t),e.target.closest(".item").remove(),r.removedFromFavorites()}
//# sourceMappingURL=cat-gallery.js.map
