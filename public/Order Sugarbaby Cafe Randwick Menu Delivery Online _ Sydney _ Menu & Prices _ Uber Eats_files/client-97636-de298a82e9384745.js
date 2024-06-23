(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[97636],{4434:e=>{e.exports=function(e){var t,r;if("function"!=typeof e)throw new Error("expected a function but got "+e);return function(){return t||(t=!0,r=e.apply(this,arguments),e=void 0),r}}},28071:(e,t,r)=>{"use strict";r.d(t,{Z:()=>M});var E=r(36151),i=r(74622),n=r(15070),o=r(98976),a=r(71576),s=r(24934),O=r(12945),_=r(92005),R=r(82600),u=r(70587),c=r(24316),T=r(53811),S=r(59738),l=r(79517),D=r(46008);var d=r(33535),I=r(19759),U=r(38777),N=r(35455),A=r(66316),p=r(34062),P=r(20568);var f=r(85427),y=r(34626),C=r(35291),L=r(60849),m=r(60047);const V=e=>{const t="createDraftOrderV2",r=(0,a.Z)(t,!0),s=(0,I.m6)(t),_=(0,d.ZP)(),{user:R}=(0,y.Z)(),u=R.data?.isLoggedIn,c=(0,n.v)((e=>{let{delegatedBooking:t}=e;return t})),S=(0,C.a)(),l=function(){const e=(0,p.E)(),t=(0,d.ZP)(),{updateDraftOrderV2:r}=(0,A.Z)(),{updateUseCredits:E}=(0,O.IM)(),i=(0,P.Z)("getCheckoutPresentationV1",{continueOnUnmount:!0});return async n=>{if(e)try{const e=((await i({payloadTypes:["paymentProfilesEligibility"],draftOrderUUID:n.uuid}))?.checkoutPayloads?.paymentProfilesEligibility?.eligibilityPayloadList??[]).map((e=>e.isEligible?{paymentProfileUUID:e?.paymentProfileUUID}:void 0)).filter(Boolean);e.length>0&&(E(!1),await r({draftOrderUUID:n.uuid,extraPaymentProfiles:e,useCredits:!1}),t("eats:healthcare_eligible_order_created",{draftOrderUuid:n.uuid}))}catch(e){}}}(),D=(0,E.useCallback)(I.qO,[]),U=(0,E.useCallback)((t=>{const E=r(t);return e?.(),E}),[r,e]),N=(0,i.useQueryClient)(),f=(0,E.useCallback)(((e,t)=>{_(s,D(t,u,c)),e?.cartsView&&N.setQueryData(T.x,e.cartsView),S.enqueue(e?.draftOrderPresentationResponse),e?.draftOrder&&l(e.draftOrder)}),[_,s,D,u,c,S,N,l]),L=(0,E.useCallback)(((e,t)=>{_(s,{...D(t),error:e})}),[D,_,s]),m=(0,i.useMutation)(U,{onSuccess:f,onError:L});return{createDraftOrderMaybe:(0,o.rF)(m),createDraftOrderV2:m.mutateAsync}};function M(e,t,r){const{createDraftOrderV2:i,createDraftOrderMaybe:o}=V(t),{paymentProfileUuid:a}=(0,R.Z)(),{selectedPromotionUuid:T,skipApplyingPromotion:I}=(0,n.v)((e=>{let{checkout:t}=e;return t}))||{},{deliveryInstructions:A}=(0,s.pK)(),p=A.data?.selectedInstruction?.interactionType||A.data?.preferredInteractionType||f.$$.interactionType,P=(0,_.Z)(),{paymentIntent:y}=(0,O.IM)(),C="business"===y,{isInMulticart:M}=(0,c.Z)(),h=(0,d.ZP)(),b=(0,U.W)(),{isRemoveProfileTypeFromDraftOrderEnabled:g}={isRemoveProfileTypeFromDraftOrderEnabled:(0,L.ip)({...m.l.is_remove_profile_type_from_draft_order_enabled,defaultValue:!1})};return{createDraftOrderMaybe:o,createDraftOrder:(0,E.useCallback)((async t=>{let{shoppingCartItems:E,isBandwagon:n,groupOrderStoreUUID:o,spendingLimit:s,currencyCode:O,businessDetails:_,billSplitOption:R,addParticipantsIntended:c,displayName:d,cartLockOptions:U,deliveryTime:A,actionMeta:f,promotionUuid:L,handledHighCapacityOrderMetadata:m,repeatOrderOptions:V,primaryDraftOrderUUID:Y,draftOrderPresentationContext:v}=t;const B=L||T;let G={isMulticart:M,shoppingCartItems:E,useCredits:!0,extraPaymentProfiles:[],promotionOptions:{autoApplyPromotionUUIDs:[],selectedPromotionInstanceUUIDs:B?[B]:[],skipApplyingPromotion:I},deliveryTime:A,deliveryType:n?"BANDWAGON":"ASAP",groupOrderStoreUUID:o,spendingLimit:s,currencyCode:O,addParticipantsIntended:c,interactionType:p,paymentProfileUUID:a,billSplitOption:R,displayName:d,checkMultipleDraftOrdersCap:M,cartLockOptions:U,actionMeta:f,draftOrderPresentationContext:v,...Y&&{createBundleGroup:{primaryDraftOrderUUID:Y}}};const K=!g||Boolean(_?.profileUUID||!1);return G.businessDetails=_&&K?{profileUUID:_.profileUUID,profileType:_.profileType,policyUUID:_.policyUUID,policyVersion:_.policyVersion,expenseCode:_.expenseCode,expenseMemo:_.expenseMemo,expenseTrip:_.expenseTrip,businessTrip:_.businessTrip,organizationUUID:_.organizationUUID,voucherUUID:_.voucherUUID,voucherPolicyVersion:_.voucherPolicyVersion}:{},g||(G.businessDetails.profileType=y),!C&&P?.voucherUUID&&R!==u.x.SPLIT_BY_SUBTOTAL&&(G.businessDetails.voucherPolicyVersion=P?.voucherData?.policy?.version,G.businessDetails.voucherUUID=P?.voucherUUID),m&&(G.handledHighCapacityOrderMetadata={hhcOrderSize:m.hhcOrderSize}),V&&(G.repeatSchedule=(0,S.OL)({repeatOrderOptions:V})),null!=E&&(G.shoppingCartItems=((e,t)=>e.map((e=>(e.itemQuantity?.inSellableUnit?.measurementUnit?.measurementType!==D.RV.MEASUREMENT_TYPE_COUNT||!e.itemQuantity.inSellableUnit||e.itemQuantity?.inSellableUnit?.value&&l.Tf.from(e.itemQuantity.inSellableUnit.value).toFloat()===e.quantity||(t&&t(e.itemQuantity),e.itemQuantity.inSellableUnit.value=l.Tf.from(e.quantity).toCoefficientDecimal()),e))))(E,(t=>{h("eats:create_draft_order_quantity_item_quantity_mismatch",{itemQuantity:JSON.stringify(t),source:e,request:JSON.stringify(G)})}))),"reorder"===e&&(G.shoppingCartItems=G.shoppingCartItems?.map((e=>({...e,itemQuantity:{...e.itemQuantity,inPriceableUnit:null}})))),b?.isDelegatedBooking&&(G=(0,N.yj)(G,b)),r&&(G.creationSurface=r),i(G)}),[M,i,p,C,a,y,T,P.voucherData?.policy?.version,P.voucherUUID,I])}}},34062:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var E=r(60849),i=r(78982);function n(){return(0,E.ip)({...i.J.is_healthcare_card_enabled,defaultValue:!1})}},49160:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var E=r(91631),i=r(33825),n=r(79640);function o(e){const t=(0,E.UO)().sectionUuid,r=(0,i.Z)();if(!e)return null;if("USE_SECTION_AS_CATEGORY"===e.menuDisplayType)return(0,n.xk)(e);const o=(e.sections||[]).map((e=>e.uuid)),a=o.find((e=>e===t))||o[0];return t&&!r&&a?a:(0,n.xk)(e)}},80803:(e,t,r)=>{"use strict";r.d(t,{IJ:()=>d,Jq:()=>N,dI:()=>U,eX:()=>l,kF:()=>S,tl:()=>D,uD:()=>I});var E=r(67106),i=r(83960),n=r(97375),o=r(55758),a=r(33535),s=r(74057),O=r(36151),_=r(50818),R=r(57578),u=r(40964),c=r(49160),T=r(99990);function S(e){return e.isDraftOrderCreator?n.B.groupOrderCreator:e.isDraftOrderParticipant?n.B.groupOrderParticipant:n.B.singleOrder}function l(e){const t=(0,s.Z)(e);return"object"==typeof t.deliveryTime&&"scheduled"in t.deliveryTime?n.s.scheduled:n.s.asap}const D=(e,t)=>{if(!t)return"Single Level List";const r=(0,u.A)(e)?"Multi Level":"Single Level",E=e.catalogSectionsMap?.[t]||[],i=E.some((e=>((0,R.FA)(e)?.catalogItems||[]).some((e=>"LIST"===e.displayType)))),n=E.some((e=>((0,R.FA)(e)?.catalogItems||[]).some((e=>"GRID"===e.displayType))));return`${r} ${i&&n?"Mixed":i?"List":"Grid"}`};function d(e){let{store:t,isLegacyStorePayload:r,activeSectionUuid:n}=e;const u=(0,E.Tz)(),c=S((0,i.Z)()),T=(0,o.d)(),d=l(t.uuid),I=(0,a.ZP)(),U=function(e){return"USE_SECTION_AS_CATEGORY"===e.menuDisplayType?1:e.sections?.length||0}(t),N=(0,R.dK)(t.catalogSectionsMap||{}),A=t.timing,p=t.parentChain?.uuid||"",P=t.citySlug||"",{title:f,uuid:y,currencyCode:C,status:L,isVirtualized:m}=(0,_.TG)(t),V=t.storeInfoMetadata?.storeAvailablityStatus?.state,{activePreferenceType:M}=(0,s.Z)(t.uuid),h="USE_SECTION_AS_CATEGORY"===t.menuDisplayType?"grocery":"restaurant",b=D(t,n);(0,O.useEffect)((()=>{A&&I("eats:store",{store:{title:f,uuid:y,currencyCode:C,status:L,isVirtualized:m},isLegacyStorePayload:r,storeAvailabilityState:V,activePreferenceType:M,vertical:h,slug:P,storeMainView:{previousPath:u,diningMode:T,numMenus:U,numItems:N,chainUUID:p,orderRole:c,deliveryTime:d,storeLayout:b,loadTime:A}})}),[I,f,y,C,V,L,r,M,P,u,T,N,U,h,p,c,d,b,A,m])}function I(){const e=(0,a.ZP)(),t=(0,i.Z)();return function(r,E,i){e("eats:store_menu_switcher_select",{storeMenuSwitcher:{storeUUID:r,isMenuOpen:E,orderRole:S(t),merchantType:i||""}})}}function U(){const e=(0,a.ZP)(),{store:t}=(0,T.QT)(),r=(0,c.Z)(t?.data);return E=>{let{searchSource:i,searchDataInfoLayer:n,searchDataInfoTab:o}=E;if(!t?.data)return;const a=t.data;e("eats:store_search_started",{searchSource:i,storeUuid:a.uuid||"",searchDataInfo:{layer:n,tab:o,locationType:a.location?.locationType},storeLayout:D(a,r)})}}function N(){const{store:e}=(0,T.QT)(),t=(0,a.ZP)(),r=(0,c.Z)(e?.data);return E=>{let{catalogSectionItemEventArgs:i,currentQuery:n}=E;e?.data&&t("eats:store_search_result_click",{storeCatalog:{itemUuid:i.itemUuid,storeUuid:i.storeUuid,position:i.position,query:n},storeLayout:D(e.data,r)})}}},40964:(e,t,r)=>{"use strict";r.d(t,{A:()=>E,E:()=>i});const E=e=>"USE_SECTION_AS_CATEGORY"===e.menuDisplayType,i=e=>E(e)?"grocery":"restaurant"},79640:(e,t,r)=>{"use strict";r.d(t,{JG:()=>o,hK:()=>n,xk:()=>a,l2:()=>i});Object.freeze({NONE:"NONE",PILL:"PILL"}),Object.freeze({UNKNOWN:"UNKNOWN",StoreNotOrderable:"StoreNotOrderable",MembershipBenefit:"MembershipBenefit",TOP_EATS:"TOP_EATS",RATINGS:"RATINGS",DISTANCE:"DISTANCE",ETD:"ETD",SPONSORED:"SPONSORED",SCHEDULE_ORDER:"SCHEDULE_ORDER",PICKUP_ORDER:"PICKUP_ORDER",FARE:"FARE",CLOSED:"CLOSED",SURGE_OPTIONALITY:"SURGE_OPTIONALITY",CLOSED_ETA:"CLOSED_ETA",ALLERGY_DISCLAIMER:"ALLERGY_DISCLAIMER",SIGNPOSTS:"SIGNPOSTS"}),Object.freeze({UNKNOWN:"UNKNOWN",EATS_PASS:"EATS_PASS",UBER_ONE:"UBER_ONE",POSTMATES_UNLIMITED:"POSTMATES_UNLIMITED",THIRD_PARTY_ORCHID:"THIRD_PARTY_ORCHID"}),Object.freeze({UNKNOWN:"UNKNOWN",MEET_AT_DOOR:"MEET_AT_DOOR",LEAVE_AT_DOOR:"LEAVE_AT_DOOR"}),Object.freeze({PLAIN:"PLAIN",BANNER:"BANNER"}),Object.freeze({UNKNOWN:"UNKNOWN",BOTTOM_SHEET:"BOTTOM_SHEET",COMPLETE_ORDER:"COMPLETE_ORDER",CALL_PHONE:"CALL_PHONE",REQUEST_ORDER_UPDATE:"REQUEST_ORDER_UPDATE",NAVIGATE_TO_STORE:"NAVIGATE_TO_STORE",TIP:"TIP",OPEN_MULTI_RESTAURANT_DRAWER:"OPEN_MULTI_RESTAURANT_DRAWER",MEMBERSHIP:"MEMBERSHIP",SHOW_ORDER_DETAILS:"SHOW_ORDER_DETAILS",ORDER_NOT_YET_READY:"ORDER_NOT_YET_READY",RIDE_TO_STORE:"RIDE_TO_STORE",AUTONOMOUS_DELIVERY_UNLOCK_VEHICLE:"AUTONOMOUS_DELIVERY_UNLOCK_VEHICLE",AUTONOMOUS_DELIVERY_FIND_VEHICLE:"AUTONOMOUS_DELIVERY_FIND_VEHICLE",AUTONOMOUS_DELIVERY_CALL_OPERATOR:"AUTONOMOUS_DELIVERY_CALL_OPERATOR",AUTONOMOUS_DELIVERY_CONTACT_SUPPORT:"AUTONOMOUS_DELIVERY_CONTACT_SUPPORT",UPDATE_DELIVERY_INSTRUCTIONS:"UPDATE_DELIVERY_INSTRUCTIONS",BOOK_UBER_RIDE:"BOOK_UBER_RIDE",UPDATE_DELIVERY_ADDRESS:"UPDATE_DELIVERY_ADDRESS",UPDATE_INTERACTION_TYPE:"UPDATE_INTERACTION_TYPE",AUTONOMOUS_DELIVERY_RECEIVE_ORDER:"AUTONOMOUS_DELIVERY_RECEIVE_ORDER",AUTONOMOUS_DELIVERY_RECEIVE_ORDER_CONFIRM:"AUTONOMOUS_DELIVERY_RECEIVE_ORDER_CONFIRM",AUTONOMOUS_DELIVERY_RECEIVE_ORDER_DISMISS:"AUTONOMOUS_DELIVERY_RECEIVE_ORDER_DISMISS",SCHEDULE_ORDER:"SCHEDULE_ORDER",VIEW_STORE:"VIEW_STORE",UPDATE_COMPLIANCE_CONSENTS:"UPDATE_COMPLIANCE_CONSENTS",AUTONOMOUS_DELIVERY_HONK_HORN:"AUTONOMOUS_DELIVERY_HONK_HORN"}),Object.freeze({TOP_CENTERED:"TOP_CENTERED",FULL_WIDTH:"FULL_WIDTH",FULL_HEIGHT:"FULL_HEIGHT"}),Object.freeze({UNKNOWN:"UNKNOWN",PRIMARY_STORE:"PRIMARY_STORE",ADD_ON_STORE:"ADD_ON_STORE"}),Object.freeze({UNKNOWN:"UNKNOWN",COPY:"COPY"}),Object.freeze({DYNAMIC_BOOKING_FEE:"DYNAMIC_BOOKING_FEE",BUSY_AREA_FEE:"BUSY_AREA_FEE",MEAL_VOUCHER:"MEAL_VOUCHER",ORDER_HISTORY:"ORDER_HISTORY",BANDWAGON:"BANDWAGON",ALLERGEN_DISCLAIMER:"ALLERGEN_DISCLAIMER",AGGREGATOR_STOREFRONT:"AGGREGATOR_STOREFRONT",UNKNOWN:"UNKNOWN",OTHER_FEES:"OTHER_FEES",SERVICE_FEES:"SERVICE_FEES",FEE_DISCLAIMER:"FEE_DISCLAIMER",BASKET_SIZE:"BASKET_SIZE",RESERVED_12:"RESERVED_12",RESERVED_13:"RESERVED_13",RESERVED_14:"RESERVED_14",RESERVED_15:"RESERVED_15",RESERVED_16:"RESERVED_16",RESERVED_17:"RESERVED_17"}),Object.freeze({DEFAULT:"DEFAULT",COLLAPSED:"COLLAPSED",REQUIRED_SINGLE_OPTION:"REQUIRED_SINGLE_OPTION",RESERVED_3:"RESERVED_3",RESERVED_4:"RESERVED_4",RESERVED_5:"RESERVED_5",RESERVED_6:"RESERVED_6"}),Object.freeze({ANY_STORE:"ANY_STORE",IS_BASKET_FROM_SAME_STORE:"IS_BASKET_FROM_SAME_STORE",IS_BASKET_NOT_FROM_SAME_STORE:"IS_BASKET_NOT_FROM_SAME_STORE",RESERVED_3:"RESERVED_3",RESERVED_4:"RESERVED_4",RESERVED_5:"RESERVED_5",RESERVED_6:"RESERVED_6"});const E=Object.freeze({UNKNOWN:"UNKNOWN",BYOC:"BYOC",TOP_EATS:"TOP_EATS",TOP_EATS_PROMISE:"TOP_EATS_PROMISE",EATS_PROMISE:"EATS_PROMISE"});Object.freeze({UNKNOWN:"UNKNOWN",BYOC:"BYOC",TOP_EATS:"TOP_EATS",IN_STORE_PRICING:"IN_STORE_PRICING",ETA:"ETA"}),Object.freeze({NONE:"NONE",LINE:"LINE",SPACE:"SPACE"}),Object.freeze({UNKNOWN:"UNKNOWN",NO_RUSH_DELIVERY:"NO_RUSH_DELIVERY",STANDARD_DELIVERY:"STANDARD_DELIVERY",PREMIUM_DELIVERY:"PREMIUM_DELIVERY",ETD_SURGE_DELIVERY:"ETD_SURGE_DELIVERY",OPT_IN_TYPE_RESERVED_5:"OPT_IN_TYPE_RESERVED_5",OPT_IN_TYPE_RESERVED_6:"OPT_IN_TYPE_RESERVED_6",OPT_IN_TYPE_RESERVED_7:"OPT_IN_TYPE_RESERVED_7"}),Object.freeze({UNKNOWN:"UNKNOWN",ANIMATED_BACKGROUND_VIEW:"ANIMATED_BACKGROUND_VIEW"});function i(e){return Boolean(e)&&"geolocation_api"!==e?.originType}function n(e,t){return e.indicatorIcons&&e.indicatorIcons.find((function(e){if("typeV2"in e&&e.typeV2===t)return e;if("type"in e&&e.type===t){return t in E?e:null}}))}function o(e){let{itemStyle:t,isGrocery:r}=e;return t?.imageContentMode?"FIT"===t.imageContentMode?"contain":"cover":r?"contain":"cover"}function a(e){return"USE_SECTION_AS_CATEGORY"===e.menuDisplayType?Object.keys(e.catalogSectionsMap||{})[0]:(e.sections||[]).find((e=>e.isTop))?.uuid||e.sections[0]?.uuid}},34274:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var E=r(36151),i=r(15070),n=r(87696),o=r(92431),a=r(4434),s=r.n(a),O=r(99317);function _(e){const t=(0,o.Z)(),r=(0,E.useCallback)(s()((e=>{(0,n.On)(t,e)})),[]),a=(0,i.v)((e=>{let{countdowns:t}=e;return t})),_=(0,O.VA)({countdowns:a&&a.data||[],countdownLabel:"BANDWAGON",feedItemUuid:e.feedItemUuid,storeUuid:e.storeUuid}),u=(0,E.useRef)(!1),c=(0,E.useRef)(!1),T=(0,n.Ty)(t);if(T){u.current=(T.storeUuids||[]).includes(e.storeUuid);const t=R(Date.now()),r=R(T.timestampEnd);c.current=t<r}return(0,E.useEffect)((()=>{_&&!u.current&&r({storeUuids:_.storeUuids,timestampEnd:_.timestamp.end}),u.current&&!c.current&&r(null)}),[_,r]),Boolean(_||u.current&&c.current)}const R=e=>parseInt(e/1e3)},33825:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var E=r(91631);const i=["nugget","start-group-order","share-group-order","lock-group-order","cancel-group-order","store-info","store-info-byoc","menus","error"];function n(){const e=(0,E.UO)();return i.includes(e.sectionUuid||"")}},99317:(e,t,r)=>{"use strict";r.d(t,{Ix:()=>a,VA:()=>s,WQ:()=>o});var E=r(68799);const i="uev2.bandwagon",n=(e,t)=>({"0%":{backgroundColor:`${e}`},"45%":{backgroundColor:`${t}`},"55%":{backgroundColor:`${t}`},"100%":{backgroundColor:`${e}`}}),o=e=>({alignItems:"center",animationDelay:"4s",animationDuration:"2.5s",animationIterationCount:"infinite",animationName:e.shouldPulse?n(e.theme.colors.positive,e.theme.colors.positive300):"none",backgroundColor:e.shouldPulse?e.theme.colors.positive:e.theme.colors.positive50,color:e.shouldPulse?e.theme.colors.onPositive:e.theme.colors.onPositive50,display:"flex",justifyContent:"center",height:e.height?`${e.height}px`:"auto",overflow:"hidden"}),a=e=>{const t=(0,E.Z7)(i).count;if(e){const e=t?t+1:1;e<=5&&(0,E.pc)(i,{count:e})}return{count:t,reachedLimit:t>=5}},s=e=>(e.anyUuid||e.feedItemUuid||e.storeUuid)&&e.countdowns.find((t=>t.timerValidLabel===e.countdownLabel&&(e.anyUuid||t.feedItemUuids.includes(e.feedItemUuid)||t.storeUuids.includes(e.storeUuid))))||null}}]);