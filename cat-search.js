import{f as m,n as i,a as g,b as f,g as h,d as u,s as v}from"./assets/notifications-CaSNLay6.js";import{S as p}from"./assets/vendor-S7NC7oBj.js";const o=document.querySelector(".breed-form .select"),c=document.querySelector(".search-gallery"),d=document.querySelector(".cat-info"),n=document.querySelector(".loader");n.classList.remove("is-hidden");m().then(({data:e})=>y(e)).catch(e=>i.error(e)).finally(()=>{n.classList.add("is-hidden"),o.classList.remove("is-hidden")});o.addEventListener("change",L);function y(e){const t=e.map(({id:a,name:s})=>`<option class="select-option" value="${a}">${s}</option>`).join("");o.insertAdjacentHTML("beforeend",t),new p({select:".breed-form .select"})}async function L(e){d.innerHTML="",c.innerHTML="",n.classList.remove("is-hidden");const t=e.target.value;try{const[a,s]=await Promise.all([g(t),f(t)]),{data:[r]}=a;d.innerHTML=b(r);const{data:l}=s;c.innerHTML=I(l),c.addEventListener("click",S)}catch{i.error(e)}finally{n.classList.add("is-hidden")}}function b(e){const{url:t,breeds:[{temperament:a,name:s,description:r}]}=e;return`
        <div>
          <img class="image" src="${t}" alt="${s}">
        </div>
        <div>
          <h2 class="name">${s}</h2>
          <p class="temper">${a}</p>
          <p class="description">${r}</p>
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
          </li>`).join("")}async function S(e){if(!e.target.classList.contains("icon"))return;const{imageId:t}=e.target.dataset;e.target.setAttribute("src","./img/heart-broken.svg");try{const a=await h();if(a.data.find(s=>s.image_id===t)){const s=a.data.find(r=>r.image_id===t);e.target.setAttribute("src","./img/heart.svg"),await u(s.id),i.removedFromFavorites();return}await v(t),i.addedToFavorites()}catch(a){console.log(a)}}
//# sourceMappingURL=cat-search.js.map
