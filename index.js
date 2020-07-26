!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).VectorMath={})}(this,(function(n){"use strict";function t(n){return n.map(n=>Math.abs(n))}function e(n,t,e){return Math.min(Math.max(n,t),e)}function r(n,t){return Math.abs(n-t)<=Number.EPSILON}function u(n,t){return n.reduce((n,e,r)=>n+e*t[r],0)}function i(n){return Math.hypot(...n)}function a(n,t){let a=i(n)*i(t);if(a){let i=e(u(n,t)/a,-1,1);return r(1,i)?1:i}return 0}function o(...n){return Math.acos(a(...n))}function c(...n){return o(...n)/Math.PI}function f(n){return n.slice()}function l(...n){let t=0,e=n.length,r=0;return n.forEach(n=>{let u=r+n;Number.MIN_SAFE_INTEGER<u&&u<Number.MAX_SAFE_INTEGER?r=u:(t+=r/e,r=n)}),t+=r/e,t}function m(n,t){return n.map((n,e)=>n*t[e])}function s(n,t){return l(...m(n,t))-l(...n)*l(...t)}function p(n,t){return i(n.map((n,e)=>n-t[e]))}function d(...n){return n.reduce((n,t)=>n+t,0)}function h(n,t){return n.map((n,e)=>n-t[e])}function M(n,t){return n.map(n=>n*t)}function b(n,t){let e=i(n);return e?M(n,t/e):f(n)}function E(...n){return Math.sqrt(function(...n){let t=l(...n);return l(...n.map(n=>Math.pow(n-t,2)))}(...n))}n.AngularDistance=c,n.AngularSimilarity=function(...n){return 1-c(...n)},n.CosineDistance=function(...n){return 1-a(...n)},n.CosineSimilarity=a,n.Covariance=s,n.EuclideanDistance=p,n.ManhattanDistance=function(n,e){return d(...t(h(n,e)))},n.PearsonCorrelationCoefficient=function(n,t){let u=E(...n)*E(...t);if(u){let i=e(s(n,t)/u,-1,1);return r(1,i)?1:i}return 0},n.abs=t,n.add=function(n,t){return n.map((n,e)=>n+t[e])},n.addScalar=function(n,t){return n.map(n=>n+t)},n.angle=o,n.clone=f,n.distance=p,n.div=function(n,t){return n.map((n,e)=>n/t[e])},n.divScalar=function(n,t){return n.map(n=>n/t)},n.dot=u,n.length=i,n.mean=function(...n){return n[0].map((t,e)=>l(...n.map(n=>n[e])))},n.mul=m,n.mulScalar=M,n.normalize=function(n){return b(n,1)},n.relength=b,n.sub=h,n.subScalar=function(n,t){return n.map(n=>n-t)},n.sum=function(...n){return n[0].map((t,e)=>d(...n.map(n=>n[e])))},Object.defineProperty(n,"__esModule",{value:!0})}));
