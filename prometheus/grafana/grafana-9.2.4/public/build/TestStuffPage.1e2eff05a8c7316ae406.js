"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8595],{56303:(e,r,t)=>{t.d(r,{l:()=>c});var n=t(68404),s=t(99464),o=t(21295),a=t(7501),i=t(359),d=t(45916);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class c extends n.PureComponent{constructor(){super(...arguments),u(this,"onRemoveQuery",(e=>{this.props.onQueriesChange(this.props.queries.filter((r=>r!==e)))})),u(this,"onDragStart",(e=>{const{queries:r,dsSettings:t}=this.props;(0,o.ff)("query_row_reorder_started",{startIndex:e.source.index,numberOfQueries:r.length,datasourceType:t.type})})),u(this,"onDragEnd",(e=>{const{queries:r,onQueriesChange:t,dsSettings:n}=this.props;if(!e||!e.destination)return;const s=e.source.index,a=e.destination.index;if(s===a)return void(0,o.ff)("query_row_reorder_canceled",{startIndex:s,endIndex:a,numberOfQueries:r.length,datasourceType:n.type});const i=Array.from(r),[d]=i.splice(s,1);i.splice(a,0,d),t(i),(0,o.ff)("query_row_reorder_ended",{startIndex:s,endIndex:a,numberOfQueries:r.length,datasourceType:n.type})}))}onChangeQuery(e,r){const{queries:t,onQueriesChange:n}=this.props;n(t.map(((t,n)=>n===r?e:t)))}onDataSourceChange(e,r){const{queries:t,onQueriesChange:n}=this.props;this.props.onDatasourceChange&&this.props.onDatasourceChange(e,t[r]),n(t.map(((t,n)=>{if(n!==r)return t;const s={type:e.type,uid:e.uid};if(t.datasource){const r=(0,a.F)().getInstanceSettings(t.datasource);if((null==r?void 0:r.type)===e.type)return Object.assign({},t,{datasource:s})}return{refId:t.refId,hide:t.hide,datasource:s}})))}render(){const{dsSettings:e,data:r,queries:t,app:n,history:o,eventBus:a,onAddQuery:u,onRunQueries:c,onQueryCopied:p,onQueryRemoved:l,onQueryToggled:g}=this.props;return(0,d.jsx)(s.Z5,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd,children:(0,d.jsx)(s.bK,{droppableId:"transformations-list",direction:"vertical",children:s=>(0,d.jsxs)("div",Object.assign({ref:s.innerRef},s.droppableProps,{children:[t.map(((s,f)=>{const m=h(s,e),y=e.meta.mixed?e=>this.onDataSourceChange(e,f):void 0;return(0,d.jsx)(i.x,{id:s.refId,index:f,data:r,query:s,dataSource:m,onChangeDataSource:y,onChange:e=>this.onChangeQuery(e,f),onRemoveQuery:this.onRemoveQuery,onAddQuery:u,onRunQuery:c,onQueryCopied:p,onQueryRemoved:l,onQueryToggled:g,queries:t,app:n,history:o,eventBus:a},s.refId)})),s.placeholder]}))})})}}const h=(e,r)=>{if(!e.datasource)return r;return(0,a.F)().getInstanceSettings(e.datasource)||r}},14870:(e,r,t)=>{t.r(r),t.d(r,{TestStuffPage:()=>y,default:()=>v,getDefaultState:()=>x});var n=t(68404),s=t(60532),o=t(87723),a=t(35089),i=t(24009),d=t(13261),u=t(40920),c=t(90894),h=t(78837),p=t(58257),l=t(57866),g=t(73833),f=t(78338),m=t(45916);const y=()=>{const[e,r]=(0,n.useState)(x()),{queryOptions:t,queryRunner:i}=e,h=(0,n.useMemo)((()=>i.getData({withFieldConfig:!0,withTransforms:!0})),[i]),f=(0,s.Z)(h),y={id:"test-page",text:"Test page",icon:"dashboard",subTitle:"FOR TESTING!",url:"sandbox/test"},v=(0,p.iG)();return(0,m.jsx)(c.T,{navModel:{node:y,main:y},children:(0,m.jsxs)(c.T.Contents,{children:[f&&(0,m.jsx)(o.Z,{style:{width:"100%",height:"600px"},children:e=>{let{width:r}=e;return(0,m.jsxs)("div",{children:[(0,m.jsx)(l.$,{title:"Hello",pluginId:"timeseries",width:r,height:300,data:f,options:{},fieldConfig:{defaults:{},overrides:[]},timeZone:"browser"}),(0,m.jsx)(d.i,{data:f.series[0],width:r,height:300})]})}}),(0,m.jsx)("div",{style:{marginTop:"16px",height:"45%"},children:(0,m.jsx)(g.D,{options:t,queryRunner:i,onRunQueries:()=>{var e;const r={from:"now-1h",to:"now"};i.run({queries:t.queries,datasource:t.dataSource,timezone:"browser",timeRange:{from:a.parse(r.from),to:a.parse(r.to),raw:r},maxDataPoints:null!==(e=t.maxDataPoints)&&void 0!==e?e:100,minInterval:t.minInterval})},onOptionsChange:t=>{r(Object.assign({},e,{queryOptions:t}))}})}),(0,m.jsxs)("div",{style:{display:"flex",gap:"1em"},children:[(0,m.jsx)(u.zx,{onClick:()=>v.success("Success toast","some more text goes here"),variant:"primary",children:"Success"}),(0,m.jsx)(u.zx,{onClick:()=>v.warning("Warning toast","some more text goes here","bogus-trace-99999"),variant:"secondary",children:"Warning"}),(0,m.jsx)(u.zx,{onClick:()=>v.error("Error toast","some more text goes here","bogus-trace-fdsfdfsfds"),variant:"destructive",children:"Error"})]})]})})};function x(){const e={fieldConfig:{defaults:{color:{mode:i.S.PaletteClassic}},overrides:[]},replaceVariables:e=>e,theme:h.vc.theme2},r={getTransformations:()=>[],getFieldOverrideOptions:()=>e,getDataSupport:()=>({annotations:!1,alertStates:!1})};return{queryRunner:new f.o(r),queryOptions:{queries:[],dataSource:{name:"gdev-testdata"},maxDataPoints:100}}}const v=y}}]);
//# sourceMappingURL=TestStuffPage.1e2eff05a8c7316ae406.js.map