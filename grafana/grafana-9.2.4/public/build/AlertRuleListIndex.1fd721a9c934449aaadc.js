"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2461,4286],{10029:(e,r,a)=>{a.r(r),a.d(r,{AlertRuleListUnconnected:()=>L,default:()=>z});var s,n=a(68404),t=a(1485),l=a(98712),i=a(48147),o=a(74819),c=a(61884),d=a(40920),u=a(25049),p=a(5831),g=a(90894),m=a(8674),h=a(21169),x=a(59385),j=a(45916);function f(e){let{onDismiss:r}=e;return(0,j.jsx)(x.u,{title:"Adding an Alert",isOpen:!0,onDismiss:r,onClickBackdrop:r,children:s||(s=(0,j.jsxs)(u.wc,{spacing:"sm",children:[(0,j.jsx)("img",{src:"public/img/alert_howto_new.png",alt:"link to how to alert image"}),(0,j.jsx)("p",{children:"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."}),(0,j.jsx)("p",{children:"Remember to save the dashboard to persist your alert rule changes."})]}))})}var v=a(47846),b=a.n(v),w=a(11340),y=a(24085);const N=e=>{let{rule:r,search:a,onTogglePause:s}=e;const t=`${r.url}?editPanel=${r.panelId}&tab=alert`,l=(0,n.useCallback)((e=>(0,j.jsx)(b(),{highlightClassName:"highlight-search-match",textToHighlight:e,searchWords:[a]},e)),[a]);return(0,j.jsxs)(w.Z,{children:[(0,j.jsx)(w.Z.Heading,{children:l(r.name)}),(0,j.jsx)(w.Z.Figure,{children:(0,j.jsx)(y.J,{size:"xl",name:r.stateIcon,className:`alert-rule-item__icon ${r.stateClass}`})}),(0,j.jsxs)(w.Z.Meta,{children:[(0,j.jsxs)("span",{children:[(0,j.jsxs)("span",{className:`${r.stateClass}`,children:[l(r.stateText)," "]},"text"),"for ",r.stateAge]},"state"),r.info?l(r.info):null]}),(0,j.jsxs)(w.Z.Actions,{children:[(0,j.jsx)(d.zx,{variant:"secondary",icon:"paused"===r.state?"play":"pause",onClick:s,children:"paused"===r.state?"Resume":"Pause"},"play"),(0,j.jsx)(d.Qj,{variant:"secondary",href:t,icon:"cog",children:"Edit alert"},"edit")]})]})};var C,S=a(8771);const R=()=>C||(C=(0,j.jsxs)(S.b,{severity:"warning",title:"Grafana legacy alerting is going away soon",children:[(0,j.jsxs)("p",{children:["You are using Grafana legacy alerting, it has been deprecated and will be removed in the next major version of Grafana.",(0,j.jsx)("br",{}),"We encourage you to upgrade to the new Grafana Alerting experience."]}),(0,j.jsxs)("p",{children:["See"," ",(0,j.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",children:"What’s New with Grafana Alerting"})," ","to learn more about what‘s new or learn"," ",(0,j.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",children:"how to enable the new Grafana Alerting feature"}),"."]})]}));var $=a(9191),_=a(61988);const k=e=>e.searchQuery,A=e=>{const r=new RegExp(e.alertRules.searchQuery,"i");return e.alertRules.items.filter((e=>r.test(e.name)||r.test(e.stateText)||r.test(e.info)))};var F,I,P,E;function O(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}const T={getAlertRulesAsync:$.Au,setSearchQuery:_.ql,togglePauseAlertRule:$.en},G=(0,t.connect)((function(e){return{navModel:(0,m.h)(e.navIndex,"alert-list"),alertRules:A(e),search:k(e.alertRules),isLoading:e.alertRules.isLoading}}),T);class L extends n.PureComponent{constructor(){super(...arguments),O(this,"stateFilters",[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}]),O(this,"onStateFilterChanged",(e=>{l.E1.partial({state:e.value})})),O(this,"onOpenHowTo",(()=>{p.Z.publish(new h.Dn({component:f}))})),O(this,"onSearchQueryChange",(e=>{this.props.setSearchQuery(e)})),O(this,"onTogglePause",(e=>{this.props.togglePauseAlertRule(e.id,{paused:"paused"!==e.state})})),O(this,"alertStateFilterOption",(e=>{let{text:r,value:a}=e;return(0,j.jsx)("option",{value:a,children:r},a)}))}componentDidMount(){this.fetchRules()}componentDidUpdate(e){e.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){var e;return null!==(e=this.props.queryParams.state)&&void 0!==e?e:"all"}render(){const{navModel:e,alertRules:r,search:a,isLoading:s}=this.props;return(0,j.jsx)(g.T,{navModel:e,children:(0,j.jsxs)(g.T.Contents,{isLoading:s,children:[(0,j.jsxs)("div",{className:"page-action-bar",children:[(0,j.jsx)("div",{className:"gf-form gf-form--grow",children:(0,j.jsx)(o.H,{placeholder:"Search alerts",value:a,onChange:this.onSearchQueryChange})}),(0,j.jsxs)("div",{className:"gf-form",children:[F||(F=(0,j.jsx)("label",{className:"gf-form-label",htmlFor:"alert-state-filter",children:"States"})),(0,j.jsx)("div",{className:"width-13",children:(0,j.jsx)(c.Ph,{inputId:"alert-state-filter",options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()})})]}),I||(I=(0,j.jsx)("div",{className:"page-action-bar__spacer"})),i.v.unifiedAlertingEnabled&&(P||(P=(0,j.jsx)(d.Qj,{variant:"primary",href:"alerting/ng/new",children:"Add NG Alert"}))),(0,j.jsx)(d.zx,{variant:"secondary",onClick:this.onOpenHowTo,children:"How to add an alert"})]}),E||(E=(0,j.jsx)(R,{})),(0,j.jsx)(u.wc,{spacing:"none",children:r.map((e=>(0,j.jsx)(N,{rule:e,search:a,onTogglePause:()=>this.onTogglePause(e)},e.id)))})]})})}}const z=G(L)},9191:(e,r,a)=>{a.d(r,{Au:()=>o,C2:()=>d,c1:()=>p,en:()=>c,fA:()=>g,fg:()=>u,tk:()=>m});var s=a(6932),n=a(98712),t=a(36537),l=a(58257),i=a(61988);function o(e){return async r=>{r((0,i.gz)());const a=await(0,s.i)().get("/api/alerts",e);r((0,i.Oc)(a))}}function c(e,r){return async a=>{await(0,s.i)().post(`/api/alerts/${e}/pause`,r);a(o({state:(n.E1.getSearchObject().state||"all").toString()}))}}function d(e){return async r=>{try{await(0,s.i)().post("/api/alert-notifications",e),r((0,t.$l)((0,l.AT)("Notification created"))),n.E1.push("/alerting/notifications")}catch(e){(0,s.kW)(e)&&r((0,t.$l)((0,l.t_)(e.data.error)))}}}function u(e){return async r=>{try{await(0,s.i)().put(`/api/alert-notifications/${e.id}`,e),r((0,t.$l)((0,l.AT)("Notification updated")))}catch(e){(0,s.kW)(e)&&r((0,t.$l)((0,l.t_)(e.data.error)))}}}function p(e){return async(r,a)=>{const n=a().notificationChannel.notificationChannel;await(0,s.i)().post("/api/alert-notifications/test",Object.assign({id:n.id},e))}}function g(){return async e=>{const r=(await(0,s.i)().get("/api/alert-notifiers")).sort(((e,r)=>e.name>r.name?1:-1));e((0,i.T2)(r))}}function m(e){return async r=>{await r(g());const a=await(0,s.i)().get(`/api/alert-notifications/${e}`);r((0,i.K)(a))}}},81356:(e,r,a)=>{a.r(r),a.d(r,{default:()=>Rr});var s,n,t=a(27549),l=a(68404),i=a(70356),o=a(7197),c=a(13677),d=a(87982),u=a(78721),p=a(9617),g=a(40920),m=a(26011),h=a(47570),x=a(40256),j=a(74727),f=a(28436),v=a(69450),b=a(45916);const w=()=>{const{canCreateGrafanaRules:e,canCreateCloudRules:r}=(0,v.B)();return e||r?s||(s=(0,b.jsx)(f.Z,{title:"You haven`t created any alert rules yet",buttonIcon:"bell",buttonLink:"alerting/new",buttonTitle:"New alert rule",proTip:"you can also create alert rules from existing panels and queries.",proTipLink:"https://grafana.com/docs/",proTipLinkTitle:"Learn more",proTipTarget:"_blank"})):n||(n=(0,b.jsx)(j._,{message:"No rules exist yet.",callToActionElement:(0,b.jsx)("div",{})}))};var y=a(64681),N=a.n(y),C=a(53257),S=a(8771),R=a(9442),$=a(33899),_=a(19462),k=a(39357),A=a(86647);function F(){const[e,r]=(0,l.useState)(!1),[a,s]=(0,C.Z)("grafana.unifiedalerting.hideErrors",!1),n=(0,$._)((e=>e.dataSources)),t=(0,$._)((e=>e.promRules)),i=(0,$._)((e=>e.rulerRules)),o=(0,p.wW)(P),c=(0,l.useMemo)((()=>{var e,r;const[a,s,l]=[n,t,i].map((e=>(0,_.Eu)().reduce(((r,a)=>{var s;const n=null===(s=e[a.name])||void 0===s?void 0:s.error;return e[a.name]&&n&&!(0,A.m$)(e[a.name])?[...r,{dataSource:a,error:n}]:r}),[]))),c=null===(e=t[_.GC])||void 0===e?void 0:e.error,d=null===(r=i[_.GC])||void 0===r?void 0:r.error,u=[];return c&&u.push((0,b.jsxs)(b.Fragment,{children:["Failed to load Grafana rules state: ",c.message||"Unknown error."]})),d&&u.push((0,b.jsxs)(b.Fragment,{children:["Failed to load Grafana rules config: ",d.message||"Unknown error."]})),a.forEach((e=>{let{dataSource:r,error:a}=e;u.push((0,b.jsxs)(b.Fragment,{children:["Failed to load the data source configuration for"," ",(0,b.jsx)("a",{href:(0,k.__)(r),className:o.dsLink,children:r.name}),": ",a.message||"Unknown error."]}))})),s.forEach((e=>{let{dataSource:r,error:a}=e;return u.push((0,b.jsxs)(b.Fragment,{children:["Failed to load rules state from"," ",(0,b.jsx)("a",{href:(0,k.__)(r),className:o.dsLink,children:r.name}),": ",a.message||"Unknown error."]}))})),l.forEach((e=>{let{dataSource:r,error:a}=e;return u.push((0,b.jsxs)(b.Fragment,{children:["Failed to load rules config from"," ",(0,b.jsx)("a",{href:(0,k.__)(r),className:o.dsLink,children:r.name}),": ",a.message||"Unknown error."]}))})),u}),[n,t,i,o.dsLink]);return(0,b.jsxs)(b.Fragment,{children:[!!c.length&&a&&(0,b.jsx)(I,{count:c.length,onClick:()=>s((e=>!e))}),!!c.length&&!a&&(0,b.jsxs)(S.b,{"data-testid":"cloud-rulessource-errors",title:"Errors loading rules",severity:"error",onRemove:()=>s(!0),children:[e&&c.map(((e,r)=>(0,b.jsx)("div",{children:e},r))),!e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{children:c[0]}),c.length>=2&&(0,b.jsxs)(g.zx,{className:o.moreButton,fill:"text",icon:"angle-right",size:"sm",onClick:()=>r(!0),children:[c.length-1," more ",N()("error",c.length-1)]})]})]})]})}const I=e=>{let{count:r,onClick:a}=e;const s=(0,p.wW)(P);return(0,b.jsx)("div",{className:s.floatRight,children:(0,b.jsx)(R.u,{content:"Show all errors",placement:"bottom",children:(0,b.jsx)(g.zx,{fill:"text",variant:"destructive",icon:"exclamation-triangle",onClick:a,children:r>1?(0,b.jsxs)(b.Fragment,{children:[r," errors"]}):(0,b.jsx)(b.Fragment,{children:"1 error"})})})})},P=e=>({moreButton:t.css`
    padding: 0;
  `,floatRight:t.css`
    display: flex;
    justify-content: flex-end;
  `,dsLink:t.css`
    font-weight: ${e.typography.fontWeightBold};
  `});var E,O=a(72698),T=a(90588),G=a(53262),L=a(95967),z=a(98134),q=a(12396),W=a(65747),M=a(72965),D=a(37910),B=a(8455),Z=a(25049),H=a(24085),J=a(87885),V=a(95378),U=a(13309),K=a(26980),Q=a(83809),Y=a(91045),X=a(85598),ee=a(3799),re=a(59385),ae=a(61692),se=a(84719),ne=a(1652),te=a(29507),le=a(91470),ie=a(8122),oe=a(78316);function ce(e){var r;const{namespace:a,group:s,onClose:n}=e,t=(0,p.wW)(de),i=(0,h.I0)(),{loading:o,error:c,dispatched:d}=null!==(r=(0,$._)((e=>e.updateLotexNamespaceAndGroup)))&&void 0!==r?r:B.oq,u=(0,l.useMemo)((()=>{var e;return{namespaceName:a.name,groupName:s.name,groupInterval:null!==(e=s.interval)&&void 0!==e?e:""}}),[a,s]);(0,l.useEffect)((()=>{!d||o||c||n(!0)}),[d,o,n,c]),(0,te.x)((e=>e.unifiedAlerting.updateLotexNamespaceAndGroup=B.oq));return(0,b.jsx)(re.u,{className:t.modal,isOpen:!0,title:"Edit namespace or rule group",onDismiss:n,onClickBackdrop:n,children:(0,b.jsx)(ae.l,{defaultValues:u,onSubmit:e=>{i((0,Q.hv)({rulesSourceName:(0,_.EG)(a.rulesSource),groupName:s.name,newGroupName:e.groupName,namespaceName:a.name,newNamespaceName:e.namespaceName,groupInterval:e.groupInterval||void 0}))},children:e=>{var r,a,s;let{register:t,errors:l,formState:{isDirty:i},watch:c}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(se.g,{label:"Namespace",invalid:!!l.namespaceName,error:null===(r=l.namespaceName)||void 0===r?void 0:r.message,children:(0,b.jsx)(ne.I,Object.assign({id:"namespaceName"},t("namespaceName",{required:"Namespace name is required."})))}),(0,b.jsx)(se.g,{label:"Rule group",invalid:!!l.groupName,error:null===(a=l.groupName)||void 0===a?void 0:a.message,children:(0,b.jsx)(ne.I,Object.assign({id:"groupName"},t("groupName",{required:"Rule group name is required."})))}),(0,b.jsx)(se.g,{label:"Rule group evaluation interval",invalid:!!l.groupInterval,error:null===(s=l.groupInterval)||void 0===s?void 0:s.message,children:(0,b.jsx)(ne.I,Object.assign({id:"groupInterval",placeholder:"1m"},t("groupInterval",oe.MD)))}),(0,le.f)(c("groupInterval")).exceedsLimit&&(E||(E=(0,b.jsx)(ie.R,{}))),(0,b.jsxs)(re.u.ButtonRow,{children:[(0,b.jsx)(g.zx,{variant:"secondary",type:"button",disabled:o,onClick:()=>n(!1),fill:"outline",children:"Close"}),(0,b.jsx)(g.zx,{type:"submit",disabled:!i||o,children:o?"Saving...":"Save changes"})]})]})}},JSON.stringify(u))})}const de=()=>({modal:t.css`
    max-width: 560px;
  `});var ue,pe,ge,me,he=a(23019),xe=a.n(he),je=a(82897),fe=a(99464),ve=a(56340),be=a(59940),we=a(69357);const ye=e=>{const{group:r,namespace:a,onClose:s}=e,[n,t]=(0,l.useState)(!1),[i,o]=(0,l.useState)(r.rules),c=(0,p.wW)(Se),d=(0,l.useCallback)((e=>{if(!e.destination)return;if(e.destination.index===e.source.index)return;const s=function(e,r,a){const s=Array.from(e),[n]=s.splice(r,1);return s.splice(a,0,n),s}(i,e.source.index,e.destination.index);o(s);const n=(0,_.EG)(a.rulesSource),l=(0,je.compact)(s.map((e=>e.rulerRule)));t(!0),(0,ve.WI)((0,Q.tg)({namespaceName:a.name,groupName:r.name,rulesSourceName:n,newRules:l})).unwrap().finally((()=>{t(!1)}))}),[r.name,a.name,a.rulesSource,i]),u=i.map((e=>Object.assign({},e,{uid:String((0,be.Om)(e.rulerRule))})));return(0,b.jsx)(re.u,{className:c.modal,isOpen:!0,title:(0,b.jsx)(Ce,{namespace:a,group:r}),onDismiss:s,onClickBackdrop:s,children:(0,b.jsx)(fe.Z5,{onDragEnd:d,children:(0,b.jsx)(fe.bK,{droppableId:"alert-list",mode:"standard",renderClone:(e,r,a)=>(0,b.jsx)(Ne,{provided:e,rule:u[a.source.index],isClone:!0}),children:e=>(0,b.jsxs)("div",Object.assign({ref:e.innerRef,className:xe()(c.listContainer,n&&c.disabled)},e.droppableProps,{children:[u.map(((e,r)=>(0,b.jsx)(fe._l,{draggableId:e.uid,index:r,isDragDisabled:n,children:r=>(0,b.jsx)(Ne,{provided:r,rule:e},e.uid)},e.uid))),e.placeholder]}))})})})},Ne=e=>{let{provided:r,rule:a,isClone:s=!1,isDragging:n=!1}=e;const t=(0,p.wW)(Se);return(0,b.jsxs)("div",Object.assign({className:xe()(t.listItem,s&&"isClone",n&&"isDragging"),ref:r.innerRef},r.draggableProps,r.dragHandleProps,{children:[(0,A.x_)(a.promRule)&&(0,b.jsx)(we.l,{state:a.promRule.state}),(0,A.OP)(a.promRule)&&(ue||(ue=(0,b.jsx)(J.C,{text:"Recording",color:"blue"}))),(0,b.jsx)("div",{className:t.listItemName,children:a.name}),pe||(pe=(0,b.jsx)(H.J,{name:"draggabledots"}))]}))},Ce=e=>{let{namespace:r,group:a}=e;const s=(0,p.wW)(Se);return(0,b.jsxs)("div",{className:s.header,children:[ge||(ge=(0,b.jsx)(H.J,{name:"folder"})),(0,_.jq)(r.rulesSource)&&(0,b.jsx)(R.u,{content:r.rulesSource.name,placement:"top",children:(0,b.jsx)("img",{alt:r.rulesSource.meta.name,className:s.dataSourceIcon,src:r.rulesSource.meta.info.logos.small})}),(0,b.jsx)("span",{children:r.name}),me||(me=(0,b.jsx)(H.J,{name:"angle-right"})),(0,b.jsx)("span",{children:a.name})]})},Se=e=>({modal:t.css`
    max-width: 640px;
    max-height: 80%;
    overflow: hidden;
  `,listItem:t.css`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: ${e.spacing()};

    background: ${e.colors.background.primary};
    color: ${e.colors.text.secondary};

    border-bottom: solid 1px ${e.colors.border.medium};
    padding: ${e.spacing(1)} ${e.spacing(2)};

    &:last-child {
      border-bottom: none;
    }

    &.isClone {
      border: solid 1px ${e.colors.primary.shade};
    }
  `,listContainer:t.css`
    user-select: none;
    border: solid 1px ${e.colors.border.medium};
  `,disabled:t.css`
    opacity: 0.5;
    pointer-events: none;
  `,listItemName:t.css`
    flex: 1;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,header:t.css`
    display: flex;
    align-items: center;

    gap: ${e.spacing(1)};
  `,dataSourceIcon:t.css`
    width: ${e.spacing(2)};
    height: ${e.spacing(2)};
  `});var Re=a(51542);const $e=e=>{let{children:r,status:a}=e;const s=(0,p.wW)(_e);return(0,b.jsx)("span",{className:s[a],children:r||a})},_e=e=>({[Re.x_.Inactive]:t.css`
    color: ${e.colors.success.text};
  `,[Re.x_.Pending]:t.css`
    color: ${e.colors.warning.text};
  `,[Re.x_.Firing]:t.css`
    color: ${e.colors.error.text};
  `,neutral:t.css`
    color: ${e.colors.text.secondary};
  `});var ke,Ae;const Fe={total:0,recording:0,[Re.x_.Firing]:0,[Re.x_.Pending]:0,[Re.x_.Inactive]:0,error:0},Ie=e=>{let{showInactive:r,showRecording:a,group:s,namespaces:n}=e;const t=(0,l.useMemo)((()=>{const e=Object.assign({},Fe),r=r=>{var a,s;r.promRule&&(0,A.x_)(r.promRule)&&(e[r.promRule.state]+=1),"err"!==(null===(a=r.promRule)||void 0===a?void 0:a.health)&&"error"!==(null===(s=r.promRule)||void 0===s?void 0:s.health)||(e.error+=1),(r.promRule&&(0,A.OP)(r.promRule)||r.rulerRule&&(0,A.yF)(r.rulerRule))&&(e.recording+=1),e.total+=1};return s&&s.rules.forEach(r),n&&n.forEach((e=>e.groups.forEach((e=>e.rules.forEach(r))))),e}),[s,n]),i=[];return t[Re.x_.Firing]&&i.push((0,b.jsxs)($e,{status:Re.x_.Firing,children:[t[Re.x_.Firing]," firing"]},"firing")),t.error&&i.push((0,b.jsxs)($e,{status:Re.x_.Firing,children:[t.error," errors"]},"errors")),t[Re.x_.Pending]&&i.push((0,b.jsxs)($e,{status:Re.x_.Pending,children:[t[Re.x_.Pending]," pending"]},"pending")),r&&t[Re.x_.Inactive]&&i.push((0,b.jsxs)($e,{status:"neutral",children:[t[Re.x_.Inactive]," normal"]},"inactive")),a&&t.recording&&i.push((0,b.jsxs)($e,{status:"neutral",children:[t.recording," recording"]},"recording")),(0,b.jsxs)("div",{children:[(0,b.jsxs)("span",{children:[t.total," ",N()("rule",t.total)]}),!!i.length&&(0,b.jsxs)(b.Fragment,{children:[ke||(ke=(0,b.jsx)("span",{children:": "})),i.reduce(((e,r,a)=>e.length?[e,(0,b.jsx)(l.Fragment,{children:Ae||(Ae=(0,b.jsx)("span",{children:", "}))},a),r]:[r]),[])]})]})};var Pe,Ee,Oe,Te,Ge=a(61263);const Le=l.memo((e=>{var r;let{group:a,namespace:s,expandAll:n,viewMode:t}=e;const{rulesSource:i}=s,o=(0,h.I0)(),c=(0,p.wW)(ze),[d,u]=(0,l.useState)(!1),[g,m]=(0,l.useState)(!1),[x,j]=(0,l.useState)(!1),[f,w]=(0,l.useState)(!n),{canEditRules:y}=(0,v.B)();(0,l.useEffect)((()=>{w(!n)}),[n]);const{hasRuler:C,rulerRulesLoaded:S}=(0,K.h)(),$=null===(r=a.rules[0])||void 0===r?void 0:r.rulerRule,F=$&&(0,A.Pc)($)&&$.grafana_alert.namespace_uid||void 0,{folder:I}=(0,U.W)(F),P=C(i)&&S(i)&&!a.rules.find((e=>!!e.rulerRule)),E=(0,A.Jq)(a),G=a.rules.some((e=>(0,A.Pc)(e.rulerRule)&&e.rulerRule.grafana_alert.provenance)),L="list"===t,q="grouped"===t,W=[];if(P)W.push(Pe||(Pe=(0,b.jsxs)(Z.Lh,{children:[(0,b.jsx)(z.$,{}),"deleting"]},"is-deleting")));else if(i===_.GC){if(F){const e=(0,k.HV)(F);null!=I&&I.canSave&&(q&&!G&&(W.push((0,b.jsx)(ee.A,{"aria-label":"edit rule group","data-testid":"edit-group",icon:"pen",tooltip:"edit rule group",onClick:()=>u(!0)},"edit")),W.push((0,b.jsx)(ee.A,{"aria-label":"re-order rules","data-testid":"reorder-group",icon:"exchange-alt",tooltip:"reorder rules",className:c.rotate90,onClick:()=>j(!0)},"reorder"))),L&&W.push((0,b.jsx)(ee.A,{"aria-label":"go to folder",icon:"folder-open",tooltip:"go to folder",to:e,target:"__blank"},"goto"))),null!=I&&I.canAdmin&&L&&W.push((0,b.jsx)(ee.A,{"aria-label":"manage permissions",icon:"lock",tooltip:"manage permissions",to:e+"/permissions",target:"__blank"},"manage-perms"))}}else y(i.name)&&C(i)&&(E||(W.push((0,b.jsx)(ee.A,{"aria-label":"edit rule group","data-testid":"edit-group",icon:"pen",tooltip:"edit rule group",onClick:()=>u(!0)},"edit")),W.push((0,b.jsx)(ee.A,{"aria-label":"re-order rules","data-testid":"reorder-group",icon:"exchange-alt",tooltip:"re-order rules",className:c.rotate90,onClick:()=>j(!0)},"reorder"))),W.push((0,b.jsx)(ee.A,{"aria-label":"delete rule group","data-testid":"delete-group",icon:"trash-alt",tooltip:"delete rule group",onClick:()=>m(!0)},"delete-group")));const M=L?(0,b.jsx)(X.V,{namespace:s.name}):(0,b.jsx)(X.V,{namespace:s.name,group:a.name});return(0,b.jsxs)("div",{className:c.wrapper,"data-testid":"rule-group",children:[(0,b.jsxs)("div",{className:c.header,"data-testid":"rule-group-header",children:[(0,b.jsx)(Y.U,{className:c.collapseToggle,isCollapsed:f,onToggle:w,"data-testid":"group-collapse-toggle"}),(0,b.jsx)(H.J,{name:f?"folder":"folder-open"}),(0,_.jq)(i)&&(0,b.jsx)(R.u,{content:i.name,placement:"top",children:(0,b.jsx)("img",{alt:i.meta.name,className:c.dataSourceIcon,src:i.meta.info.logos.small})}),(0,b.jsxs)("h6",{className:c.heading,children:[E&&(Ee||(Ee=(0,b.jsx)(J.C,{color:"purple",text:"Federated"})))," ",M]}),(0,b.jsx)("div",{className:c.spacer}),(0,b.jsx)("div",{className:c.headerStats,children:(0,b.jsx)(Ie,{showInactive:!1,group:a})}),!!W.length&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:c.actionsSeparator,children:"|"}),(0,b.jsx)("div",{className:c.actionIcons,children:W})]})]}),!f&&(0,b.jsx)(Ge.i,{showSummaryColumn:!0,className:c.rulesTable,showGuidelines:!0,rules:a.rules}),d&&(0,b.jsx)(ce,{group:a,namespace:s,onClose:()=>function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]||(0,O.PN)(T.z.leavingRuleGroupEdit),u(!1)}()}),x&&(0,b.jsx)(ye,{group:a,namespace:s,onClose:()=>j(!1)}),(0,b.jsx)(V.s,{isOpen:g,title:"Delete group",body:(0,b.jsxs)("div",{children:["Deleting this group will permanently remove the group",Oe||(Oe=(0,b.jsx)("br",{})),"and ",a.rules.length," alert ",N()("rule",a.rules.length)," belonging to it.",Te||(Te=(0,b.jsx)("br",{})),"Are you sure you want to delete this group?"]}),onConfirm:()=>{o((0,Q.oE)(s,a)),m(!1)},onDismiss:()=>m(!1),confirmText:"Delete"})]})}));Le.displayName="RulesGroup";const ze=e=>({wrapper:t.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,header:t.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)} 0;
    background-color: ${e.colors.background.secondary};
    flex-wrap: wrap;
  `,headerStats:t.css`
    span {
      vertical-align: middle;
    }

    ${e.breakpoints.down("sm")} {
      order: 2;
      width: 100%;
      padding-left: ${e.spacing(1)};
    }
  `,heading:t.css`
    margin-left: ${e.spacing(1)};
    margin-bottom: 0;
  `,spacer:t.css`
    flex: 1;
  `,collapseToggle:t.css`
    background: none;
    border: none;
    margin-top: -${e.spacing(1)};
    margin-bottom: -${e.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,dataSourceIcon:t.css`
    width: ${e.spacing(2)};
    height: ${e.spacing(2)};
    margin-left: ${e.spacing(2)};
  `,dataSourceOrigin:t.css`
    margin-right: 1em;
    color: ${e.colors.text.disabled};
  `,actionsSeparator:t.css`
    margin: 0 ${e.spacing(2)};
  `,actionIcons:t.css`
    & > * + * {
      margin-left: ${e.spacing(.5)};
    }
  `,rulesTable:t.css`
    margin-top: ${e.spacing(3)};
  `,rotate90:t.css`
    transform: rotate(90deg);
  `});function qe(e){return(0,l.useMemo)((()=>e.flatMap((e=>e.groups.map((r=>({namespace:e,group:r})))))),[e])}var We,Me,De,Be;const Ze=e=>{let{namespaces:r,expandAll:a}=e;const s=(0,p.wW)(He),n=(0,$._)((e=>e.dataSources)),t=(0,$._)((e=>e.promRules)),i=(0,l.useMemo)(_.Eu,[]),o=qe(r),c=(0,l.useMemo)((()=>i.filter((e=>(0,B.op)(t[e.name])||(0,B.op)(n[e.name])))),[t,n,i]),d=i.some((e=>{var r,a,s;return null!==(r=null===(a=t[e.name])||void 0===a||null===(s=a.result)||void 0===s?void 0:s.length)&&void 0!==r&&r})),u=i.length>0,g=c.length>0,m=r.length>0,{numberOfPages:h,onPageChange:x,page:j,pageItems:f}=(0,M.h)(o,1,W.gN);return(0,b.jsxs)("section",{className:s.wrapper,children:[(0,b.jsxs)("div",{className:s.sectionHeader,children:[We||(We=(0,b.jsx)("h5",{children:"Mimir / Cortex / Loki"})),c.length?(0,b.jsx)(L.u,{className:s.loader,text:`Loading rules from ${c.length} ${N()("source",c.length)}`}):Me||(Me=(0,b.jsx)("div",{}))]}),f.map((e=>{let{group:r,namespace:s}=e;return(0,b.jsx)(Le,{group:r,namespace:s,expandAll:a,viewMode:"grouped"},`${(0,_.v_)(s.rulesSource)}-${s.name}-${r.name}`)})),!u&&(De||(De=(0,b.jsx)("p",{children:"There are no Prometheus or Loki data sources configured."}))),u&&!g&&!m&&(Be||(Be=(0,b.jsx)("p",{children:"No rules found."}))),!d&&g&&(0,b.jsx)(z.$,{size:24,className:s.spinner}),(0,b.jsx)(q.t,{className:s.pagination,currentPage:j,numberOfPages:h,onNavigate:x,hideWhenSinglePage:!0})]})},He=e=>({loader:t.css`
    margin-bottom: 0;
  `,sectionHeader:t.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:t.css`
    margin-bottom: ${e.spacing(4)};
  `,spinner:t.css`
    text-align: center;
    padding: ${e.spacing(2)};
  `,pagination:(0,D.Z)(e)});var Je,Ve,Ue,Ke=a(75678);const Qe=e=>{let{namespaces:r,expandAll:a}=e;const s=(0,p.wW)(Ye),[n]=(0,m.K)(),{prom:t,ruler:l}=(0,$._)((e=>({prom:e.promRules[_.GC]||B.oq,ruler:e.rulerRules[_.GC]||B.oq}))),i=t.loading||l.loading,o=!!t.result||!!l.result,c="grouped"===n.view,d=c?r:(0,Ke.Kd)(r),u=qe(d),{numberOfPages:g,onPageChange:h,page:x,pageItems:j}=(0,M.h)(u,1,W.gN);return(0,b.jsxs)("section",{className:s.wrapper,children:[(0,b.jsxs)("div",{className:s.sectionHeader,children:[Je||(Je=(0,b.jsx)("h5",{children:"Grafana"})),i?(0,b.jsx)(L.u,{className:s.loader,text:"Loading..."}):Ve||(Ve=(0,b.jsx)("div",{}))]}),j.map((e=>{let{group:r,namespace:s}=e;return(0,b.jsx)(Le,{group:r,namespace:s,expandAll:a,viewMode:c?"grouped":"list"},`${s.name}-${r.name}`)})),o&&0===(null==d?void 0:d.length)&&(Ue||(Ue=(0,b.jsx)("p",{children:"No rules found."}))),!o&&i&&(0,b.jsx)(z.$,{size:24,className:s.spinner}),(0,b.jsx)(q.t,{className:s.pagination,currentPage:x,numberOfPages:g,onNavigate:h,hideWhenSinglePage:!0})]})},Ye=e=>({loader:t.css`
    margin-bottom: 0;
  `,sectionHeader:t.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:t.css`
    margin-bottom: ${e.spacing(4)};
  `,spinner:t.css`
    text-align: center;
    padding: ${e.spacing(2)};
  `,pagination:(0,D.Z)(e)}),Xe=e=>{let{rules:r,state:a,defaultCollapsed:s=!1}=e;const[n,t]=(0,l.useState)(s),i=(0,p.wW)(er);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("h4",{className:i.header,children:[(0,b.jsx)(Y.U,{className:i.collapseToggle,size:"xxl",isCollapsed:n,onToggle:()=>t(!n)}),(0,A.SS)(a)," (",r.length,")"]}),!n&&(0,b.jsx)(Ge.i,{className:i.rulesTable,rules:r,showGroupColumn:!0})]})},er=e=>({collapseToggle:t.css`
    vertical-align: middle;
  `,header:t.css`
    margin-top: ${e.spacing(2)};
  `,rulesTable:t.css`
    margin-top: ${e.spacing(3)};
  `});var rr,ar,sr,nr,tr,lr=a(68522),ir=a(63672),or=a(4546),cr=a(96380);const dr=[{icon:"list-ul",label:"List",value:"list"},{icon:"folder",label:"Grouped",value:"grouped"},{icon:"heart-rate",label:"State",value:"state"}],ur=[{label:"Alert ",value:Re.pz.Alerting},{label:"Recording ",value:Re.pz.Recording}],pr=e=>({container:t.css`
      display: flex;
      flex-direction: column;
      padding-bottom: ${e.spacing.sm};
      margin-bottom: ${e.spacing.sm};
    `,inputWidth:t.css`
      width: 340px;
      flex-grow: 0;
    `,flexRow:t.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,spaceBetween:t.css`
      justify-content: space-between;
    `,rowChild:t.css`
      margin: 0 ${e.spacing.sm} 0 0;
    `,clearButton:t.css`
      margin-top: ${e.spacing.sm};
    `}),gr=()=>{var e;const[r,a]=(0,m.K)(),[s,n]=(0,l.useState)(Math.floor(100*Math.random())),i=`dataSource-${s}`,o=`queryString-${s}`,{dataSource:c,alertState:d,queryString:u,ruleType:h}=(0,k.lC)(r),x=(0,p.yK)(pr),j=Object.entries(Re.x_).map((e=>{let[r,a]=e;return{label:(0,A.SS)(a),value:a}})),f=(0,je.debounce)((e=>{const r=e.target;a({queryString:r.value||null})}),600),v=rr||(rr=(0,b.jsx)(H.J,{name:"search"}));return(0,b.jsxs)("div",{className:x.container,children:[(0,b.jsx)(se.g,{className:x.inputWidth,label:"Search by data source",children:(0,b.jsx)(ir.q,{alerting:!0,noDefault:!0,placeholder:"All data sources",current:c,onChange:e=>{a({dataSource:e.name})},onClear:()=>{a({dataSource:null})}},i)}),(0,b.jsxs)("div",{className:(0,t.cx)(x.flexRow,x.spaceBetween),children:[(0,b.jsxs)("div",{className:x.flexRow,children:[(0,b.jsx)(se.g,{className:x.rowChild,label:ar||(ar=(0,b.jsx)(or._,{children:(0,b.jsxs)(lr.Stack,{gap:.5,children:[(0,b.jsx)("span",{children:"Search by label"}),(0,b.jsx)(R.u,{content:(0,b.jsxs)("div",{children:["Filter rules and alerts using label querying, ex:",(0,b.jsx)("code",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]}),children:(0,b.jsx)(H.J,{name:"info-circle",size:"sm"})})]})})),children:(0,b.jsx)(ne.I,{className:x.inputWidth,prefix:v,onChange:f,defaultValue:u,placeholder:"Search","data-testid":"search-query-input"},o)}),(0,b.jsxs)("div",{className:x.rowChild,children:[sr||(sr=(0,b.jsx)(or._,{children:"State"})),(0,b.jsx)(cr.S,{options:j,value:d,onChange:e=>{a({alertState:e})}})]}),(0,b.jsxs)("div",{className:x.rowChild,children:[nr||(nr=(0,b.jsx)(or._,{children:"Rule type"})),(0,b.jsx)(cr.S,{options:ur,value:h,onChange:e=>{a({ruleType:e})}})]}),(0,b.jsxs)("div",{className:x.rowChild,children:[tr||(tr=(0,b.jsx)(or._,{children:"View as"})),(0,b.jsx)(cr.S,{options:dr,value:String(null!==(e=r.view)&&void 0!==e?e:dr[0].value),onChange:e=>{a({view:e})}})]})]}),(c||d||u||h)&&(0,b.jsx)("div",{className:x.flexRow,children:(0,b.jsx)(g.zx,{className:x.clearButton,fullWidth:!1,icon:"times",variant:"secondary",onClick:()=>{a({alertState:null,queryString:null,dataSource:null,ruleType:null}),setTimeout((()=>n(s+1)),100)},children:"Clear filters"})})]})]})};var mr=a(7501),hr=a(82139);const xr=e=>(r,a)=>{const s=a.groups.reduce(jr(e),[]);return s.length&&r.push(Object.assign({},a,{groups:s})),r},jr=e=>(r,a)=>{const s=a.rules.filter((r=>{var a;if(e.ruleType&&e.ruleType!==(null===(a=r.promRule)||void 0===a?void 0:a.type))return!1;if(e.dataSource&&(0,A.Pc)(r.rulerRule)&&!fr(r.rulerRule,e))return!1;if(e.queryString){var s;const a=e.queryString.toLocaleLowerCase(),n=null===(s=r.name)||void 0===s?void 0:s.toLocaleLowerCase().includes(a),t=(0,hr.Zh)(e.queryString),l=(0,hr.eD)(r.labels,t),i=r.promRule&&r.promRule.type===Re.pz.Alerting&&r.promRule.alerts&&r.promRule.alerts.some((e=>(0,hr.eD)(e.labels,t)));if(!(n||l||i))return!1}return!!(!e.alertState||r.promRule&&(0,A.x_)(r.promRule)&&r.promRule.state===e.alertState)}));return s.length&&r.push(Object.assign({},a,{rules:s})),r},fr=(e,r)=>!r.dataSource||!!e.grafana_alert.data.find((e=>{if(!e.datasourceUid)return!1;const a=(0,mr.F)().getInstanceSettings(e.datasourceUid);return(null==a?void 0:a.name)===r.dataSource}));var vr,br,wr,yr=a(85464);const Nr={groups:e=>{let{namespaces:r,expandAll:a}=e;const[s,n]=(0,l.useMemo)((()=>{const e=r.map((e=>Object.assign({},e,{groups:e.groups.sort(((e,r)=>e.name.localeCompare(r.name)))}))).sort(((e,r)=>e.name.localeCompare(r.name)));return[e.filter((e=>(0,_.HY)(e.rulesSource))),e.filter((e=>(0,_.jq)(e.rulesSource)))]}),[r]);return(0,l.useEffect)((()=>{(0,O.PN)(T.z.loadedList)}),[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(G.q,{actions:[h.bW.AlertingRuleRead],children:(0,b.jsx)(Qe,{namespaces:s,expandAll:a})}),(0,b.jsx)(G.q,{actions:[h.bW.AlertingRuleExternalRead],children:(0,b.jsx)(Ze,{namespaces:n,expandAll:a})})]})},state:e=>{let{namespaces:r}=e;const a=(0,k.lC)((0,m.K)()[0]),s=(0,l.useMemo)((()=>{const e={[Re.x_.Firing]:[],[Re.x_.Inactive]:[],[Re.x_.Pending]:[]};return r.forEach((r=>r.groups.forEach((r=>r.rules.forEach((r=>{r.promRule&&(0,A.x_)(r.promRule)&&e[r.promRule.state].push(r)})))))),Object.values(e).forEach((e=>e.sort(((e,r)=>e.name.localeCompare(r.name))))),e}),[r]);return(0,b.jsxs)(b.Fragment,{children:[(!a.alertState||a.alertState===Re.x_.Firing)&&(0,b.jsx)(Xe,{state:Re.x_.Firing,rules:s[Re.x_.Firing]}),(!a.alertState||a.alertState===Re.x_.Pending)&&(0,b.jsx)(Xe,{state:Re.x_.Pending,rules:s[Re.x_.Pending]}),(!a.alertState||a.alertState===Re.x_.Inactive)&&(0,b.jsx)(Xe,{defaultCollapsed:a.alertState!==Re.x_.Inactive,state:Re.x_.Inactive,rules:s[Re.x_.Inactive]})]})}},Cr=(0,u.Pf)((()=>{const e=(0,h.I0)(),r=(0,p.wW)(Sr),a=(0,l.useMemo)(_.mA,[]),s=(0,i.TH)(),[n,t]=(0,l.useState)(!1),[u]=(0,m.K)(),j=(0,k.lC)(u),f=Object.values(j).some((e=>void 0!==e)),{canCreateGrafanaRules:y,canCreateCloudRules:N}=(0,v.B)(),C=Nr[u.view]?u.view:"groups",S=Nr[C],R=(0,$._)((e=>e.promRules)),A=(0,$._)((e=>e.rulerRules)),I=a.some((e=>{var r,a;return(null===(r=R[e])||void 0===r?void 0:r.loading)||(null===(a=A[e])||void 0===a?void 0:a.loading)})),P=Object.entries(R),E=P.every((e=>{let[r,a]=e;return a.dispatched&&(void 0!==(null==a?void 0:a.result)||void 0!==(null==a?void 0:a.error))})),O=P.every((e=>{var r;let[a,s]=e;return s.dispatched&&0===(null==s||null===(r=s.result)||void 0===r?void 0:r.length)})),[T,G]=(0,o.Z)((async()=>{I||await e((0,Q.ei)())}),[I]);(0,l.useEffect)((()=>{e((0,Q.ei)())}),[e]),(0,c.Z)(G,yr.p4);const L=E&&O&&P.length>0,z=(e=>{const[r]=(0,m.K)(),a=(0,k.lC)(r);return(0,l.useMemo)((()=>e.filter((e=>{let{rulesSource:r}=e;return!a.dataSource||!(0,_.jq)(r)||r.name===a.dataSource})).reduce(xr(a),[])),[e,a])})((0,Ke.Zo)());return(0,b.jsxs)(x.J,{pageId:"alert-list",isLoading:!1,children:[vr||(vr=(0,b.jsx)(F,{})),br||(br=(0,b.jsx)(gr,{})),!L&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:r.break}),(0,b.jsxs)("div",{className:r.buttonsContainer,children:[(0,b.jsxs)("div",{className:r.statsContainer,children:["groups"===C&&f&&(0,b.jsx)(g.zx,{className:r.expandAllButton,icon:n?"angle-double-up":"angle-double-down",variant:"secondary",onClick:()=>t(!n),children:n?"Collapse all":"Expand all"}),(0,b.jsx)(Ie,{showInactive:!0,showRecording:!0,namespaces:z})]}),(y||N)&&(0,b.jsx)(g.Qj,{href:d.Cj.renderUrl("alerting/new",{returnTo:s.pathname+s.search}),icon:"plus",children:"New alert rule"})]})]}),L&&(wr||(wr=(0,b.jsx)(w,{}))),!L&&(0,b.jsx)(S,{expandAll:n,namespaces:z})]})}),{style:"page"}),Sr=e=>({break:t.css`
    width: 100%;
    height: 0;
    margin-bottom: ${e.spacing(2)};
    border-bottom: solid 1px ${e.colors.border.medium};
  `,buttonsContainer:t.css`
    margin-bottom: ${e.spacing(2)};
    display: flex;
    justify-content: space-between;
  `,statsContainer:t.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,expandAllButton:t.css`
    margin-right: ${e.spacing(1)};
  `}),Rr=Cr},40256:(e,r,a)=>{a.d(r,{J:()=>t});a(68404);var s=a(90894),n=a(45916);const t=e=>{let{children:r,pageId:a,pageNav:t,isLoading:l}=e;return(0,n.jsx)(s.T,{pageNav:t,navId:a,children:(0,n.jsx)(s.T.Contents,{isLoading:l,children:r})})}},53262:(e,r,a)=>{a.d(r,{q:()=>t});a(68404);var s=a(61959),n=a(45916);const t=e=>{let{actions:r,children:a,fallback:t=!0}=e;return r.some((e=>s.Vt.hasAccess(e,t)))?(0,n.jsx)(n.Fragment,{children:a}):null}},29721:(e,r,a)=>{a.d(r,{F:()=>o});var s=a(27549),n=(a(68404),a(9617)),t=a(9019),l=a(45916);const i=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:r}=e,a=function(e,r){if(null==e)return{};var a,s,n={},t=Object.keys(e);for(s=0;s<t.length;s++)a=t[s],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,i);const o=(0,n.wW)(c);return(0,l.jsx)(t.t,Object.assign({renderExpandedContent:r?(e,a,n)=>(0,l.jsxs)(l.Fragment,{children:[!(a===n.length-1)&&(0,l.jsx)("div",{className:(0,s.cx)(o.contentGuideline,o.guideline)}),r(e,a,n)]}):void 0,renderPrefixHeader:()=>(0,l.jsx)("div",{className:o.relative,children:(0,l.jsx)("div",{className:(0,s.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,r,a)=>(0,l.jsxs)("div",{className:o.relative,children:[(0,l.jsx)("div",{className:(0,s.cx)(o.topGuideline,o.guideline)}),!(r===a.length-1)&&(0,l.jsx)("div",{className:(0,s.cx)(o.bottomGuideline,o.guideline)})]})},a))},c=e=>({relative:s.css`
    position: relative;
    height: 100%;
  `,guideline:s.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:s.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:s.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:s.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:s.css`
    top: -25px;
    bottom: 0;
  `})},85598:(e,r,a)=>{a.d(r,{V:()=>l});a(68404);var s,n=a(24085),t=a(45916);const l=e=>{let{namespace:r,group:a}=e;return a?(0,t.jsxs)(t.Fragment,{children:[r," ",s||(s=(0,t.jsx)(n.J,{name:"angle-right"}))," ",a]}):(0,t.jsx)(t.Fragment,{children:r})}},3799:(e,r,a)=>{a.d(r,{A:()=>i});a(68404);var s=a(9442),n=a(40920),t=a(45916);const l=["tooltip","icon","to","target","onClick","className","tooltipPlacement"];const i=e=>{let{tooltip:r,icon:a,to:i,target:o,onClick:c,className:d,tooltipPlacement:u="top"}=e,p=function(e,r){if(null==e)return{};var a,s,n={},t=Object.keys(e);for(s=0;s<t.length;s++)a=t[s],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);const g="string"==typeof r?r:void 0;return(0,t.jsx)(s.u,{content:r,placement:u,children:i?(0,t.jsx)(n.Qj,Object.assign({variant:"secondary",fill:"text",icon:a,href:i,size:"sm",target:o},p,{"aria-label":g})):(0,t.jsx)(n.zx,Object.assign({className:d,variant:"secondary",fill:"text",size:"sm",icon:a,type:"button",onClick:c},p,{"aria-label":g}))})}},61263:(e,r,a)=>{a.d(r,{i:()=>O});var s=a(27549),n=a(68404),t=a(9617),l=a(65747),i=a(26980),o=a(85464),c=a(86647),d=a(9019),u=a(29721),p=a(73358),g=a(85598),m=a(86451),h=a(48147),x=a(9442),j=a(24085),f=a(91470),v=a(45916);function b(e){let{rule:r}=e;const a=(0,t.wW)(w),{exceedsLimit:s}=(0,n.useMemo)((()=>(0,f.f)(r.group.interval)),[r.group.interval]);return s?(0,v.jsx)(x.u,{theme:"error",content:(0,v.jsxs)("div",{children:["A minimum evaluation interval of"," ",(0,v.jsx)("span",{className:a.globalLimitValue,children:h.v.unifiedAlerting.minInterval})," has been configured in Grafana and will be used instead of the ",r.group.interval," interval configured for the Rule Group."]}),children:(0,v.jsx)(j.J,{name:"stopwatch-slash",className:a.icon})}):null}function w(e){return{globalLimitValue:s.css`
      font-weight: ${e.typography.fontWeightBold};
    `,icon:s.css`
      fill: ${e.colors.warning.text};
    `}}var y=a(94322),N=a(52510),C=a(83039),S=a(97292),R=a(79842),$=a(85351),_=a(12135);const k=e=>{let{rule:r}=e;const a=(0,t.wW)(F),{namespace:{rulesSource:s}}=r,n=Object.entries(r.annotations).filter((e=>{let[r,a]=e;return!!a.trim()}));return(0,v.jsxs)("div",{children:[(0,v.jsx)(C.f,{rule:r,rulesSource:s}),(0,v.jsxs)("div",{className:a.wrapper,children:[(0,v.jsxs)("div",{className:a.leftSide,children:[(0,v.jsx)(A,{rule:r}),!!r.labels&&!!Object.keys(r.labels).length&&(0,v.jsx)(N.C,{label:"Labels",horizontal:!0,children:(0,v.jsx)(y.s,{labels:r.labels})}),(0,v.jsx)($.C,{rulesSource:s,rule:r,annotations:n}),(0,v.jsx)(S.J,{annotations:n})]}),(0,v.jsx)("div",{className:a.rightSide,children:(0,v.jsx)(R.C,{rulesSource:s,rule:r})})]}),(0,v.jsx)(_.M,{rule:r,itemsDisplayLimit:15})]})},A=e=>{let r,{rule:a}=e,s=a.group.interval;var n;(0,c.yF)(a.rulerRule)||(r=null===(n=a.rulerRule)||void 0===n?void 0:n.for);return(0,v.jsxs)(v.Fragment,{children:[s&&(0,v.jsxs)(N.C,{label:"Evaluate",horizontal:!0,children:["Every ",s]}),r&&(0,v.jsx)(N.C,{label:"For",horizontal:!0,children:r})]})},F=e=>({wrapper:s.css`
    display: flex;
    flex-direction: row;

    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:s.css`
    flex: 1;
  `,rightSide:s.css`
    ${e.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var I,P=a(82434),E=a(18181);const O=e=>{let{rules:r,className:a,showGuidelines:i=!1,emptyMessage:o="No rules found.",showGroupColumn:c=!1,showSummaryColumn:p=!1}=e;const g=(0,t.wW)(T),m=(0,s.cx)(g.wrapper,a,{[g.wrapperMargin]:i}),h=(0,n.useMemo)((()=>r.map(((e,r)=>({id:`${e.namespace.name}-${e.group.name}-${e.name}-${r}`,data:e})))),[r]),x=G(p,c);if(!r.length)return(0,v.jsx)("div",{className:(0,s.cx)(m,g.emptyMessage),children:o});const j=i?u.F:d.t;return(0,v.jsx)("div",{className:m,"data-testid":"rules-table",children:(0,v.jsx)(j,{cols:x,isExpandable:!0,items:h,renderExpandedContent:e=>{let{data:r}=e;return(0,v.jsx)(k,{rule:r})},pagination:{itemsPerPage:l.gN},paginationStyles:g.pagination})})},T=e=>({wrapperMargin:s.css`
    ${e.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:s.css`
    padding: ${e.spacing(1)};
  `,wrapper:s.css`
    width: auto;
    border-radius: ${e.shape.borderRadius()};
  `,pagination:s.css`
    display: flex;
    margin: 0;
    padding-top: ${e.spacing(1)};
    padding-bottom: ${e.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${e.colors.border.strong};
    border-right: 1px solid ${e.colors.border.strong};
    border-bottom: 1px solid ${e.colors.border.strong};
  `});function G(e,r){const{hasRuler:a,rulerRulesLoaded:s}=(0,i.h)();return(0,n.useMemo)((()=>{const n=[{id:"state",label:"State",renderCell:e=>{let{data:r}=e;const{namespace:n}=r,{rulesSource:t}=n,{promRule:l,rulerRule:i}=r,o=!(!(a(t)&&s(t)&&l)||i),c=!(!(a(t)&&s(t)&&i)||l);return(0,v.jsx)(E.p,{rule:r,isDeleting:o,isCreating:c})},size:"165px"},{id:"name",label:"Name",renderCell:e=>{let{data:r}=e;return r.name},size:5},{id:"provisioned",label:"",renderCell:e=>{let{data:r}=e;const a=r.rulerRule;if(!(0,c.Pc)(a))return null;return a.grafana_alert.provenance?I||(I=(0,v.jsx)(p.C0,{})):null},size:"100px"},{id:"warnings",label:"",renderCell:e=>{let{data:r}=e;return(0,v.jsx)(b,{rule:r})},size:"45px"},{id:"health",label:"Health",renderCell:e=>{let{data:{promRule:r,group:a}}=e;return r?(0,v.jsx)(P.V,{rule:r}):null},size:"75px"}];return e&&n.push({id:"summary",label:"Summary",renderCell:e=>{var r;let{data:a}=e;return(0,v.jsx)(m.Z,{input:null!==(r=a.annotations[o.q6.summary])&&void 0!==r?r:""})},size:5}),r&&n.push({id:"group",label:"Group",renderCell:e=>{let{data:r}=e;const{namespace:a,group:s}=r;return"default"===s.name?(0,v.jsx)(g.V,{namespace:a.name}):(0,v.jsx)(g.V,{namespace:a.name,group:s.name})},size:5}),n}),[a,s,e,r])}},26980:(e,r,a)=>{a.d(r,{h:()=>l});var s=a(68404),n=a(19462),t=a(33899);function l(){const e=(0,t._)((e=>e.rulerRules));return{hasRuler:(0,s.useCallback)((r=>{var a;const s="string"==typeof r?r:r.name;return s===n.GC||!(null===(a=e[s])||void 0===a||!a.result)}),[e]),rulerRulesLoaded:(0,s.useCallback)((r=>{var a;const s=(0,n.EG)(r),t=null===(a=e[s])||void 0===a?void 0:a.result;return Boolean(t)}),[e])}}},13677:(e,r,a)=>{a.d(r,{Z:()=>n});var s=a(68404);const n=function(e,r){var a=(0,s.useRef)((function(){}));(0,s.useEffect)((function(){a.current=e})),(0,s.useEffect)((function(){if(null!==r){var e=setInterval((function(){return a.current()}),r||0);return function(){return clearInterval(e)}}}),[r])}}}]);
//# sourceMappingURL=AlertRuleListIndex.1fd721a9c934449aaadc.js.map