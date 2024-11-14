import{a as s}from"./assets/vendor-CNNbG8jS.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l="live_LV7zXu2gVxSKAfBMBcAZGgVB2z3Cb3e51Z9KExvFxmF0NnGnPHSN4mcMnI8uggOr";s.defaults.headers.common["x-api-key"]=l;s.defaults.baseURL="https://api.thecatapi.com/v1";function u(){return s.get("/breeds")}function f(t){return s.get(`images/search?breed_ids=${t}`)}const a=document.querySelector(".breed-form_select"),d=document.querySelector(".cat-info");u().then(({data:t})=>p(t)).catch(t=>console.log(t));a.addEventListener("change",t=>{d.innerHTML="";const n=t.target.value;f(n).then(({data:o})=>{m(o[0])}).catch(o=>console.log(o))});function p(t){const n=t.map(({id:o,name:c})=>`<option value="${o}">${c}</option>`).join("");a.innerHTML=n}function m(t){const{temperament:n,name:o,description:c}=t.breeds[0],e=`
        <div>
          <img class="cat-info_image" src="${t.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${o}</h2>
          <p class="cat-info_temper">${n}</p>
          <p class="cat-info_description">${c}</p>
        </div>
      `;d.innerHTML=e}
//# sourceMappingURL=index.js.map
