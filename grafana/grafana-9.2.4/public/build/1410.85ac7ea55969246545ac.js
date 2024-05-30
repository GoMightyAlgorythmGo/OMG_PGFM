"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1410],{11410:(e,t,s)=>{s.d(t,{n:()=>R});var a,l,i,n,o=s(57706),r=s(68404),c=s(21295),d=s(67129),h=s(32607),u=s(13093),g=s(24085),p=s(54416),b=s(53772),f=s(34316),v=s(27549),m=s(82897),x=s(34889),y=s(95967),w=s(25729),j=s(4546),C=s(55941),S=s(1652),L=s(25049),k=s(40920),$=s(9617),_=s(45916);function B(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const P=1e3,T=1e4,O=4,N="{}";function V(e){const t=[];for(const s of e)if(s.selected&&s.values&&s.values.length>0){const e=s.values.filter((e=>e.selected)).map((e=>e.name));e.length>1?t.push(`${s.name}=~"${e.map(f.tU).join("|")}"`):1===e.length&&t.push(`${s.name}="${(0,f.U9)(e[0])}"`)}return["{",t.join(","),"}"].join("")}class U extends r.Component{constructor(){super(...arguments),B(this,"state",{labels:[],searchTerm:"",status:"Ready",error:"",validationStatus:""}),B(this,"onChangeSearch",(e=>{this.setState({searchTerm:e.target.value})})),B(this,"onClickRunLogsQuery",(()=>{(0,c.ff)("grafana_loki_log_browser_closed",{app:this.props.app,closeType:"showLogsButton"});const e=V(this.state.labels);this.props.onChange(e)})),B(this,"onClickRunMetricsQuery",(()=>{(0,c.ff)("grafana_loki_log_browser_closed",{app:this.props.app,closeType:"showLogsRateButton"});const e=`rate(${V(this.state.labels)}[$__interval])`;this.props.onChange(e)})),B(this,"onClickClear",(()=>{(0,c.ff)("grafana_loki_log_browser_closed",{app:this.props.app,closeType:"clearButton"}),this.setState((e=>({labels:e.labels.map((e=>Object.assign({},e,{values:void 0,selected:!1,loading:!1,hidden:!1,facets:void 0}))),searchTerm:"",status:"",error:"",validationStatus:""}))),this.props.deleteLastUsedLabels()})),B(this,"onClickLabel",((e,t,s)=>{const a=this.state.labels.find((t=>t.name===e));if(!a)return;const l=!a.selected;let i={selected:l};if(a.values&&!l){const e=a.values.map((e=>Object.assign({},e,{selected:!1})));i=Object.assign({},i,{facets:0,values:e})}this.setState({searchTerm:""}),this.updateLabelState(e,i,"",(()=>this.doFacettingForLabel(e)))})),B(this,"onClickValue",((e,t,s)=>{const a=this.state.labels.find((t=>t.name===e));if(!a||!a.values)return;this.setState({searchTerm:""});const l=a.values.map((e=>Object.assign({},e,{selected:e.name===t?!e.selected:e.selected})));this.updateLabelState(e,{values:l},"",(()=>this.doFacetting(e)))})),B(this,"onClickValidate",(()=>{const e=V(this.state.labels);this.validateSelector(e)})),B(this,"doFacetting",(e=>{const t=V(this.state.labels);if(t===N){const e=this.state.labels.map((e=>Object.assign({},e,{facets:0,values:void 0,hidden:!1})));this.setState({labels:e},(()=>{this.state.labels.forEach((e=>e.selected&&this.fetchValues(e.name,t)))}))}else this.fetchSeries(t,e)}))}updateLabelState(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3?arguments[3]:void 0;this.setState((a=>{const l=a.labels.map((s=>s.name===e?Object.assign({},s,t):s)),i=s?"":a.error;return{labels:l,status:s,error:i,validationStatus:""}}),a)}componentDidMount(){const{languageProvider:e,autoSelect:t=O,lastUsedLabels:s}=this.props;if(e){const a=s;e.start().then((()=>{let s=e.getLabelKeys();if(s.length>P){const e=`Too many labels found (showing only 1000 of ${s.length})`;s=s.slice(0,P),this.setState({error:e})}const l=s.map(((e,s,l)=>({name:e,selected:l.length<=t&&0===a.length||a.includes(e),loading:!1})));this.setState({labels:l},(()=>{this.state.labels.forEach((e=>{e.selected&&this.fetchValues(e.name,N)}))}))}))}}doFacettingForLabel(e){const t=this.state.labels.find((t=>t.name===e));if(!t)return;const s=this.state.labels.filter((e=>e.selected)).map((e=>e.name));this.props.storeLastUsedLabels(s),t.selected?t.values||this.fetchValues(e,V(this.state.labels)):this.doFacetting()}async fetchValues(e,t){const{languageProvider:s}=this.props;this.updateLabelState(e,{loading:!0},`Fetching values for ${e}`);try{let a=await s.getLabelValues(e);if(t!==V(this.state.labels))return void this.updateLabelState(e,{loading:!1},"");if(a.length>T){const t=`Too many values for ${e} (showing only 10000 of ${a.length})`;a=a.slice(0,T),this.setState({error:t})}const l=a.map((e=>({name:e})));this.updateLabelState(e,{values:l,loading:!1})}catch(e){console.error(e)}}async fetchSeries(e,t){const{languageProvider:s}=this.props;t&&this.updateLabelState(t,{loading:!0},`Facetting labels for ${e}`);try{const a=await s.fetchSeriesLabels(e,!0);if(e!==V(this.state.labels))return void(t&&this.updateLabelState(t,{loading:!1}));if(0===Object.keys(a).length)return void this.setState({error:`Empty results, no matching label for ${e}`});const l=function(e,t,s){return e.map((e=>{const a=t[e.name];if(a){let t;if(e.name===s&&e.values)t=e.values;else{var l;const s=new Set((null===(l=e.values)||void 0===l?void 0:l.filter((e=>e.selected)).map((e=>e.name)))||[]);t=a.map((e=>({name:e,selected:s.has(e)})))}return Object.assign({},e,{loading:!1,values:t,facets:t.length})}return Object.assign({},e,{loading:!1,hidden:!a,values:void 0,facets:0})}))}(this.state.labels,a,t);this.setState({labels:l,error:""}),t&&this.updateLabelState(t,{loading:!1})}catch(e){console.error(e)}}async validateSelector(e){const{languageProvider:t}=this.props;this.setState({validationStatus:`Validating selector ${e}`,error:""});const s=await t.fetchSeries(e);this.setState({validationStatus:`Selector is valid (${s.length} streams found)`})}render(){const{theme:e}=this.props,{labels:t,searchTerm:s,status:o,error:r,validationStatus:c}=this.state;if(0===t.length)return a||(a=(0,_.jsx)(y.u,{text:"Loading labels..."}));const d=(e=>({wrapper:v.css`
    background-color: ${e.colors.background.secondary};
    padding: ${e.spacing(2)};
    width: 100%;
  `,list:v.css`
    margin-top: ${e.spacing(1)};
    display: flex;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: auto;
  `,section:v.css`
    & + & {
      margin: ${e.spacing(2,0)};
    }
    position: relative;
  `,selector:v.css`
    font-family: ${e.typography.fontFamilyMonospace};
    margin-bottom: ${e.spacing(1)};
  `,status:v.css`
    padding: ${e.spacing(.5)};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* using absolute positioning because flex interferes with ellipsis */
    position: absolute;
    width: 50%;
    right: 0;
    text-align: right;
    transition: opacity 100ms linear;
    opacity: 0;
  `,statusShowing:v.css`
    opacity: 1;
  `,error:v.css`
    color: ${e.colors.error.main};
  `,valueList:v.css`
    margin-right: ${e.spacing(1)};
    resize: horizontal;
  `,valueListWrapper:v.css`
    border-left: 1px solid ${e.colors.border.medium};
    margin: ${e.spacing(1,0)};
    padding: ${e.spacing(1,0,1,1)};
  `,valueListArea:v.css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${e.spacing(1)};
  `,valueTitle:v.css`
    margin-left: -${e.spacing(.5)};
    margin-bottom: ${e.spacing(1)};
  `,validationStatus:v.css`
    padding: ${e.spacing(.5)};
    margin-bottom: ${e.spacing(1)};
    color: ${e.colors.text.maxContrast};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}))(e),h=V(this.state.labels),u=h===N;let g=t.filter((e=>e.selected&&e.values));return g=s?g.map((e=>{const t=e.values.filter((e=>{if(e.selected)return e.highlightParts=void 0,!0;const t=(0,w.C)(e.name.toLowerCase(),s.toLowerCase());return!!t.found&&(e.highlightParts=t.ranges,e.order=t.distance,!0)}));return Object.assign({},e,{values:(0,m.sortBy)(t,(e=>e.selected?-1/0:e.order))})})):this.state.labels.filter((e=>e.selected&&e.values)).map((e=>Object.assign({},e,{values:null!=e&&e.values?e.values.map((e=>Object.assign({},e,{highlightParts:void 0}))):[]}))),(0,_.jsxs)("div",{className:d.wrapper,children:[(0,_.jsxs)("div",{className:d.section,children:[l||(l=(0,_.jsx)(j._,{description:"Which labels would you like to consider for your search?",children:"1. Select labels to search in"})),(0,_.jsx)("div",{className:d.list,children:t.map((e=>(0,_.jsx)(C._,{name:e.name,loading:e.loading,active:e.selected,hidden:e.hidden,facets:e.facets,onClick:this.onClickLabel},e.name)))})]}),(0,_.jsxs)("div",{className:d.section,children:[i||(i=(0,_.jsx)(j._,{description:"Choose the label values that you would like to use for the query. Use the search field to find values across selected labels.",children:"2. Find values for the selected labels"})),(0,_.jsx)("div",{children:(0,_.jsx)(S.I,{onChange:this.onChangeSearch,"aria-label":"Filter expression for values",value:s})}),(0,_.jsx)("div",{className:d.valueListArea,children:g.map((e=>{var t,a;return(0,_.jsxs)("div",{role:"list",className:d.valueListWrapper,children:[(0,_.jsx)("div",{className:d.valueTitle,"aria-label":`Values for ${e.name}`,children:(0,_.jsx)(C._,{name:e.name,loading:e.loading,active:e.selected,hidden:e.hidden,facets:e.facets||(null===(t=e.values)||void 0===t?void 0:t.length),onClick:this.onClickLabel})}),(0,_.jsx)(x.t7,{height:200,itemCount:(null===(a=e.values)||void 0===a?void 0:a.length)||0,itemSize:28,itemKey:t=>e.values[t].name,width:200,className:d.valueList,children:t=>{var a;let{index:l,style:i}=t;const n=null===(a=e.values)||void 0===a?void 0:a[l];return n?(0,_.jsx)("div",{style:i,children:(0,_.jsx)(C._,{name:e.name,value:null==n?void 0:n.name,active:null==n?void 0:n.selected,highlightParts:null==n?void 0:n.highlightParts,onClick:this.onClickValue,searchTerm:s})}):null}})]},e.name)}))})]}),(0,_.jsxs)("div",{className:d.section,children:[n||(n=(0,_.jsx)(j._,{children:"3. Resulting selector"})),(0,_.jsx)("div",{"aria-label":"selector",className:d.selector,children:h}),c&&(0,_.jsx)("div",{className:d.validationStatus,children:c}),(0,_.jsxs)(L.Lh,{children:[(0,_.jsx)(k.zx,{"aria-label":"Use selector as logs button",disabled:u,onClick:this.onClickRunLogsQuery,children:"Show logs"}),(0,_.jsx)(k.zx,{"aria-label":"Use selector as metrics button",variant:"secondary",disabled:u,onClick:this.onClickRunMetricsQuery,children:"Show logs rate"}),(0,_.jsx)(k.zx,{"aria-label":"Validate submit button",variant:"secondary",disabled:u,onClick:this.onClickValidate,children:"Validate selector"}),(0,_.jsx)(k.zx,{"aria-label":"Selector clear button",variant:"secondary",onClick:this.onClickClear,children:"Clear"}),(0,_.jsx)("div",{className:(0,v.cx)(d.status,(o||r)&&d.statusShowing),children:(0,_.jsx)("span",{className:r?d.error:"",children:r||o})})]})]})]})}}const F=(0,$.HE)(U);function M(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function E(e,t){let{typeaheadContext:s,typeaheadText:a}=t;switch(s){case"context-labels":{const t=d.getNextCharacter();t&&"}"!==t&&","!==t||(e+="=");break}case"context-label-values":{let t="";a.match(/^(!?=~?"|")/)||(t='"'),t+=(0,f.Hk)(e,a),'"'!==d.getNextCharacter()&&(t+='"'),e=t;break}}return e}class R extends r.PureComponent{constructor(e){super(e),M(this,"plugins",void 0),M(this,"_isMounted",!1),M(this,"onChangeLabelBrowser",(e=>{this.onChangeQuery(e,!0),this.setState({labelBrowserVisible:!1})})),M(this,"onChangeQuery",((e,t)=>{const{query:s,onChange:a,onRunQuery:l}=this.props;if(a){a(Object.assign({},s,{expr:e})),t&&l&&l()}})),M(this,"onClickChooserButton",(()=>{this.state.labelBrowserVisible?(0,c.ff)("grafana_loki_log_browser_closed",{app:this.props.app,closeType:"logBrowserButton"}):(0,c.ff)("grafana_loki_log_browser_opened",{app:this.props.app}),this.setState((e=>({labelBrowserVisible:!e.labelBrowserVisible})))})),M(this,"onTypeahead",(async e=>{const{datasource:t}=this.props;if(!t.languageProvider)return{suggestions:[]};const s=t.languageProvider,{history:a}=this.props,{prefix:l,text:i,value:n,wrapperClasses:o,labelKey:r}=e;return await s.provideCompletionItems({text:i,value:n,prefix:l,wrapperClasses:o,labelKey:r},{history:a})})),this.state={labelsLoaded:!1,labelBrowserVisible:!1},this.plugins=[(0,h.h)(),(0,u.Z)({onlyIn:e=>"block"===e.object&&"code_block"===e.type,getSyntax:e=>"logql"},Object.assign({},o.languages,{logql:this.props.datasource.languageProvider.getSyntax()}))]}async componentDidMount(){this._isMounted=!0,await this.props.datasource.languageProvider.start(),this._isMounted&&this.setState({labelsLoaded:!0})}componentWillUnmount(){this._isMounted=!1}componentDidUpdate(e){const{range:t,datasource:{languageProvider:s}}=this.props;(0,f.rf)(t,e.range)&&s.fetchLabels()}render(){const{ExtraFieldElement:e,query:t,app:s,datasource:a,placeholder:l="Enter a Loki query (run with Shift+Enter)"}=this.props,{labelsLoaded:i,labelBrowserVisible:n}=this.state,o=a.languageProvider,r=a.languageProvider?o.cleanText:void 0,c=o.getLabelKeys().length>0,d=function(e,t){return e?t?"Log browser":"(No logs found)":"Loading labels..."}(i,c),h=!(i&&c);return(0,_.jsx)(b.G,{storageKey:"grafana.datasources.loki.browser.labels",defaultValue:[],children:(a,i,c)=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"gf-form-inline gf-form-inline--xs-view-flex-column flex-grow-1","data-testid":this.props["data-testid"],children:[(0,_.jsxs)("button",{className:"gf-form-label query-keyword pointer",onClick:this.onClickChooserButton,disabled:h,children:[d,(0,_.jsx)(g.J,{name:n?"angle-down":"angle-right"})]}),(0,_.jsx)("div",{className:"gf-form gf-form--grow flex-shrink-1 min-width-15",children:(0,_.jsx)(p.q,{additionalPlugins:this.plugins,cleanText:r,query:t.expr,onTypeahead:this.onTypeahead,onWillApplySuggestion:E,onChange:this.onChangeQuery,onBlur:this.props.onBlur,onRunQuery:this.props.onRunQuery,placeholder:l,portalOrigin:"loki"})})]}),n&&(0,_.jsx)("div",{className:"gf-form",children:(0,_.jsx)(F,{languageProvider:o,onChange:this.onChangeLabelBrowser,lastUsedLabels:a||[],storeLastUsedLabels:i,deleteLastUsedLabels:c,app:s})}),e]})})}}},34316:(e,t,s)=>{function a(e){return t=e/1e3,Math.floor(t/60);var t}function l(e,t){if(e&&t){const s=a(e.from.valueOf())===a(t.from.valueOf()),l=a(e.to.valueOf())===a(t.to.valueOf());return!(s&&l)}return!1}s.d(t,{Hk:()=>r,U9:()=>n,_z:()=>c,aC:()=>d,rf:()=>l,tU:()=>o});const i=/[*+?()|\\.\[\]{}^$]/g;function n(e){return e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/"/g,'\\"')}function o(e){return n(e.replace(i,"\\$&"))}function r(e,t){return c(t)?o(e):n(e)}function c(e){return!(!e||!e.includes("=~")&&!e.includes("!~"))}function d(e){const t=new RegExp(`^(?:-?\\d+(?:\\.\\d+)?)(?:${["b","kib","Kib","kb","KB","mib","Mib","mb","MB","gib","Gib","gb","GB","tib","Tib","tb","TB","pib","Pib","pb","PB","eib","Eib","eb","EB"].join("|")})$`);return!!e.match(t)}}}]);
//# sourceMappingURL=1410.85ac7ea55969246545ac.js.map