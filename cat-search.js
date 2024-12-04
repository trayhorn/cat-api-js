import{f,n as r,a as h,b as u,g as v,s as p}from"./assets/notifications-DhPoR_Xn.js";import"./assets/vendor-DCC95h-G.js";const d=document.querySelector(".breed-form_select"),y=document.querySelector(".custom-arrow"),o=document.querySelector(".cat-gallery"),l=document.querySelector(".cat-info"),n=document.querySelector(".loader");n.classList.remove("is-hidden");f().then(({data:e})=>I(e)).catch(e=>r.error(e)).finally(()=>{n.classList.add("is-hidden"),d.classList.remove("is-hidden"),y.classList.remove("is-hidden")});d.addEventListener("change",L);async function L(e){l.innerHTML="",o.innerHTML="",n.classList.remove("is-hidden");const a=e.target.value;try{const[t,s]=await Promise.all([h(a),u(a)]),{data:c}=t;_(c[0]);const{data:m}=s;o.innerHTML=m.filter(i=>i.width>i.height).map(({url:i,id:g})=>`<li class="cat-gallery_item">
            <div>
              <img
                class="cat-gallery_image"
                src="${i}" alt=""
              >
              <img
                data-image-id="${g}"
                class="cat-gallery_icon"
                src="./img/heart.svg" alt="heart-icon"
              >
            </div>
          </li>`).join(""),o.addEventListener("click",$)}catch{r.error(e)}finally{n.classList.add("is-hidden")}}function I(e){const a=e.map(({id:t,name:s})=>`<option value="${t}">${s}</option>`).join("");d.innerHTML=a}function _(e){const{temperament:a,name:t,description:s}=e.breeds[0],c=`
        <div>
          <img class="cat-info_image" src="${e.url}" alt="">
        </div>
        <div>
          <h2 class="cat-info_name">${t}</h2>
          <p class="cat-info_temper">${a}</p>
          <p class="cat-info_description">${s}</p>
        </div>
      `;l.innerHTML=c}async function $(e){if(!e.target.classList.contains("cat-gallery_icon"))return;const a=e.target.dataset.imageId;try{if((await v()).data.find(s=>s.image_id===a)){r.alreadyInFavariotes();return}await p(a),r.addedToFavorites()}catch(t){console.log(t)}}
//# sourceMappingURL=cat-search.js.map
