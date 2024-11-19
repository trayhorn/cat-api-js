import{f as d,a as l}from"./assets/api-BM8oayT1.js";import{S as m}from"./assets/vendor-B0ghNh3e.js";const i={error(e){return m.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok",didClose:()=>{location.reload()}})}},s=document.querySelector(".breed-form_select"),f=document.querySelector(".custom-arrow"),c=document.querySelector(".cat-info"),n=document.querySelector(".loader");n.classList.remove("is-hidden");d().then(({data:e})=>h(e)).catch(e=>i.error(e)).finally(()=>{n.classList.add("is-hidden"),s.classList.remove("is-hidden"),f.classList.remove("is-hidden")});s.addEventListener("change",u);function u(e){c.innerHTML="",n.classList.remove("is-hidden");const r=e.target.value;l(r).then(({data:t})=>{n.classList.add("is-hidden"),p(t[0])}).catch(t=>i.error(t))}function h(e){const r=e.map(({id:t,name:o})=>`<option value="${t}">${o}</option>`).join("");s.innerHTML=r}function p(e){const{temperament:r,name:t,description:o}=e.breeds[0],a=`
        <div>
          <img class="cat-info_image" src="${e.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${t}</h2>
          <p class="cat-info_temper">${r}</p>
          <p class="cat-info_description">${o}</p>
        </div>
      `;c.innerHTML=a}
//# sourceMappingURL=cat-search.js.map
