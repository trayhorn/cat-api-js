import{f as m,n as r,a as g,b as f,g as h,s as u}from"./assets/notifications-CaSNLay6.js";import{S as v}from"./assets/vendor-S7NC7oBj.js";const o=document.querySelector(".breed-form .select"),c=document.querySelector(".search-gallery"),d=document.querySelector(".cat-info"),i=document.querySelector(".loader");i.classList.remove("is-hidden");m().then(({data:e})=>p(e)).catch(e=>r.error(e)).finally(()=>{i.classList.add("is-hidden"),o.classList.remove("is-hidden")});o.addEventListener("change",y);function p(e){const t=e.map(({id:a,name:s})=>`<option class="select-option" value="${a}">${s}</option>`).join("");o.insertAdjacentHTML("beforeend",t),new v({select:".breed-form .select"})}async function y(e){d.innerHTML="",c.innerHTML="",i.classList.remove("is-hidden");const t=e.target.value;try{const[a,s]=await Promise.all([g(t),f(t)]),{data:[n]}=a;console.log(n),d.innerHTML=L(n);const{data:l}=s;c.innerHTML=I(l),c.addEventListener("click",S)}catch{r.error(e)}finally{i.classList.add("is-hidden")}}function L(e){const{url:t,breeds:[{temperament:a,name:s,description:n}]}=e;return`
        <div>
          <img class="image" src="${t}" alt="${s}">
        </div>
        <div>
          <h2 class="name">${s}</h2>
          <p class="temper">${a}</p>
          <p class="description">${n}</p>
        </div>
      `}function I(e){return e.filter(t=>t.width>t.height).map(({url:t,id:a})=>`<li class="item">
            <div>
              <img
                class="image"
                src="${t}" alt=""
              >
              <img
                data-image-id="${a}"
                class="icon"
                src="./img/heart.svg" alt="heart-icon"
              >
            </div>
          </li>`).join("")}async function S(e){if(!e.target.classList.contains("icon"))return;const{imageId:t}=e.target.dataset;try{if((await h()).data.find(s=>s.image_id===t)){r.alreadyInFavariotes();return}await u(t),r.addedToFavorites()}catch(a){console.log(a)}}
//# sourceMappingURL=cat-search.js.map
