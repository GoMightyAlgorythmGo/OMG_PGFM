"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[413],{64845:(e,r,s)=>{s.d(r,{f:()=>t});const t=e=>Boolean(e)},33893:(e,r,s)=>{s.r(r),s.d(r,{default:()=>be});var t=s(27549),n=s(82897),a=s(68404),i=s(6932),l=s(78146),o=s(25049),c=s(40920),d=s(95967),u=s(8771),g=s(9617),h=s(87885),p=s(90894),x=s(98163),m=s(93970),j=s(47570),b=s(59052),f=s(63672),v=s(21456),y=s(84719),w=s(6347),k=s(67436),O=s(7197),C=s(58799),I=s(7501),S=s(48063);const D=["sourceUID","targetUID"],T=["sourceUID"],$=["sourceUID","uid"];function U(e,r){if(null==e)return{};var s,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],r.indexOf(s)>=0||(n[s]=e[s]);return n}const E=e=>{let{sourceUID:r,targetUID:s}=e,t=U(e,D);return Object.assign({},t,{source:(0,I.F)().getInstanceSettings(r),target:(0,I.F)().getInstanceSettings(s)})},N=e=>e.map(E);function R(e){return e.data}const P=()=>{const{backend:e}=(0,S.p)(),[r,s]=(0,O.Z)((()=>(0,C.n)(e.fetch({url:"/api/datasources/correlations",method:"GET",showErrorAlert:!1})).then(R).then(N)),[e]),[t,n]=(0,O.Z)((r=>{let{sourceUID:s}=r,t=U(r,T);return e.post(`/api/datasources/uid/${s}/correlations`,t).then(E)}),[e]),[a,i]=(0,O.Z)((r=>{let{sourceUID:s,uid:t}=r;return e.delete(`/api/datasources/uid/${s}/correlations/${t}`)}),[e]),[l,o]=(0,O.Z)((r=>{let{sourceUID:s,uid:t}=r,n=U(r,$);return e.patch(`/api/datasources/uid/${s}/correlations/${t}`,n).then(E)}),[e]);return{create:Object.assign({execute:n},t),update:Object.assign({execute:o},l),get:Object.assign({execute:s},r),remove:Object.assign({execute:i},a)}};var q=s(1652),B=s(63639),L=s(45916);const W=(e,r)=>r?`${e}_${r.sourceUID}-${r.uid}`:e,F=e=>({marginless:t.css`
    margin: 0;
  `,label:t.css`
    max-width: ${e.spacing(32)};
  `,description:t.css`
    max-width: ${e.spacing(80)};
  `});function V(e){let{register:r,readOnly:s=!1,correlation:n}=e;const a=(0,g.wW)(F);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(y.g,{label:"Label",className:a.label,children:(0,L.jsx)(q.I,Object.assign({id:W("label",n)},r("label"),{readOnly:s,placeholder:"i.e. Tempo traces"}))}),(0,L.jsx)(y.g,{label:"Description",className:(0,t.cx)(s&&a.marginless,a.description),children:(0,L.jsx)(B.K,Object.assign({id:W("description",n)},r("description"),{readOnly:s}))})]})}const z=e=>{let{onSubmit:r,defaultValues:s}=e;const{handleSubmit:t,control:n,register:a,formState:{errors:i}}=(0,b.cI)({defaultValues:s});return{control:n,handleSubmit:t(r),register:a,errors:i}},A=e=>({panelContainer:t.css`
    position: relative;
    padding: ${e.spacing(1)};
    margin-bottom: ${e.spacing(2)};
  `,linksToContainer:t.css`
    flex-grow: 1;
    /* This is the width of the textarea minus the sum of the label&description fields,
     * so that this element takes exactly the remaining space and the inputs will be
     * nicely aligned with the textarea
    **/
    max-width: ${e.spacing(16)};
    margin-top: ${e.spacing(3)};
    text-align: right;
    padding-right: ${e.spacing(1)};
  `,horizontalGroup:t.css`
    display: flex;
  `}),G=e=>r=>e(r.uid),Z=e=>{let{onClose:r,onCreated:s}=e;const t=(0,g.wW)(A),{create:{execute:n,loading:i,error:l,value:d}}=P();(0,a.useEffect)((()=>{l||i||!d||s()}),[l,i,d,s]);const{control:u,handleSubmit:h,register:p,errors:x}=z({onSubmit:n});return(0,L.jsxs)(v.l,{className:t.panelContainer,children:[(0,L.jsx)(w.P,{onClick:r}),(0,L.jsxs)("form",{onSubmit:h,children:[(0,L.jsxs)("div",{className:t.horizontalGroup,children:[(0,L.jsx)(b.Qr,{control:u,name:"sourceUID",rules:{required:{value:!0,message:"This field is required."},validate:{writable:e=>{var r;return!(null!==(r=(0,k.ak)().getInstanceSettings(e))&&void 0!==r&&r.readOnly)||"Source can't be a read-only data source."}}},render:e=>{var r;let{field:{onChange:s,value:t}}=e;return(0,L.jsx)(y.g,{label:"Source",htmlFor:"source",invalid:!!x.sourceUID,error:null===(r=x.sourceUID)||void 0===r?void 0:r.message,children:(0,L.jsx)(f.q,{onChange:G(s),noDefault:!0,current:t,inputId:"source",width:32})})}}),(0,L.jsx)("div",{className:t.linksToContainer,children:"Links to"}),(0,L.jsx)(b.Qr,{control:u,name:"targetUID",rules:{required:{value:!0,message:"This field is required."}},render:e=>{var r;let{field:{onChange:s,value:t}}=e;return(0,L.jsx)(y.g,{label:"Target",htmlFor:"target",invalid:!!x.targetUID,error:null===(r=x.targetUID)||void 0===r?void 0:r.message,children:(0,L.jsx)(f.q,{onChange:G(s),noDefault:!0,current:t,inputId:"target",width:32})})}})]}),(0,L.jsx)(V,{register:p}),(0,L.jsx)(o.Lh,{justify:"flex-end",children:(0,L.jsx)(c.zx,{variant:"primary",icon:i?"fa fa-spinner":"plus",type:"submit",disabled:i,children:"Add"})})]})]})},H=e=>{let{onUpdated:r,defaultValues:s,readOnly:t=!1}=e;const{update:{execute:n,loading:i,error:l,value:d}}=P();(0,a.useEffect)((()=>{l||i||!d||r()}),[l,i,d,r]);const{handleSubmit:u,register:g}=z({onSubmit:n,defaultValues:s});return(0,L.jsxs)("form",{onSubmit:t?e=>e.preventDefault():u,children:[(0,L.jsx)("input",Object.assign({type:"hidden"},g("uid"))),(0,L.jsx)("input",Object.assign({type:"hidden"},g("sourceUID"))),(0,L.jsx)(V,{register:g,readOnly:t,correlation:s}),!t&&(0,L.jsx)(o.Lh,{justify:"flex-end",children:(0,L.jsx)(c.zx,{variant:"primary",icon:i?"fa fa-spinner":"save",type:"submit",disabled:i,children:"Save"})})]})};var M=s(28436);const _=e=>{let{onClick:r}=e;return(0,L.jsx)(M.Z,{title:"You haven't defined any correlation yet.",buttonIcon:"gf-glue",onClick:r,buttonTitle:"Add correlation",proTip:"you can also define correlations via datasource provisioning"})};var Q=s(91742),J=s(24085),K=s(64845),Y=s(85965);const X=t.css`
  display: flex;
  align-items: center;
  height: 100%;
