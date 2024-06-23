(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[76675],{92292:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var r=i(91503),n=i(33990);const o=()=>(0,n.tZ)(r.lk,{})},62027:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var r=i(91931),n=i(62091),o=i(71110),a=i(33990);const s=(0,r.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",flexBasis:"50%",position:"relative",height:"auto",boxSizing:"border-box",cursor:"pointer",padding:t.sizing.scale300}})),l=(0,r.zo)("h2",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.primary600}})),d=(0,r.zo)("span",(e=>{let{$theme:t}=e;return{...t.typography.LabelSmall}})),c=(0,r.zo)(n.Z,{objectFit:"contain"}),u=(0,r.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.02)"}),h=(0,r.zo)("div",(e=>{let{$theme:t}=e;return{position:"relative",borderRadius:t.borders.radius400,overflow:"hidden",display:"flex",justifyContent:"center"}})),g=(0,o.pZ)(i(19702)),p="148px",m=e=>{let{item:t,onProductSelect:i}=e;if(!t)return null;const r=t.imageURL||g;return(0,a.BX)(s,{onClick:i,children:[(0,a.BX)(h,{children:[(0,a.tZ)(c,{src:r,loading:"lazy",height:p,width:p}),(0,a.tZ)(u,{})]}),(0,a.tZ)(d,{children:t.formattedPrice}),(0,a.tZ)(l,{children:t.title})]})}},38349:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var r=i(91931),n=i(62091),o=i(89400),a=i(33990);const s=(0,r.zo)("div",{width:"100%"}),l=(0,r.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.HeadingSmall,marginBottom:t.sizing.scale550}})),d=(0,r.zo)("div",(e=>{let{$theme:t}=e;return{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",boxSizing:"border-box",cursor:"pointer",marginBottom:t.sizing.scale300}})),c=(0,r.zo)("div",{display:"flex",minWidth:0,width:"100%",flexWrap:"wrap"}),u=(0,r.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.contentSecondary,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",flexBasis:"100%"}})),h=(0,r.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.LabelMedium,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",flexBasis:"100%"}})),g=(0,r.zo)("div",(e=>{let{$theme:t}=e;return{width:"100%",minWidth:0,display:"flex",flexDirection:"column",alignItems:"start",flex:"1 1",marginRight:t.sizing.scale400}})),p=e=>{let{items:t,title:i,onProductSelect:p}=e;const[,m]=(0,r.hQ)();return(0,a.BX)(s,{children:[(0,a.tZ)(l,{children:i?.text}),t?.map((e=>(0,a.BX)(d,{onClick:()=>(e=>{const t={itemUUID:e.uuid,sectionUUID:e.sectionUuid,subsectionUUID:e.subsectionUuid,title:e.title,description:e.itemDescription,imageURL:e.imageUrl,price:e.price,formattedPrice:e.priceTagline?.text,...e};p(t)})(e),children:[(0,a.BX)(g,{children:[(0,a.tZ)(c,{children:(0,a.tZ)(h,{children:e.title})}),e.priceTagline?(0,a.tZ)(o.Z,{badge:e.priceTagline,baseFont:"ParagraphSmall"}):null,e.itemDescriptionBadge?(0,a.tZ)(c,{children:(0,a.tZ)(u,{children:e.itemDescription})}):null]}),e?.imageUrl?(0,a.tZ)(n.Z,{src:e.imageUrl,height:m.sizing.scale2400,width:m.sizing.scale2400}):null]},e.uuid)))]})}},22717:(e,t,i)=>{"use strict";i.d(t,{Z:()=>y});var r=i(43193),n=i(62851),o=i("__fusion__915"),a=i(91931),s=i(36278),l=i(36151),d=i(73518),c=i(33990);function u(e,t){return(0,c.tZ)(d.Z,{viewBox:"0 0 20 20",ref:t,...e,children:(0,c.tZ)("path",{d:"M9.999.833A9.14 9.14 0 00.832 10a9.14 9.14 0 009.167 9.166A9.14 9.14 0 0019.165 10 9.14 9.14 0 0010 .833zm5 12.5L13.332 15l-3.333-3.334L6.665 15 5 13.333 8.332 10 4.999 6.666 6.665 5 10 8.333 13.332 5l1.667 1.666L11.665 10 15 13.333z"})})}const h=l.forwardRef(u);var g=i(14016),p=i(70401);const m=(0,a.w1)(n.U,(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",borderRadius:t.borders.pillButtonBorderRadius,boxShadow:"none"}})),f=(0,a.zo)("input",(e=>({background:"transparent",flex:1,height:"100%",outline:"none","::placeholder":{...e.$theme.typography.ParagraphMedium,color:e.$theme.colors.contentSecondary,flex:1,textAlign:"left"}}))),y=e=>{let{setUserQuery:t}=e;const i=(0,g.T)(),n=r.useRef(null),a=(0,p.Z)((e=>{t(e.target.value)}),500);return(0,c.BX)(m,{children:[(0,c.tZ)(o.default,{size:"22px"}),(0,c.tZ)(s.Tr,{}),(0,c.tZ)(f,{placeholder:i("out_of_items.search_substitutes"),onChange:e=>a(e),"data-testid":"search-substitutions-input",maxLength:100,ref:n}),n?.current?(0,c.tZ)(h,{size:18,onClick:()=>(null!==n.current&&(n.current.value=""),void t(""))}):null]})}},4909:(e,t,i)=>{"use strict";i.d(t,{V:()=>a});var r=i(86695),n=i(68065),o=i(33990);function a(e){return(0,o.tZ)(r.zx,{size:n.NO.large,isFullWidth:!0,...e})}},33259:(e,t,i)=>{"use strict";i.d(t,{_Z:()=>d,ay:()=>u,hQ:()=>c});var r=i(86695),n=i(68065),o=i("__fusion__568"),a=i("__fusion__1020"),s=i(14016),l=i(33990);function d(e){const{overrides:t,...i}=e;return(0,l.tZ)(r.zx,{shape:n.X3.circle,kind:r.TO.monochromatic,...i,children:e.children})}function c(e){const t=(0,s.T)();return(0,l.tZ)(d,{"aria-label":t("close"),title:t("close"),...e,children:(0,l.tZ)(a.default,{size:16,title:t("close")})})}function u(e){const t=(0,s.T)();return(0,l.tZ)(d,{"aria-label":t("back"),title:t("shared.goBack"),...e,children:(0,l.tZ)(o.default,{size:16,title:t("back")})})}},91086:(e,t,i)=>{"use strict";i.d(t,{Cx:()=>g,P8:()=>p,iQ:()=>d,rY:()=>l,sQ:()=>h,xB:()=>f});var r=i(36151),n=i(91931),o=i(15070),a=i(12675),s=i(33990);const l={floatingOnceScrolled:"floatingOnceScrolled",floating:"floating",static:"static"},d=(0,n.zo)("div",(e=>{let{$floatingMode:t}=e;return t===l.floatingOnceScrolled||t===l.floating?{position:"sticky",top:0,zIndex:1}:{position:"relative"}})),c=(0,n.zo)("div",{position:"absolute",width:"100%"}),u=(0,n.zo)("div",(e=>{let{$isExpanded:t,$showHeaderShadowOnExpanded:i,$theme:r}=e;return{position:"absolute",top:0,bottom:0,width:"100%",display:"flex",alignItems:"center",backgroundColor:r.colors.backgroundPrimary,boxShadow:t&&i?r.shadows.divider:void 0,transition:"transform 300ms ease, opacity 300ms ease",transform:t?"scale(1, 1)":"scale(1, 0)",transformOrigin:"top",opacity:t?1:0}})),h=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{position:"relative",display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",justifyContent:"space-between",width:"100%",paddingLeft:t.sizing.scale300,paddingRight:t.sizing.scale300,paddingTop:t.sizing.scale300,paddingBottom:t.sizing.scale300,boxSizing:"border-box"}})),g=(0,n.zo)("div",(e=>{let{$isExpanded:t,$theme:i}=e;return{...i.typography.LabelLarge,flex:1,textAlign:"center",marginLeft:i.sizing.scale200,marginRight:i.sizing.scale200,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",transition:"transform 300ms ease, opacity 300ms ease",transform:t?"translateY(0)":`translateY(-${i.sizing.scale100})`,opacity:t?1:0}})),p=(0,n.zo)("div",{justifySelf:"left"}),m=(0,n.zo)("div",{justifySelf:"right"});function f(e){const{canExpand:t=!0,showHeaderShadowOnExpanded:i=!0,hideHeaderOnEmbeddedApp:n=!0,floatingMode:f="floatingOnceScrolled",children:y}=e,{isModalTitleHidden:z}=(0,a.v)();let x;x=void 0!==e.isExpanded?e.isExpanded:z;const v=f===l.floating?c:r.Fragment,Z=(0,o.v)((e=>{let{embeddedFeatures:t}=e;return t}));return n&&Z.xlbHeaderBridge?null:(0,s.tZ)(d,{$floatingMode:f,children:(0,s.BX)(v,{children:[t?(0,s.tZ)(u,{$isExpanded:x,$showHeaderShadowOnExpanded:i}):null,(0,s.tZ)(h,{children:y||(0,s.BX)(s.HY,{children:[(0,s.tZ)(p,{children:e.leftButton}),(0,s.tZ)(g,{$isExpanded:!!t&&x,children:e.title}),(0,s.tZ)(m,{children:e.rightButton})]})})]})})}},30110:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var r=i(71110),n=i(46933),o=i(91931),a=i(34567),s=i(62091),l=i(33990);const d=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.sizing.scale1400} ${t.sizing.scale600} ${t.sizing.scale1600}`,alignItems:"center",maxWidth:"624px",margin:"0 auto"}})),c=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{width:"226px",paddingBottom:t.sizing.scale1400,transition:"transform 50ms ease-in-out"}})),u=(0,o.zo)(s.Z,{width:"100%",height:"100%"}),h=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.DisplayXSmall,textAlign:"center",paddingBottom:t.sizing.scale300}})),g=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphMedium,paddingBottom:t.sizing.scale800,textAlign:"center"}})),p=e=>{let{refetch:t}=e;return(0,l.BX)(d,{children:[(0,l.tZ)(c,{children:(0,l.tZ)(u,{src:(0,r.pZ)(i(11731))})}),(0,l.tZ)(h,{children:(0,l.tZ)(n.v,{id:"components.feedtryagain.error"})}),(0,l.tZ)(g,{children:(0,l.tZ)(n.v,{id:"shared.somethingWentWrong"})}),(0,l.tZ)(a.Z,{onClick:t,children:(0,l.tZ)(n.v,{id:"shared.retry"})})]})}},1636:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var r=i(71110),n=i(46933),o=i(91931),a=i(62091),s=i(33990);const l=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.sizing.scale1400} ${t.sizing.scale600} ${t.sizing.scale1600}`,alignItems:"center",maxWidth:"624px",margin:"0 auto"}})),d=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{width:"226px",paddingBottom:t.sizing.scale1400,transition:"transform 50ms ease-in-out"}})),c=(0,o.zo)(a.Z,{width:"100%",height:"100%"}),u=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.HeadingXSmall,textAlign:"center",paddingBottom:t.sizing.scale300}})),h=e=>{let{userQuery:t}=e;return(0,s.BX)(l,{children:[(0,s.tZ)(d,{children:(0,s.tZ)(c,{src:(0,r.pZ)(i(44764))})}),(0,s.tZ)(u,{children:(0,s.tZ)(n.v,{id:"component.feedEmptyState.search.title",data:{userQuery:t}})})]})}},25598:(e,t,i)=>{"use strict";i.d(t,{o:()=>a});var r=i(74622),n=i(2237),o=i(62459);function a(e,t){const i=(0,o.Z)("getSearchSubstitutionsV1"),a={queryKey:(0,n.H)("getSearchSubstitutionsV1",e),queryFn:e=>{let{queryKey:t}=e;return i.request("getSearchSubstitutionsV1",t[1])}};t&&t.queryObserverOptions&&Object.assign(a,t.queryObserverOptions);const s=(0,r.useQuery)(a);let l=null,d=!1;const c=[];if(s.isSuccess&&s?.data?.catalogSectionsMap){const e=Object.keys(s?.data?.catalogSectionsMap);d=e.length>0,d&&(l=e.flatMap((e=>s?.data?.catalogSectionsMap?.[e])),l.forEach((e=>{const t=e.payload;"standardItemsPayload"===t.type&&c.push({items:t.standardItemsPayload?.catalogItems,title:t.standardItemsPayload?.title})})))}return{isLoading:s.isLoading,isError:s.isError,catalogSections:c,hasResults:d,refetch:s.refetch}}},47162:(e,t,i)=>{"use strict";i.d(t,{v:()=>a});var r=i(74622),n=i(2237),o=i(62459);function a(e,t){const i=(0,o.Z)("getItemSubstitutionsV1"),a=(0,n.H)("getItemSubstitutionsV1",e);return(0,r.useQuery)({queryKey:a,queryFn:e=>{let{queryKey:t}=e;return i.request("getItemSubstitutionsV1",t[1])},...t?.queryObserverOptions})}},44764:(e,t,i)=>{e.exports=i.p+"f601b8be1064c30a.svg"}}]);