System.register(["./index-legacy--MTc7JTl.js"],(function(t,e){"use strict";var n,i,o;return{setters:[function(t){n=t.G,i=t.H,o=t.J}],execute:function(){t("startTapClick",(function(t){if(void 0!==n){var d,v,l,p=10*-f,m=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,w=function(t){p=i(t),T(t)},E=function(){l&&clearTimeout(l),l=void 0,d&&(S(!1),d=void 0)},g=function(t){d||y(e(t),t)},T=function(t){y(void 0,t)},y=function(t,e){if(!t||t!==d){l&&clearTimeout(l),l=void 0;var n=o(e),i=n.x,r=n.y;if(d){if(h.has(d))throw new Error("internal error");d.classList.contains(c)||b(d,i,r),S(!0)}if(t){var u=h.get(t);u&&(clearTimeout(u),h.delete(t)),t.classList.remove(c);var f=function(){b(t,i,r),l=void 0};a(t)?f():l=setTimeout(f,s)}d=t}},b=function(t,e,n){if(m=Date.now(),t.classList.add(c),L){var i=r(t);null!==i&&(R(),v=i.addRipple(e,n))}},R=function(){void 0!==v&&(v.then((function(t){return t()})),v=void 0)},S=function(t){R();var e=d;if(e){var n=u-Date.now()+m;if(t&&n>0&&!a(e)){var i=setTimeout((function(){e.classList.remove(c),h.delete(e)}),u);h.set(e,i)}else e.classList.remove(c)}};n.addEventListener("ionGestureCaptured",E),n.addEventListener("touchstart",(function(t){p=i(t),g(t)}),!0),n.addEventListener("touchcancel",w,!0),n.addEventListener("touchend",w,!0),n.addEventListener("pointercancel",E,!0),n.addEventListener("mousedown",(function(t){if(2!==t.button){var e=i(t)-f;p<e&&g(t)}}),!0),n.addEventListener("mouseup",(function(t){var e=i(t)-f;p<e&&T(t)}),!0)}}));
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
var e=function(t){if(void 0===t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},a=function(t){return t.classList.contains("ion-activatable-instant")},r=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},c="ion-activated",s=100,u=150,f=2500}}}));
