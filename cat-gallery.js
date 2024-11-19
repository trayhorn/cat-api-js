import{f as o,b as c}from"./assets/api-BM8oayT1.js";import{S as l}from"./assets/vendor-B0ghNh3e.js";const n=document.querySelector(".breed-form_select"),i=document.querySelector(".cat-gallery");o().then(({data:e})=>s(e)).catch(e=>{l.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok"})}).finally(()=>{n.classList.remove("is-hidden")});n.addEventListener("change",e=>{const t=e.target.value;c(t).then(r=>{i.innerHTML=r.data.map(({url:a})=>`<li class="cat-gallery_item">
        <img class="cat-gallery_image" src="${a}" alt="">
      </li>`).join("")})});function s(e){const t=e.map(({id:r,name:a})=>`<option value="${r}">${a}</option>`).join("");n.innerHTML=t}
//# sourceMappingURL=cat-gallery.js.map
