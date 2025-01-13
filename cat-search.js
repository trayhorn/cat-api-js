import{f,n as i,a as u,b as v,g as h,d as I,s as p}from"./assets/notifications-CaSNLay6.js";import{S}from"./assets/vendor-S7NC7oBj.js";function m(e){const{url:a,breeds:[{temperament:t,name:r,description:s}]}=e;return`
    <div>
      <img class="image" src="${a}" alt="${r}">
    </div>
    <div>
      <h2 class="name">${r}</h2>
      <p class="temper">${t}</p>
      <p class="description">${s}</p>
    </div>
  `}function g(e){return e.map(({url:a,id:t,width:r,height:s})=>`
        <li class='item ${r<s?"vertical":""}'>
          <div>
            <img
              class="image"
              src="${a}" alt=""
            >
            <img
              data-image-id="${t}"
              class="icon"
              src="./img/heart.svg" alt="heart-icon"
            >
          </div>
        </li>`).join("")}const d=document.querySelector(".breed-form .select"),n=document.querySelector(".search-gallery"),o=document.querySelector(".cat-info"),c=document.querySelector(".loader");c.classList.remove("is-hidden");$();y();d.addEventListener("change",b);async function y(){try{const{data:e}=await f();L(e)}catch(e){i.error(e)}finally{c.classList.add("is-hidden"),d.classList.remove("is-hidden")}}function L(e){const a=e.map(({id:t,name:r})=>`<option class="select-option" value="${t}">${r}</option>`).join("");d.insertAdjacentHTML("beforeend",a),new S({select:".breed-form .select"})}async function b(e){o.innerHTML="",n.innerHTML="",c.classList.remove("is-hidden");const a=e.target.value;try{const[t,r]=await Promise.all([u(a),v(a)]),{data:[s]}=t;localStorage.setItem("catInfo",JSON.stringify(s)),o.innerHTML=m(s);const{data:l}=r;localStorage.setItem("catImages",JSON.stringify(l)),n.innerHTML=g(l),n.addEventListener("click",T)}catch{i.error(e)}finally{c.classList.add("is-hidden")}}async function T(e){if(!e.target.classList.contains("icon"))return;const{imageId:a}=e.target.dataset;e.target.setAttribute("src","./img/heart-broken.svg");try{const t=await h();if(t.data.find(r=>r.image_id===a)){const r=t.data.find(s=>s.image_id===a);e.target.setAttribute("src","./img/heart.svg"),await I(r.id),i.removedFromFavorites();return}await p(a),i.addedToFavorites()}catch(t){console.log(t)}}function $(){!localStorage.getItem("catInfo")||!localStorage.getItem("catImages")||(o.innerHTML=m(JSON.parse(localStorage.getItem("catInfo"))),n.innerHTML=g(JSON.parse(localStorage.getItem("catImages"))))}
//# sourceMappingURL=cat-search.js.map
