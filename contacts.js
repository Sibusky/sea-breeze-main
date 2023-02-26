(()=>{"use strict";var e,t={338:()=>{class e{constructor(e){this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._closeButton=this._popup.querySelector(".popup__close-btn"),this._image=this._popup.querySelector(".popup__photo"),this._description=this._popup.querySelector(".popup__photo-description")}open(e){this._popup.classList.add("popup_opened"),this._image.src=e.src,this._description.textContent=e.alt,this._popup.addEventListener("mousedown",(e=>this.closeFromOverlay(e))),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this.closeFromOverlay)}_handleEscClose(e){"Escape"===e.key&&this.close()}closeFromOverlay(e){(e.target.classList.contains("popup_opened")||e.target===this._closeButton||"path"==e.target.tagName)&&this.close()}}const t=new class{constructor(e,t){this._carousel=document.querySelector(`.${e}`),this._list=this._carousel.querySelector(`.${e}__galery-list`),this._listElems=this._carousel.querySelectorAll(`.${e}__galery-item`),this._prevButton=document.querySelector(`.${e}__btn-prev`),this._nextButton=document.querySelector(`.${e}__btn-next`),this._width=t,this._position=0,this._countCards=()=>window.innerWidth>1050?4:window.innerWidth<=1050&&window.innerWidth>750?3:window.innerWidth<=750&&window.innerWidth>650?2:1}_markCards(){let e=1;this._listElems.forEach((t=>{t.style.position="relative",t.insertAdjacentHTML("beforeend",`<span style="position:absolute;left:0;top:0">${e}</span>`),e++}))}_setEventListeners(){this._prevButton.addEventListener("click",(()=>this._slideToPrev())),this._nextButton.addEventListener("click",(()=>this._slideToNext()))}_openPhoto(){this._list.addEventListener("click",(e=>this._openModal(e)))}_slideToPrev(){this._position+=this._width*this._countCards(),this._position=Math.min(this._position,0),this._list.style.marginLeft=this._position+"px"}_slideToNext(){this._position-=this._width*this._countCards(),this._position=Math.max(this._position,-this._width*(this._listElems.length-this._countCards())),this._list.style.marginLeft=this._position+"px"}_openModal(t){const s=t.target.closest("li").querySelector(".certificates__galery-img");new e(".popup").open(s)}}("carousel",244),s=document.querySelector(".menu"),n=document.querySelector(".menu__container"),i=document.querySelector(".header__open-menu-button"),o=document.querySelector(".menu__close-btn"),r=document.querySelector(".menu__lang-switch-front"),c=document.querySelector(".menu__lang-ru"),l=document.querySelector(".menu__lang-en");function a(){s.classList.remove("menu_opened"),n.classList.remove("menu__container_opened"),o.removeEventListener("click",a),c.removeEventListener("click",p),l.removeEventListener("click",u),n.removeEventListener("click",_),s.removeEventListener("click",a),document.removeEventListener("keydown",d)}function _(e){e.stopPropagation(),e.target.classList.value.includes("menu__navigation-btn")&&a()}function d(e){"Escape"===e.key&&(e.preventDefault(),a())}function u(){r.classList.add("menu__lang-switch-front_right"),l.classList.add("menu__lang_active"),c.classList.remove("menu__lang_active")}function p(){r.classList.remove("menu__lang-switch-front_right"),c.classList.add("menu__lang_active"),l.classList.remove("menu__lang_active")}t._setEventListeners(),t._slideToNext(),t._slideToPrev(),i.addEventListener("click",(function(){s.classList.add("menu_opened"),n.classList.add("menu__container_opened"),o.addEventListener("click",a),c.addEventListener("click",p),l.addEventListener("click",u),n.addEventListener("click",_),s.addEventListener("click",a),document.addEventListener("keydown",d)}))}},s={};function n(e){var i=s[e];if(void 0!==i)return i.exports;var o=s[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,s,i,o)=>{if(!s){var r=1/0;for(_=0;_<e.length;_++){for(var[s,i,o]=e[_],c=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](s[l])))?s.splice(l--,1):(c=!1,o<r&&(r=o));if(c){e.splice(_--,1);var a=i();void 0!==a&&(t=a)}}return t}o=o||0;for(var _=e.length;_>0&&e[_-1][2]>o;_--)e[_]=e[_-1];e[_]=[s,i,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={421:0,259:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var i,o,[r,c,l]=s,a=0;if(r.some((t=>0!==e[t]))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(l)var _=l(n)}for(t&&t(s);a<r.length;a++)o=r[a],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(_)},s=self.webpackChunksea_breeze_main=self.webpackChunksea_breeze_main||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var i=n.O(void 0,[259],(()=>n(338)));i=n.O(i)})();