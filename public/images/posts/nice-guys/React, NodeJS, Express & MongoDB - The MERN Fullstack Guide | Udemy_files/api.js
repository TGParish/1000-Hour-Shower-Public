var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var g=this||self,h=function(a){return a};/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var m=window,p=document,aa=m.location,ba=function(){},ca=/\[native code\]/,r=function(a,b,c){return a[b]=a[b]||c},da=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b},w=function(){var a;if((a=Object.create)&&ca.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},y=r(m,"gapi",{});var C;C=r(m,"___jsl",w());r(C,"I",0);r(C,"hel",10);var D=function(){var a=aa.href;if(C.dpo)var b=C.h;else{b=C.h;var c=/([#].*&|[#])jsh=([^&#]*)/g,d=/([?#].*&|[?#])jsh=([^&#]*)/g;if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b},fa=function(a){var b=r(C,"PQ",[]);C.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},E=function(a){return r(r(C,"H",w()),a,w())};var F=r(C,"perf",w()),G=r(F,"g",w()),ha=r(F,"i",w());r(F,"r",[]);w();w();var H=function(a,b,c){var d=F.r;"function"===typeof d?d(a,b,c):d.push([a,b,c])},L=function(a,b,c){b&&0<b.length&&(b=K(b),c&&0<c.length&&(b+="___"+K(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=r(ha,"_p",w()),r(b,c,w())[a]=(new Date).getTime(),H(a,"_p",c))},K=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")};var M=w(),N=[],Q=function(a){throw Error("Bad hint"+(a?": "+a:""));};N.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?C[b]=r(C,b,[]).concat(c):r(C,b,c)}if(b=a.u)a=r(C,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var ia=/^(\/[a-zA-Z0-9_\-]+)+$/,R=[/\/amp\//,/\/amp$/,/^\/amp$/],ja=/^[a-zA-Z0-9\-_\.,!]+$/,ka=/^gapi\.loaded_[0-9]+$/,la=/^[a-zA-Z0-9,._-]+$/,pa=function(a,b,c,d,e){var f=a.split(";"),l=f.shift(),k=M[l],n=null;k?n=k(f,b,c,d):Q("no hint processor for: "+l);n||Q("failed to generate load url");b=n;c=b.match(ma);(d=b.match(na))&&1===d.length&&oa.test(b)&&c&&1===c.length||Q("failed sanity: "+a);try{e&&0<e.length&&(n=n+"?le="+e.join(","))}catch(x){}return n},ra=function(a,b,c,d){a=qa(a);ka.test(c)||Q("invalid_callback");
b=S(b);d=d&&d.length?S(d):null;var e=function(f){return encodeURIComponent(f).replace(/%2C/g,",")};return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.g?"/am="+e(a.g):"",a.i?"/rs="+e(a.i):"",a.j?"/t="+e(a.j):"","/cb=",e(c)].join("")},qa=function(a){"/"!==a.charAt(0)&&Q("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Q("empty/relative directory");
else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),l=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&l&&k&&(a[l]=a[l]||k)}b="/"+c.join("/");ia.test(b)||Q("invalid_prefix");c=0;for(d=R.length;c<d;++c)R[c].test(b)&&Q("invalid_prefix");c=T(a,"k",!0);d=T(a,"am");e=T(a,"rs");a=T(a,"t");return{pathPrefix:b,version:c,g:d,i:e,j:a}},S=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");
la.test(e)&&b.push(e)}return b.join(",")},T=function(a,b,c){a=a[b];!a&&c&&Q("missing: "+b);if(a){if(ja.test(a))return a;Q("invalid: "+b)}return null},oa=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,na=/\/cb=/g,ma=/\/\//g,sa=function(){var a=D();if(!a)throw Error("Bad hint");return a};M.m=function(a,b,c,d){(a=a[0])||Q("missing_hint");return"https://apis.google.com"+ra(a,b,c,d)};var U=decodeURI("%73cript"),V=/^[-+_0-9\/A-Za-z]+={0,2}$/,W=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c},X=function(){var a=C.nonce;return void 0!==a?a&&a===String(a)&&a.match(V)?a:C.nonce=null:p.querySelector?(a=p.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(V)?C.nonce=a:C.nonce=null):null:null},ua=function(a){if("loading"!=p.readyState)ta(a);
else{var b=X(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+U+' src="'+encodeURI(a)+'"'+c+"></"+U+">";p.write(Y?Y.createHTML(a):a)}},ta=function(a){var b=p.createElement(U);b.setAttribute("src",Y?Y.createScriptURL(a):a);a=X();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=p.getElementsByTagName(U)[0])?a.parentNode.insertBefore(b,a):(p.head||p.body||p.documentElement).appendChild(b)},va=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<N.length;d++){var e=N[d][0],f=N[d][1];f&&Object.prototype.hasOwnProperty.call(c,
e)&&f(c[e],a,b)}},xa=function(a,b,c){wa(function(){var d=b===D()?r(y,"_",w()):w();d=r(E(b),"_",d);a(d)},c)},za=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);va(a,c);b=a?a.split(":"):[];var d=c.h||sa(),e=r(C,"ah",w());if(e["::"]&&b.length){a=[];for(var f=null;f=b.shift();){var l=f.split(".");l=e[f]||e[l[1]&&"ns:"+l[0]||""]||d;var k=a.length&&a[a.length-1]||null,n=k;k&&k.hint==l||(n={hint:l,features:[]},a.push(n));n.features.push(f)}var x=a.length;if(1<x){var z=c.callback;z&&(c.callback=
function(){0==--x&&z()})}for(;b=a.shift();)ya(b.features,c,b.hint)}else ya(b||[],c,d)},ya=function(a,b,c){a=da(a)||[];var d=b.callback,e=b.config,f=b.timeout,l=b.ontimeout,k=b.onerror,n=void 0;"function"==typeof k&&(n=k);var x=null,z=!1;if(f&&!l||!f&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=r(E(c),"r",[]).sort();var O=r(E(c),"L",[]).sort(),Ca=C.le,I=[].concat(k),ea=function(v,A){if(z)return 0;m.clearTimeout(x);O.push.apply(O,q);var B=((y||{}).config||
{}).update;B?B(e):e&&r(C,"cu",[]).push(e);if(A){L("me0",v,I);try{xa(A,c,n)}finally{L("me1",v,I)}}return 1};0<f&&(x=m.setTimeout(function(){z=!0;l()},f));var q=W(a,O);if(q.length){q=W(a,k);var t=r(C,"CP",[]),u=t.length;t[u]=function(v){if(!v)return 0;L("ml1",q,I);var A=function(J){t[u]=null;ea(q,v)&&fa(function(){d&&d();J()})},B=function(){var J=t[u+1];J&&J()};0<u&&t[u-1]?t[u]=function(){A(B)}:A(B)};if(q.length){var P="loaded_"+C.I++;y[P]=function(v){t[u](v);y[P]=null};a=pa(c,q,"gapi."+P,k,Ca);k.push.apply(k,
q);L("ml0",q,I);b.sync||m.___gapisync?ua(a):ta(a)}else t[u](ba)}else ea(q)&&d&&d()},Aa;var Ba=null,Z=g.trustedTypes;if(Z&&Z.createPolicy)try{Ba=Z.createPolicy("gapi#gapi",{createHTML:h,createScript:h,createScriptURL:h})}catch(a){g.console&&g.console.error(a.message)}Aa=Ba;var Y=Aa;var wa=function(a,b){if(C.hee&&0<C.hel)try{return a()}catch(c){b&&b(c),C.hel--,za("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;}};y.load=function(a,b){return wa(function(){return za(a,b)})};G.bs0=window.gapi._bs||(new Date).getTime();H("bs0");G.bs1=(new Date).getTime();H("bs1");delete window.gapi._bs;}).call(this);
gapi.load("",{callback:window["udGoogleCalendarAuthLoaderCallback"],_c:{"jsl":{"ci":{"deviceType":"desktop","oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","disableOpt":true,"idpIframeUrl":"https://accounts.google.com/o/oauth2/iframe","usegapi":false},"debug":{"reportExceptionRate":0.05,"forceIm":false,"rethrowException":false,"host":"https://apis.google.com"},"enableMultilogin":true,"googleapis.config":{"auth":{"useFirstPartyAuthV2":true}},"isPlusUser":false,"inline":{"css":1},"disableRealtimeCallback":false,"drive_share":{"skipInitCommand":true},"csi":{"rate":0.01},"client":{"cors":false},"isLoggedIn":true,"signInDeprecation":{"rate":0.0},"include_granted_scopes":true,"llang":"en","iframes":{"youtube":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1","methods":["scroll","openwindow"]},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},":source:":"3p","playemm":{"url":"https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1"},"savetoandroidpay":{"url":"https://pay.google.com/gp/v/widget/save"},"blogger":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1","methods":["scroll","openwindow"]},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},"partnersbadge":{"url":"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"},"dataconnector":{"url":"https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1"},"surveyoptin":{"url":"https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1"},":socialhost:":"https://apis.google.com","shortlists":{"url":""},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},":gplus_url:":"https://plus.google.com","signin":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1","methods":["onauth"]},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"},"comments":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1","methods":["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com","backdrop":{"url":"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"},"visibility":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"additnow":{"url":"https://apis.google.com/marketplace/button?usegapi\u003d1","methods":["launchurl"]},":signuphost:":"https://plus.google.com","ratingbadge":{"url":"https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"community":{"url":":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},"sharetoclassroom":{"url":"https://classroom.google.com/sharewidget?usegapi\u003d1"},"ytshare":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"family_creation":{"params":{"url":""},"url":"https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"appfinder":{"url":"https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1"},"savetowallet":{"url":"https://pay.google.com/gp/v/widget/save"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"savetodrive":{"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1","methods":["save"]},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.g8agzr_oroM.O/am\u003dAQ/d\u003d1/rs\u003dAGLTcCP6z3gW3iZ5SpDBmGgDQznnZEz5gQ/m\u003d__features__","u":"https://apis.google.com/js/api.js?onload\u003dudGoogleCalendarAuthLoaderCallback","hee":true,"fp":"e5f685b0f2087c66363bf458bab3c4029d2a33ae","dpo":false,"le":[]},"fp":"e5f685b0f2087c66363bf458bab3c4029d2a33ae","annotation":["interactivepost","recobar","signin2","autocomplete","profile"],"bimodal":["signin","share"]}});