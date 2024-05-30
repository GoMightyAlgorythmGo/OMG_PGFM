"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3675,7641],{83331:(e,s,t)=>{t.r(s),t.d(s,{ServerStats:()=>$});var i=t(27549),a=t(68404),n=t(48147),r=t(9617),l=t(40920),c=t(65613),o=t(47570),d=t(61959),h=t(56008),x=t(11979),p=t(93016),g=t(6932),u=t(59385),j=t(38465),m=t(45916);const v=()=>{var e;const s=f((0,r.l4)()),[t,i]=(0,a.useState)(!1),[c,o]=(0,a.useState)({mode:"thumbs",theme:n.v.theme2.isLight?"light":"dark"}),d=()=>i(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(u.u,{title:"Start crawler",isOpen:t,onDismiss:d,children:[(0,m.jsx)("div",{className:s.wrap,children:(0,m.jsx)(j.p,{height:200,value:null!==(e=JSON.stringify(c,null,2))&&void 0!==e?e:"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:e=>{o(JSON.parse(e))}})}),(0,m.jsxs)(u.u.ButtonRow,{children:[(0,m.jsx)(l.zx,{type:"submit",onClick:()=>{(0,g.i)().post("/api/admin/crawler/start",c).then((e=>{console.log("GOT",e),d()}))},children:"Start"}),(0,m.jsx)(l.zx,{variant:"secondary",onClick:d,children:"Cancel"})]})]}),(0,m.jsx)(l.zx,{onClick:()=>i(!0),variant:"primary",children:"Start"})]})},f=e=>({wrap:i.css`
      border: 2px solid #111;
    `});var b,y,w;const S=()=>{const e=N((0,r.l4)()),[s,t]=(0,a.useState)();return(0,a.useEffect)((()=>{const e=(0,p.gj)().getStream({scope:x.z.Grafana,namespace:"broadcast",path:"crawler"}).subscribe({next:e=>{((0,x.RL)(e)||(0,x.se)(e))&&t(e.message)}});return()=>{e.unsubscribe()}}),[]),s?(0,m.jsxs)("div",{className:e.wrap,children:[(0,m.jsx)("pre",{children:JSON.stringify(s,null,2)}),"running"!==s.state&&(w||(w=(0,m.jsx)(v,{}))),"stopped"!==s.state&&(0,m.jsx)(l.zx,{variant:"secondary",onClick:()=>{(0,g.i)().post("/api/admin/crawler/stop")},children:"Stop"})]}):(0,m.jsxs)("div",{className:e.wrap,children:["No status (never run)",b||(b=(0,m.jsx)("br",{})),y||(y=(0,m.jsx)(v,{}))]})},N=e=>({wrap:i.css`
      border: 4px solid red;
    `,running:i.css`
      border: 4px solid green;
    `});var A,k,G,D,z,E;const $=()=>{const[e,s]=(0,a.useState)(null),[t,i]=(0,a.useState)(!1),c=(0,r.wW)(R),x=d.Vt.hasAccess(o.bW.DataSourcesRead,d.Vt.isGrafanaAdmin),p=d.Vt.hasAccess(o.bW.UsersRead,d.Vt.isGrafanaAdmin);return(0,a.useEffect)((()=>{d.Vt.hasAccess(o.bW.ActionServerStatsRead,d.Vt.isGrafanaAdmin)&&(i(!0),(async()=>(0,g.i)().get("api/admin/stats").catch((e=>(console.error(e),null))))().then((e=>{s(e),i(!1)})))}),[]),d.Vt.hasAccess(o.bW.ActionServerStatsRead,d.Vt.isGrafanaAdmin)?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:c.title,children:"Instance statistics"}),t?(0,m.jsx)("div",{className:c.loader,children:A||(A=(0,m.jsx)(h.a,{text:"Loading instance stats..."}))}):e?(0,m.jsxs)("div",{className:c.row,children:[(0,m.jsx)(W,{content:[{name:"Dashboards (starred)",value:`${e.dashboards} (${e.stars})`},{name:"Tags",value:e.tags},{name:"Playlists",value:e.playlists},{name:"Snapshots",value:e.snapshots}],footer:k||(k=(0,m.jsx)(l.Qj,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,m.jsxs)("div",{className:c.doubleRow,children:[(0,m.jsx)(W,{content:[{name:"Data sources",value:e.datasources}],footer:x&&(G||(G=(0,m.jsx)(l.Qj,{href:"/datasources",variant:"secondary",children:"Manage data sources"})))}),(0,m.jsx)(W,{content:[{name:"Alerts",value:e.alerts}],footer:D||(D=(0,m.jsx)(l.Qj,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,m.jsx)(W,{content:[{name:"Organisations",value:e.orgs},{name:"Users total",value:e.users},{name:"Active users in last 30 days",value:e.activeUsers},{name:"Active sessions",value:e.activeSessions}],footer:p&&(z||(z=(0,m.jsx)(l.Qj,{href:"/admin/users",variant:"secondary",children:"Manage users"})))})]}):(0,m.jsx)("p",{className:c.notFound,children:"No stats found."}),n.v.featureToggles.dashboardPreviews&&n.v.featureToggles.dashboardPreviewsAdmin&&(E||(E=(0,m.jsx)(S,{})))]}):null},R=e=>({title:i.css`
      margin-bottom: ${e.spacing(4)};
    `,row:i.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${e.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:i.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${e.spacing(2)};
      }
    `,loader:i.css`
      height: 290px;
    `,notFound:i.css`
      font-size: ${e.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),W=e=>{let{content:s,footer:t}=e;const i=(0,r.wW)(C);return(0,m.jsx)(c._,{className:i.container,disableHover:!0,children:(0,m.jsxs)("div",{className:i.inner,children:[(0,m.jsx)("div",{className:i.content,children:s.map((e=>(0,m.jsxs)("div",{className:i.row,children:[(0,m.jsx)("span",{children:e.name}),(0,m.jsx)("span",{children:e.value})]},e.name)))}),t&&(0,m.jsx)("div",{children:t})]})})},C=e=>({container:i.css`
      padding: ${e.spacing(2)};
    `,inner:i.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:i.css`
      flex: 1 0 auto;
    `,row:i.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${e.spacing(2)};
      align-items: center;
    `})},23675:(e,s,t)=>{t.r(s),t.d(s,{UpgradeInfo:()=>R,UpgradePage:()=>E,default:()=>V});var i=t(27549),a=(t(68404),t(1485)),n=t(9617),r=t(40920),l=t(90894),c=t(8674),o=t(40882),d=t(45916);const h={fontWeight:500,fontSize:"26px",lineHeight:"123%"},x=(0,o.B)((e=>{const s=e.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",t=e.isDark?e.palette.dark9:e.palette.gray6;return{container:i.css`
      padding: 36px 79px;
      background: ${e.colors.panelBg};
    `,footer:i.css`
      text-align: center;
      padding: 16px;
      background: ${t};
    `,header:i.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${s}') right;
    `}}));function p(e){let{header:s,editionNotice:t,subheader:i,children:a}=e;const r=(0,n.Fg)(),l=x(r);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:l.header,children:[(0,d.jsx)("h2",{style:h,children:s}),i&&(0,d.jsx)("h3",{children:i}),(0,d.jsx)(g,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"},children:(0,d.jsx)("img",{src:"public/img/grafana_icon.svg",alt:"Grafana",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}})})]}),(0,d.jsx)("div",{className:l.container,children:a}),t&&(0,d.jsx)("div",{className:l.footer,children:t})]})}const g=e=>{let{size:s,style:t,children:i}=e;return(0,d.jsx)("div",{style:Object.assign({width:s,height:s,position:"absolute",bottom:0,right:0,borderRadius:"50%"},t),children:i})};var u,j,m,v,f,b,y,w,S,N,A,k,G,D,z=t(83331);function E(e){let{navModel:s}=e;return(0,d.jsx)(l.T,{navModel:s,children:u||(u=(0,d.jsxs)(l.T.Contents,{children:[(0,d.jsx)(z.ServerStats,{}),(0,d.jsx)(R,{editionNotice:"You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."})]}))})}const $={fontWeight:500,fontSize:"26px",lineHeight:"123%"},R=e=>{let{editionNotice:s}=e;const t=(0,n.wW)(W);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:t.title,children:"Enterprise license"}),(0,d.jsx)(p,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:s,children:(0,d.jsxs)("div",{className:t.column,children:[j||(j=(0,d.jsx)(L,{})),m||(m=(0,d.jsx)(P,{}))]})})]})},W=e=>({column:i.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,title:i.css`
      margin: ${e.spacing(4)} 0;
    `}),C=()=>(0,d.jsxs)("div",{style:{marginTop:"40px",marginBottom:"30px"},children:[v||(v=(0,d.jsx)("h2",{style:$,children:"Get Grafana Enterprise"})),f||(f=(0,d.jsx)(O,{})),(0,d.jsx)("p",{style:{paddingTop:"12px"},children:"You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends."})]}),O=()=>b||(b=(0,d.jsx)(r.Qj,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",children:"Contact us and get a free trial"})),P=()=>(0,d.jsxs)("div",{children:[y||(y=(0,d.jsx)("h4",{children:"At your service"})),w||(w=(0,d.jsxs)(T,{children:[(0,d.jsx)(F,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),(0,d.jsx)(F,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),(0,d.jsxs)(F,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg",children:["24 x 7 x 365 support via",(0,d.jsxs)(T,{nested:!0,children:[(0,d.jsx)(F,{title:"Email"}),(0,d.jsx)(F,{title:"Private Slack channel"}),(0,d.jsx)(F,{title:"Phone"})]})]}),(0,d.jsx)(F,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg",children:"in the upgrade process"})]})),(0,d.jsxs)("div",{style:{marginTop:"20px"},children:[S||(S=(0,d.jsx)("strong",{children:"Also included:"})),N||(N=(0,d.jsx)("br",{})),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."]}),A||(A=(0,d.jsx)(C,{}))]}),L=()=>(0,d.jsxs)("div",{style:{paddingRight:"11px"},children:[k||(k=(0,d.jsx)("h4",{children:"Enhanced functionality"})),G||(G=(0,d.jsx)(M,{}))]}),M=()=>D||(D=(0,d.jsxs)(T,{children:[(0,d.jsx)(F,{title:"Data source permissions"}),(0,d.jsx)(F,{title:"Reporting"}),(0,d.jsx)(F,{title:"SAML authentication"}),(0,d.jsx)(F,{title:"Enhanced LDAP integration"}),(0,d.jsx)(F,{title:"Team Sync",children:"LDAP, GitHub OAuth, Auth Proxy, Okta"}),(0,d.jsx)(F,{title:"White labeling"}),(0,d.jsx)(F,{title:"Auditing"}),(0,d.jsx)(F,{title:"Settings updates at runtime"}),(0,d.jsx)(F,{title:"Grafana usage insights",children:(0,d.jsxs)(T,{nested:!0,children:[(0,d.jsx)(F,{title:"Sort dashboards by popularity in search"}),(0,d.jsx)(F,{title:"Find unused dashboards"}),(0,d.jsx)(F,{title:"Dashboard usage stats drawer"}),(0,d.jsx)(F,{title:"Dashboard presence indicators"})]})}),(0,d.jsx)(F,{title:"Enterprise plugins",children:(0,d.jsxs)(T,{nested:!0,children:[(0,d.jsx)(F,{title:"Oracle"}),(0,d.jsx)(F,{title:"Splunk"}),(0,d.jsx)(F,{title:"Service Now"}),(0,d.jsx)(F,{title:"Dynatrace"}),(0,d.jsx)(F,{title:"New Relic"}),(0,d.jsx)(F,{title:"DataDog"}),(0,d.jsx)(F,{title:"AppDynamics"}),(0,d.jsx)(F,{title:"SAP HANA®"}),(0,d.jsx)(F,{title:"Gitlab"}),(0,d.jsx)(F,{title:"Honeycomb"}),(0,d.jsx)(F,{title:"Jira"}),(0,d.jsx)(F,{title:"MongoDB"}),(0,d.jsx)(F,{title:"Salesforce"}),(0,d.jsx)(F,{title:"Snowflake"}),(0,d.jsx)(F,{title:"Wavefront"})]})})]})),T=e=>{let{children:s,nested:t}=e;const a=i.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${t?0:8}px;
    }
  `;return(0,d.jsx)("div",{className:a,children:s})},F=e=>{let{children:s,title:t,image:a}=e;const n=a||"public/img/licensing/checkmark.svg",r=i.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `,l=i.css`
    font-weight: 500;
    line-height: 1.7;
  `;return(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("img",{src:n,alt:""}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:l,children:t}),s]})]})},V=(0,a.connect)((e=>({navModel:(0,c.h)(e.navIndex,"upgrading")})))(E)},56008:(e,s,t)=>{t.d(s,{a:()=>n});t(68404);var i=t(95967),a=t(45916);const n=e=>{let{text:s="Loading..."}=e;return(0,a.jsx)("div",{className:"page-loader-wrapper",children:(0,a.jsx)(i.u,{text:s})})}}}]);
//# sourceMappingURL=3675.c3a9877e14ba507c42f3.js.map