`,ee=e=>{let{row:r}=e;return(0,L.jsx)("div",{className:X,children:(0,L.jsx)(Y.h,Object.assign({name:r.isExpanded?"angle-down":"angle-right"},r.getToggleRowExpandedProps({})))})},re="__expander";const se=["key"],te=["key"],ne=["key"],ae=["key"];function ie(e,r){if(null==e)return{};var s,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],r.indexOf(s)>=0||(n[s]=e[s]);return n}const le=e=>({table:t.css`
    border-radius: ${e.shape.borderRadius()};
    border: solid 1px ${e.colors.border.weak};
    background-color: ${e.colors.background.secondary};
    width: 100%;
    td,
    th {
      padding: ${e.spacing(1)};
      min-width: ${e.spacing(3)};
    }
  `,evenRow:t.css`
    background: ${e.colors.background.primary};
  `,shrink:t.css`
    width: 0%;
  `});function oe(e){let{data:r,className:s,columns:i,renderExpandedRow:l,getRowId:o}=e;const c=(0,g.wW)(le),d=(0,a.useMemo)((()=>{const e=function(e){return[{id:re,Cell:ee,disableSortBy:!0,width:0},...e.map((e=>Object.assign({Header:e.header||(()=>null),accessor:e.id||(0,n.uniqueId)(),sortType:e.sortType||"alphanumeric",disableSortBy:!Boolean(e.sortType),width:e.shrink?0:void 0,visible:e.visible},e.cell&&{Cell:e.cell})))]}(i);return e}),[i]),{getTableProps:u,getTableBodyProps:h,headerGroups:p,rows:x,prepareRow:m}=(0,Q.useTable)({columns:d,data:r,autoResetExpanded:!1,autoResetSortBy:!1,getRowId:o,initialState:{hiddenColumns:[!l&&re,...d.filter((e=>{var s,t;return!(null===(s=null===(t=e.visible)||void 0===t?void 0:t.call(e,r))||void 0===s||s)})).map((e=>e.id)).filter(K.f)].filter(K.f)}},Q.useSortBy,Q.useExpanded);return x.forEach(m),(0,L.jsxs)("table",Object.assign({},u(),{className:(0,t.cx)(c.table,s),children:[(0,L.jsx)("thead",{children:p.map((e=>{const r=e.getHeaderGroupProps(),{key:s}=r,n=ie(r,se);return(0,L.jsx)("tr",Object.assign({},n,{children:e.headers.map((e=>{const r=e.getHeaderProps(e.canSort?e.getSortByToggleProps():void 0),{key:s}=r,n=ie(r,te);return(0,L.jsxs)("th",Object.assign({className:(0,t.cx)(0===e.width&&c.shrink)},n,{children:[e.render("Header"),e.isSorted&&(0,L.jsx)(J.J,{name:e.isSortedDesc?"angle-down":"angle-up"})]}),s)}))}),s)}))}),(0,L.jsx)("tbody",Object.assign({},h(),{children:x.map(((e,r)=>{const s=(0,t.cx)(r%2==0&&c.evenRow),n=e.getRowProps(),{key:i}=n,o=ie(n,ne);return(0,L.jsxs)(a.Fragment,{children:[(0,L.jsx)("tr",Object.assign({className:s},o,{children:e.cells.map((e=>{const r=e.getCellProps(),{key:s}=r,t=ie(r,ae);return(0,L.jsx)("td",Object.assign({},t,{children:e.render("Cell")}),s)}))})),e.isExpanded&&l&&(0,L.jsx)("tr",Object.assign({className:s},o,{children:(0,L.jsx)("td",{colSpan:e.cells.length,children:l(e.original)})}))]},i)}))}))]}))}var ce,de,ue;const ge=["execute"],he=["target","source"];function pe(e,r){if(null==e)return{};var s,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],r.indexOf(s)>=0||(n[s]=e[s]);return n}const xe=(e,r,s)=>e.values[s].name.localeCompare(r.values[s].name),me=e=>{let{source:r}=e;return r.readOnly},je=t.css`
  display: flex;
  justify-content: center;
