import{f,n,a as h,b as v,g as u,s as p}from"./assets/notifications-CaSNLay6.js";import{S as y}from"./assets/vendor-S7NC7oBj.js";const d=document.querySelector(".breed-form_select"),o=document.querySelector(".cat-gallery"),l=document.querySelector(".cat-info"),r=document.querySelector(".loader");r.classList.remove("is-hidden");f().then(({data:e})=>L(e)).catch(e=>n.error(e)).finally(()=>{r.classList.add("is-hidden"),d.classList.remove("is-hidden")});d.addEventListener("change",I);function L(e){const a=e.map(({id:t,name:s})=>`<option class="select-option" value="${t}">${s}</option>`).join("");d.insertAdjacentHTML("beforeend",a),new y({select:".breed-form_select"})}async function I(e){l.innerHTML="",o.innerHTML="",r.classList.remove("is-hidden");const a=e.target.value;try{const[t,s]=await Promise.all([h(a),v(a)]),{data:c}=t;_(c[0]);const{data:m}=s;o.innerHTML=m.filter(i=>i.width>i.height).map(({url:i,id:g})=>`<li class="cat-gallery_item">
            <div>
              <img
                class="cat-gallery_image"
                src="${i}" alt=""
              >
              <img
                data-image-id="${g}"
                class="cat-gallery_icon"
                src="./img/heart.svg" alt="heart-icon"
              >
            </div>
          </li>`).join(""),o.addEventListener("click",S)}catch{n.error(e)}finally{r.classList.add("is-hidden")}}function _(e){const{temperament:a,name:t,description:s}=e.breeds[0],c=`
        <div>
          <img class="cat-info_image" src="${e.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${t}</h2>
          <p class="cat-info_temper">${a}</p>
          <p class="cat-info_description">${s}</p>
        </div>
      `;l.innerHTML=c}async function S(e){if(!e.target.classList.contains("cat-gallery_icon"))return;const a=e.target.dataset.imageId;try{if((await u()).data.find(s=>s.image_id===a)){n.alreadyInFavariotes();return}await p(a),n.addedToFavorites()}catch(t){console.log(t)}}
//# sourceMappingURL=cat-search.js.map
