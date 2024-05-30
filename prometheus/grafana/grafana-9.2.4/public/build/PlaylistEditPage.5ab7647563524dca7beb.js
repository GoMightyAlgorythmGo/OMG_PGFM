"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2341],{68196:(e,a,s)=>{s.r(a),s.d(a,{PlaylistEditPage:()=>o,default:()=>c});s(68404);var l=s(66015),r=s(98712),t=s(90894),i=s(2e4),n=s(20607),d=s(45916);const o=e=>{let{match:a}=e;const s=(0,l.Z)((()=>(0,n.A5)(a.params.uid)),[a.params]);return(0,d.jsx)(t.T,{navId:"dashboards/playlists",pageNav:{text:"Edit playlist",subTitle:"A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."},children:(0,d.jsxs)(t.T.Contents,{isLoading:s.loading,children:[s.error&&(0,d.jsxs)("div",{children:["Error loading playlist: ",JSON.stringify(s.error)]}),s.value&&(0,d.jsx)(i.H,{onSubmit:async e=>{await(0,n.CE)(a.params.uid,e),r.E1.push("/playlists")},playlist:s.value})]})})},c=o},2e4:(e,a,s)=>{s.d(a,{H:()=>F});var l,r,t,i,n=s(68404),d=s(68694),o=s(48147),c=s(61692),u=s(84719),h=s(1652),m=s(25049),g=s(40920),p=s(49248),b=s(67907),v=s(98566),x=s(99464),j=s(27549),y=s(64681),f=s.n(y),I=s(9617),w=s(98134),N=s(24085),k=s(85965),C=s(87261),$=s(45916);const O=e=>{let{items:a,onDelete:s}=e;const n=(0,I.wW)(P);if(null==a||!a.length)return l||(l=(0,$.jsx)("div",{children:(0,$.jsx)("em",{children:"Playlist is empty. Add dashboards below."})}));const o=e=>{var a;let s="dashboard_by_tag"===e.type?"apps":"tag-alt";const l=[],i=null===(a=e.dashboards)||void 0===a?void 0:a[0];if(e.dashboards)if("dashboard_by_tag"===e.type)l.push((0,$.jsx)(C.e,{label:e.value,removeIcon:!1,count:0},e.value)),i?l.push((0,$.jsxs)("span",{children:["  ",f()("dashboard",e.dashboards.length,!0)]},"info")):(s="exclamation-triangle",l.push(t||(t=(0,$.jsx)("span",{children:"  No dashboards found"},"info"))));else if(i){var d;l.push(e.dashboards.length>1?(0,$.jsxs)("span",{children:["Multiple items found: $",e.value]},"info"):(0,$.jsx)("span",{children:null!==(d=i.name)&&void 0!==d?d:e.value},"info"))}else s="exclamation-triangle",l.push((0,$.jsxs)("span",{children:["  Not found: ",e.value]},"info"));else l.push(r||(r=(0,$.jsx)(w.$,{},"spinner")));return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(N.J,{name:s,className:n.rightMargin},"icon"),l]})};return(0,$.jsx)($.Fragment,{children:a.map(((e,a)=>(0,$.jsx)(x._l,{draggableId:`${a}`,index:a,children:l=>(0,$.jsxs)("div",Object.assign({className:n.row,ref:l.innerRef},l.draggableProps,l.dragHandleProps,{role:"row",children:[(0,$.jsx)("div",{className:n.actions,role:"cell","aria-label":`Playlist item, ${e.type}, ${e.value}`,children:o(e)}),(0,$.jsxs)("div",{className:n.actions,children:[(0,$.jsx)(k.h,{name:"times",size:"md",onClick:()=>s(a),"aria-label":d.wl.pages.PlaylistForm.itemDelete,type:"button"}),i||(i=(0,$.jsx)(N.J,{title:"Drag and drop to reorder",name:"draggabledots",size:"md"}))]})]}))},`${a}/${e.value}`)))})};function P(e){return{row:j.css`
      padding: 6px;
      background: ${e.colors.background.secondary};
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3px;

      border: 1px solid ${e.colors.border.medium};
      &:hover {
        border: 1px solid ${e.colors.border.strong};
      }
    `,rightMargin:j.css`
      margin-right: 5px;
    `,actions:j.css`
      align-items: center;
      justify-content: center;
      display: flex;
    `,settings:j.css`
      label: settings;
      text-align: right;
    `}}var _;const A=e=>{var a;let{items:s,deleteItem:l,moveItem:r}=e;return(0,$.jsxs)("div",{className:"gf-form-group",children:[_||(_=(0,$.jsx)("h3",{className:"page-headering",children:"Dashboards"})),(0,$.jsx)(x.Z5,{onDragEnd:e=>{var a;e.destination&&r(e.source.index,null===(a=e.destination)||void 0===a?void 0:a.index)},children:(0,$.jsx)(x.bK,{droppableId:"playlist-list",direction:"vertical",children:e=>(0,$.jsxs)("div",Object.assign({ref:e.innerRef},e.droppableProps,{children:[a||(a=(0,$.jsx)(O,{items:s,onDelete:l})),e.placeholder]}))})})]})};var S,D=s(66015),E=s(20607);const F=e=>{var a;let{onSubmit:s,playlist:l}=e;const{name:r,interval:t,items:i}=l,x=(0,n.useMemo)((()=>()=>(0,v.O)().tags({kind:["dashboard"]})),[]),{items:j,addById:y,addByTag:f,deleteItem:I,moveItem:w}=function(e){const[a,s]=(0,n.useState)(null!=e?e:[]);(0,D.Z)((async()=>{for(const e of a)if(!e.dashboards)return void s(await(0,E.jc)(a))}),[a]);const l=(0,n.useCallback)((e=>{e&&s([...a,{type:"dashboard_by_uid",value:e.uid}])}),[a]),r=(0,n.useCallback)((e=>{const l=e[0];if(!l||a.find((e=>e.value===l)))return;const r={type:"dashboard_by_tag",value:l};s([...a,r])}),[a]),t=(0,n.useCallback)(((e,l)=>{if(e===l||!a[e])return;const r=Array.from(a),[t]=r.splice(e,1);r.splice(l,0,t),s(r)}),[a]),i=(0,n.useCallback)((e=>{const l=a.slice();l.splice(e,1),s(l)}),[a]);return{items:a,addById:l,addByTag:r,deleteItem:i,moveItem:t}}(i);return(0,$.jsx)("div",{children:(0,$.jsx)(c.l,{onSubmit:e=>s(Object.assign({},e,{items:j})),validateOn:"onBlur",children:e=>{var s,l;let{register:i,errors:n}=e;const c=0===j.length||Object.keys(n).length>0;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(u.g,{label:"Name",invalid:!!n.name,error:null==n||null===(s=n.name)||void 0===s?void 0:s.message,children:(0,$.jsx)(h.I,Object.assign({type:"text"},i("name",{required:"Name is required"}),{placeholder:"Name",defaultValue:r,"aria-label":d.wl.pages.PlaylistForm.name}))}),(0,$.jsx)(u.g,{label:"Interval",invalid:!!n.interval,error:null==n||null===(l=n.interval)||void 0===l?void 0:l.message,children:(0,$.jsx)(h.I,Object.assign({type:"text"},i("interval",{required:"Interval is required"}),{placeholder:"5m",defaultValue:null!=t?t:"5m","aria-label":d.wl.pages.PlaylistForm.interval}))}),a||(a=(0,$.jsx)(A,{items:j,deleteItem:I,moveItem:w})),(0,$.jsxs)("div",{className:"gf-form-group",children:[S||(S=(0,$.jsx)("h3",{className:"page-headering",children:"Add dashboards"})),(0,$.jsx)(u.g,{label:"Add by title",children:(0,$.jsx)(p.o,{id:"dashboard-picker",onChange:y},j.length)}),(0,$.jsx)(u.g,{label:"Add by tag",children:(0,$.jsx)(b.D,{isClearable:!0,tags:[],hideValues:!0,tagOptions:x,onChange:f,placeholder:"Select a tag"})})]}),(0,$.jsxs)(m.Lh,{children:[(0,$.jsx)(g.zx,{type:"submit",variant:"primary",disabled:c,children:"Save"}),(0,$.jsx)(g.Qj,{variant:"secondary",href:`${o.v.appSubUrl}/playlists`,children:"Cancel"})]})]})}})})}}}]);
//# sourceMappingURL=PlaylistEditPage.5ab7647563524dca7beb.js.map