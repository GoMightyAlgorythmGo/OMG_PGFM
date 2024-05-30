"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{2842:(e,s,t)=>{t.r(s),t.d(s,{default:()=>ne});var a=t(27549),r=t(68404),n=t(9617),l=t(95967),i=t(8771),o=t(26011),c=t(47570),d=t(40256),u=t(71308),g=t(10331),p=t(94322),m=t(91045),h=t(90915),b=t(29721),x=t(82344),j=t(40920),f=t(61959),v=t(82969),y=t(19462),N=t(39357),S=t(212),w=t(53262),k=t(45916);const C=e=>{let{alert:s,alertManagerSourceName:t}=e;const a=(0,n.wW)($),r=(0,v.QX)(t),l=!(0,y.HY)(t)||f.Vt.hasPermission(c.bW.AlertingRuleRead);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{className:a.actionsRow,children:[(0,k.jsxs)(w.q,{actions:[r.update,r.create],fallback:f.Vt.isEditor,children:[s.status.state===g.Z9.Suppressed&&(0,k.jsx)(j.Qj,{href:`${(0,N.eQ)("/alerting/silences",t)}&silenceIds=${s.status.silencedBy.join(",")}`,className:a.button,icon:"bell",size:"sm",children:"Manage silences"}),s.status.state===g.Z9.Active&&(0,k.jsx)(j.Qj,{href:(0,N.VN)(t,s.labels),className:a.button,icon:"bell-slash",size:"sm",children:"Silence"})]}),l&&s.generatorURL&&(0,k.jsx)(j.Qj,{className:a.button,href:s.generatorURL,icon:"chart-line",size:"sm",children:"See source"})]}),Object.entries(s.annotations).map((e=>{let[s,t]=e;return(0,k.jsx)(S.a,{annotationKey:s,value:t},s)})),(0,k.jsxs)("div",{className:a.receivers,children:["Receivers:"," ",s.receivers.map((e=>{let{name:s}=e;return s})).filter((e=>!!e)).join(", ")]})]})},$=e=>({button:a.css`
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,actionsRow:a.css`
    padding: ${e.spacing(2,0)} !important;
    border-bottom: 1px solid ${e.colors.border.medium};
  `,receivers:a.css`
    padding: ${e.spacing(1,0)};
  `}),O=e=>{let{alerts:s,alertManagerSourceName:t}=e;const a=(0,n.wW)(G),l=(0,r.useMemo)((()=>[{id:"state",label:"State",renderCell:e=>{let{data:s}=e;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x.G,{state:s.status.state}),(0,k.jsxs)("span",{className:a.duration,children:["for"," ",(0,h.vT)({start:new Date(s.startsAt),end:new Date(s.endsAt)})]})]})},size:"220px"},{id:"labels",label:"Labels",renderCell:e=>{let{data:{labels:s}}=e;return(0,k.jsx)(p.s,{className:a.labels,labels:s})},size:1}]),[a]),i=(0,r.useMemo)((()=>s.map((e=>({id:e.fingerprint,data:e})))),[s]);return(0,k.jsx)("div",{className:a.tableWrapper,"data-testid":"alert-group-table",children:(0,k.jsx)(b.F,{cols:l,items:i,isExpandable:!0,renderExpandedContent:e=>{let{data:s}=e;return(0,k.jsx)(C,{alert:s,alertManagerSourceName:t})}})})},G=e=>({tableWrapper:a.css`
    margin-top: ${e.spacing(3)};
    ${e.breakpoints.up("md")} {
      margin-left: ${e.spacing(4.5)};
    }
  `,duration:a.css`
    margin-left: ${e.spacing(1)};
    font-size: ${e.typography.bodySmall.fontSize};
  `,labels:a.css`
    padding-bottom: 0;
  `});var M,F=t(8861);const A=e=>{let{alertManagerSourceName:s,group:t}=e;const[a,l]=(0,r.useState)(!0),i=(0,n.wW)(W);return(0,k.jsxs)("div",{className:i.wrapper,children:[(0,k.jsxs)("div",{className:i.header,children:[(0,k.jsxs)("div",{className:i.group,"data-testid":"alert-group",children:[(0,k.jsx)(m.U,{isCollapsed:a,onToggle:()=>l(!a),"data-testid":"alert-group-collapse-toggle"}),Object.keys(t.labels).length?(0,k.jsx)(p.s,{className:i.headerLabels,labels:t.labels}):M||(M=(0,k.jsx)("span",{children:"No grouping"}))]}),(0,k.jsx)(F.Z,{group:t})]}),!a&&(0,k.jsx)(O,{alertManagerSourceName:s,alerts:t.alerts})]})},W=e=>({wrapper:a.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,headerLabels:a.css`
    padding-bottom: 0 !important;
    margin-bottom: -${e.spacing(.5)};
  `,header:a.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${e.spacing(1,1,1,0)};
    background-color: ${e.colors.background.secondary};
    width: 100%;
  `,group:a.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:a.css``,spanElement:a.css`
    margin-left: ${e.spacing(.5)};
  `,[g.Z9.Active]:a.css`
    color: ${e.colors.error.main};
  `,[g.Z9.Suppressed]:a.css`
    color: ${e.colors.primary.main};
  `,[g.Z9.Unprocessed]:a.css`
    color: ${e.colors.secondary.main};
  `});var E,B=t(82498),I=t(1698),Z=t(50489),L=t(4546),q=t(96380);const z=e=>{let{onStateFilterChange:s,stateFilter:t}=e;const a=(0,n.wW)(R),r=Object.entries(g.Z9).sort(((e,s)=>{let[t]=e,[a]=s;return t<a?-1:1})).map((e=>{let[s,t]=e;return{label:s,value:t}}));return(0,k.jsxs)("div",{className:a.wrapper,children:[E||(E=(0,k.jsx)(L._,{children:"State"})),(0,k.jsx)(q.S,{options:r,value:t,onChange:s})]})},R=e=>({wrapper:a.css`
    margin-left: ${e.spacing(1)};
  `});var _,J,Q=t(82897),U=t(61884),P=t(24085);const K=e=>{let{className:s,groups:t,groupBy:a,onGroupingChange:r}=e;const n=(0,Q.uniq)(t.flatMap((e=>e.alerts)).flatMap((e=>{let{labels:s}=e;return Object.keys(s)}))).filter((e=>!(e.startsWith("__")&&e.endsWith("__")))).map((e=>({label:e,value:e})));return(0,k.jsxs)("div",{"data-testid":"group-by-container",className:s,children:[_||(_=(0,k.jsx)(L._,{children:"Custom group by"})),(0,k.jsx)(U.NU,{"aria-label":"group by label keys",value:a,placeholder:"Group by",prefix:J||(J=(0,k.jsx)(P.J,{name:"tag-alt"})),onChange:e=>{r(e.map((e=>{let{value:s}=e;return s})))},options:n})]})};var T=t(16905);const V=e=>{let{groups:s}=e;const[t,a]=(0,r.useState)(Math.floor(100*Math.random())),[l,i]=(0,o.K)(),{groupBy:c=[],queryString:d,alertState:u}=(0,N.lC)(l),g=`matcher-${t}`,p=(0,I.k)("instance"),[m,h]=(0,B.k)(p),b=(0,n.wW)(D),x=!!(c.length>0||d||u);return(0,k.jsxs)("div",{className:b.wrapper,children:[(0,k.jsx)(Z.P,{current:m,onChange:h,dataSources:p}),(0,k.jsxs)("div",{className:b.filterSection,children:[(0,k.jsx)(T.F,{className:b.filterInput,defaultQueryString:d,onFilterChange:e=>i({queryString:e||null})},g),(0,k.jsx)(K,{className:b.filterInput,groups:s,groupBy:c,onGroupingChange:e=>i({groupBy:e.length?e.join(","):null})}),(0,k.jsx)(z,{stateFilter:u,onStateFilterChange:e=>i({alertState:e||null})}),x&&(0,k.jsx)(j.zx,{className:b.clearButton,variant:"secondary",icon:"times",onClick:()=>{i({groupBy:null,queryString:null,alertState:null}),setTimeout((()=>a(t+1)),100)},children:"Clear filters"})]})]})},D=e=>({wrapper:a.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    margin-bottom: ${e.spacing(3)};
  `,filterSection:a.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${e.spacing(3)};
  `,filterInput:a.css`
    width: 340px;
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,clearButton:a.css`
    margin-left: ${e.spacing(1)};
    margin-top: 19px;
  `});var H=t(82139);var X,Y,ee=t(33899),se=t(83809),te=t(85464),ae=t(8455);const re=e=>({groupingBanner:a.css`
    margin: ${e.spacing(2,0)};
  `}),ne=()=>{var e;const s=(0,I.k)("instance"),[t]=(0,B.k)(s),a=(0,c.I0)(),[g]=(0,o.K)(),{groupBy:p=[]}=(0,N.lC)(g),m=(0,n.wW)(re),h=(0,ee._)((e=>e.amAlertGroups)),{loading:b,error:x,result:j=[]}=null!==(e=h[t||""])&&void 0!==e?e:ae.oq,f=((e,s)=>(0,r.useMemo)((()=>0===s.length?e.filter((e=>0===Object.keys(e.labels).length)).length>1?e.reduce(((e,s)=>{if(0===Object.keys(s.labels).length){const t=e.find((e=>{let{labels:s}=e;return Object.keys(s)}));t?t.alerts=(0,Q.uniqBy)([...t.alerts,...s.alerts],"labels"):e.push({alerts:s.alerts,labels:{},receiver:{name:"NONE"}})}else e.push(s);return e}),[]):e:e.flatMap((e=>{let{alerts:s}=e;return s})).reduce(((e,t)=>{if(s.every((e=>Object.keys(t.labels).includes(e)))){const a=e.find((e=>s.every((s=>e.labels[s]===t.labels[s]))));if(a)a.alerts.push(t);else{const a=s.reduce(((e,s)=>Object.assign({},e,{[s]:t.labels[s]})),{});e.push({alerts:[t],labels:a,receiver:{name:"NONE"}})}}else{const s=e.find((e=>0===Object.keys(e.labels).length));s?s.alerts.push(t):e.push({alerts:[t],labels:{},receiver:{name:"NONE"}})}return e}),[])),[e,s]))(j,p),v=(e=>{const[s]=(0,o.K)(),t=(0,N.lC)(s),a=(0,H.Zh)(t.queryString||"");return(0,r.useMemo)((()=>e.reduce(((e,s)=>{const r=s.alerts.filter((e=>{let{labels:s,status:r}=e;const n=(0,H.eD)(s,a),l=!t.alertState||r.state===t.alertState;return n&&l}));return r.length>0&&(0===Object.keys(s.labels).length?e.unshift(Object.assign({},s,{alerts:r})):e.push(Object.assign({},s,{alerts:r}))),e}),[])),[e,t,a])})(f);return(0,r.useEffect)((()=>{function e(){t&&a((0,se.mS)(t))}e();const s=setInterval(e,te.iF);return()=>{clearInterval(s)}}),[a,t]),t?(0,k.jsxs)(d.J,{pageId:"groups",children:[(0,k.jsx)(V,{groups:j}),b&&(X||(X=(0,k.jsx)(l.u,{text:"Loading notifications"}))),x&&!b&&(0,k.jsx)(i.b,{title:"Error loading notifications",severity:"error",children:x.message||"Unknown error"}),j&&v.map(((e,s)=>(0,k.jsxs)(r.Fragment,{children:[(1===s&&0===Object.keys(v[0].labels).length||0===s&&Object.keys(e.labels).length>0)&&(0,k.jsxs)("p",{className:m.groupingBanner,children:["Grouped by: ",Object.keys(e.labels).join(", ")]}),(0,k.jsx)(A,{alertManagerSourceName:t||"",group:e})]},`${JSON.stringify(e.labels)}-group-${s}`))),j&&!v.length&&(Y||(Y=(0,k.jsx)("p",{children:"No results."})))]}):(0,k.jsx)(d.J,{pageId:"groups",children:(0,k.jsx)(u.I,{availableAlertManagers:s})})}},90588:(e,s,t)=>{t.d(s,{z:()=>a});const a={filterByLabel:"filtering alert instances by label",loadedList:"loaded Alert Rules list",leavingRuleGroupEdit:"leaving rule group edit without saving"}},40256:(e,s,t)=>{t.d(s,{J:()=>n});t(68404);var a=t(90894),r=t(45916);const n=e=>{let{children:s,pageId:t,pageNav:n,isLoading:l}=e;return(0,r.jsx)(a.T,{pageNav:n,navId:t,children:(0,r.jsx)(a.T.Contents,{isLoading:l,children:s})})}},53262:(e,s,t)=>{t.d(s,{q:()=>n});t(68404);var a=t(61959),r=t(45916);const n=e=>{let{actions:s,children:t,fallback:n=!0}=e;return s.some((e=>a.Vt.hasAccess(e,n)))?(0,r.jsx)(r.Fragment,{children:t}):null}},29721:(e,s,t)=>{t.d(s,{F:()=>o});var a=t(27549),r=(t(68404),t(9617)),n=t(9019),l=t(45916);const i=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:s}=e,t=function(e,s){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);const o=(0,r.wW)(c);return(0,l.jsx)(n.t,Object.assign({renderExpandedContent:s?(e,t,r)=>(0,l.jsxs)(l.Fragment,{children:[!(t===r.length-1)&&(0,l.jsx)("div",{className:(0,a.cx)(o.contentGuideline,o.guideline)}),s(e,t,r)]}):void 0,renderPrefixHeader:()=>(0,l.jsx)("div",{className:o.relative,children:(0,l.jsx)("div",{className:(0,a.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,s,t)=>(0,l.jsxs)("div",{className:o.relative,children:[(0,l.jsx)("div",{className:(0,a.cx)(o.topGuideline,o.guideline)}),!(s===t.length-1)&&(0,l.jsx)("div",{className:(0,a.cx)(o.bottomGuideline,o.guideline)})]})},t))},c=e=>({relative:a.css`
    position: relative;
    height: 100%;
  `,guideline:a.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:a.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:a.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:a.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:a.css`
    top: -25px;
    bottom: 0;
  `})},71308:(e,s,t)=>{t.d(s,{I:()=>p});t(68404);var a,r,n,l,i=t(8771),o=t(82498),c=t(50489),d=t(45916);const u=()=>a||(a=(0,d.jsx)(i.b,{title:"No Alertmanager found",severity:"warning",children:"We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."})),g=()=>r||(r=(0,d.jsx)(i.b,{title:"Selected Alertmanager not found. Select a different Alertmanager.",severity:"warning",children:"Selected Alertmanager no longer exists or you may not have permission to access it."})),p=e=>{let{availableAlertManagers:s}=e;const[t,a]=(0,o.k)(s),r=s.length>0;return(0,d.jsx)("div",{children:r?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.P,{onChange:a,dataSources:s}),n||(n=(0,d.jsx)(g,{}))]}):l||(l=(0,d.jsx)(u,{}))})}},16905:(e,s,t)=>{t.d(s,{F:()=>j});var a,r,n,l=t(27549),i=t(82897),o=t(68404),c=t(68522),d=t(72698),u=t(9617),g=t(24085),p=t(4546),m=t(9442),h=t(1652),b=t(90588),x=t(45916);const j=e=>{let{className:s,onFilterChange:t,defaultQueryString:l}=e;const j=(0,u.wW)(f),v=(0,o.useMemo)((()=>(0,i.debounce)((e=>{(0,d.PN)(b.z.filterByLabel);const s=e.target;t(s.value)}),600)),[t]);(0,o.useEffect)((()=>v.cancel()),[v]);const y=a||(a=(0,x.jsx)(g.J,{name:"search"}));return(0,x.jsxs)("div",{className:s,children:[(0,x.jsx)(p._,{children:(0,x.jsxs)(c.Stack,{gap:.5,children:[r||(r=(0,x.jsx)("span",{children:"Search by label"})),(0,x.jsx)(m.u,{content:n||(n=(0,x.jsxs)("div",{children:["Filter alerts using label querying, ex:",(0,x.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,x.jsx)(g.J,{className:j.icon,name:"info-circle",size:"sm"})})]})}),(0,x.jsx)(h.I,{placeholder:"Search",defaultValue:l,onChange:v,"data-testid":"search-query-input",prefix:y,className:j.inputWidth})]})},f=e=>({icon:l.css`
    margin-right: ${e.spacing(.5)};
  `,inputWidth:l.css`
    width: 340px;
    flex-grow: 0;
  `})},82344:(e,s,t)=>{t.d(s,{G:()=>i});t(68404);var a=t(10331),r=t(49179),n=t(45916);const l={[a.Z9.Active]:"bad",[a.Z9.Unprocessed]:"neutral",[a.Z9.Suppressed]:"info"},i=e=>{let{state:s}=e;return(0,n.jsx)(r.i,{state:l[s],children:s})}},82498:(e,s,t)=>{t.d(s,{k:()=>o});var a=t(68404),r=t(26011),n=t(17421),l=t(85464),i=t(19462);function o(e){const[s,t]=(0,r.K)(),o=function(e){return(0,a.useCallback)((s=>e.map((e=>e.name)).includes(s)),[e])}(e),c=(0,a.useCallback)((e=>{o(e)&&(e===i.GC?(n.Z.delete(l.de),t({[l.c4]:null})):(n.Z.set(l.de,e),t({[l.c4]:e})))}),[t,o]),d=s[l.c4];if(d&&"string"==typeof d)return o(d)?[d,c]:[void 0,c];const u=n.Z.get(l.de);return u&&"string"==typeof u&&o(u)?(c(u),[u,c]):o(i.GC)?[i.GC,c]:[void 0,c]}},1698:(e,s,t)=>{t.d(s,{k:()=>n});var a=t(68404),r=t(19462);function n(e){return(0,a.useMemo)((()=>(0,r.LE)(e)),[e])}}}]);
//# sourceMappingURL=AlertGroups.59b557fe13f9ecafb6a9.js.map