import{a as c,S as l}from"./assets/vendor-B0ghNh3e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="live_LV7zXu2gVxSKAfBMBcAZGgVB2z3Cb3e51Z9KExvFxmF0NnGnPHSN4mcMnI8uggOr";c.defaults.headers.common["x-api-key"]=f;c.defaults.baseURL="https://api.thecatapi.com/v1";function m(){return c.get("/breeds")}function p(t){return c.get(`images/search?breed_ids=${t}`)}const d=document.querySelector(".breed-form_select"),u=document.querySelector(".cat-info"),i=document.querySelector(".loader");i.classList.remove("is-hidden");m().then(({data:t})=>h(t)).catch(t=>{l.fire({title:"Error!",text:t.message,icon:"error",confirmButtonText:"Ok"})}).finally(()=>{i.classList.add("is-hidden"),d.classList.remove("is-hidden")});d.addEventListener("change",t=>{u.innerHTML="",i.classList.remove("is-hidden");const n=t.target.value;p(n).then(({data:o})=>{i.classList.add("is-hidden"),g(o[0])}).catch(o=>{l.fire({title:"Error!",text:o.message,icon:"error",confirmButtonText:"Ok"})})});function h(t){const n=t.map(({id:o,name:s})=>`<option value="${o}">${s}</option>`).join("");d.innerHTML=n}function g(t){const{temperament:n,name:o,description:s}=t.breeds[0],e=`
        <div>
          <img class="cat-info_image" src="${t.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${o}</h2>
          <p class="cat-info_temper">${n}</p>
          <p class="cat-info_description">${s}</p>
        </div>
      `;u.innerHTML=e}
//# sourceMappingURL=index.js.map
