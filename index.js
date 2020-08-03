!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).VectorMath=r()}(this,(function(){"use strict";function n(n){return n.map((function(n){return Math.abs(n)}))}function r(n,r,t){return Math.min(Math.max(n,r),t)}function t(n,r){return Math.abs(n-r)<=Number.EPSILON}function e(n,r){return n.reduce((function(n,t,e){return n+t*r[e]}),0)}function u(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,r){if(!n)return;if("string"==typeof n)return o(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,r)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function a(n){return Math.hypot.apply(Math,u(n))}function i(n,u){var o=a(n)*a(u);if(o){var i=r(e(n,u)/o,-1,1);return t(1,i)?1:i}return 0}function c(){return Math.acos(i.apply(void 0,arguments))}function f(){return c.apply(void 0,arguments)/Math.PI}function p(n){return n.slice()}function l(n,r){return n.map((function(n){return n*r}))}function m(n,r){var t=a(n);return t?l(n,r/t):p(n)}function y(){for(var n=0,r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];var u=t.length,o=0;return t.forEach((function(r){var t=o+r;Number.MIN_SAFE_INTEGER<t&&t<Number.MAX_SAFE_INTEGER?o=t:(n+=o/u,o=r)})),n+=o/u}function d(n,r){return n.map((function(n,t){return n*r[t]}))}function s(n,r){return y.apply(void 0,u(d(n,r)))-y.apply(void 0,u(n))*y.apply(void 0,u(r))}function v(n,r){return n.map((function(n,t){return n-r[t]}))}function h(n,r){return a(v(n,r))}function b(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce((function(n,r){return n+r}),0)}function g(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r[0].map((function(n,t){return y.apply(void 0,u(r.map((function(n){return n[t]}))))}))}function A(n){return m(n,1)}function M(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];var e=y.apply(void 0,r);return y.apply(void 0,u(r.map((function(n){return Math.pow(n-e,2)}))))}function S(){return Math.sqrt(M.apply(void 0,arguments))}function w(n,r,t,e,u){return e+(n-r)*(u-e)/(t-r)}return{abs:n,add:function(n,r){return n.map((function(n,t){return n+r[t]}))},addScalar:function(n,r){return n.map((function(n){return n+r}))},angle:c,AngularDistance:f,AngularSimilarity:function(){return 1-f.apply(void 0,arguments)},clamp:function(n,t,e){return n.map((function(n,u){return r(n,t[u],e[u])}))},clampLength:function(n,t,e){return m(n,r(a(n),t,e))},clampScalar:function(n,t,e){return n.map((function(n){return r(n,t,e)}))},clone:p,CosineDistance:function(){return 1-i.apply(void 0,arguments)},CosineSimilarity:i,Covariance:s,distance:h,div:function(n,r){return n.map((function(n,t){return n/r[t]}))},divScalar:function(n,r){return n.map((function(n){return n/r}))},dot:e,EuclideanDistance:h,length:a,ManhattanDistance:function(r,t){return b.apply(void 0,u(n(v(r,t))))},mean:g,mul:d,mulScalar:l,normalize:A,PearsonCorrelationCoefficient:function(n,e){var o=S.apply(void 0,u(n))*S.apply(void 0,u(e));if(o){var a=r(s(n,e)/o,-1,1);return t(1,a)?1:a}return 0},scale:function(n,r,t,e,u){return n.map((function(n,o){return w(n,r[o],t[o],e[o],u[o])}))},scaleLength:function(n,r,t,e,u){return m(n,w(a(n),r,t,e,u))},scaleScalar:function(n,r,t,e,u){return n.map((function(n){return w(n,r,t,e,u)}))},setLength:m,sub:v,subScalar:function(n,r){return n.map((function(n){return n-r}))},sum:function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r[0].map((function(n,t){return b.apply(void 0,u(r.map((function(n){return n[t]}))))}))},VelocityMean:function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return m(g.apply(void 0,u(r.map((function(n){return A(n)})))),y.apply(void 0,u(r.map((function(n){return a(n)})))))}}}));
