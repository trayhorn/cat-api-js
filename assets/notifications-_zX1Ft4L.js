import{a as o,S as c}from"./vendor-B0ghNh3e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u="live_LV7zXu2gVxSKAfBMBcAZGgVB2z3Cb3e51Z9KExvFxmF0NnGnPHSN4mcMnI8uggOr";o.defaults.headers.common["x-api-key"]=u;o.defaults.baseURL="https://api.thecatapi.com/v1";function d(){return o.get("/breeds")}function l(t){return o.get(`images/search?breed_ids=${t}`)}function m(t){return o.get("images/search",{params:{limit:50,page:0,breed_ids:t}})}function g(t){const s=JSON.stringify({image_id:t});return o({method:"post",url:"/favourites",data:s,headers:{"Content-Type":"application/json"}})}function p(){return o.get("/favourites")}function h(t){return o.get(`/images/${t}`)}function y(t){return o.delete(`/favourites/${t}`)}const v={error(t){return c.fire({title:"Error!",text:t.message,icon:"error",confirmButtonText:"Ok",didClose:()=>{location.reload()}})}};export{l as a,m as b,h as c,y as d,d as f,p as g,v as n,g as s};
//# sourceMappingURL=notifications-_zX1Ft4L.js.map
