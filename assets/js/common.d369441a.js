"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[2076],{6874:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);const r="marker_jnev";var l=n(4848);const o=e=>{let{children:t}=e;return(0,l.jsx)("span",{className:r,children:t})}},7617:(e,t,n)=>{n.d(t,{Z:()=>r});const r={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},7431:(e,t,n)=>{n.r(t),n.d(t,{Accordion:()=>se,AccordionButton:()=>de,AccordionItem:()=>ae,Breadcrumbs:()=>ye,BreadcrumbsItem:()=>je,Button:()=>r.$,ButtonIcon:()=>r.a,Checkbox:()=>Ce,Code:()=>O,InputChild:()=>j,InputChildButton:()=>N,InputChildIcon:()=>C,InputChildPrefix:()=>y,InputChildSelect:()=>x,InputDecrementStepper:()=>_,InputIncrementStepper:()=>g,InputNumber:()=>p,InputNumberField:()=>h,InputNumberStepper:()=>m,InputText:()=>b,InputTextField:()=>v,Key:()=>We,LabelText:()=>w,LinkButton:()=>c,Progress:()=>et,Radio:()=>Ie,RadioGroup:()=>Oe,Select:()=>Ue,SelectGroup:()=>Re,Spinner:()=>Je,Stack:()=>J,Switch:()=>nt,Toggle:()=>tt});var r=n(1435),l=n(6540),o=n(4848);const c=e=>(0,o.jsx)(r.$,{...e});function s(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(n=s(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const a=function(){for(var e,t,n=0,r="",l=arguments.length;n<l;n++)(e=arguments[n])&&(t=s(e))&&(r&&(r+=" "),r+=t);return r},i={mtui_inputtype:"mtui_inputtype_Dqf8",disabled:"disabled_DgNB","color-red":"color-red_hqPL","color-green":"color-green_soRk","color-blue":"color-blue_N2Hb",mtui_color_white:"mtui_color_white_zUvx",stepper:"stepper__U4g",inputPrefix:"inputPrefix__6x0",inputSelect:"inputSelect_AON4",inputChildButton:"inputChildButton_YDGp",inputChildIcon:"inputChildIcon_cw7e"};var d=n(7617);const u=e=>{const{name:t,disabled:n,value:r,onChange:c,placeholder:s}=e,u={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style},[p,h]=(0,l.useState)(r),m=e=>{console.log(e),h(e),c(e)};return(0,o.jsx)("div",{className:a("mtui-inputnum",i.mtui_inputtype,{[i["mtui_color_"+e.color]]:e.color,[i.disabled]:n,[e.className]:!!e.className}),style:u,children:l.Children.map(e.children,(e=>l.cloneElement(e,{childProps:e.props,value:p,onChange:m,placeholder:s,name:t})))})};u.defaultProps={value:"0",onChange:()=>{},name:"",disabled:!1,placeholder:"0"};const p=u,h=e=>{let{onChange:t,value:n,placeholder:r,name:l,disabled:c}=e;const s={placeholder:r,name:l,disabled:c};return"function"==typeof t&&(s.onChange=t),(n||""===n||0===n)&&(s.value=n),(0,o.jsx)("input",{type:"number",...s})},m=e=>{const t=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,o.jsx)("div",{className:i.stepper,children:l.Children.map(e.children,(e=>l.cloneElement(e,{onDecrement:n,onIncrement:t})))})},_=e=>{let{onDecrement:t}=e;return(0,o.jsx)("button",{onClick:t,children:(0,o.jsx)("span",{children:"\u25bc"})})},g=e=>(0,o.jsx)("button",{onClick:e.onIncrement,children:(0,o.jsx)("span",{children:"\u25b2"})}),f=e=>{const{onChange:t,value:n,placeholder:r,name:c,hue:s,disabled:u}=e,p={"--hue":d.Z[e.color]?d.Z[e.color]:s||160,...e.style};return(0,o.jsx)("div",{className:a("mtui-inputtext",i.mtui_inputtype,{[i.disabled]:u,[i["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:p,children:l.Children.map(e.children,(e=>l.cloneElement(e,{childProps:e.props,onChange:t,value:n,placeholder:r,disabled:u,name:c})))})};f.defaultProps={name:"",disabled:!1,placeholder:""};const b=f,v=e=>{let{value:t,placeholder:n,name:r,onChange:l,disabled:c}=e;const s={type:"text",placeholder:n,name:r,disabled:c};return"function"==typeof l&&(s.onChange=l),(t||""===t)&&(s.value=t),(0,o.jsx)("input",{...s})},y=e=>{let{childProps:t}=e;return t.value?(0,o.jsx)("div",{className:i.inputPrefix,children:t.value}):""},x=e=>e.children?(0,o.jsx)("select",{className:i.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",j=e=>{const t={...e};return delete t.children,e.children?(0,o.jsx)("div",{...t,className:i.inputChild,children:l.Children.map(e.children,(e=>{const n={...t,...e.props};return e.props.onClick&&(n.onClick=t=>e.props.onClick(t,n)),l.cloneElement(e,n)}))}):""},N=e=>{const t={...e};return delete t.children,delete t.childProps,e.children?(0,o.jsx)("button",{...t,className:i.inputChildButton,children:e.children}):""},C=e=>{const t={...e};return delete t.children,e.children?(0,o.jsx)("div",{...t,className:i.inputChildIcon,children:e.children}):""},k="label_oGIU",w=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:k,children:t})},I={code:"code_UgKm",code__color_gray:"code__color_gray_hEYL",code__color_black:"code__color_black_WL4C",code__color_green:"code__color_green_vLrH",code__color_purple:"code__color_purple_OsHQ",code__color_red:"code__color_red_qt2c",code__color_blue:"code__color_blue_zQ8n",code__color_teal:"code__color_teal_RdeF",code__color_pink:"code__color_pink_EUpt",code__color_yellow:"code__color_yellow_X__W"};var P=n(403);const O=e=>{const t={...e};return t.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(t.color)||(t.color="gray"),e.children?(0,o.jsx)("span",{className:(0,P.A)({"mtui-codeblock":!0,[I.code]:!0,[I["code__color_"+t.color]]:t.color,[e.className]:!!e.className}),children:e.children}):""},S="stack_a4c0",U="column_KJ9q",E="stretch_bwDw",D="flex_IqHc",A="js_end_lzQ0",B="js_center_gcbt",L="js_start_uaxJ",R="js_spaceBetween_b7yT",Z="js_spaceAround_Mzhk",z="al_start_d6Gv",W="al_end_WwoE",V="al_center_fGEd",q="al_stretch_VgFb",F={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let T;const G=new Uint8Array(16);function H(){if(!T&&(T="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(G)}const $=[];for(let rt=0;rt<256;++rt)$.push((rt+256).toString(16).slice(1));function K(e,t=0){return $[e[t+0]]+$[e[t+1]]+$[e[t+2]]+$[e[t+3]]+"-"+$[e[t+4]]+$[e[t+5]]+"-"+$[e[t+6]]+$[e[t+7]]+"-"+$[e[t+8]]+$[e[t+9]]+"-"+$[e[t+10]]+$[e[t+11]]+$[e[t+12]]+$[e[t+13]]+$[e[t+14]]+$[e[t+15]]}const M=function(e,t,n){if(F.randomUUID&&!t&&!e)return F.randomUUID();const r=(e=e||{}).random||(e.rng||H)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return K(r)},J=e=>{const t="mtstack__"+M(),{flex:n,justify:r,align:l,margin:c,padding:s}=e,i={gap:isNaN(e.gap)?e.gap:e.gap+"px",flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style};"string"==typeof c&&(i.margin=isNaN(c)?c:c+"px"),"string"==typeof s&&(i.padding=isNaN(s)?s:s+"px");const d={...e};return delete d.children,delete d.wrap,delete d.column,delete d.justify,delete d.flex,delete d.margin,delete d.padding,delete d.align,e.children?(0,o.jsxs)("div",{...d,className:a(["mtui-stack",t,S,{[U]:e.column,[D]:"boolean"==typeof n&&n,[A]:"end"===r,[B]:"center"===r,[L]:"start"===r,[R]:"spaceBetween"===r,[Z]:"spaceAround"===r,[z]:"start"===l,[W]:"end"===l,[V]:"center"===l,[q]:"stretch"===l,[E]:e.stretch,[e.className]:e.className}]),style:i,children:[e.children,(0,o.jsx)("style",{children:`.${t} > * {\n          flex: ${"string"==typeof n?n:"0 1 auto"}\n      }`})]}):""},Q="accordion_te6C",X="button_ROAw",Y="contentitem_bnwX",ee="visible_yIMH",te="hidden_I0gq",ne="icon_ZU1N",re="icon_custom_lf5b",le="children_kTbB",oe="button_opened_lP39",ce=e=>{const t={...e.style},n={...e,style:t};return delete n.setIcon,(0,o.jsx)("section",{...n,className:a([Q,"mtui-accordion",n.className,{[Q]:Q}]),children:l.Children.map(n.children,(t=>l.cloneElement(t,{setIcon:e.setIcon,...t.props})))})};ce.defaultProps={children:null,setIcon:null,className:"",style:{}};const se=ce,ae=e=>{const[t,n]=(0,l.useState)(e.isOpened||!1),r=()=>{n(!t)};return(0,o.jsx)("article",{children:l.Children.map(e.children,((n,o)=>{const c={...n.props};return"AccordionButton"===n.type.displayName?(c.onClick=r,l.cloneElement(n,{...c,isOpened:t,setIcon:e.setIcon})):(c["data-visible"]=t,c.className=`mtui-accordion__item ${Y} ${t?ee:te}`,l.cloneElement(n,c))}))})},ie=e=>(0,o.jsxs)("button",{onClick:e.onClick,className:(0,P.A)({[X]:!0,[oe]:e.isOpened}),children:[(0,o.jsx)("span",{className:le,children:e.children}),"function"==typeof e.setIcon?(0,o.jsx)("span",{className:re,children:e.setIcon(e)}):(0,o.jsx)("i",{className:ne,children:(0,o.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});ie.displayName="AccordionButton";const de=ie,ue="breadcrumbs_lNWI",pe="item_naGu",he="divider_SPAe",me="divider_child_MRZ8",_e="link_NlNF",ge="last_visible_jqr7",fe="last_inactive_UpbG",be={divider:"/",showLastDivider:!1,lastActive:!1,children:null,className:""},ve=function(e){void 0===e&&(e=be);const t={...e};return Object.keys(be).forEach((e=>delete t[e])),(0,o.jsx)("nav",{...t,className:a(["mtui-breadcrumbs",ue,e.className,{[ge]:e.showLastDivider,[fe]:!e.lastActive}]),children:l.Children.map(e.children,(t=>l.cloneElement(t,{divider:e?.divider,...t.props})))})};ve.defaultProps=be;const ye=ve,xe=e=>e.divider?(0,o.jsx)("div",{className:`${he} ${me}`,children:e.divider}):(0,o.jsx)("div",{className:he,children:"/"}),je=e=>(0,o.jsxs)("div",{className:pe,children:[(0,o.jsx)("span",{className:_e,children:e.children}),(0,o.jsx)(xe,{divider:e.divider})]}),Ne={parent:"parent_L6el",label:"label_FpVx",input:"input_PDCf",checkbox:"checkbox_rYtR",svg:"svg_KDGp",disabled:"disabled_K6xL",toggle:"toggle_lJTh",linear:"linear_plC9","toggle-active":"toggle-active_KFe8","toggle-active-out":"toggle-active-out_lqhq"};function Ce(e){let{name:t,value:n,onChange:r,disabled:c,checked:s,toggle:i,linear:d,...u}=e;const[p,h]=l.useState(!1),[m,_]=l.useState(n||s),g={type:"checkbox",className:Ne.input,checked:m,onChange:e=>{if(!c){let t=e.target.checked;_(t),"function"==typeof r&&r(e)}},name:t};return l.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,o.jsxs)("label",{className:a(["mtui-checkbox",Ne.parent,{[Ne.disabled]:c,[Ne.toggle]:i,[Ne.linear]:d}]),style:u.style,children:[(0,o.jsx)("input",{...g}),(0,o.jsx)("span",{className:Ne.checkbox,children:m&&!i?(0,o.jsx)("svg",{className:Ne.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:p?(0,o.jsx)("polyline",{children:(0,o.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,o.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),u.children?(0,o.jsx)("span",{className:Ne.label,children:u.children}):""]})}Ce.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const ke={parent:"parent_H32B",label:"label_qBnl",input:"input_tDZ_",checkbox:"checkbox_a6H3","radio-appear":"radio-appear_kR04",svg:"svg_vHwL",disabled:"disabled_BjFw"},we={name:"",onChange:()=>{},value:!1,disabled:!1},Ie=function(e){void 0===e&&(e=we);const{name:t,value:n,disabled:r,styleParent:l}=e;return(0,o.jsxs)("label",{className:a(["mtui-radioitem",ke.parent,{[ke.disabled]:r}]),style:{"--bg":l["--bg"],...e.childProps.style},children:[(0,o.jsx)("input",{type:"radio",checked:n===e.childProps.value,className:ke.input,onChange:r?()=>{}:t=>e.onChange(e.childProps.value),name:t}),(0,o.jsx)("span",{className:ke.checkbox}),e.children?(0,o.jsx)("span",{className:ke.label,children:e.children}):""]})},Pe={value:"",onChange:()=>{}},Oe=function(e){void 0===e&&(e=Pe);const{onChange:t,value:n}=e,r=n||e.defaultValue||"",[c,s]=l.useState(r),a={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,o.jsx)("div",{className:(0,P.A)({"mtui-radiogroup":!0,[ke.radio]:!0,[ke["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:a,children:l.Children.map(e.children,(e=>l.cloneElement(e,{childProps:e.props,value:t?r:c,onChange:t??s,styleParent:a})))})},Se={value:!1,disabled:!1},Ue=function(e){void 0===e&&(e=Se);const{value:t,disabled:n,defaultValue:r}=e;if(e.children)return(0,o.jsx)("option",{value:t,disabled:n,checked:t===r,children:e.children})},Ee="parent_Kx88",De="fitContent_xWrw",Ae="select_SBGJ",Be="icon_pj4m",Le={value:"",onChange:()=>{}},Re=function(e){void 0===e&&(e=Le);const{onChange:t,value:n,fitContent:r}=e,c=n||e.defaultValue||"",[s,i]=l.useState(c),d={...e.style};if(e.children)return(0,o.jsxs)("label",{className:a(["mtui-selectgroup",[Ee],{[e.className]:!!e.className,[De]:!!e.fitContent}]),style:d,children:[(0,o.jsx)("select",{className:Ae,onChange:e=>{t?t(e.target.value):i(e.target.value)},value:t?c:s,children:e.children}),(0,o.jsx)("i",{className:Be,children:(0,o.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},Ze="key_pOfb",ze="vintage_fOTp",We=e=>e.children?(0,o.jsx)("kbd",{className:a(Ze,{[ze]:e.vintage}),children:e.children}):"",Ve="parent_wPHh",qe="act_a9zz",Fe="isColor_Tsdu",Te="size_xs_BF6Z",Ge="size_s_Uhno",He="size_m_dgUR",$e="size_l_NkZj",Ke="size_xl_gktx",Me="text_L58D",Je=e=>{const{size:t,colorScheme:n,hidden:r,color:l}=e,c={"--hue":d.Z[n]>-1?d.Z[n]:e.hue?e.hue:220,...e.style};return(l?.indexOf("#")>-1||"inherit"===l)&&(c["--color"]=l),r?"":(0,o.jsxs)("div",{className:a(["mtui-spinner",Ve,{[Te]:"xs"===t||"XS"===t,[Ge]:"s"===t||"S"===t,[He]:"m"===t||"M"===t,[$e]:"l"===t||"L"===t,[Ke]:"xl"===t||"XL"===t,[Fe]:!!e.colorScheme,[e.className]:!!e.className}]),style:{...c,...e.styles},children:[(0,o.jsx)("span",{className:qe}),(0,o.jsx)("span",{className:Me,children:"Loading..."})]})},Qe="parent_WrW1",Xe="vis_WQKH",Ye="text_Pwtc",et=e=>{const{value:t,stripe:n,colorScheme:r,height:l,isIndeterminate:c,className:s}=e,a={"--hue":d.Z[r]>-1?d.Z[r]:e.hue?e.hue:220,...e.style};return l&&(a.height=-1!==l.indexOf("px")?l:l+"px"),(0,o.jsxs)("div",{className:(0,P.A)({"mtui-progressbar":!0,[Qe]:!0,[e.className]:!!e.className}),style:a,children:[(0,o.jsx)("span",{className:Xe,style:{width:(t||0)+"%"}}),(0,o.jsxs)("span",{className:Ye,children:["Progress: ",t||0,"%"]})]})},tt=e=>(0,o.jsx)(Ce,{...e,toggle:!0}),nt=e=>(0,o.jsx)(Ce,{...e,toggle:!0})},1435:(e,t,n)=>{n.d(t,{$:()=>g,a:()=>f});var r=n(6540),l=n(403),o=n(7617);const c="mtui_button_SThF",s="content_MBDQ",a="default_R7cL",i="mtui_button__icon_NLR_",d="icon_NnqJ",u="color_black_AS5q",p="glossy__AjO";var h=n(4848);const m={hue:0,isIcon:!1,glossy:!1,leftIcon:null,rightIcon:null,as:(0,h.jsx)("button",{})},_=e=>{const{leftIcon:t,rightIcon:n}=e,_={"--hue":o.Z[e.color]?o.Z[e.color]:e.hue?e.hue:100,...e.style},g={...e};Object.keys(m).forEach((e=>delete g[e]));const f=(0,l.A)({"mtui-button":!0,[c]:!0,[a]:!e.hue&&!e?.styles?.color,[p]:e.glossy,[u]:"black"===e.colorScheme,[i]:e.isIcon,[e.className]:!!e.className}),b=(0,h.jsxs)(r.Fragment,{children:[t?(0,h.jsx)("span",{className:d,children:t}):"",(0,h.jsx)("span",{className:s,children:e?.children}),n?(0,h.jsx)("span",{className:d,children:n}):""]});return r.cloneElement(e.as,{...g,children:b,style:_,className:f})};_.defaultProps=m;const g=_,f=e=>(0,h.jsx)(g,{...e,isIcon:!0})},403:(e,t,n)=>{function r(e){return Object.keys(e).filter((t=>e[t])).join(" ")}n.d(t,{A:()=>r})},2302:(e,t,n)=>{n.d(t,{A:()=>i});const r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let l;const o=new Uint8Array(16);function c(){if(!l&&(l="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(o)}const s=[];for(let d=0;d<256;++d)s.push((d+256).toString(16).slice(1));function a(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}const i=function(e,t,n){if(r.randomUUID&&!t&&!e)return r.randomUUID();const l=(e=e||{}).random||(e.rng||c)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=l[e];return t}return a(l)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(6540);const l={},o=r.createContext(l);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(o.Provider,{value:t},e.children)}},1414:(e,t,n)=>{n.d(t,{k5:()=>h});var r=n(6540),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(l),c=["attr","size","title"];function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return e&&e.map(((e,t)=>r.createElement(e.tag,d({key:t},e.attr),p(e.child))))}function h(e){return t=>r.createElement(m,a({attr:d({},e.attr)},t),p(e.child))}function m(e){var t=t=>{var n,{attr:l,size:o,title:i}=e,u=s(e,c),p=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:n,style:d(d({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(e=>t(e))):t(l)}}}]);