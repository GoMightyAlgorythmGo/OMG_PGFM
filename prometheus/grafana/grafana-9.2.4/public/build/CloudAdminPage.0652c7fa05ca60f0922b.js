"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5310],{20238:(e,n,s)=>{s.r(n),s.d(n,{default:()=>u});var i=s(27549),t=s(68404),r=s(6932),a=s(9617),c=s(90894),l=s(93970),d=s(45916);function u(){const e=(0,l.q)("live-cloud"),[n,s]=(0,t.useState)([]),[i,u]=(0,t.useState)(),f=(0,a.yK)(o);return(0,t.useEffect)((()=>{(0,r.i)().get("api/live/write-configs").then((e=>{s(e.writeConfigs)})).catch((e=>{e.data&&u(JSON.stringify(e.data,null,2))}))}),[]),(0,d.jsx)(c.T,{navModel:e,children:(0,d.jsxs)(c.T.Contents,{children:[i&&(0,d.jsx)("pre",{children:i}),!n&&(0,d.jsx)(d.Fragment,{children:"Loading cloud definitions"}),n&&n.map((e=>(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:e.uid}),(0,d.jsx)("pre",{className:f.row,children:JSON.stringify(e.settings,null,2)})]},e.uid)))]})})}const o=e=>({row:i.css`
      cursor: pointer;
    `})}}]);
//# sourceMappingURL=CloudAdminPage.0652c7fa05ca60f0922b.js.map