"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{13548:(e,r,a)=>{a.d(r,{SX:()=>t,IF:()=>y,oZ:()=>d,xh:()=>m});a(68404);var s=a(55261),l=a(87885),n=a(45916);function t(e){let{error:r}=e;const a=function(e){switch(e){case s.w2.modifiedSignature:return"Plugin disabled due to modified content";case s.w2.invalidSignature:return"Plugin disabled due to invalid plugin signature";case s.w2.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return"Plugin disabled due to unknown error"+(e?`: ${e}`:"")}}(r);return(0,n.jsx)(l.C,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:a})}var i=a(9617),o=a(27549);const c=e=>o.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;function d(){const e=(0,i.wW)(c);return(0,n.jsx)(l.C,{text:"Installed",color:"orange",className:e})}var u,p=a(87709),g=a(25049),h=a(62599),x=a(40920);function y(e){let{plugin:r}=e;const a=(0,i.wW)(c);return(0,p.v)("enterprise.plugins")?u||(u=(0,n.jsx)(l.C,{text:"Enterprise",color:"blue"})):(0,n.jsxs)(g.Lh,{children:[(0,n.jsx)(h.o,{status:r.signature}),(0,n.jsx)(l.C,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:a}),(0,n.jsx)(x.zx,{size:"sm",fill:"text",icon:"external-link-alt",onClick:e=>{e.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${r.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function m(e){let{plugin:r}=e;const a=(0,i.wW)(v);return r.hasUpdate&&!r.isCore&&r.type!==s.zV.renderer?(0,n.jsx)("p",{className:a.hasUpdate,children:"Update available!"}):null}const v=e=>({hasUpdate:o.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},845:(e,r,a)=>{a.d(r,{E:()=>l});a(68404);var s=a(45916);function l(e){let{alt:r,className:a,src:l,height:n}=e;return(0,s.jsx)("img",{src:l,className:a,alt:r,loading:"lazy",height:n})}},62591:(e,r,a)=>{a.r(r),a.d(r,{default:()=>q});var s=a(27549),l=a(68404),n=a(70356),t=a(98712),i=a(9617),o=a(96380),c=a(9442),d=a(61884),u=a(95967),p=a(90894),g=a(8674),h=a(47570),x=a(45916);const y=e=>{let{children:r,wrap:a,className:l}=e;const n=(0,i.l4)(),t=m(n,a);return(0,x.jsx)("div",{className:(0,s.cx)(t.container,l),children:r})},m=(e,r)=>({container:s.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${r?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${e.spacing()};
      margin-right: ${e.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `});var v,f=a(48147),b=a(79729),j=a(24085),w=a(25049),P=a(62599),$=a(13548);function N(e){let{plugin:r}=e;return r.isEnterprise?(0,x.jsxs)(w.Lh,{height:"auto",wrap:!0,children:[(0,x.jsx)($.IF,{plugin:r}),r.isDisabled&&(0,x.jsx)($.SX,{error:r.error}),(0,x.jsx)($.xh,{plugin:r})]}):(0,x.jsxs)(w.Lh,{height:"auto",wrap:!0,children:[(0,x.jsx)(P.o,{status:r.signature}),r.isDisabled&&(0,x.jsx)($.SX,{error:r.error}),r.isInstalled&&(v||(v=(0,x.jsx)($.oZ,{}))),(0,x.jsx)($.xh,{plugin:r})]})}var S=a(845);const C="48px";function L(e){let{plugin:r,pathName:a,displayMode:l=b.lL.Grid}=e;const n=(0,i.wW)(k),t=l===b.lL.List;return(0,x.jsxs)("a",{href:`${a}/${r.id}`,className:(0,s.cx)(n.container,{[n.list]:t}),children:[(0,x.jsx)(S.E,{src:r.info.logos.small,className:n.pluginLogo,height:C,alt:""}),(0,x.jsx)("h2",{className:(0,s.cx)(n.name,"plugin-name"),children:r.name}),(0,x.jsxs)("div",{className:(0,s.cx)(n.content,"plugin-content"),children:[(0,x.jsxs)("p",{children:["By ",r.orgName]}),(0,x.jsx)(N,{plugin:r})]}),(0,x.jsx)("div",{className:n.pluginType,children:r.type&&(0,x.jsx)(j.J,{name:b.Co[r.type],title:`${r.type} plugin`})})]})}const k=e=>({container:s.css`
      display: grid;
      grid-template-columns: ${C} 1fr ${e.spacing(3)};
      grid-template-rows: auto;
      gap: ${e.spacing(2)};
      grid-auto-flow: row;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      padding: ${e.spacing(3)};
      transition: ${e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,list:s.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${e.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:s.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${e.colors.text.secondary};
    `,pluginLogo:s.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:s.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${e.colors.text.secondary};
    `,name:s.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${e.typography.h4.fontSize};
      color: ${e.colors.text.primary};
      margin: 0;
    `}),D=e=>{let{plugins:r,displayMode:a}=e;const l=a===b.lL.List,t=(0,i.wW)(B),o=(0,n.TH)(),c=f.v.appSubUrl+o.pathname;return(0,x.jsx)("div",{className:(0,s.cx)(t.container,{[t.list]:l}),"data-testid":"plugin-list",children:r.map((e=>(0,x.jsx)(L,{plugin:e,pathName:c,displayMode:a},e.id)))})},B=e=>({container:s.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${e.spacing(3)};
    `,list:s.css`
      grid-template-columns: 1fr;
    `});var I=a(94255),T=a(74819);const A=e=>{let{value:r,onSearch:a}=e;const[s,n]=(0,l.useState)(r);return function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const s=(0,l.useRef)(!0),n=[...a,s];(0,I.Z)((()=>{if(!s.current)return e();s.current=!1}),r,n)}((()=>a(null!=s?s:"")),500,[s]),(0,x.jsx)(T.H,{value:s,onKeyDown:e=>{"Enter"!==e.key&&13!==e.keyCode||a(e.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:e=>{n(e)},width:46})};var E=a(69138);var z=a(30110);function q(e){let{route:r}=e;const a=(0,n.TH)(),l=(0,t.Ox)(a.search),m=(0,h.v9)((e=>(0,g.h)(e.navIndex,"plugins"))),{displayMode:v,setDisplayMode:f}=(0,z.iY)(),j=(0,i.wW)(M),w={push:e=>{let{query:r}=e;t.E1.partial(r)}},P=(0,z.y9)(),$=l.q||"",N=l.filterBy||"installed",S=l.filterByType||"all",C=l.sortBy||E.Nh.nameAsc,{isLoading:L,error:k,plugins:B}=(0,z.GE)({query:$,filterBy:N,filterByType:S,sortBy:C}),I=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],T=e=>{w.push({query:{filterBy:e}})};return k?(console.error(k.message),null):(0,x.jsx)(p.T,{navModel:m,children:(0,x.jsxs)(p.T.Contents,{children:[(0,x.jsxs)(y,{wrap:!0,children:[(0,x.jsx)(A,{value:$,onSearch:e=>{w.push({query:{filterBy:"all",filterByType:"all",q:e}})}}),(0,x.jsxs)(y,{wrap:!0,className:j.actionBar,children:[(0,x.jsx)("div",{children:(0,x.jsx)(o.S,{value:S,onChange:e=>{w.push({query:{filterByType:e}})},options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})}),P?(0,x.jsx)("div",{children:(0,x.jsx)(o.S,{value:N,onChange:T,options:I})}):(0,x.jsx)(c.u,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top",children:(0,x.jsx)("div",{children:(0,x.jsx)(o.S,{disabled:!0,value:N,onChange:T,options:I})})}),(0,x.jsx)("div",{children:(0,x.jsx)(d.Ph,{"aria-label":"Sort Plugins List",width:24,value:C,onChange:e=>{w.push({query:{sortBy:e.value}})},options:[{value:"nameAsc",label:"Sort by name (A-Z)"},{value:"nameDesc",label:"Sort by name (Z-A)"},{value:"updated",label:"Sort by updated date"},{value:"published",label:"Sort by published date"},{value:"downloads",label:"Sort by downloads"}]})}),(0,x.jsx)("div",{children:(0,x.jsx)(o.S,{className:j.displayAs,value:v,onChange:f,options:[{value:b.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:b.lL.List,icon:"list-ul",description:"Display plugins in list"}]})})]})]}),(0,x.jsx)("div",{className:j.listWrap,children:L?(0,x.jsx)(u.u,{className:s.css`
                margin-bottom: 0;
              `,text:"Loading results"}):(0,x.jsx)(D,{plugins:B,displayMode:v})})]})})}const M=e=>({actionBar:s.css`
    ${e.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:s.css`
    margin-top: ${e.spacing(2)};
  `,displayAs:s.css`
    svg {
      margin-right: 0;
    }
  `})},30110:(e,r,a)=>{a.d(r,{iY:()=>A,bt:()=>k,ZV:()=>L,GE:()=>w,UQ:()=>$,bJ:()=>P,x3:()=>N,IS:()=>D,y9:()=>C,S1:()=>S,wq:()=>B});var s=a(68404),l=a(47570),n=a(69138),t=a(72192),i=a(1250),o=a(4387),c=a(43381),d=a(79729);const u=e=>e.plugins,p=(0,o.P1)(u,(e=>{let{items:r}=e;return r})),g=(0,o.P1)(u,(e=>{let{settings:r}=e;return r.displayMode})),{selectAll:h,selectById:x}=i.CD.getSelectors(p),y=(e,r)=>(0,o.P1)((e=>(0,o.P1)(h,(r=>r.filter((r=>"installed"===e?r.isInstalled:!r.isCore)))))(e),(e=>e.filter((e=>"all"===r||e.type===r)))),m=(e,r,a)=>(0,o.P1)(y(r,a),(e=>(0,o.P1)(h,(r=>""===e?[]:r.filter((r=>{const a=[];return r.name&&a.push(r.name.toLowerCase()),r.orgName&&a.push(r.orgName.toLowerCase()),a.some((r=>r.includes((0,c.x6)(e).toLowerCase())))})))))(e),((r,a)=>""===e?r:a)),v=(0,o.P1)(h,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),f=e=>(0,o.P1)(u,(r=>{let{requests:a={}}=r;return a[e]})),b=e=>(0,o.P1)(f(e),(e=>(null==e?void 0:e.status)===d.eE.Pending)),j=e=>(0,o.P1)(f(e),(e=>(null==e?void 0:e.status)===d.eE.Rejected?null==e?void 0:e.error:null)),w=e=>{let{query:r="",filterBy:a="installed",filterByType:s="all",sortBy:t=n.Nh.nameAsc}=e;I();const i=(0,l.v9)(m(r,a,s)),{isLoading:o,error:c}=L();return{isLoading:o,error:c,plugins:(0,n.AA)(i,t)}},P=e=>(I(),T(e),(0,l.v9)((r=>x(r,e)))),$=()=>(I(),(0,l.v9)(v)),N=()=>{const e=(0,l.I0)();return(r,a,s)=>e((0,t.N9)({id:r,version:a,isUpdating:s}))},S=()=>{const e=(0,l.I0)();return r=>e((0,t.Tz)(r))},C=()=>null===(0,l.v9)(j(t.tQ.typePrefix)),L=()=>({isLoading:(0,l.v9)(b(t.Qd.typePrefix)),error:(0,l.v9)(j(t.Qd.typePrefix))}),k=()=>({isLoading:(0,l.v9)(b(t.DD.typePrefix)),error:(0,l.v9)(j(t.DD.typePrefix))}),D=()=>({isInstalling:(0,l.v9)(b(t.N9.typePrefix)),error:(0,l.v9)(j(t.N9.typePrefix))}),B=()=>({isUninstalling:(0,l.v9)(b(t.Tz.typePrefix)),error:(0,l.v9)(j(t.Tz.typePrefix))}),I=()=>{const e=(0,l.I0)(),r=(0,l.v9)((a=t.Qd.typePrefix,(0,o.P1)(f(a),(e=>void 0===e))));var a;(0,s.useEffect)((()=>{r&&e((0,t.Qd)())}),[])},T=e=>{const r=(0,l.I0)(),a=(0,l.v9)((r=>x(r,e))),n=!(0,l.v9)(b(t.DD.typePrefix))&&a&&!a.details;(0,s.useEffect)((()=>{n&&r((0,t.DD)(e))}),[a])},A=()=>{const e=(0,l.I0)();return{displayMode:(0,l.v9)(g),setDisplayMode:r=>e((0,i.UC)(r))}}}}]);
//# sourceMappingURL=PluginListPage.6df20f3d0ec7259284ee.js.map