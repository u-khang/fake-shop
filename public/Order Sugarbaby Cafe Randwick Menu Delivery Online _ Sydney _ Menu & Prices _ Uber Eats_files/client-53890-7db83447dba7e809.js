"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[53890],{80310:(t,e,i)=>{i.d(e,{Yv:()=>a,lP:()=>r,rB:()=>o});var n=i(10208);function a(t){return t.map((t=>{const{customizationV2s:e,...i}=t;return{...i,customizations:(0,n.up)(o(t.customizationV2s||[]))}})).filter(Boolean)}function o(t){return t.map(((t,e)=>{const i=r((t.childOptions||{}).options||[]);return{uuid:t.uuid,title:t.title||"",childOptions:{options:i},groupId:e}}))}function r(t){return t.map((t=>({price:t.price||0,quantity:t.quantity,title:t.title||"",uuid:t.uuid||"",defaultQuantity:t.defaultQuantity||0,childCustomizationList:o(t.customizationV2List||[])})))}},74386:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(60849),a=i(41063);const o=()=>(0,n.ip)({...a.v.store_nv_pdp_edit_quantity,defaultValue:!1})},72131:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(60849),a=i(57440);const o=()=>{const t={...a.X.saved_customizations,defaultValue:!1};return{isSavedCustomizationsXpEnabled:(0,n.ip)(t)}}},3289:(t,e,i)=>{i.d(e,{GJ:()=>c,RO:()=>u,RZ:()=>m,US:()=>s,Xr:()=>o,_k:()=>l,aV:()=>a,jD:()=>d,nB:()=>r});var n=i(81479);const a=160,o=160,r=6,u=4,s=1280,d=76,m=60,c="0379a62a-1156-4ddb-a09a-7e1dc45d5dfb",l=(0,n.Z)({buyXGetYItemPromotion:null,volumeDiscountPromotion:null})},53890:(t,e,i)=>{i.d(e,{TX:()=>Z,ZP:()=>k});var n=i(36151),a=i(13422),o=i(10208),r=i(76594),u=i(54669),s=i(67476),d=i(14016),m=i(83960),c=i(93008),l=i(81436),p=i(49373),f=i(15649),y=i(49201);const I=(t,e)=>{const i=(0,d.T)(),n=(0,f.Z)(),{currentUserCartItems:a,draftOrderUuid:o,isDraftOrderParticipant:r}=(0,m.Z)(),{groupOrder:u,getGroupOrder:I,shouldGetGroupOrder:E}=(0,c.Z)(o),{hasGroupOrderForStore:D}=(0,s.Z)(t||"");(0,l.Z)((()=>E?I():null),[E,I],"use-draft-order-spending-limit-validation");const x=(0,p.DR)(a)+e,S=u.data?.spendingLimitAmount,C=S?.currencyCode;if(!S||!C)return null;const _=S.amount;return D&&r&&x>_?i("go.spending_limit_exceeded",{spendingLimit:(0,y.xG)(n,C,_)}):null};var E=i(70247),D=i(57597),x=i(79517),S=i(66958),C=i(3289),_=i(80310),z=i(62155),L=i(72131),O=i(74386),P=i(91631),Q=i(62149),T=i(60849),v=i(57440),B=i(22208);const M=t=>{let{defaultQuantity:e,quantityIncrement:i,updateDecimalQuantity:a}=t;const o=(0,Q.TH)(),r=(0,n.useRef)(o.key),[u,s]=(0,n.useState)(!1),d=(0,P.k6)(),m=(0,T.ip)({...v.X.product_details_page_reset_quantity_cross_sell,defaultValue:!1}),c=(0,n.useCallback)((t=>{s(!1),a(x.Tf.from(t).updateExponent(i.exponent).toBaseDecimal())}),[i.exponent,a]);(0,n.useEffect)((()=>{m&&u&&(0===i.exponent||e)&&c(e||1)}),[e,m,i.exponent,c,u]),(0,n.useEffect)((()=>{if(m)return d.listen((t=>{const{previousContext:e}=t.state||{};s(e===B.x9.PDP_CROSS_SELL||t.key===r.current)}))}),[d,m])},b=(t,e)=>{const i=t?.data;return i?(0,o.h7)(i.customizationsList,Object.keys(h(t,e))):""},h=(t,e)=>{const i=t?.data;if(!i)return{};const n=(0,o.qH)(e,t?.data?.customizationsList||[])||{};return(0,o.xe)(i.customizationsList,n)},g=(t,e,i,n)=>{const r=t?.data?.price||0,u=(0,o.qH)(e,t?.data?.customizationsList||[])||{};return(0,a.uT)(i,r,u,n.itemsArray,n.itemMap)};let Z=function(t){return t.increment="INCREMENT",t.decrement="DECREMENT",t.set="SET",t}({});const k=t=>{let{store:e,menuItem:i,selectedSavedCustomizationIndex:d,setSelectedSavedCustomizationIndex:m,initialQuantity:c,initialDecimalQuantity:l,initialCustomizations:p,initialSpecialInstructions:f,isEditQuantityFlow:y}=t;const P=i.data?(0,S.L5)(i.data):null,Q=P?.defaultDecimal||P?.minPermitted,T=x.Tf.from(P?.increment??1).toBaseDecimal(),v=x.Tf.from(P?.minPermitted??1).updateExponent(T?.exponent||0).toBaseDecimal(),B=(0,D.Z)({item:i.data,storeUuid:e.data?.uuid,counterAdjustment:c}),k=(t=>{let{initialQuantity:e,initialDecimalQuantity:i,quantityIncrement:n,defaultQuantity:a}=t;return i?i.toBaseDecimal():e?x.Tf.from(e).updateExponent(n.exponent).toBaseDecimal():a||x.Tf.from(1).updateExponent(n.exponent).toBaseDecimal()})({initialQuantity:c,initialDecimalQuantity:l,defaultQuantity:Q,quantityIncrement:T}),A=e?.data?.uuid||"",{isDraftOrderParticipantForStore:G,canEditGroupOrderCart:U}=(0,s.Z)(A),{serverCart:q}=(0,E.iQ)(),R=(0,O.Z)(),[V,F]=(0,n.useState)(k),[X,w]=(0,n.useState)(!1),[Y,j]=(0,n.useState)(!1),{isItemInPromotion:H,initialItemQuantity:W}=(t=>{const{itemPromotionV2:e}=t||{},i={isItemInPromotion:!1,initialItemQuantity:1};if(!t)return i;const{promotionData:n}=e||{};if(!n?.type)return i;switch(n.type){case C._k.buyXGetYItemPromotion:{const{buyQuantity:t,getQuantity:e}=n;return{isItemInPromotion:!0,initialItemQuantity:1===t&&1===e?2:1}}default:return i}})(i.data),{isSavedCustomizationsXpEnabled:N}=(0,L.Z)(),$=(0,n.useMemo)((()=>i?.data?.customizationsList||[]),[i?.data?.customizationsList]),J=x.Tf.from(V||1).toFloat();(0,n.useEffect)((()=>{"number"!=typeof T?.exponent||V.exponent===T.exponent||V===Q||l||F(x.Tf.from(J).updateExponent(T.exponent).toBaseDecimal())}),[V,Q,J,V.exponent,T.exponent,l]),(0,n.useEffect)((()=>{R&&y||"number"!=typeof Q?.exponent||V.exponent===Q.exponent||Y||(j(!0),F(x.Tf.from(Q).toBaseDecimal()))}),[Y,Q,V.exponent,y,R]),(0,n.useEffect)((()=>{!H||X||c||(w(!0),F({base:W,exponent:0}))}),[i,X,c,W,H]);const[K,tt]=(0,n.useState)(f||""),[et,it]=(0,n.useState)(p||{});(0,n.useEffect)((()=>{const t=(0,z.mq)(i.data?.productDetailsItems);if(N&&-1===d)return it({}),void tt("");const e=N&&null!=d&&d>=0?t?.preselectedCustomizationSelection?.[d]?.item:void 0,{customizations:n,specialInstructions:a}=(t=>{let{itemUuid:e,menuItemCustomizationList:i,initialCustomizations:n,orderItem:a}=t;if(!e||!i)return null;if(n)return{customizations:(0,o.iY)(n||{},i,!1)};if(a){const t=a?.customizationV2s||[],e=a?.specialInstructions,n=(0,o.up)((0,_.rB)(t));return{customizations:(0,o.iY)(n,i,!0),...e?{specialInstructions:e}:null}}return null})({itemUuid:i.data?.uuid,menuItemCustomizationList:$,initialCustomizations:p,orderItem:e})||{};n&&it(n),a&&tt(a)}),[$,p,i.data?.uuid,i.data?.productDetailsItems,d,N]),(0,n.useEffect)((()=>{R&&y&&(Y||!c&&!l||(j(!0),F(k)))}),[k,Y,l,c,y,R]),M({defaultQuantity:Q,quantityIncrement:T,updateDecimalQuantity:F});const[nt,at]=(0,n.useReducer)(r.L,r.E);const ot=(0,n.useCallback)((t=>tt(t)),[]),rt=i?.data?.sectionUuid||"",ut=(e?.data?.sections||[]).find((t=>t.uuid===rt)),st=null==ut||!1!==ut.isOnSale,dt=Boolean(e?.data?.isOpen),mt=(0,u.Z)(),ct=Boolean(e?.data?.isWithinDeliveryRange),lt=(i?.data?.suspendUntil||0)>0,pt=Boolean(e?.data?.isPreview),ft="geolocation_api"!==mt?.originType,yt=pt||st&&!lt&&(G||dt&&Boolean(mt)&&ft&&ct),It=g(i,et,J,nt),Et=Boolean(c),Dt=Et&&c?g(i,et,c,nt):0,xt=I(A,Et?It-Dt:It),St=(t=>"eats.exceed_spending_limit.error"===t?.error?.meta?.code&&t?.error?.message?t?.error?.message:null)(q),Ct=xt||St,_t=((t,e,i,n)=>{const r=t?.data?.price||0,u=(0,o.qH)(e,t?.data?.customizationsList||[])||{},{itemPromotionV2:s}=t?.data||{},{promotionData:d}=s||{},m=i;let c=0;if(!d?.type)return null;switch(d.type){case C._k.buyXGetYItemPromotion:{const{buyQuantity:t,getQuantity:e,maxRedemptionCount:i}=d,o=t+e;if(t>0&&e>0&&m>=o){const t=Math.floor(m/o);c=m-e*Math.min(i,t)}return(0,a.W$)(c,r,u,n.itemsArray,n.itemMap)}case C._k.volumeDiscountPromotion:{const{buyQuantity:t,discountAmount:e,maxRedemptionCount:i}=d;if(t>0&&m>=t){const e=Math.floor(m/t);c=Math.min(i,e)}return(0,a.W$)(c,r,u,n.itemsArray,n.itemMap,e,m)}default:return null}})(i,et,J,nt)??0;return{quantity:J,updateQuantity:function(t,e){const i=t===Z.set&&null!=e?x.Tf.from(e):x.Tf.from(T).multiply(t===Z.increment?1:-1).add(V);x.Tf.from(i).isGte(v)&&(t===Z.decrement||B({increment:x.Tf.from(i).toFloat(),showSnackbarWarning:!0})!==D.y.ABOVE_LIMIT)&&F(i.toBaseDecimal())},decimalQuantity:V,specialInstructions:K,updateSpecialInstructions:ot,updateCustomizations:t=>{N&&m&&m(null),it(t)},selectedCustomizations:et,itemsUpsell:nt,updateUpsellItemQuantity:(t,e)=>{at(e>0?{type:"ADD_ITEM_UPSELL",payload:{item:t}}:{type:"SUB_ITEM_UPSELL",payload:{item:t}})},hasErrors:Object.keys(h(i,et)).length>0,isOnSale:yt,totalPrice:It,spendingLimitError:Ct,canEditGroupOrderCart:U,firstIncompleteGroup:b(i,et),discountedPrice:_t}}},67476:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(83960),a=i(69694);const o=t=>{const e=(0,a.Z)(t),{hasGroupOrder:i,isDraftOrderCartLocked:o,isDraftOrderCreator:r,isDraftOrderParticipant:u,draftOrder:s}=(0,n.Z)(t),d=i&&e.cart.data?.storeUuid===t,m=r||!(d&&o),c=u&&d;return{isBundled:Boolean(s?.bundleGroupInfo),hasGroupOrderForStore:d,canEditGroupOrderCart:m,isDraftOrderParticipantForStore:c}}},76594:(t,e,i)=>{i.d(e,{E:()=>n,L:()=>a});const n={itemMap:{},itemsArray:[]};function a(t,e){if("ADD_ITEM_UPSELL"===e.type){const i=e.payload.item,{itemMap:n,itemsArray:a}=t;return n[i.uuid]?{itemMap:{...n,[i.uuid]:n[i.uuid]+1},itemsArray:a}:{itemMap:{...n,[i.uuid]:1},itemsArray:[...a,i]}}if("SUB_ITEM_UPSELL"===e.type){const i=e.payload.item,{itemMap:n,itemsArray:a}=t;if(n[i.uuid]){if(n[i.uuid]>1)return{itemMap:{...n,[i.uuid]:n[i.uuid]-1},itemsArray:a};const t=a.findIndex((t=>t.uuid===i.uuid)),e={...n},o=[...a];return delete e[i.uuid],o.splice(t,1),{itemMap:e,itemsArray:o}}return{itemMap:n,itemsArray:a}}return t}}}]);