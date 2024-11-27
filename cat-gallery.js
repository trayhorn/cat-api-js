import{g as r,c as d,n as o,d as m}from"./assets/notifications-C5HtCE2O.js";import"./assets/vendor-DCC95h-G.js";const n=document.querySelector(".fav-gallery"),c=document.querySelector(".loader");c.classList.remove("is-hidden");g();async function g(){try{const{data:a}=await r(),e=a.map(i=>i.image_id),t=await Promise.all(e.map(async i=>{const{data:s}=await d(i);return s}));n.innerHTML=v(t),n.addEventListener("click",u)}catch(a){o.error(a)}finally{c.classList.add("is-hidden")}}function v(a){return a.map(({url:e,id:t})=>`<li class="fav-gallery_item">
              <img
                class="fav-gallery_image"
                src="${e}" alt=""
              >
              <button class="fav-image_button">
                <img 
                  class="fav-image_icon"
                  data-image-id="${t}"
                  src="./img/cancel-circle.svg" alt=""
                >
              </button>
          </li>`).join("")}async function u(a){if(!a.target.classList.contains("fav-image_icon"))return;const e=a.target.dataset.imageId,{data:t}=await r(),{id:i}=t.find(l=>l.image_id===e);m(i),a.target.closest(".fav-gallery_item").remove(),o.removedFromFavorites()}
//# sourceMappingURL=cat-gallery.js.map
