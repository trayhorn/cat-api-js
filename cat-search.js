import{f as h,n as l,a as f,b as u,s as p}from"./assets/notifications-nTtW3ul9.js";import"./assets/vendor-B0ghNh3e.js";const o=document.querySelector(".breed-form_select"),v=document.querySelector(".custom-arrow"),r=document.querySelector(".cat-gallery"),d=document.querySelector(".cat-info"),i=document.querySelector(".loader");i.classList.remove("is-hidden");h().then(({data:e})=>L(e)).catch(e=>l.error(e)).finally(()=>{i.classList.add("is-hidden"),o.classList.remove("is-hidden"),v.classList.remove("is-hidden")});o.addEventListener("change",y);async function y(e){d.innerHTML="",r.innerHTML="",i.classList.remove("is-hidden");const t=e.target.value;try{const[a,s]=await Promise.all([f(t),u(t)]),{data:c}=a;I(c[0]);const{data:m}=s;r.innerHTML=m.filter(n=>n.width>n.height).map(({url:n,id:g})=>`<li class="cat-gallery_item">
            <div>
              <img
                class="cat-gallery_image"
                src="${n}" alt=""
              >
              <img
                data-image-id="${g}"
                class="cat-gallery_icon"
                src="./img/heart.svg" alt="heart-icon"
              >
            </div>
          </li>`).join(""),r.addEventListener("click",_)}catch{l.error(e)}finally{i.classList.add("is-hidden")}}function L(e){const t=e.map(({id:a,name:s})=>`<option value="${a}">${s}</option>`).join("");o.innerHTML=t}function I(e){const{temperament:t,name:a,description:s}=e.breeds[0],c=`
        <div>
          <img class="cat-info_image" src="${e.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${a}</h2>
          <p class="cat-info_temper">${t}</p>
          <p class="cat-info_description">${s}</p>
        </div>
      `;d.innerHTML=c}function _(e){e.target.classList.contains("cat-gallery_icon")&&p(e.target.dataset.imageId)}
//# sourceMappingURL=cat-search.js.map
