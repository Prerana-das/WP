this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["featured-product"]=function(e){function t(t){for(var n,a,i=t[0],s=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==c[s]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},c={13:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;return o.push([375,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},11:function(e,t){e.exports=window.wp.primitives},111:function(e,t){},123:function(e,t,r){"use strict";var n=r(6),c=r.n(n),o=r(0),a=r(3),i=r(4),s=r.n(i);r(176),t.a=function(e){let{className:t="",...r}=e;const n=s()("wc-block-text-toolbar-button",t);return Object(o.createElement)(a.Button,c()({className:n},r))}},129:function(e,t){},13:function(e,t){e.exports=window.wp.blocks},132:function(e,t,r){"use strict";function n(e){return e?{objectPosition:`${Math.round(100*e.x)}% ${Math.round(100*e.y)}%`}:{}}function c(e){return 0===e||50===e?null:"has-background-dim-"+10*Math.round(e/10)}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}))},14:function(e,t){e.exports=window.wp.htmlEntities},15:function(e,t){e.exports=window.wp.apiFetch},16:function(e,t){e.exports=window.wp.url},175:function(e,t,r){"use strict";var n=r(6),c=r.n(n),o=r(0),a=r(24),i=r(26),s=r(109),l=r(28);t.a=e=>t=>{let{selected:r,...n}=t;const[u,d]=Object(o.useState)(!0),[p,b]=Object(o.useState)(null),[m,g]=Object(o.useState)([]),h=a.o.productCount>100,O=async e=>{const t=await Object(l.a)(e);b(t),d(!1)},j=Object(o.useRef)(r);Object(o.useEffect)(()=>{Object(i.h)({selected:j.current}).then(e=>{g(e),d(!1)}).catch(O)},[j]);const w=Object(s.a)(e=>{Object(i.h)({selected:r,search:e}).then(e=>{g(e),d(!1)}).catch(O)},400),_=Object(o.useCallback)(e=>{d(!0),w(e)},[d,w]);return Object(o.createElement)(e,c()({},n,{selected:r,error:p,products:m,isLoading:u,onSearch:h?_:null}))}},176:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var n=r(23),c=r.n(n),o=r(6),a=r.n(o),i=r(0),s=r(8),l=r(1),u=r(5),d=r(9),p=r(3),b=r(4),m=r.n(b),g=r(10),h=r(7),O=r(93),j=r(69),w=r(123),_=r(232),f=r(110),v=r(525),k=r(526),E=r(132);function y(e){return e&&e.images&&e.images.length&&e.images[0].src||""}const S=e=>{let{className:t="",onResize:r,...n}=e;const[c,o]=Object(s.useState)(!1),l=m()(t,{"is-resizing":c}),u=function(e,t,r){const n=Object(s.useRef)(e);return Object(s.useEffect)(()=>{n.current=e}),Object(s.useCallback)(Object(h.throttle)((function(){return n.current(...arguments)}),50,{leading:!0}),[50])}((e,t,n)=>{c||o(!0),r(e,t,n)});return Object(i.createElement)(p.ResizableBox,a()({className:l,enable:{bottom:!0},onResize:u,onResizeStop:function(){r(...arguments),o(!1)}},n))};t.b=Object(g.compose)([_.a,p.withSpokenMessages,Object(d.withSelect)((e,t,r)=>{var n,c;let{clientId:o}=t,{dispatch:a}=r;const i=e("core/block-editor").getBlock(o),s=(null==i||null===(n=i.innerBlocks[0])||void 0===n?void 0:n.clientId)||"";return{updateBlockAttributes:e=>{s&&a("core/block-editor").updateBlockAttributes(s,e)},currentButtonAttributes:(null==i||null===(c=i.innerBlocks[0])||void 0===c?void 0:c.attributes)||{}}}),Object(g.createHigherOrderComponent)(e=>{class t extends i.Component{constructor(){super(...arguments),c()(this,"state",{doUrlUpdate:!1}),c()(this,"triggerUrlUpdate",()=>{this.setState({doUrlUpdate:!0})})}componentDidUpdate(){const{attributes:e,updateBlockAttributes:t,currentButtonAttributes:r,product:n}=this.props;this.state.doUrlUpdate&&!e.editMode&&null!=n&&n.permalink&&null!=r&&r.url&&n.permalink!==r.url&&(t({...r,url:n.permalink}),this.setState({doUrlUpdate:!1}))}render(){return Object(i.createElement)(e,a()({triggerUrlUpdate:this.triggerUrlUpdate},this.props))}}return t},"withUpdateButtonAttributes")])(e=>{let{attributes:t,debouncedSpeak:r,error:n,getProduct:c,isLoading:o,isSelected:a,product:d,setAttributes:b,triggerUrlUpdate:g=(()=>{})}=e;const{mediaId:_,mediaSrc:P}=t,[x,C]=Object(s.useState)(!1),[I,N]=Object(s.useState)({}),{setGradient:A}=Object(u.__experimentalUseGradient)({gradientAttribute:"overlayGradient",customGradientAttribute:"overlayGradient"}),T=P||y(d),R=_||function(e){return e&&e.images&&e.images.length&&e.images[0].id||0}(d),B=Object(s.useCallback)((e,t,r)=>{b({minHeight:parseInt(r.style.height,10)})},[b]);Object(s.useEffect)(()=>{C(!1)},[a]);const L=()=>{const{contentAlign:e,editMode:r}=t;return Object(i.createElement)(u.BlockControls,null,Object(i.createElement)(u.AlignmentToolbar,{value:e,onChange:e=>{b({contentAlign:e})}}),Object(i.createElement)(p.ToolbarGroup,null,T&&!x&&Object(i.createElement)(p.ToolbarButton,{onClick:()=>C(!0),icon:k.a,label:Object(l.__)("Edit product image","woocommerce")}),Object(i.createElement)(u.MediaReplaceFlow,{mediaId:R,mediaURL:P,accept:"image/*",onSelect:e=>{b({mediaId:e.id,mediaSrc:e.url})},allowedTypes:["image"]}),R&&P?Object(i.createElement)(w.a,{onClick:()=>b({mediaId:0,mediaSrc:""})},Object(l.__)("Reset","woocommerce")):null),Object(i.createElement)(p.ToolbarGroup,{controls:[{icon:"edit",title:Object(l.__)("Edit selected product","woocommerce"),onClick:()=>b({editMode:!r}),isActive:r}]}))},{editMode:F}=t;return n?Object(i.createElement)(j.a,{className:"wc-block-featured-product-error",error:n,isLoading:o,onRetry:c}):F?Object(i.createElement)(i.Fragment,null,L(),Object(i.createElement)(p.Placeholder,{icon:Object(i.createElement)(f.a,{icon:v.a}),label:Object(l.__)("Featured Product","woocommerce"),className:"wc-block-featured-product"},Object(l.__)("Visually highlight a product or variation and encourage prompt action","woocommerce"),Object(i.createElement)("div",{className:"wc-block-featured-product__selection"},Object(i.createElement)(O.a,{selected:t.productId||0,showVariations:!0,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e[0]?e[0].id:0;b({productId:t,mediaId:0,mediaSrc:""}),g()}}),Object(i.createElement)(p.Button,{isPrimary:!0,onClick:()=>{b({editMode:!1}),r(Object(l.__)("Showing Featured Product block preview.","woocommerce"))}},Object(l.__)("Done","woocommerce"))))):x?Object(i.createElement)(i.Fragment,null,Object(i.createElement)(u.__experimentalImageEditingProvider,{id:R,url:T,naturalHeight:I.height||500,naturalWidth:I.width||500,onSaveImage:e=>{let{id:t,url:r}=e;b({mediaId:t,mediaSrc:r})},isEditing:x,onFinishEditing:()=>C(!1)},Object(i.createElement)(u.__experimentalImageEditor,{url:T,height:I.height||500,width:I.width||500}))):Object(i.createElement)(i.Fragment,null,L(),(()=>{const e=t.mediaSrc||y(d),{focalPoint:r={x:.5,y:.5}}=t,n="function"==typeof p.FocalPointPicker;return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(u.InspectorControls,{key:"inspector"},Object(i.createElement)(p.PanelBody,{title:Object(l.__)("Content","woocommerce")},Object(i.createElement)(p.ToggleControl,{label:Object(l.__)("Show description","woocommerce"),checked:t.showDesc,onChange:()=>b({showDesc:!t.showDesc})}),Object(i.createElement)(p.ToggleControl,{label:Object(l.__)("Show price","woocommerce"),checked:t.showPrice,onChange:()=>b({showPrice:!t.showPrice})})),!!e&&Object(i.createElement)(i.Fragment,null,n&&Object(i.createElement)(p.PanelBody,{title:Object(l.__)("Media settings","woocommerce")},Object(i.createElement)(p.__experimentalToggleGroupControl,{help:Object(i.createElement)(i.Fragment,null,Object(i.createElement)("p",null,Object(l.__)("Choose “Cover” if you want the image to scale automatically to always fit its container.","woocommerce")),Object(i.createElement)("p",null,Object(l.__)("Note: by choosing “Cover” you will lose the ability to freely move the focal point precisely.","woocommerce"))),label:Object(l.__)("Image fit","woocommerce"),value:t.imageFit,onChange:e=>b({imageFit:e})},Object(i.createElement)(p.__experimentalToggleGroupControlOption,{label:Object(l.__)("None","woocommerce"),value:"none"}),Object(i.createElement)(p.__experimentalToggleGroupControlOption
/* translators: "Cover" is a verb that indicates an image covering the entire container. */,{label:Object(l.__)("Cover","woocommerce"),value:"cover"})),Object(i.createElement)(p.FocalPointPicker,{label:Object(l.__)("Focal Point Picker","woocommerce"),url:e,value:r,onChange:e=>b({focalPoint:e})}),Object(i.createElement)(p.TextareaControl,{label:Object(l.__)("Alt text (alternative text)","woocommerce"),value:t.alt,onChange:e=>{b({alt:e})},help:Object(i.createElement)(i.Fragment,null,Object(i.createElement)(p.ExternalLink,{href:"https://www.w3.org/WAI/tutorials/images/decision-tree"},Object(l.__)("Describe the purpose of the image","woocommerce")),Object(l.__)("Leaving it empty will use the product name.","woocommerce"))})),Object(i.createElement)(u.__experimentalPanelColorGradientSettings,{__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0,title:Object(l.__)("Overlay","woocommerce"),initialOpen:!0,settings:[{colorValue:t.overlayColor,gradientValue:t.overlayGradient,onColorChange:e=>b({overlayColor:e}),onGradientChange:e=>{A(e),b({overlayGradient:e})},label:Object(l.__)("Color","woocommerce")}]},Object(i.createElement)(p.RangeControl,{label:Object(l.__)("Opacity","woocommerce"),value:t.dimRatio,onChange:e=>b({dimRatio:e}),min:0,max:100,step:10,required:!0})))),Object(i.createElement)(u.InspectorControls,{__experimentalGroup:"dimensions"}))})(),d?(()=>{var e;const{contentAlign:r,dimRatio:n,focalPoint:c,imageFit:s,minHeight:p,overlayColor:b,overlayGradient:g,showDesc:O,showPrice:j,style:w}=t,_=m()("wc-block-featured-product",Object(E.b)(n),{"is-selected":a&&"preview"!==t.productId,"is-loading":!d&&o,"is-not-found":!d&&!o,"has-background-dim":0!==n},"center"!==r&&`has-${r}-content`),f={borderRadius:null==w||null===(e=w.border)||void 0===e?void 0:e.radius},v={...Object(u.__experimentalGetSpacingClassesAndStyles)(t).style,minHeight:p},k={...Object(E.a)(c),objectFit:s},y={background:g,backgroundColor:b};return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(S,{enable:{bottom:!0},onResize:B,showHandle:a,style:{minHeight:p}}),Object(i.createElement)("div",{className:_,style:f},Object(i.createElement)("div",{className:"wc-block-featured-product__wrapper",style:v},Object(i.createElement)("div",{className:"wc-block-featured-product__overlay",style:y}),Object(i.createElement)("img",{alt:d.short_description,className:"wc-block-featured-product__background-image",src:T,style:k,onLoad:e=>{var t,r;N({height:null===(t=e.target)||void 0===t?void 0:t.naturalHeight,width:null===(r=e.target)||void 0===r?void 0:r.naturalWidth})}}),Object(i.createElement)("h2",{className:"wc-block-featured-product__title",dangerouslySetInnerHTML:{__html:d.name}}),!Object(h.isEmpty)(d.variation)&&Object(i.createElement)("h3",{className:"wc-block-featured-product__variation",dangerouslySetInnerHTML:{__html:d.variation}}),O&&Object(i.createElement)("div",{className:"wc-block-featured-product__description",dangerouslySetInnerHTML:{__html:d.short_description}}),j&&Object(i.createElement)("div",{className:"wc-block-featured-product__price",dangerouslySetInnerHTML:{__html:d.price_html}}),Object(i.createElement)("div",{className:"wc-block-featured-product__link"},(()=>{const e=m()("wp-block-button__link","is-style-fill");return"preview"===t.productId?Object(i.createElement)("div",{className:"wp-block-button aligncenter",style:{width:"100%"}},Object(i.createElement)(u.RichText.Content,{tagName:"a",className:e,href:d.permalink,title:t.linkText,style:{backgroundColor:"vivid-green-cyan",borderRadius:"5px"},value:t.linkText,target:d.permalink})):Object(i.createElement)(u.InnerBlocks,{template:[["core/buttons",{layout:{type:"flex",justifyContent:"center"}},[["core/button",{text:Object(l.__)("Shop now","woocommerce"),url:d.permalink}]]]],templateLock:"all"})})()))))})():Object(i.createElement)(p.Placeholder,{className:"wc-block-featured-product",icon:Object(i.createElement)(f.a,{icon:v.a}),label:Object(l.__)("Featured Product","woocommerce")},o?Object(i.createElement)(p.Spinner,null):Object(l.__)("No product is selected.","woocommerce")))})},21:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r(0),c=r(7),o=r(1);const a={clear:Object(o.__)("Clear all selected items","woocommerce"),noItems:Object(o.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:Object(o.__)("No results for %s","woocommerce"),search:Object(o.__)("Search for items","woocommerce"),selected:e=>Object(o.sprintf)(
/* translators: Number of items selected from list. */
Object(o._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:Object(o.__)("Search results updated.","woocommerce")},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const r=Object(c.groupBy)(e,"parent"),n=Object(c.keyBy)(t,"id"),o=["0"],a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=a(n[e.parent]);return[...t,e.name]},i=e=>e.map(e=>{const t=r[e.id];return o.push(""+e.id),{...e,breadcrumbs:a(n[e.parent]),children:t&&t.length?i(t):[]}}),s=i(r[0]||[]);return Object.entries(r).forEach(e=>{let[t,r]=e;o.includes(t)||s.push(...i(r||[]))}),s},s=(e,t,r)=>{if(!t)return r?i(e):e;const n=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),c=e.map(e=>!!n.test(e.name)&&e).filter(Boolean);return r?i(c,e):c},l=(e,t)=>{if(!t)return e;const r=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"ig");return e.split(r).map((e,r)=>0===r?e:Object(n.createElement)(n.Fragment,{key:r},Object(n.createElement)("strong",null,t),e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},220:function(e){e.exports=JSON.parse('{"name":"woocommerce/featured-product","version":"1.0.0","title":"Featured Product","description":"Visually highlight a product or variation and encourage prompt action.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":["wide","full"],"html":false,"color":{"background":true,"text":true,"__experimentalDuotone":".wc-block-featured-product__background-image"},"spacing":{"padding":true,"__experimentalDefaultControls":{"padding":true},"__experimentalSkipSerialization":true},"__experimentalBorder":{"color":true,"radius":true,"width":true,"__experimentalSkipSerialization":true},"multiple":true},"attributes":{"alt":{"type":"string","default":""},"contentAlign":{"type":"string","default":"center"},"dimRatio":{"type":"number","default":50},"editMode":{"type":"boolean","default":true},"focalPoint":{"type":"object","default":false},"imageFit":{"type":"string","default":"none"},"mediaId":{"type":"number","default":0},"mediaSrc":{"type":"string","default":""},"minHeight":{"type":"number","default":500},"linkText":{"type":"string","default":"Shop now"},"overlayColor":{"type":"string","default":"#000000"},"overlayGradient":{"type":"string"},"productId":{"type":"number"},"previewProduct":{"type":"object","default":null},"showDesc":{"type":"boolean","default":true},"showPrice":{"type":"boolean","default":true}},"textdomain":"woocommerce","apiVersion":2}')},232:function(e,t,r){"use strict";var n=r(6),c=r.n(n),o=r(23),a=r.n(o),i=r(0),s=r(10),l=r(26),u=r(28);const d=Object(s.createHigherOrderComponent)(e=>class extends i.Component{constructor(){super(...arguments),a()(this,"state",{error:null,loading:!1,product:"preview"===this.props.attributes.productId?this.props.attributes.previewProduct:null}),a()(this,"loadProduct",()=>{const{productId:e}=this.props.attributes;"preview"!==e&&(e?(this.setState({loading:!0}),Object(l.e)(e).then(e=>{this.setState({product:e,loading:!1,error:null})}).catch(async e=>{const t=await Object(u.a)(e);this.setState({product:null,loading:!1,error:t})})):this.setState({product:null,loading:!1,error:null}))})}componentDidMount(){this.loadProduct()}componentDidUpdate(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}render(){const{error:t,loading:r,product:n}=this.state;return Object(i.createElement)(e,c()({},this.props,{error:t,getProduct:this.loadProduct,isLoading:r,product:n}))}},"withProduct");t.a=d},24:function(e,t,r){"use strict";r.d(t,"o",(function(){return o})),r.d(t,"m",(function(){return a})),r.d(t,"l",(function(){return i})),r.d(t,"n",(function(){return s})),r.d(t,"j",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return p})),r.d(t,"k",(function(){return b})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"h",(function(){return h})),r.d(t,"a",(function(){return O})),r.d(t,"i",(function(){return j})),r.d(t,"b",(function(){return w}));var n,c=r(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=o.pluginUrl+"images/",i=o.pluginUrl+"build/",s=o.buildPhase,l=null===(n=c.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,u=c.STORE_PAGES.checkout.id,d=c.STORE_PAGES.checkout.permalink,p=c.STORE_PAGES.privacy.permalink,b=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),m=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),g=c.STORE_PAGES.cart.permalink,h=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),O=Object(c.getSetting)("allowedCountries",{}),j=Object(c.getSetting)("shippingStates",{}),w=Object(c.getSetting)("allowedStates",{})},25:function(e,t){e.exports=window.wp.isShallowEqual},26:function(e,t,r){"use strict";r.d(t,"h",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"b",(function(){return d})),r.d(t,"i",(function(){return p})),r.d(t,"f",(function(){return b})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"g",(function(){return h})),r.d(t,"a",(function(){return O}));var n=r(16),c=r(15),o=r.n(c),a=r(7),i=r(2),s=r(24);const l=e=>{let{selected:t=[],search:r="",queryArgs:c={}}=e;const i=(e=>{let{selected:t=[],search:r="",queryArgs:c={}}=e;const o=s.o.productCount>100,a={per_page:o?100:0,catalog_visibility:"any",search:r,orderby:"title",order:"asc"},i=[Object(n.addQueryArgs)("/wc/store/v1/products",{...a,...c})];return o&&t.length&&i.push(Object(n.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),i})({selected:t,search:r,queryArgs:c});return Promise.all(i.map(e=>o()({path:e}))).then(e=>Object(a.uniqBy)(Object(a.flatten)(e),"id").map(e=>({...e,parent:0}))).catch(e=>{throw e})},u=e=>o()({path:"/wc/store/v1/products/"+e}),d=()=>o()({path:"wc/store/v1/products/attributes"}),p=e=>o()({path:`wc/store/v1/products/attributes/${e}/terms`}),b=e=>{let{selected:t=[],search:r}=e;const c=(e=>{let{selected:t=[],search:r}=e;const c=Object(i.getSetting)("limitTags",!1),o=[Object(n.addQueryArgs)("wc/store/v1/products/tags",{per_page:c?100:0,orderby:c?"count":"name",order:c?"desc":"asc",search:r})];return c&&t.length&&o.push(Object(n.addQueryArgs)("wc/store/v1/products/tags",{include:t})),o})({selected:t,search:r});return Promise.all(c.map(e=>o()({path:e}))).then(e=>Object(a.uniqBy)(Object(a.flatten)(e),"id"))},m=e=>o()({path:Object(n.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),g=e=>o()({path:"wc/store/v1/products/categories/"+e}),h=e=>o()({path:Object(n.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),O=(e,t)=>{if(!e.title.raw)return e.slug;const r=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(r?"":" - "+e.slug)}},28:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var n=r(1),c=r(14);const o=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}},a=e=>{if(e.data&&"rest_invalid_param"===e.code){const t=Object.values(e.data.params);if(t[0])return t[0]}return null!=e&&e.message?Object(c.decodeEntities)(e.message):Object(n.__)("Something went wrong. Please contact us to get assistance.","woocommerce")}},3:function(e,t){e.exports=window.wp.components},32:function(e,t){e.exports=window.wp.escapeHtml},33:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(32);t.a=e=>{let{error:t}=e;return Object(n.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:r}=e;return t?"general"===r?Object(n.createElement)("span",null,Object(c.__)("The following error was returned","woocommerce"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(t))):"api"===r?Object(n.createElement)("span",null,Object(c.__)("The following error was returned from the API","woocommerce"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(t))):t:Object(c.__)("An unknown error occurred which prevented the block from being updated.","woocommerce")})(t))}},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(6),c=r.n(n),o=r(0),a=r(21);const i=e=>{let{countLabel:t,className:r,depth:n=0,controlId:i="",item:s,isSelected:l,isSingle:u,onSelect:d,search:p="",...b}=e;const m=null!=t&&void 0!==s.count&&null!==s.count,g=[r,"woocommerce-search-list__item"];g.push("depth-"+n),u&&g.push("is-radio-button"),m&&g.push("has-count");const h=s.breadcrumbs&&s.breadcrumbs.length,O=b.name||"search-list-item-"+i,j=`${O}-${s.id}`;return Object(o.createElement)("label",{htmlFor:j,className:g.join(" ")},u?Object(o.createElement)("input",c()({type:"radio",id:j,name:O,value:s.value,onChange:d(s),checked:l,className:"woocommerce-search-list__item-input"},b)):Object(o.createElement)("input",c()({type:"checkbox",id:j,name:O,value:s.value,onChange:d(s),checked:l,className:"woocommerce-search-list__item-input"},b)),Object(o.createElement)("span",{className:"woocommerce-search-list__item-label"},h?Object(o.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(a.b)(s.breadcrumbs)):null,Object(o.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(a.d)(s.name,p))),!!m&&Object(o.createElement)("span",{className:"woocommerce-search-list__item-count"},t||s.count))};t.b=i},375:function(e,t,r){e.exports=r(490)},376:function(e,t){},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(1),c=r(24);const o=[{id:1,name:"WordPress Pennant",variation:"",permalink:"https://example.org",sku:"wp-pennant",short_description:Object(n.__)("Fly your WordPress banner with this beauty! Deck out your office space or add it to your kids walls. This banner will spruce up any space it’s hung!","woocommerce"),description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",price:"7.99",price_html:'<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>7.99</span>',images:[{id:1,src:c.m+"previews/pennant.jpg",thumbnail:c.m+"previews/pennant.jpg",name:"pennant-1.jpg",alt:"WordPress Pennant",srcset:"",sizes:""}],average_rating:5,categories:[{id:1,name:"Decor",slug:"decor",link:"https://example.org"}],review_count:1,prices:{currency_code:"GBP",decimal_separator:".",thousand_separator:",",decimals:2,price_prefix:"£",price_suffix:"",price:"7.99",regular_price:"9.99",sale_price:"7.99",price_range:null},add_to_cart:{text:Object(n.__)("Add to cart","woocommerce"),description:Object(n.__)("Add to cart","woocommerce")},has_options:!1,is_purchasable:!0,is_in_stock:!0,on_sale:!0}]},378:function(e,t){},490:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(5),o=r(13),a=r(2),i=r(71),s=r(110),l=r(525),u=(r(376),r(377));const d={attributes:{alt:"",contentAlign:"center",dimRatio:50,editMode:!1,height:Object(a.getSetting)("default_height",500),mediaSrc:"",overlayColor:"#000000",showDesc:!0,productId:"preview",previewProduct:u.a[0]}};var p=r(201);r(378);var b=r(220);Object(o.registerBlockType)(b,{icon:{src:Object(n.createElement)(s.a,{icon:l.a,className:"wc-block-editor-components-block-icon"})},attributes:{...b.attributes,minHeight:{type:"number",default:Object(a.getSetting)("default_height",500)}},supports:{...b.supports,color:{background:!0,text:!0,...Object(i.b)()&&{__experimentalDuotone:".wc-block-featured-product__background-image"}},spacing:{padding:!0,...Object(i.b)()&&{__experimentalDefaultControls:{padding:!0},__experimentalSkipSerialization:!0}},...Object(i.b)()&&{__experimentalBorder:{color:!0,radius:!0,width:!0,__experimentalSkipSerialization:!0}}},example:d,edit:e=>{const t=Object(c.useBlockProps)();return Object(n.createElement)("div",t,Object(n.createElement)(p.b,e))},save:()=>Object(n.createElement)(c.InnerBlocks.Content,null)})},5:function(e,t){e.exports=window.wp.blockEditor},69:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(110),a=r(171),i=r(4),s=r.n(i),l=r(3),u=r(33);r(111),t.a=e=>{let{className:t,error:r,isLoading:i=!1,onRetry:d}=e;return Object(n.createElement)(l.Placeholder,{icon:Object(n.createElement)(o.a,{icon:a.a}),label:Object(c.__)("Sorry, an error occurred","woocommerce"),className:s()("wc-block-api-error",t)},Object(n.createElement)(u.a,{error:r}),d&&Object(n.createElement)(n.Fragment,null,i?Object(n.createElement)(l.Spinner,null):Object(n.createElement)(l.Button,{isSecondary:!0,onClick:d},Object(c.__)("Retry","woocommerce"))))}},7:function(e,t){e.exports=window.lodash},71:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));var n=r(13),c=r(24);const o=(e,t)=>{if(c.n>2)return Object(n.registerBlockType)(e,t)},a=(e,t)=>{if(c.n>1)return Object(n.registerBlockType)(e,t)},i=()=>c.n>2,s=()=>c.n>1},8:function(e,t){e.exports=window.React},84:function(e,t,r){"use strict";var n=r(6),c=r.n(n),o=r(0),a=r(34),i=r(3),s=r(4),l=r.n(s);t.a=e=>{let{className:t,item:r,isSelected:n,isLoading:s,onSelect:u,disabled:d,...p}=e;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(a.a,c()({},p,{key:r.id,className:t,isSelected:n,item:r,onSelect:u,isSingle:!0,disabled:d})),n&&s&&Object(o.createElement)("div",{key:"loading",className:l()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(o.createElement)(i.Spinner,null)))}},9:function(e,t){e.exports=window.wp.data},93:function(e,t,r){"use strict";var n=r(6),c=r.n(n),o=r(0),a=r(1),i=r(7),s=r(34),l=r(96),u=r(10),d=Object(u.createHigherOrderComponent)(e=>{class t extends o.Component{render(){const{selected:t}=this.props,r=null==t;return Object(o.createElement)(e,c()({},this.props,{selected:r?[]:[t]}))}}return t.defaultProps={selected:null},t},"withTransformSingleSelectToMultipleSelect"),p=r(175),b=r(23),m=r.n(b),g=r(25),h=r.n(g),O=r(26),j=r(28),w=Object(u.createHigherOrderComponent)(e=>{class t extends o.Component{constructor(){super(...arguments),m()(this,"state",{error:null,loading:!1,variations:{}}),m()(this,"loadVariations",()=>{const{products:e}=this.props,{loading:t,variations:r}=this.state;if(t)return;const n=this.getExpandedProduct();if(!n||r[n])return;const c=e.find(e=>e.id===n);c.variations&&0!==c.variations.length?(this.setState({loading:!0}),Object(O.g)(n).then(e=>{const t=e.map(e=>({...e,parent:n}));this.setState({variations:{...this.state.variations,[n]:t},loading:!1,error:null})}).catch(async e=>{const t=await Object(j.a)(e);this.setState({variations:{...this.state.variations,[n]:null},loading:!1,error:t})})):this.setState({variations:{...this.state.variations,[n]:null},loading:!1,error:null})})}componentDidMount(){const{selected:e,showVariations:t}=this.props;e&&t&&this.loadVariations()}componentDidUpdate(e){const{isLoading:t,selected:r,showVariations:n}=this.props;n&&(!h()(e.selected,r)||e.isLoading&&!t)&&this.loadVariations()}isProductId(e){const{products:t}=this.props;return t.some(t=>t.id===e)}findParentProduct(e){const{products:t}=this.props;return t.filter(t=>t.variations&&t.variations.find(t=>{let{id:r}=t;return r===e}))[0].id}getExpandedProduct(){const{isLoading:e,selected:t,showVariations:r}=this.props;if(!r)return null;let n=t&&t.length?t[0]:null;return n?this.prevSelectedItem=n:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(n=this.prevSelectedItem)),!e&&n?this.isProductId(n)?n:this.findParentProduct(n):null}render(){const{error:t,isLoading:r}=this.props,{error:n,loading:a,variations:i}=this.state;return Object(o.createElement)(e,c()({},this.props,{error:n||t,expandedProduct:this.getExpandedProduct(),isLoading:r,variations:i,variationsLoading:a}))}}return m()(t,"defaultProps",{selected:[],showVariations:!1}),t},"withProductVariations"),_=r(33),f=r(4),v=r.n(f),k=r(84);r(129);const E={list:Object(a.__)("Products","woocommerce"),noItems:Object(a.__)("Your store doesn't have any products.","woocommerce"),search:Object(a.__)("Search for a product to display","woocommerce"),updated:Object(a.__)("Product search results updated.","woocommerce")},y=e=>{let{expandedProduct:t,error:r,instanceId:n,isCompact:u,isLoading:d,onChange:p,onSearch:b,products:m,renderItem:g,selected:h,showVariations:O,variations:j,variationsLoading:w}=e;if(r)return Object(o.createElement)(_.a,{error:r});const f=[...m,...j&&j[t]?j[t]:[]];return Object(o.createElement)(l.a,{className:"woocommerce-products",list:f,isCompact:u,isLoading:d,isSingle:!0,selected:f.filter(e=>{let{id:t}=e;return h.includes(t)}),onChange:p,renderItem:g||(O?e=>{const{item:t,search:r,depth:l=0,isSelected:u,onSelect:p}=e,b=t.variations&&Array.isArray(t.variations)?t.variations.length:0,m=v()("woocommerce-search-product__item","woocommerce-search-list__item","depth-"+l,"has-count",{"is-searching":r.length>0,"is-skip-level":0===l&&0!==t.parent,"is-variable":b>0});if(!t.breadcrumbs.length)return Object(o.createElement)(k.a,c()({},e,{className:v()(m,{"is-selected":u}),isSelected:u,item:t,onSelect:()=>()=>{p(t)()},isLoading:d||w,countLabel:t.variations.length>0?Object(a.sprintf)(
/* translators: %1$d is the number of variations of a product product. */
Object(a.__)("%1$d variations","woocommerce"),t.variations.length):null,name:"products-"+n,"aria-label":Object(a.sprintf)(
/* translators: %1$s is the product name, %2$d is the number of variations of that product. */
Object(a._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",t.variations.length,"woocommerce"),t.name,t.variations.length)}));const g=Object(i.isEmpty)(t.variation)?e:{...e,item:{...e.item,name:t.variation},"aria-label":`${t.breadcrumbs[0]}: ${t.variation}`};return Object(o.createElement)(s.a,c()({},g,{className:m,name:"variations-"+n}))}:null),onSearch:b,messages:E,isHierarchical:!0})};y.defaultProps={isCompact:!1,expandedProduct:null,selected:[],showVariations:!1},t.a=d(Object(p.a)(w(Object(u.withInstanceId)(y))))},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return k}));var n=r(6),c=r.n(n),o=r(0),a=r(1),i=r(3),s=r(110),l=r(518),u=r(4),d=r.n(u),p=r(10),b=r(21),m=r(34),g=r(517),h=r(14);const O=e=>{let{id:t,label:r,popoverContents:n,remove:c,screenReaderLabel:l,className:u=""}=e;const[b,m]=Object(o.useState)(!1),j=Object(p.useInstanceId)(O);if(l=l||r,!r)return null;r=Object(h.decodeEntities)(r);const w=d()("woocommerce-tag",u,{"has-remove":!!c}),_="woocommerce-tag__label-"+j,f=Object(o.createElement)(o.Fragment,null,Object(o.createElement)("span",{className:"screen-reader-text"},l),Object(o.createElement)("span",{"aria-hidden":"true"},r));return Object(o.createElement)("span",{className:w},n?Object(o.createElement)(i.Button,{className:"woocommerce-tag__text",id:_,onClick:()=>m(!0)},f):Object(o.createElement)("span",{className:"woocommerce-tag__text",id:_},f),n&&b&&Object(o.createElement)(i.Popover,{onClose:()=>m(!1)},n),c&&Object(o.createElement)(i.Button,{className:"woocommerce-tag__remove",onClick:c(t),label:Object(a.sprintf)(// Translators: %s label.
Object(a.__)("Remove %s","woocommerce"),r),"aria-describedby":_},Object(o.createElement)(s.a,{icon:g.a,size:20,className:"clear-icon"})))};var j=O;const w=e=>Object(o.createElement)(m.b,e),_=e=>{const{list:t,selected:r,renderItem:n,depth:a=0,onSelect:i,instanceId:s,isSingle:l,search:u}=e;return t?Object(o.createElement)(o.Fragment,null,t.map(t=>{const d=-1!==r.findIndex(e=>{let{id:r}=e;return r===t.id});return Object(o.createElement)(o.Fragment,{key:t.id},Object(o.createElement)("li",null,n({item:t,isSelected:d,onSelect:i,isSingle:l,search:u,depth:a,controlId:s})),Object(o.createElement)(_,c()({},e,{list:t.children,depth:a+1})))})):null},f=e=>{let{isLoading:t,isSingle:r,selected:n,messages:c,onChange:s,onRemove:l}=e;if(t||r||!n)return null;const u=n.length;return Object(o.createElement)("div",{className:"woocommerce-search-list__selected"},Object(o.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(o.createElement)("strong",null,c.selected(u)),u>0?Object(o.createElement)(i.Button,{isLink:!0,isDestructive:!0,onClick:()=>s([]),"aria-label":c.clear},Object(a.__)("Clear all","woocommerce")):null),u>0?Object(o.createElement)("ul",null,n.map((e,t)=>Object(o.createElement)("li",{key:t},Object(o.createElement)(j,{label:e.name,id:e.id,remove:l})))):null)},v=e=>{let{filteredList:t,search:r,onSelect:n,instanceId:c,...i}=e;const{messages:u,renderItem:d,selected:p,isSingle:b}=i,m=d||w;return 0===t.length?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(o.createElement)(s.a,{icon:l.a})),Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-text"},r?Object(a.sprintf)(u.noResults,r):u.noItems)):Object(o.createElement)("ul",{className:"woocommerce-search-list__list"},Object(o.createElement)(_,{list:t,selected:p,renderItem:m,onSelect:n,instanceId:c,isSingle:b,search:r}))},k=e=>{const{className:t="",isCompact:r,isHierarchical:n,isLoading:a,isSingle:s,list:l,messages:u=b.a,onChange:m,onSearch:g,selected:h,debouncedSpeak:O}=e,[j,w]=Object(o.useState)(""),_=Object(p.useInstanceId)(k),E=Object(o.useMemo)(()=>({...b.a,...u}),[u]),y=Object(o.useMemo)(()=>Object(b.c)(l,j,n),[l,j,n]);Object(o.useEffect)(()=>{O&&O(E.updated)},[O,E]),Object(o.useEffect)(()=>{"function"==typeof g&&g(j)},[j,g]);const S=Object(o.useCallback)(e=>()=>{s&&m([]);const t=h.findIndex(t=>{let{id:r}=t;return r===e});m([...h.slice(0,t),...h.slice(t+1)])},[s,h,m]),P=Object(o.useCallback)(e=>()=>{-1===h.findIndex(t=>{let{id:r}=t;return r===e.id})?m(s?[e]:[...h,e]):S(e.id)()},[s,S,m,h]);return Object(o.createElement)("div",{className:d()("woocommerce-search-list",t,{"is-compact":r})},Object(o.createElement)(f,c()({},e,{onRemove:S,messages:E})),Object(o.createElement)("div",{className:"woocommerce-search-list__search"},Object(o.createElement)(i.TextControl,{label:E.search,type:"search",value:j,onChange:e=>w(e)})),a?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-loading"},Object(o.createElement)(i.Spinner,null)):Object(o.createElement)(v,c()({},e,{search:j,filteredList:y,messages:E,onSelect:P,instanceId:_})))};Object(i.withSpokenMessages)(k)}});