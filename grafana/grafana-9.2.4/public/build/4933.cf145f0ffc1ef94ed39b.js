"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4933],{65623:(a,e,i)=>{i.d(e,{Yb:()=>n,d5:()=>r});var t=i(48147);const n=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;const r=()=>function(){var a;const e=null===(a=t.v.licenseInfo)||void 0===a?void 0:a.trialExpiry;return!!(e&&e>0)}()&&t.v.featureToggles.featureHighlights},94933:(a,e,i)=>{i.d(e,{J_:()=>j,F5:()=>R,M9:()=>z,gv:()=>T,Kj:()=>G,bZ:()=>P,kY:()=>E,oe:()=>M});var t=i(15830),n=i(13924),r=i(6932),s=i(98712),o=i(36537),u=i(98163),c=i(28659),d=i(67436),l=i(32569),g=i(33500),p=i(58799),f=i(66728);const m=async a=>{try{return await(async a=>{const e=await(0,p.n)((0,c.i)().fetch({method:"GET",url:`/api/datasources/uid/${a}`,params:(0,f.y)(),showErrorAlert:!1}));if(e.ok)return e.data;throw Error(`Could not find data source by UID: "${a}"`)})(a)}catch(e){console.log(`Failed to lookup data source using UID "${a}"`)}try{return await(async a=>{const e=await(0,p.n)((0,c.i)().fetch({method:"GET",url:`/api/datasources/${a}`,params:(0,f.y)(),showErrorAlert:!1}));if(e.ok)return e.data;throw Error(`Could not find data source by ID: "${a}"`)})(a)}catch(e){console.log(`Failed to lookup data source using ID "${a}"`)}throw Error("Could not find data source")},h=a=>(0,c.i)().post("/api/datasources",a);var b=i(78507);function v(a,e){return a.filter((a=>a.name.toLowerCase()===e.toLowerCase())).length>0}function y(a,e){for(;v(a,e);)e=w(e)?`${k(e)}${i=S(e),isNaN(i)?1:i+1}`:`${e}-1`;var i;return e}function w(a){return a.endsWith("-",a.length-1)}function S(a){return parseInt(a.slice(-1),10)}function k(a){return a.slice(0,a.length-1)}var D=i(55261),x=i(87709),U=i(48147);function $(a){const e=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"iot",title:"Industrial & IoT",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter((a=>a)),i={},t={},n=[A({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize and explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),A({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize and explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),A({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize and explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),A({id:"grafana-servicenow-datasource",description:"ServiceNow integration and data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),A({id:"grafana-datadog-datasource",description:"DataDog integration and data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),A({id:"grafana-newrelic-datasource",description:"New Relic integration and data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),A({id:"grafana-mongodb-datasource",description:"MongoDB integration and data source",name:"MongoDB",imgUrl:"public/img/plugins/mongodb.svg"}),A({id:"grafana-snowflake-datasource",description:"Snowflake integration and data source",name:"Snowflake",imgUrl:"public/img/plugins/snowflake.svg"}),A({id:"grafana-wavefront-datasource",description:"Wavefront integration and data source",name:"Wavefront",imgUrl:"public/img/plugins/wavefront.svg"}),A({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration and data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"}),A({id:"grafana-saphana-datasource",description:"SAP HANA® integration and data source",name:"SAP HANA®",imgUrl:"public/img/plugins/sap_hana.png"}),A({id:"grafana-honeycomb-datasource",description:"Honeycomb integration and datasource",name:"Honeycomb",imgUrl:"public/img/plugins/honeycomb.png"}),A({id:"grafana-salesforce-datasource",description:"Salesforce integration and datasource",name:"Salesforce",imgUrl:"public/img/plugins/salesforce.svg"}),A({id:"grafana-jira-datasource",description:"Jira integration and datasource",name:"Jira",imgUrl:"public/img/plugins/jira_logo.png"}),A({id:"grafana-gitlab-datasource",description:"GitLab integration and datasource",name:"GitLab",imgUrl:"public/img/plugins/gitlab.svg"}),A({id:"grafana-splunk-monitoring-datasource",description:"SignalFx integration and datasource",name:"Splunk Infrastructure Monitoring",imgUrl:"public/img/plugins/signalfx-logo.svg"}),A({id:"grafana-azuredevops-datasource",description:"Azure Devops datasource",name:"Azure Devops",imgUrl:"public/img/plugins/azure-devops.png"})];for(const a of e)i[a.id]=a;for(const s of a){const a=n.find((a=>a.id===s.id));var r;if(s.enterprise||a)s.category="enterprise",s.unlicensed=!(0,x.v)("enterprise.plugins"),s.info.links=(null==a||null===(r=a.info)||void 0===r?void 0:r.links)||s.info.links;if(s.info.links)for(const a of s.info.links)a.name="Learn more";(e.find((a=>a.id===s.category))||i.other).plugins.push(s),t[s.id]=s}for(const a of e){if("cloud"===a.id&&a.plugins.push({id:"gcloud",name:"Grafana Cloud",type:D.zV.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus, and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===a.id)for(const e of n)t[e.id]||a.plugins.push(e);I(a.plugins)}return e.filter((a=>a.plugins.length>0))}function I(a){const e={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};a.sort(((a,i)=>{const t=e[a.id]||0,n=e[i.id]||0;return t>n?-1:t<n||a.name>i.name?1:-1}))}function A(a){return{id:a.id,name:a.name,type:D.zV.datasource,module:"phantom",baseUrl:"",info:{description:a.description,logos:{small:a.imgUrl,large:a.imgUrl},author:{name:"Grafana Labs"},links:[{url:U.v.pluginCatalogURL+a.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var C=i(7947),L=i(75375),Z=i(77197);const z=function(a){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{loadDataSource:T,loadDataSourceMeta:V,getDataSource:Z.f6,getDataSourceMeta:Z.G4,importDataSourcePlugin:g.nL};return async(i,t)=>{if(a)try{const n=await i(e.loadDataSource(a));await i(e.loadDataSourceMeta(n));const r=e.getDataSource(t().dataSources,a),s=e.getDataSourceMeta(t().dataSources,r.type),o=await e.importDataSourcePlugin(s);i((0,L.iZ)(o))}catch(a){a instanceof Error&&i((0,L.CT)(a))}else i((0,L.CT)(new Error("Invalid UID")))}},E=function(a){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getDatasourceSrv:d.ak,getBackendSrv:c.i};return async(i,t)=>{const s=await e.getDatasourceSrv().get(a);s.testDatasource&&(i((0,L.j_)()),e.getBackendSrv().withNoBackendCache((async()=>{try{const a=await s.testDatasource();i((0,L.ng)(a))}catch(e){let t,s;if(e instanceof n.ZA)t=e.message,s=e.details;else if((0,r.kW)(e)){var a;t=null!==(a=e.data.message)&&void 0!==a?a:`HTTP error ${e.statusText}`}else e instanceof Error&&(t=e.message);i((0,L.Aq)({message:t,details:s}))}})))}};function P(){return async a=>{const e=await(async()=>await(0,c.i)().get("/api/datasources"))();a((0,L.be)(e))}}function T(a){return async e=>{let i=await m(a);return a!==i.uid&&(window.location.href=t.u.assureBaseUrl(`/datasources/edit/${i.uid}`),i={}),e((0,L.rl)(i)),i}}function V(a){return async e=>{const i=await(0,l.a)(a.type),t=await(0,g.nL)(i),r=t.DataSourceClass.prototype instanceof n.CK,s=Object.assign({},i,{isBackend:i.backend||r});e((0,L.jS)(s)),t.meta=s,e((0,o.RL)((0,C.B1)(a,t)))}}function j(a){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.n.Edit;return async(i,t)=>{await i(P());const n=t().dataSources.dataSources,r=0===n.length,o={name:a.name,type:a.id,access:"proxy",isDefault:r};v(n,o.name)&&(o.name=y(n,o.name));const c=await h(o);await(0,d.ak)().reload(),await u.Vt.fetchUserPermissions(),s.E1.push(e.replace(/:uid/gi,c.datasource.uid))}}function G(){return async a=>{a((0,L.Ww)());const e=await(0,c.i)().get("/api/plugins",{enabled:1,type:"datasource"}),i=$(e);a((0,L.wZ)({plugins:e,categories:i}))}}function M(a){return async e=>(await(a=>(0,c.i)().put(`/api/datasources/uid/${a.uid}`,a))(a),await(0,d.ak)().reload(),e(T(a.uid)))}function R(){return async(a,e)=>{const{uid:i}=e().dataSources.dataSource;await(a=>(0,c.i)().delete(`/api/datasources/uid/${a}`))(i),await(0,d.ak)().reload(),s.E1.push("/datasources")}}},7947:(a,e,i)=>{i.d(e,{B1:()=>l,nI:()=>g,xG:()=>p});var t=i(55261),n=i(87709),r=i(17963),s=i(78837),o=i(98163),u=i(65623),c=i(47570);const d="Loading";function l(a,e){const i=e.meta,t=s.ZP.featureToggles.featureHighlights,l={img:i.info.logos.large,id:"datasource-"+a.uid,subTitle:`Type: ${i.name}`,url:"",text:a.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"sliders-v-alt",id:`datasource-settings-${a.uid}`,text:"Settings",url:`datasources/edit/${a.uid}/`}]};if(e.configPages)for(const i of e.configPages)l.children.push({active:!1,text:i.title,icon:i.icon,url:`datasources/edit/${a.uid}/?page=${i.id}`,id:`datasource-page-${i.id}`});i.includes&&void 0!==i.includes.find((a=>"dashboard"===a.type))&&o.Vt.hasRole("Admin")&&l.children.push({active:!1,icon:"apps",id:`datasource-dashboards-${a.uid}`,text:"Dashboards",url:`datasources/edit/${a.uid}/dashboards`});const g=a.type===d,p="feature-highlights-data-source-permissions-badge",f={active:!1,icon:"lock",id:`datasource-permissions-${a.uid}`,text:"Permissions",url:`datasources/edit/${a.uid}/permissions`};(0,u.d5)()&&!g&&(f.tabSuffix=()=>(0,r.Z)({experimentId:p,eventVariant:"trial"})),(0,n.v)("dspermissions")?o.Vt.hasPermission(c.bW.DataSourcesPermissionsRead)&&l.children.push(f):t&&!g&&l.children.push(Object.assign({},f,{url:f.url+"/upgrade",tabSuffix:()=>(0,r.Z)({experimentId:p})}));const m="feature-highlights-data-source-insights-badge",h={active:!1,icon:"info-circle",id:`datasource-insights-${a.uid}`,text:"Insights",url:`datasources/edit/${a.uid}/insights`};(0,u.d5)()&&!g&&(h.tabSuffix=()=>(0,r.Z)({experimentId:m,eventVariant:"trial"})),(0,n.v)("analytics")?o.Vt.hasPermission(c.bW.DataSourcesInsightsRead)&&l.children.push(h):t&&!g&&l.children.push(Object.assign({},h,{url:h.url+"/upgrade",tabSuffix:()=>(0,r.Z)({experimentId:m})}));const b="feature-highlights-query-caching-badge",v={active:!1,icon:"database",id:`datasource-cache-${a.uid}`,text:"Cache",url:`datasources/edit/${a.uid}/cache`,hideFromTabs:!i.isBackend||!s.ZP.caching.enabled};return(0,u.d5)()&&!g&&(v.tabSuffix=()=>(0,r.Z)({experimentId:b,eventVariant:"trial"})),(0,n.v)("caching")?o.Vt.hasPermissionInMetadata(c.bW.DataSourcesCachingRead,a)&&l.children.push(v):t&&!g&&l.children.push(Object.assign({},v,{url:v.url+"/upgrade",tabSuffix:()=>(0,r.Z)({experimentId:b})})),l}function g(a,e){let i={text:""};for(const t of a.children)if(t.id.indexOf(e)>0){t.active=!0,i=t;break}return{main:a,node:i}}function p(a){return g(l({access:"",basicAuth:!1,basicAuthUser:"",withCredentials:!1,database:"",id:1,uid:"x",isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,readOnly:!1,type:d,typeName:d,typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:"",secureJsonFields:{}},{meta:{id:"1",type:t.zV.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}}),a)}},77197:(a,e,i)=>{i.d(e,{G4:()=>s,I5:()=>n,IO:()=>o,f6:()=>r,mt:()=>t,r7:()=>u});const t=a=>{const e=new RegExp(a.searchQuery,"i");return a.dataSources.filter((a=>e.test(a.name)||e.test(a.database)||e.test(a.type)))},n=a=>{const e=new RegExp(a.dataSourceTypeSearchQuery,"i");return a.plugins.filter((a=>e.test(a.name)))},r=(a,e)=>a.dataSource.uid===e?a.dataSource:{},s=(a,e)=>a.dataSourceMeta.id===e?a.dataSourceMeta:{},o=a=>a.searchQuery,u=a=>a.dataSourcesCount}}]);
//# sourceMappingURL=4933.cf145f0ffc1ef94ed39b.js.map