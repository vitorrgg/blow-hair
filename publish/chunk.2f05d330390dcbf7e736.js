(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{381:function(t,e,o){"use strict";o.r(e);var n=o(29),a=o(45);const c=n.$ecomConfig.get("currency")||"BRL",r=t=>{const e={currency:c,content_ids:[t.sku],content_name:t.name,value:Object(a.a)(t),content_type:"product"};return t.categories&&t.categories.length&&(e.content_category=t.category_tree||t.categories[0].name),e};var s=o(9);e.default=(t={})=>{if("function"==typeof window.fbq){const o=(e,o={},n=!1)=>{t.debug&&console.log("fbq",e,o),window.fbq(n?"trackCustom":"track",e,o)};(t=>{const e=window.storefront&&window.storefront.context;e&&"products"===e.resource&&t("ViewContent",r(e.body))})(o),((t,e)=>{const o=window.storefrontApp&&window.storefrontApp.router;if(o){let n,a,r;const i=()=>{const{amount:t}=window.storefrontApp,e={value:t&&t.total||s.a.data&&s.a.data.subtotal||0,currency:c,contents:[],content_type:"product"};return s.a.data&&Array.isArray(s.a.data.items)&&s.a.data.items.forEach((({sku:t,quantity:o})=>{e.contents.push({id:t,quantity:o})})),e},u=(e,o)=>{const c=i(),r={...c,checkout_step:e,checkout_option:o};e<=1||!n?(t("InitiateCheckout",c),t("Checkout",r,!0),n=!0):a||(t("CheckoutOption",r,!0),a=!0)},d=o=>{r||!0===e.disablePurchase||(t("Purchase",{...i(),order_id:o}),r=!0)},w=({name:t,params:e})=>{switch(t){case"cart":u(1,"Review Cart");break;case"checkout":u(2,"Confirm Purchase");break;case"confirmation":d(e.id)}};o.currentRoute&&w(o.currentRoute),o.afterEach(w)}})(o,t),e=o,s.a.on("addItem",(({item:t})=>{e("AddToCart",r(t))}))}var e}}}]);