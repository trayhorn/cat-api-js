import{f as d,a as l}from"./assets/api-BsiVDZ6G.js";import{S as o}from"./assets/vendor-B0ghNh3e.js";const s=document.querySelector(".breed-form_select"),c=document.querySelector(".cat-info"),r=document.querySelector(".loader");r.classList.remove("is-hidden");d().then(({data:e})=>m(e)).catch(e=>{o.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok"})}).finally(()=>{r.classList.add("is-hidden"),s.classList.remove("is-hidden")});s.addEventListener("change",e=>{c.innerHTML="",r.classList.remove("is-hidden");const n=e.target.value;l(n).then(({data:t})=>{r.classList.add("is-hidden"),f(t[0])}).catch(t=>{o.fire({title:"Error!",text:t.message,icon:"error",confirmButtonText:"Ok"})})});function m(e){const n=e.map(({id:t,name:i})=>`<option value="${t}">${i}</option>`).join("");s.innerHTML=n}function f(e){const{temperament:n,name:t,description:i}=e.breeds[0],a=`
        <div>
          <img class="cat-info_image" src="${e.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${t}</h2>
          <p class="cat-info_temper">${n}</p>
          <p class="cat-info_description">${i}</p>
        </div>
      `;c.innerHTML=a}
//# sourceMappingURL=cat-search.js.map
