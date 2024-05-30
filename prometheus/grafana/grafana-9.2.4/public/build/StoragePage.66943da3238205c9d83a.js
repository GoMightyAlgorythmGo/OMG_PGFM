"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7675],{19891:(e,t,r)=>{r.r(t),r.d(t,{default:()=>We});var s,n=r(27549),i=r(68404),a=r(66015),l=r(81351),o=r(98712),c=r(48147),d=r(9617),h=r(98134),u=r(8771),g=r(25049),x=r(80891),p=r(40920),f=r(83971),m=r(22583),v=r(5831),j=r(90894),b=r(93970),w=r(21169),y=r(45916);function C(e){let{onPathChange:t}=e;return(0,y.jsxs)("div",{children:[s||(s=(0,y.jsx)("div",{children:"TODO... Add ROOT"})),(0,y.jsx)(p.zx,{variant:"secondary",onClick:()=>t("/"),children:"Cancel"})]})}var $=r(82897),N=r(24085);function k(e){let{pathName:t,onPathChange:r,rootIcon:s}=e;const n=(0,d.wW)(O),i=t.split("/").filter(Boolean);return(0,y.jsxs)("ul",{className:n.breadCrumb,children:[s&&(0,y.jsx)("li",{onClick:()=>r(""),children:(0,y.jsx)(N.J,{name:s})}),i.map(((e,t)=>{let s="/"+i.slice(0,t+1).join("/");const n=t===i.length-1;return(0,y.jsx)("li",{onClick:n?void 0:()=>r(s),children:e},(0,$.uniqueId)(e))}))]})}function O(e){return{breadCrumb:n.css`
      list-style: none;
      padding: ${e.spacing(2,1)};

      li {
        display: inline;

        :not(:last-child) {
          color: ${e.colors.text.link};
          cursor: pointer;
        }
        + li:before {
          content: '>';
          padding: ${e.spacing(1)};
          color: ${e.colors.text.secondary};
        }
      }
    `}}var S,T=r(59385),W=r(61692),P=r(84719),F=r(1652);const R={folderName:""};function Z(e){let{validate:t,onDismiss:r,onSubmit:s}=e;return(0,y.jsx)(T.u,{onDismiss:r,isOpen:!0,title:"New Folder",children:(0,y.jsx)(W.l,{defaultValues:R,onSubmit:s,maxWidth:"none",children:e=>{let{register:r,errors:s}=e;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(P.g,{label:"Folder name",invalid:!!s.folderName,error:s.folderName&&s.folderName.message,children:(0,y.jsx)(F.I,Object.assign({id:"folder-name-input"},r("folderName",{required:"Folder name is required.",validate:{validate:t}})))}),S||(S=(0,y.jsx)(T.u.ButtonRow,{children:(0,y.jsx)(p.zx,{type:"submit",children:"Create"})}))]})}})})}var D,E,L,I,z,A=r(53257),M=r(11979),J=r(6932),B=r(93016),q=r(61884),H=r(72786),U=r(78454),G=r(24643),_=r(11436),Q=r(38465);const V={format:"git",generalFolderPath:"general",history:!0,exclude:{},git:{}},K=[{label:"GIT",value:"git",description:"Exports a fresh git repository"}],Y=e=>{var t,r,s;let{onPathChange:n}=e;const[l,o]=(0,i.useState)(),[c,d]=(0,A.Z)("grafana.export.config",V),[h,u]=(0,i.useState)(!1),x=(0,a.Z)((()=>(0,J.i)().get("/api/admin/export/options")),[]),f=(0,i.useCallback)(((e,t)=>{if(!x.value||!c)return;const r={};if("*"!==e){for(let n of x.value.exporters){var s;let i=null===(s=c.exclude)||void 0===s?void 0:s[n.key];e===n.key&&(i=!t),i&&(r[n.key]=i)}d(Object.assign({},c,{exclude:r}))}else{if(!t)for(let e of x.value.exporters)r[e.key]=!0;d(Object.assign({},c,{exclude:r}))}}),[c,d,x]);return(0,i.useEffect)((()=>{const e=(0,B.gj)().getStream({scope:M.z.Grafana,namespace:"broadcast",path:"export"}).subscribe({next:e=>{((0,M.RL)(e)||(0,M.se)(e))&&o(e.message)}});return()=>{e.unsubscribe()}}),[]),(0,y.jsxs)("div",{children:[l&&(0,y.jsxs)("div",{children:[D||(D=(0,y.jsx)("h3",{children:"Status"})),(0,y.jsx)("pre",{children:JSON.stringify(l,null,2)}),l.running&&(0,y.jsx)("div",{children:(0,y.jsx)(p.zx,{variant:"secondary",onClick:()=>{(0,J.i)().post("/api/admin/export/stop")},children:"Stop"})})]}),!Boolean(null==l?void 0:l.running)&&(0,y.jsxs)("div",{children:[E||(E=(0,y.jsx)("h3",{children:"Export grafana instance"})),(0,y.jsx)(P.g,{label:"Format",children:(0,y.jsx)(q.Ph,{options:K,width:40,value:K.find((e=>e.value===(null==c?void 0:c.format))),onChange:e=>d(Object.assign({},c,{format:e.value}))})}),(0,y.jsx)(P.g,{label:"Keep history",children:(0,y.jsx)(H.r,{value:null==c?void 0:c.history,onChange:e=>d(Object.assign({},c,{history:e.currentTarget.checked}))})}),(0,y.jsx)(P.g,{label:"Include",children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(U.Z,{children:(0,y.jsx)(G._,{label:"Toggle all",labelWidth:18,children:(0,y.jsx)(H.x,{value:0===Object.keys(null!==(t=null==c?void 0:c.exclude)&&void 0!==t?t:{}).length,onChange:e=>f("*",e.currentTarget.checked)})})}),x.value&&(0,y.jsx)("div",{children:x.value.exporters.map((e=>{var t;return(0,y.jsx)(U.Z,{children:(0,y.jsx)(G._,{label:e.name,labelWidth:18,tooltip:e.description,children:(0,y.jsx)(H.x,{value:!0!==(null==c||null===(t=c.exclude)||void 0===t?void 0:t[e.key]),onChange:t=>f(e.key,t.currentTarget.checked)})})},e.key)}))})]})}),(0,y.jsx)(P.g,{label:"General folder",description:"Set the folder name for items without a real folder",children:(0,y.jsx)(F.I,{width:40,value:null!==(r=null==c?void 0:c.generalFolderPath)&&void 0!==r?r:"",onChange:e=>d(Object.assign({},c,{generalFolderPath:e.currentTarget.value})),placeholder:"root folder path"})}),(0,y.jsxs)(g.Lh,{children:[(0,y.jsx)(p.zx,{onClick:()=>{(0,J.i)().post("/api/admin/export",c).then((e=>{e.cfg&&e.status.running&&d(e.cfg)}))},variant:"primary",children:"Export"}),L||(L=(0,y.jsx)(p.Qj,{href:"admin/storage/",variant:"secondary",children:"Cancel"}))]})]}),I||(I=(0,y.jsx)("br",{})),z||(z=(0,y.jsx)("br",{})),(0,y.jsx)(_.U,{label:"Request details",isOpen:h,onToggle:u,collapsible:!0,children:(0,y.jsx)(Q.p,{height:275,value:null!==(s=JSON.stringify(c,null,2))&&void 0!==s?s:"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:e=>{d(JSON.parse(e))}})})]})};var X,ee,te,re=r(22076),se=r(87723),ne=r(13868),ie=r(57545);function ae(e){let{listing:t,path:r,onPathChange:s,view:n}=e;const l=(0,d.wW)(le),o=(0,i.useMemo)((()=>function(e){const t=e.lastIndexOf(".");if(t<0)return{};switch(e.substring(t+1).toLowerCase()){case"svg":return{category:"svg"};case"jpg":case"jpeg":case"png":case"webp":case"gif":return{category:"image"};case"geojson":case"json":return{category:"text",language:"json"};case"text":case"go":case"md":return{category:"text"}}return{}}(r)),[r]),c=(0,a.Z)((async()=>{if("text"===o.category){const e=await(0,ne.$)().get(r);return(0,$.isString)(e)?e:JSON.stringify(e,null,2)}return null}),[o,r]);switch(n){case ie.i.Config:return X||(X=(0,y.jsx)("div",{children:"CONFIGURE?"}));case ie.i.Perms:return ee||(ee=(0,y.jsx)("div",{children:"Permissions"}));case ie.i.History:return te||(te=(0,y.jsx)("div",{children:"TODO... history"}))}let h=`api/storage/read/${r}`;switch(h.endsWith("/")&&(h=h.substring(0,h.length-1)),o.category){case"svg":return(0,y.jsx)("div",{children:(0,y.jsx)(re.Z,{src:h,className:l.icon})});case"image":return(0,y.jsx)("div",{children:(0,y.jsx)("a",{target:"_self",href:h,children:(0,y.jsx)("img",{src:h,className:l.img})})});case"text":return(0,y.jsx)("div",{className:l.tableWrapper,children:(0,y.jsx)(se.Z,{children:e=>{var t,r;let{width:s,height:n}=e;return(0,y.jsx)(Q.p,{width:s,height:n,value:null!==(t=c.value)&&void 0!==t?t:"",showLineNumbers:!1,readOnly:!0,language:null!==(r=o.language)&&void 0!==r?r:"text",showMiniMap:!1,onBlur:e=>{console.log("CHANGED!",e)}})}})})}return(0,y.jsxs)("div",{children:["FILE: ",(0,y.jsx)("a",{href:h,children:r})]})}const le=e=>({wrapper:n.css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${e.spacing(2)};
  `,tableWrapper:n.css`
    border: 1px solid ${e.colors.border.medium};
    height: 100%;
  `,uploadSpot:n.css`
    margin-left: ${e.spacing(2)};
  `,border:n.css`
    border: 1px solid ${e.colors.border.medium};
    padding: ${e.spacing(2)};
  `,img:n.css`
    max-width: 100%;
    // max-height: 147px;
    // fill: ${e.colors.text.primary};
  `,icon:n.css`
    // max-width: 100%;
    // max-height: 147px;
    // fill: ${e.colors.text.primary};
  `});var oe,ce,de=r(13261);function he(e){let{listing:t,view:r}=e;const s=(0,d.wW)(ue);switch(r){case ie.i.Config:return oe||(oe=(0,y.jsx)("div",{children:"CONFIGURE?"}));case ie.i.Perms:return ce||(ce=(0,y.jsx)("div",{children:"Permissions"}))}return(0,y.jsx)("div",{className:s.tableWrapper,children:(0,y.jsx)(se.Z,{children:e=>{let{width:r,height:s}=e;return(0,y.jsx)("div",{style:{width:`${r}px`,height:`${s}px`},children:(0,y.jsx)(de.i,{height:s,width:r,data:t,noHeader:!1,showTypeIcons:!1,resizable:!1})})}})})}const ue=e=>({wrapper:n.css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${e.spacing(2)};
  `,tableWrapper:n.css`
    border: 1px solid ${e.colors.border.medium};
    height: 100%;
  `,uploadSpot:n.css`
    margin-left: ${e.spacing(2)};
  `,border:n.css`
    border: 1px solid ${e.colors.border.medium};
    padding: ${e.spacing(2)};
  `});var ge,xe=r(11340),pe=r(58760),fe=r(74819);function me(e){let{root:t,onPathChange:r}=e;const s=(0,d.wW)(ve),n=(0,a.Z)((0,ne.$)().getConfig),[l,o]=(0,i.useState)("");let h=location.pathname;h.endsWith("/")||(h+="/");const x=(0,i.useMemo)((()=>{var e;let t=null!==(e=n.value)&&void 0!==e?e:[];if(null!=l&&l.length){const e=l.toLowerCase();t=t.filter((t=>{const r=t.config;return!!(r.name.toLowerCase().indexOf(e)>=0||r.description.toLowerCase().indexOf(e)>=0)}))}const r=[],s=[];for(const e of null!==(i=t)&&void 0!==i?i:[]){var i;e.config.underContentRoot?s.push(e):"content"!==e.config.prefix&&r.push(e)}return{base:r,content:s}}),[l,n]),f=(e,t)=>(0,y.jsx)(g.wc,{children:t.map((t=>{var r,n,i,a;const l=t.ready;return(0,y.jsxs)(xe.Z,{href:l?`admin/storage/${e}${t.config.prefix}/`:void 0,children:[(0,y.jsx)(xe.Z.Heading,{children:t.config.name}),(0,y.jsxs)(xe.Z.Meta,{className:s.clickable,children:[t.config.description,(null===(r=t.config.git)||void 0===r?void 0:r.remote)&&(0,y.jsx)("a",{href:null===(n=t.config.git)||void 0===n?void 0:n.remote,children:null===(i=t.config.git)||void 0===i?void 0:i.remote})]}),null===(a=t.notice)||void 0===a?void 0:a.map((e=>(0,y.jsx)(u.b,{severity:e.severity,title:e.text},e.text))),(0,y.jsx)(xe.Z.Tags,{className:s.clickable,children:(0,y.jsx)(g.Lh,{children:(0,y.jsx)(pe.P,{tags:je(t)})})}),(0,y.jsx)(xe.Z.Figure,{className:s.clickable,children:(0,y.jsx)(N.J,{name:be(t.config.type),size:"xxxl",className:s.secondaryTextColor})})]},t.config.prefix)}))});return(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:"page-action-bar",children:[(0,y.jsx)("div",{className:"gf-form gf-form--grow",children:(0,y.jsx)(fe.H,{placeholder:"Search Storage",value:l,onChange:o})}),(0,y.jsx)(p.zx,{className:"pull-right",onClick:()=>r("",ie.i.AddRoot),children:"Add Root"}),c.v.featureToggles.export&&(0,y.jsx)(p.zx,{className:"pull-right",onClick:()=>r("",ie.i.Export),children:"Export"})]}),(0,y.jsx)("div",{children:f("",x.base)}),(0,y.jsxs)("div",{children:[ge||(ge=(0,y.jsx)("h3",{children:"Content"})),f("content/",x.content)]})]})}function ve(e){return{secondaryTextColor:n.css`
      color: ${e.colors.text.secondary};
    `,clickable:n.css`
      pointer-events: none;
    `}}function je(e){const t=[];return e.builtin&&t.push("Builtin"),e.editable||t.push("Read only"),e.ready||t.push("Not ready"),t}function be(e){switch(e){case"git":return"code-branch";default:return"folder-open";case"sql":return"database"}}var we,ye,Ce=r(58587),$e=r(95378);function Ne(e){let{setErrorMessages:t,setPath:r,path:s,fileNames:n}=e;const a=(0,d.wW)(ke),[l,o]=(0,i.useState)(void 0),[c,h]=(0,i.useState)(!1),[u,g]=(0,i.useState)(1),[x,p]=(0,i.useState)(!0);(0,i.useEffect)((()=>{g((e=>e+1))}),[l]);const f=async(e,n)=>{if(!e)return void t(["Please select a file."]);const i=await(0,ne.$)().upload(s,e,n);200!==i.status?t([i.message]):(e=>{console.log("Uploaded: "+s),e.path?r(e.path):r(s)})(i)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Ce.p,{accept:"image/jpg, image/jpeg, image/png, image/gif, image/webp",onFileUpload:e=>{t([]);const r=e.currentTarget.files&&e.currentTarget.files.length>0&&e.currentTarget.files[0]?e.currentTarget.files[0]:void 0;if(r){o(r);(0,ne.J)(r.name,n)?(h(!0),p(!0)):(h(!1),f(r,!1).then((e=>{})))}},className:a.uploadButton,children:"Upload"},u),l&&c&&(0,y.jsx)($e.s,{isOpen:x,body:(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:null==l?void 0:l.name}),we||(we=(0,y.jsx)("p",{children:"A file with this name already exists."})),ye||(ye=(0,y.jsx)("p",{children:"What would you like to do?"}))]}),title:"This file already exists",confirmText:"Replace",onConfirm:()=>{l&&(f(l,!0).then((e=>{})),p(!1))},onDismiss:()=>{o(void 0),h(!1),p(!1)}})]})}const ke=e=>({uploadButton:n.css`
    margin-right: ${e.spacing(2)};
  `});var Oe,Se;const Te=/^[a-z\d!\-_.*'() ]+$/;function We(e){var t,r,s,n,$;const N=(0,d.wW)(Pe),O=(0,b.q)("storage"),S=null!==(t=e.match.params.path)&&void 0!==t?t:"",T=null!==(r=e.queryParams.view)&&void 0!==r?r:ie.i.Data,W=(e,t)=>{let r=("/admin/storage/"+e).replace("//","/");t&&t!==ie.i.Data&&(r+="?view="+t),o.E1.push(r)},[P,F]=(0,i.useState)(!1),[R,D]=(0,i.useState)([]),E=(0,a.Z)((()=>(0,ne.$)().list(S).then((e=>{if(e){const t=e.fields[0];e.fields[0]=Object.assign({},t,{getLinks:e=>{var r;const s=t.values.get(null!==(r=e.valueRowIndex)&&void 0!==r?r:0),n=S+"/"+s;return[{title:`Open ${s}`,href:`/admin/storage/${n}`,target:"_self",origin:t,onClick:()=>{W(n)}}]}})}return e}))),[S]),L=(0,i.useMemo)((()=>{let e=(null==S?void 0:S.indexOf("/"))<0;if(E.value){if(1===E.value.length){const t=E.value.fields[0].values.get(0);e=!S.endsWith(t)}else e=!0}return e}),[S,E]),I=(0,i.useMemo)((()=>{var e,t,r,s,n,i;return null!==(e=null===(t=E.value)||void 0===t||null===(r=t.fields)||void 0===r||null===(s=r.find((e=>"name"===e.name)))||void 0===s||null===(n=s.values)||void 0===n||null===(i=n.toArray())||void 0===i?void 0:i.filter((e=>"string"==typeof e)))&&void 0!==e?e:[]}),[E]);return(0,y.jsx)(j.T,{navModel:O,children:(0,y.jsx)(j.T.Contents,{isLoading:E.loading,children:(()=>{var e;const t=!(null!=S&&S.length)||"/"===S;switch(T){case ie.i.Export:return t?s||(s=(0,y.jsx)(Y,{onPathChange:W})):(W(""),Oe||(Oe=(0,y.jsx)(h.$,{})));case ie.i.AddRoot:return t?n||(n=(0,y.jsx)(C,{onPathChange:W})):(W(""),Se||(Se=(0,y.jsx)(h.$,{})))}const r=E.value;if(!(0,l.aY)(r))return(0,y.jsx)(y.Fragment,{});if(t)return(0,y.jsx)(me,{root:r,onPathChange:W});const i=[{what:ie.i.Data,text:"Data"}];S.indexOf("/")<0&&i.push({what:ie.i.Config,text:"Configure"}),L?i.push({what:ie.i.Perms,text:"Permissions"}):i.push({what:ie.i.History,text:"History"});const a=L&&(S.startsWith("resources")||S.startsWith("content")),o=S.startsWith("resources/")||S.startsWith("content/"),d=c.v.featureToggles.dashboardsFromStorage&&S.startsWith("content/"),j=()=>{D([])};return(0,y.jsxs)("div",{className:N.wrapper,children:[(0,y.jsxs)(g.Lh,{width:"100%",justify:"space-between",spacing:"md",height:25,children:[(0,y.jsx)(k,{pathName:S,onPathChange:W,rootIcon:(0,x.iJ)(null!==(e=O.node.icon)&&void 0!==e?e:"")}),(0,y.jsxs)(g.Lh,{children:[d&&(0,y.jsx)(p.Qj,{icon:"dashboard",href:`g/${S}`,children:"Dashboard"}),a&&(0,y.jsxs)(y.Fragment,{children:[$||($=(0,y.jsx)(Ne,{path:S,setErrorMessages:D,fileNames:I,setPath:W})),(0,y.jsx)(p.zx,{onClick:()=>F(!0),children:"New Folder"})]}),o&&(0,y.jsx)(p.zx,{variant:"destructive",onClick:()=>{const e=L?"Are you sure you want to delete this folder and all its contents?":"Are you sure you want to delete this file?",t=(e=>{const t=e.lastIndexOf("/");return t<1?"":e.substring(0,t)})(S);v.Z.publish(new w.VJ({title:"Delete "+(L?"folder":"file"),text:e,icon:"trash-alt",yesText:"Delete",onConfirm:()=>(0,ne.$)().delete({path:S,isFolder:L}).then((()=>{W(t)}))}))},children:"Delete"})]})]}),R.length>0&&(0,y.jsx)("div",{className:N.errorAlert,children:(0,y.jsx)(u.b,{title:"Upload failed",severity:"error",onRemove:j,children:R.map((e=>(0,y.jsx)("div",{children:e},e)))})}),(0,y.jsx)(f.J,{children:i.map((e=>(0,y.jsx)(m.O,{label:e.text,active:e.what===T,onChangeTab:()=>W(S,e.what)},e.what)))}),L?(0,y.jsx)(he,{listing:r,view:T}):(0,y.jsx)(ae,{path:S,listing:r,onPathChange:W,view:T}),P&&(0,y.jsx)(Z,{onSubmit:async e=>{let{folderName:t}=e;const r=`${S}/${t}`,s=await(0,ne.$)().createFolder(r);"string"!=typeof(null==s?void 0:s.error)&&(W(r),F(!1))},onDismiss:()=>{F(!1)},validate:e=>{const t=e.toLowerCase();return(0,ne.J)(e,I)?"A file or a folder with the same name already exists":Te.test(t)?!(e.length>256)||"Name is too long, maximum length: 256 characters":"Name contains illegal characters"}})]})})()})})}const Pe=e=>({wrapper:n.css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${e.spacing(2)};
  `,tableWrapper:n.css`
    border: 1px solid ${e.colors.border.medium};
    height: 100%;
  `,border:n.css`
    border: 1px solid ${e.colors.border.medium};
    padding: ${e.spacing(2)};
  `,errorAlert:n.css`
    padding-top: 20px;
  `,uploadButton:n.css`
    margin-right: ${e.spacing(2)};
  `})}}]);
//# sourceMappingURL=StoragePage.66943da3238205c9d83a.js.map