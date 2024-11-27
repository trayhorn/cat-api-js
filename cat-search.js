import{f as h,n as o,a as f,b as u,s as p}from"./assets/notifications-C5HtCE2O.js";import"./assets/vendor-DCC95h-G.js";const l=document.querySelector(".breed-form_select"),v=document.querySelector(".custom-arrow"),i=document.querySelector(".cat-gallery"),d=document.querySelector(".cat-info"),r=document.querySelector(".loader");r.classList.remove("is-hidden");h().then(({data:e})=>L(e)).catch(e=>o.error(e)).finally(()=>{r.classList.add("is-hidden"),l.classList.remove("is-hidden"),v.classList.remove("is-hidden")});l.addEventListener("change",y);async function y(e){d.innerHTML="",i.innerHTML="",r.classList.remove("is-hidden");const a=e.target.value;try{const[t,s]=await Promise.all([f(a),u(a)]),{data:c}=t;I(c[0]);const{data:m}=s;i.innerHTML=m.filter(n=>n.width>n.height).map(({url:n,id:g})=>`<li class="cat-gallery_item">
            <div>
              <img
                class="cat-gallery_image"
                src="${n}" alt=""
              >
              <img
                data-image-id="${g}"
                class="cat-gallery_icon"
                src="./img/heart.svg" alt="heart-icon"
              >
            </div>
          </li>`).join(""),i.addEventListener("click",_)}catch{o.error(e)}finally{r.classList.add("is-hidden")}}function L(e){const a=e.map(({id:t,name:s})=>`<option value="${t}">${s}</option>`).join("");l.innerHTML=a}function I(e){const{temperament:a,name:t,description:s}=e.breeds[0],c=`
        <div>
          <img class="cat-info_image" src="${e.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${t}</h2>
          <p class="cat-info_temper">${a}</p>
          <p class="cat-info_description">${s}</p>
        </div>
      `;d.innerHTML=c}async function _(e){if(e.target.classList.contains("cat-gallery_icon"))try{await p(e.target.dataset.imageId),o.addedToFavorites()}catch(a){console.log(a)}}
//# sourceMappingURL=cat-search.js.map
