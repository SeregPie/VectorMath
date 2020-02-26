!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n=n||self).VectorMath=r()}(this,(function(){"use strict";function n(n,r){return n.reduce((function(n,t,u){return n+t*r[u]}),0)}function r(n){return Math.hypot.apply(Math,n)}function t(n){return n.slice()}function u(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var t=0,u=n.length,e=0;return n.forEach((function(n){var r=e+n;Number.MIN_SAFE_INTEGER<r&&r<Number.MAX_SAFE_INTEGER?e=r:(t+=e/u,e=n)})),t+=e/u}function e(n,r){return n.map((function(n,t){return n*r[t]}))}function o(n,r){return u.apply(void 0,e(n,r))-u.apply(void 0,n)*u.apply(void 0,r)}function a(n,r){return n.map((function(n){return n*r}))}function i(n,u){var e=r(n);return e?a(n,u/e):t(n)}function f(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var t=u.apply(void 0,n);return u.apply(void 0,n.map((function(n){return Math.pow(n-t,2)})))}function c(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return Math.sqrt(f.apply(void 0,n))}function p(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return n.reduce((function(n,r){return n+r}),0)}return{abs:function(n){return n.map((function(n){return Math.abs(n)}))},add:function(n,r){return n.map((function(n,t){return n+r[t]}))},addScalar:function(n,r){return n.map((function(n){return n+r}))},angle:function(t,u){var e=r(t)*r(u);if(e){var o=n(t,u);return Math.acos(Math.min(Math.max(o/e,-1),1))}return Math.PI/2},clone:t,covariance:o,distance:function(n,t){return r(n.map((function(n,r){return n-t[r]})))},div:function(n,r){return n.map((function(n,t){return n/r[t]}))},divScalar:function(n,r){return n.map((function(n){return n/r}))},dot:n,length:r,mean:function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return n[0].map((function(r,t){return u.apply(void 0,n.map((function(n){return n[t]})))}))},mul:e,mulScalar:a,normalize:function(n){return i(n,1)},pearsonCorrelationCoefficient:function(n,r){return o(n,r)/(c.apply(void 0,n)*c.apply(void 0,r))},relength:i,sub:function(n,r){return n.map((function(n,t){return n-r[t]}))},subScalar:function(n,r){return n.map((function(n){return n-r}))},sum:function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return n[0].map((function(r,t){return p.apply(void 0,n.map((function(n){return n[t]})))}))}}}));
