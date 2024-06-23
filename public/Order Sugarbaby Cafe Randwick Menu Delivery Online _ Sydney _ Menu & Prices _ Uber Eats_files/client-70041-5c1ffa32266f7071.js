(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[70041],{86547:(e,t,r)=>{"use strict";r.d(t,{DY:()=>i,_b:()=>l});Object.freeze({UNKNOWN:"UNKNOWN",ACTIVE:"ACTIVE",DELETED:"DELETED",DELETING:"DELETING"});const i=Object.freeze({UNKNOWN:"UNKNOWN",MEAL_PLAN_VIEW:"MEAL_PLAN_VIEW",CARTS_VIEW:"CARTS_VIEW",MEAL_PLAN_VIEW_COMPACT:"MEAL_PLAN_VIEW_COMPACT"}),l=Object.freeze({CREATOR:"CREATOR",PARTICIPANT:"PARTICIPANT",UNKNOWN:"UNKNOWN"})},31723:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var i=r(36151),l=r(73518),n=r(33990);function a(e,t){return(0,n.tZ)(l.Z,{viewBox:"0 0 9 12",ref:t,...e,children:(0,n.tZ)("path",{d:"M8.9 6l-4.6 6H.5l4.6-6L.5 0h3.8l4.6 6z"})})}const o=i.forwardRef(a)},15208:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s,b:()=>o});var i=r(43193),l=r(94579),n=r(91931),a=r(33990);const o=(0,n.zo)("div",(e=>{let{$ignorePadding:t}=e;return{marginLeft:`-${l.lK}`,marginRight:`-${l.lK}`,...t?{}:{paddingLeft:l.lK,paddingRight:l.lK}}})),d=(0,n.zo)("div",(e=>({maxWidth:e.$maxWidth?e.$maxWidth:l.eo,minWidth:l.pA,margin:"0 auto",boxSizing:"border-box",...e.$ignorePadding?{}:{padding:`0 ${l.lK}`}}))),s=(0,n.Le)(d,(e=>i.forwardRef((function(t,r){return(0,a.tZ)(e,{ref:r,...t})}))))},64420:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var i=r(74622),l=r(71576),n=r(53811),a=r(8690),o=r(54592),d=r(38172),s=r(21025),c=r(62459),p=r(92431),u=r(34626),h=r(87696);const g=()=>{const e=(0,c.Z)("removeMemberFromDraftOrderV2"),t=(0,c.Z)("addMemberToDraftOrderV2"),r=(0,l.Z)("getDraftOrderByUuidV2"),g=(0,i.useQueryClient)(),{clearRepeatOrder:m}=(0,a.Z)(),f=(0,s.f)(),O=(0,p.Z)(),{user:Z}=(0,u.Z)(),v=Z.data?.isLoggedIn;return{removeMemberFromDraftOrder:(0,i.useMutation)((t=>e.request("removeMemberFromDraftOrderV2",t)),{onSuccess:(e,t)=>{"repeatOrderTemplateUUID"in t&&g.invalidateQueries([...o.H,t.repeatOrderTemplateUUID]),t.draftOrderUUID&&r({draftOrderUUID:t.draftOrderUUID})}}),leaveDraftOrder:(0,i.useMutation)((t=>e.request("removeMemberFromDraftOrderV2",t)),{onSuccess:(e,t)=>{g.invalidateQueries(n.x),"repeatOrderTemplateUUID"in t&&m(t.repeatOrderTemplateUUID),g.invalidateQueries(d.IG)}}),addMemberToDraftOrder:(0,i.useMutation)((e=>t.request("addMemberToDraftOrderV2",e)),{onSuccess:(e,t)=>{"repeatOrderTemplateUUID"in t?(g.invalidateQueries([...o.H,t.repeatOrderTemplateUUID]),f()):g.invalidateQueries(n.x),"draftOrderUUID"in t&&r({draftOrderUUID:t.draftOrderUUID}).then((e=>{let{draftOrder:t}=e;(0,h.zX)(O,t,Boolean(v))}))}})}}},19206:(e,t,r)=>{"use strict";r.d(t,{Z:()=>H});var i=r("__fusion__568"),l=r(85341),n=r(46933),a=r(52246),o=r(86547),d=r(31723),s=r(40606),c=r(91931),p=r(29194),u=r(76150),h=r(89217),g=r(31913),m=r(65717),f=r(62149),O=r(23892),Z=r(56349),v=r(1540),x=r(91066),_=r(10312),U=r(57900),y=r(33990);const C=(0,c.zo)(l.Z,(e=>{let{$isMobile:t,$isXlb:r}=e;return{maxHeight:t?r?"85vh":"75vh":"auto"}})),b=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",position:"sticky",top:0,zIndex:1,background:t.colors.backgroundPrimary,borderBottom:`2px solid ${t.colors.borderOpaque}`,...t.typography.LabelLarge}})),I=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{height:t.sizing.scale1600,width:t.sizing.scale1600,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}})),w=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexGrow:1,alignItems:"center",paddingRight:t.sizing.scale800,minWidth:"0"}})),M=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.LabelLarge,color:t.colors.contentPrimary,flexGrow:1,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:"100%"}})),P=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexShrink:0,paddingLeft:t.sizing.scale800}})),S=(0,c.zo)("ul",{display:"flex",flexDirection:"column",listStyle:"none"}),D=(0,c.zo)("div",(e=>{let{$theme:t,$direction:r}=e;return{padding:`${t.sizing.scale600} ${t.sizing.scale600} ${t.sizing.scale300} ${t.sizing.scale600}`,textAlign:"rtl"===r?"right":"left"}})),z=(0,c.zo)("li",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",cursor:"pointer",":hover":{background:t.colors.menuFillHover}}})),R=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexShrink:0,height:t.sizing.scale1600,width:t.sizing.scale1600,margin:t.sizing.scale600,borderRadius:"50%",overflow:"hidden",position:"relative"}})),k=(0,c.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0}),$=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",flexGrow:1,minWidth:"0",minHeight:t.sizing.scale2400,overflow:"hidden",borderBottom:`1px solid ${t.colors.borderOpaque}`}})),T=(0,c.zo)("div",(e=>{let{$direction:t}=e;return{minWidth:"0",display:"flex",flexDirection:"column",flexGrow:1,textAlign:"rtl"===t?"right":"left"}})),B=(0,c.zo)("div",{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}),E=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexShrink:0,alignItems:"center",flexDirection:"row",paddingRight:t.sizing.scale800,paddingLeft:t.sizing.scale600}})),A=(0,c.zo)(a.rU,(e=>{let{$theme:t}=e;return{color:t.colors.action,...t.typography.LabelMedium}})),H=e=>{let{onBackClick:t,onCartSelect:r,isMobile:a,mealPlanUUID:c}=e;const H=(0,f.TH)(),{query:L}=(0,v.M)({mealPlanUUID:c,draftOrderPayloadType:{},screenId:o.DY.CARTS_VIEW}),{isCreator:V}=(0,x.Z)(c),N=(0,_.P1)(H,c),{closeSidebarCart:W,closeCartDropdown:X}=(0,u.Lb)(),q=(0,p.gm)(),G=(0,m.Z)();return(0,y.tZ)(s.a,{source:L,loaded:e=>{let{draftOrderPayload:o}=e;const s=o?.view;return(0,y.BX)(C,{$isMobile:a,$isXLB:G,children:[(0,y.BX)(b,{children:[(0,y.tZ)(I,{onClick:e=>{e.stopPropagation(),t?.()},children:(0,y.tZ)(i.default,{})}),(0,y.BX)(w,{children:[(0,y.tZ)(M,{$direction:q,children:s?.title}),(0,y.tZ)(P,{children:(0,y.tZ)(A,{to:N,onClick:()=>{X(),W()},children:V?(0,y.tZ)(n.v,{id:"go.manage"}):(0,y.tZ)(n.v,{id:"carousel.see_all"})})})]})]}),(0,y.tZ)(l.Z,{children:s?.emptyState?(0,y.tZ)(U._,{emptyState:s?.emptyState}):s?.sections?.map(((e,t)=>(0,y.BX)(S,{children:[(0,y.tZ)(D,{$direction:q,children:(0,y.tZ)(g.ZP,{text:e.title})}),e.rows?.map(((e,t)=>(0,y.BX)(z,{onClick:()=>{const i=e.button?.action;"openCart"===i?.type&&i?.openCart?.draftOrderUUID&&r(i.openCart.draftOrderUUID,t)},children:[(0,y.BX)(R,{children:[(0,y.tZ)(h.SZ,{richIllustration:e.leadingIllustration}),(0,y.tZ)(k,{})]}),(0,y.BX)($,{children:[(0,y.BX)(T,{$direction:q,children:[(0,y.tZ)(B,{children:(0,y.tZ)(g.ZP,{text:e.title,whiteSpace:"nowrap"})}),e.taglines?.map(((e,t)=>(0,y.tZ)(B,{children:(0,y.tZ)(g.ZP,{text:e,whiteSpace:"nowrap"})},t)))]}),(0,y.tZ)(E,{children:(0,y.tZ)(d.Z,{size:12,color:"primary400"})})]})]},t)))]},t)))})]})},loading:()=>(0,y.tZ)(Z.ZP,{}),error:()=>(0,y.tZ)(O.Z,{})})}},57900:(e,t,r)=>{"use strict";r.d(t,{_:()=>O});var i=r(85341),l=r(89217),n=r(31913),a=r(47073),o=r(91931),d=r(15070),s=r(64420),c=r(33535),p=r(62149),u=r(91631),h=r(51434),g=r(10312);var m=r(33990);const f=(0,o.zo)("div",(e=>{let{$theme:t,$isMobile:r}=e;return{display:"flex",flex:1,alignItems:"center",justifyContent:"center",flexDirection:"column",textAlign:"center",gap:t.sizing.scale500,marginTop:r?t.sizing.scale600:t.sizing.scale1600,marginBottom:t.sizing.scale800}})),O=e=>{let{emptyState:t}=e;const{isMobile:r}=(0,d.v)((e=>{let{device:t}=e;return t})),{title:o,subtitle:O,button:Z,illustration:v,action:x}=t,{handleMealPlanViewOrderClick:_}=(()=>{const{addMemberToDraftOrder:e}=(0,s.Z)(),t=(0,c.ZP)(),r=(0,p.TH)(),i=(0,u.k6)();return{handleMealPlanViewOrderClick:e=>{if(e&&e.type)switch(e.type){case h.MQ.seeAll:i.push((0,g.FO)(r,String(e.seeAll.mealPlanUUID)));break;case h.MQ.createOrder:t("eats:meal_plan_create_order_click",{source:"order_view"}),i.push((0,g.n)(r,String(e.createOrder.mealPlanUUID)))}},isLoading:e.isLoading}})();return(0,m.BX)(f,{$isMobile:r,children:[(0,m.tZ)(l.SZ,{richIllustration:v}),(0,m.tZ)(i.Z,{display:"flex",flexDirection:"column",children:(0,m.tZ)(n.ZP,{text:o})}),(0,m.tZ)(i.Z,{maxWidth:"500px",children:(0,m.tZ)(n.ZP,{text:O})}),Z&&x?(0,m.tZ)(i.Z,{width:"auto",marginTop:"scale500",children:(0,m.tZ)(a.Z,{viewModel:Z,onClick:e=>{_(x)}})}):null]})}},51434:(e,t,r)=>{"use strict";r.d(t,{Ap:()=>Z,B3:()=>O,EJ:()=>f,G8:()=>s,Gl:()=>i,MQ:()=>m,Nx:()=>o,Tj:()=>u,Uw:()=>c,W5:()=>a,WM:()=>g,dM:()=>d,fT:()=>l,ff:()=>p,jF:()=>n,q6:()=>v,xZ:()=>h});const i="https://tb-static.uber.com/prod/meal-plan/assets/Uber%20Eats%20meal%20plan%20template.csv",l=5,n={MC_HOUR_HALF:30,MC_HOUR_1:60,HOURS_2:120,MC_HOURS_3:180,HOURS_4:240,MC_HOURS_5:300,MC_HOURS_6:360,MC_HOURS_7:420,MC_HOURS_8:480,MC_HOURS_9:540,MC_HOURS_10:600,MC_HOURS_11:660,HOURS_12:720,MC_HOURS_13:780,MC_HOURS_14:840,MC_HOURS_15:900,MC_HOURS_16:960,MC_HOURS_17:1020,MC_HOURS_18:1080,MC_HOURS_19:1140,MC_HOURS_20:1200,MC_HOURS_21:1260,MC_HOURS_22:1320,MC_HOURS_23:1380,HOURS_24:1440,HOURS_48:2880},a=300,o=158,d="443px",s={PAST:"PAST",ACTIVE:"ACTIVE",UPCOMING:"UPCOMING"},c={skipEmptyLines:"greedy",delimiter:"\n"},p=25,u="395px",h="skippedEmails",g={joinOrder:"joinOrder",openCart:"openCart",openStoreFront:"openStoreFront",trackOrder:"trackOrder",viewOrder:"viewOrder",createOrder:"createOrder",unknown:"unknown"},m={seeAll:"seeAll",createOrder:"createOrder",unknown:"unknown"},f="USD",O={Tail:{style:e=>{let{$theme:t}=e;return{backgroundColor:t.colors.mono400}}},Icon:{style:e=>{let{$theme:t,$isActive:r}=e;const i=r?t.sizing.scale700:t.sizing.scale400;return{width:i,height:i,lineHeight:i,borderTopLeftRadius:i,borderTopRightRadius:i,borderBottomRightRadius:i,borderBottomLeftRadius:i,backgroundColor:r?t.colors.progressStepsActiveFill:t.colors.mono400}}}},Z=15,v=18},1540:(e,t,r)=>{"use strict";r.d(t,{M:()=>s});var i=r(30011),l=r.n(i),n=r(74622),a=r(2237),o=r(62459);var d=r(10312);const s=e=>{const{uuid:t}=(0,d.fY)(),r=function(e,t){const r=(0,o.Z)("getMealPlanOrdersViewV1"),i=(0,a.H)("getMealPlanOrdersViewV1",e);return(0,n.useQuery)({queryKey:i,queryFn:e=>{let{queryKey:t}=e;return r.request("getMealPlanOrdersViewV1",t[1])},...t?.queryObserverOptions})}({mealPlanUUID:t,...e},{queryObserverOptions:{refetchOnMount:"always",refetchInterval:e=>{const t=e?.draftOrderPayload?.loadingState?.reloadInMs;if(t){return l().fromValue(t).toNumber()}return!1}}}),{data:i,isLoading:s}=r;return{query:r,data:i,isLoading:s}}},91066:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o,L:()=>d});var i=r(74622),l=r(2237),n=r(62459);var a=r(86547);const o=(e,t)=>{const r=function(e,t){const r=(0,n.Z)("getMealPlanByUuidV1"),a=(0,l.H)("getMealPlanByUuidV1",e);return(0,i.useQuery)({queryKey:a,queryFn:e=>{let{queryKey:t}=e;return r.request("getMealPlanByUuidV1",t[1])},...t?.queryObserverOptions})}({mealPlanUUID:e,includeParticipantCount:!0,includeAssociatedParticipantInfo:!0},{queryObserverOptions:{staleTime:1e4}}),o=r.data,d=((e,t)=>{const r="getMealPlanDeliveryLocationV1",l=(0,n.Z)(r),a=[r,e];return(0,i.useQuery)({queryKey:a,queryFn:()=>l.request(r,e),...t})})({placeId:o?.mealPlan?.placeReferenceInfo?.placeID??"",provider:o?.mealPlan?.placeReferenceInfo?.provider??""},{enabled:Boolean(o)&&Boolean(t?.fetchDeliveryLocation)}),s=o?.mealPlan?.associatedParticipantInfo;return{deliveryLocationQuery:d,mealPlanQuery:r,mealPlan:o?.mealPlan,isCreator:s?.role===a._b.CREATOR,isParticipant:s?.role===a._b.PARTICIPANT,participantCount:s?.participantCount??0,participantUUID:s?.participantUUID}},d=e=>["getMealPlanByUuidV1",{mealPlanUUID:e}]},31111:(e,t,r)=>{"use strict";r.d(t,{A:()=>v,Z:()=>x});var i=r(91931),l=r(36278),n=r(52298),a=r(31723),o=r(29194),d=r(31913),s=r(89400),c=r(10015),p=r(33990);const u=(0,i.zo)("div",(e=>{let{$isMobile:t}=e;return{display:"flex",maxWidth:t?"calc(100vw - 84px)":"315px",alignItems:"center"}})),h=(0,i.zo)("div",(e=>{let{$direction:t}=e;return{justifyContent:"center",display:"flex",flexDirection:"column",minWidth:"0",textAlign:"rtl"===t?"right":"left"}})),g=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.LabelMedium,color:t.colors.contentPrimary,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:"500px"}})),m=(0,i.zo)("div",{display:"flex",alignItems:"center"}),f=(0,i.zo)("div",{display:"flex",alignItems:"center",flexDirection:"row"}),O=(0,i.zo)("div",{display:"flex",alignItems:"center",flexDirection:"row"}),Z=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,backgroundColor:t.colors.backgroundInversePrimary,borderRadius:"50%",color:t.colors.contentInversePrimary,height:"24px",width:"24px",marginRight:"16px",display:"flex",justifyContent:"center",alignItems:"center"}})),v=e=>{let{cartView:t,isMobile:r=!1,isHovering:i=!1}=e;const{title:a,tagline1:m,tagline2:f,tagline3:O,metadata:Z}=t,v=(0,o.gm)();return(0,p.BX)(u,{$isMobile:r,children:[(0,p.tZ)(c.xB,{cartView:t,isHovering:i,showBorder:Boolean(Z?.openCheckoutMetadata?.bundleGroupMetadata)}),(0,p.tZ)(l.ZP,{$width:"16px"}),(0,p.BX)(h,{$direction:v,children:[(0,p.tZ)(g,{children:a}),(0,p.tZ)(n.ZP,{$height:2}),(0,p.tZ)(s.Z,{badge:m,baseFont:"ParagraphSmall",truncateTextWithEllipsis:!0}),(0,p.tZ)(n.ZP,{$height:2}),(0,p.tZ)(s.Z,{badge:f,baseFont:"ParagraphSmall",truncateTextWithEllipsis:!0}),O?(0,p.BX)(p.HY,{children:[(0,p.tZ)(n.ZP,{$height:4}),(0,p.tZ)(d.ZP,{text:O})]}):null]})]})},x=e=>{let{cartView:t,isMobile:r=!1,isHovering:i=!1}=e;const{itemCount:l}=t;return(0,p.BX)(p.HY,{children:[(0,p.tZ)(v,{cartView:t,isMobile:r,isHovering:i}),(0,p.BX)(m,{children:[void 0!==l?(0,p.tZ)(O,{children:(0,p.tZ)(Z,{children:l})}):null,(0,p.tZ)(f,{children:(0,p.tZ)(a.Z,{size:12,color:"primary400"})})]})]})}},63346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>C});var i=r(43193),l=r(36151),n=r(91631),a=r(62149),o=r(91931),d=r(31111),s=r(53811),c=r(35207),p=r(33990);const u=()=>{const e=(0,s.O)().data?.topBanner;return(0,p.tZ)(c.ZP,{badge:e,padding:"20px 16px"})};var h=r(63798),g=r(8690),m=r(73472),f=r(47986),O=r(32562),Z=r(19206),v=r(10312),x=r(65014);const _=(0,o.zo)("ul",{listStyle:"none",margin:0,padding:0}),U=(0,o.zo)("li",(e=>{let{$theme:t,$isMobile:r}=e;return{padding:"16px",whiteSpace:"nowrap",":hover":{background:r?t.colors.menuFillHover:t.colors.backgroundSecondary},display:"flex",justifyContent:"space-between",cursor:"pointer",borderBottom:`1px solid ${t.colors.borderOpaque}`,":last-of-type":{borderBottom:"none"}}})),y=e=>{let{isMobile:t,index:r,cartView:l,onCartSelect:o,setCurrentCartsView:s,setMealPlanUUID:c}=e;const u=(0,n.k6)(),h=(0,a.TH)(),Z=i.useRef(null),_=(0,O.Z)(Z),{setActiveCartViewForRepeatOrder:y}=(0,g.Z)(),{startTiming:C}=(0,m.K3)();return(0,p.tZ)(U,{ref:Z,role:"menuitem",$isMobile:t,onClick:e=>{switch(C(x.B.CART_SELECTED_FROM_POPOVER,{shouldOverride:!0}),l.action){case"OPEN_CHECKOUT":{const e=l.metadata?.openCheckoutMetadata?.draftOrderUUID||l.metadata?.openCheckoutMetadata?.bundleGroupMetadata?.primaryDraftOrderUUID;e&&o(e,r);break}case"OPEN_REPEAT_ORDER_VIEW":if(y(l),t)return void u.push((0,f.ejR)(h));s("repeat_group_order"),e.stopPropagation();break;case"OPEN_MEAL_PLAN_VIEW":{const r=l.metadata?.openMealPlanViewMetadata?.mealPlanUUID;if(t)return void u.push((0,v.Q8)(h,r));c(r),s("meal_plan"),e.stopPropagation();break}default:o(l.draftOrderUUID,r)}},children:(0,p.tZ)(d.Z,{isMobile:t,isHovering:_,cartView:l})})},C=e=>{const t=(0,s.O)()?.data?.carts,[r,i]=(0,l.useState)(null),[n,a]=(0,l.useState)(""),o=(0,l.useCallback)((()=>(0,p.BX)(p.HY,{children:[(0,p.tZ)(u,{}),(0,p.tZ)(_,{role:"menu",children:t?.map(((t,r)=>(0,p.tZ)(y,{index:r,isMobile:e.isMobile,cartView:t,setCurrentCartsView:i,setMealPlanUUID:a,onCartSelect:e.onCartSelect},t.draftOrderUUID)))})]})),[t,e]);return e.isMobile?o():"repeat_group_order"===r?(0,p.tZ)(h.Z,{onBackClick:()=>{i(null)},onCartSelect:e.onCartSelect}):"meal_plan"===r?(0,p.tZ)(Z.Z,{mealPlanUUID:n,onBackClick:()=>{i(null),a("")},onCartSelect:e.onCartSelect}):o()}},76686:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(43193),l=r(33535);const n=()=>{const e=(0,l.ZP)();return i.useCallback(((t,r)=>{e("eats:carts_list_cart_click",{multicart:{index:r,draftOrderUuid:t}})}),[e])}},41929:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var i=r(71110),l=r(59210),n=r(14016),a=r(91931),o=r(62091),d=r(33990);const s=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flex:1,alignItems:"center",flexDirection:"column",justifyContent:"center",paddingTop:t.sizing.scale800,paddingBottom:t.sizing.scale800}})),c=(0,a.zo)(o.Z,{width:"175px",height:"175px"});function p(e){let{message:t}=e;const a=(0,n.T)();return(0,d.BX)(s,{children:[(0,d.tZ)(c,{src:(0,i.pZ)(r(7775))}),(0,d.tZ)(l.fH,{marginTop:"0",marginBottom:"12px",children:a("eats.rgo.get_carts_view_for_eater.no_open_carts")}),(0,d.tZ)(l.Yl,{children:t})]})}},23892:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var i=r(46933),l=r(91931),n=r(33990);const a=(0,l.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"410px",padding:"24px",margin:"0 auto",whiteSpace:"normal"}),o=(0,l.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.HeadingSmall,marginBottom:"8px"}})),d=(0,l.zo)("div",(e=>{let{$theme:t}=e;return t.typography.ParagraphMedium})),s=()=>(0,n.BX)(a,{children:[(0,n.tZ)(o,{children:(0,n.tZ)(i.v,{id:"components.genericError.title"})}),(0,n.tZ)(d,{children:(0,n.tZ)(i.v,{id:"shared.genericServerError"})})]})},63798:(e,t,r)=>{"use strict";r.d(t,{Z:()=>q});var i=r(36151),l=r(52246),n=r(62149),a=r(46933),o=r("__fusion__568"),d=r(31723),s=r(91931),c=r(40606),p=r(8690),u=r(52692),h=r(29194);const g=Object.freeze({UNKNOWN:"UNKNOWN",CARTS_DROPDOWN_WEB:"CARTS_DROPDOWN_WEB"});var m=r(31913),f=r(89217),O=r(47073),Z=r(56349),v=r(23892),x=r(69772),_=r(68907),U=r(54592),y=r(38172),C=r(47986),b=r(76150),I=r(41929),w=r(86830),M=r(33990);const P=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",...t.typography.LabelLarge}})),S=(0,s.zo)("div",{height:"64px",width:"64px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}),D=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexGrow:1,alignItems:"center",paddingRight:t.sizing.scale800,minWidth:"0"}})),z=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.LabelLarge,color:t.colors.contentPrimary,flexGrow:1,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:"100%"}})),R=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexShrink:0,paddingLeft:t.sizing.scale800}})),k=(0,s.zo)("div",(e=>{let{$isMobile:t}=e;return{overflow:"auto",maxHeight:t?"calc(75vh - 66px)":"288px"}})),$=(0,s.zo)("ul",{display:"flex",flexDirection:"column",listStyle:"none"}),T=(0,s.zo)("div",(e=>{let{$theme:t,$direction:r}=e;return{padding:`${t.sizing.scale600} ${t.sizing.scale600} ${t.sizing.scale300} ${t.sizing.scale600}`,textAlign:"rtl"===r?"right":"left"}})),B=(0,s.zo)("li",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",cursor:"pointer",":hover":{background:t.colors.menuFillHover}}})),E=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexShrink:0,height:t.sizing.scale1600,width:t.sizing.scale1600,margin:t.sizing.scale600,borderRadius:"50%",overflow:"hidden",position:"relative"}})),A=(0,s.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0}),H=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",flexGrow:1,minWidth:"0",minHeight:"95px",overflow:"hidden",borderBottom:`1px solid ${t.colors.borderOpaque}`}})),L=(0,s.zo)("div",(e=>{let{$direction:t}=e;return{minWidth:"0",display:"flex",flexDirection:"column",flexGrow:1,textAlign:"rtl"===t?"right":"left"}})),V=(0,s.zo)("div",{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}),N=(0,s.zo)("div",{display:"flex",flexShrink:0,alignItems:"center",flexDirection:"row",paddingRight:"24px",paddingLeft:"16px"}),W=(0,s.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.contentInversePrimary,borderRadius:"50%",backgroundColor:"black",height:"24px",width:"24px",marginRight:"16px",display:"flex",justifyContent:"center",alignItems:"center"}})),X=(0,s.zo)(l.rU,(e=>{let{$theme:t}=e;return{color:t.colors.action,...t.typography.LabelMedium}})),q=e=>{let{onBackClick:t,onCartSelect:r,isMobile:l}=e;const s=(0,n.TH)(),q=(0,i.useRef)(!1),{repeatOrderTemplateUUIDs:G}=(0,p.Z)(),{isRepeatOrderParticipant:F,billSplitOption:K}=(0,U.Z)(G[0]),j=1===G.length,Q=(0,y.ci)({repeatOrderTemplateUUIDs:G,screenID:g.CARTS_DROPDOWN_WEB}),{handleRepeatOrderClick:Y}=(0,_.G)(),{closeSidebarCart:J,closeCartDropdown:ee}=(0,b.Lb)(),{logSelectRepeatOrderCartView:te}=(0,w.E)();(0,i.useEffect)((()=>{Q.isError&&Q.remove()}),[Q,Q.isError]),(0,i.useEffect)((()=>{K&&!q.current&&(te(G,F,K),q.current=!0)}),[K,F,te,G]);const re=e=>{const t=(0,C.saK)(s,1===G.length?G[0]:void 0);return F?(0,M.tZ)(X,{to:t,onClick:()=>{ee(),J()},children:(0,M.tZ)(a.v,{id:"carousel.see_all"})}):j?[...e??[]].reverse().map(((e,t)=>{let{button:r,action:i}=e;return r?(0,M.tZ)(O.Z,{viewModel:r,onClick:()=>Y(i)},t):null})):(0,M.tZ)(X,{to:t,onClick:()=>{ee(),J()},children:(0,M.tZ)(a.v,{id:"go.manage"})})},ie=(0,h.gm)();return(0,M.tZ)(c.a,{source:Q,loaded:e=>(0,M.BX)(M.HY,{children:[(0,M.BX)(P,{children:[(0,M.tZ)(S,{onClick:e=>{e.stopPropagation(),t?.()},children:(0,M.tZ)(o.default,{})}),(0,M.BX)(D,{children:[(0,M.tZ)(z,{$direction:ie,children:e.title}),(0,M.tZ)(R,{children:re(e.navigationBarButtons)})]})]}),(0,M.tZ)(u.Z,{$height:"2px",$margin:"0"}),(0,M.tZ)(k,{$isMobile:l,children:e.emptyCartMessage?(0,M.tZ)(I.Z,{message:e.emptyCartMessage}):e.sections?.map(((e,t)=>(0,M.BX)($,{children:[j?null:(0,M.tZ)(T,{$direction:ie,children:(0,M.tZ)(m.ZP,{text:e.title})}),e.rows?.map(((e,t)=>(0,M.BX)(B,{onClick:()=>{"openCheckout"===e.tapAction?.type&&e.tapAction.openCheckout?.draftOrderUUID&&r(e.tapAction.openCheckout.draftOrderUUID,t)},children:[(0,M.BX)(E,{children:[(0,M.tZ)(f.SZ,{richIllustration:e.leadingIllustration}),(0,M.tZ)(A,{children:(0,M.tZ)(x.XO,{})})]}),(0,M.BX)(H,{children:[(0,M.tZ)(L,{$direction:ie,children:[e.title,e.tagLine1,e.tagLine2].map(((e,t)=>e?(0,M.tZ)(V,{children:(0,M.tZ)(m.ZP,{text:e,whiteSpace:"nowrap"})},t):null))}),(0,M.BX)(N,{children:[void 0!==e.itemCount?(0,M.tZ)(W,{children:e.itemCount}):null,(0,M.tZ)(d.Z,{size:12,color:"primary400"})]})]})]},t)))]},t)))})]}),loading:()=>(0,M.tZ)(Z.ZP,{}),error:()=>(0,M.tZ)(v.Z,{})})}},21025:(e,t,r)=>{"use strict";r.d(t,{f:()=>a});var i=r(74622),l=r(53811),n=r(99233);const a=()=>{const e=(0,i.useQueryClient)();return()=>{setTimeout((()=>{e.invalidateQueries(l.x)}),n.Ts)}}},86830:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var i=r(33535),l=r(99233);const n=()=>{const e=(0,i.ZP)();return{logConsolidatedViewRowClick:(t,r)=>{e("eats:repeat_order_consolidated_view_row_click",{repeatOrderTemplateUUID:t,isParticipant:r})},logSingleRGORowClick:(t,r)=>{e("eats:repeat_order_single_row_click",{repeatOrderTemplateUUID:t,isParticipant:r})},logSkipRGOClick:t=>{e("eats:repeat_order_skip_click",{repeatOrderTemplateUUID:t})},logDeleteRGOClick:t=>{e("eats:repeat_order_delete_click",{repeatOrderTemplateUUID:t})},logCancelRGOClick:(t,r)=>{e("eats:repeat_order_cancel_click",{repeatOrderTemplateUUID:t,cancelType:r})},logSkipRGOButtonClick:t=>{e("eats:repeat_order_skip_button",{repeatOrderTemplateUUID:t})},logDeleteRGOButtonClick:t=>{e("eats:repeat_order_delete_button",{repeatOrderTemplateUUID:t})},logCancelRGOButtonClick:t=>{e("eats:repeat_order_cancel_button",{repeatOrderTemplateUUID:t})},logSelectRepeatOrderCartView:(t,r,i)=>{e("eats:repeat_order_cart_view_click",{repeatOrderTemplateUUID:t.join(","),rgoType:t.length>1?l.lM.consolidated:l.lM.single,billSplitOption:i,isParticipant:r})}}}},7775:(e,t,r)=>{e.exports=r.p+"a023a017672c2488.svg"}}]);