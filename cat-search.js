import{f,n as i,a as u,b as h,g as v,d as I,s as p}from"./assets/notifications-CaSNLay6.js";import{S}from"./assets/vendor-S7NC7oBj.js";function m(e){const{url:t,breeds:[{temperament:a,name:r,description:s}]}=e;return`
    <div>
      <img class="image" src="${t}" alt="${r}">
    </div>
    <div>
      <h2 class="name">${r}</h2>
      <p class="temper">${a}</p>
      <p class="description">${s}</p>
    </div>
  `}function g(e){return e.filter(t=>t.width>t.height).map(({url:t,id:a})=>`
        <li class="item">
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
        </li>`).join("")}const d=document.querySelector(".breed-form .select"),n=document.querySelector(".search-gallery"),c=document.querySelector(".cat-info"),o=document.querySelector(".loader");o.classList.remove("is-hidden");$();y();d.addEventListener("change",b);async function y(){try{const{data:e}=await f();L(e)}catch(e){i.error(e)}finally{o.classList.add("is-hidden"),d.classList.remove("is-hidden")}}function L(e){const t=e.map(({id:a,name:r})=>`<option class="select-option" value="${a}">${r}</option>`).join("");d.insertAdjacentHTML("beforeend",t),new S({select:".breed-form .select"})}async function b(e){c.innerHTML="",n.innerHTML="",o.classList.remove("is-hidden");const t=e.target.value;try{const[a,r]=await Promise.all([u(t),h(t)]),{data:[s]}=a;localStorage.setItem("catInfo",JSON.stringify(s)),c.innerHTML=m(s);const{data:l}=r;localStorage.setItem("catImages",JSON.stringify(l)),n.innerHTML=g(l),n.addEventListener("click",T)}catch{i.error(e)}finally{o.classList.add("is-hidden")}}async function T(e){if(!e.target.classList.contains("icon"))return;const{imageId:t}=e.target.dataset;e.target.setAttribute("src","./img/heart-broken.svg");try{const a=await v();if(a.data.find(r=>r.image_id===t)){const r=a.data.find(s=>s.image_id===t);e.target.setAttribute("src","./img/heart.svg"),await I(r.id),i.removedFromFavorites();return}await p(t),i.addedToFavorites()}catch(a){console.log(a)}}function $(){!localStorage.getItem("catInfo")||!localStorage.getItem("catImages")||(c.innerHTML=m(JSON.parse(localStorage.getItem("catInfo"))),n.innerHTML=g(JSON.parse(localStorage.getItem("catImages"))))}
//# sourceMappingURL=cat-search.js.map