`;function be(){var e;const r=(0,m.q)("correlations"),[s,t]=(0,a.useState)(!1),g=P(),{remove:h,get:{execute:b}}=g,f=pe(g.get,ge);(0,a.useEffect)((()=>{b()}),[]);const v=x.Vt.hasPermission(j.bW.DataSourcesWrite),y=(0,a.useCallback)((()=>{b(),t(!1)}),[b]);(0,a.useEffect)((()=>{h.error||h.loading||!h.value||b()}),[h.error,h.loading,h.value,b]);const w=(0,a.useCallback)((e=>{let{row:{original:{source:{uid:r,readOnly:s},uid:t}}}=e;return!s&&(0,L.jsx)(l.m,{"aria-label":"delete correlation",onConfirm:()=>h.execute({sourceUID:r,uid:t}),closeOnConfirm:!0})}),[h]),k=(0,a.useMemo)((()=>[{cell:we,shrink:!0,visible:e=>e.some(me)},{id:"source",header:"Source",cell:ve,sortType:xe},{id:"target",header:"Target",cell:ve,sortType:xe},{id:"label",header:"Label",sortType:"alphanumeric"},{cell:w,shrink:!0,visible:e=>v&&e.some((0,n.negate)(me))}]),[w,v]),O=(0,a.useMemo)((()=>f.value),[f.value]),C=0===(null==O?void 0:O.length)&&!s&&!f.error;return(0,L.jsx)(p.T,{navModel:r,children:(0,L.jsxs)(p.T.Contents,{children:[(0,L.jsx)("div",{children:(0,L.jsxs)(o.Lh,{justify:"space-between",children:[ce||(ce=(0,L.jsxs)("div",{children:[(0,L.jsx)("h4",{children:"Correlations"}),(0,L.jsx)("p",{children:"Define how data living in different data sources relates to each other."})]})),v&&0!==(null==O?void 0:O.length)&&void 0!==O&&!s&&(0,L.jsx)(c.zx,{icon:"plus",onClick:()=>t(!0),children:"Add new"})]})}),(0,L.jsxs)("div",{children:[!O&&f.loading&&(de||(de=(0,L.jsx)("div",{className:je,children:(0,L.jsx)(d.u,{text:"loading..."})}))),C&&(0,L.jsx)(_,{onClick:()=>t(!0)}),f.error&&(0,L.jsx)(u.b,{severity:"error",title:"Error fetching correlation data",topSpacing:2,children:(0,i.kW)(f.error)&&(null===(e=f.error.data)||void 0===e?void 0:e.message)||"An unknown error occurred while fetching correlation data. Please try again."}),s&&(0,L.jsx)(Z,{onClose:()=>t(!1),onCreated:y}),O&&O.length>=1&&(0,L.jsx)(oe,{renderExpandedRow:e=>{let{source:r}=e,s=pe(e,he);return(0,L.jsx)(H,{defaultValues:Object.assign({sourceUID:r.uid},s),onUpdated:b,readOnly:me({source:r})||!v})},columns:k,data:O,getRowId:e=>`${e.source.uid}-${e.uid}`})]})]})})}const fe=e=>({root:t.css`
    display: flex;
    align-items: center;
  `,dsLogo:t.css`
    margin-right: ${e.spacing()};
    height: 16px;
    width: 16px;
  `}),ve=(0,a.memo)((function(e){let{cell:{value:r}}=e;const s=(0,g.wW)(fe);return(0,L.jsxs)("span",{className:s.root,children:[(0,L.jsx)("img",{src:r.meta.info.logos.small,className:s.dsLogo}),r.name]})}),((e,r)=>{let{cell:{value:s}}=e,{cell:{value:t}}=r;return s.type===t.type&&s.name===t.name})),ye=t.css`
  white-space: nowrap;
`,we=(0,a.memo)((function(e){return Object.assign({},e).row.original.source.readOnly?ue||(ue=(0,L.jsx)(h.C,{text:"Read only",color:"purple",className:ye})):null}),((e,r)=>e.row.original.source.readOnly===r.row.original.source.readOnly))}}]);
//# sourceMappingURL=CorrelationsPage.48a045903d5b574b6380.js.map