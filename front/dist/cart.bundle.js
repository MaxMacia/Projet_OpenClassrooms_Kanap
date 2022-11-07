/*! For license information please see cart.bundle.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new B(r||[]);return i(a,"_invoke",{value:L(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var m={};function h(){}function v(){}function y(){}var p={};s(p,c,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(N([])));_&&_!==r&&o.call(_,c)&&(p=_);var E=y.prototype=h.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,n){function r(i,a,c,u){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==t(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}})}function L(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,m;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return v.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,u,(function(){return this})),n.AsyncIterator=b,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new b(d(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(E),s(E,l,"Generator"),s(E,c,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=N,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},n}function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(){return i.apply(this,arguments)}function i(){return(i=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("../config.json");case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(t){localStorage.setItem("listCart",JSON.stringify(t))}function c(){var t=localStorage.getItem("listCart");return null==t?[]:JSON.parse(t)}function u(t){var e=c();a(e=e.filter((function(e){return e.id!=t.id||e.color!==t.color})))}function l(t){var e=new RegExp("^[a-zA-Zéèêôîëï-]+$","g").test(t.value),n=t.nextElementSibling;return e?(n.innerHTML="",!0):(n.innerHTML="Veuillez entrer un nom ou prénom correct",!1)}function s(t){var e=new RegExp("^[0-9]+[a-zA-Zéèêôîëï-\\s']","g").test(t.value),n=t.nextElementSibling;return e?(n.innerHTML="",!0):(n.innerHTML="Veuillez entrer une adresse correcte",!1)}function d(t){var e=new RegExp("[a-zA-Zéèêôîëï-\\s']","g").test(t.value),n=t.nextElementSibling;return e?(n.innerHTML="",!0):(n.innerHTML="Veuillez entrer un nom de ville correct",!1)}function f(t){var e=new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$","g").test(t.value),n=t.nextElementSibling;return e?(n.innerHTML="",!0):(n.innerHTML="Veuillez entrer un email correct",!1)}function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v={},y=c();function p(){var t,e=0,n=0,r=m(c());try{for(r.s();!(t=r.n()).done;){var o,i=t.value;e+=i.quantity,void 0!==(null===(o=v[i.id])||void 0===o?void 0:o.price)&&(n+=v[i.id].price*i.quantity)}}catch(t){r.e(t)}finally{r.f()}document.getElementById("totalQuantity").innerHTML=e,document.getElementById("totalPrice").innerHTML=n}var g,_=m(y);try{var E=function(){var t=g.value;o().then((function(e){fetch(e.host+"/api/products/"+t.id).then((function(t){return t.json()})).then((function(e){var n=e;v[t.id]=n,document.getElementById("cart__items").innerHTML+='\n        <article class="cart__item" data-id="'.concat(t.id,'" data-color="').concat(t.color,'">\n            <div class="cart__item__img">\n                <img src="').concat(v[t.id].imageUrl,'" alt="').concat(v[t.id].altTxt,'" />\n            </div>\n            <div class="cart__item__content">\n                <div class="cart__item__content__description">\n                <h2>').concat(v[t.id].name,"</h2>\n                <p>").concat(t.color,"</p>\n                <p>").concat(v[t.id].price,' €</p>\n                </div>\n                <div class="cart__item__content__settings">\n                <div class="cart__item__content__settings__quantity">\n                    <p>Qté :</p>\n                    <input\n                    type="number"\n                    class="itemQuantity"\n                    name="itemQuantity"\n                    min="1"\n                    max="100"\n                    value="').concat(t.quantity,'"\n                    data-id="').concat(t.id,'"\n                    data-color="').concat(t.color,'"\n                    />\n                </div>\n                <div class="cart__item__content__settings__delete">\n                    <p \n                    id="deleteItem" \n                    data-id="').concat(t.id,'" \n                    data-color="').concat(t.color,'"\n                    >\n                    Supprimer</p>\n                </div>\n                </div>\n            </div>\n            </article>');for(var r=document.querySelectorAll(".itemQuantity"),o=function(t){r[t].addEventListener("change",(function(e){var n=Number(r[t].value),o=y.find((function(e){return e.id==r[t].dataset.id&&e.color==r[t].dataset.color}));o.quantity=n,o.quantity<=0?(u(o),window.location.reload()):a(y),p()}))},i=0;i<r.length;i++)o(i);for(var c=document.querySelectorAll("#deleteItem"),l=function(t){c[t].addEventListener("click",(function(){u(y.find((function(e){return e.id==c[t].dataset.id&&e.color==c[t].dataset.color}))),window.location.reload()}))},s=0;s<c.length;s++)l(s);p()})).catch((function(t){console.dir(t),document.getElementById("cart__items").innerHTML="<h3>Nous n'avons pas réussi à afficher les produits, veuillez nous excuser pour le désagrément.</h3>"}))})).catch((function(t){console.dir(t),document.getElementById("cart__items").innerHTML="<h3>Nous n'avons pas réussi à afficher les produits, veuillez nous excuser pour le désagrément.</h3>"}))};for(_.s();!(g=_.n()).done;)E()}catch(t){_.e(t)}finally{_.f()}document.getElementById("firstName").addEventListener("change",(function(){l(document.getElementById("firstName"))})),document.getElementById("lastName").addEventListener("change",(function(){l(document.getElementById("lastName"))})),document.getElementById("address").addEventListener("change",(function(){s(document.getElementById("address"))})),document.getElementById("city").addEventListener("change",(function(){d(document.getElementById("city"))})),document.getElementById("email").addEventListener("change",(function(){f(document.getElementById("email"))})),document.querySelector(".cart__order__form input[type='submit']").addEventListener("click",(function(t){t.preventDefault();var e,n,r=!0,i=m(document.querySelectorAll(".cart__order__form input:not(:last-child)"));try{for(i.s();!(e=i.n()).done;){if(!(r&=(n=e.value)==document.getElementById("firstName")||n==document.getElementById("lastName")?l(n):n==document.getElementById("address")?s(n):n==document.getElementById("city")?d(n):n==document.getElementById("email")?f(n):void 0))break}}catch(t){i.e(t)}finally{i.f()}if(r){var a={contact:{firstName:"".concat(document.getElementById("firstName").value),lastName:"".concat(document.getElementById("lastName").value),address:"".concat(document.getElementById("address").value),city:"".concat(document.getElementById("city").value),email:"".concat(document.getElementById("email").value)},products:y.map((function(t){return t.id}))};o().then((function(t){fetch(t.host+"/api/products/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(t){return t.json()})).then((function(t){location.href="/front/html/confirmation.html?id=".concat(t.orderId)})).catch((function(t){console.dir(t);var e=document.createElement("div");document.querySelector("#emailErrorMsg").appendChild(e),e.innerHTML="<h3>Une erreur est survenue lors de la commande, veuillez nous excuser pour le désagrément.</h3>"}))})).catch((function(t){console.dir(t);var e=document.createElement("div");document.querySelector("#emailErrorMsg").appendChild(e),e.innerHTML="<h3>Une erreur est survenue lors de la commande, veuillez nous excuser pour le désagrément.</h3>"}))}}))})();