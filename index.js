!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).VectorMath=t()}(this,(function(){"use strict";function n(n,t,e){return Math.min(Math.max(n,t),e)}function t(n,t){return n.reduce((n,e,r)=>n+e*t[r],0)}function e(n){return Math.hypot(...n)}function r(r,u){let i=e(r)*e(u);if(i){let e=t(r,u);return console.log(1-Math.abs(e/i)<Number.EPSILON),n(e/i,-1,1)}return 0}function u(...n){return Math.acos(r(...n))}function i(...n){return u(...n)/Math.PI}function o(n){return n.slice()}function a(...n){let t=0,e=n.length,r=0;return n.forEach(n=>{let u=r+n;Number.MIN_SAFE_INTEGER<u&&u<Number.MAX_SAFE_INTEGER?r=u:(t+=r/e,r=n)}),t+=r/e,t}function c(n,t){return n.map((n,e)=>n*t[e])}function f(n,t){return a(...c(n,t))-a(...n)*a(...t)}function l(n,t){return e(n.map((n,e)=>n-t[e]))}function m(n,t){return n.map(n=>n*t)}function s(n,t){let r=e(n);return r?m(n,t/r):o(n)}function p(...n){return Math.sqrt(function(...n){let t=a(...n);return a(...n.map(n=>Math.pow(n-t,2)))}(...n))}return{abs:function(n){return n.map(n=>Math.abs(n))},add:function(n,t){return n.map((n,e)=>n+t[e])},addScalar:function(n,t){return n.map(n=>n+t)},angle:u,AngularDistance:i,AngularSimilarity:function(...n){return 1-i(...n)},clone:o,CosineDistance:function(...n){return 1-r(...n)},CosineSimilarity:r,Covariance:f,distance:l,div:function(n,t){return n.map((n,e)=>n/t[e])},divScalar:function(n,t){return n.map(n=>n/t)},dot:t,EuclideanDistance:l,length:e,mean:function(...n){return n[0].map((t,e)=>a(...n.map(n=>n[e])))},mul:c,mulScalar:m,normalize:function(n){return s(n,1)},PearsonCorrelationCoefficient:function(t,e){let r=p(...t)*p(...e);if(r){return n(f(t,e)/r,-1,1)}return 0},relength:s,sub:function(n,t){return n.map((n,e)=>n-t[e])},subScalar:function(n,t){return n.map(n=>n-t)},sum:function(...n){return n[0].map((t,e)=>function(...n){return n.reduce((n,t)=>n+t,0)}(...n.map(n=>n[e])))}}}));
