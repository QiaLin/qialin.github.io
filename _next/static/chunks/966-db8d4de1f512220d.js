(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{9477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(5893),o=r(7294);t.default=function({html:e,height:t=null,width:r=null,children:a,dataNtpc:l=""}){return(0,o.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${l}`}})},[l]),(0,n.jsxs)(n.Fragment,{children:[a,e?(0,n.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=r?`${r}px`:"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:e}}):null]})}},7834:function(e,t,r){"use strict";let n;var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let a=r(5893),l=r(7294),u=o(r(4298));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:r="dataLayer"}=e;return void 0===n&&(n=r),(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${r}'] = window['${r}'] || [];
          function gtag(){window['${r}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,a.jsx)(u.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=(...e)=>{if(void 0===n){console.warn("@next/third-parties: GA has not been initialized");return}window[n]?window[n].push(...e):console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)}},3632:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=r(5893),a=r(6257),l=n(r(9477));t.default=function(e){let{apiKey:t,...r}=e,n={...r,key:t},{html:u}=(0,a.GoogleMapsEmbed)(n);return(0,o.jsx)(l.default,{height:n.height||null,width:n.width||null,html:u,dataNtpc:"GoogleMapsEmbed"})}},674:function(e,t,r){"use strict";let n;var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let a=r(5893),l=r(7294),u=o(r(4298));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:r="dataLayer",auth:o,preview:i,dataLayer:s}=e;void 0===n&&(n=r);let c="dataLayer"!==r?`$l=${r}`:"",f=o?`&gtm_auth=${o}`:"",d=i?`&gtm_preview=${i}&gtm_cookies_win=x`:"";return(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${s?`w[l].push(${JSON.stringify(s)})`:""}
      })(window,'${r}');`}}),(0,a.jsx)(u.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${c}${f}${d}`})]})},t.sendGTMEvent=e=>{if(void 0===n){console.warn("@next/third-parties: GTM has not been initialized");return}window[n]?window[n].push(e):console.warn(`@next/third-parties: GTM dataLayer ${n} does not exist`)}},9692:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var o=r(3632);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return n(o).default}});var a=r(1494);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return n(a).default}});var l=r(674);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return l.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return l.sendGTMEvent}});var u=r(7834);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return u.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return u.sendGAEvent}})},1494:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=r(5893),a=n(r(4298)),l=r(6257),u=n(r(9477)),i={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:r,stylesheets:n}=(0,l.YouTubeEmbed)(e);return(0,o.jsx)(u.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==r?void 0:r.map(e=>(0,o.jsx)(a.default,{src:e.url,strategy:i[e.strategy],stylesheets:n},e.url))})}},1277:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return f}});var r,n,o="refresh",a="navigate",l="restore",u="server-patch",i="prefetch",s="fast-refresh",c="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1592:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(694),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8945:function(e,t,r){"use strict";var n=r(968),o=r(3171),a=r(7069),l=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return P}});var s=r(8754),c=r(5893),f=s._(r(7294)),d=r(7597),p=r(664),g=r(4897),b=r(9090),y=r(6782),m=r(7318),v=r(5162),h=r(804),O=r(1592),_=r(5182),j=r(1277),w=new Set;function E(e,t,r,n,o,a){if(a||(0,p.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(w.has(l))return;w.add(l)}Promise.resolve(a?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function M(e){return"string"==typeof e?e:(0,g.formatUrl)(e)}var P=f.default.forwardRef(function(e,t){var r,n,u=e.href,s=e.as,g=e.children,w=e.prefetch,P=void 0===w?null:w,x=e.passHref,T=e.replace,k=e.shallow,G=e.scroll,A=e.locale,C=e.onClick,S=e.onMouseEnter,$=e.onTouchStart,I=e.legacyBehavior,L=void 0!==I&&I,N=a(e,l);r=g,L&&("string"==typeof r||"number"==typeof r)&&(r=(0,c.jsx)("a",{children:r}));var R=f.default.useContext(m.RouterContext),D=f.default.useContext(v.AppRouterContext),H=null!=R?R:D,U=!R,Y=!1!==P,z=null===P?j.PrefetchKind.AUTO:j.PrefetchKind.FULL,F=f.default.useMemo(function(){if(!R){var e=M(u);return{href:e,as:s?M(s):e}}var t=o((0,d.resolveHref)(R,u,!0),2),r=t[0],n=t[1];return{href:r,as:s?(0,d.resolveHref)(R,s):n||r}},[R,u,s]),K=F.href,J=F.as,B=f.default.useRef(K),V=f.default.useRef(J);L&&(n=f.default.Children.only(r));var q=L?n&&"object"==typeof n&&n.ref:t,W=o((0,h.useIntersection)({rootMargin:"200px"}),3),Q=W[0],X=W[1],Z=W[2],ee=f.default.useCallback(function(e){(V.current!==J||B.current!==K)&&(Z(),V.current=J,B.current=K),Q(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[J,q,K,Z,Q]);f.default.useEffect(function(){H&&X&&Y&&E(H,K,J,{locale:A},{kind:z},U)},[J,K,X,A,Y,null==R?void 0:R.locale,H,U,z]);var et={ref:ee,onClick:function(e){L||"function"!=typeof C||C(e),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),H&&!e.defaultPrevented&&function(e,t,r,n,o,a,l,u,i){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((s=e.currentTarget.getAttribute("target"))&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!i&&!(0,p.isLocalURL)(r)))){e.preventDefault();var s,c=function(){var e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};i?f.default.startTransition(c):c()}}(e,H,K,J,T,k,G,A,U)},onMouseEnter:function(e){L||"function"!=typeof S||S(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),H&&(Y||!U)&&E(H,K,J,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:z},U)},onTouchStart:function(e){L||"function"!=typeof $||$(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),H&&(Y||!U)&&E(H,K,J,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:z},U)}};if((0,b.isAbsoluteUrl)(J))et.href=J;else if(!L||x||"a"===n.type&&!("href"in n.props)){var er=void 0!==A?A:null==R?void 0:R.locale,en=(null==R?void 0:R.isLocaleDomain)&&(0,O.getDomainLocale)(J,er,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);et.href=en||(0,_.addBasePath)((0,y.addLocale)(J,er,null==R?void 0:R.defaultLocale))}return L?f.default.cloneElement(n,et):(0,c.jsx)("a",i(i(i({},N),et),{},{children:r}))});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},804:function(e,t,r){"use strict";var n=r(3171);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});var o=r(7294),a=r(2310),l="function"==typeof IntersectionObserver,u=new Map,i=[];function s(e){var t=e.rootRef,r=e.rootMargin,s=e.disabled||!l,c=n((0,o.useState)(!1),2),f=c[0],d=c[1],p=(0,o.useRef)(null),g=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(l){if(!s&&!f){var e,n,o,c,g=p.current;if(g&&g.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=i.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=u.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),u.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(c=e.elements).set(g,function(e){return e&&d(e)}),o.observe(g),function(){if(c.delete(g),o.unobserve(g),0===c.size){o.disconnect(),u.delete(n);var e=i.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&i.splice(e,1)}}}}else if(!f){var b=(0,a.requestIdleCallback)(function(){return d(!0)});return function(){return(0,a.cancelIdleCallback)(b)}}},[s,r,t,f,p.current]),[g,f,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){r(8945)},4298:function(e,t,r){e.exports=r(8834)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function i(e){return function(t){return n.createElement(s,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var r,o=e.attr,a=e.size,i=e.title,s=u(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,function(e){return t(e)}):t(o)}},6257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var n=r(3494);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return n.GoogleAnalytics}});var o=r(4248);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return o.GoogleMapsEmbed}});var a=r(2239);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return a.YouTubeEmbed}})},3494:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let a=o(r(9426)),l=r(7058);t.GoogleAnalytics=e=>{var t=n(e,[]);return(0,l.formatData)(a.default,t)}},4248:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let a=o(r(7395)),l=r(7058);t.GoogleMapsEmbed=e=>{var t=n(e,[]);return(0,l.formatData)(a.default,t)}},2239:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let a=o(r(8420)),l=r(7058);t.YouTubeEmbed=e=>{var t=n(e,[]);return(0,l.formatData)(a.default,t)}},7058:function(e,t){"use strict";function r(e,t,r=!1){return t?Object.keys(e).filter(e=>r?!t.includes(e):t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}):{}}function n(e,t,r,n){let o=n&&Object.keys(n).length>0?new URL(Object.values(n)[0],e):new URL(e);return t&&r&&t.forEach(e=>{r[e]&&o.searchParams.set(e,r[e])}),o.toString()}function o(e,t,r,o,a){var l;if(!t)return`<${e}></${e}>`;let u=(null===(l=t.src)||void 0===l?void 0:l.url)?Object.assign(Object.assign({},t),{src:n(t.src.url,t.src.params,o,a)}):t,i=Object.keys(Object.assign(Object.assign({},u),r)).reduce((e,t)=>{let n=null==r?void 0:r[t],o=u[t],a=null!=n?n:o,l=!0===a?t:`${t}="${a}"`;return a?e+` ${l}`:e},"");return`<${e}${i}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=n,t.createHtml=o,t.formatData=function(e,t){var a,l,u,i,s;let c=r(t,null===(a=e.scripts)||void 0===a?void 0:a.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),f=r(t,null===(u=null===(l=e.html)||void 0===l?void 0:l.attributes.src)||void 0===u?void 0:u.params),d=r(t,[null===(s=null===(i=e.html)||void 0===i?void 0:i.attributes.src)||void 0===s?void 0:s.slugParam]),p=r(t,[...Object.keys(c),...Object.keys(f),...Object.keys(d)],!0);return Object.assign(Object.assign({},e),{html:e.html?o(e.html.element,e.html.attributes,p,f,d):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:n(e.url,e.params,c)})):null})}},9426:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},7395:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},8420:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}}]);