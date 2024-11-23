import{g as n,c as o,n as d,d as m}from"./assets/notifications-nTtW3ul9.js";import"./assets/vendor-B0ghNh3e.js";const c=document.querySelector(".fav-gallery"),r=document.querySelector(".loader");r.classList.remove("is-hidden");g();async function g(){try{const{data:a}=await n(),i=a.map(t=>t.image_id),s=await Promise.all(i.map(async t=>{const{data:e}=await o(t);return e}));c.innerHTML=s.map(({url:t,id:e})=>`<li class="fav-gallery_item">
              <img
                class="fav-gallery_image"
                src="${t}" alt=""
              >
              <button class="fav-image_button">
                <img 
                  class="fav-image_icon"
                  data-image-id="${e}"
                  src="./img/cancel-circle.svg" alt=""
                >
              </button>
          </li>`).join(""),u()}catch(a){d.error(a)}finally{r.classList.add("is-hidden")}}function u(){c.addEventListener("click",async a=>{if(!a.target.classList.contains("fav-image_icon"))return;const i=a.target.dataset.imageId,{data:s}=await n(),e=s.filter(l=>l.image_id===i)[0].id;m(e)})}
//# sourceMappingURL=cat-gallery.js.map
