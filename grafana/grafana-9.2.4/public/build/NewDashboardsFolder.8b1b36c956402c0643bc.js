"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8932],{30936:(e,r,a)=>{a.r(r),a.d(r,{NewDashboardsFolder:()=>w,default:()=>x});var n,s,t=a(68404),l=a(1485),d=a(61692),o=a(84719),i=a(1652),c=a(40920),u=a(90894),h=a(42235),m=a(87413),f=a(45916);function b(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}const N={createNewFolder:m.W7},j=(0,l.connect)(null,N),p={folderName:""};class w extends t.PureComponent{constructor(){super(...arguments),b(this,"onSubmit",(e=>{this.props.createNewFolder(e.folderName)})),b(this,"validateFolderName",(e=>h.t.validateNewFolderName(e).then((()=>!0)).catch((e=>e.message))))}render(){return(0,f.jsx)(u.T,{navId:"dashboards/folder/new",children:(0,f.jsxs)(u.T.Contents,{children:[n||(n=(0,f.jsx)("h3",{children:"New dashboard folder"})),(0,f.jsx)(d.l,{defaultValues:p,onSubmit:this.onSubmit,children:e=>{let{register:r,errors:a}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.g,{label:"Folder name",invalid:!!a.folderName,error:a.folderName&&a.folderName.message,children:(0,f.jsx)(i.I,Object.assign({id:"folder-name-input"},r("folderName",{required:"Folder name is required.",validate:async e=>await this.validateFolderName(e)})))}),s||(s=(0,f.jsx)(c.zx,{type:"submit",children:"Create"}))]})}})]})})}}const x=j(w)}}]);
//# sourceMappingURL=NewDashboardsFolder.8b1b36c956402c0643bc.js.map