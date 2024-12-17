import{f as m,n as r,a as g,b as f,g as h,s as u}from"./assets/notifications-CaSNLay6.js";import{S as v}from"./assets/vendor-S7NC7oBj.js";const o=document.querySelector(".breed-form_select"),c=document.querySelector(".cat-gallery"),l=document.querySelector(".cat-info"),i=document.querySelector(".loader");i.classList.remove("is-hidden");m().then(({data:e})=>p(e)).catch(e=>r.error(e)).finally(()=>{i.classList.add("is-hidden"),o.classList.remove("is-hidden")});o.addEventListener("change",y);function p(e){const a=e.map(({id:t,name:s})=>`<option class="select-option" value="${t}">${s}</option>`).join("");o.insertAdjacentHTML("beforeend",a),new v({select:".breed-form_select"})}async function y(e){l.innerHTML="",c.innerHTML="",i.classList.remove("is-hidden");const a=e.target.value;try{const[t,s]=await Promise.all([g(a),f(a)]),{data:[n]}=t;console.log(n),l.innerHTML=L(n);const{data:d}=s;c.innerHTML=I(d),c.addEventListener("click",_)}catch{r.error(e)}finally{i.classList.add("is-hidden")}}function L(e){const{url:a,breeds:[{temperament:t,name:s,description:n}]}=e;return`
        <div>
          <img class="cat-info_image" src="${a}" alt="${s}">
        </div>
        <div>
          <h2 class="cat-info_name">${s}</h2>
          <p class="cat-info_temper">${t}</p>
          <p class="cat-info_description">${n}</p>
        </div>
      `}function I(e){return e.filter(a=>a.width>a.height).map(({url:a,id:t})=>`<li class="cat-gallery_item">
            <div>
              <img
                class="cat-gallery_image"
                src="${a}" alt=""
              >
              <img
                data-image-id="${t}"
                class="cat-gallery_icon"
                src="./img/heart.svg" alt="heart-icon"
              >
            </div>
          </li>`).join("")}async function _(e){if(!e.target.classList.contains("cat-gallery_icon"))return;const{imageId:a}=e.target.dataset;try{if((await h()).data.find(s=>s.image_id===a)){r.alreadyInFavariotes();return}await u(a),r.addedToFavorites()}catch(t){console.log(t)}}
//# sourceMappingURL=cat-search.js.map
