"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5295],{17821:(e,s,t)=>{t.r(s),t.d(s,{SnapshotListPage:()=>y,default:()=>m});var n,a,r,i=t(68404),l=t(90894),d=t(25981),c=t(6932),h=t(98712),o=t(40920),x=t(95378),j=t(45916);const u=()=>{const[e,s]=(0,i.useState)([]),[t,l]=(0,i.useState)(),u=h.E1.getLocation().pathname,p=window.location.href,y=p.substring(0,p.indexOf(u));(0,d.Z)((async()=>{const e=await(0,c.i)().get("/api/dashboard/snapshots").then((e=>e.map((e=>Object.assign({},e,{url:`/dashboard/snapshot/${e.key}`})))));s(e)}),[s]);const m=(0,i.useCallback)((async t=>{const n=e.filter((e=>e.key!==t.key));s(n),await(0,c.i)().delete(`/api/snapshots/${t.key}`).catch((()=>{s(e)}))}),[e]);return(0,j.jsxs)("div",{children:[(0,j.jsxs)("table",{className:"filter-table",children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[n||(n=(0,j.jsx)("th",{children:(0,j.jsx)("strong",{children:"Name"})})),a||(a=(0,j.jsx)("th",{children:(0,j.jsx)("strong",{children:"Snapshot url"})})),(0,j.jsx)("th",{style:{width:"70px"}}),(0,j.jsx)("th",{style:{width:"30px"}}),(0,j.jsx)("th",{style:{width:"25px"}})]})}),(0,j.jsx)("tbody",{children:e.map((e=>{const s=e.externalUrl||e.url,t=e.externalUrl||`${y}${e.url}`;return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:(0,j.jsx)("a",{href:s,children:e.name})}),(0,j.jsx)("td",{children:(0,j.jsx)("a",{href:s,children:t})}),(0,j.jsx)("td",{children:e.external&&(r||(r=(0,j.jsx)("span",{className:"query-keyword",children:"External"})))}),(0,j.jsx)("td",{className:"text-center",children:(0,j.jsx)(o.Qj,{href:s,variant:"secondary",size:"sm",icon:"eye",children:"View"})}),(0,j.jsx)("td",{className:"text-right",children:(0,j.jsx)(o.zx,{variant:"destructive",size:"sm",icon:"times",onClick:()=>l(e)})})]},e.key)}))})]}),(0,j.jsx)(x.s,{isOpen:!!t,icon:"trash-alt",title:"Delete",body:`Are you sure you want to delete '${null==t?void 0:t.name}'?`,confirmText:"Delete",onDismiss:()=>l(void 0),onConfirm:()=>{m(t),l(void 0)}})]})};var p;const y=e=>{let{}=e;return p||(p=(0,j.jsx)(l.T,{navId:"dashboards/snapshots",children:(0,j.jsx)(l.T.Contents,{children:(0,j.jsx)(u,{})})}))},m=y}}]);
//# sourceMappingURL=SnapshotListPage.4c30f62ff7fb35165a00.js.map