(()=>{"use strict";var e,t={63:()=>{class e{constructor(e){this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._closeButton=this._popup.querySelector(".popup__close-btn"),this._image=this._popup.querySelector(".popup__photo"),this._description=this._popup.querySelector(".popup__photo-description")}open(e){this._popup.classList.add("popup_opened"),this._image.src=e.src,this._description.textContent=e.alt,this._popup.addEventListener("mousedown",(e=>this.closeFromOverlay(e))),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this.closeFromOverlay)}_handleEscClose(e){"Escape"===e.key&&this.close()}closeFromOverlay(e){(e.target.classList.contains("popup_opened")||e.target===this._closeButton||"path"==e.target.tagName)&&this.close()}}class t{constructor(e,t){this._carousel=document.querySelector(`.${e}`),this._list=this._carousel.querySelector(`.${e}__galery-list`),this._listElems=this._carousel.querySelectorAll(`.${e}__galery-item`),this._photoAbove=this._carousel.querySelector(`.${e}__full-image`),this._prevButton=document.querySelector(`.${e}__btn-prev`),this._nextButton=document.querySelector(`.${e}__btn-next`),this._width=t,this._position=0,this._countCards=()=>window.innerWidth>1050?4:window.innerWidth<=1050&&window.innerWidth>750?3:window.innerWidth<=750&&window.innerWidth>650?2:1}_markCards(){let e=1;this._listElems.forEach((t=>{t.style.position="relative",t.insertAdjacentHTML("beforeend",`<span style="position:absolute;left:0;top:0">${e}</span>`),e++}))}_setEventListeners(){this._prevButton.addEventListener("click",(()=>this._slideToPrev())),this._nextButton.addEventListener("click",(()=>this._slideToNext()))}_openPhotoInModal(){this._list.addEventListener("click",(e=>this._openModal(e)))}_openModal(t){const s=t.target.closest("li").querySelector("img");new e(".popup").open(s)}_openPhotoAbove(){this._list.addEventListener("click",(e=>this._showPhotoAbove(e)))}_showPhotoAbove(e){const t=e.target.closest("li").querySelector("img");this._photoAbove.src=t.src,this._photoAbove.alt=t.alt}_slideToPrev(){this._position+=this._width*this._countCards(),this._position=Math.min(this._position,0),this._list.style.marginLeft=this._position+"px"}_slideToNext(){this._position-=this._width*this._countCards(),this._position=Math.max(this._position,-this._width*(this._listElems.length-this._countCards())),this._list.style.marginLeft=this._position+"px"}}const s=new t("carousel-bottom",244),o=new t("post-photos",244),i=document.querySelector(".menu"),n=document.querySelector(".menu__container"),r=document.querySelector(".header__open-menu-button"),c=document.querySelector(".menu__close-btn"),l=document.querySelector(".menu__lang-switch-front"),_=document.querySelector(".menu__lang-ru"),a=document.querySelector(".menu__lang-en");function d(){i.classList.remove("menu_opened"),n.classList.remove("menu__container_opened"),c.removeEventListener("click",d),_.removeEventListener("click",v),a.removeEventListener("click",p),n.removeEventListener("click",h),i.removeEventListener("click",d),document.removeEventListener("keydown",u)}function h(e){e.stopPropagation(),e.target.classList.value.includes("menu__navigation-btn")&&d()}function u(e){"Escape"===e.key&&(e.preventDefault(),d())}function p(){l.classList.add("menu__lang-switch-front_right"),a.classList.add("menu__lang_active"),_.classList.remove("menu__lang_active")}function v(){l.classList.remove("menu__lang-switch-front_right"),_.classList.add("menu__lang_active"),a.classList.remove("menu__lang_active")}s._setEventListeners(),s._slideToNext(),s._slideToPrev(),o._setEventListeners(),o._openPhotoAbove(),o._slideToNext(),o._slideToPrev(),r.addEventListener("click",(function(){i.classList.add("menu_opened"),n.classList.add("menu__container_opened"),c.addEventListener("click",d),_.addEventListener("click",v),a.addEventListener("click",p),n.addEventListener("click",h),i.addEventListener("click",d),document.addEventListener("keydown",u)}))}},s={};function o(e){var i=s[e];if(void 0!==i)return i.exports;var n=s[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,s,i,n)=>{if(!s){var r=1/0;for(a=0;a<e.length;a++){for(var[s,i,n]=e[a],c=!0,l=0;l<s.length;l++)(!1&n||r>=n)&&Object.keys(o.O).every((e=>o.O[e](s[l])))?s.splice(l--,1):(c=!1,n<r&&(r=n));if(c){e.splice(a--,1);var _=i();void 0!==_&&(t=_)}}return t}n=n||0;for(var a=e.length;a>0&&e[a-1][2]>n;a--)e[a]=e[a-1];e[a]=[s,i,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={913:0,259:0};o.O.j=t=>0===e[t];var t=(t,s)=>{var i,n,[r,c,l]=s,_=0;if(r.some((t=>0!==e[t]))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(l)var a=l(o)}for(t&&t(s);_<r.length;_++)n=r[_],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(a)},s=self.webpackChunksea_breeze_main=self.webpackChunksea_breeze_main||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var i=o.O(void 0,[259],(()=>o(63)));i=o.O(i)})();