function n(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}var t="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},r=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,i=r.push,o=r.slice,a=e.toString,l=e.hasOwnProperty,f="undefined"!=typeof ArrayBuffer,c=Array.isArray,s=Object.keys,p=Object.create,v=f&&ArrayBuffer.isView,h=isNaN,g=isFinite,d=!{toString:null}.propertyIsEnumerable("toString"),y=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function b(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;u<r;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(t+1);for(u=0;u<t;u++)i[u]=arguments[u];return i[t]=e,n.apply(this,i)}}function w(n){var t=typeof n;return"function"===t||"object"===t&&!!n}function j(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function _(n){return function(t){return a.call(t)==="[object "+n+"]"}}var A=_("String"),x=_("Number"),E=_("Date"),S=_("RegExp"),k=_("Error"),I=_("Symbol"),O=_("Map"),M=_("WeakMap"),L=_("Set"),N=_("WeakSet"),B=_("ArrayBuffer"),D=_("DataView"),R=c||_("Array"),F=_("Function");"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof(t.document&&t.document.childNodes)&&(F=function(n){return"function"==typeof n||!1});var T=F;function V(n,t){return null!=n&&l.call(n,t)}var K=_("Arguments");!function(){K(arguments)||(K=function(n){return V(n,"callee")})}();var P=K;function q(n){return x(n)&&h(n)}function U(n){return function(){return n}}function W(n){return function(t){var r=n(t);return"number"==typeof r&&r>=0&&r<=m}}function z(n){return function(t){return null==t?void 0:t[n]}}var C=z("byteLength"),$=W(C),J=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,G=f?function(n){return v?v(n)&&!D(n):$(n)&&J.test(a.call(n))}:U(!1),H=z("length"),Q=W(H);function X(n,t){t=function(n){for(var t={},r=n.length,e=0;e<r;++e)t[n[e]]=!0;return{contains:function(n){return t[n]},push:function(r){return t[r]=!0,n.push(r)}}}(t);var r=y.length,u=n.constructor,i=T(u)&&u.prototype||e,o="constructor";for(V(n,o)&&!t.contains(o)&&t.push(o);r--;)(o=y[r])in n&&n[o]!==i[o]&&!t.contains(o)&&t.push(o)}function Y(n){if(!w(n))return[];if(s)return s(n);var t=[];for(var r in n)V(n,r)&&t.push(r);return d&&X(n,t),t}function Z(n,t){var r=Y(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0}function nn(n){return n instanceof nn?n:this instanceof nn?void(this._wrapped=n):new nn(n)}function tn(n){if(!w(n))return[];var t=[];for(var r in n)t.push(r);return d&&X(n,t),t}function rn(n){for(var t=Y(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e}function en(n){for(var t={},r=Y(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t}function un(n){var t=[];for(var r in n)T(n[r])&&t.push(r);return t.sort()}function on(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,l=0;l<a;l++){var f=o[l];t&&void 0!==r[f]||(r[f]=i[f])}return r}}nn.VERSION="1.11.0",nn.prototype.valueOf=nn.prototype.toJSON=nn.prototype.value=function(){return this._wrapped},nn.prototype.toString=function(){return String(this._wrapped)};var an=on(tn),ln=on(Y),fn=on(tn,!0);function cn(n){if(!w(n))return{};if(p)return p(n);var t=function(){};t.prototype=n;var r=new t;return t.prototype=null,r}function sn(n){return w(n)?R(n)?n.slice():an({},n):n}function pn(n){return n}function vn(n){return n=ln({},n),function(t){return Z(t,n)}}function hn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function gn(n){return R(n)?function(t){return hn(t,n)}:z(n)}function dn(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}}function yn(n,t,r){return null==n?pn:T(n)?dn(n,t,r):w(n)&&!R(n)?vn(n):gn(n)}function mn(n,t){return yn(n,t,Infinity)}function bn(n,t,r){return nn.iteratee!==mn?nn.iteratee(n,t):yn(n,t,r)}function wn(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}nn.iteratee=mn;var jn=Date.now||function(){return(new Date).getTime()};function _n(n){var t=function(t){return n[t]},r="(?:"+Y(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,t):n}}var An={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},xn=_n(An),En=_n(en(An)),Sn=nn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},kn=/(.)^/,In={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},On=/\\|'|\r|\n|\u2028|\u2029/g;function Mn(n){return"\\"+In[n]}var Ln=0;function Nn(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=cn(n.prototype),o=n.apply(i,u);return w(o)?o:i}var Bn=b(function(n,t){var r=Bn.placeholder,e=function(){for(var u=0,i=t.length,o=Array(i),a=0;a<i;a++)o[a]=t[a]===r?arguments[u++]:t[a];for(;u<arguments.length;)o.push(arguments[u++]);return Nn(n,e,this,this,o)};return e});Bn.placeholder=nn;var Dn=b(function(n,t,r){if(!T(n))throw new TypeError("Bind must be called on a function");var e=b(function(u){return Nn(n,e,t,this,r.concat(u))});return e});function Rn(n,t,r,e){if(e=e||[],t||0===t){if(t<=0)return e.concat(n)}else t=Infinity;for(var u=e.length,i=0,o=H(n);i<o;i++){var a=n[i];if(Q(a)&&(R(a)||P(a)))if(t>1)Rn(a,t-1,r,e),u=e.length;else for(var l=0,f=a.length;l<f;)e[u++]=a[l++];else r||(e[u++]=a)}return e}var Fn=b(function(n,t){var r=(t=Rn(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=Dn(n[e],n)}return n}),Tn=b(function(n,t,r){return setTimeout(function(){return n.apply(null,r)},t)}),Vn=Bn(Tn,nn,1);function Kn(n){return function(){return!n.apply(this,arguments)}}function Pn(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}var qn=Bn(Pn,2);function Un(n,t,r){t=bn(t,r);for(var e,u=Y(n),i=0,o=u.length;i<o;i++)if(t(n[e=u[i]],e,n))return e}function Wn(n){return function(t,r,e){r=bn(r,e);for(var u=H(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}}var zn=Wn(1),Cn=Wn(-1);function $n(n,t,r,e){for(var u=(r=bn(r,e,1))(t),i=0,o=H(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i}function Jn(n,t,r){return function(e,u,i){var a=0,l=H(e);if("number"==typeof i)n>0?a=i>=0?i:Math.max(i+l,a):l=i>=0?Math.min(i+1,l):i+l+1;else if(r&&i&&l)return e[i=r(e,u)]===u?i:-1;if(u!=u)return(i=t(o.call(e,a,l),q))>=0?i+a:-1;for(i=n>0?a:l-1;i>=0&&i<l;i+=n)if(e[i]===u)return i;return-1}}var Gn=Jn(1,zn,$n),Hn=Jn(-1,Cn);function Qn(n,t,r){var e=(Q(n)?zn:Un)(n,t,r);if(void 0!==e&&-1!==e)return n[e]}function Xn(n,t,r){var e,u;if(t=dn(t,r),Q(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=Y(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n}function Yn(n,t,r){t=bn(t,r);for(var e=!Q(n)&&Y(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i}function Zn(n){var t=function(t,r,e,u){var i=!Q(t)&&Y(t),o=(i||t).length,a=n>0?0:o-1;for(u||(e=t[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var l=i?i[a]:a;e=r(e,t[l],l,t)}return e};return function(n,r,e,u){var i=arguments.length>=3;return t(n,dn(r,u,4),e,i)}}var nt=Zn(1),tt=Zn(-1);function rt(n,t,r){var e=[];return t=bn(t,r),Xn(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e}function et(n,t,r){t=bn(t,r);for(var e=!Q(n)&&Y(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0}function ut(n,t,r){t=bn(t,r);for(var e=!Q(n)&&Y(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1}function it(n,t,r,e){return Q(n)||(n=rn(n)),("number"!=typeof r||e)&&(r=0),Gn(n,t,r)>=0}var ot=b(function(n,t,r){var e,u;return T(t)?u=t:R(t)&&(e=t.slice(0,-1),t=t[t.length-1]),Yn(n,function(n){var i=u;if(!i){if(e&&e.length&&(n=hn(n,e)),null==n)return;i=n[t]}return null==i?i:i.apply(n,r)})});function at(n,t){return Yn(n,gn(t))}function lt(n,t,r){var e,u,i=-Infinity,o=-Infinity;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,l=(n=Q(n)?n:rn(n)).length;a<l;a++)null!=(e=n[a])&&e>i&&(i=e);else t=bn(t,r),Xn(n,function(n,r,e){((u=t(n,r,e))>o||-Infinity===u&&-Infinity===i)&&(i=n,o=u)});return i}function ft(n,t,r){if(null==t||r)return Q(n)||(n=rn(n)),n[wn(n.length-1)];var e=Q(n)?sn(n):rn(n),u=H(e);t=Math.max(Math.min(t,u),0);for(var i=u-1,o=0;o<t;o++){var a=wn(o,i),l=e[o];e[o]=e[a],e[a]=l}return e.slice(0,t)}function ct(n,t){return function(r,e,u){var i=t?[[],[]]:{};return e=bn(e,u),Xn(r,function(t,u){var o=e(t,u,r);n(i,t,o)}),i}}var st=ct(function(n,t,r){V(n,r)?n[r].push(t):n[r]=[t]}),pt=ct(function(n,t,r){n[r]=t}),vt=ct(function(n,t,r){V(n,r)?n[r]++:n[r]=1}),ht=ct(function(n,t,r){n[r?0:1].push(t)},!0),gt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function dt(n,t,r){return t in r}var yt=b(function(n,t){var r={},e=t[0];if(null==n)return r;T(e)?(t.length>1&&(e=dn(e,t[1])),t=tn(n)):(e=dt,t=Rn(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],a=n[o];e(a,o,n)&&(r[o]=a)}return r}),mt=b(function(n,t){var r,e=t[0];return T(e)?(e=Kn(e),t.length>1&&(r=t[1])):(t=Yn(Rn(t,!1,!1),String),e=function(n,r){return!it(t,r)}),yt(n,e,r)});function bt(n,t,r){return o.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function wt(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:bt(n,n.length-t)}function jt(n,t,r){return o.call(n,null==t||r?1:t)}var _t=b(function(n,t){return t=Rn(t,!0,!0),rt(n,function(n){return!it(t,n)})}),At=b(function(n,t){return _t(n,t)});function xt(n,t,r,e){j(t)||(e=r,r=t,t=!1),null!=r&&(r=bn(r,e));for(var u=[],i=[],o=0,a=H(n);o<a;o++){var l=n[o],f=r?r(l,o,n):l;t&&!r?(o&&i===f||u.push(l),i=f):r?it(i,f)||(i.push(f),u.push(l)):it(u,l)||u.push(l)}return u}var Et=b(function(n){return xt(Rn(n,!0,!0))});function St(n){for(var t=n&&lt(n,H).length||0,r=Array(t),e=0;e<t;e++)r[e]=at(n,e);return r}var kt=b(St);function It(n,t){return n._chain?nn(t).chain():t}function Ot(n){return Xn(un(n),function(t){var r=nn[t]=n[t];nn.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),It(this,r.apply(nn,n))}}),nn}Xn(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];nn.prototype[n]=function(){var r=this._wrapped;return null!=r&&(t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0]),It(this,r)}}),Xn(["concat","join","slice"],function(n){var t=r[n];nn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=t.apply(n,arguments)),It(this,n)}});var Mt=Ot({__proto__:null,VERSION:"1.11.0",restArguments:b,isObject:w,isNull:function(n){return null===n},isUndefined:function(n){return void 0===n},isBoolean:j,isElement:function(n){return!(!n||1!==n.nodeType)},isString:A,isNumber:x,isDate:E,isRegExp:S,isError:k,isSymbol:I,isMap:O,isWeakMap:M,isSet:L,isWeakSet:N,isArrayBuffer:B,isDataView:D,isArray:R,isFunction:T,isArguments:P,isFinite:function(n){return!I(n)&&g(n)&&!isNaN(parseFloat(n))},isNaN:q,isTypedArray:G,isEmpty:function(n){return null==n||(Q(n)&&(R(n)||A(n)||P(n))?0===n.length:0===Y(n).length)},isMatch:Z,isEqual:function(n,t){return function n(t,r,e,i){if(t===r)return 0!==t||1/t==1/r;if(null==t||null==r)return!1;if(t!=t)return r!=r;var o=typeof t;return("function"===o||"object"===o||"object"==typeof r)&&function t(r,e,i,o){r instanceof nn&&(r=r._wrapped),e instanceof nn&&(e=e._wrapped);var l=a.call(r);if(l!==a.call(e))return!1;switch(l){case"[object RegExp]":case"[object String]":return""+r==""+e;case"[object Number]":return+r!=+r?+e!=+e:0==+r?1/+r==1/e:+r==+e;case"[object Date]":case"[object Boolean]":return+r==+e;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(e);case"[object ArrayBuffer]":return t(new DataView(r),new DataView(e),i,o);case"[object DataView]":var f=C(r);if(f!==C(e))return!1;for(;f--;)if(r.getUint8(f)!==e.getUint8(f))return!1;return!0}if(G(r))return t(new DataView(r.buffer),new DataView(e.buffer),i,o);var c="[object Array]"===l;if(!c){if("object"!=typeof r||"object"!=typeof e)return!1;var s=r.constructor,p=e.constructor;if(s!==p&&!(T(s)&&s instanceof s&&T(p)&&p instanceof p)&&"constructor"in r&&"constructor"in e)return!1}o=o||[];for(var v=(i=i||[]).length;v--;)if(i[v]===r)return o[v]===e;if(i.push(r),o.push(e),c){if((v=r.length)!==e.length)return!1;for(;v--;)if(!n(r[v],e[v],i,o))return!1}else{var h,g=Y(r);if(v=g.length,Y(e).length!==v)return!1;for(;v--;)if(!V(e,h=g[v])||!n(r[h],e[h],i,o))return!1}return i.pop(),o.pop(),!0}(t,r,e,i)}(n,t)},keys:Y,allKeys:tn,values:rn,pairs:function(n){for(var t=Y(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},invert:en,functions:un,methods:un,extend:an,extendOwn:ln,assign:ln,defaults:fn,create:function(n,t){var r=cn(n);return t&&ln(r,t),r},clone:sn,tap:function(n,t){return t(n),n},has:function(n,t){if(!R(t))return V(n,t);for(var r=t.length,e=0;e<r;e++){var u=t[e];if(null==n||!l.call(n,u))return!1;n=n[u]}return!!r},mapObject:function(n,t,r){t=bn(t,r);for(var e=Y(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=t(n[a],a,n)}return i},identity:pn,constant:U,noop:function(){},property:gn,propertyOf:function(n){return null==n?function(){}:function(t){return R(t)?hn(n,t):n[t]}},matcher:vn,matches:vn,times:function(n,t,r){var e=Array(Math.max(0,n));t=dn(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},random:wn,now:jn,escape:xn,unescape:En,templateSettings:Sn,template:function(n,t,r){!t&&r&&(t=r),t=fn({},t,nn.templateSettings);var e,u=RegExp([(t.escape||kn).source,(t.interpolate||kn).source,(t.evaluate||kn).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(u,function(t,r,e,u,a){return o+=n.slice(i,a).replace(On,Mn),i=a+t.length,r?o+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{e=new Function(t.variable||"obj","_",o)}catch(n){throw n.source=o,n}var a=function(n){return e.call(this,n,nn)};return a.source="function("+(t.variable||"obj")+"){\n"+o+"}",a},result:function(n,t,r){R(t)||(t=[t]);var e=t.length;if(!e)return T(r)?r.call(n):r;for(var u=0;u<e;u++){var i=null==n?void 0:n[t[u]];void 0===i&&(i=r,u=e),n=T(i)?i.call(n):i}return n},uniqueId:function(n){var t=++Ln+"";return n?n+t:t},chain:function(n){var t=nn(n);return t._chain=!0,t},iteratee:mn,partial:Bn,bind:Dn,bindAll:Fn,memoize:function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return V(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},delay:Tn,defer:Vn,throttle:function(n,t,r){var e,u,i,o,a=0;r||(r={});var l=function(){a=!1===r.leading?0:jn(),e=null,o=n.apply(u,i),e||(u=i=null)},f=function(){var f=jn();a||!1!==r.leading||(a=f);var c=t-(f-a);return u=this,i=arguments,c<=0||c>t?(e&&(clearTimeout(e),e=null),a=f,o=n.apply(u,i),e||(u=i=null)):e||!1===r.trailing||(e=setTimeout(l,c)),o};return f.cancel=function(){clearTimeout(e),a=0,e=u=i=null},f},debounce:function(n,t,r){var e,u,i=function(t,r){e=null,r&&(u=n.apply(t,r))},o=b(function(o){if(e&&clearTimeout(e),r){var a=!e;e=setTimeout(i,t),a&&(u=n.apply(this,o))}else e=Tn(i,t,this,o);return u});return o.cancel=function(){clearTimeout(e),e=null},o},wrap:function(n,t){return Bn(t,n)},negate:Kn,compose:function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},after:function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},before:Pn,once:qn,findKey:Un,findIndex:zn,findLastIndex:Cn,sortedIndex:$n,indexOf:Gn,lastIndexOf:Hn,find:Qn,detect:Qn,findWhere:function(n,t){return Qn(n,vn(t))},each:Xn,forEach:Xn,map:Yn,collect:Yn,reduce:nt,foldl:nt,inject:nt,reduceRight:tt,foldr:tt,filter:rt,select:rt,reject:function(n,t,r){return rt(n,Kn(bn(t)),r)},every:et,all:et,some:ut,any:ut,contains:it,includes:it,include:it,invoke:ot,pluck:at,where:function(n,t){return rt(n,vn(t))},max:lt,min:function(n,t,r){var e,u,i=Infinity,o=Infinity;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,l=(n=Q(n)?n:rn(n)).length;a<l;a++)null!=(e=n[a])&&e<i&&(i=e);else t=bn(t,r),Xn(n,function(n,r,e){((u=t(n,r,e))<o||Infinity===u&&Infinity===i)&&(i=n,o=u)});return i},shuffle:function(n){return ft(n,Infinity)},sample:ft,sortBy:function(n,t,r){var e=0;return t=bn(t,r),at(Yn(n,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")},groupBy:st,indexBy:pt,countBy:vt,partition:ht,toArray:function(n){return n?R(n)?o.call(n):A(n)?n.match(gt):Q(n)?Yn(n,pn):rn(n):[]},size:function(n){return null==n?0:Q(n)?n.length:Y(n).length},pick:yt,omit:mt,first:wt,head:wt,take:wt,initial:bt,last:function(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:jt(n,Math.max(0,n.length-t))},rest:jt,tail:jt,drop:jt,compact:function(n){return rt(n,Boolean)},flatten:function(n,t){return Rn(n,t,!1)},without:At,uniq:xt,unique:xt,union:Et,intersection:function(n){for(var t=[],r=arguments.length,e=0,u=H(n);e<u;e++){var i=n[e];if(!it(t,i)){var o;for(o=1;o<r&&it(arguments[o],i);o++);o===r&&t.push(i)}}return t},difference:_t,unzip:St,transpose:St,zip:kt,object:function(n,t){for(var r={},e=0,u=H(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},range:function(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u},chunk:function(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(o.call(n,e,e+=t));return r},mixin:Ot,default:nn});Mt._=Mt;var Lt={},Nt=!1,Bt=!0,Dt=null,Rt=["[data-navigo]","[data-route]"],Ft=Rt.slice(0),Tt=null;function Vt(n,t,r,e){void 0===r&&(r=null),void 0===e&&(e=function(){}),Mt.isFunction(t.hooks[n])?t.hooks[n](function(n){void 0===n&&(n=!0),n&&e(n)},r):Mt.isArray(t.hooks[n])?function n(t,r,e){if(void 0===r&&(r=null),!t.length)return e(!0);var u=Mt.first(t);Mt.isFunction(u)&&u(function(u){if(void 0===u&&(u=!0),!u)return e(!1);n(Mt.rest(t),r,e)})}(t.hooks[n],r,function(n){void 0===n&&(n=!0),n&&e(n)}):e()}function Kt(n,t){return void 0===t&&(t=null),Vt("before",n,t,function(r){Mt.isArray(t)?n.method.apply({},t):n.method(t)})}function Pt(n,t,r){return void 0===t&&(t=null),void 0===r&&(r=function(n){}),Vt("after",n,t,r)}function qt(n){var t,r;return Dt&&(Nt&&console.log("was a last resolve",Dt),void 0===(t=n)&&(t=null),void 0===r&&(r=function(n){}),Vt("leave",Dt,t,r)),this.resolve(),this}var Ut=function(){function t(n){for(var t in void 0===n&&(n={}),Dt=null,n)this.on(t,n[t]);Bt&&(this.listen(),this.updatePageLinks())}var r,e,u,i=t.prototype;return i.on=function(n,t,r){void 0===r&&(r={}),Nt&&console.log(".on(",n,t,r,")");var e=n,u=!1,i=[];if(Mt.isRegExp(n))u=!0,e=n.toString();else{var o=e.split("/").map(function(n){return n.startsWith(":")?(u=!0,i.push(n.slice(1)),"([^/]{1,})"):n});n=new RegExp("^"+o.join("/")+"$")}return Lt[e]={name:e,regExp:u?n:null,regExpKeys:i,method:t,hooks:r},this},i.off=function(){var n=[].slice.call(arguments);if(Nt&&console.log(".off(",n,")"),0===n.length)t.reset(),window.removeEventListener("popstate",qt.bind(this),!1),delete window.hasListenerAttached;else{var r=n[0];delete Lt[r]}return this},i.listen=function(){return window.hasListenerAttached||(Nt&&console.log("listen() Attaching to window"),window.addEventListener("popstate",qt.bind(this),!1),window.hasListenerAttached=!0),this},i.updatePageLinks=function(n){var t=this;return void 0===n&&(n=null),Nt&&console.log("updatePageLinks",Ft),Ft.forEach(function(r){var e=document.querySelectorAll(r);Mt.each(e,function(r){r.hasListenerAttached||r.addEventListener("click",function(r){if(Nt&&console.log("CLICKED. Now navigate",r),(r.ctrlKey||r.metaKey)&&"a"===r.target.tagName.toLowerCase())return!1;r.preventDefault();var e=r.target.getAttribute("href");n?n.call(t,e):t.navigate(e)},!1),r.hasListenerAttached=!0})}),this},i.navigate=function(n,t){return void 0===t&&(t=null),window.history.pushState(t,null,n),this.resolve(),this},i.notFound=function(n){return Mt.isFunction(n)&&(Tt=n),this},i.resolve=function(n){void 0===n&&(n=window.location.pathname),Nt&&console.log("Resolve",n);var t=!1,r=function(r){var e=Lt[r];if(e.regExp){if(e.regExp){var u={},i=n.match(e.regExp)||[];i&&i.length&&i.slice(1,e.regExpKeys.length+1).forEach(function(n,t){u[e.regExpKeys[t]]=n});var o=e.regExpKeys.length?u:i.slice(1);i&&i.length&&(t=!0,Dt=e,Kt(e,o),Pt(e,o))}}else r===n&&(t=!0,Dt=e,Kt(e,{}),Pt(e,null))};for(var e in Lt)r(e);return t?Nt&&console.log("Route Matched",Dt):(Dt=null,Tt&&(Nt&&console.log("notFound"),Tt.call(this))),this},t.reset=function(){Lt={},Bt=!0,Dt=null,Tt=null,Ft=Rt.slice(0)},t.addPageLinkSelectors=function(n){var t;void 0===n&&(n=[]),(t=Ft).push.apply(t,n),Ft=Mt.unique(Ft)},r=t,u=[{key:"autoListen",set:function(n){Bt=!!n}},{key:"routes",get:function(){return Lt}},{key:"lastResolved",get:function(){return Dt}},{key:"debug",set:function(n){Nt=!!n}}],(e=[{key:"all",get:function(){return Lt}}])&&n(r.prototype,e),u&&n(r,u),t}();export{Ut as WebRouter};
//# sourceMappingURL=web-router.js.map
