import{g as c,c as o,n as l,d}from"./assets/notifications-_zX1Ft4L.js";import"./assets/vendor-B0ghNh3e.js";const n=document.querySelector(".fav-gallery"),r=document.querySelector(".loader");r.classList.remove("is-hidden");m();async function m(){try{const{data:a}=await c(),e=a.map(i=>i.image_id),t=await Promise.all(e.map(async i=>{const{data:s}=await o(i);return s}));n.innerHTML=g(t),n.addEventListener("click",u)}catch(a){l.error(a)}finally{r.classList.add("is-hidden")}}function g(a){return a.map(({url:e,id:t})=>`<li class="fav-gallery_item">
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
          </li>`).join("")}async function u(a){if(!a.target.classList.contains("fav-image_icon"))return;const e=a.target.dataset.imageId,{data:t}=await c(),{id:i}=t.find(s=>s.image_id===e);d(i)}
//# sourceMappingURL=cat-gallery.js.map
