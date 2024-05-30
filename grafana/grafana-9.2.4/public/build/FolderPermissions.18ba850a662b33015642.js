"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8431],{65229:(s,e,i)=>{i.r(e),i.d(e,{AccessControlFolderPermissions:()=>g,default:()=>P});var n=i(68404),r=i(1485),o=i(83654),d=i(90894),t=i(98163),a=i(8674),l=i(47570),c=i(87413),m=i(49545),h=i(45916);const p={getFolderByUid:c.Pb},u=(0,r.connect)((function(s,e){const i=e.match.params.uid;return{uid:i,pageNav:(0,a.h)(s.navIndex,`folder-permissions-${i}`,(0,m._)(1))}}),p),g=s=>{let{uid:e,getFolderByUid:i,pageNav:r}=s;(0,n.useEffect)((()=>{i(e)}),[i,e]);const a=t.Vt.hasPermission(l.bW.FoldersPermissionsWrite);return(0,h.jsx)(d.T,{navId:"dashboards/browse",pageNav:r.main,children:(0,h.jsx)(d.T.Contents,{children:(0,h.jsx)(o.P,{resource:"folders",resourceId:e,canSetPermissions:a})})})},P=u(g)},82654:(s,e,i)=>{i.r(e),i.d(e,{FolderPermissions:()=>A,default:()=>N});var n,r,o,d,t=i(68404),a=i(1485),l=i(9442),c=i(24085),m=i(40920),h=i(72779),p=i(90894),u=i(93319),g=i(18778),P=i(25130),f=i(8674),v=i(87413),x=i(49545),b=i(45916);function j(s,e,i){return e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}const F={getFolderByUid:v.Pb,getFolderPermissions:v.a,updateFolderPermission:v.v7,removeFolderPermission:v.Uk,addFolderPermission:v.pz},C=(0,a.connect)(((s,e)=>{const i=e.match.params.uid;return{pageNav:(0,f.h)(s.navIndex,`folder-permissions-${i}`,(0,x._)(1)),folderUid:i,folder:s.folder}}),F);class A extends t.PureComponent{constructor(s){super(s),j(this,"onOpenAddPermissions",(()=>{this.setState({isAdding:!0})})),j(this,"onRemoveItem",(s=>{this.props.removeFolderPermission(s)})),j(this,"onPermissionChanged",((s,e)=>{this.props.updateFolderPermission(s,e)})),j(this,"onAddPermission",(s=>this.props.addFolderPermission(s))),j(this,"onCancelAddPermission",(()=>{this.setState({isAdding:!1})})),this.state={isAdding:!1}}componentDidMount(){this.props.getFolderByUid(this.props.folderUid),this.props.getFolderPermissions(this.props.folderUid)}render(){const{pageNav:s,folder:e}=this.props,{isAdding:i}=this.state;if(0===e.id)return(0,b.jsx)(p.T,{navId:"dashboards/browse",pageNav:s.main,children:n||(n=(0,b.jsx)(p.T.Contents,{isLoading:!0,children:(0,b.jsx)("span",{})}))});const t={title:e.title,url:e.url,id:e.id};return(0,b.jsx)(p.T,{navId:"browse",pageNav:s.main,children:(0,b.jsxs)(p.T.Contents,{children:[(0,b.jsxs)("div",{className:"page-action-bar",children:[r||(r=(0,b.jsx)("h3",{className:"page-sub-heading",children:"Folder Permissions"})),o||(o=(0,b.jsx)(l.u,{placement:"auto",content:(0,b.jsx)(P.Z,{}),children:(0,b.jsx)(c.J,{className:"icon--has-hover page-sub-heading-icon",name:"question-circle"})})),d||(d=(0,b.jsx)("div",{className:"page-action-bar__spacer"})),(0,b.jsx)(m.zx,{className:"pull-right",onClick:this.onOpenAddPermissions,disabled:i,children:"Add Permission"})]}),(0,b.jsx)(h.s,{in:i,children:(0,b.jsx)(u.Z,{onAddPermission:this.onAddPermission,onCancel:this.onCancelAddPermission})}),(0,b.jsx)(g.Z,{items:e.permissions,onRemoveItem:this.onRemoveItem,onPermissionChanged:this.onPermissionChanged,isFetching:!1,folderInfo:t})]})})}}const N=C(A)}}]);
//# sourceMappingURL=FolderPermissions.18ba850a662b33015642.js.map