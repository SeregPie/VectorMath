!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n=n||self).VectorMath=t()}(this,(function(){"use strict";function n(n,t){return n.reduce((function(n,r,u){return n+r*t[u]}),0)}function t(n){return Math.hypot.apply(Math,n)}function r(n){return n.slice()}function u(n,t){return n.map((function(n){return n*t}))}function e(n,e){var o=t(n);return o?u(n,e/o):r(n)}return{add:function(n,t){return n.map((function(n,r){return n+t[r]}))},angle:function(r,u){var e=t(r)*t(u);if(e){var o=n(r,u);return Math.acos(Math.min(Math.max(o/e,-1),1))}return Math.PI/2},clone:r,distance:function(n,r){return t(n.map((function(n,t){return n-r[t]})))},div:function(n,t){return n.map((function(n,r){return n/t[r]}))},divScalar:function(n,t){return n.map((function(n){return n/t}))},dot:n,length:t,mean:function(n){Array.isArray(n)||(n=Array.from(n));var t=n.length;return n[0].map((function(r,u){return n.reduce((function(n,t){return n+t[u]}),0)/t}))},mul:function(n,t){return n.map((function(n,r){return n*t[r]}))},mulScalar:u,normalize:function(n){return e(n,1)},relength:e,sub:function(n,t){return n.map((function(n,r){return n-t[r]}))},subScalar:function(n,t){return n.map((function(n){return n-t}))}}}));
