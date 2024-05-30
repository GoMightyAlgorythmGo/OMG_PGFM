"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1337],{7352:(e,s,n)=>{n.r(s),n.d(s,{ServiceAccountsListPageUnconnected:()=>Q,default:()=>X,getStyles:()=>U});var t,i=n(27549),a=n(64681),c=n.n(a),o=n(68404),r=n(1485),l=n(9617),d=n(8771),h=n(9442),u=n(24085),m=n(74819),x=n(96380),g=n(40920),p=n(95378),b=n(28436),v=n(90894),j=n(22584),f=n(98163),k=n(47570),y=n(26343),A=n(25049),S=n(85965),I=n(57497),C=n(8936),$=n(45916);const D=e=>`Edit service account's ${e} details`,T=(0,o.memo)((e=>{let{serviceAccount:s,onRoleChange:n,roleOptions:a,onRemoveButtonClick:c,onDisable:o,onEnable:r,onAddTokenClick:d}=e;const h=`org/serviceaccounts/${s.id}`,m=(0,l.wW)(N),x=f.Vt.hasPermissionInMetadata(k.bW.ServiceAccountsWrite,s),p=f.Vt.hasPermission(k.bW.ActionRolesList)&&f.Vt.hasPermission(k.bW.ActionUserRolesList);return(0,$.jsxs)("tr",{className:(0,i.cx)({[m.disabled]:s.isDisabled}),children:[(0,$.jsx)("td",{className:"width-4 text-center link-td",children:(0,$.jsx)("a",{href:h,"aria-label":D(s.name),children:(0,$.jsx)("img",{className:"filter-table__avatar",src:s.avatarUrl,alt:`Avatar for user ${s.name}`})})}),(0,$.jsx)("td",{className:"link-td max-width-10",children:(0,$.jsx)("a",{className:"ellipsis",href:h,title:s.name,"aria-label":D(s.name),children:s.name})}),(0,$.jsx)("td",{className:"link-td max-width-10",children:(0,$.jsx)("a",{className:m.accountId,href:h,title:s.login,"aria-label":D(s.name),children:s.login})}),f.Vt.licensedAccessControlEnabled()?(0,$.jsx)("td",{children:p&&(0,$.jsx)(I.R,{userId:s.id,orgId:s.orgId,basicRole:s.role,onBasicRoleChange:e=>n(e,s),roleOptions:a,basicRoleDisabled:!x,disabled:s.isDisabled})}):(0,$.jsx)("td",{children:(0,$.jsx)(C.A,{"aria-label":"Role",value:s.role,disabled:!x||s.isDisabled,onChange:e=>n(e,s)})}),(0,$.jsx)("td",{className:"link-td max-width-10",children:(0,$.jsx)("a",{className:"ellipsis",href:h,title:"Tokens","aria-label":D(s.name),children:(0,$.jsxs)("div",{className:(0,i.cx)(m.tokensInfo,{[m.tokensInfoSecondary]:!s.tokens}),children:[t||(t=(0,$.jsx)("span",{children:(0,$.jsx)(u.J,{name:"key-skeleton-alt"})})),s.tokens||"No tokens"]})})}),(0,$.jsx)("td",{children:(0,$.jsxs)(A.Lh,{justify:"flex-end",children:[f.Vt.hasPermission(k.bW.ServiceAccountsWrite)&&!s.tokens&&(0,$.jsx)(g.zx,{onClick:()=>d(s),disabled:s.isDisabled,children:"Add token"}),f.Vt.hasPermissionInMetadata(k.bW.ServiceAccountsWrite,s)&&(s.isDisabled?(0,$.jsx)(g.zx,{variant:"primary",onClick:()=>r(s),children:"Enable"}):(0,$.jsx)(g.zx,{variant:"secondary",onClick:()=>o(s),children:"Disable"})),f.Vt.hasPermissionInMetadata(k.bW.ServiceAccountsDelete,s)&&(0,$.jsx)(S.h,{className:m.deleteButton,name:"trash-alt",size:"md",onClick:()=>c(s),"aria-label":`Delete service account ${s.name}`})]})})]},s.id)}));T.displayName="ServiceAccountListItem";const N=e=>({iconRow:i.css`
      svg {
        margin-left: ${e.spacing(.5)};
      }
    `,accountId:(0,i.cx)("ellipsis",i.css`
        color: ${e.colors.text.secondary};
      `),deleteButton:i.css`
      color: ${e.colors.text.secondary};
    `,tokensInfo:i.css`
      span {
        margin-right: ${e.spacing(1)};
      }
    `,tokensInfoSecondary:i.css`
      color: ${e.colors.text.secondary};
    `,disabled:i.css`
      td a {
        color: ${e.colors.text.secondary};
      }
    `}),w=T;var W,L,R,O,P,M,V,E,K,F,B,z=n(79710);const _={changeQuery:z.R5,fetchACOptions:z.bX,fetchServiceAccounts:z.Xd,deleteServiceAccount:z.yN,updateServiceAccount:z.TL,changeStateFilter:z.XE,createServiceAccountToken:z.fT,getApiKeysMigrationStatus:z.hv,getApiKeysMigrationInfo:z.xi,closeApiKeysMigrationInfo:z.f3},H=(0,r.connect)((function(e){return Object.assign({},e.serviceAccounts)}),_),Q=e=>{let{serviceAccounts:s,isLoading:n,roleOptions:t,query:a,serviceAccountStateFilter:r,apiKeysMigrated:A,showApiKeysMigrationInfo:S,changeQuery:I,fetchACOptions:C,fetchServiceAccounts:D,deleteServiceAccount:T,updateServiceAccount:N,changeStateFilter:z,createServiceAccountToken:_,getApiKeysMigrationStatus:H,getApiKeysMigrationInfo:Q,closeApiKeysMigrationInfo:X}=e;const q=(0,l.wW)(U),[J,Y]=(0,o.useState)(!1),[Z,G]=(0,o.useState)(!1),[ee,se]=(0,o.useState)(!1),[ne,te]=(0,o.useState)(""),[ie,ae]=(0,o.useState)(null);(0,o.useEffect)((()=>{D({withLoadingIndicator:!0}),H(),Q(),f.Vt.licensedAccessControlEnabled()&&C()}),[C,D,H,Q]);const ce=0===s.length&&r===k.Wc.All&&!a,oe=async(e,s)=>{const n=Object.assign({},s,{role:e});N(n),f.Vt.licensedAccessControlEnabled()&&C()},re=e=>{ae(e),G(!0)},le=e=>{ae(e),se(!0)},de=e=>{N(Object.assign({},e,{isDisabled:!1}))},he=e=>{ae(e),Y(!0)},ue=()=>{G(!1),ae(null)},me=()=>{se(!1),ae(null)},xe=W||(W=(0,$.jsx)("a",{className:"external-link",href:"https://grafana.com/docs/grafana/latest/administration/service-accounts/",target:"_blank",rel:"noopener noreferrer",children:"here."})),ge=(0,$.jsxs)("span",{children:["Service accounts and their tokens can be used to authenticate against the Grafana API. Find out more ",xe]});return(0,$.jsx)(v.T,{navId:"serviceaccounts",subTitle:ge,children:(0,$.jsxs)(v.T.Contents,{children:[A&&S&&(0,$.jsx)(d.b,{title:"API keys migrated to Service accounts. Your keys are now called tokens and live inside respective service accounts. Learn more.",severity:"success",onRemove:()=>{X()}}),(0,$.jsx)(v.T.OldNavOnly,{children:(0,$.jsxs)("div",{className:q.pageHeader,children:[L||(L=(0,$.jsx)("h2",{children:"Service accounts"})),(0,$.jsxs)("div",{className:q.apiKeyInfoLabel,children:[(0,$.jsx)(h.u,{placement:"bottom",interactive:!0,content:(0,$.jsxs)($.Fragment,{children:["API keys are now service accounts with tokens. Find out more ",xe]}),children:R||(R=(0,$.jsx)(u.J,{name:"question-circle"}))}),O||(O=(0,$.jsx)("span",{children:"Looking for API keys?"}))]})]})}),(0,$.jsxs)("div",{className:"page-action-bar",children:[(0,$.jsx)("div",{className:"gf-form gf-form--grow",children:(0,$.jsx)(m.H,{placeholder:"Search service account by name",value:a,onChange:e=>{I(e)},width:50})}),(0,$.jsx)(x.S,{options:[{label:"All",value:k.Wc.All},{label:"With expired tokens",value:k.Wc.WithExpiredTokens},{label:"Disabled",value:k.Wc.Disabled}],onChange:e=>{z(e)},value:r,className:q.filter}),!ce&&f.Vt.hasPermission(k.bW.ServiceAccountsCreate)&&(P||(P=(0,$.jsx)(g.Qj,{href:"org/serviceaccounts/create",variant:"primary",children:"Add service account"})))]}),n&&(M||(M=(0,$.jsx)(j.Z,{}))),!n&&ce&&(0,$.jsx)($.Fragment,{children:(0,$.jsx)(b.Z,{title:"You haven't created any service accounts yet.",buttonIcon:"key-skeleton-alt",buttonLink:"org/serviceaccounts/create",buttonTitle:"Add service account",buttonDisabled:!f.Vt.hasPermission(k.bW.ServiceAccountsCreate),proTip:"Remember, you can provide specific permissions for API access to other applications.",proTipLink:"",proTipLinkTitle:"",proTipTarget:"_blank"})}),!n&&0!==s.length&&(0,$.jsx)($.Fragment,{children:(0,$.jsx)("div",{className:(0,i.cx)(q.table,"admin-list-table"),children:(0,$.jsxs)("table",{className:"filter-table filter-table--hover",children:[(0,$.jsx)("thead",{children:(0,$.jsxs)("tr",{children:[V||(V=(0,$.jsx)("th",{})),E||(E=(0,$.jsx)("th",{children:"Account"})),K||(K=(0,$.jsx)("th",{children:"ID"})),F||(F=(0,$.jsx)("th",{children:"Roles"})),B||(B=(0,$.jsx)("th",{children:"Tokens"})),(0,$.jsx)("th",{style:{width:"34px"}})]})}),(0,$.jsx)("tbody",{children:s.map((e=>(0,$.jsx)(w,{serviceAccount:e,roleOptions:t,onRoleChange:oe,onRemoveButtonClick:re,onDisable:le,onEnable:de,onAddTokenClick:he},e.id)))})]})})}),ie&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(p.s,{isOpen:Z,body:`Are you sure you want to delete '${ie.name}'${ie.tokens?` and ${ie.tokens} accompanying ${c()("token",ie.tokens)}`:""}?`,confirmText:"Delete",title:"Delete service account",onConfirm:async()=>{ie&&T(ie.id),ue()},onDismiss:ue}),(0,$.jsx)(p.s,{isOpen:ee,title:"Disable service account",body:`Are you sure you want to disable '${ie.name}'?`,confirmText:"Disable service account",onConfirm:()=>{ie&&N(Object.assign({},ie,{isDisabled:!0})),me()},onDismiss:me}),(0,$.jsx)(y.m,{isOpen:J,token:ne,serviceAccountLogin:ie.login,onCreateToken:async e=>{ie&&_(ie.id,e,te)},onClose:()=>{Y(!1),ae(null),te("")}})]})]})})},U=e=>({table:i.css`
      margin-top: ${e.spacing(3)};
    `,filter:i.css`
      margin: 0 ${e.spacing(1)};
    `,row:i.css`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${e.spacing(.5)} 0 !important;
      }
    `,unitTooltip:i.css`
      display: flex;
      flex-direction: column;
    `,unitItem:i.css`
      cursor: pointer;
      padding: ${e.spacing(.5)} 0;
      margin-right: ${e.spacing(1)};
    `,disabled:i.css`
      color: ${e.colors.text.disabled};
    `,link:i.css`
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    `,pageHeader:i.css`
      display: flex;
      margin-bottom: ${e.spacing(2)};
    `,apiKeyInfoLabel:i.css`
      margin-left: ${e.spacing(1)};
      line-height: 2.2;
      flex-grow: 1;
      color: ${e.colors.text.secondary};

      span {
        padding: ${e.spacing(.5)};
      }
    `,filterDelimiter:i.css`
      flex-grow: 1;
    `}),X=H(Q)}}]);
//# sourceMappingURL=ServiceAccountsPage.63175dcab765a2e43439.js.map