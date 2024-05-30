"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7918],{13987:(e,n,r)=>{r.r(n),r.d(n,{RedirectToRuleViewer:()=>q,default:()=>N});var t=r(27549),s=r(68404),a=r(70356),o=r(92773),l=function(e){var n=window.history,r=n[e];n[e]=function(n){var t=r.apply(this,arguments),s=new Event(e.toLowerCase());return s.state=n,window.dispatchEvent(s),t}};o.jU&&(l("pushState"),l("replaceState"));var u=function(e){var n=window.history,r=n.state,t=n.length,s=window.location;return{trigger:e,state:r,length:t,hash:s.hash,host:s.host,hostname:s.hostname,href:s.href,origin:s.origin,pathname:s.pathname,port:s.port,protocol:s.protocol,search:s.search}},i="function"==typeof Event;const c=o.jU&&i?function(){var e=(0,s.useState)(u("load")),n=e[0],r=e[1];return(0,s.useEffect)((function(){var e=function(){return r(u("popstate"))},n=function(){return r(u("pushstate"))},t=function(){return r(u("replacestate"))};return(0,o.on)(window,"popstate",e),(0,o.on)(window,"pushstate",n),(0,o.on)(window,"replacestate",t),function(){(0,o.S1)(window,"popstate",e),(0,o.S1)(window,"pushstate",n),(0,o.S1)(window,"replacestate",t)}}),[]),n}:function(){return{trigger:"load",length:1}};var p,d,m,f,h=r(9617),g=r(8771),w=r(95967),v=r(11340),x=r(24085),j=r(78721),b=r(94322),$=r(31865),R=r(80145),y=r(19462),_=r(39357),E=r(45916);const k="Alerting / Find rule";function q(){const e=(0,h.wW)(M),{name:n,sourceName:r}=function(){var e,n;const r=null!==(e=null===(n=c().pathname)||void 0===n?void 0:n.split("/"))&&void 0!==e?e:[];return{name:decodeURIComponent(r[3]),sourceName:decodeURIComponent(r[2])}}(),{error:t,loading:s,result:o,dispatched:l}=(0,R.X)(n,r);if(t)return(0,E.jsx)($.$,{title:k,children:(0,E.jsx)(g.b,{title:`Failed to load rules from ${r}`,children:(0,E.jsxs)("details",{className:e.errorMessage,children:[t.message,p||(p=(0,E.jsx)("br",{})),!(null==t||!t.stack)&&t.stack]})})});if(s||!l||!Array.isArray(o))return d||(d=(0,E.jsx)($.$,{title:k,children:(0,E.jsx)(w.u,{text:"Loading rule..."})}));if(!n||!r)return m||(m=(0,E.jsx)(a.l_,{to:"/notfound"}));const u=(0,y.o_)(r);if(!u)return(0,E.jsx)($.$,{title:k,children:(0,E.jsx)(g.b,{title:"Could not view rule",children:(0,E.jsx)("details",{className:e.errorMessage,children:`Could not find data source with name: ${r}.`})})});if(1===o.length){const[e]=o;return(0,E.jsx)(a.l_,{to:(0,_.V2)(u,e,"/alerting/list")})}return(0,E.jsxs)($.$,{title:k,children:[(0,E.jsxs)("div",{children:["Several rules in ",(0,E.jsx)("span",{className:e.param,children:r})," matched the name"," ",(0,E.jsx)("span",{className:e.param,children:n}),", please select the rule you want to view."]}),(0,E.jsx)("div",{className:e.rules,children:o.map(((n,r)=>(0,E.jsxs)(v.Z,{href:(0,_.V2)(u,n,"/alerting/list"),children:[(0,E.jsx)(v.Z.Heading,{children:n.name}),(0,E.jsxs)(v.Z.Meta,{separator:"",children:[f||(f=(0,E.jsx)(x.J,{name:"folder"})),(0,E.jsx)("span",{className:e.namespace,children:`${n.namespace.name} / ${n.group.name}`})]}),(0,E.jsx)(v.Z.Tags,{children:(0,E.jsx)(b.s,{labels:n.labels})})]},`${n.name}-${r}`)))})]})}function M(e){return{param:t.css`
      font-style: italic;
      color: ${e.colors.text.secondary};
    `,rules:t.css`
      margin-top: ${e.spacing(2)};
    `,namespace:t.css`
      margin-left: ${e.spacing(1)};
    `,errorMessage:t.css`
      white-space: pre-wrap;
    `}}const N=(0,j.Pf)(q,{style:"page"})},31865:(e,n,r)=>{r.d(n,{$:()=>i,l:()=>c});var t=r(27549),s=(r(68404),r(98712)),a=r(9617),o=r(31510),l=r(90894),u=r(45916);function i(e){const{wrapInContent:n=!0,children:r,title:t}=e,i=(0,a.wW)(p);return(0,u.jsxs)(l.T,{children:[(0,u.jsx)(o.X,{title:t,pageIcon:"bell",onGoBack:()=>s.E1.push("/alerting/list")}),(0,u.jsx)("div",{className:i.content,children:n?(0,u.jsx)(c,Object.assign({},e)):r})]})}function c(e){let{children:n,padding:r=2}=e;const t=(0,a.wW)(d(r));return(0,u.jsx)("div",{className:t.wrapper,children:n})}const p=e=>({content:t.css`
      margin: ${e.spacing(0,2,2)};
      max-width: ${e.breakpoints.values.xxl}px;
    `}),d=e=>n=>({wrapper:t.css`
      background: ${n.colors.background.primary};
      border: 1px solid ${n.colors.border.weak};
      border-radius: ${n.shape.borderRadius()};
      padding: ${n.spacing(e)};
    `})},80145:(e,n,r)=>{r.d(n,{H:()=>d,X:()=>m});var t=r(68404),s=r(66015),a=r(47570),o=r(83809),l=r(8455),u=r(59940),i=r(86647),c=r(75678),p=r(33899);function d(e,n){const r=f(n),s=(0,c.Zo)(n),a=(0,t.useMemo)((()=>{if(e&&n&&0!==s.length)for(const r of s)for(const t of r.groups)for(const r of t.rules){const t=u.Yd(n,r);if(u.Dg(t,e))return r}}),[e,n,s]);return Object.assign({},r,{result:a})}function m(e,n){const r=f(n),s=(0,c.Zo)(n),a=(0,t.useMemo)((()=>{if(!e||!n||0===s.length)return[];const r=[];for(const n of s)for(const t of n.groups)for(const n of t.rules)n.name===e&&r.push(n);return r}),[e,n,s]);return Object.assign({},r,{result:a})}function f(e){var n;const r=(0,a.I0)(),t=(0,p._)((e=>e.promRules)),l=h(e,t),u=(0,p._)((e=>e.rulerRules)),c=h(e,u),{loading:d}=(0,s.Z)((async()=>{e&&await r((0,o.dn)({rulesSourceName:e}))}),[r,e]);return{loading:d,error:(null!==(n=l.error)&&void 0!==n?n:(0,i.m$)(c))?void 0:c.error,dispatched:l.dispatched&&c.dispatched}}function h(e,n){if(!e)return l.oq;const r=n[e];return r||l.oq}},75678:(e,n,r)=>{r.d(n,{Kd:()=>i,Zo:()=>u});var t=r(82897),s=r(68404),a=r(19462),o=r(86647),l=r(33899);function u(e){const n=(0,l._)((e=>e.promRules)),r=(0,l._)((e=>e.rulerRules)),t=(0,s.useRef)({}),u=(0,s.useMemo)((()=>{if(e){const n=(0,a.o_)(e);if(!n)throw new Error(`Unknown rules source: ${e}`);return[n]}return(0,a.h_)()}),[e]);return(0,s.useMemo)((()=>u.map((e=>{var s,l;const u=(0,a.jq)(e)?e.name:e,i=null===(s=n[u])||void 0===s?void 0:s.result,d=null===(l=r[u])||void 0===l?void 0:l.result,m=t.current[u];if(m&&m.promRules===i&&m.rulerRules===d)return m.result;const f={};Object.entries(d||{}).forEach((n=>{let[r,t]=n;const s={rulesSource:e,name:r,groups:[]};f[r]=s,function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.groups=n.map((n=>{const r={name:n.name,interval:n.interval,source_tenants:n.source_tenants,rules:[]};return r.rules=n.rules.map((n=>c(n,e,r))),r}))}(s,t)})),null==i||i.forEach((n=>{let{name:r,groups:t}=n;!function(e,n){const r=new Map;e.groups.forEach((e=>r.set(e.name,e))),n.forEach((n=>{var t;let s=r.get(n.name);s||(s={name:n.name,rules:[]},e.groups.push(s),r.set(n.name,s));const l=new Map;s.rules.forEach((e=>{const n=l.get(e.name);n?n.push(e):l.set(e.name,[e])})),(null!==(t=n.rules)&&void 0!==t?t:[]).forEach((n=>{const r=function(e,n,r){const t=n.get(e.name);if(!t)return;if((0,a.HY)(r))return t[0];const s=t.find((n=>!n.promRule&&p(n,e,!0)));if(s)return s;const o=t.find((n=>!n.promRule&&p(n,e,!1)));if(o)return o;return}(n,l,e.rulesSource);r?r.promRule=n:s.rules.push(function(e,n,r){return{name:e.name,query:e.query,labels:e.labels||{},annotations:(0,o.x_)(e)&&e.annotations||{},promRule:e,namespace:n,group:r}}(n,e,s))}))}))}(f[r]=f[r]||{rulesSource:e,name:r,groups:[]},t)}));const h=Object.values(f);return t.current[u]={promRules:i,rulerRules:d,result:h},h})).flat()),[n,r,u])}function i(e){return e.map((e=>{const n=Object.assign({},e,{groups:[]});var r;return n.groups.push({name:"default",rules:(r=e.groups.flatMap((e=>e.rules)),r.sort(((e,n)=>e.name.localeCompare(n.name))))}),n}))}function c(e,n,r){return(0,o.cG)(e)?{name:e.alert,query:e.expr,labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:n,group:r}:(0,o.yF)(e)?{name:e.record,query:e.expr,labels:e.labels||{},annotations:{},rulerRule:e,namespace:n,group:r}:{name:e.grafana_alert.title,query:"",labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:n,group:r}}function p(e,n){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.name===n.name&&(0,t.isEqual)([r?d(e.query):"",e.labels,e.annotations],[r?d(n.query):"",n.labels||{},(0,o.x_)(n)&&n.annotations||{}])}function d(e){return e.length>1&&"("===e[0]&&")"===e[e.length-1]&&(e=e.slice(1,-1)),(e=e.replace(/\s|\n/g,"")).split("").sort().join("")}}}]);
//# sourceMappingURL=AlertingRedirectToRule.770908a0c39340b035bb.js.map