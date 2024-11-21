import{f,a as u,b as h,s as p}from"./assets/api-yaB4itG1.js";import{S as v}from"./assets/vendor-B0ghNh3e.js";const l={error(e){return v.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok",didClose:()=>{location.reload()}})}},o=document.querySelector(".breed-form_select"),y=document.querySelector(".custom-arrow"),c=document.querySelector(".cat-gallery"),d=document.querySelector(".cat-info"),n=document.querySelector(".loader");n.classList.remove("is-hidden");f().then(({data:e})=>I(e)).catch(e=>l.error(e)).finally(()=>{n.classList.add("is-hidden"),o.classList.remove("is-hidden"),y.classList.remove("is-hidden")});o.addEventListener("change",L);async function L(e){d.innerHTML="",c.innerHTML="",n.classList.remove("is-hidden");const t=e.target.value;try{const[a,r]=await Promise.all([u(t),h(t)]),{data:i}=a;S(i[0]);const{data:m}=r;c.innerHTML=m.filter(s=>s.width>s.height).map(({url:s,id:g})=>`<li class="cat-gallery_item">
            <div>
              <img
                class="cat-gallery_image"
                src="${s}" alt=""
              >
              <img
                data-image-id="${g}" 
                class="cat-gallery_icon" 
                src="./img/heart.svg" alt="heart-icon"
              >
            </div>
          </li>`).join(""),c.addEventListener("click",_)}catch{l.error(e)}finally{n.classList.add("is-hidden")}}function I(e){const t=e.map(({id:a,name:r})=>`<option value="${a}">${r}</option>`).join("");o.innerHTML=t}function S(e){const{temperament:t,name:a,description:r}=e.breeds[0],i=`
        <div>
          <img class="cat-info_image" src="${e.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${a}</h2>
          <p class="cat-info_temper">${t}</p>
          <p class="cat-info_description">${r}</p>
        </div>
      `;d.innerHTML=i}function _(e){e.target.classList.contains("cat-gallery_icon")&&p(e.target.dataset.imageId)}
//# sourceMappingURL=cat-search.js.map
