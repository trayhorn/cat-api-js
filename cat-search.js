import{f,a as u,b as h}from"./assets/api-CisEgv9m.js";import{S as p}from"./assets/vendor-B0ghNh3e.js";const l={error(e){return p.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok",didClose:()=>{location.reload()}})}},c=document.querySelector(".breed-form_select"),g=document.querySelector(".custom-arrow"),i=document.querySelector(".cat-gallery"),d=document.querySelector(".cat-info"),s=document.querySelector(".loader");s.classList.remove("is-hidden");f().then(({data:e})=>L(e)).catch(e=>l.error(e)).finally(()=>{s.classList.add("is-hidden"),c.classList.remove("is-hidden"),g.classList.remove("is-hidden")});c.addEventListener("change",y);async function y(e){d.innerHTML="",i.innerHTML="",s.classList.remove("is-hidden");const t=e.target.value;try{const[r,a]=await Promise.all([u(t),h(t)]),{data:o}=r;v(o[0]);const{data:m}=a;i.innerHTML=m.filter(n=>n.width>n.height).map(({url:n})=>`<li class="cat-gallery_item">
            <img class="cat-gallery_image" src="${n}" alt="">
          </li>`).join("")}catch{l.error(e)}finally{s.classList.add("is-hidden")}}function L(e){const t=e.map(({id:r,name:a})=>`<option value="${r}">${a}</option>`).join("");c.innerHTML=t}function v(e){const{temperament:t,name:r,description:a}=e.breeds[0],o=`
        <div>
          <img class="cat-info_image" src="${e.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${r}</h2>
          <p class="cat-info_temper">${t}</p>
          <p class="cat-info_description">${a}</p>
        </div>
      `;d.innerHTML=o}
//# sourceMappingURL=cat-search.js.map
