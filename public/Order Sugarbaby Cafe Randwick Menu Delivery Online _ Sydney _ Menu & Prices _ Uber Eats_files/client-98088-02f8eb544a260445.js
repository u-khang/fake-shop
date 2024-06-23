"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[98088],{14352:(e,t,i)=>{i.d(t,{Z:()=>I});var E=i(91931),n=i(51640),r=i(14016),_=i(33990);const T=(0,E.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.LabelMedium,display:"flex",alignItems:"center",gap:t.sizing.scale100}})),I=e=>{let{priceEstimate:t,currencyCode:i,isPricedByWeight:E}=e;const I=(0,r.T)(),l=I(E?"activeOrder.summaryDetails.estimatedTotal":"component.activeOrderFeedOrderSummaryCard.total");return(0,_.BX)(T,{children:[(0,_.tZ)("span",{children:l}),(0,_.tZ)(n.Z,{value:t,currencyCode:i})]})}},57376:(e,t,i)=>{i.d(t,{Z:()=>N});var E=i(43193),n=i(91931),r=i("__fusion__887"),_=i("__fusion__836"),T=i(14016),I=i(79517);var l=i(2228),s=i(81517),o=i(33990);const a=(0,n.zo)("button",(e=>{let{disabled:t,$theme:i}=e;return{cursor:"pointer",height:i.sizing.scale800,width:i.sizing.scale800,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",color:t?i.colors.contentInverseSecondary:i.colors.contentPrimary,borderRadius:i.borders.radiusFull}})),d=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{height:t.sizing.scale800,width:t.sizing.scale800,display:"flex",alignItems:"center",justifyContent:"center"}})),c=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"space-between",padding:t.sizing.scale100,borderRadius:t.sizing.scale950,backgroundColor:t.colors.backgroundTertiary,...t.typography.LabelSmall,width:t.sizing.scale3200}})),N=e=>{let{item:t,quantity:i,updateQuantity:n}=e;const N=I.Tf.from(i),u=(0,T.T)(),O=(0,l.Z)(t),{maximumQuantity:m,minimumQuantity:L,increment:M,decrement:U}=(0,s._)(t||{}),R=E.useMemo((()=>(e=>e?.purchaseInfo?.purchaseOptions?.[0]?.itemQuantityAbbreviation??null)(t)),[t]),F=E.useMemo((()=>O?`${N.toFloat()}${R?" "+R:""}`:N.toFloat()),[O,N,R]),S=e=>{const t=I.Tf.from(N).add(e).toFloat();n(t)};return(0,o.BX)(c,{children:[(0,o.tZ)(a,{"data-testid":"decrement",disabled:i===L,"aria-label":u("shared.decrement"),onClick:()=>S(U),children:(0,o.tZ)(d,{children:(0,o.tZ)(_.default,{})})}),(0,o.tZ)("div",{children:F}),(0,o.tZ)(a,{"data-testid":"increment",disabled:i===m,"aria-label":u("shared.increment"),onClick:()=>S(M),children:(0,o.tZ)(d,{children:(0,o.tZ)(r.default,{})})})]})}},47828:(e,t,i)=>{i.d(t,{Z:()=>M});var E=i(43193),n=i(52298),r=i(92292),_=i(93801),T=i(40606),I=i(91931),l=i(47162),s=i(30110),o=i(1636),a=i(25598),d=i(62027),c=i(38349),N=i(22717),u=i(33990);const O=(0,I.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",justifyContent:"flex-start",flexWrap:"wrap",boxSizing:"border-box",padding:t.sizing.scale300,width:"100%"}})),m=(0,I.zo)("div",{marginTop:"0",width:"100%",display:"flex",justifyContent:"center"}),L=(0,I.zo)("div",(e=>{let{$theme:t}=e;return{padding:`0 ${t.sizing.scale600}`,marginBottom:t.sizing.scale600}})),M=e=>{let{orderUUID:t,storeUUID:i,sourceItemUUID:I,handleProductSelection:M,sourceItemSectionUUID:U}=e;const[R,F]=E.useState(""),S=(0,a.o)({sourceItemSectionUUID:U,userQuery:R,sourceItemUUID:I,storeUUIDs:[i],orderUUID:t},{queryObserverOptions:{enabled:Boolean(R)}}),h=(0,l.v)({storeUUID:i,itemUUID:I,orderUUID:t}),A=()=>{const{isLoading:e,hasResults:t,isError:i,refetch:E}=S;return R?i?(0,u.tZ)(s.Z,{refetch:E}):e?(0,u.BX)(u.HY,{children:[(0,u.tZ)(r.Z,{}),(0,u.tZ)(n.ZP,{$height:16})]}):t?(0,u.tZ)(u.HY,{children:S?.catalogSections?.map((e=>(0,u.tZ)(c.Z,{items:e.items,title:e.title,onProductSelect:M},e?.title?.text)))}):(0,u.tZ)(o.Z,{userQuery:R}):null};return(0,u.BX)(u.HY,{children:[(0,u.tZ)(L,{children:(0,u.tZ)(N.Z,{setUserQuery:F})}),(0,u.tZ)(m,{children:(0,u.tZ)(O,{children:R?(0,u.tZ)(A,{}):(0,u.tZ)(T.a,{source:h,loaded:e=>(0,u.tZ)(u.HY,{children:e?.itemSubstitutes?.map((e=>(0,u.tZ)(d.Z,{item:e,onProductSelect:()=>M(e)},e.itemUUID)))}),error:e=>(0,u.tZ)(_.nQ,{code:parseInt(e?.code||"500")}),loading:()=>(0,u.BX)(u.HY,{children:[(0,u.tZ)(r.Z,{}),(0,u.tZ)(n.ZP,{$height:16})]})})})})]})}},2677:(e,t,i)=>{i.d(t,{H:()=>E});const E=()=>({getRequestData:e=>{let{type:t,item:i,proposalUUID:E,substituteItem:n,quantity:r,storeUuid:_}=e;if("CART_ITEM_ACTION_TYPE_APPROVE_MODIFICATIONS"===t){return{version:"PROCESS_CART_ITEM_FULFILLMENT_EVENTS_PROTOCOL_VERSION_V1",v1:{cartId:i?.cursory?.descriptor?.itemId?.cartId,itemFulfillmentEvents:[{cartItemId:i?.cursory?.descriptor?.itemId,itemFulfillmentEvent:{approvedItemModificationsProposal:{version:"ITEM_FULFILLMENT_EVENT_APPROVED_ITEM_MODIFICATIONS_PROPOSAL_VERSION_V1",v1:{approvedProposalID:{proposalUUID:E}}},type:"ITEM_FULFILLMENT_EVENT_TYPE_APPROVED_ITEM_MODIFICATIONS_PROPOSAL"}}]}}}if("CART_ITEM_ACTION_TYPE_REQUEST_REFUND"===t){return{version:"PROCESS_CART_ITEM_FULFILLMENT_EVENTS_PROTOCOL_VERSION_V1",v1:{cartId:i?.cursory?.descriptor?.itemId?.cartId,itemFulfillmentEvents:[{cartItemId:i?.cursory?.descriptor?.itemId,itemFulfillmentEvent:{type:"ITEM_FULFILLMENT_EVENT_TYPE_TERMINATED_ITEM_MODIFICATIONS_NEGOTIATION",terminatedItemModificationsNegotiation:{version:"ITEM_FULFILLMENT_EVENT_TERMINATED_ITEM_MODIFICATIONS_NEGOTIATION_VERSION_V1",v1:{triggeringProposalID:{proposalUUID:E}}}}}]}}}if("CART_ITEM_ACTION_TYPE_REQUEST_MODIFICATIONS"===t){const e=i?.expanded?.actionButtons?.find((e=>"CART_ITEM_ACTION_TYPE_REQUEST_MODIFICATIONS"===e.action?.type));return{version:"PROCESS_CART_ITEM_FULFILLMENT_EVENTS_PROTOCOL_VERSION_V1",v1:{cartId:i?.cursory?.descriptor?.itemId?.cartId,itemFulfillmentEvents:[{cartItemId:e?.action?.requestModifications?.originalItemId,itemFulfillmentEvent:{type:"ITEM_FULFILLMENT_EVENT_TYPE_PROPOSED_ITEM_MODIFICATIONS",proposedItemModifications:{version:"ITEM_FULFILLMENT_EVENT_PROPOSED_ITEM_MODIFICATIONS_VERSION_V1",v1:{proposedItemModifications:{proposedItemSubstitutions:[{substituteItemCoordinates:{itemID:{catalog:{subsectionUUID:n?.subsectionUUID,sectionUUID:n?.sectionUUID},catalogItemUUID:n?.itemUUID},providerID:{storeUUID:_}},substituteItemConsumerSpecification:{itemQuantity:{inSellableUnit:{value:r,measurementUnitAbbreviationText:n?.purchaseInfo?.purchaseOptions?.[0]?.itemQuantityAbbreviation||null,measurementUnit:{measurementType:n?.purchaseInfo?.pricingInfo?.pricedByUnit?.measurementType||"MEASUREMENT_TYPE_COUNT",weight:n?.purchaseInfo?.pricingInfo?.pricedByUnit?.weight||null}}},customizationV2s:[]}}]}}}}}]}}}}})},20461:(e,t,i)=>{i.d(t,{Ee:()=>l,Iv:()=>T,O6:()=>d,PZ:()=>_,eh:()=>c,fb:()=>I,h4:()=>r,hJ:()=>a,iT:()=>s,vs:()=>o});var E=i(91931),n=i(50192);const r=(0,E.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:t.sizing.scale700,position:"relative"}})),_=(0,E.w1)(n.Z,(e=>{let{$theme:t}=e;return{position:"absolute",height:t.sizing.scale800,width:t.sizing.scale800,top:0,left:t.sizing.scale550}})),T=(0,E.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",padding:t.sizing.scale800}})),I=(0,E.zo)("div",(e=>{let{$theme:t}=e;return{height:t.sizing.scale1200,width:t.sizing.scale1200,flexShrink:0,borderRadius:"50%",overflow:"hidden",position:"relative"}})),l=(0,E.zo)("img",(e=>{let{$theme:t}=e;return{height:t.sizing.scale1200,width:t.sizing.scale1200,objectFit:"cover",flexShrink:0}})),s=(0,E.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.contentSecondary}})),o=(0,E.zo)("div",(e=>{let{$theme:t}=e;return{paddingTop:t.sizing.scale600,paddingLeft:t.sizing.scale850,paddingRight:t.sizing.scale850}})),a=(0,E.zo)("div",(e=>{let{$theme:t}=e;return{height:"100%",padding:`0 ${t.sizing.scale600}`,display:"flex",flexDirection:"column"}})),d=(0,E.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"space-between",padding:`${t.sizing.scale800} ${t.sizing.scale600}`}})),c=(0,E.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",gap:t.sizing.scale600}}))},96306:(e,t,i)=>{i.d(t,{Z:()=>L});var E=i(43193),n=i(91931),r=i(31913),_=i(47073),T=i(60147),I=i(59210),l=i(14016),s=i(33990);const o=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.sizing.scale650} 0`}})),a=(0,n.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"flex-start",cursor:"pointer"}),d=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",justifyContent:"flex-start",alignItems:"center",padding:`${t.sizing.scale600} 0`,gap:t.sizing.scale300}})),c=(0,n.zo)("div",{display:"flex",alignItems:"center"}),N=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{display:"grid",gridTemplateColumns:`${t.sizing.scale550} auto 1fr`,alignItems:"center"}})),u=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",width:"80%",justifyContent:"flex-start",flexDirection:"column",gap:t.sizing.scale100}})),O=(0,n.zo)("img",(e=>{let{$theme:t,$opacity:i}=e;return{height:t.sizing.scale1200,width:t.sizing.scale1200,objectFit:"cover",flexShrink:0,opacity:i}})),m=e=>{let{item:t,sharedData:i,handleActionButtons:m,setSelectedShoppingCartItemUuid:L,isLoading:M}=e;const[,U]=(0,n.hQ)(),R=(0,l.T)(),F=t?.cursory?.descriptor?.displayableName?.text?.text??"",S=E.useMemo((()=>t?.cursory?.descriptor?.salientNotes||null),[t]),h=E.useMemo((()=>t?.cursory?.thumbnailImage?.imageUrl?.dayImageUrl||null),[t]),A=t?.cursory?.thumbnailImage?.imageAlpha??1,p=t?.cursory?.actionButtons;return(0,s.BX)(o,{children:[(0,s.BX)(a,{onClick:()=>{if(M)return null;const e=t.cursory?.descriptor?.itemId?.shoppingCartItemUuid;e&&L(e)},children:[(0,s.BX)(u,{children:[F?(0,s.tZ)(I.Uc,{children:F}):null,S?.map(((e,t)=>{const i="icon"===e?.text?.richTextElements?.[0]?.type,E=i?`0 ${U.sizing.scale0} 0`:"0";return i?(0,s.tZ)(N,{children:(0,s.tZ)(r.ZP,{text:e.text,padding:E})},t):(0,s.tZ)(c,{children:(0,s.tZ)(r.ZP,{text:e.text})},t)}))]}),i?(0,s.tZ)(T.ZP,{badge:i?.itemThumbnailBadge,width:U.sizing.scale1200,height:U.sizing.scale1200,position:"TOP_RIGHT",children:h?(0,s.tZ)(O,{src:h,$opacity:A,alt:R("activeOrder.summaryDetails.productThumbnail"),"data-testid":"summary-details-product-thumbnail"}):null}):null]}),p?(0,s.tZ)(d,{children:p?.map(((e,i)=>e?.button?(0,s.tZ)("div",{children:(0,s.tZ)(_.Z,{viewModel:e.button,onClick:()=>e.action?m(e.action,t):null,isDisabled:M})},`button-${i}`):null))}):null]})},L=E.memo(m)},79532:(e,t,i)=>{i.d(t,{Z:()=>te});var E=i(43193),n=i(75161),r=i(56899),_=i(70589),T=i(91931),I=i(31913),l=i(47073),s=i(9066),o=i(46933),a=i(86695),d=i(58679),c=i(59210),N=i(33535),u=i(33990);const O=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",marginTop:t.sizing.scale900}})),m=e=>{let{onClose:t,onSubmit:i,workflowUuid:n}=e;const r=(0,N.ZP)(),_=()=>{r("eats:replacements_refund_bottom_sheet_dismissed",{workflowUuid:n}),t()};return E.useEffect((()=>{r("eats:replacements_refund_bottom_sheet_impression",{workflowUuid:n})}),[r,n]),(0,u.BX)(d.R1,{onClose:_,children:[(0,u.tZ)(d._g,{children:(0,u.tZ)(o.v,{id:"activeOrder.summaryDetails.refundItemTitle"})}),(0,u.BX)(d.bd,{children:[(0,u.tZ)(c.Yl,{children:(0,u.tZ)(o.v,{id:"activeOrder.summaryDetails.refundItemDescription"})}),(0,u.BX)(O,{children:[(0,u.tZ)(a.zx,{onClick:()=>{r("eats:replacements_refund_bottom_sheet_refund_tapped",{workflowUuid:n}),i()},"data-testid":"refund-button",overrides:{BaseButton:{style:e=>{let{$theme:t}=e;return{backgroundColor:t.colors.backgroundNegative}}}},children:(0,u.tZ)(o.v,{id:"activeOrder.summaryDetails.refundItem"})}),(0,u.tZ)(a.zx,{kind:a.TO.tertiary,onClick:_,children:(0,u.tZ)(o.v,{id:"shared.goBack"})})]})]})]})};var L=i(65434),M=i(2367),U=i(33259),R=i(62091),F=i(68065),S=i(20461),h=i(79517),A=i(64388),p=i(47828),P=i(4909),g=i(57376),D=i(14352),C=i(81517),f=i(2228);const y=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{margin:`${t.sizing.scale600} 0`}})),Z=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",gap:t.sizing.scale600,margin:t.sizing.scale600}})),z=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",gap:t.sizing.scale300}})),V=(0,T.zo)("div",{width:"100%",height:s.j,display:"flex",justifyContent:"center",alignItems:"center"}),v=(0,T.zo)("img",{width:"100%",height:"100%",objectFit:"contain",flexShrink:0}),b=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{backgroundColor:t.colors.backgroundTertiary,height:t.sizing.scale300}})),x=(0,T.zo)("div",{display:"flex",alignItems:"center",justifyContent:"space-between"}),Y=e=>{let{originalItem:t,substituteItem:i,onClose:T,handleConfirm:I,store:l}=e;const s=t?.expanded?.auxiliarySections,{imageUrl:a,title:d,priceTagline:N,formattedPrice:O,description:m,imageURL:M}=i,{defaultQuantity:U,price:R}=(0,C._)(i),[F,h]=E.useState(U),A=R*F,p=(0,f.Z)(i);return(0,u.BX)(n.u_,{size:r.NO.full,children:[(0,u.tZ)(S.h4,{children:(0,u.tZ)(S.PZ,{onClick:T})}),(0,u.BX)(y,{children:[i?(0,u.BX)(Z,{children:[a||M?(0,u.tZ)(V,{children:(0,u.tZ)(v,{src:a||M||""})}):null,(0,u.BX)(z,{children:[d?(0,u.tZ)(c.Ih,{children:d}):null,N?.text||O?(0,u.tZ)(c.fH,{as:"span",children:N?.text||O}):null]}),(0,u.BX)(x,{children:[(0,u.tZ)(g.Z,{item:i,quantity:F,updateQuantity:h}),l?.currencyCode?(0,u.tZ)(D.Z,{priceEstimate:A,currencyCode:l.currencyCode,isPricedByWeight:p}):null]})]}):null,(0,u.tZ)(b,{}),(0,u.tZ)(L.Z,{auxiliarySections:s}),(0,u.tZ)(b,{}),m?(0,u.BX)(Z,{children:[(0,u.tZ)(c.fH,{as:"span",children:(0,u.tZ)(o.v,{id:"shared.description"})}),(0,u.tZ)(c.aM,{children:m})]}):null]}),(0,u.tZ)(_.m,{children:(0,u.tZ)(P.V,{onClick:()=>I(F),"data-testid":"confirmReplacement",children:(0,u.tZ)(o.v,{id:"activeOrder.summaryDetails.confirmReplacement"})})})]})},$=E.memo(Y),B=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{padding:`${t.sizing.scale300} ${t.sizing.scale800}`}})),w=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:t.sizing.scale500,position:"relative"}})),k=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",marginRight:t.sizing.scale300}})),G=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{marginRight:t.sizing.scale500}})),W=(0,T.zo)(R.Z,(e=>{let{$theme:t}=e;return{width:t.sizing.scale1600,height:t.sizing.scale1600}})),j=e=>{let{orderUUID:t,storeUuid:i,originalItemAction:_,onClose:T,item:l,handleSubstitutionPicking:s,open:d,handleRefund:N}=e;const[O,m]=E.useState(null),L=_?.requestModifications||null,M=L?.originalItemId?.itemID?.catalogItemUUID||"",R=L?.originalItemId?.sourceItemSectionUuid,P=L?.originalItemHeader?.itemThumbnail?.imageUrl?.dayImageUrl,g=L?.originalItemHeader,{shouldGetStore:D,store:C,getStore:f}=(0,A.ZP)(i);E.useEffect((()=>{D&&f()}),[D,f]);const y=e=>{const t=h.Tf.from(e).toE5().toCoefficientDecimal();O&&s(O,t)};return d&&_&&l?O?(0,u.tZ)($,{originalItem:l,substituteItem:O,onClose:()=>m(null),handleConfirm:y,store:C.data}):(0,u.BX)(n.u_,{size:r.NO.full,isOpen:!0,onClose:T,children:[(0,u.BX)(w,{children:[(0,u.tZ)(U.hQ,{onClick:T}),(0,u.tZ)(c.Uc,{children:(0,u.tZ)(o.v,{id:"activeOrder.summaryDetails.requestAlternate"})}),(0,u.tZ)(G,{children:(0,u.tZ)(a.zx,{kind:a.TO.secondary,size:F.NO.compact,shape:F.X3.pill,onClick:N,children:(0,u.tZ)(o.v,{id:"activeOrder.summaryDetails.refund"})})})]}),(0,u.tZ)(B,{children:(0,u.tZ)(I.ZP,{text:g?.sectionHeaderText})}),(0,u.BX)(S.O6,{children:[(0,u.BX)(S.eh,{children:[P?(0,u.tZ)(W,{src:P}):null,(0,u.BX)(k,{children:[(0,u.tZ)(I.ZP,{text:g?.itemTitleText}),(0,u.tZ)(I.ZP,{text:g?.itemSubtitleText})]})]}),(0,u.tZ)(I.ZP,{text:g?.itemPriceText})]}),i&&R?(0,u.tZ)(p.Z,{orderUUID:t,handleProductSelection:m,sourceItemSectionUUID:R,sourceItemUUID:M,storeUUID:i}):null]}):null},X=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{margin:`${t.sizing.scale600} 0`}})),K=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",gap:t.sizing.scale600,margin:t.sizing.scale600}})),Q=(0,T.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",gap:t.sizing.scale300}})),H=(0,T.zo)("div",{display:"flex"}),q=(0,T.zo)("div",{width:"100%",height:s.j,display:"flex",justifyContent:"center",alignItems:"center"}),J=(0,T.zo)("img",{width:"100%",height:"100%",objectFit:"contain",flexShrink:0}),ee=e=>{let{items:t,shoppingCartItemUuid:i,onClose:T,handleActionButtons:s,storeUuid:o}=e;const a=(0,N.ZP)(),[d,O]=E.useState(null),[U,R]=E.useState(!1),[F,h]=E.useState(!1),[A,p]=E.useState(null),P=t?.find((e=>e?.cursory?.descriptor?.itemId?.shoppingCartItemUuid===i)),g=P?.expanded?.descriptor?.displayableName?.text?.text??"",D=P?.expanded?.longWriteup?.text?.text??"",C=P?.expanded?.descriptor?.salientNotes||null,f=P?.expanded?.auxiliarySections||null,y=E.useMemo((()=>P?.expanded?.actionButtons||null),[P]),Z=E.useMemo((()=>P?.cursory?.thumbnailImage?.imageUrl?.dayImageUrl||null),[P]),z=P?.cursory?.descriptor?.itemId?.cartId?.workflowId?.workflowUuid||"",V=P?.cursory?.descriptor?.itemId?.cartId?.cartUuid||"",v=P?.cursory?.descriptor?.itemId?.itemID?.catalogItemUUID||"",b=(e,t)=>{if(e||t)return"CART_ITEM_ACTION_TYPE_REQUEST_REFUND"!==e?.type||d?"CART_ITEM_ACTION_TYPE_REQUEST_MODIFICATIONS"===e?.type&&e?.requestModifications?(p(e),a("eats:replacements_item_details_more_options_tapped",{cartUuid:V,isSpecialItemRequest:(0,M.F)(t),itemUuid:v,storeUuid:o,workflowUuid:z}),h(!0),void O(null)):void s(e,t,!0):(O(e),a("eats:replacements_item_details_impression",{cartUuid:V,isSpecialItemRequest:(0,M.F)(t),itemUuid:v,storeUuid:o,workflowUuid:z}),void R(!0))};E.useEffect((()=>{P&&a("eats:replacements_item_details_impression",{isSpecialItemRequest:(0,M.F)(P),workflowUuid:z})}),[a,P,z]);return(0,u.BX)(n.u_,{size:r.NO.full,"data-testid":"summary-details-mobile-item-expanded-modal",children:[(0,u.tZ)(j,{orderUUID:z,open:F,item:P,storeUuid:o,onClose:()=>h(!1),originalItemAction:A,handleSubstitutionPicking:(e,t)=>{s(A,P,!0,e,t)},handleRefund:()=>{const e=y?.find((e=>"CART_ITEM_ACTION_TYPE_REQUEST_REFUND"===e?.action?.type));O(e?.action||null),R(!0)}}),(0,u.tZ)(S.h4,{children:(0,u.tZ)(S.PZ,{onClick:()=>{a("eats:replacements_item_details_close_tapped",{workflowUuid:z}),T()},"data-testid":"summary-details-mobile-item-expanded-close-button"})}),(0,u.BX)(X,{children:[U?(0,u.tZ)(m,{onClose:()=>{O(null),a("eats:replacements_refund_bottom_sheet_dismissed",{workflowUuid:z}),R(!1)},onSubmit:()=>{d&&P&&b(d,P),h(!1),R(!1)},workflowUuid:z}):null,(0,u.BX)(K,{children:[(0,u.tZ)(q,{children:Z?(0,u.tZ)(J,{src:Z}):null}),(0,u.BX)(Q,{children:[g?(0,u.tZ)(c.Ih,{as:"span",children:g}):null,C?.map(((e,t)=>(0,u.tZ)(H,{children:(0,u.tZ)(I.ZP,{text:e?.text})},`price-${t}`))),D?(0,u.tZ)(c.Yl,{as:"span",color:"contentSecondary",children:D}):null]})]}),(0,u.tZ)(L.Z,{auxiliarySections:f})]}),(0,u.tZ)(_.m,{children:(0,u.tZ)(Q,{children:y?.map(((e,t)=>e?.button?(0,u.tZ)("div",{children:(0,u.tZ)(l.Z,{viewModel:e?.button,onClick:()=>b(e?.action,P)})},`button-${t}`):null))})})]})},te=E.memo(ee)},65434:(e,t,i)=>{i.d(t,{Z:()=>c});var E=i(43193),n=i(59210),r=i(89217),_=i(91931),T=i(31913),I=i(60147),l=i(33990);const s=(0,_.zo)("div",(e=>{let{$theme:t}=e;return{backgroundColor:t.colors.backgroundTertiary,height:t.sizing.scale300}})),o=(0,_.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",gap:t.sizing.scale600}})),a=(0,_.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",gap:t.sizing.scale600,margin:t.sizing.scale600}})),d=(0,_.zo)("div",{display:"flex"}),c=e=>{let{auxiliarySections:t}=e;const[,i]=(0,_.hQ)();return t?(0,l.tZ)(l.HY,{children:t?.map(((e,t)=>(0,l.BX)(E.Fragment,{children:[(0,l.tZ)(s,{}),(0,l.BX)(a,{children:[e?.header?(0,l.tZ)(T.ZP,{text:e.header.title}):null,e.elements?.map(((e,t)=>(0,l.BX)(o,{children:[e.badgedLeadingIllustration?(0,l.tZ)(I.ZP,{badge:e.badgedLeadingIllustration.itemThumbnailBadge,width:i.sizing.scale1200,height:i.sizing.scale1200,position:"TOP_RIGHT",children:(0,l.tZ)(r.ZP,{illustration:e.badgedLeadingIllustration.thumbnailIllustration?.illustration})}):null,e.leadingIllustration?(0,l.tZ)(r.ZP,{illustration:e.leadingIllustration.illustration}):null,(0,l.BX)("div",{children:[e?.title?.text?.text?(0,l.tZ)(n.Uc,{as:"span",children:e.title.text.text}):null,(0,l.tZ)(d,{children:e.notes?.map(((e,t)=>(0,l.tZ)(T.ZP,{text:e.text},`note-${t}`)))})]})]},`element-${t}`)))]})]},`auxiliary-section-${t}`)))}):null}},9066:(e,t,i)=>{i.d(t,{F:()=>E,j:()=>n});const E=8e3,n="210px"},81517:(e,t,i)=>{i.d(t,{_:()=>r});var E=i(29051),n=i(79517);const r=e=>{const t=e?.purchaseInfo?.purchaseOptions?.[0],i=t?.quantityConstraintsV2||t?.quantityConstraints;return{increment:n.Tf.from(i?.increment??1),decrement:n.Tf.from(i?.increment??1).multiply(-1),minimumQuantity:n.Tf.from(i?.minPermitted??1).toFloat(),maximumQuantity:n.Tf.from(i?.maxPermitted??E.Y).toFloat(),defaultQuantity:n.Tf.from(i?.defaultQuantity??1).toFloat(),price:Number(e?.price||0)}}},2367:(e,t,i)=>{i.d(t,{F:()=>n});Object.freeze({UNKNOWN:"UNKNOWN",CONTACT_EATER:"CONTACT_EATER",REMOVE_ITEM:"REMOVE_ITEM",CANCEL_ORDER:"CANCEL_ORDER",REDUCE_QUANTITY:"REDUCE_QUANTITY",SUBSTITUTE_ITEM:"SUBSTITUTE_ITEM",STORE_REPLACE_ITEM:"STORE_REPLACE_ITEM",RESERVED_7:"RESERVED_7",RESERVED_8:"RESERVED_8",RESERVED_9:"RESERVED_9",RESERVED_10:"RESERVED_10"}),Object.freeze({CREATED:"CREATED",ORDERED:"ORDERED",DISCARDED:"DISCARDED",REOPENED:"REOPENED",CANCELED:"CANCELED",LOCKED:"LOCKED",UNKNOWN:"UNKNOWN",RESERVED_3:"RESERVED_3",RESERVED_4:"RESERVED_4",RESERVED_5:"RESERVED_5"}),Object.freeze({UNKNOWN:"UNKNOWN",OUT_OF_ITEM:"OUT_OF_ITEM",OUT_OF_OPTION:"OUT_OF_OPTION",CANNOT_FULFILL_ITEM_INSTRUCTION:"CANNOT_FULFILL_ITEM_INSTRUCTION",CANNOT_FULFILL_RESTAURANT_INSTRUCTION:"CANNOT_FULFILL_RESTAURANT_INSTRUCTION",CANNOT_FULFILL_ALLERGY_REQUEST:"CANNOT_FULFILL_ALLERGY_REQUEST",PARTIAL_ITEM_AVAILABILITY:"PARTIAL_ITEM_AVAILABILITY",RESET_ITEM:"RESET_ITEM",RESERVED_8:"RESERVED_8"});const E=Object.freeze({ITEM_ID_TYPE_UNKNOWN:"ITEM_ID_TYPE_UNKNOWN",ITEM_ID_TYPE_CATALOG:"ITEM_ID_TYPE_CATALOG",ITEM_ID_TYPE_WRITE_IN:"ITEM_ID_TYPE_WRITE_IN"}),n=(Object.freeze({ITEM_FULFILLMENT_STATE_TYPE_UNKNOWN:"ITEM_FULFILLMENT_STATE_TYPE_UNKNOWN",ITEM_FULFILLMENT_STATE_TYPE_PENDING:"ITEM_FULFILLMENT_STATE_TYPE_PENDING",ITEM_FULFILLMENT_STATE_TYPE_IN_PROGRESS:"ITEM_FULFILLMENT_STATE_TYPE_IN_PROGRESS",ITEM_FULFILLMENT_STATE_TYPE_FULFILLED:"ITEM_FULFILLMENT_STATE_TYPE_FULFILLED",ITEM_FULFILLMENT_STATE_TYPE_UNFULFILLED:"ITEM_FULFILLMENT_STATE_TYPE_UNFULFILLED"}),Object.freeze({ITEM_NEGOTIATION_STATUS_TYPE_UNKNOWN:"ITEM_NEGOTIATION_STATUS_TYPE_UNKNOWN",ITEM_NEGOTIATION_STATUS_TYPE_ALTERNATIVE_SUGGESTED_BY_MERCHANT:"ITEM_NEGOTIATION_STATUS_TYPE_ALTERNATIVE_SUGGESTED_BY_MERCHANT",ITEM_NEGOTIATION_STATUS_TYPE_REJECTED_BY_CONSUMER:"ITEM_NEGOTIATION_STATUS_TYPE_REJECTED_BY_CONSUMER",ITEM_NEGOTIATION_STATUS_TYPE_ALTERNATIVE_REQUESTED_BY_CONSUMER:"ITEM_NEGOTIATION_STATUS_TYPE_ALTERNATIVE_REQUESTED_BY_CONSUMER",ITEM_NEGOTITATION_STATUS_TYPE_FREEFORM_MODIFICATION_SUGGESTED_BY_FULFILLER:"ITEM_NEGOTITATION_STATUS_TYPE_FREEFORM_MODIFICATION_SUGGESTED_BY_FULFILLER"}),Object.freeze({ITEM_MODIFICATION_PROPOSAL_TYPE_UNKNOWN:"ITEM_MODIFICATION_PROPOSAL_TYPE_UNKNOWN",ITEM_MODIFICATION_PROPOSAL_TYPE_STRUCTURED:"ITEM_MODIFICATION_PROPOSAL_TYPE_STRUCTURED",ITEM_MODIFICATION_PROPOSAL_TYPE_FREEFORM:"ITEM_MODIFICATION_PROPOSAL_TYPE_FREEFORM"}),Object.freeze({ITEM_FULFILLMENT_STATE_UNFULFILLED_REASON_TYPE_UNKNOWN:"ITEM_FULFILLMENT_STATE_UNFULFILLED_REASON_TYPE_UNKNOWN"}),Object.freeze({ITEM_FULFILLMENT_STATE_UNFULFILLED_ACTION_TYPE_UNKNOWN:"ITEM_FULFILLMENT_STATE_UNFULFILLED_ACTION_TYPE_UNKNOWN"}),Object.freeze({INVALID:"INVALID",GTIN:"GTIN",PLU:"PLU"}),Object.freeze({ITEM_FULFILLMENT_EVENT_TYPE_UNKNOWN:"ITEM_FULFILLMENT_EVENT_TYPE_UNKNOWN",ITEM_FULFILLMENT_EVENT_TYPE_FOUND_ORIGINAL_ITEM:"ITEM_FULFILLMENT_EVENT_TYPE_FOUND_ORIGINAL_ITEM",ITEM_FULFILLMENT_EVENT_TYPE_PROPOSED_ITEM_MODIFICATIONS:"ITEM_FULFILLMENT_EVENT_TYPE_PROPOSED_ITEM_MODIFICATIONS",ITEM_FULFILLMENT_EVENT_TYPE_EXECUTED_ITEM_MODIFICATIONS_PROPOSAL:"ITEM_FULFILLMENT_EVENT_TYPE_EXECUTED_ITEM_MODIFICATIONS_PROPOSAL",ITEM_FULFILLMENT_EVENT_TYPE_TERMINATED_ITEM_FULFILLMENT_ATTEMPT:"ITEM_FULFILLMENT_EVENT_TYPE_TERMINATED_ITEM_FULFILLMENT_ATTEMPT",ITEM_FULFILLMENT_EVENT_TYPE_APPROVED_ITEM_MODIFICATIONS_PROPOSAL:"ITEM_FULFILLMENT_EVENT_TYPE_APPROVED_ITEM_MODIFICATIONS_PROPOSAL",ITEM_FULFILLMENT_EVENT_TYPE_TERMINATED_ITEM_MODIFICATIONS_NEGOTIATION:"ITEM_FULFILLMENT_EVENT_TYPE_TERMINATED_ITEM_MODIFICATIONS_NEGOTIATION"}),Object.freeze({ITEM_FULFILLMENT_EVENT_FOUND_ORIGINAL_ITEM_VERSION_UNKNOWN:"ITEM_FULFILLMENT_EVENT_FOUND_ORIGINAL_ITEM_VERSION_UNKNOWN",ITEM_FULFILLMENT_EVENT_FOUND_ORIGINAL_ITEM_VERSION_V1:"ITEM_FULFILLMENT_EVENT_FOUND_ORIGINAL_ITEM_VERSION_V1"}),Object.freeze({ITEM_FULFILLMENT_EVENT_PROPOSED_ITEM_MODIFICATIONS_VERSION_UNKNOWN:"ITEM_FULFILLMENT_EVENT_PROPOSED_ITEM_MODIFICATIONS_VERSION_UNKNOWN",ITEM_FULFILLMENT_EVENT_PROPOSED_ITEM_MODIFICATIONS_VERSION_V1:"ITEM_FULFILLMENT_EVENT_PROPOSED_ITEM_MODIFICATIONS_VERSION_V1"}),Object.freeze({ITEM_FULFILLMENT_EVENT_EXECUTED_ITEM_MODIFICATIONS_PROPOSAL_VERSION_UNKNOWN:"ITEM_FULFILLMENT_EVENT_EXECUTED_ITEM_MODIFICATIONS_PROPOSAL_VERSION_UNKNOWN",ITEM_FULFILLMENT_EVENT_EXECUTED_ITEM_MODIFICATIONS_PROPOSAL_VERSION_V1:"ITEM_FULFILLMENT_EVENT_EXECUTED_ITEM_MODIFICATIONS_PROPOSAL_VERSION_V1"}),Object.freeze({ITEM_FULFILLMENT_EVENT_TERMINATED_ITEM_FULFILLMENT_ATTEMPT_VERSION_UNKNOWN:"ITEM_FULFILLMENT_EVENT_TERMINATED_ITEM_FULFILLMENT_ATTEMPT_VERSION_UNKNOWN",ITEM_FULFILLMENT_EVENT_TERMINATED_ITEM_FULFILLMENT_ATTEMPT_VERSION_V1:"ITEM_FULFILLMENT_EVENT_TERMINATED_ITEM_FULFILLMENT_ATTEMPT_VERSION_V1"}),Object.freeze({ITEM_FULFILLMENT_EVENT_APPROVED_ITEM_MODIFICATIONS_PROPOSAL_VERSION_UNKNOWN:"ITEM_FULFILLMENT_EVENT_APPROVED_ITEM_MODIFICATIONS_PROPOSAL_VERSION_UNKNOWN",ITEM_FULFILLMENT_EVENT_APPROVED_ITEM_MODIFICATIONS_PROPOSAL_VERSION_V1:"ITEM_FULFILLMENT_EVENT_APPROVED_ITEM_MODIFICATIONS_PROPOSAL_VERSION_V1"}),Object.freeze({ITEM_FULFILLMENT_EVENT_TERMINATED_ITEM_MODIFICATIONS_NEGOTIATION_VERSION_UNKNOWN:"ITEM_FULFILLMENT_EVENT_TERMINATED_ITEM_MODIFICATIONS_NEGOTIATION_VERSION_UNKNOWN",ITEM_FULFILLMENT_EVENT_TERMINATED_ITEM_MODIFICATIONS_NEGOTIATION_VERSION_V1:"ITEM_FULFILLMENT_EVENT_TERMINATED_ITEM_MODIFICATIONS_NEGOTIATION_VERSION_V1"}),Object.freeze({ITEM_PARTICIPANT_ROLE_TYPE_UNKNOWN:"ITEM_PARTICIPANT_ROLE_TYPE_UNKNOWN",ITEM_PARTICIPANT_ROLE_TYPE_CONSUMER:"ITEM_PARTICIPANT_ROLE_TYPE_CONSUMER",ITEM_PARTICIPANT_ROLE_TYPE_MERCHANT:"ITEM_PARTICIPANT_ROLE_TYPE_MERCHANT",ITEM_PARTICIPANT_ROLE_TYPE_COURIER:"ITEM_PARTICIPANT_ROLE_TYPE_COURIER"}),e=>e?.cursory?.descriptor?.itemId?.itemID?.type===E.ITEM_ID_TYPE_WRITE_IN)},2228:(e,t,i)=>{i.d(t,{Z:()=>n});var E=i(66958);function n(e){return(0,E.jx)(e)}}}]);