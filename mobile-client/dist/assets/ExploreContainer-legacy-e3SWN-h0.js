!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,a,o,i,u=[],l=!0,c=!1;try{if(o=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;l=!1}else for(;!(l=(r=o.call(e)).done)&&(u.push(r.value),u.length!==n);l=!0);}catch(t){c=!0,a=t}finally{try{if(!l&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw a}}return u}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}System.register(["./index-legacy--MTc7JTl.js"],(function(e,r){"use strict";var a,o,i,u,l,c,f,s;return{setters:[function(t){a=t.d,o=t.a,i=t.j,u=t.x,l=t.t,c=t.y,f=t.z,s=t.f}],execute:function(){var r=document.createElement("style");r.textContent="#container[data-v-aa40aef5]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container strong[data-v-aa40aef5]{font-size:20px;line-height:26px}#container p[data-v-aa40aef5]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a[data-v-aa40aef5]{text-decoration:none}\n",document.head.appendChild(r);var d={id:"container"},p=function(t){return c("data-v-aa40aef5"),t=t(),f(),t}((function(){return u("p",null,[s("Explore "),u("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ionicframework.com/docs/components"},"UI Components")],-1)}));e("E",function(e,r){var a,o=e.__vccOpts||e,i=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=n(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw i}}}}(r);try{for(i.s();!(a=i.n()).done;){var u=t(a.value,2),l=u[0],c=u[1];o[l]=c}}catch(f){i.e(f)}finally{i.f()}return o}(a({__name:"ExploreContainer",props:{name:String},setup:function(t){return function(n,e){return o(),i("div",d,[u("strong",null,l(t.name),1),p])}}}),[["__scopeId","data-v-aa40aef5"]]))}}}))}();