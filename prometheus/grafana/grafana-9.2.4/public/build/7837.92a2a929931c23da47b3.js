"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7837],{42913:(e,t,a)=>{a.d(t,{$R:()=>g,S$:()=>m,XJ:()=>h});var s=a(82897),n=a(32678),r=a(83044),o=a(12901),i=a(27494),d=a(5937),l=a(48147),c=a(29937),p=a(32025);function u(e,t){if(!(t.labels||t.names||t.values))return e;const a=new Set(["time","value","exemplar","traceid","id","uid","uuid","__name__","le","name"]),s=function(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=e.length,a=new Map;return s=>{const n=a.get(s);if(null!=n)return n;const r=[...s].map((a=>a.toLowerCase()&&a!==a.toUpperCase()?"abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*t)):a.toUpperCase()&&a!==a.toUpperCase()?e.charAt(Math.floor(Math.random()*t)):a)).join("");return a.set(s,r),r}}();return e.map((e=>{let{schema:n,data:r}=e;if(n&&r){if(t.labels)for(const e of n.fields)if(e.labels){const t={};for(const[a,n]of Object.entries(e.labels))t[a]=s(n);e.labels=t}if(t.names)for(const e of n.fields){var o;null!==(o=e.name)&&void 0!==o&&o.length&&!a.has(e.name.toLowerCase())&&(e.name=s(e.name))}t.values&&n.fields.forEach(((e,t)=>{if(e.type===p.fS.string&&r){const e=r.values[t].map((e=>s(e)));r.values[t]=e}}))}return{schema:n,data:r}}))}function h(e){const t=[];if(null!=e&&e.series)for(const a of e.series)t.push((0,r.Y)(a));if(null!=e&&e.annotations)for(const s of e.annotations){var a;const e=(0,r.Y)(s);null!==(a=e.schema)&&void 0!==a&&a.meta||(e.schema.meta={}),e.schema.meta.dataTopic=o.w5.Annotations,t.push(e)}return t}function m(e,t){var a;const s=e.getSaveModel(),n=s.type,r=`${l.v.buildInfo.version} (${l.v.buildInfo.commit})`;let o=`| Key | Value |\n|--|--|\n| Panel | ${n} @ ${null!==(a=s.pluginVersion)&&void 0!==a?a:r} |\n| Grafana | ${r} // ${l.v.buildInfo.edition} |\n`;return t&&(o+="<details><summary>Panel debug snapshot dashboard</summary>\n\n```json\n"+t+"\n```\n</details>"),o}async function g(e,t,a){var r,p,m,g;const v=e.getSaveModel(),y=(0,s.cloneDeep)(f),x=v.type,b=await(0,n.z)(e.getQueryRunner().getData({withFieldConfig:!1,withTransforms:!1})),w=e.datasource,j=u(h(b),t),S=`${l.v.buildInfo.version} (${l.v.buildInfo.commit})`,D=null!==(r=null==v?void 0:v.targets)&&void 0!==r?r:[],I=`<table width="100%">\n    <tr>\n      <th width="2%">Panel</th>\n      <td >${x} @ ${null!==(p=v.pluginVersion)&&void 0!==p?p:S}</td>\n    </tr>\n    <tr>\n      <th>Queries</th>\n      <td>${D.map((e=>{var t;const a=null!==(t=e.datasource)&&void 0!==t?t:w;return`${e.refId}[${null==a?void 0:a.type}]`})).join(", ")}</td>\n    </tr>\n    ${function(e){if(!e.transformations)return"";return`<tr>\n      <th>Transforms (${e.transformations.length})</th>\n      <td>${e.transformations.map((e=>e.id)).join(", ")}</td>\n  </tr>`}(v)}\n    ${function(e,t){var a;let s=null!==(a=e.series.length)&&void 0!==a?a:0,n=0,r=0;for(const t of e.series)n+=t.fields.length,r+=t.length;return`<tr><th>Data</th><td>${e.state!==d.Gu.Done?e.state:""} ${s} frames, ${n} fields, ${r} rows </td></tr>`}(b)}\n    ${function(e){var t;if(null===(t=e.annotations)||void 0===t||!t.length)return"";return`<tr>\n  <th>Annotations</th>\n  <td>${e.annotations.map(((e,t)=>`<span>${e.length}</span>`))}</td>\n</tr>`}(b)}\n    <tr>\n      <th>Grafana</th>\n      <td>${S} // ${l.v.buildInfo.edition}</td>\n    </tr>\n  </table>`.trim();if(y.panels[0]=Object.assign({},v,y.panels[0],{targets:[{refId:"A",datasource:{type:"grafana",uid:"grafana"},queryType:c.hR.Snapshot,snapshot:j}]}),null!==(m=v.transformations)&&void 0!==m&&m.length){const e=y.panels[y.panels.length-1];e.title=e.title+" (after transformations)";const t=(0,s.cloneDeep)(e);t.id=100,t.title="Data (before transformations)",t.gridPos.w=24,t.targets[0].withTransforms=!1,y.panels.push(t)}return null!==(g=b.annotations)&&void 0!==g&&g.length&&y.panels.push({id:7,gridPos:{h:6,w:24,x:0,y:20},type:"table",title:"Annotations",datasource:{type:"datasource",uid:"-- Dashboard --"},options:{showTypeIcons:!0},targets:[{datasource:{type:"datasource",uid:"-- Dashboard --"},panelId:2,withTransforms:!0,topic:o.w5.Annotations,refId:"A"}]}),y.panels[1].options.content=I,y.panels[2].options.content=JSON.stringify(v,null,2),y.title=`Debug: ${v.title} // ${(0,i.dq)(new Date)}`,y.tags=["debug",`debug-${x}`],y.time={from:a.from.toISOString(),to:a.to.toISOString()},y}const f={panels:[{id:2,title:"Reproduced with embedded data",datasource:{type:"grafana",uid:"grafana"},gridPos:{h:13,w:15,x:0,y:0}},{gridPos:{h:7,w:9,x:15,y:0},id:5,options:{content:"...",mode:"html"},title:"Debug info",type:"text"},{id:6,title:"Original Panel JSON",type:"text",gridPos:{h:13,w:9,x:15,y:7},options:{content:"...",mode:"code",code:{language:"json",showLineNumbers:!0,showMiniMap:!0}}},{id:3,title:"Data from panel above",type:"table",datasource:{type:"datasource",uid:"-- Dashboard --"},gridPos:{h:7,w:15,x:0,y:13},options:{showTypeIcons:!0},targets:[{datasource:{type:"datasource",uid:"-- Dashboard --"},panelId:2,withTransforms:!0,refId:"A"}]}],schemaVersion:37}},68793:(e,t,a)=>{a.d(t,{N:()=>u});var s=a(24018),n=a(81146),r=a(12954),o=a(32025),i=a(95464),d=a(29604),l=a(90387);const c="hideSeriesFrom",p=(0,s.Y4)(c);function u(e,t,a,s){const{overrides:n}=a,r=e,o=n.findIndex(p);if(o<0){if(t===l.R.ToggleSelection){const e=h([r,...y(n,s)]);return Object.assign({},a,{overrides:[...a.overrides,e]})}const e=h(v(s,r));return Object.assign({},a,{overrides:[...a.overrides,e]})}const i=Array.from(n),[d]=i.splice(o,1);if(t===l.R.ToggleSelection){let e=g(d);const t=y(i,s);if(t.length>0&&(e=e.filter((e=>t.indexOf(e)<0))),e[0]===r&&1===e.length)return Object.assign({},a,{overrides:i});const n=h([r,...t]);return Object.assign({},a,{overrides:[...i,n]})}const c=m(d,r);return f(c,s)?Object.assign({},a,{overrides:i}):Object.assign({},a,{overrides:[...i,c]})}function h(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.Ys.exclude,s=arguments.length>2?arguments[2]:void 0;return s=null!==(t=s)&&void 0!==t?t:{id:"custom.hideFrom",value:{viz:!0,legend:!1,tooltip:!1}},{__systemRef:c,matcher:{id:r.mi.byNames,options:{mode:a,names:e,prefix:a===n.Ys.exclude?"All except:":void 0,readOnly:!0}},properties:[Object.assign({},s,{value:{viz:!0,legend:!1,tooltip:!1}})]}}const m=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.Ys.exclude;const s=e.properties.find((e=>"custom.hideFrom"===e.id)),r=g(e),o=r.findIndex((e=>e===t));return o<0?r.push(t):r.splice(o,1),h(r,a,s)},g=e=>{var t;const a=null===(t=e.matcher.options)||void 0===t?void 0:t.names;return Array.isArray(a)?[...a]:[]},f=(e,t)=>g(e).length===v(t).length,v=(e,t)=>{const a=new Set;for(const s of e)for(const n of s.fields){if(n.type!==o.fS.number)continue;const r=(0,i.C)(n,s,e);r!==t&&a.add(r)}return Array.from(a)},y=(e,t)=>{let a=[];for(const n of e){var s;const e=n.properties.find((e=>"custom.hideFrom"===e.id));if(void 0!==e&&!0===(null===(s=e.value)||void 0===s?void 0:s.legend)){const e=d.Ls.get(n.matcher.id).get(n.matcher.options);for(const s of t)for(const n of s.fields){if(n.type!==o.fS.number)continue;const r=(0,i.C)(n,s,t);e(n,s,t)&&a.push(r)}}}return a}},16618:(e,t,a)=>{a.d(t,{E:()=>B});var s=a(25235),n=a(19309),r=a(27549),o=a(3574),i=a(68404),d=a(87723),l=a(4805),c=a(46669),p=a(27494),u=a(94036),h=a(31184),m=a(15670),g=a(68694),f=a(21295),v=a(98134),y=a(40920),x=a(13261),b=a(78837),w=a(28783),j=a(46461),S=a(31037),D=a(93829),I=a(95464),N=a(25049),T=a(84719),O=a(61884),C=a(72786),F=a(71623),k=a(9617),$=a(45916);const E=e=>r.css`
  margin: 0;
  margin-left: ${e.spacing.md};
  font-size: ${e.typography.size.sm};
  color: ${e.colors.textWeak};
`,P=e=>{let{children:t}=e;const a=(0,k.yK)(E);return(0,$.jsx)("p",{className:a,children:t})};var _=a(1667);const q=e=>{var t;let{options:a,onOptionsChange:s,panel:r,data:o,dataFrames:i,transformId:d,transformationOptions:l,selectedDataFrame:p,onDataFrameChange:u,downloadForExcel:h,toggleDownloadForExcel:m}=e;const g=(0,_.S)(),f=null==r?void 0:r.getTransformations(),v=Boolean(null==f?void 0:f.length)&&"join by time"!==d,y=r&&!(null!==(t=r.plugin)&&void 0!==t&&t.fieldConfigRegistry.isEmpty());let x=i;p===c.W.joinByField&&(x=o);const b=[...l,...x.map(((e,t)=>({value:t,label:`${(0,I.n)(e)} (${t})`})))];return(0,$.jsx)("div",{className:g.dataDisplayOptions,children:(0,$.jsx)(F.t,{id:"Data options",index:0,title:n.ag._({id:"dashboard.inspect-data.data-options",message:"Data options"}),headerElement:(0,$.jsx)(P,{children:function(){if(!o)return"";const e=[];return p===c.W.joinByField?e.push(n.ag._({id:"dashboard.inspect-data.series-to-columns",message:"Series joined by time"})):o.length>1&&e.push((0,I.n)(o[p])),(a.withTransforms||a.withFieldConfig)&&(a.withTransforms&&e.push(n.ag._({id:"dashboard.inspect-data.panel-transforms",message:"Panel transforms"})),a.withTransforms&&a.withFieldConfig,a.withFieldConfig&&e.push(n.ag._({id:"dashboard.inspect-data.formatted",message:"Formatted data"}))),h&&e.push(n.ag._({id:"dashboard.inspect-data.excel-header",message:"Excel header"})),e.join(", ")}()}),isOpen:!1,children:(0,$.jsx)("div",{className:g.options,"data-testid":"dataOptions",children:(0,$.jsxs)(N.wc,{spacing:"none",children:[o.length>1&&(0,$.jsx)(T.g,{label:n.ag._({id:"dashboard.inspect-data.dataframe-label",message:"Show data frame"}),children:(0,$.jsx)(O.Ph,{options:b,value:p,onChange:u,width:30,"aria-label":n.ag._({id:"dashboard.inspect-data.dataframe-aria-label",message:"Select dataframe"})})}),(0,$.jsxs)(N.Lh,{children:[v&&s&&(0,$.jsx)(T.g,{label:n.ag._({id:"dashboard.inspect-data.transformations-label",message:"Apply panel transformations"}),description:n.ag._({id:"dashboard.inspect-data.transformations-description",message:"Table data is displayed with transformations defined in the panel Transform tab."}),children:(0,$.jsx)(C.r,{value:!!a.withTransforms,onChange:()=>s(Object.assign({},a,{withTransforms:!a.withTransforms}))})}),y&&s&&(0,$.jsx)(T.g,{label:n.ag._({id:"dashboard.inspect-data.formatted-data-label",message:"Formatted data"}),description:n.ag._({id:"dashboard.inspect-data.formatted-data-description",message:"Table data is formatted with options defined in the Field and Override tabs."}),children:(0,$.jsx)(C.r,{id:"formatted-data-toggle",value:!!a.withFieldConfig,onChange:()=>s(Object.assign({},a,{withFieldConfig:!a.withFieldConfig}))})}),(0,$.jsx)(T.g,{label:n.ag._({id:"dashboard.inspect-data.download-excel-label",message:"Download for Excel"}),description:n.ag._({id:"dashboard.inspect-data.download-excel-description",message:"Adds header to CSV for use with Excel"}),children:(0,$.jsx)(C.r,{id:"excel-toggle",value:h,onChange:m})})]})]})})})})};var J,Q,A,R,M,z;function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class B extends i.PureComponent{constructor(e){var t,a;super(e),t=this,L(this,"exportCsv",(function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{panel:s}=t.props,{transformId:n}=t.state,r=(0,l.MJ)([e],a),i=new Blob([String.fromCharCode(65279),r],{type:"text/csv;charset=utf-8"}),d=s?s.getDisplayTitle():"Explore",u=n!==c.W.noop?"-as-"+n.toLocaleLowerCase():"",h=`${d}-data${u}-${(0,p.dq)(new Date)}.csv`;(0,o.saveAs)(i,h)})),L(this,"exportLogsAsTxt",(()=>{var e;const{data:t,panel:a,app:s}=this.props;(0,f.ff)("grafana_logs_download_logs_clicked",{app:s,format:"logs"});const n=(0,w.aB)(t||[],void 0);let r="";null===(e=n.meta)||void 0===e||e.forEach((e=>{const t=`${e.label}: ${JSON.stringify(e.value)}\n`;r+=t})),r+="\n\n",n.rows.forEach((e=>{const t=(0,p.lf)(e.timeEpochMs)+"\t"+e.entry+"\n";r+=t}));const i=new Blob([r],{type:"text/plain;charset=utf-8"}),d=`${a?a.getDisplayTitle():"Explore"}-logs-${(0,p.dq)(new Date)}.txt`;(0,o.saveAs)(i,d)})),L(this,"exportTracesAsJson",(()=>{var e,t;const{data:a,panel:s}=this.props;if(a)for(const r of a){var n;if("trace"===(null===(n=r.meta)||void 0===n?void 0:n.preferredVisualisationType))switch(null===(e=r.meta)||void 0===e||null===(t=e.custom)||void 0===t?void 0:t.traceFormat){case"jaeger":{let e=(0,j.c6)(new u.v(r));this.saveTraceJson(e,s);break}case"zipkin":{let e=(0,D.H)(new u.v(r));this.saveTraceJson(e,s);break}default:{let e=(0,S.g9)(new u.v(r));this.saveTraceJson(e,s);break}}}})),L(this,"saveTraceJson",((e,t)=>{const a=new Blob([JSON.stringify(e)],{type:"application/json"}),s=`${t?t.getDisplayTitle():"Explore"}-traces-${(0,p.dq)(new Date)}.json`;(0,o.saveAs)(a,s)})),L(this,"exportServiceGraph",(()=>{const{data:e,panel:t}=this.props;if(!e)return;const a=new Blob([JSON.stringify(e)],{type:"application/json"}),s=`${t?t.getDisplayTitle():"Explore"}-service-graph-${(0,p.dq)(new Date)}.json`;(0,o.saveAs)(a,s)})),L(this,"onDataFrameChange",(e=>{this.setState({transformId:e.value===c.W.joinByField?c.W.joinByField:c.W.noop,dataFrameIndex:"number"==typeof e.value?e.value:0,selectedDataFrame:e.value})})),L(this,"toggleDownloadForExcel",(()=>{this.setState((e=>({downloadForExcel:!e.downloadForExcel})))})),this.state={selectedDataFrame:0,dataFrameIndex:0,transformId:c.W.noop,transformationOptions:W(),transformedData:null!==(a=e.data)&&void 0!==a?a:[],downloadForExcel:!1}}componentDidUpdate(e,t){if(this.props.data)if(this.props.options.withTransforms)this.setState({transformedData:this.props.data});else if(e.data===this.props.data&&t.transformId===this.state.transformId);else{const e=this.state.transformationOptions.find((e=>e.value===this.state.transformId));if(e&&e.transformer.id!==c.W.noop){const t=this.state.selectedDataFrame,a=this.state.dataFrameIndex,s=(0,h.H)([e.transformer],this.props.data).subscribe((e=>{this.setState({transformedData:e,selectedDataFrame:t,dataFrameIndex:a},(()=>s.unsubscribe()))}));return}this.setState({transformedData:this.props.data})}else this.setState({transformedData:[]})}getProcessedData(){const{options:e,panel:t,timeZone:a}=this.props,s=this.state.transformedData;return e.withFieldConfig&&t?(0,m.SM)({data:s,theme:b.vc.theme2,fieldConfig:t.fieldConfig,timeZone:a,replaceVariables:e=>e}):(0,m.Of)(s)}render(){const{isLoading:e,options:t,data:a,panel:n,onOptionsChange:o,app:i}=this.props,{dataFrameIndex:l,transformId:c,transformationOptions:p,selectedDataFrame:u,downloadForExcel:h}=this.state,m=(0,_.S)();if(e)return J||(J=(0,$.jsxs)("div",{children:[(0,$.jsx)(v.$,{inline:!0})," Loading"]}));const b=this.getProcessedData();if(!b||!b.length)return Q||(Q=(0,$.jsx)("div",{children:"No Data"}));const w=b[l]?l:0,j=b[w],S=b.some((e=>{var t;return"logs"===(null==e||null===(t=e.meta)||void 0===t?void 0:t.preferredVisualisationType)})),D=b.some((e=>{var t;return"trace"===(null==e||null===(t=e.meta)||void 0===t?void 0:t.preferredVisualisationType)})),I=b.some((e=>{var t;return"nodeGraph"===(null==e||null===(t=e.meta)||void 0===t?void 0:t.preferredVisualisationType)}));return(0,$.jsxs)("div",{className:m.wrap,"aria-label":g.wl.components.PanelInspector.Data.content,children:[(0,$.jsxs)("div",{className:m.toolbar,children:[(0,$.jsx)(q,{data:a,panel:n,options:t,dataFrames:b,transformId:c,transformationOptions:p,selectedDataFrame:u,downloadForExcel:h,onOptionsChange:o,onDataFrameChange:this.onDataFrameChange,toggleDownloadForExcel:this.toggleDownloadForExcel}),(0,$.jsx)(y.zx,{variant:"primary",onClick:()=>{S&&(0,f.ff)("grafana_logs_download_clicked",{app:i,format:"csv"}),this.exportCsv(b[l],{useExcelHeader:this.state.downloadForExcel})},className:r.css`
              margin-bottom: 10px;
            `,children:A||(A=(0,$.jsx)(s.cC,{id:"dashboard.inspect-data.download-csv"}))}),S&&(0,$.jsx)(y.zx,{variant:"primary",onClick:this.exportLogsAsTxt,className:r.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,children:R||(R=(0,$.jsx)(s.cC,{id:"dashboard.inspect-data.download-logs"}))}),D&&(0,$.jsx)(y.zx,{variant:"primary",onClick:this.exportTracesAsJson,className:r.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,children:M||(M=(0,$.jsx)(s.cC,{id:"dashboard.inspect-data.download-traces"}))}),I&&(0,$.jsx)(y.zx,{variant:"primary",onClick:this.exportServiceGraph,className:r.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,children:z||(z=(0,$.jsx)(s.cC,{id:"dashboard.inspect-data.download-service"}))})]}),(0,$.jsx)("div",{className:m.content,children:(0,$.jsx)(d.Z,{children:e=>{let{width:t,height:a}=e;return 0===t?null:(0,$.jsx)("div",{style:{width:t,height:a},children:(0,$.jsx)(x.i,{width:t,height:a,data:j,showTypeIcons:!0})})}})})]})}}function W(){return[{value:c.W.joinByField,label:n.ag._({id:"dashboard.inspect-data.transformation",message:"Series joined by time"}),transformer:{id:c.W.joinByField,options:{byField:void 0}}}]}},77967:(e,t,a)=>{a.d(t,{l:()=>r});a(68404);var s=a(5516),n=a(45916);const r=e=>{let{error:t}=e;if(!t)return null;if(t.data)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:t.data.message}),(0,n.jsx)(s.g,{json:t,open:2})]});if(t.message){const{msg:e,json:a}=(e=>{try{const[t,a]=e.split(/(\{.+)/);return{msg:t,json:JSON.parse(a)}}catch{return{msg:e}}})(t.message);return a?(0,n.jsxs)(n.Fragment,{children:[""!==e&&(0,n.jsx)("h3",{children:e}),(0,n.jsx)(s.g,{json:a,open:5})]}):(0,n.jsx)("div",{children:e})}return(0,n.jsx)(s.g,{json:t,open:2})}},81669:(e,t,a)=>{a.d(t,{W:()=>S});var s,n=a(19309),r=a(68404),o=a(87723),i=a(32678),d=a(19383),l=a(5937),c=a(68694),p=a(98712),u=a(84719),h=a(61884),m=a(40920),g=a(38465),f=a(98163),v=a(42913),y=a(1667),x=a(39965),b=a(45916);function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(e){e.PanelJSON="panel",e.PanelData="data",e.DataFrames="frames"}(s||(s={}));const j=[{label:n.ag._({id:"dashboard.inspect-json.panel-json-label",message:"Panel JSON"}),description:n.ag._({id:"dashboard.inspect-json.panel-json-description",message:"The model saved in the dashboard JSON that configures how everything works."}),value:s.PanelJSON},{label:n.ag._({id:"dashboard.inspect-json.panel-data-label",message:"Panel data"}),description:n.ag._({id:"dashboard.inspect-json.panel-data-description",message:"The raw model passed to the panel visualization"}),value:s.PanelData},{label:n.ag._({id:"dashboard.inspect-json.dataframe-label",message:"DataFrame JSON (from Query)"}),description:n.ag._({id:"dashboard.inspect-json.dataframe-description",message:"Raw data without transformations and field config applied. "}),value:s.DataFrames}];class S extends r.PureComponent{constructor(e){super(e),w(this,"hasPanelJSON",void 0),w(this,"onSelectChanged",(async e=>{const t=D(await this.getJSONObject(e.value));this.setState({text:t,show:e.value})})),w(this,"onTextChanged",(e=>{this.setState({text:e})})),w(this,"onApplyPanelModel",(()=>{const{panel:e,dashboard:t,onClose:a}=this.props;if(this.hasPanelJSON){try{if(t.meta.canEdit){const a=JSON.parse(this.state.text);t.shouldUpdateDashboardPanelFromJSON(a,e),e.restoreModel(a),e.refresh(),f.h$.emit(d.SI.alertSuccess,["Panel model updated"])}else f.h$.emit(d.SI.alertError,["Unable to apply"])}catch(e){console.error("Error applying updates",e),f.h$.emit(d.SI.alertError,["Invalid JSON text"])}a()}})),w(this,"onShowHelpWizard",(()=>{const e=p.E1.getSearch();e.set("inspectTab",x.q.Help.toString()),p.E1.push("?"+e.toString())})),this.hasPanelJSON=!(!e.panel||!e.dashboard),this.state={show:this.hasPanelJSON?s.PanelJSON:s.DataFrames,text:this.hasPanelJSON?D(e.panel.getSaveModel()):D(e.data)}}async getJSONObject(e){const{data:t,panel:a}=this.props;if(e===s.PanelData)return t;if(e===s.DataFrames){let e=t;return a&&(null==t?void 0:t.state)===l.Gu.Done&&(e=await(0,i.z)(a.getQueryRunner().getData({withFieldConfig:!1,withTransforms:!1}))),(0,v.XJ)(e)}return this.hasPanelJSON&&e===s.PanelJSON?a.getSaveModel():{note:n.ag._({id:"dashboard.inspect-json.unknown",message:"Unknown Object: {show}",values:{show:e}})}}render(){const{dashboard:e}=this.props,{show:t,text:a}=this.state,r=this.hasPanelJSON?j:j.slice(1,j.length),i=j.find((e=>e.value===t)),d=t===s.PanelJSON,l=e&&e.meta.canEdit,p=(0,y.S)();return(0,b.jsxs)("div",{className:p.wrap,children:[(0,b.jsxs)("div",{className:p.toolbar,"aria-label":c.wl.components.PanelInspector.Json.content,children:[(0,b.jsx)(u.g,{label:n.ag._({id:"dashboard.inspect-json.select-source",message:"Select source"}),className:"flex-grow-1",children:(0,b.jsx)(h.Ph,{inputId:"select-source-dropdown",options:r,value:i,onChange:this.onSelectChanged})}),this.hasPanelJSON&&d&&l&&(0,b.jsx)(m.zx,{className:p.toolbarItem,onClick:this.onApplyPanelModel,children:"Apply"}),t===s.DataFrames&&(0,b.jsx)(m.zx,{className:p.toolbarItem,onClick:this.onShowHelpWizard,children:"Support"})]}),(0,b.jsx)("div",{className:p.content,children:(0,b.jsx)(o.Z,{disableWidth:!0,children:e=>{let{height:t}=e;return(0,b.jsx)(g.p,{width:"100%",height:t,language:"json",showLineNumbers:!0,showMiniMap:(a&&a.length)>100,value:a||"",readOnly:!d,onBlur:this.onTextChanged})}})})]})}}function D(e){let t="";try{t=JSON.stringify(e,null,2)}catch(e){e instanceof Error&&(e.toString().includes("RangeError")||e.toString().includes("allocation size overflow"))?f.h$.emit(d.SI.alertError,[e.toString(),"Cannot display JSON, the object is too big."]):f.h$.emit(d.SI.alertError,[e instanceof Error?e.toString():e])}return t}},59970:(e,t,a)=>{a.d(t,{f:()=>g});var s=a(19309),n=(a(68404),a(68694)),r=a(27549),o=a(14488),i=a(32025),d=a(49085),l=a(9617),c=a(40882),p=a(45916);const u=e=>{let{timeZone:t,name:a,stats:s}=e;const n=(0,l.l4)(),r=m(n);return s&&s.length?(0,p.jsxs)("div",{className:r.wrapper,children:[(0,p.jsx)("div",{className:"section-heading",children:a}),(0,p.jsx)("table",{className:"filter-table width-30",children:(0,p.jsx)("tbody",{children:s.map(((e,a)=>(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:e.displayName}),(0,p.jsx)("td",{className:r.cell,children:h(e,t,n)})]},`${e.displayName}-${a}`)))})})]}):null};function h(e,t,a){const s=(0,o.U)({field:{type:i.fS.number,config:e},theme:a,timeZone:t});return(0,d.zc)(s(e.value))}const m=(0,c.B)((e=>({wrapper:r.css`
      padding-bottom: ${e.spacing(2)};
    `,cell:r.css`
      text-align: right;
    `}))),g=e=>{var t;let{data:a,timeZone:r}=e;if(!a.request)return null;let o=[];const i=a.request.endTime?a.request.endTime-a.request.startTime:-1,d=(null===(t=a.timings)||void 0===t?void 0:t.dataProcessingTime)||-1;let l=0;for(const e of a.series)l+=e.length;i>0&&o.push({displayName:s.ag._({id:"dashboard.inspect-stats.request-time",message:"Total request time"}),value:i,unit:"ms"}),d>0&&o.push({displayName:s.ag._({id:"dashboard.inspect-stats.processing-time",message:"Data processing time"}),value:d,unit:"ms"}),o.push({displayName:s.ag._({id:"dashboard.inspect-stats.queries",message:"Number of queries"}),value:a.request.targets.length}),o.push({displayName:s.ag._({id:"dashboard.inspect-stats.rows",message:"Total number rows"}),value:l});let c=[];for(const e of a.series)e.meta&&e.meta.stats&&(c=c.concat(e.meta.stats));const h=s.ag._({id:"dashboard.inspect-stats.table-title",message:"Stats"}),m=s.ag._({id:"dashboard.inspect-stats.data-title",message:"Data source stats"});return(0,p.jsxs)("div",{"aria-label":n.wl.components.PanelInspector.Stats.content,children:[(0,p.jsx)(u,{timeZone:r,name:h,stats:o}),(0,p.jsx)(u,{timeZone:r,name:m,stats:c})]})}},73723:(e,t,a)=>{a.d(t,{D:()=>D});var s,n,r,o,i,d=a(27549),l=a(68404),c=a(4203),p=a(68694),u=a(68522),h=a(3965),m=a(48147),g=a(40920),f=a(18625),v=a(95967),y=a(5516),x=a(28659),b=a(64593),w=a(1667),j=a(45916);function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class D extends l.PureComponent{constructor(e){super(e),S(this,"formattedJson",void 0),S(this,"subs",new c.w0),S(this,"onPanelRefresh",(()=>{this.setState((e=>Object.assign({},e,{dsQuery:{isLoading:!0,response:{}}})))})),S(this,"setFormattedJson",(e=>{this.formattedJson=e})),S(this,"getTextForClipboard",(()=>JSON.stringify(this.formattedJson,null,2))),S(this,"onToggleExpand",(()=>{this.setState((e=>Object.assign({},e,{allNodesExpanded:!this.state.allNodesExpanded})))})),S(this,"onToggleMocking",(()=>{this.setState((e=>Object.assign({},e,{isMocking:!this.state.isMocking})))})),S(this,"getNrOfOpenNodes",(()=>null===this.state.allNodesExpanded?3:this.state.allNodesExpanded?20:1)),S(this,"setMockedResponse",(e=>{const t=e.target.value;this.setState((e=>Object.assign({},e,{mockedResponse:t})))})),this.state={executedQueries:[],allNodesExpanded:null,isMocking:!1,mockedResponse:"",dsQuery:{isLoading:!1,response:{}}}}componentDidMount(){const{panel:e}=this.props;this.subs.add(x.ae.getInspectorStream().subscribe({next:e=>this.onDataSourceResponse(e)})),e&&(this.subs.add(e.events.subscribe(h.U5,this.onPanelRefresh)),this.updateQueryList())}componentDidUpdate(e){this.props.data!==e.data&&this.updateQueryList()}updateQueryList(){const{data:e}=this.props,t=[];if(null!=e&&e.length){let a;e.forEach(((e,s)=>{var n;const r=null===(n=e.meta)||void 0===n?void 0:n.executedQueryString;if(r){var o;const s=e.refId||"?";(null===(o=a)||void 0===o?void 0:o.refId)===s?(a.frames++,a.rows+=e.length):(a={refId:s,frames:0,rows:e.length,query:r},t.push(a))}}))}this.setState({executedQueries:t})}componentWillUnmount(){this.subs.unsubscribe()}onDataSourceResponse(e){var t;null!==(t=e.config)&&void 0!==t&&t.hideFromInspector||((e=Object.assign({},e)).headers&&delete e.headers,e.config&&(e.request=e.config,delete e.config,delete e.request.transformRequest,delete e.request.transformResponse,delete e.request.paramSerializer,delete e.request.jsonpCallbackParam,delete e.request.headers,delete e.request.requestId,delete e.request.inspect,delete e.request.retry,delete e.request.timeout),e.data&&(e.response=e.data,delete e.config,delete e.data,delete e.status,delete e.statusText,delete e.ok,delete e.url,delete e.redirected,delete e.type,delete e.$$config),this.setState((t=>Object.assign({},t,{dsQuery:{isLoading:!1,response:e}}))))}renderExecutedQueries(e){if(!e.length)return null;const t={refId:d.css`
        font-weight: ${m.v.theme.typography.weight.semibold};
        color: ${m.v.theme.colors.textBlue};
        margin-right: 8px;
      `};return(0,j.jsx)("div",{children:e.map((e=>(0,j.jsxs)(u.Stack,{gap:1,direction:"column",children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("span",{className:t.refId,children:[e.refId,":"]}),e.frames>1&&(0,j.jsxs)("span",{children:[e.frames," frames, "]}),(0,j.jsxs)("span",{children:[e.rows," rows"]})]}),(0,j.jsx)("pre",{children:e.query})]},e.refId)))})}render(){const{allNodesExpanded:e,executedQueries:t}=this.state,{panel:a,onRefreshQuery:d}=this.props,{response:l,isLoading:c}=this.state.dsQuery,u=this.getNrOfOpenNodes(),h=(0,w.S)(),m=Object.keys(l).length>0;return a&&!(0,b.sY)(a.plugin)?null:(0,j.jsxs)("div",{className:h.wrap,children:[(0,j.jsxs)("div",{"aria-label":p.wl.components.PanelInspector.Query.content,children:[s||(s=(0,j.jsx)("h3",{className:"section-heading",children:"Query inspector"})),n||(n=(0,j.jsx)("p",{className:"small muted",children:"Query inspector allows you to view raw request and response. To collect this data Grafana needs to issue a new query. Click refresh button below to trigger a new query."}))]}),this.renderExecutedQueries(t),(0,j.jsxs)("div",{className:h.toolbar,children:[(0,j.jsx)(g.zx,{icon:"sync",onClick:d,"aria-label":p.wl.components.PanelInspector.Query.refreshButton,children:"Refresh"}),m&&e&&(0,j.jsx)(g.zx,{icon:"minus",variant:"secondary",className:h.toolbarItem,onClick:this.onToggleExpand,children:"Collapse all"}),m&&!e&&(0,j.jsx)(g.zx,{icon:"plus",variant:"secondary",className:h.toolbarItem,onClick:this.onToggleExpand,children:"Expand all"}),m&&(0,j.jsx)(f.m,{getText:this.getTextForClipboard,className:h.toolbarItem,icon:"copy",variant:"secondary",children:"Copy to clipboard"}),r||(r=(0,j.jsx)("div",{className:"flex-grow-1"}))]}),(0,j.jsxs)("div",{className:h.content,children:[c&&(o||(o=(0,j.jsx)(v.u,{text:"Loading query inspector..."}))),!c&&m&&(0,j.jsx)(y.g,{json:l,open:u,onDidRender:this.setFormattedJson}),!c&&!m&&(i||(i=(0,j.jsx)("p",{className:"muted",children:"No request and response collected yet. Hit refresh button"})))]})]})}}},1667:(e,t,a)=>{a.d(t,{S:()=>o});var s=a(27549),n=a(40882),r=a(78837);const o=(0,n.B)((()=>({wrap:s.css`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      flex: 1 1 0;
    `,toolbar:s.css`
      display: flex;
      width: 100%;
      flex-grow: 0;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: ${r.vc.theme.spacing.sm};
    `,toolbarItem:s.css`
      margin-left: ${r.vc.theme.spacing.md};
    `,content:s.css`
      flex-grow: 1;
      height: 100%;
      overflow: scroll;
    `,editor:s.css`
      font-family: monospace;
      height: 100%;
      flex-grow: 1;
    `,viewer:s.css`
      overflow: scroll;
    `,dataFrameSelect:s.css`
      flex-grow: 2;
    `,leftActions:s.css`
      display: flex;
      flex-grow: 1;

      max-width: 85%;
      @media (max-width: 1345px) {
        max-width: 75%;
      }
    `,options:s.css`
      padding-top: ${r.vc.theme.spacing.sm};
    `,dataDisplayOptions:s.css`
      flex-grow: 1;
      min-width: 300px;
      margin-right: ${r.vc.theme.spacing.sm};
    `,selects:s.css`
      display: flex;
      > * {
        margin-right: ${r.vc.theme.spacing.sm};
      }
    `})))},39965:(e,t,a)=>{let s;a.d(t,{q:()=>s}),function(e){e.Data="data",e.Meta="meta",e.Error="error",e.Stats="stats",e.JSON="json",e.Query="query",e.Actions="actions",e.Help="help"}(s||(s={}))},56303:(e,t,a)=>{a.d(t,{l:()=>c});var s=a(68404),n=a(99464),r=a(21295),o=a(7501),i=a(359),d=a(45916);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class c extends s.PureComponent{constructor(){super(...arguments),l(this,"onRemoveQuery",(e=>{this.props.onQueriesChange(this.props.queries.filter((t=>t!==e)))})),l(this,"onDragStart",(e=>{const{queries:t,dsSettings:a}=this.props;(0,r.ff)("query_row_reorder_started",{startIndex:e.source.index,numberOfQueries:t.length,datasourceType:a.type})})),l(this,"onDragEnd",(e=>{const{queries:t,onQueriesChange:a,dsSettings:s}=this.props;if(!e||!e.destination)return;const n=e.source.index,o=e.destination.index;if(n===o)return void(0,r.ff)("query_row_reorder_canceled",{startIndex:n,endIndex:o,numberOfQueries:t.length,datasourceType:s.type});const i=Array.from(t),[d]=i.splice(n,1);i.splice(o,0,d),a(i),(0,r.ff)("query_row_reorder_ended",{startIndex:n,endIndex:o,numberOfQueries:t.length,datasourceType:s.type})}))}onChangeQuery(e,t){const{queries:a,onQueriesChange:s}=this.props;s(a.map(((a,s)=>s===t?e:a)))}onDataSourceChange(e,t){const{queries:a,onQueriesChange:s}=this.props;this.props.onDatasourceChange&&this.props.onDatasourceChange(e,a[t]),s(a.map(((a,s)=>{if(s!==t)return a;const n={type:e.type,uid:e.uid};if(a.datasource){const t=(0,o.F)().getInstanceSettings(a.datasource);if((null==t?void 0:t.type)===e.type)return Object.assign({},a,{datasource:n})}return{refId:a.refId,hide:a.hide,datasource:n}})))}render(){const{dsSettings:e,data:t,queries:a,app:s,history:r,eventBus:o,onAddQuery:l,onRunQueries:c,onQueryCopied:u,onQueryRemoved:h,onQueryToggled:m}=this.props;return(0,d.jsx)(n.Z5,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd,children:(0,d.jsx)(n.bK,{droppableId:"transformations-list",direction:"vertical",children:n=>(0,d.jsxs)("div",Object.assign({ref:n.innerRef},n.droppableProps,{children:[a.map(((n,g)=>{const f=p(n,e),v=e.meta.mixed?e=>this.onDataSourceChange(e,g):void 0;return(0,d.jsx)(i.x,{id:n.refId,index:g,data:t,query:n,dataSource:f,onChangeDataSource:v,onChange:e=>this.onChangeQuery(e,g),onRemoveQuery:this.onRemoveQuery,onAddQuery:l,onRunQuery:c,onQueryCopied:u,onQueryRemoved:h,onQueryToggled:m,queries:a,app:s,history:r,eventBus:o},n.refId)})),n.placeholder]}))})})}}const p=(e,t)=>{if(!e.datasource)return t;return(0,o.F)().getInstanceSettings(e.datasource)||t}},46461:(e,t,a)=>{a.d(t,{Wp:()=>i,c6:()=>l,xM:()=>o});var s=a(94036),n=a(32025),r=a(11723);function o(e){const t=e.spans.map((t=>{return a=t,s=e.processes,{spanID:a.spanID,traceID:a.traceID,parentSpanID:null===(n=a.references)||void 0===n||null===(r=n.find((e=>"CHILD_OF"===e.refType)))||void 0===r?void 0:r.spanID,operationName:a.operationName,startTime:a.startTime/1e3,duration:a.duration/1e3,logs:a.logs.map((e=>Object.assign({},e,{timestamp:e.timestamp/1e3}))),tags:a.tags,warnings:null!==(o=a.warnings)&&void 0!==o?o:void 0,stackTraces:a.stackTraces,serviceName:s[a.processID].serviceName,serviceTags:s[a.processID].tags};var a,s,n,r,o})),a=new s.v({fields:[{name:"traceID",type:n.fS.string},{name:"spanID",type:n.fS.string},{name:"parentSpanID",type:n.fS.string},{name:"operationName",type:n.fS.string},{name:"serviceName",type:n.fS.string},{name:"serviceTags",type:n.fS.other},{name:"startTime",type:n.fS.number},{name:"duration",type:n.fS.number},{name:"logs",type:n.fS.other},{name:"tags",type:n.fS.other},{name:"warnings",type:n.fS.other},{name:"stackTraces",type:n.fS.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}});for(const e of t)a.add(e);return a}function i(e,t){const a=new s.v({fields:[{name:"traceID",type:n.fS.string,config:{unit:"string",displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}"}}}]}},{name:"traceName",type:n.fS.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:n.fS.time,config:{displayNameFromDS:"Start time"}},{name:"duration",type:n.fS.number,config:{displayNameFromDS:"Duration",unit:"µs"}}],meta:{preferredVisualisationType:"table"}}),r=e.map(d).sort(((e,t)=>(null==t?void 0:t.startTime)-(null==e?void 0:e.startTime)));for(const e of r)a.add(e);return a}function d(e){const t=(0,r.R1)(e);if(t)return{traceID:t.traceID,startTime:t.startTime/1e3,duration:t.duration,traceName:t.traceName}}function l(e){let t={traceID:"",spans:[],processes:{},warnings:null},a=[];for(let s=0;s<e.length;s++){const n=e.get(s);t.traceID||(t.traceID=n.traceID),a.find((e=>e===n.serviceName))||(a.push(n.serviceName),t.processes[`p${a.length}`]={serviceName:n.serviceName,tags:n.serviceTags}),t.spans.push({traceID:n.traceID,spanID:n.spanID,duration:1e3*n.duration,references:n.parentSpanID?[{refType:"CHILD_OF",spanID:n.parentSpanID,traceID:n.traceID}]:[],flags:0,logs:n.logs.map((e=>Object.assign({},e,{timestamp:1e3*e.timestamp}))),operationName:n.operationName,processID:Object.keys(t.processes).find((e=>t.processes[e].serviceName===n.serviceName))||"",startTime:1e3*n.startTime,tags:n.tags,warnings:n.warnings?n.warnings:null})}return{data:[t],total:0,limit:0,offset:0,errors:null}}},93829:(e,t,a)=>{a.d(t,{H:()=>p,m:()=>o});var s=a(82897),n=a(94036),r=a(32025);function o(e){const t=e.map(i),a=new n.v({fields:[{name:"traceID",type:r.fS.string},{name:"spanID",type:r.fS.string},{name:"parentSpanID",type:r.fS.string},{name:"operationName",type:r.fS.string},{name:"serviceName",type:r.fS.string},{name:"serviceTags",type:r.fS.other},{name:"startTime",type:r.fS.number},{name:"duration",type:r.fS.number},{name:"logs",type:r.fS.other},{name:"tags",type:r.fS.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"zipkin"}}});for(const e of t)a.add(e);return a}function i(e){var t,a,s,n;const r={traceID:e.traceId,spanID:e.id,parentSpanID:e.parentId,operationName:e.name,serviceName:(null===(t=e.localEndpoint)||void 0===t?void 0:t.serviceName)||(null===(a=e.remoteEndpoint)||void 0===a?void 0:a.serviceName)||"unknown",serviceTags:l(e),startTime:e.timestamp/1e3,duration:e.duration/1e3,logs:null!==(s=null===(n=e.annotations)||void 0===n?void 0:n.map(d))&&void 0!==s?s:[],tags:Object.keys(e.tags||{}).reduce(((t,a)=>"error"===a?(t.push({key:"error",value:!0}),t.push({key:"errorValue",value:e.tags.error}),t):(t.push({key:a,value:e.tags[a]}),t)),[])};var o,i;e.kind&&(r.tags=[{key:"kind",value:e.kind},...null!==(o=r.tags)&&void 0!==o?o:[]]);e.shared&&(r.tags=[{key:"shared",value:e.shared},...null!==(i=r.tags)&&void 0!==i?i:[]]);return r}function d(e){return{timestamp:e.timestamp,fields:[{key:"annotation",value:e.value}]}}function l(e){const t=e.localEndpoint||e.remoteEndpoint;return t?[c("ipv4",t.ipv4),c("ipv6",t.ipv6),c("port",t.port),c("endpointType",e.localEndpoint?"local":"remote")].filter(s.identity):[]}function c(e,t){if(t)return{key:e,value:t}}const p=e=>{let t=[];for(let n=0;n<e.length;n++){var a,s;const r=e.get(n);t.push(Object.assign({traceId:r.traceID,parentId:r.parentSpanID,name:r.operationName,id:r.spanID,timestamp:1e3*r.startTime,duration:1e3*r.duration},u(r),{annotations:r.logs.length?r.logs.map((e=>({timestamp:e.timestamp,value:e.fields[0].value}))):void 0,tags:r.tags.length?r.tags.filter((e=>"kind"!==e.key&&"endpointType"!==e.key&&"shared"!==e.key)).reduce(((e,t)=>"error"===t.key?Object.assign({},e,{[t.key]:r.tags.find((e=>"errorValue"===e.key)).value||""}):Object.assign({},e,{[t.key]:t.value})),{}):void 0,kind:null===(a=r.tags.find((e=>"kind"===e.key)))||void 0===a?void 0:a.value,shared:null===(s=r.tags.find((e=>"shared"===e.key)))||void 0===s?void 0:s.value}))}return t},u=e=>{var t,a,s,n;const r="local"===(null===(t=e.serviceTags.find((e=>"endpointType"===e.key)))||void 0===t?void 0:t.value)?"localEndpoint":"remoteEndpoint";return"unknown"!==e.serviceName?{[r]:{serviceName:e.serviceName,ipv4:null===(a=e.serviceTags.find((e=>"ipv4"===e.key)))||void 0===a?void 0:a.value,ipv6:null===(s=e.serviceTags.find((e=>"ipv6"===e.key)))||void 0===s?void 0:s.value,port:null===(n=e.serviceTags.find((e=>"port"===e.key)))||void 0===n?void 0:n.value}}:void 0}}}]);
//# sourceMappingURL=7837.92a2a929931c23da47b3.js.map