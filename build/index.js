!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=22)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,o){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var a in r)o.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},,function(e,t,o){"use strict";var r=o(1);t.a=function(e){var t=e.defaultTitle,o=void 0===t?Object(r.__)("Step","woocommerce-eu-vat-number"):t,n=e.defaultDescription,c=void 0===n?Object(r.__)("Step description text.","woocommerce-eu-vat-number"):n,i=e.defaultShowStepNumber;return{title:{type:"string",default:o},description:{type:"string",default:c},showStepNumber:{type:"boolean",default:void 0===i||i}}}},function(e,t){e.exports=window.wp.blockEditor},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"woocommerce/eu-vat-number","version":"1.0.0","title":"EU VAT Number","parent":["woocommerce/checkout-fields-block"],"category":"woocommerce","icon":"cart","description":"The EU VAT Number extension lets you collect and validate EU VAT numbers during checkout to identify B2B transactions verses B2C. IP Addresses can also be validated to ensure they match the billing address. EU businesses with a valid VAT number can have their VAT removed prior to payment.","supports":{"html":false},"textdomain":"woocommerce-eu-vat-number","attributes":{"lock":{"type":"object","default":{"remove":true,"move":false}}}}')},,,,,function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blocks},,,,,,,,,function(e,t,o){"use strict";o.r(t);var r=o(2),n=o.n(r),c=o(0),i=o(13),a=o(6),u=o(3),s=o.n(u),l=o(1),p=o(7),b=o(5),m=o(12),d=function(e){var t=e.children,o=e.stepHeadingContent;return Object(c.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(c.createElement)("h2",{"aria-hidden":"true",className:"wc-block-components-checkout-step__title wc-block-components-title"},t),!!o&&Object(c.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},o))},f=function(e){var t=e.attributes,o=e.setAttributes,r=e.className,n=void 0===r?"":r,i=e.children,u=t.title,p=void 0===u?"":u,b=t.description,f=void 0===b?"":b,v=t.showStepNumber,O=void 0===v||v,w=Object(a.useBlockProps)({className:s()("wc-block-components-checkout-step",n,{"wc-block-components-checkout-step--with-step-number":O})});return Object(c.createElement)("div",w,Object(c.createElement)(a.InspectorControls,null,Object(c.createElement)(m.PanelBody,{title:Object(l.__)("Form Step Options","woocommerce-eu-vat-number")},Object(c.createElement)(m.ToggleControl,{label:Object(l.__)("Show step number","woocommerce-eu-vat-number"),checked:O,onChange:function(){return o({showStepNumber:!O})}}))),Object(c.createElement)(d,null,Object(c.createElement)(a.PlainText,{className:"",value:p,onChange:function(e){return o({title:e})},style:{backgroundColor:"rgba(0, 0, 0, 0)"}})),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__container"},Object(c.createElement)("p",{className:"wc-block-components-checkout-step__description"},Object(c.createElement)(a.PlainText,{className:f?"":"wc-block-components-checkout-step__description-placeholder",value:f,placeholder:Object(l.__)("Optional text for this form step.","woocommerce-eu-vat-number"),onChange:function(e){return o({description:e})},style:{backgroundColor:"rgba(0, 0, 0, 0)"}})),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))};function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function O(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){n()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}Object(i.registerBlockType)(p,{edit:function(e){var t,o=Object(a.useBlockProps)();return Object(c.createElement)("div",o,Object(c.createElement)(f,{attributes:e.attributes,setAttributes:e.setAttributes,className:s()("wc-block-checkout__vat-input",null===(t=e.attributes)||void 0===t?void 0:t.className)},Object(c.createElement)("div",{className:"wc-block-components-text-input"},Object(c.createElement)("input",{type:"text","aria-label":"VAT Number",id:"woocommerce-eu-vat-number"}),Object(c.createElement)("label",{htmlFor:"woocommerce-eu-vat-number"},Object(l.__)("VAT Number","woocommerce-eu-vat-number")))))},attributes:O(O({},p.attributes),Object(b.a)({defaultTitle:Object(l.__)("VAT Number","woocommerce-eu-vat-number"),defaultDescription:"",defaultShowStepNumber:!0})),save:function(){return Object(c.createElement)("div",a.useBlockProps.save(),Object(c.createElement)(a.InnerBlocks.Content,null))}})}]);