"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8808],{71585:(e,t,a)=>{a.d(t,{p:()=>z});var r=a(27549),s=a(68404),n=a(48147),o=a(9617),i=a(24085),l=a(35011),d=a(80672),c=a(87092),u=a(5937),h=a(59385),p=a(40920),m=a(34751),b=a(74669),g=a(23078),x=a(14066);const f={loadingState:u.Gu.Loading,dashboardTitles:[]},j=(0,x.PH)("libraryPanels/delete/searchCompleted"),y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return j.match(t)?Object.assign({},e,{dashboardTitles:t.payload.dashboards.map((e=>e.title)),loadingState:u.Gu.Done}):e};var v,w,D,$,N=a(45916);const S=e=>{let{libraryPanel:t,onDismiss:a,onConfirm:r}=e;const n=(0,o.yK)(m.J),[{dashboardTitles:i,loadingState:l},d]=(0,s.useReducer)(y,f),c=(0,s.useMemo)((()=>(0,b.tb)(d)),[d]);(0,s.useEffect)((()=>{c(function(e){return async function(t){const a=await(0,g.E8)(e.uid);t(j({dashboards:a}))}}(t))}),[c,t]);const x=Boolean(i.length),D=l===u.Gu.Done;return(0,N.jsxs)(h.u,{className:n.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:a,isOpen:!0,children:[D?null:v||(v=(0,N.jsx)(P,{})),D?(0,N.jsxs)("div",{children:[x?(0,N.jsx)(I,{dashboardTitles:i}):null,x?null:w||(w=(0,N.jsx)(C,{})),(0,N.jsxs)(h.u.ButtonRow,{children:[(0,N.jsx)(p.zx,{variant:"secondary",onClick:a,fill:"outline",children:"Cancel"}),(0,N.jsx)(p.zx,{variant:"destructive",onClick:r,disabled:x,children:"Delete"})]})]}):null]})},P=()=>D||(D=(0,N.jsx)("span",{children:"Loading library panel..."})),C=()=>{const e=(0,o.yK)(m.J);return(0,N.jsx)("div",{className:e.modalText,children:"Do you want to delete this panel?"})},I=e=>{let{dashboardTitles:t}=e;const a=(0,o.yK)(m.J),r=1===t.length?"dashboard.":"dashboards.",s=`${t.length} ${r}`;return 0===t.length?null:(0,N.jsxs)("div",{children:[(0,N.jsxs)("p",{className:a.textInfo,children:["This library panel can not be deleted because it is connected to ",(0,N.jsx)("strong",{children:s})," Remove the library panel from the dashboards listed below and retry."]}),(0,N.jsxs)("table",{className:a.myTable,children:[$||($=(0,N.jsx)("thead",{children:(0,N.jsx)("tr",{children:(0,N.jsx)("th",{children:"Dashboard name"})})})),(0,N.jsx)("tbody",{children:t.map(((e,t)=>(0,N.jsx)("tr",{children:(0,N.jsx)("td",{children:e})},`dash-title-${t}`)))})]})]})};var O,k;const z=e=>{var t;let{libraryPanel:a,onClick:r,onDelete:o,showSecondaryActions:i}=e;const[l,u]=(0,s.useState)(!1),h=null!==(t=n.v.panels[a.model.type])&&void 0!==t?t:(0,d.X)(a.model.type).meta;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(c.X,{isCurrent:!1,title:a.name,description:a.description,plugin:h,onClick:()=>null==r?void 0:r(a),onDelete:i?()=>u(!0):void 0,children:(0,N.jsx)(U,{libraryPanel:a})}),l&&(0,N.jsx)(S,{libraryPanel:a,onConfirm:()=>{null==o||o(a),u(!1)},onDismiss:()=>u(!1)})]})};function U(e){let{libraryPanel:t}=e;const a=(0,o.wW)(F);return t.meta.folderUid||t.meta.folderName?t.meta.folderUid?(0,N.jsx)("span",{className:a.metaContainer,children:(0,N.jsxs)(l.r,{href:`/dashboards/f/${t.meta.folderUid}`,children:[k||(k=(0,N.jsx)(i.J,{name:"folder-upload",size:"sm"})),(0,N.jsx)("span",{children:t.meta.folderName})]})}):(0,N.jsxs)("span",{className:a.metaContainer,children:[O||(O=(0,N.jsx)(i.J,{name:"folder",size:"sm"})),(0,N.jsx)("span",{children:t.meta.folderName})]}):null}function F(e){return{metaContainer:r.css`
      display: flex;
      align-items: center;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      padding-top: ${e.spacing(.5)};

      svg {
        margin-right: ${e.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}},74669:(e,t,a)=>{a.d(t,{UO:()=>x,Xu:()=>g,tb:()=>f});var r=a(4203),s=a(94396),n=a(71808),o=a(3321),i=a(46089),l=a(71114),d=a(14444),c=a(24298),u=a(2027),h=a(48099),p=a(40818),m=a(23078),b=a(4401);function g(e){return function(t){const a=new r.w0,g=(0,s.D)((0,m.Pq)({searchString:e.searchString,perPage:e.perPage,page:e.page,excludeUid:e.currentPanelId,sortDirection:e.sortDirection,typeFilter:e.panelFilter,folderFilter:e.folderFilter})).pipe((0,l.z)((e=>{let{perPage:t,elements:a,page:r,totalCount:s}=e;return(0,n.of)((0,b.zK)({libraryPanels:a,page:r,perPage:t,totalCount:s}))})),(0,d.K)((t=>(console.error(t),(0,n.of)((0,b.zK)(Object.assign({},b.p$,{page:e.page,perPage:e.perPage})))))),(0,c.x)((()=>a.unsubscribe())),(0,u.B)());a.add((0,o.T)((0,i.H)(50).pipe((0,h.h)((0,b.xU)()),(0,p.R)(g)),g).subscribe(t))}}function x(e,t){return async function(a){try{await(0,m.UO)(e),g(t)(a)}catch(e){console.error(e)}}}function f(e){return function(t){return t instanceof Function?t(e):e(t)}}},4401:(e,t,a)=>{a.d(t,{_p:()=>d,oO:()=>l,p$:()=>n,xU:()=>o,zK:()=>i});var r=a(14066),s=a(5937);const n={loadingState:s.Gu.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},o=(0,r.PH)("libraryPanels/view/initSearch"),i=(0,r.PH)("libraryPanels/view/searchCompleted"),l=(0,r.PH)("libraryPanels/view/changePage"),d=(e,t)=>{if(o.match(t))return Object.assign({},e,{loadingState:s.Gu.Loading});if(i.match(t)){const{libraryPanels:a,page:r,perPage:n,totalCount:o}=t.payload,i=Math.ceil(o/n);return Object.assign({},e,{libraryPanels:a,perPage:n,totalCount:o,loadingState:s.Gu.Done,numberOfPages:i,page:r>i?r-1:r})}return l.match(t)?Object.assign({},e,{page:t.payload.page}):e}},34751:(e,t,a)=>{a.d(t,{J:()=>s});var r=a(27549);function s(e){return{myTable:r.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${e.border.radius.sm};
      border: 1px solid ${e.colors.bg3};
      background: ${e.colors.bg1};
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.md};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${e.typography.size.sm};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${e.spacing.xl};
      }

      tbody > tr:nth-child(odd) {
        background: ${e.colors.bg2};
      }
    `,noteTextbox:r.css`
      margin-bottom: ${e.spacing.xl};
    `,textInfo:r.css`
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.sm};
    `,dashboardSearch:r.css`
      margin-top: ${e.spacing.md};
    `,modal:r.css`
      width: 500px;
    `,modalText:r.css`
      font-size: ${e.typography.heading.h4};
      color: ${e.colors.link};
      margin-bottom: calc(${e.spacing.d} * 2);
      padding-top: ${e.spacing.d};
    `}}},54948:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ce});var r=a(27549),s=a(68404),n=a(1485),o=a(19383),i=a(5937),l=a(68694),d=a(21295),c=a(58587),u=a(61692),h=a(84719),p=a(1652),m=a(40920),b=a(63639),g=a(25049),x=a(98134),f=a(9617),j=a(40882),y=a(5831),v=a(90894),w=a(45193),D=a(27494),$=a(98712),N=a(17518),S=a(85189),P=a(77239),C=a(63672),I=a(13924),O=a(65586),k=a(95513),z=a(6932),U=a(42235);const F=e=>{let t;try{t=JSON.parse(e)}catch(e){return"Not valid JSON"}if(t&&t.hasOwnProperty("tags")){if(!Array.isArray(t.tags))return"tags expected array";if(t.tags.some((e=>"string"!=typeof e)))return"tags expected array of strings"}return!0},T=e=>{const t=/(^\d+$)|dashboards\/(\d+)/.exec(e);return!(!t||!t[1]&&!t[2])||"Could not find a valid Grafana.com ID"},J=e=>(0,z.i)().get(`/api/dashboards/uid/${e}`).then((e=>`Dashboard named '${null==e?void 0:e.dashboard.title}' in folder '${null==e?void 0:e.meta.folderTitle}' has the same UID`)).catch((e=>(e.isHandled=!0,!0)));var G=a(71585),R=a(45916);function q(e){let{inputs:t,label:a,description:r,folderName:s}=e;const n=(0,f.wW)(L);return Boolean(null==t?void 0:t.length)?(0,R.jsx)("div",{className:n.spacer,children:(0,R.jsx)(h.g,{label:a,description:r,children:(0,R.jsx)(R.Fragment,{children:t.map(((e,t)=>{const a=`elements[${t}]`,r=e.state===P.KQ.New?Object.assign({},e.model,{meta:Object.assign({},e.model.meta,{folderName:null!=s?s:"General"})}):Object.assign({},e.model);return(0,R.jsx)("div",{className:n.item,children:(0,R.jsx)(G.p,{libraryPanel:r,onClick:()=>{}})},a)}))})})}):null}function L(e){return{spacer:r.css`
      margin-bottom: ${e.spacing(2)};
    `,item:r.css`
      margin-bottom: ${e.spacing(1)};
    `}}const B=["ref"],A=["ref"];var V;function E(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}const _=e=>{var t,a,r,n;let{register:o,errors:i,control:d,getValues:c,uidReset:u,inputs:b,initialFolderId:x,onUidReset:f,onCancel:j,onSubmit:y,watch:v}=e;const[w,D]=(0,s.useState)(!1),$=v("dataSources"),S=v("folder");(0,s.useEffect)((()=>{w&&(i.title||i.uid)&&y(c(),{})}),[i,c,w,y]);const z=null!==(t=null==b||null===(a=b.libraryPanels)||void 0===a?void 0:a.filter((e=>e.state===P.KQ.New)))&&void 0!==t?t:[],F=null!==(r=null==b||null===(n=b.libraryPanels)||void 0===n?void 0:n.filter((e=>e.state===P.KQ.Exists)))&&void 0!==r?r:[];return(0,R.jsxs)(R.Fragment,{children:[V||(V=(0,R.jsx)(N.D,{children:"Options"})),(0,R.jsx)(h.g,{label:"Name",invalid:!!i.title,error:i.title&&i.title.message,children:(0,R.jsx)(p.I,Object.assign({},o("title",{required:"Name is required",validate:async e=>{return await(t=e,a=c().folder.id,U.t.validateNewDashboardName(a,t).then((()=>!0)).catch((e=>{if("EXISTING"===e.type)return e.message})));var t,a}}),{type:"text","data-testid":l.wl.components.ImportDashboardForm.name}))}),(0,R.jsx)(h.g,{label:"Folder",children:(0,R.jsx)(O.g,{render:e=>{let{}=e,t=E(e.field,B);return(0,R.jsx)(k.Es,Object.assign({},t,{enableCreateNew:!0,initialFolderId:x}))},name:"folder",control:d})}),(0,R.jsx)(h.g,{label:"Unique identifier (UID)",description:"The unique identifier (UID) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The UID allows having consistent URLs for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard.",invalid:!!i.uid,error:i.uid&&i.uid.message,children:(0,R.jsx)(R.Fragment,{children:u?(0,R.jsx)(p.I,Object.assign({},o("uid",{required:!0,validate:async e=>await J(e)}))):(0,R.jsx)(p.I,Object.assign({disabled:!0},o("uid",{validate:async e=>await J(e)}),{addonAfter:!u&&(0,R.jsx)(m.zx,{onClick:f,children:"Change uid"})}))})}),b.dataSources&&b.dataSources.map(((e,t)=>{if(e.pluginId===I.hr.type)return null;const a=`dataSources[${t}]`,r=null!=$?$:[];return(0,R.jsx)(h.g,{label:e.label,invalid:i.dataSources&&!!i.dataSources[t],error:i.dataSources&&i.dataSources[t]&&"A data source is required",children:(0,R.jsx)(O.g,{name:a,render:a=>{var s;let{}=a,n=E(a.field,A);return(0,R.jsx)(C.q,Object.assign({},n,{noDefault:!0,placeholder:e.info,pluginId:e.pluginId,current:null===(s=r[t])||void 0===s?void 0:s.uid}))},control:d,rules:{required:!0}})},a)})),b.constants&&b.constants.map(((e,t)=>{const a=`constants[${t}]`;return(0,R.jsx)(h.g,{label:e.label,error:i.constants&&i.constants[t]&&`${e.label} needs a value`,invalid:i.constants&&!!i.constants[t],children:(0,R.jsx)(p.I,Object.assign({},o(a,{required:!0}),{defaultValue:e.value}))},a)})),(0,R.jsx)(q,{inputs:z,label:"New library panels",description:"List of new library panels that will get imported.",folderName:S.title}),(0,R.jsx)(q,{inputs:F,label:"Existing library panels",description:"List of existing library panels. These panels are not affected by the import.",folderName:S.title}),(0,R.jsxs)(g.Lh,{children:[(0,R.jsx)(m.zx,{type:"submit","data-testid":l.wl.components.ImportDashboardForm.submit,variant:K(i),onClick:()=>{D(!0)},children:W(i)}),(0,R.jsx)(m.zx,{type:"reset",variant:"secondary",onClick:j,children:"Cancel"})]})]})};function K(e){return e&&(e.title||e.uid)?"destructive":"primary"}function W(e){return e&&(e.title||e.uid)?"Import (Overwrite)":"Import"}var H,M;function X(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Q={clearLoadedDashboard:S.ys,importDashboard:S.$j},Z=(0,n.connect)((e=>{const t=$.E1.getSearchObject();return{dashboard:e.importDashboard.dashboard,meta:e.importDashboard.meta,source:e.importDashboard.source,inputs:e.importDashboard.inputs,folder:t.folderId?{id:Number(t.folderId)}:{id:0}}}),Q);class Y extends s.PureComponent{constructor(){super(...arguments),X(this,"state",{uidReset:!1}),X(this,"onSubmit",(e=>{(0,d.ff)("dashboard_import_imported"),this.props.importDashboard(e)})),X(this,"onCancel",(()=>{this.props.clearLoadedDashboard()})),X(this,"onUidReset",(()=>{this.setState({uidReset:!0})}))}render(){const{dashboard:e,inputs:t,meta:a,source:r,folder:s}=this.props,{uidReset:n}=this.state;return(0,R.jsxs)(R.Fragment,{children:[r===P.G7.Gcom&&(0,R.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,R.jsx)("div",{children:(0,R.jsxs)(N.D,{children:["Importing dashboard from"," ",(0,R.jsx)("a",{href:`https://grafana.com/dashboards/${e.gnetId}`,className:"external-link",target:"_blank",rel:"noreferrer",children:"Grafana.com"})]})}),(0,R.jsx)("table",{className:"filter-table form-inline",children:(0,R.jsxs)("tbody",{children:[(0,R.jsxs)("tr",{children:[H||(H=(0,R.jsx)("td",{children:"Published by"})),(0,R.jsx)("td",{children:a.orgName})]}),(0,R.jsxs)("tr",{children:[M||(M=(0,R.jsx)("td",{children:"Updated on"})),(0,R.jsx)("td",{children:(0,D.dq)(a.updatedAt)})]})]})})]}),(0,R.jsx)(u.l,{onSubmit:this.onSubmit,defaultValues:Object.assign({},e,{constants:[],dataSources:[],elements:[],folder:s}),validateOnMount:!0,validateFieldsOnMount:["title","uid"],validateOn:"onChange",children:e=>{let{register:a,errors:r,control:o,watch:i,getValues:l}=e;return(0,R.jsx)(_,{register:a,errors:r,control:o,getValues:l,uidReset:n,inputs:t,onCancel:this.onCancel,onUidReset:this.onUidReset,onSubmit:this.onSubmit,watch:i,initialFolderId:s.id})}})]})}}const ee=Z(Y);var te,ae,re;function se(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}ee.displayName="ImportDashboardOverview";const ne="dashboard_import_loaded",oe={fetchGcomDashboard:S.q_,importDashboardJson:S.nQ,cleanUpAction:w.e},ie=(0,n.connect)((e=>({loadingState:e.importDashboard.state})),oe);class le extends s.PureComponent{constructor(e){super(e),se(this,"onFileUpload",(e=>{(0,d.ff)(ne,{import_source:"json_uploaded"});const{importDashboardJson:t}=this.props,a=e.currentTarget.files&&e.currentTarget.files.length>0&&e.currentTarget.files[0];if(a){const e=new FileReader,r=()=>e=>{let a;try{a=JSON.parse(e.target.result)}catch(e){return void(e instanceof Error&&y.Z.emit(o.SI.alertError,["Import failed","JSON -> JS Serialization failed: "+e.message]))}t(a)};e.onload=r(),e.readAsText(a)}})),se(this,"getDashboardFromJson",(e=>{(0,d.ff)(ne,{import_source:"json_pasted"}),this.props.importDashboardJson(JSON.parse(e.dashboardJson))})),se(this,"getGcomDashboard",(e=>{let t;(0,d.ff)(ne,{import_source:"gcom"});const a=/(^\d+$)|dashboards\/(\d+)/.exec(e.gcomDashboard);a&&a[1]?t=a[1]:a&&a[2]&&(t=a[2]),t&&this.props.fetchGcomDashboard(t)}));const{gcomDashboardId:t}=this.props.queryParams;t&&this.getGcomDashboard({gcomDashboard:t})}componentWillUnmount(){this.props.cleanUpAction({cleanupAction:e=>e.importDashboard=P.wg})}renderImportForm(){const e=ue(this.props.theme);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",{className:e.option,children:(0,R.jsx)(c.p,{accept:"application/json",onFileUpload:this.onFileUpload,children:"Upload JSON file"})}),(0,R.jsx)("div",{className:e.option,children:(0,R.jsx)(u.l,{onSubmit:this.getGcomDashboard,defaultValues:{gcomDashboard:""},children:e=>{let{register:t,errors:a}=e;return(0,R.jsx)(h.g,{label:"Import via grafana.com",invalid:!!a.gcomDashboard,error:a.gcomDashboard&&a.gcomDashboard.message,children:(0,R.jsx)(p.I,Object.assign({id:"url-input",placeholder:"Grafana.com dashboard URL or ID",type:"text"},t("gcomDashboard",{required:"A Grafana dashboard URL or ID is required",validate:T}),{addonAfter:te||(te=(0,R.jsx)(m.zx,{type:"submit",children:"Load"}))}))})}})}),(0,R.jsx)("div",{className:e.option,children:(0,R.jsx)(u.l,{onSubmit:this.getDashboardFromJson,defaultValues:{dashboardJson:""},children:e=>{let{register:t,errors:a}=e;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h.g,{label:"Import via panel json",invalid:!!a.dashboardJson,error:a.dashboardJson&&a.dashboardJson.message,children:(0,R.jsx)(b.K,Object.assign({},t("dashboardJson",{required:"Need a dashboard JSON model",validate:F}),{"data-testid":l.wl.components.DashboardImportPage.textarea,id:"dashboard-json-textarea",rows:10}))}),(0,R.jsx)(m.zx,{type:"submit","data-testid":l.wl.components.DashboardImportPage.submit,children:"Load"})]})}})})]})}render(){const{loadingState:e}=this.props;return(0,R.jsx)(v.T,{navId:"dashboards/import",children:(0,R.jsxs)(v.T.Contents,{children:[e===i.Gu.Loading&&(ae||(ae=(0,R.jsx)(g.wc,{justify:"center",children:(0,R.jsx)(g.Lh,{justify:"center",children:(0,R.jsx)(x.$,{size:32})})}))),[i.Gu.Error,i.Gu.NotStarted].includes(e)&&this.renderImportForm(),e===i.Gu.Done&&(re||(re=(0,R.jsx)(ee,{})))]})})}}const de=ie((0,f.HE)(le));de.displayName="DashboardImport";const ce=de,ue=(0,j.B)((e=>({option:r.css`
      margin-bottom: ${e.spacing(4)};
    `})))},87092:(e,t,a)=>{a.d(t,{X:()=>h});var r=a(27549),s=(a(68404),a(55261)),n=a(23216),o=a(68694),i=a(9617),l=a(85965),d=a(62599),c=a(30978),u=a(45916);const h=e=>{let{isCurrent:t,title:a,plugin:n,onClick:d,onDelete:c,disabled:h,showBadge:b,description:g,children:x}=e;const f=(0,i.wW)(p),j=h||n.state===s.BV.deprecated,y=(0,r.cx)({[f.item]:!0,[f.itemDisabled]:j,[f.current]:t});return(0,u.jsxs)("div",{className:y,"aria-label":o.wl.components.PluginVisualization.item(n.name),onClick:j?void 0:d,title:t?"Click again to close this section":n.name,children:[(0,u.jsx)("img",{className:(0,r.cx)(f.img,{[f.disabled]:j}),src:n.info.logos.small,alt:""}),(0,u.jsxs)("div",{className:(0,r.cx)(f.itemContent,{[f.disabled]:j}),children:[(0,u.jsx)("div",{className:f.name,children:a}),g?(0,u.jsx)("span",{className:f.description,children:g}):null,x]}),b&&(0,u.jsx)("div",{className:(0,r.cx)(f.badge,{[f.disabled]:j}),children:(0,u.jsx)(m,{plugin:n})}),c&&(0,u.jsx)(l.h,{name:"trash-alt",onClick:e=>{e.stopPropagation(),c()},className:f.deleteButton,"aria-label":"Delete button on panel type card"})]})};h.displayName="PanelTypeCard";const p=e=>({item:r.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      box-shadow: ${e.shadows.z1};
      border: 1px solid ${e.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${e.transitions.create(["background"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,itemContent:r.css`
      overflow: hidden;
      position: relative;
      padding: ${e.spacing(0,1)};
    `,itemDisabled:r.css`
      cursor: default;

      &,
      &:hover {
        background: ${e.colors.action.disabledBackground};
      }
    `,current:r.css`
      label: currentVisualizationItem;
      border: 1px solid ${e.colors.primary.border};
      background: ${e.colors.action.selected};
    `,disabled:r.css`
      opacity: ${e.colors.action.disabledOpacity};
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:r.css`
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightMedium};
      width: 100%;
    `,description:r.css`
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightLight};
      width: 100%;
      max-height: 4.5em;
    `,img:r.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:r.css`
      background: ${e.colors.background.primary};
    `,deleteButton:r.css`
      cursor: pointer;
      margin-left: auto;
    `}),m=e=>{let{plugin:t}=e;return(0,n.x)(t.signature)?(0,u.jsx)(d.o,{status:t.signature}):(0,u.jsx)(c.u,{state:t.state})};m.displayName="PanelPluginBadge"},30978:(e,t,a)=>{a.d(t,{u:()=>o});a(68404);var r=a(55261),s=a(87885),n=a(45916);const o=e=>{const t=function(e){switch(e){case r.BV.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case r.BV.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case r.BV.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return t?(0,n.jsx)(s.C,{color:t.color,title:t.tooltip,text:t.text,icon:t.icon}):null}}}]);
//# sourceMappingURL=DashboardImport.fad12cf0c3dc57672bf8.js.map