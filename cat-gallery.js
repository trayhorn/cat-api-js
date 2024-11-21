import{g as s,c as l}from"./assets/api-yaB4itG1.js";import"./assets/vendor-B0ghNh3e.js";const n=document.querySelector(".fav-gallery");async function m(){const{data:e}=await s(),t=e.map(a=>a.image_id),i=await Promise.all(t.map(async a=>{const{data:r}=await l(a);return r}));n.innerHTML=i.map(({url:a})=>`<li class="fav-gallery_item">
              <img
                class="fav-gallery_image"
                src="${a}" alt=""
              >
          </li>`).join("")}m();
//# sourceMappingURL=cat-gallery.js.map
