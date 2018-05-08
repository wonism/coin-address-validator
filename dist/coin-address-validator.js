!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e,t,n){(function(r){var o;!function(){"use strict";var a="input is invalid type",s="object"==typeof window,i=s?window:{};i.JS_SHA3_NO_WINDOW&&(s=!1);var u=!s&&"object"==typeof self;!i.JS_SHA3_NO_NODE_JS&&Object({env:Object({NODE_ENV:"production"})}).versions&&Object({env:Object({NODE_ENV:"production"})}).versions.node?i=r:u&&(i=self);var c=!i.JS_SHA3_NO_COMMON_JS&&"object"==typeof e&&e.exports,f=n(3),d=!i.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,p="0123456789abcdef".split(""),l=[4,1024,262144,67108864],h=[0,8,16,24],b=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],w=[224,256,384,512],y=[128,256],m=["hex","buffer","arrayBuffer","array","digest"],v={128:168,256:136};!i.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!d||!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var g=function(e,t,n){return function(r){return new N(e,t,e).update(r)[n]()}},A=function(e,t,n){return function(r,o){return new N(e,t,o).update(r)[n]()}},S=function(e,t,n){return function(t,r,o,a){return E["cshake"+e].update(t,r,o,a)[n]()}},T=function(e,t,n){return function(t,r,o,a){return E["kmac"+e].update(t,r,o,a)[n]()}},B=function(e,t,n,r){for(var o=0;o<m.length;++o){var a=m[o];e[a]=t(n,r,a)}return e},H=function(e,t){var n=g(e,t,"hex");return n.create=function(){return new N(e,t,e)},n.update=function(e){return n.create().update(e)},B(n,g,e,t)},x=[{name:"keccak",padding:[1,256,65536,16777216],bits:w,createMethod:H},{name:"sha3",padding:[6,1536,393216,100663296],bits:w,createMethod:H},{name:"shake",padding:[31,7936,2031616,520093696],bits:y,createMethod:function(e,t){var n=A(e,t,"hex");return n.create=function(n){return new N(e,t,n)},n.update=function(e,t){return n.create(t).update(e)},B(n,A,e,t)}},{name:"cshake",padding:l,bits:y,createMethod:function(e,t){var n=v[e],r=S(e,0,"hex");return r.create=function(r,o,a){return o||a?new N(e,t,r).bytepad([o,a],n):E["shake"+e].create(r)},r.update=function(e,t,n,o){return r.create(t,n,o).update(e)},B(r,S,e,t)}},{name:"kmac",padding:l,bits:y,createMethod:function(e,t){var n=v[e],r=T(e,0,"hex");return r.create=function(r,o,a){return new F(e,t,o).bytepad(["KMAC",a],n).bytepad([r],n)},r.update=function(e,t,n,o){return r.create(e,n,o).update(t)},B(r,T,e,t)}}],E={},k=[],C=0;C<x.length;++C)for(var O=x[C],_=O.bits,L=0;L<_.length;++L){var U=O.name+"_"+_[L];if(k.push(U),E[U]=O.createMethod(_[L],O.padding),"sha3"!==O.name){var z=O.name+_[L];k.push(z),E[z]=E[U]}}function N(e,t,n){this.blocks=[],this.s=[],this.padding=t,this.outputBits=n,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=n>>5,this.extraBytes=(31&n)>>3;for(var r=0;r<50;++r)this.s[r]=0}function F(e,t,n){N.call(this,e,t,n)}N.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if("string"!==n){if("object"!==n)throw a;if(null===e)throw a;if(d&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||d&&ArrayBuffer.isView(e)))throw a;t=!0}for(var r,o,s=this.blocks,i=this.byteCount,u=e.length,c=this.blockCount,f=0,p=this.s;f<u;){if(this.reset)for(this.reset=!1,s[0]=this.block,r=1;r<c+1;++r)s[r]=0;if(t)for(r=this.start;f<u&&r<i;++f)s[r>>2]|=e[f]<<h[3&r++];else for(r=this.start;f<u&&r<i;++f)(o=e.charCodeAt(f))<128?s[r>>2]|=o<<h[3&r++]:o<2048?(s[r>>2]|=(192|o>>6)<<h[3&r++],s[r>>2]|=(128|63&o)<<h[3&r++]):o<55296||o>=57344?(s[r>>2]|=(224|o>>12)<<h[3&r++],s[r>>2]|=(128|o>>6&63)<<h[3&r++],s[r>>2]|=(128|63&o)<<h[3&r++]):(o=65536+((1023&o)<<10|1023&e.charCodeAt(++f)),s[r>>2]|=(240|o>>18)<<h[3&r++],s[r>>2]|=(128|o>>12&63)<<h[3&r++],s[r>>2]|=(128|o>>6&63)<<h[3&r++],s[r>>2]|=(128|63&o)<<h[3&r++]);if(this.lastByteIndex=r,r>=i){for(this.start=r-i,this.block=s[c],r=0;r<c;++r)p[r]^=s[r];I(p),this.reset=!0}else this.start=r}return this}},N.prototype.encode=function(e,t){var n=255&e,r=1,o=[n];for(n=255&(e>>=8);n>0;)o.unshift(n),n=255&(e>>=8),++r;return t?o.push(r):o.unshift(r),this.update(o),o.length},N.prototype.encodeString=function(e){var t,n=typeof e;if("string"!==n){if("object"!==n)throw a;if(null===e)throw a;if(d&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||d&&ArrayBuffer.isView(e)))throw a;t=!0}var r=0,o=e.length;if(t)r=o;else for(var s=0;s<e.length;++s){var i=e.charCodeAt(s);i<128?r+=1:i<2048?r+=2:i<55296||i>=57344?r+=3:(i=65536+((1023&i)<<10|1023&e.charCodeAt(++s)),r+=4)}return r+=this.encode(8*r),this.update(e),r},N.prototype.bytepad=function(e,t){for(var n=this.encode(t),r=0;r<e.length;++r)n+=this.encodeString(e[r]);var o=t-n%t,a=[];return a.length=o,this.update(a),this},N.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex,n=this.blockCount,r=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount)for(e[0]=e[n],t=1;t<n+1;++t)e[t]=0;for(e[n-1]|=2147483648,t=0;t<n;++t)r[t]^=e[t];I(r)}},N.prototype.toString=N.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,n=this.s,r=this.outputBlocks,o=this.extraBytes,a=0,s=0,i="";s<r;){for(a=0;a<t&&s<r;++a,++s)e=n[a],i+=p[e>>4&15]+p[15&e]+p[e>>12&15]+p[e>>8&15]+p[e>>20&15]+p[e>>16&15]+p[e>>28&15]+p[e>>24&15];s%t==0&&(I(n),a=0)}return o&&(e=n[a],i+=p[e>>4&15]+p[15&e],o>1&&(i+=p[e>>12&15]+p[e>>8&15]),o>2&&(i+=p[e>>20&15]+p[e>>16&15])),i},N.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,n=this.s,r=this.outputBlocks,o=this.extraBytes,a=0,s=0,i=this.outputBits>>3;e=o?new ArrayBuffer(r+1<<2):new ArrayBuffer(i);for(var u=new Uint32Array(e);s<r;){for(a=0;a<t&&s<r;++a,++s)u[s]=n[a];s%t==0&&I(n)}return o&&(u[a]=n[a],e=e.slice(0,i)),e},N.prototype.buffer=N.prototype.arrayBuffer,N.prototype.digest=N.prototype.array=function(){this.finalize();for(var e,t,n=this.blockCount,r=this.s,o=this.outputBlocks,a=this.extraBytes,s=0,i=0,u=[];i<o;){for(s=0;s<n&&i<o;++s,++i)e=i<<2,t=r[s],u[e]=255&t,u[e+1]=t>>8&255,u[e+2]=t>>16&255,u[e+3]=t>>24&255;i%n==0&&I(r)}return a&&(e=i<<2,t=r[s],u[e]=255&t,a>1&&(u[e+1]=t>>8&255),a>2&&(u[e+2]=t>>16&255)),u},F.prototype=new N,F.prototype.finalize=function(){return this.encode(this.outputBits,!0),N.prototype.finalize.call(this)};var I=function(e){var t,n,r,o,a,s,i,u,c,f,d,p,l,h,w,y,m,v,g,A,S,T,B,H,x,E,k,C,O,_,L,U,z,N,F,I,j,X,P,M,J,V,Y,R,D,W,Z,$,q,K,G,Q,ee,te,ne,re,oe,ae,se,ie,ue,ce,fe;for(r=0;r<48;r+=2)o=e[0]^e[10]^e[20]^e[30]^e[40],a=e[1]^e[11]^e[21]^e[31]^e[41],s=e[2]^e[12]^e[22]^e[32]^e[42],i=e[3]^e[13]^e[23]^e[33]^e[43],u=e[4]^e[14]^e[24]^e[34]^e[44],c=e[5]^e[15]^e[25]^e[35]^e[45],f=e[6]^e[16]^e[26]^e[36]^e[46],d=e[7]^e[17]^e[27]^e[37]^e[47],t=(p=e[8]^e[18]^e[28]^e[38]^e[48])^(s<<1|i>>>31),n=(l=e[9]^e[19]^e[29]^e[39]^e[49])^(i<<1|s>>>31),e[0]^=t,e[1]^=n,e[10]^=t,e[11]^=n,e[20]^=t,e[21]^=n,e[30]^=t,e[31]^=n,e[40]^=t,e[41]^=n,t=o^(u<<1|c>>>31),n=a^(c<<1|u>>>31),e[2]^=t,e[3]^=n,e[12]^=t,e[13]^=n,e[22]^=t,e[23]^=n,e[32]^=t,e[33]^=n,e[42]^=t,e[43]^=n,t=s^(f<<1|d>>>31),n=i^(d<<1|f>>>31),e[4]^=t,e[5]^=n,e[14]^=t,e[15]^=n,e[24]^=t,e[25]^=n,e[34]^=t,e[35]^=n,e[44]^=t,e[45]^=n,t=u^(p<<1|l>>>31),n=c^(l<<1|p>>>31),e[6]^=t,e[7]^=n,e[16]^=t,e[17]^=n,e[26]^=t,e[27]^=n,e[36]^=t,e[37]^=n,e[46]^=t,e[47]^=n,t=f^(o<<1|a>>>31),n=d^(a<<1|o>>>31),e[8]^=t,e[9]^=n,e[18]^=t,e[19]^=n,e[28]^=t,e[29]^=n,e[38]^=t,e[39]^=n,e[48]^=t,e[49]^=n,h=e[0],w=e[1],W=e[11]<<4|e[10]>>>28,Z=e[10]<<4|e[11]>>>28,C=e[20]<<3|e[21]>>>29,O=e[21]<<3|e[20]>>>29,ie=e[31]<<9|e[30]>>>23,ue=e[30]<<9|e[31]>>>23,V=e[40]<<18|e[41]>>>14,Y=e[41]<<18|e[40]>>>14,N=e[2]<<1|e[3]>>>31,F=e[3]<<1|e[2]>>>31,y=e[13]<<12|e[12]>>>20,m=e[12]<<12|e[13]>>>20,$=e[22]<<10|e[23]>>>22,q=e[23]<<10|e[22]>>>22,_=e[33]<<13|e[32]>>>19,L=e[32]<<13|e[33]>>>19,ce=e[42]<<2|e[43]>>>30,fe=e[43]<<2|e[42]>>>30,te=e[5]<<30|e[4]>>>2,ne=e[4]<<30|e[5]>>>2,I=e[14]<<6|e[15]>>>26,j=e[15]<<6|e[14]>>>26,v=e[25]<<11|e[24]>>>21,g=e[24]<<11|e[25]>>>21,K=e[34]<<15|e[35]>>>17,G=e[35]<<15|e[34]>>>17,U=e[45]<<29|e[44]>>>3,z=e[44]<<29|e[45]>>>3,H=e[6]<<28|e[7]>>>4,x=e[7]<<28|e[6]>>>4,re=e[17]<<23|e[16]>>>9,oe=e[16]<<23|e[17]>>>9,X=e[26]<<25|e[27]>>>7,P=e[27]<<25|e[26]>>>7,A=e[36]<<21|e[37]>>>11,S=e[37]<<21|e[36]>>>11,Q=e[47]<<24|e[46]>>>8,ee=e[46]<<24|e[47]>>>8,R=e[8]<<27|e[9]>>>5,D=e[9]<<27|e[8]>>>5,E=e[18]<<20|e[19]>>>12,k=e[19]<<20|e[18]>>>12,ae=e[29]<<7|e[28]>>>25,se=e[28]<<7|e[29]>>>25,M=e[38]<<8|e[39]>>>24,J=e[39]<<8|e[38]>>>24,T=e[48]<<14|e[49]>>>18,B=e[49]<<14|e[48]>>>18,e[0]=h^~y&v,e[1]=w^~m&g,e[10]=H^~E&C,e[11]=x^~k&O,e[20]=N^~I&X,e[21]=F^~j&P,e[30]=R^~W&$,e[31]=D^~Z&q,e[40]=te^~re&ae,e[41]=ne^~oe&se,e[2]=y^~v&A,e[3]=m^~g&S,e[12]=E^~C&_,e[13]=k^~O&L,e[22]=I^~X&M,e[23]=j^~P&J,e[32]=W^~$&K,e[33]=Z^~q&G,e[42]=re^~ae&ie,e[43]=oe^~se&ue,e[4]=v^~A&T,e[5]=g^~S&B,e[14]=C^~_&U,e[15]=O^~L&z,e[24]=X^~M&V,e[25]=P^~J&Y,e[34]=$^~K&Q,e[35]=q^~G&ee,e[44]=ae^~ie&ce,e[45]=se^~ue&fe,e[6]=A^~T&h,e[7]=S^~B&w,e[16]=_^~U&H,e[17]=L^~z&x,e[26]=M^~V&N,e[27]=J^~Y&F,e[36]=K^~Q&R,e[37]=G^~ee&D,e[46]=ie^~ce&te,e[47]=ue^~fe&ne,e[8]=T^~h&y,e[9]=B^~w&m,e[18]=U^~H&E,e[19]=z^~x&k,e[28]=V^~N&I,e[29]=Y^~F&j,e[38]=Q^~R&W,e[39]=ee^~D&Z,e[48]=ce^~te&re,e[49]=fe^~ne&oe,e[0]^=b[r],e[1]^=b[r+1]};if(c)e.exports=E;else{for(C=0;C<k.length;++C)i[k[C]]=E[k[C]];f&&(void 0===(o=function(){return E}.call(t,n,t,e))||(e.exports=o))}}()}).call(this,n(4))},function(e,t,n){"use strict";var r;!function(o){function a(e,t,n){var r=0,o=[0],a="",s=null;if("UTF8"!==(a=n||"UTF8")&&"UTF16BE"!==a&&"UTF16LE"!==a)throw"encoding must be UTF8, UTF16BE, or UTF16LE";if("HEX"===t){if(0!=e.length%2)throw"srcString of HEX type must be in byte increments";s=u(e),r=s.binLen,o=s.value}else if("TEXT"===t||"ASCII"===t)s=i(e,a),r=s.binLen,o=s.value;else if("B64"===t)s=f(e),r=s.binLen,o=s.value;else{if("BYTES"!==t)throw"inputFormat must be HEX, TEXT, ASCII, B64, or BYTES";s=c(e),r=s.binLen,o=s.value}this.getHash=function(e,t,n,a){var s,i=null,u=o.slice(),c=r;if(3===arguments.length?"number"!=typeof n&&(a=n,n=1):2===arguments.length&&(n=1),n!==parseInt(n,10)||1>n)throw"numRounds must a integer >= 1";switch(t){case"HEX":i=d;break;case"B64":i=p;break;case"BYTES":i=l;break;default:throw"format must be HEX, B64, or BYTES"}if("SHA-1"===e)for(s=0;s<n;s+=1)u=I(u,c),c=160;else if("SHA-224"===e)for(s=0;s<n;s+=1)u=j(u,c,e),c=224;else if("SHA-256"===e)for(s=0;s<n;s+=1)u=j(u,c,e),c=256;else if("SHA-384"===e)for(s=0;s<n;s+=1)u=j(u,c,e),c=384;else{if("SHA-512"!==e)throw"Chosen SHA variant is not supported";for(s=0;s<n;s+=1)u=j(u,c,e),c=512}return i(u,h(a))},this.getHMAC=function(e,t,n,s,b){var w,y,m,v,g=[],A=[];switch(w=null,s){case"HEX":s=d;break;case"B64":s=p;break;case"BYTES":s=l;break;default:throw"outputFormat must be HEX, B64, or BYTES"}if("SHA-1"===n)y=64,v=160;else if("SHA-224"===n)y=64,v=224;else if("SHA-256"===n)y=64,v=256;else if("SHA-384"===n)y=128,v=384;else{if("SHA-512"!==n)throw"Chosen SHA variant is not supported";y=128,v=512}if("HEX"===t)m=(w=u(e)).binLen,w=w.value;else if("TEXT"===t||"ASCII"===t)m=(w=i(e,a)).binLen,w=w.value;else if("B64"===t)m=(w=f(e)).binLen,w=w.value;else{if("BYTES"!==t)throw"inputFormat must be HEX, TEXT, ASCII, B64, or BYTES";m=(w=c(e)).binLen,w=w.value}if(e=8*y,t=y/4-1,y<m/8){for(w="SHA-1"===n?I(w,m):j(w,m,n);w.length<=t;)w.push(0);w[t]&=4294967040}else if(y>m/8){for(;w.length<=t;)w.push(0);w[t]&=4294967040}for(y=0;y<=t;y+=1)g[y]=909522486^w[y],A[y]=1549556828^w[y];return s(n="SHA-1"===n?I(A.concat(I(g.concat(o),e+r)),e+v):j(A.concat(j(g.concat(o),e+r,n)),e+v,n),h(b))}}function s(e,t){this.a=e,this.b=t}function i(e,t){var n,r,o,a,s=[],i=[],u=0;if("UTF8"===t)for(r=0;r<e.length;r+=1)for(i=[],128>(n=e.charCodeAt(r))?i.push(n):2048>n?(i.push(192|n>>>6),i.push(128|63&n)):55296>n||57344<=n?i.push(224|n>>>12,128|n>>>6&63,128|63&n):(r+=1,n=65536+((1023&n)<<10|1023&e.charCodeAt(r)),i.push(240|n>>>18,128|n>>>12&63,128|n>>>6&63,128|63&n)),o=0;o<i.length;o+=1){for(a=u>>>2;s.length<=a;)s.push(0);s[a]|=i[o]<<24-u%4*8,u+=1}else if("UTF16BE"===t||"UTF16LE"===t)for(r=0;r<e.length;r+=1){for(n=e.charCodeAt(r),"UTF16LE"===t&&(n=(o=255&n)<<8|n>>8),a=u>>>2;s.length<=a;)s.push(0);s[a]|=n<<16-u%4*8,u+=2}return{value:s,binLen:8*u}}function u(e){var t,n,r,o=[],a=e.length;if(0!=a%2)throw"String of HEX type must be in byte increments";for(t=0;t<a;t+=2){if(n=parseInt(e.substr(t,2),16),isNaN(n))throw"String of HEX type contains invalid characters";for(r=t>>>3;o.length<=r;)o.push(0);o[t>>>3]|=n<<24-t%8*4}return{value:o,binLen:4*a}}function c(e){var t,n,r,o=[];for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r=n>>>2,o.length<=r&&o.push(0),o[r]|=t<<24-n%4*8;return{value:o,binLen:8*e.length}}function f(e){var t,n,r,o,a,s=[],i=0;if(-1===e.search(/^[a-zA-Z0-9=+\/]+$/))throw"Invalid character in base-64 string";if(n=e.indexOf("="),e=e.replace(/\=/g,""),-1!==n&&n<e.length)throw"Invalid '=' found in base-64 string";for(n=0;n<e.length;n+=4){for(a=e.substr(n,4),r=o=0;r<a.length;r+=1)o|=(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a[r]))<<18-6*r;for(r=0;r<a.length-1;r+=1){for(t=i>>>2;s.length<=t;)s.push(0);s[t]|=(o>>>16-8*r&255)<<24-i%4*8,i+=1}}return{value:s,binLen:8*i}}function d(e,t){var n,r,o="",a=4*e.length;for(n=0;n<a;n+=1)r=e[n>>>2]>>>8*(3-n%4),o+="0123456789abcdef".charAt(r>>>4&15)+"0123456789abcdef".charAt(15&r);return t.outputUpper?o.toUpperCase():o}function p(e,t){var n,r,o,a="",s=4*e.length;for(n=0;n<s;n+=3)for(o=n+1>>>2,r=e.length<=o?0:e[o],o=n+2>>>2,o=e.length<=o?0:e[o],o=(e[n>>>2]>>>8*(3-n%4)&255)<<16|(r>>>8*(3-(n+1)%4)&255)<<8|o>>>8*(3-(n+2)%4)&255,r=0;4>r;r+=1)a=8*n+6*r<=32*e.length?a+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o>>>6*(3-r)&63):a+t.b64Pad;return a}function l(e){var t,n,r="",o=4*e.length;for(t=0;t<o;t+=1)n=e[t>>>2]>>>8*(3-t%4)&255,r+=String.fromCharCode(n);return r}function h(e){var t={outputUpper:!1,b64Pad:"="};try{e.hasOwnProperty("outputUpper")&&(t.outputUpper=e.outputUpper),e.hasOwnProperty("b64Pad")&&(t.b64Pad=e.b64Pad)}catch(e){}if("boolean"!=typeof t.outputUpper)throw"Invalid outputUpper formatting option";if("string"!=typeof t.b64Pad)throw"Invalid b64Pad formatting option";return t}function b(e,t){return e<<t|e>>>32-t}function w(e,t){return e>>>t|e<<32-t}function y(e,t){var n=null;n=new s(e.a,e.b);return 32>=t?new s(n.a>>>t|n.b<<32-t&4294967295,n.b>>>t|n.a<<32-t&4294967295):new s(n.b>>>t-32|n.a<<64-t&4294967295,n.a>>>t-32|n.b<<64-t&4294967295)}function m(e,t){return 32>=t?new s(e.a>>>t,e.b>>>t|e.a<<32-t&4294967295):new s(0,e.a>>>t-32)}function v(e,t,n){return e&t^~e&n}function g(e,t,n){return new s(e.a&t.a^~e.a&n.a,e.b&t.b^~e.b&n.b)}function A(e,t,n){return e&t^e&n^t&n}function S(e,t,n){return new s(e.a&t.a^e.a&n.a^t.a&n.a,e.b&t.b^e.b&n.b^t.b&n.b)}function T(e){return w(e,2)^w(e,13)^w(e,22)}function B(e){var t=y(e,28),n=y(e,34);return e=y(e,39),new s(t.a^n.a^e.a,t.b^n.b^e.b)}function H(e){return w(e,6)^w(e,11)^w(e,25)}function x(e){var t=y(e,14),n=y(e,18);return e=y(e,41),new s(t.a^n.a^e.a,t.b^n.b^e.b)}function E(e){return w(e,7)^w(e,18)^e>>>3}function k(e){var t=y(e,1),n=y(e,8);return e=m(e,7),new s(t.a^n.a^e.a,t.b^n.b^e.b)}function C(e){return w(e,17)^w(e,19)^e>>>10}function O(e){var t=y(e,19),n=y(e,61);return e=m(e,6),new s(t.a^n.a^e.a,t.b^n.b^e.b)}function _(e,t){var n=(65535&e)+(65535&t);return((e>>>16)+(t>>>16)+(n>>>16)&65535)<<16|65535&n}function L(e,t,n,r){var o=(65535&e)+(65535&t)+(65535&n)+(65535&r);return((e>>>16)+(t>>>16)+(n>>>16)+(r>>>16)+(o>>>16)&65535)<<16|65535&o}function U(e,t,n,r,o){var a=(65535&e)+(65535&t)+(65535&n)+(65535&r)+(65535&o);return((e>>>16)+(t>>>16)+(n>>>16)+(r>>>16)+(o>>>16)+(a>>>16)&65535)<<16|65535&a}function z(e,t){var n,r,o;return n=(65535&e.b)+(65535&t.b),o=(65535&(r=(e.b>>>16)+(t.b>>>16)+(n>>>16)))<<16|65535&n,n=(65535&e.a)+(65535&t.a)+(r>>>16),new s((65535&(r=(e.a>>>16)+(t.a>>>16)+(n>>>16)))<<16|65535&n,o)}function N(e,t,n,r){var o,a,i;return o=(65535&e.b)+(65535&t.b)+(65535&n.b)+(65535&r.b),i=(65535&(a=(e.b>>>16)+(t.b>>>16)+(n.b>>>16)+(r.b>>>16)+(o>>>16)))<<16|65535&o,o=(65535&e.a)+(65535&t.a)+(65535&n.a)+(65535&r.a)+(a>>>16),new s((65535&(a=(e.a>>>16)+(t.a>>>16)+(n.a>>>16)+(r.a>>>16)+(o>>>16)))<<16|65535&o,i)}function F(e,t,n,r,o){var a,i,u;return a=(65535&e.b)+(65535&t.b)+(65535&n.b)+(65535&r.b)+(65535&o.b),u=(65535&(i=(e.b>>>16)+(t.b>>>16)+(n.b>>>16)+(r.b>>>16)+(o.b>>>16)+(a>>>16)))<<16|65535&a,a=(65535&e.a)+(65535&t.a)+(65535&n.a)+(65535&r.a)+(65535&o.a)+(i>>>16),new s((65535&(i=(e.a>>>16)+(t.a>>>16)+(n.a>>>16)+(r.a>>>16)+(o.a>>>16)+(a>>>16)))<<16|65535&a,u)}function I(e,t){var n,r,o,a,s,i,u,c,f,d=[],p=[1732584193,4023233417,2562383102,271733878,3285377520];for(n=15+(t+65>>>9<<4);e.length<=n;)e.push(0);for(e[t>>>5]|=128<<24-t%32,e[n]=t,f=e.length,u=0;u<f;u+=16){for(n=p[0],r=p[1],o=p[2],a=p[3],s=p[4],c=0;80>c;c+=1)d[c]=16>c?e[c+u]:b(d[c-3]^d[c-8]^d[c-14]^d[c-16],1),i=20>c?U(b(n,5),r&o^~r&a,s,1518500249,d[c]):40>c?U(b(n,5),r^o^a,s,1859775393,d[c]):60>c?U(b(n,5),A(r,o,a),s,2400959708,d[c]):U(b(n,5),r^o^a,s,3395469782,d[c]),s=a,a=o,o=b(r,30),r=n,n=i;p[0]=_(n,p[0]),p[1]=_(r,p[1]),p[2]=_(o,p[2]),p[3]=_(a,p[3]),p[4]=_(s,p[4])}return p}function j(e,t,n){var r,o,a,i,u,c,f,d,p,l,h,b,w,y,m,I,j,X,P,M,J,V,Y,R,D,W,Z=[],$=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];if(l=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],"SHA-224"===n||"SHA-256"===n)h=64,r=15+(t+65>>>9<<4),y=16,m=1,D=Number,I=_,j=L,X=U,P=E,M=C,J=T,V=H,R=A,Y=v,l="SHA-224"===n?l:o;else{if("SHA-384"!==n&&"SHA-512"!==n)throw"Unexpected error in SHA-2 implementation";h=80,r=31+(t+128>>>10<<5),y=32,m=2,I=z,j=N,X=F,P=k,M=O,J=B,V=x,R=S,Y=g,$=[new(D=s)($[0],3609767458),new D($[1],602891725),new D($[2],3964484399),new D($[3],2173295548),new D($[4],4081628472),new D($[5],3053834265),new D($[6],2937671579),new D($[7],3664609560),new D($[8],2734883394),new D($[9],1164996542),new D($[10],1323610764),new D($[11],3590304994),new D($[12],4068182383),new D($[13],991336113),new D($[14],633803317),new D($[15],3479774868),new D($[16],2666613458),new D($[17],944711139),new D($[18],2341262773),new D($[19],2007800933),new D($[20],1495990901),new D($[21],1856431235),new D($[22],3175218132),new D($[23],2198950837),new D($[24],3999719339),new D($[25],766784016),new D($[26],2566594879),new D($[27],3203337956),new D($[28],1034457026),new D($[29],2466948901),new D($[30],3758326383),new D($[31],168717936),new D($[32],1188179964),new D($[33],1546045734),new D($[34],1522805485),new D($[35],2643833823),new D($[36],2343527390),new D($[37],1014477480),new D($[38],1206759142),new D($[39],344077627),new D($[40],1290863460),new D($[41],3158454273),new D($[42],3505952657),new D($[43],106217008),new D($[44],3606008344),new D($[45],1432725776),new D($[46],1467031594),new D($[47],851169720),new D($[48],3100823752),new D($[49],1363258195),new D($[50],3750685593),new D($[51],3785050280),new D($[52],3318307427),new D($[53],3812723403),new D($[54],2003034995),new D($[55],3602036899),new D($[56],1575990012),new D($[57],1125592928),new D($[58],2716904306),new D($[59],442776044),new D($[60],593698344),new D($[61],3733110249),new D($[62],2999351573),new D($[63],3815920427),new D(3391569614,3928383900),new D(3515267271,566280711),new D(3940187606,3454069534),new D(4118630271,4000239992),new D(116418474,1914138554),new D(174292421,2731055270),new D(289380356,3203993006),new D(460393269,320620315),new D(685471733,587496836),new D(852142971,1086792851),new D(1017036298,365543100),new D(1126000580,2618297676),new D(1288033470,3409855158),new D(1501505948,4234509866),new D(1607167915,987167468),new D(1816402316,1246189591)],l="SHA-384"===n?[new D(3418070365,l[0]),new D(1654270250,l[1]),new D(2438529370,l[2]),new D(355462360,l[3]),new D(1731405415,l[4]),new D(41048885895,l[5]),new D(3675008525,l[6]),new D(1203062813,l[7])]:[new D(o[0],4089235720),new D(o[1],2227873595),new D(o[2],4271175723),new D(o[3],1595750129),new D(o[4],2917565137),new D(o[5],725511199),new D(o[6],4215389547),new D(o[7],327033209)]}for(;e.length<=r;)e.push(0);for(e[t>>>5]|=128<<24-t%32,e[r]=t,W=e.length,b=0;b<W;b+=y){for(t=l[0],r=l[1],o=l[2],a=l[3],i=l[4],u=l[5],c=l[6],f=l[7],w=0;w<h;w+=1)16>w?(p=w*m+b,d=e.length<=p?0:e[p],p=e.length<=p+1?0:e[p+1],Z[w]=new D(d,p)):Z[w]=j(M(Z[w-2]),Z[w-7],P(Z[w-15]),Z[w-16]),d=X(f,V(i),Y(i,u,c),$[w],Z[w]),p=I(J(t),R(t,r,o)),f=c,c=u,u=i,i=I(a,d),a=o,o=r,r=t,t=I(d,p);l[0]=I(t,l[0]),l[1]=I(r,l[1]),l[2]=I(o,l[2]),l[3]=I(a,l[3]),l[4]=I(i,l[4]),l[5]=I(u,l[5]),l[6]=I(c,l[6]),l[7]=I(f,l[7])}if("SHA-224"===n)e=[l[0],l[1],l[2],l[3],l[4],l[5],l[6]];else if("SHA-256"===n)e=l;else if("SHA-384"===n)e=[l[0].a,l[0].b,l[1].a,l[1].b,l[2].a,l[2].b,l[3].a,l[3].b,l[4].a,l[4].b,l[5].a,l[5].b];else{if("SHA-512"!==n)throw"Unexpected error in SHA-2 implementation";e=[l[0].a,l[0].b,l[1].a,l[1].b,l[2].a,l[2].b,l[3].a,l[3].b,l[4].a,l[4].b,l[5].a,l[5].b,l[6].a,l[6].b,l[7].a,l[7].b]}return e}void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)}()},function(e,t,n){"use strict";n.r(t);var r="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",o=r.length,a=r.split("").reduce(function(e,t,n){var r;return Object.assign({},e,((r={})[t]=n,r))},{}),s=n(1),i=n.n(s),u=function(e){return new i.a(e,"HEX").getHash("SHA-256","HEX")},c=function(e){return e.reduce(function(e,t){return e+(n=t,Math.round(n).toString(16).padStart(2,"0"));var n},"")},f=n(0),d=function(e){for(var t=Object(f.keccak256)(e.toLowerCase()),n=0;n<40;n+=1)if(parseInt(t[n],16)>7&&e[n].toUpperCase()!==e[n]||parseInt(t[n],16)<=6&&e[n].toLowerCase()!==e[n])return!1;return!0},p={verifyChecksum:d,isValidAddress:function(e){return!!/^0x[0-9a-fA-F]{40}$/.test(e)&&(!(!/^0x[0-9a-f]{40}$/.test(e)&&!/^0x?[0-9A-F]{40}$/.test(e))||d(e.replace(/^0x/,"")))}},l=[{name:"bitcoin",symbol:"btc",addressTypes:{prod:["00","05"],testnet:["6f","c4"]}},{name:"bitcoincash",symbol:"bch",addressTypes:{prod:["00","05"],testnet:["6f","c4"]}},{name:"litecoin",symbol:"ltc",addressTypes:{prod:["30","05","32"],testnet:["6f","c4"]}},{name:"peercoin",symbol:"ppc",addressTypes:{prod:["37","75"],testnet:["6f","c4"]}},{name:"dogecoin",symbol:"doge",addressTypes:{prod:["1e","16"],testnet:["71","c4"]}},{name:"beavercoin",symbol:"bvc",addressTypes:{prod:["19","05"],testnet:["6f","c4"]}},{name:"freicoin",symbol:"frc",addressTypes:{prod:["00","05"],testnet:["6f","c4"]}},{name:"protoshares",symbol:"pts",addressTypes:{prod:["38","05"],testnet:["6f","c4"]}},{name:"megacoin",symbol:"mec",addressTypes:{prod:["32","05"],testnet:["6f","c4"]}},{name:"primecoin",symbol:"xpm",addressTypes:{prod:["17","53"],testnet:["6f","c4"]}},{name:"auroracoin",symbol:"aur",addressTypes:{prod:["17","05"],testnet:["6f","c4"]}},{name:"namecoin",symbol:"nmc",addressTypes:{prod:["34"],testnet:[]}},{name:"biocoin",symbol:"bio",addressTypes:{prod:["19","14"],testnet:["6f","c4"]}},{name:"garlicoin",symbol:"grlc",addressTypes:{prod:["26","05"],testnet:["6f","c4"]}},{name:"vertcoin",symbol:"vtc",addressTypes:{prod:["0x","47"],testnet:["6f","c4"]}},{name:"bitcoingold",symbol:"btg",addressTypes:{prod:["26","17"],testnet:["6f","c4"]}},{name:"komodo",symbol:"kmd",addressTypes:{prod:["3c","55"],testnet:["0","5"]}},{name:"bitcoinz",symbol:"btcz",expectedLength:26,addressTypes:{prod:["1cb8","1cbd"],testnet:["1d25","1cba"]}},{name:"bitcoinprivate",symbol:"btcp",expectedLength:26,addressTypes:{prod:["1325","13af"],testnet:["1957","19e0"]}},{name:"hush",symbol:"hush",expectedLength:26,addressTypes:{prod:["1cb8","1cbd"],testnet:["1d25","1cba"]}},{name:"snowgem",symbol:"sng",expectedLength:26,addressTypes:{prod:["1c28","1c2d"],testnet:["1d25","1cba"]}},{name:"zcash",symbol:"zec",expectedLength:26,addressTypes:{prod:["1cb8","1cbd"],testnet:["1d25","1cba"]}},{name:"zclassic",symbol:"zcl",expectedLength:26,addressTypes:{prod:["1cb8","1cbd"],testnet:["1d25","1cba"]}},{name:"zencash",symbol:"zen",expectedLength:26,addressTypes:{prod:["2089","2096"],testnet:["2092","2098"]}},{name:"votecoin",symbol:"vot",expectedLength:26,addressTypes:{prod:["1cb8","1cbd"],testnet:["1d25","1cba"]}},{name:"decred",symbol:"dcr",addressTypes:{prod:["073f","071a"],testnet:["0f21","0efc"]},hashFunction:"blake256",expectedLength:26},{name:"digibyte",symbol:"dgb",addressTypes:{prod:["1e"],testnet:[]}},{name:"ethereum",symbol:"eth",validator:p},{name:"etherzero",symbol:"etz",validator:p},{name:"ethereumclassic",symbol:"etc",validator:p},{name:"callisto",symbol:"clo",validator:p},{name:"ripple",symbol:"xrp",validator:{isValidAddress:function(e){return/^r[1-9A-HJ-NP-Za-km-z]{25,34}$/.test(e)}}},{name:"dash",symbol:"dash",addressTypes:{prod:["4c","10"],testnet:["8c","13"]}},{name:"neo",symbol:"neo",addressTypes:{prod:["17"],testnet:[]}},{name:"neogas",symbol:"gas",addressTypes:{prod:["17"],testnet:[]}},{name:"qtum",symbol:"qtum",addressTypes:{prod:["3a","32"],testnet:["6f","c4"]}},{name:"monero",symbol:"xmr",validator:{isValidAddress:function(e){return/^4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$/.test(e)}}}],h={CURRENCIES:l,getByNameOrSymbol:function(e){var t=e.toLowerCase();return l.find(function(e){var n=e.name,r=e.symbol;return n===t||r===t})}},b={getAddressType:function(e){var t=function(e){if(0===e.length)return[];for(var t=[0],n=0,r=e.length;n<r;n+=1){var s=e[n];if(!(s in a))throw new Error("Non base-58 character");for(var i=0,u=t.length;i<u;i+=1)t[i]*=o;t[0]+=a[s];for(var c=0,f=0,d=t.length;f<d;f+=1)t[f]+=c,c=t[f]>>8,t[f]&=255;for(;c;)t.push(255&c),c>>=8}for(var p=0,l=e.length;"1"===e[p]&&p<l-1;p+=1)t.push(0);return t.reverse()}(e),n=t.length;if(25!==n)return null;var r=c(t.slice(n-4,n)),s=c(t.slice(0,n-4));return r===u(u(s)).substr(0,8)?c(t.slice(0,1)):null},validate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bitcoin",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"prod",r=h.getByNameOrSymbol(t);if(r&&r.validator)return r.validator.isValidAddress(e);var o=b.getAddressType(e);return-1!==("prod"===n||"testnet"===n?r.addressTypes[n]:r.addressTypes.prod.concat(r.addressTypes.testnet)).indexOf(o)}};t.default=b},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])});