(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[890],{19982:(e,t,a)=>{"use strict";a.d(t,{et:()=>i,fy:()=>l,nO:()=>o,np:()=>u});var r=a(94036),n=a(99835),s=a(32025);function i(e){e.sort(((e,t)=>e[0]-t[0]));return e.reduce(((e,t)=>{if(!e.length)return[t];const a=e.slice(-1)[0],[r,n]=a,[s,i]=t;return i<n?e:s>n?[...e,t]:[...e.slice(0,-1),[r,i]]}),[]).reduce(((e,t)=>e+(t[1]-t[0])),0)}function o(e){const t={};let a;for(let r=0;a=e(r),a;r++){t[a.id]?t[a.id].span=a.span:t[a.id]={span:a.span,children:[]};for(const e of a.parentIds)e&&(t[e]?t[e].children.push(a.id):t[e]={span:void 0,children:[a.id]})}return t}function l(e,t,a){return{main:`${c(e)}ms (${c(e/t*100)}%)`,secondary:`${c(a)}ms (${c(a/e*100)}%)`}}function c(e){return parseFloat(e.toFixed(2))}function u(){return[new r.v({fields:[{name:n.z.id,type:s.fS.string},{name:n.z.title,type:s.fS.string},{name:n.z.subTitle,type:s.fS.string},{name:n.z.mainStat,type:s.fS.string,config:{displayName:"Total time (% of trace)"}},{name:n.z.secondaryStat,type:s.fS.string,config:{displayName:"Self time (% of total)"}},{name:n.z.color,type:s.fS.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),new r.v({fields:[{name:n.z.id,type:s.fS.string},{name:n.z.target,type:s.fS.string},{name:n.z.source,type:s.fS.string}],meta:{preferredVisualisationType:"nodeGraph"}})]}},22518:(e,t,a)=>{"use strict";a.r(t),a.d(t,{plugin:()=>se});var r,n,s,i,o=a(12822),l=a(27549),c=a(68404),u=a(9617),p=a(45916);const d=e=>({anchorTag:l.css`
    color: ${e.colors.text.link};
  `,unorderedList:l.css`
    list-style-type: none;
  `});var f=a(48147),m=a(6251),h=a(11723),g=a(28239),v=a(4319),y=a(67211);var b=a(46965),S=a(78454),x=a(24643),D=a(54416),j=a(96380),T=a(46196),I=a(93921),w=a(25729),O=a(61884),N=a(1652),q=a(36537),C=a(58257),_=a(56340),k=a(27854),F=a.n(k);function J(e){if(!e)return"";const t=F().parse(e);return Object.keys(t).forEach((e=>{const a=t[e];"string"!=typeof a&&(t[e]=String(a))})),JSON.stringify(t)}function $(e){if(!e)return"";try{return F().stringify(JSON.parse(e))}catch{return e}}const z="e.g. 1.2s, 100ms, 500us",E={label:"All",value:void 0};function V(e){let{datasource:t,query:a,onChange:r}=e;const[n,s]=(0,c.useState)(),[i,o]=(0,c.useState)(),[u,d]=(0,c.useState)({services:!1,operations:!1}),f=(0,c.useCallback)((async function(e,a){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";d((e=>Object.assign({},e,{[a]:!0})));try{const n=await t.metadataRequest(e);if(!n)return[{label:`No ${a} found`,value:`No ${a} found`}];const s=n.sort().map((e=>({label:e,value:e})));return s.filter((e=>!!e.value&&(0,w.C)(e.value,r).found))}catch(e){return e instanceof Error&&(0,_.WI)((0,q.$l)((0,C.t_)("Error",e))),[]}finally{d((e=>Object.assign({},e,{[a]:!1})))}}),[t]);return(0,c.useEffect)((()=>{(async()=>{const e=await f("/api/services","services");a.service&&(0,I.J)().containsTemplate(a.service)&&e.push((0,T.E)(a.service)),s(e)})()}),[t,f,a.service]),(0,c.useEffect)((()=>{a.service&&(async()=>{const e=await f(`/api/services/${encodeURIComponent((0,I.J)().replace(a.service))}/operations`,"operations");a.operation&&(0,I.J)().containsTemplate(a.operation)&&e.push((0,T.E)(a.operation)),o([E,...e])})()}),[t,a.service,f,a.operation]),(0,p.jsxs)("div",{className:(0,l.css)({maxWidth:"500px"}),children:[(0,p.jsx)(S.Z,{children:(0,p.jsx)(x._,{label:"Service Name",labelWidth:14,grow:!0,children:(0,p.jsx)(O.Ph,{inputId:"service",options:n,onOpenMenu:()=>f("/api/services","services"),isLoading:u.services,value:(null==n?void 0:n.find((e=>(null==e?void 0:e.value)===a.service)))||void 0,placeholder:"Select a service",onChange:e=>r(Object.assign({},a,{service:null==e?void 0:e.value,operation:a.service!==(null==e?void 0:e.value)?void 0:a.operation})),menuPlacement:"bottom",isClearable:!0,"aria-label":"select-service-name",allowCustomValue:!0})})}),(0,p.jsx)(S.Z,{children:(0,p.jsx)(x._,{label:"Operation Name",labelWidth:14,grow:!0,disabled:!a.service,children:(0,p.jsx)(O.Ph,{inputId:"operation",options:i,onOpenMenu:()=>f(`/api/services/${encodeURIComponent((0,I.J)().replace(a.service))}/operations`,"operations"),isLoading:u.operations,value:(null==i?void 0:i.find((e=>e.value===a.operation)))||null,placeholder:"Select an operation",onChange:e=>r(Object.assign({},a,{operation:(null==e?void 0:e.value)||void 0})),menuPlacement:"bottom",isClearable:!0,"aria-label":"select-operation-name",allowCustomValue:!0})})}),(0,p.jsx)(S.Z,{children:(0,p.jsx)(x._,{label:"Tags",labelWidth:14,grow:!0,tooltip:"Values should be in logfmt.",children:(0,p.jsx)(N.I,{id:"tags",value:$(a.tags),placeholder:"http.status_code=200 error=true",onChange:e=>r(Object.assign({},a,{tags:e.currentTarget.value}))})})}),(0,p.jsx)(S.Z,{children:(0,p.jsx)(x._,{label:"Min Duration",labelWidth:14,grow:!0,children:(0,p.jsx)(N.I,{id:"minDuration",name:"minDuration",value:a.minDuration||"",placeholder:z,onChange:e=>r(Object.assign({},a,{minDuration:e.currentTarget.value}))})})}),(0,p.jsx)(S.Z,{children:(0,p.jsx)(x._,{label:"Max Duration",labelWidth:14,grow:!0,children:(0,p.jsx)(N.I,{id:"maxDuration",name:"maxDuration",value:a.maxDuration||"",placeholder:z,onChange:e=>r(Object.assign({},a,{maxDuration:e.currentTarget.value}))})})}),(0,p.jsx)(S.Z,{children:(0,p.jsx)(x._,{label:"Limit",labelWidth:14,grow:!0,tooltip:"Maximum number of returned results",children:(0,p.jsx)(N.I,{id:"limit",name:"limit",value:a.limit||"",type:"number",onChange:e=>r(Object.assign({},a,{limit:e.currentTarget.value?parseInt(e.currentTarget.value,10):void 0}))})})})]})}const L=e=>({container:l.css`
    width: 100%;
  `,fileDropzoneContainer:l.css`
    padding: ${e.spacing(2)};
  `});var R=a(82897),W=a(58799),M=a(71808),P=a(35778),U=a(14444),Z=a(35089),G=a(94036),Q=a(32025),A=a(6932),H=a(25857),B=a(75478),Y=a(99835),K=a(19982);function X(e){const{nodes:t,edges:a}=function(e){const t=[],a=[],r=function(e){let t=0,a=1/0;for(const r of e)r.startTime<a&&(a=r.startTime),r.startTime+r.duration>t&&(t=r.startTime+r.duration);return t-a}(e.spans),n=(0,K.nO)((t=>{var a;if(t>=e.spans.length)return;const r=e.spans[t];return{span:r,id:r.spanID,parentIds:(null===(a=r.references)||void 0===a?void 0:a.filter((e=>"CHILD_OF"===e.refType)).map((e=>e.spanID)))||[]}}));for(const l of e.spans){var s,i,o;const c=e.processes[l.processID],u=n[l.spanID].children.map((e=>{const t=n[e].span;return[t.startTime,t.startTime+t.duration]})),p=(0,K.et)(u),d=l.duration-p,f=(0,K.fy)(l.duration/1e3,r/1e3,d/1e3);t.push({[Y.z.id]:l.spanID,[Y.z.title]:null!==(s=null==c?void 0:c.serviceName)&&void 0!==s?s:"",[Y.z.subTitle]:l.operationName,[Y.z.mainStat]:f.main,[Y.z.secondaryStat]:f.secondary,[Y.z.color]:d/r});const m=null===(i=l.references)||void 0===i||null===(o=i.find((e=>"CHILD_OF"===e.refType)))||void 0===o?void 0:o.spanID;m&&n[m].span&&a.push({[Y.z.id]:m+"--"+l.spanID,[Y.z.target]:l.spanID,[Y.z.source]:m})}return{nodes:t,edges:a}}(e),[r,n]=(0,K.np)();for(const e of t)r.add(e);for(const e of a)n.add(e);return[r,n]}var ee=a(46461);function te(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class ae extends o.MF{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,B.$t)(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,I.J)();super(e),te(this,"uploadedJson",null),te(this,"nodeGraph",void 0),te(this,"spanBar",void 0),this.instanceSettings=e,this.timeSrv=t,this.templateSrv=a,this.nodeGraph=e.jsonData.nodeGraph}async metadataRequest(e,t){return(await(0,W.n)(this._request(e,t,{hideFromInspector:!0}))).data.data}isSearchFormValid(e){return!!e.service}query(e){const t=e.targets[0];if(!t)return(0,M.of)({data:[ne]});if("search"===t.queryType&&!this.isSearchFormValid(t))return(0,M.of)({error:{message:"You must select a service."},data:[]});if("search"!==t.queryType&&t.query)return this._request(`/api/traces/${encodeURIComponent(this.templateSrv.replace(t.query,e.scopedVars))}`).pipe((0,P.U)((e=>{var t,a,r;const n=null==e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a[0];if(!n)return{data:[ne]};let s=[(0,ee.xM)(n)];return null!==(r=this.nodeGraph)&&void 0!==r&&r.enabled&&s.push(...X(n)),{data:s}})));if("upload"===t.queryType){if(!this.uploadedJson)return(0,M.of)({data:[]});try{var a;const e=JSON.parse(this.uploadedJson).data[0];let t=[(0,ee.xM)(e)];return null!==(a=this.nodeGraph)&&void 0!==a&&a.enabled&&t.push(...X(e)),(0,M.of)({data:t})}catch(e){return(0,M.of)({error:{message:"The JSON file uploaded is not in a valid Jaeger format"},data:[]})}}let r=(0,R.pick)(this.applyVariables(t,e.scopedVars),["service","operation","tags","minDuration","maxDuration","limit"]),n=(0,R.pickBy)(r,R.identity);return"All"===n.operation&&(n=(0,R.omit)(n,"operation")),n.tags&&(n=Object.assign({},n,{tags:J(n.tags.toString())})),this._request("/api/traces",Object.assign({},n,this.getTimeRange(),{lookback:"custom"})).pipe((0,P.U)((e=>({data:[(0,ee.Wp)(e.data.data,this.instanceSettings)]}))))}interpolateVariablesInQueries(e,t){return e&&0!==e.length?e.map((e=>Object.assign({},e,{datasource:this.getRef()},this.applyVariables(e,t)))):[]}applyVariables(e,t){var a,r,n,s;let i=Object.assign({},e);return e.tags&&this.templateSrv.containsTemplate(e.tags)&&(i=Object.assign({},e,{tags:this.templateSrv.replace(e.tags,t)})),Object.assign({},i,{service:this.templateSrv.replace(null!==(a=e.service)&&void 0!==a?a:"",t),operation:this.templateSrv.replace(null!==(r=e.operation)&&void 0!==r?r:"",t),minDuration:this.templateSrv.replace(null!==(n=e.minDuration)&&void 0!==n?n:"",t),maxDuration:this.templateSrv.replace(null!==(s=e.maxDuration)&&void 0!==s?s:"",t)})}async testDatasource(){return(0,W.n)(this._request("/api/services").pipe((0,P.U)((e=>{var t;return((null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[]).length>0?{status:"success",message:"Data source connected and services found."}:{status:"error",message:"Data source connected, but no services received. Verify that Jaeger is configured properly."}})),(0,U.K)((e=>{let t="Jaeger: ";return e.statusText?t+=e.statusText:t+="Cannot connect to Jaeger",e.status&&(t+=`. ${e.status}`),e.data&&e.data.message?t+=`. ${e.data.message}`:e.data&&(t+=`. ${JSON.stringify(e.data)}`),(0,M.of)({status:"error",message:t})}))))}getTimeRange(){const e=this.timeSrv.timeRange();return{start:re(e.from,!1),end:re(e.to,!0)}}getQueryDisplayText(e){return e.query||""}_request(e,t,a){const r=t?(0,H.tW)(t):"",n=`${this.instanceSettings.url}${e}${r.length?`?${r}`:""}`,s=Object.assign({},a,{url:n});return(0,A.i)().fetch(s)}}function re(e,t){return"string"==typeof e&&(e=Z.parse(e,t)),1e3*e.valueOf()}const ne=new G.v({fields:[{name:"trace",type:Q.fS.trace,values:[]}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}}),se=new o.hf(ae).setConfigEditor((e=>{let{options:t,onOptionsChange:a}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.E,{defaultUrl:"http://localhost:16686",dataSourceConfig:t,showAccessOptions:!1,onChange:a}),(0,p.jsx)("div",{className:"gf-form-group",children:(0,p.jsx)(v.Z,{options:t,onOptionsChange:a})}),f.v.featureToggles.traceToMetrics?(0,p.jsx)("div",{className:"gf-form-group",children:(0,p.jsx)(y.F,{options:t,onOptionsChange:a})}):null,(0,p.jsx)("div",{className:"gf-form-group",children:(0,p.jsx)(g.n,{options:t,onOptionsChange:a})}),(0,p.jsx)("div",{className:"gf-form-group",children:(0,p.jsx)(h.e6,{options:t,onOptionsChange:a})})]})})).setQueryEditor((function(e){var t;let{datasource:a,query:r,onChange:n,onRunQuery:s}=e;const i=(0,u.wW)(L),o=e=>{const t=Object.assign({},r,{query:e});n(t)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:i.container,children:[(0,p.jsx)(S.Z,{children:(0,p.jsx)(x._,{label:"Query type",children:(0,p.jsx)(j.S,{options:[{value:"search",label:"Search"},{value:void 0,label:"TraceID"},{value:"upload",label:"JSON File"}],value:r.queryType,onChange:e=>n(Object.assign({},r,{queryType:e})),size:"md"})})}),(()=>{switch(r.queryType){case"search":return t||(t=(0,p.jsx)(V,{datasource:a,query:r,onChange:n}));case"upload":return(0,p.jsx)("div",{className:i.fileDropzoneContainer,children:(0,p.jsx)(b.Yo,{options:{multiple:!1},onLoad:e=>{a.uploadedJson=e,s()}})});default:return(0,p.jsx)(S.Z,{children:(0,p.jsx)(x._,{label:"Trace ID",labelWidth:14,grow:!0,children:(0,p.jsx)(D.q,{query:r.query,onChange:o,onRunQuery:s,onBlur:()=>{},placeholder:"Enter a Trace ID (run with Shift+Enter)",portalOrigin:"jaeger"})})})}})()]})})})).setQueryEditorHelp((function(){const e=(0,u.wW)(d);return(0,p.jsxs)(p.Fragment,{children:[r||(r=(0,p.jsx)("h2",{id:"jaeger-cheat-sheet",children:"Jaeger Cheat Sheet"})),(0,p.jsxs)("p",{children:["This cheat sheet provides a quick overview of the query types that are available. For more details about the Jaeger data source, check out"," ",(0,p.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/datasources/jaeger",target:"_blank",rel:"noreferrer",className:e.anchorTag,children:"the documentation"}),"."]}),n||(n=(0,p.jsx)("hr",{})),(0,p.jsxs)("ul",{className:e.unorderedList,children:[s||(s=(0,p.jsx)("li",{children:"Search - filter traces by service name. Addtionally, you can filter by tags or min/max duration, as well as limit the number of traces that are returned."})),i||(i=(0,p.jsx)("li",{children:"TraceID - if you have a trace ID, simply enter the trace ID to see the trace."})),(0,p.jsxs)("li",{children:["JSON File - you can upload a JSON file that contains a single trace to visualize it. If the file has multiple traces then the first trace is used for visualization. An example of a valid JSON file can be found in"," ",(0,p.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/datasources/jaeger/#upload-json-trace-file",target:"_blank",rel:"noreferrer",className:e.anchorTag,children:"this section"})," ","of the documentation."]})]})]})}))},46461:(e,t,a)=>{"use strict";a.d(t,{Wp:()=>o,c6:()=>c,xM:()=>i});var r=a(94036),n=a(32025),s=a(11723);function i(e){const t=e.spans.map((t=>{return a=t,r=e.processes,{spanID:a.spanID,traceID:a.traceID,parentSpanID:null===(n=a.references)||void 0===n||null===(s=n.find((e=>"CHILD_OF"===e.refType)))||void 0===s?void 0:s.spanID,operationName:a.operationName,startTime:a.startTime/1e3,duration:a.duration/1e3,logs:a.logs.map((e=>Object.assign({},e,{timestamp:e.timestamp/1e3}))),tags:a.tags,warnings:null!==(i=a.warnings)&&void 0!==i?i:void 0,stackTraces:a.stackTraces,serviceName:r[a.processID].serviceName,serviceTags:r[a.processID].tags};var a,r,n,s,i})),a=new r.v({fields:[{name:"traceID",type:n.fS.string},{name:"spanID",type:n.fS.string},{name:"parentSpanID",type:n.fS.string},{name:"operationName",type:n.fS.string},{name:"serviceName",type:n.fS.string},{name:"serviceTags",type:n.fS.other},{name:"startTime",type:n.fS.number},{name:"duration",type:n.fS.number},{name:"logs",type:n.fS.other},{name:"tags",type:n.fS.other},{name:"warnings",type:n.fS.other},{name:"stackTraces",type:n.fS.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}});for(const e of t)a.add(e);return a}function o(e,t){const a=new r.v({fields:[{name:"traceID",type:n.fS.string,config:{unit:"string",displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}"}}}]}},{name:"traceName",type:n.fS.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:n.fS.time,config:{displayNameFromDS:"Start time"}},{name:"duration",type:n.fS.number,config:{displayNameFromDS:"Duration",unit:"µs"}}],meta:{preferredVisualisationType:"table"}}),s=e.map(l).sort(((e,t)=>(null==t?void 0:t.startTime)-(null==e?void 0:e.startTime)));for(const e of s)a.add(e);return a}function l(e){const t=(0,s.R1)(e);if(t)return{traceID:t.traceID,startTime:t.startTime/1e3,duration:t.duration,traceName:t.traceName}}function c(e){let t={traceID:"",spans:[],processes:{},warnings:null},a=[];for(let r=0;r<e.length;r++){const n=e.get(r);t.traceID||(t.traceID=n.traceID),a.find((e=>e===n.serviceName))||(a.push(n.serviceName),t.processes[`p${a.length}`]={serviceName:n.serviceName,tags:n.serviceTags}),t.spans.push({traceID:n.traceID,spanID:n.spanID,duration:1e3*n.duration,references:n.parentSpanID?[{refType:"CHILD_OF",spanID:n.parentSpanID,traceID:n.traceID}]:[],flags:0,logs:n.logs.map((e=>Object.assign({},e,{timestamp:1e3*e.timestamp}))),operationName:n.operationName,processID:Object.keys(t.processes).find((e=>t.processes[e].serviceName===n.serviceName))||"",startTime:1e3*n.startTime,tags:n.tags,warnings:n.warnings?n.warnings:null})}return{data:[t],total:0,limit:0,offset:0,errors:null}}},57739:(e,t)=>{e.exports=function(e){return null==e&&(e={}),function(t,a,r){return t._body?r():t.header("content-type")===e.contentType?(t._body=!0,t.body=t.body||{},n="",t.setEncoding("utf8"),t.on("data",(function(e){return n+=e})),void t.on("end",(function(){try{var a=[];n.trim().split("\n").forEach((function(t){a.push(e.parser(t))})),t.body=a}catch(e){return e.body=n,e.status=400,r(e)}return r()}))):r();var n}}},26362:(e,t,a)=>{a(20703),a(12402),a(96137).Readable;var r=a(96137).PassThrough,n=a(27854);e.exports=function(e){null==e&&(e={});var t=e.contentType||"application/logplex-1";return function(e,a,s){return e._body?s():e.header("content-type")===t?(e._body=!0,e.body=new r({objectMode:!0}),e.pipe(n.streamParser()).pipe(e.body),s()):s()}}},30148:(e,t)=>{t.debug=!1,t.parse=function(e){var a="",r="",n=!1,s=!1,i=!1,o=!1,l={},c=t.debug;"\n"==e[e.length-1]&&(e=e.slice(0,e.length-1));for(var u=0;u<=e.length;u++){if(" "==e[u]&&!i||u==e.length){if(n&&a.length>0?l[a]=!0:s&&("true"==r?r=!0:"false"==r?r=!1:""!==r||o||(r=null),l[a]=r,r=""),u==e.length)break;n=!1,s=!1,i=!1,o=!1}"="!=e[u]||i?"\\"==e[u]?(r+=e[++u],c&&console.log("escape: "+e[u])):'"'==e[u]?(o=!0,i=!i,c&&console.log("in quote: "+i)):" "==e[u]||s||n?n?(c&&console.log("add to key: "+e[u]),a+=e[u]):s&&(c&&console.log("add to value: "+e[u]),r+=e[u]):(c&&console.log("start key with: "+e[u]),n=!0,a=e[u]):(c&&console.log("split"),n=!1,s=!0)}return l}},35021:(e,t,a)=>{t.log=function(e,t){this.stream=this.stream||process.stdout,null==t&&(t=this.stream);var a=Object.assign({},this.defaultData,e);if(this.timers)for(var r in this.timers){var n=(new Date).getTime();a[r]=(n-this.timers[r]).toString()+"ms"}t.write(this.stringify(a)+"\n")},t.time=function(e){var t=a(27854),r=(new Date).getTime(),n=(e=e||"elapsed",new t);return n.stream=this.stream,n.defaultData=this.defaultData,n.timers=Object.assign({},this.timers),n.timers[e]=r,n},t.namespace=function(e){var t=new(a(27854)),r=Object.assign({},this.defaultData,e);return t.stream=this.stream,t.defaultData=r,t.timers=this.timers,t},t.error=function(e,t){this.maxErrorLines=this.maxErrorLines||10,void 0===t&&(t=Math.random().toString().slice(2,12));var a=this.namespace({error:!0,id:t,now:(new Date).toISOString()});if(a.log({message:e.message}),e.stack){var r=e.stack.split("\n");for(var n in r){if(n>=this.maxErrorLines)break;a.log({line:n,trace:r[n]})}}}},88464:(e,t)=>{var a=function(e,t){if("function"==typeof e.path)var a=e.path();else a=e.originalUrl||e.path||e.url;var r=e.header&&e.header("x-forwarded-for"),n=e.header&&e.header("x-request-id"),s={ip:e.ip||r||e.connection.remoteAddress,time:(new Date).toISOString(),method:e.method,path:a,status:t.statusCode};return n&&(s.request_id=n),t.get&&(s.content_length=t.get("content-length"),s.content_type=t.get("content-type")),s};t.init=function(e,t,r){return this.logger=e,r||t?r||("function"==typeof t?(r=t,t={}):r=a):(r=a,t={}),(t=t||{}).immediate?function(e,t,a){return function(t,r,n){var s=a(t,r);e.log(s),n()}}(e,0,r):function(e,t,a){return function(r,n,s){var i=t.elapsed||"elapsed",o=e.time(i),l=n.end;n.end=function(e,t){var s=a(r,n);n.end=l,n.end(e,t),o.log(s)},s()}}(e,t,r)},t.commonFormatter=a},60233:(e,t,a)=>{var r=a(20703),n=a(12402),s=a(96137).PassThrough;t.streamParser=function(e){var t=new s,a=this,i=n((function(e){""!==e&&this.queue(a.parse(e))}));return t.on("pipe",(function(e){e.unpipe&&e.unpipe(this),this.transformStream=e.pipe(r()).pipe(i)})),t.pipe=function(e,t){return this.transformStream.pipe(e,t)},t},t.streamStringify=function(e){var t=this;if((e=e||{}).hasOwnProperty("delimiter"))var a=e.delimiter;else a="\n";return n((function(e){this.queue(t.stringify(e)+a)}),(function(){this.queue(null)}))}},14476:(e,t)=>{t.stringify=function(e){var t="";for(var a in e){var r=e[a],n=!1;null==r?(n=!0,r=""):r=r.toString();var s=r.indexOf(" ")>-1||r.indexOf("=")>-1;(r.indexOf('"')>-1||r.indexOf("\\")>-1)&&(r=r.replace(/["\\]/g,"\\$&")),s&&(r='"'+r+'"'),""!==r||n||(r='""'),t+=a+"="+r+" "}return t.substring(0,t.length-1)}},27854:(e,t,a)=>{function r(){}e.exports=r;var n=a(60233),s=a(57739),i=a(26362),o=a(30148),l=a(35021),c=a(88464),u=a(14476);Object.assign(r.prototype,l),Object.assign(r.prototype,n),r.prototype.stringify=u.stringify,r.prototype.parse=o.parse,r.prototype.bodyParser=function(e){e||(e={});var t=e.contentType||"application/logplex-1";return s({contentType:t,parser:this.parse})},r.prototype.bodyParserStream=function(e){e||(e={});var t=e.contentType||"application/logplex-1";return i({contentType:t})},r.prototype.requestLogger=function(e,t){return c.init(this,e,t)},r.prototype.requestLogger.commonFormatter=c.commonFormatter,Object.assign(r,r.prototype)},20703:(e,t,a)=>{var r=a(12402),n=a(55011).StringDecoder;e.exports=function(e,t){var a=new n,s="";"function"==typeof e&&(t=e,e=null);e||(e=/\r?\n/);function i(e,a){if(t){try{a=t(a)}catch(t){return e.emit("error",t)}void 0!==a&&e.queue(a)}else e.queue(a)}function o(t,a){var r=(s+a).split(e);s=r.pop();for(var n=0;n<r.length;n++){i(t,r[n])}}return r((function(e){o(this,a.write(e))}),(function(){a.end&&o(this,a.end()),null!=s&&i(this,s),this.queue(null)}))}},12402:(e,t,a)=>{var r=a(55068);function n(e,t,a){e=e||function(e){this.queue(e)},t=t||function(){this.queue(null)};var n=!1,s=!1,i=[],o=!1,l=new r;function c(){for(;i.length&&!l.paused;){var e=i.shift();if(null===e)return l.emit("end");l.emit("data",e)}}function u(){l.writable=!1,t.call(l),!l.readable&&l.autoDestroy&&l.destroy()}return l.readable=l.writable=!0,l.paused=!1,l.autoDestroy=!(a&&!1===a.autoDestroy),l.write=function(t){return e.call(this,t),!l.paused},l.queue=l.push=function(e){return o||(null===e&&(o=!0),i.push(e),c()),l},l.on("end",(function(){l.readable=!1,!l.writable&&l.autoDestroy&&process.nextTick((function(){l.destroy()}))})),l.end=function(e){if(!n)return n=!0,arguments.length&&l.write(e),u(),l},l.destroy=function(){if(!s)return s=!0,n=!0,i.length=0,l.writable=l.readable=!1,l.emit("close"),l},l.pause=function(){if(!l.paused)return l.paused=!0,l},l.resume=function(){return l.paused&&(l.paused=!1,l.emit("resume")),c(),l.paused||l.emit("drain"),l},l}e.exports=n,n.through=n},96137:()=>{},55011:()=>{},55068:()=>{}}]);
//# sourceMappingURL=jaegerPlugin.964028c4c27f929b5d88.js.map