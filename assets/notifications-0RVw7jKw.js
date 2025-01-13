import{a as i,i as n,b as d}from"./vendor-S7NC7oBj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const l="live_LV7zXu2gVxSKAfBMBcAZGgVB2z3Cb3e51Z9KExvFxmF0NnGnPHSN4mcMnI8uggOr";i.defaults.headers.common["x-api-key"]=l;i.defaults.baseURL="https://api.thecatapi.com/v1";function m(){return i.get("/breeds")}function f(t){return i.get(`images/search?breed_ids=${t}`)}function g(t){return i.get("images/search",{params:{limit:50,page:0,breed_ids:t}})}function p(t){const r=JSON.stringify({image_id:t});return i({method:"post",url:"/favourites",data:r,headers:{"Content-Type":"application/json"}})}function v(){return i.get("/favourites")}function h(t){return i.delete(`/favourites/${t}`)}function y(t){const{url:r,breeds:[{temperament:a,name:o,description:e}]}=t;return`
    <div>
      <img class="image" src="${r}" alt="${o}">
    </div>
    <div>
      <h2 class="name">${o}</h2>
      <p class="temper">${a}</p>
      <p class="description">${e}</p>
    </div>
  `}function b(t){return t.map(({url:r,id:a,width:o,height:e})=>`
        <li class='item ${o<e?"vertical":""}'>
          <div>
            <img
              class="image"
              src="${r}" alt=""
            >
            <img
              data-image-id="${a}"
              class="icon"
              src="./img/heart.svg" alt="heart-icon"
            >
          </div>
        </li>`).join("")}function $(t){return t.map(({id:r,image:{url:a}})=>`<li class="item">
              <img
                class="image"
                src="${a}" alt=""
              >
              <button class="icon-container">
                <img
                  class="icon"
                  data-image-id="${r}"
                  src="./img/cancel-circle.svg" alt=""
                >
              </button>
          </li>`).join("")}n.settings({position:"topRight",closeOnEscape:!0,timeout:3e3});const F={error(t){return d.fire({title:"Error!",text:t.message,icon:"error",confirmButtonText:"Ok",didClose:()=>{location.reload()}})},addedToFavorites:()=>n.success({message:"Added to favorites!"}),removedFromFavorites:()=>n.info({message:"Removed from favorites!"}),alreadyInFavariotes:()=>n.error({message:"Already added to favorites"})};export{f as a,g as b,b as c,h as d,$ as e,m as f,v as g,F as n,y as r,p as s};
//# sourceMappingURL=notifications-0RVw7jKw.js.map
