"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[919],{90919:(e,t,n)=>{n.d(t,{H:()=>G});var a,r,o=n(68404),s=n(7501),l=n(22584),i=n(47570),c=n(52772),u=n(27549),d=n(68694),h=n(24643),p=n(1652),g=n(72786),f=n(9617),m=n(87885),x=n(45916);function v(e){let{dataSourceName:t,isDefault:n,onDefaultChange:a,onNameChange:r,alertingSupported:o}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b,{enabled:o}),(0,x.jsx)("div",{className:"gf-form-group","aria-label":"Datasource settings page basic settings",children:(0,x.jsxs)("div",{className:"gf-form-inline",children:[(0,x.jsx)("div",{className:"gf-form max-width-30",children:(0,x.jsx)(h._,{label:"Name",tooltip:"The name is used when you select the data source in panels. The default data source is 'preselected in new panels.",grow:!0,children:(0,x.jsx)(p.I,{id:"basic-settings-name",type:"text",value:t,placeholder:"Name",onChange:e=>r(e.currentTarget.value),required:!0,"aria-label":d.wl.pages.DataSource.name})})}),(0,x.jsx)(h._,{label:"Default",labelWidth:8,children:(0,x.jsx)(g.x,{id:"basic-settings-default",value:n,onChange:e=>{a(e.currentTarget.checked)}})})]})})]})}function b(e){let{enabled:t}=e;const n=(0,f.wW)(j);return(0,x.jsx)("div",{className:n.badge,children:t?a||(a=(0,x.jsx)(m.C,{color:"green",icon:"check-circle",text:"Alerting supported"})):r||(r=(0,x.jsx)(m.C,{color:"orange",icon:"exclamation-triangle",text:"Alerting not supported"}))})}const j=e=>({badge:u.css`
    margin-bottom: ${e.spacing(2)};
  `});var S=n(40920),y=n(98163);function C(e){let{canSave:t,canDelete:n,onDelete:a,onSubmit:r,onTest:o,exploreUrl:s}=e;const l=y.Vt.hasPermission(i.bW.DataSourcesExplore);return(0,x.jsxs)("div",{className:"gf-form-button-row",children:[(0,x.jsx)(S.zx,{variant:"secondary",fill:"solid",type:"button",onClick:()=>history.back(),children:"Back"}),(0,x.jsx)(S.Qj,{variant:"secondary",fill:"solid",href:s,disabled:!l,children:"Explore"}),(0,x.jsx)(S.zx,{type:"button",variant:"destructive",disabled:!n,onClick:a,"aria-label":d.wl.pages.DataSource.delete,children:"Delete"}),t&&(0,x.jsx)(S.zx,{type:"submit",variant:"primary",disabled:!t,onClick:e=>r(e),"aria-label":d.wl.pages.DataSource.saveAndTest,children:"Save & test"}),!t&&(0,x.jsx)(S.zx,{variant:"primary",onClick:o,children:"Test"})]})}let D;!function(e){e.OpenSource="Open Source",e.Pro="Pro",e.Enterprise="Enterprise"}(D||(D={}));var w=n(8771),I=n(53772),k=n(78837);function M(e){var t;let{dataSource:n}=e,a="",r="";if(n.readOnly||(null!==(t=n.version)&&void 0!==t?t:0)>2)return null;if(k.vc.buildInfo.edition!==D.OpenSource)return null;switch(n.type){case"prometheus":a="Prometheus",r="Loki";break;case"loki":a="Loki",r="Prometheus";break;default:return null}return(0,x.jsx)(I.G,{storageKey:"datasources.settings.cloudInfoBox.isDismissed",defaultValue:!1,children:(e,t)=>e?null:(0,x.jsxs)(w.b,{title:`Configure your ${a} data source below`,severity:"info",bottomSpacing:4,onRemove:()=>{t(!0)},children:["Or skip the effort and get ",a," (and ",r,") as fully-managed, scalable, and hosted data sources from Grafana Labs with the"," ",(0,x.jsx)("a",{className:"external-link",href:`https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${n.type}-settings`,target:"_blank",rel:"noreferrer",title:"The free plan includes 10k active metrics and 50gb storage.",children:"free-forever Grafana Cloud plan"}),"."]})})}function N(){return(0,x.jsx)(w.b,{"aria-label":d.wl.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source",children:"This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source."})}var P,E;function O(e){let{dataSourceRights:t,onDelete:n}=e;const{readOnly:a,hasDeleteRights:r}=t,o=!a&&r;return(0,x.jsxs)(x.Fragment,{children:[a&&(P||(P=(0,x.jsx)(N,{}))),(0,x.jsxs)("div",{className:"gf-form-button-row",children:[o&&(0,x.jsx)(S.zx,{type:"submit",variant:"destructive",onClick:n,children:"Delete"}),(0,x.jsx)(S.zx,{variant:"secondary",fill:"outline",type:"button",onClick:()=>history.back(),children:"Back"})]})]})}function T(){return E||(E=(0,x.jsx)(w.b,{severity:"info",title:"Missing rights",children:"You are not allowed to modify this data source. Please contact your server admin to update this data source."}))}function B(e){let{plugin:t,pageId:n}=e;if(!t||!t.configPages)return null;const a=t.configPages.find((e=>{let{id:t}=e;return t===n}));return a?(0,x.jsx)(a.body,{plugin:t,query:{}}):(0,x.jsxs)("div",{children:["Page not found: ",a]})}var U=n(82897),R=n(5985);function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class V extends o.PureComponent{constructor(e){super(e),z(this,"element",null),z(this,"component",void 0),z(this,"scopeProps",void 0),z(this,"onModelChanged",(e=>{this.props.onModelChange(e)})),this.scopeProps={ctrl:{datasourceMeta:e.dataSourceMeta,current:(0,U.cloneDeep)(e.dataSource)},onModelChanged:this.onModelChanged},this.onModelChanged=this.onModelChanged.bind(this)}componentDidMount(){const{plugin:e}=this.props;if(this.element&&!e.components.ConfigEditor){const e=(0,R.w)(),t='<plugin-component type="datasource-config-ctrl" />';this.component=e.load(this.element,this.scopeProps,t)}}componentDidUpdate(e){const{plugin:t}=this.props;var n;t.components.ConfigEditor||this.props.dataSource===e.dataSource||(this.scopeProps.ctrl.current=(0,U.cloneDeep)(this.props.dataSource),null===(n=this.component)||void 0===n||n.digest())}componentWillUnmount(){this.component&&this.component.destroy()}render(){const{plugin:e,dataSource:t}=this.props;return e?(0,x.jsx)("div",{ref:e=>this.element=e,children:e.components.ConfigEditor&&o.createElement(e.components.ConfigEditor,{options:t,onOptionsChange:this.onModelChanged})}):null}}var W,A,$,q,F=n(30978);function Y(e){let{state:t}=e;return(0,x.jsxs)("div",{className:"gf-form",children:[W||(W=(0,x.jsx)("label",{className:"gf-form-label width-10",children:"Plugin state"})),(0,x.jsx)("label",{className:"gf-form-label gf-form-label--transparent",children:(0,x.jsx)(F.u,{state:t})})]})}function _(e){var t,n;let{testingStatus:a}=e;const r="error"===(null==a?void 0:a.status),o=null==a?void 0:a.message,s=null==a||null===(t=a.details)||void 0===t?void 0:t.message,l=null==a||null===(n=a.details)||void 0===n?void 0:n.verboseMessage;return o?(0,x.jsx)("div",{className:"gf-form-group p-t-2",children:(0,x.jsx)(w.b,{severity:r?"error":"success",title:o,"aria-label":d.wl.pages.DataSource.alert,children:(null==a?void 0:a.details)&&(0,x.jsxs)(x.Fragment,{children:[s,l?(0,x.jsx)("details",{style:{whiteSpace:"pre-wrap"},children:l}):null]})})}):null}function G(e){let{uid:t,pageId:n}=e;(0,c.E)(t);const a=(0,i.I0)(),r=(0,c.wl)(t),o=(0,c.Qs)(r.type),s=(0,c._l)(),l=(0,c.YY)(t),u=(0,c.IA)(t),d=(0,c.q6)(),h=(0,c.hw)(t),p=(0,c.qj)();return(0,x.jsx)(H,{pageId:n,dataSource:r,dataSourceMeta:o,dataSourceSettings:s,dataSourceRights:l,exploreUrl:u,onDelete:d,onDefaultChange:e=>a((0,c.yr)(e)),onNameChange:e=>a((0,c.BX)(e)),onOptionsChange:e=>a((0,c.rl)(e)),onTest:h,onUpdate:p})}function H(e){var t,n,a;let{pageId:r,dataSource:o,dataSourceMeta:i,dataSourceSettings:c,dataSourceRights:u,exploreUrl:d,onDelete:h,onDefaultChange:p,onNameChange:g,onOptionsChange:f,onTest:m,onUpdate:b}=e;const{plugin:j,loadError:S,testingStatus:y,loading:D}=c,{readOnly:w,hasWriteRights:I,hasDeleteRights:k}=u,P=o.id>0,E=null===(t=(0,s.F)())||void 0===t?void 0:t.getInstanceSettings(o.uid),U=Boolean(null!==(n=null==E||null===(a=E.meta)||void 0===a?void 0:a.alerting)&&void 0!==n&&n),R="alertmanager"===(null==E?void 0:E.type),z=U||R,W=async e=>{e.preventDefault(),await b(Object.assign({},o)),m()};return S?(0,x.jsx)(O,{dataSourceRights:u,onDelete:h}):D?A||(A=(0,x.jsx)(l.Z,{})):P?r?(0,x.jsx)(B,{pageId:r,plugin:j}):(0,x.jsxs)("form",{onSubmit:W,children:[!I&&($||($=(0,x.jsx)(T,{}))),w&&(q||(q=(0,x.jsx)(N,{}))),i.state&&(0,x.jsx)(Y,{state:i.state}),(0,x.jsx)(M,{dataSource:o}),(0,x.jsx)(v,{dataSourceName:o.name,isDefault:o.isDefault,onDefaultChange:p,onNameChange:g,alertingSupported:z}),j&&(0,x.jsx)(V,{plugin:j,dataSource:o,dataSourceMeta:i,onModelChange:f}),(0,x.jsx)(_,{testingStatus:y}),(0,x.jsx)(C,{onSubmit:W,onDelete:h,onTest:m,exploreUrl:d,canSave:!w&&I,canDelete:!w&&k})]}):null}},52772:(e,t,n)=>{n.d(t,{Vj:()=>s,rl:()=>E.rl,mt:()=>f.mt,r7:()=>f.r7,IO:()=>f.IO,I5:()=>f.I5,BX:()=>E.BX,Ht:()=>E.Ht,zT:()=>E.zT,yr:()=>E.yr,nH:()=>S,wl:()=>D,IA:()=>w,Qs:()=>I,YY:()=>N,_l:()=>k,MF:()=>M,d7:()=>P,q6:()=>C,E:()=>m,wi:()=>b,OU:()=>j,zJ:()=>v,hw:()=>x,qj:()=>y});var a=n(94933),r=n(68404),o=n(78507);const s=(0,r.createContext)(o.n);var l=n(87982),i=n(45193),c=n(5831),u=n(98163),d=n(8674),h=n(47570),p=n(21169),g=n(7947),f=n(77197);const m=e=>{const t=(0,h.I0)();(0,r.useEffect)((()=>(t((0,a.M9)(e)),function(){t((0,i.e)({cleanupAction:e=>e.dataSourceSettings}))})),[e,t])},x=e=>{const t=(0,h.I0)();return()=>t((0,a.kY)(e))},v=()=>{const e=(0,h.I0)();(0,r.useEffect)((()=>{e((0,a.bZ)())}),[e])},b=e=>{const t=(0,h.I0)();(0,r.useEffect)((()=>{t((0,a.gv)(e))}),[t,e])},j=()=>{const e=(0,h.I0)();(0,r.useEffect)((()=>{e((0,a.Kj)())}),[e])},S=()=>{const e=(0,h.I0)(),t=P();return n=>{e((0,a.J_)(n,t.Edit))}},y=()=>{const e=(0,h.I0)();return async t=>e((0,a.oe)(t))},C=()=>{const e=(0,h.I0)(),{name:t}=(0,h.v9)((e=>e.dataSources.dataSource));return()=>{c.Z.publish(new p.VJ({title:"Delete",text:`Are you sure you want to delete the "${t}" data source?`,yesText:"Delete",icon:"trash-alt",onConfirm:()=>e((0,a.F5)())}))}},D=e=>(0,h.v9)((t=>(0,f.f6)(t.dataSources,e))),w=e=>{const t=D(e),n=JSON.stringify({datasource:t.name,context:"explore"});return l.Cj.renderUrl("/explore",{left:n})},I=e=>(0,h.v9)((t=>(0,f.G4)(t.dataSources,e))),k=()=>(0,h.v9)((e=>e.dataSourceSettings)),M=(e,t)=>{const n=D(e),{plugin:a,loadError:r,loading:o}=k(),s=(0,h.v9)((e=>e.navIndex)),l=t?`datasource-${t}-${e}`:`datasource-settings-${e}`;if(r){const e={text:r,subTitle:"Data Source Error",icon:"exclamation-triangle"};return{node:e,main:e}}return o||!a?(0,d.h)(s,l,(0,g.xG)("settings")):(0,d.h)(s,l,(0,g.nI)((0,g.B1)(n,a),t||"settings"))},N=e=>{const t=D(e);return{readOnly:!0===t.readOnly,hasWriteRights:u.Vt.hasPermissionInMetadata(h.bW.DataSourcesWrite,t),hasDeleteRights:u.Vt.hasPermissionInMetadata(h.bW.DataSourcesDelete,t)}},P=()=>(0,r.useContext)(s);var E=n(75375)},30978:(e,t,n)=>{n.d(t,{u:()=>s});n(68404);var a=n(55261),r=n(87885),o=n(45916);const s=e=>{const t=function(e){switch(e){case a.BV.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case a.BV.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case a.BV.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return t?(0,o.jsx)(r.C,{color:t.color,title:t.tooltip,text:t.text,icon:t.icon}):null}}}]);
//# sourceMappingURL=919.2ac9a4580daf68a240e1.js.map