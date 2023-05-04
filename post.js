(()=>{"use strict";var e,t={63:()=>{class e{constructor(e){this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._closeButton=this._popup.querySelector(".popup__close-btn"),this._image=this._popup.querySelector(".popup__photo"),this._description=this._popup.querySelector(".popup__photo-description")}open(e){this._popup.classList.add("popup_opened"),this._image.src=e.dataset.src,this._description.textContent=e.alt,this._popup.addEventListener("mousedown",(e=>this.closeFromOverlay(e))),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this.closeFromOverlay)}_handleEscClose(e){"Escape"===e.key&&this.close()}closeFromOverlay(e){(e.target.classList.contains("popup_opened")||e.target===this._closeButton||"path"==e.target.tagName)&&this.close()}}class t{constructor(e,t){this._carousel=document.querySelector(`.${e}`),this._list=this._carousel.querySelector(`.${e}__galery-list`),this._listElems=this._carousel.querySelectorAll(`.${e}__galery-item`),this._photoAbove=this._carousel.querySelector(`.${e}__full-image`),this._prevButton=document.querySelector(`.${e}__btn-prev`),this._nextButton=document.querySelector(`.${e}__btn-next`),this._width=t,this._position=0,this._countCards=()=>window.innerWidth>1050?4:window.innerWidth<=1050&&window.innerWidth>750?3:window.innerWidth<=750&&window.innerWidth>650?2:1}_markCards(){let e=1;this._listElems.forEach((t=>{t.style.position="relative",t.insertAdjacentHTML("beforeend",`<span style="position:absolute;left:0;top:0">${e}</span>`),e++}))}_setEventListeners(){this._prevButton.addEventListener("click",(()=>this._slideToPrev())),this._nextButton.addEventListener("click",(()=>this._slideToNext()))}_openPhotoInModal(){this._list.addEventListener("click",(e=>this._openModal(e)))}_openModal(t){const s=t.target.closest("li").querySelector("img");new e(".popup").open(s)}_openPhotoAbove(){this._list.addEventListener("click",(e=>this._showPhotoAbove(e)))}_showPhotoAbove(e){const t=e.target.closest("li").querySelector("img");this._photoAbove.src=t.dataset.src,this._photoAbove.alt=t.alt}_slideToPrev(){this._position+=this._width*this._countCards(),this._position=Math.min(this._position,0),this._list.style.marginLeft=this._position+"px"}_slideToNext(){this._position-=this._width*this._countCards(),this._position=Math.max(this._position,-this._width*(this._listElems.length-this._countCards())),this._list.style.marginLeft=this._position+"px"}}const s=new t("carousel-bottom",244),o=document.querySelector(".menu"),i=document.querySelector(".menu__container"),n=document.querySelector(".header__open-menu-button"),r=document.querySelector(".menu__close-btn"),l=document.querySelector(".menu__lang-switch-front"),c=document.querySelector(".menu__lang-ru"),a=document.querySelector(".menu__lang-en"),_=document.querySelectorAll(".post-photos");function d(){o.classList.remove("menu_opened"),i.classList.remove("menu__container_opened"),r.removeEventListener("click",d),c.removeEventListener("click",v),a.removeEventListener("click",u),i.removeEventListener("click",p),o.removeEventListener("click",d),document.removeEventListener("keydown",h)}function p(e){e.stopPropagation(),e.target.classList.value.includes("menu__navigation-btn")&&d()}function h(e){"Escape"===e.key&&(e.preventDefault(),d())}function u(){l.classList.add("menu__lang-switch-front_right"),a.classList.add("menu__lang_active"),c.classList.remove("menu__lang_active")}function v(){l.classList.remove("menu__lang-switch-front_right"),c.classList.add("menu__lang_active"),a.classList.remove("menu__lang_active")}s._setEventListeners(),s._slideToNext(),s._slideToPrev(),_.forEach(((e,t)=>{const s=e.querySelector(".post-photos__galery-list"),o=e.querySelectorAll(".post-photos__galery-item"),i=e.querySelector(".post-photos__full-image"),n=e.querySelector(".post-photos__btn-prev"),r=e.querySelector(".post-photos__btn-next"),l=`post-photos-${t}`;e.classList.add(l),s.classList.add(`${l}__galery-list`),o.forEach((e=>e.classList.add(`${l}__galery-item`))),i.classList.add(`${l}__full-image`),n.classList.add(`${l}__btn-prev`),r.classList.add(`${l}__btn-next`)})),_.forEach(((e,s)=>function(e){const s=new t(e,244);s._setEventListeners(),s._openPhotoAbove(),s._slideToNext(),s._slideToPrev()}(`post-photos-${s}`))),n.addEventListener("click",(function(){o.classList.add("menu_opened"),i.classList.add("menu__container_opened"),r.addEventListener("click",d),c.addEventListener("click",v),a.addEventListener("click",u),i.addEventListener("click",p),o.addEventListener("click",d),document.addEventListener("keydown",h)}))}},s={};function o(e){var i=s[e];if(void 0!==i)return i.exports;var n=s[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,s,i,n)=>{if(!s){var r=1/0;for(_=0;_<e.length;_++){for(var[s,i,n]=e[_],l=!0,c=0;c<s.length;c++)(!1&n||r>=n)&&Object.keys(o.O).every((e=>o.O[e](s[c])))?s.splice(c--,1):(l=!1,n<r&&(r=n));if(l){e.splice(_--,1);var a=i();void 0!==a&&(t=a)}}return t}n=n||0;for(var _=e.length;_>0&&e[_-1][2]>n;_--)e[_]=e[_-1];e[_]=[s,i,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={913:0,259:0};o.O.j=t=>0===e[t];var t=(t,s)=>{var i,n,[r,l,c]=s,a=0;if(r.some((t=>0!==e[t]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(c)var _=c(o)}for(t&&t(s);a<r.length;a++)n=r[a],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(_)},s=self.webpackChunksea_breeze_main=self.webpackChunksea_breeze_main||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var i=o.O(void 0,[259],(()=>o(63)));i=o.O(i)})();