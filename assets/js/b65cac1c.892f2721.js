(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[9551],{5835:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>A,default:()=>Z,frontMatter:()=>I,metadata:()=>S,toc:()=>B});var l=n(4848),s=n(8453),o=n(6540);const i="searchinput_jE7d",c="category_items_oI5b",r="item_svBn",a="imgartv_oMe5",d="title_DXOr",u="category_title_zM2i",p="category_group_ppjk";var h=n(1351),m=n(3730);const _=()=>{const[e,t]=(0,o.useState)(""),n=e=>t(e);return(0,l.jsxs)(m.InputText,{className:i,value:e,onChange:n,hue:"100",placeholder:"Search...",name:"input-name-prop",children:[(0,l.jsx)(m.InputTextField,{}),(0,l.jsx)(m.InputChildButton,{children:(0,l.jsx)(h.zfp,{}),onClick:()=>{alert("Query: "+e),n("")}})]})};var g=n(5556),x=n.n(g);class v extends o.PureComponent{static propTypes={disabled:x().bool};static defaultProps={disabled:!0};state={disabled:this.props.disabled};_hideImage=()=>this.setState({disabled:!0});_displayImage=()=>this.setState({disabled:!1});render=()=>{const{disabled:e}=this.state;return!e&&(0,l.jsx)("img",{onError:this._hideImage,onLoad:this._displayImage,...this.props})}}const b=v;var j=n(8774),f=n(6347);const y={img:"",title:"def-title"},N=function(e){void 0===e&&(e=y);const{img:t,title:n,url:s}={...y,...e},o=(0,f.W6)();return(0,l.jsxs)("article",{className:r,onClick:()=>{o.push(s||"")},children:[(0,l.jsx)("div",{className:a,children:(0,l.jsx)(b,{src:t,alt:n})}),(0,l.jsx)(j.A,{href:s,children:(0,l.jsx)("p",{className:d,children:(0,l.jsx)("span",{children:n})})})]})};var k=n(6579),C=n.n(k);const w=()=>{const e=C();return console.log(Object.keys(e)),(0,l.jsxs)("div",{children:[(0,l.jsx)(_,{}),Object.keys(e).map((e=>{const t=C()[e];return t.length?(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h2",{className:u,children:e.replace("-"," ")}),(0,l.jsx)("div",{className:c,children:t?.map((e=>(0,l.jsx)(N,{...e})))})]}):""}))]})},I={id:"view",title:"Components",sidebar_label:"Components"},A="Components",S={id:"compontents/view",title:"Components",description:"Matro UI provides you with the tools you need to create fast, beautiful and functional user interfaces.",source:"@site/docs/compontents/view.md",sourceDirName:"compontents",slug:"/compontents/view",permalink:"/docs/compontents/view",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"view",title:"Components",sidebar_label:"Components"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"Inputs"}},P={},B=[];function E(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"components",children:"Components"}),"\n",(0,l.jsxs)(t.p,{children:["Matro UI provides you with the tools you need to create fast, beautiful and functional user interfaces.",(0,l.jsx)("br",{}),"\nHere is an overview of the component categories:"]}),"\n",(0,l.jsx)(w,{})]})}function Z(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(E,{...e})}):E(e)}},6579:e=>{e.exports={inputs:[{id:1,title:"Checkbox",url:"/docs/compontents/inputs/checkbox",img:null},{id:2,title:"Input Number",url:"/docs/compontents/inputs/input-number",img:null},{id:3,title:"Input Text",url:"/docs/compontents/inputs/input-text",img:null},{id:5,title:"Radio",url:"/docs/compontents/inputs/radio",img:null},{id:6,title:"Select",url:"/docs/compontents/inputs/select",img:null},{id:7,title:"Slider",url:"/docs/compontents/inputs/slider",img:null},{id:8,title:"Textarea",url:"/docs/compontents/inputs/textarea",img:null}],layout:[{id:1,title:"Stack",url:"/docs/compontents/layout/stack",img:null}],media:[{id:1,title:"Hide",url:"/docs/compontents/media/hide",img:null},{id:1,title:"Minmax",url:"/docs/compontents/media/minmax",img:null},{id:1,title:"Show",url:"/docs/compontents/media/show",img:null}],navigation:[{id:1,title:"Breadcrumbs",url:"/docs/compontents/navigation/breadcrumbs",img:null},{id:1,title:"Link",url:"/docs/compontents/navigation/link",img:null}],progress:[{id:1,title:"Progress",url:"/docs/compontents/progress/",img:null},{id:1,title:"Spinner",url:"/docs/compontents/progress/spinner",img:null}],other:[{id:1,title:"Switch",url:"/docs/compontents/other/switch",img:null},{id:1,title:"Button",url:"/docs/compontents/other/button",img:null},{id:1,title:"Accordion",url:"/docs/compontents/other/accordion",img:null},{id:1,title:"Key",url:"/docs/compontents/other/kley",img:null}]}},7617:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var l=n(6540),s=n(403),o=n(7617);const i="mtui_button_xmEf",c="content_JZQn",r="default_QvER",a="mtui_button__icon_kEuk",d="glossy_1pgh";var u=n(4848);const p={hue:0,isIcon:!1,glossy:!1,leftIcon:l.Component,rightIcon:l.Component,as:(0,u.jsx)("button",{})},h=e=>{const t={"--hue":o.Z[e.color]?o.Z[e.color]:e.hue?e.hue:100,...e.style},n={...e};Object.keys(p).forEach((e=>delete n[e]));const h=(0,s.A)({"mtui-button":!0,[i]:!0,[r]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[a]:e.isIcon,[e.className]:!!e.className}),m=(0,u.jsxs)(l.Fragment,{children:[e.leftIcon??"",(0,u.jsx)("span",{className:c,children:e?.children}),e.rightIcon??""]});return l.cloneElement(e.as,{...n,children:m,style:t,className:h})};h.defaultProps=p;const m=h},7874:(e,t,n)=>{"use strict";n.d(t,{A:()=>l.A});var l=n(9427)},3730:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Accordion:()=>ee,AccordionButton:()=>le,AccordionItem:()=>te,Breadcrumbs:()=>pe,BreadcrumbsItem:()=>me,Button:()=>l.A,ButtonIcon:()=>r,Checkbox:()=>ge,Code:()=>P,InputChild:()=>N,InputChildButton:()=>k,InputChildIcon:()=>C,InputChildPrefix:()=>f,InputChildSelect:()=>y,InputDecrementStepper:()=>g,InputIncrementStepper:()=>x,InputNumber:()=>h,InputNumberField:()=>m,InputNumberStepper:()=>_,InputText:()=>b,InputTextField:()=>j,Kley:()=>Be,LabelText:()=>I,LinkButton:()=>i,Progress:()=>We,Radio:()=>be,RadioGroup:()=>fe,Select:()=>Ne,SelectGroup:()=>Se,Spinner:()=>Re,Stack:()=>H,Toggle:()=>He});var l=n(7874),s=n(6540),o=n(4848);const i=e=>(0,o.jsx)(l.A,{...e});var c=n(9427);const r=e=>(0,o.jsx)(c.A,{...e,isIcon:!0});var a=n(6268);const d={mtui_inputtype:"mtui_inputtype_ql8R",disabled:"disabled_bOb0","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var u=n(7617);const p=e=>{const{name:t,disabled:n,value:l,onChange:i,placeholder:c}=e,r={"--hue":u.Z[e.color]?u.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,o.jsx)("div",{className:(0,a.A)("mtui-inputnum",d.mtui_inputtype,{[d["mtui_color_"+e.color]]:e.color,[d.disabled]:n,[e.className]:!!e.className}),style:r,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,value:l,onChange:i,placeholder:c,name:t})))})};p.defaultProps={name:"",disabled:!1,placeholder:"0"};const h=p,m=e=>{let{onChange:t,value:n,placeholder:l,name:s,disabled:i}=e;const c={placeholder:l,name:s,disabled:i};return"function"==typeof t&&(c.onChange=t),(n||""===n)&&(c.value=n),(0,o.jsx)("input",{type:"number",...c})},_=e=>{const t=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,o.jsx)("div",{className:d.stepper,children:s.Children.map(e.children,(e=>s.cloneElement(e,{onDecrement:n,onIncrement:t})))})},g=e=>{let{onDecrement:t}=e;return(0,o.jsx)("button",{onClick:t,children:(0,o.jsx)("span",{children:"\u25bc"})})},x=e=>(0,o.jsx)("button",{onClick:e.onIncrement,children:(0,o.jsx)("span",{children:"\u25b2"})}),v=e=>{const{onChange:t,value:n,placeholder:l,name:i,hue:c,disabled:r}=e,p={"--hue":u.Z[e.color]?u.Z[e.color]:c||160,...e.style};return(0,o.jsx)("div",{className:(0,a.A)("mtui-inputtext",d.mtui_inputtype,{[d.disabled]:r,[d["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:p,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,onChange:t,value:n,placeholder:l,disabled:r,name:i})))})};v.defaultProps={name:"",disabled:!1,placeholder:""};const b=v,j=e=>{let{value:t,placeholder:n,name:l,onChange:s,disabled:i}=e;const c={type:"text",placeholder:n,name:l,disabled:i};return"function"==typeof s&&(c.onChange=s),(t||""===t)&&(c.value=t),(0,o.jsx)("input",{...c})},f=e=>{let{childProps:t}=e;return t.value?(0,o.jsx)("div",{className:d.inputPrefix,children:t.value}):""},y=e=>e.children?(0,o.jsx)("select",{className:d.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",N=e=>{const t={...e};return delete t.children,e.children?(0,o.jsx)("div",{...t,className:d.inputChild,children:s.Children.map(e.children,(e=>{const n={...t,...e.props};return e.props.onClick&&(n.onClick=t=>e.props.onClick(t,n)),s.cloneElement(e,n)}))}):""},k=e=>{const t={...e};return delete t.children,delete t.childProps,e.children?(0,o.jsx)("button",{...t,className:d.inputChildButton,children:e.children}):""},C=e=>{const t={...e};return delete t.children,e.children?(0,o.jsx)("div",{...t,className:d.inputChildIcon,children:e.children}):""},w="label_khEV",I=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:w,children:t})},A={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"};var S=n(403);const P=e=>{const t={...e};return t.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(t.color)||(t.color="gray"),e.children?(0,o.jsx)("span",{className:(0,S.A)({"mtui-codeblock":!0,[A.code]:!0,[A["code__color_"+t.color]]:t.color,[e.className]:!!e.className}),children:e.children}):""},B="stack_wl5C",E="column_AVcH",Z="stretch_Koba",L="flex__9bI",O="js_end_cSG9",z="js_center_boE0",T="js_start_k4mk",M="js_spaceBetween_ny_D",D="js_spaceAround_eiM1",R="al_start_euFe",K="al_end_O7Cd",V="al_center_YCq4",F="al_stretch_QfIY";var W=n(464);const H=e=>{const t="mtstack__"+(0,W.A)(),{flex:n,justify:l,align:s,margin:i,padding:c}=e,r={gap:isNaN(e.gap)?e.gap:e.gap+"px",flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style};"string"==typeof i&&(r.margin=isNaN(i)?i:i+"px"),"string"==typeof c&&(r.padding=isNaN(c)?c:c+"px"),console.log(n);const d={...e};return delete d.children,delete d.wrap,delete d.column,delete d.justify,delete d.flex,delete d.margin,delete d.padding,e.children?(0,o.jsxs)("div",{...d,className:(0,a.A)(["mtui-stack",t,B,{[E]:e.column,[L]:"boolean"==typeof n&&n,[O]:"end"===l,[z]:"center"===l,[T]:"start"===l,[M]:"spaceBetween"===l,[D]:"spaceAround"===l,[R]:"start"===s,[K]:"end"===s,[V]:"center"===s,[F]:"stretch"===s,[Z]:e.stretch,[d.className]:d.className}]),style:r,children:[e.children,(0,o.jsx)("style",{children:`.${t} > * {\n          flex: ${"string"==typeof n?n:"0 1 auto"}\n      }`})]}):""},Q="accordion_JXnx",Y="button_KX5s",q="contentitem_Ypfv",G="visible_Rwwh",X="hidden_GCVw",J="icon_Tmaf",$="children_fxDu",U="button_opened_GUD0",ee=e=>{const t={...e.style},n={...e,style:t};return(0,o.jsx)("section",{...n,className:(0,S.A)({"mtui-accordion":!0,[Q]:Q,...n.className?.map((e=>({[e]:e})))}),children:n.children})},te=e=>{const[t,n]=(0,s.useState)(e.isOpened||!1),l=()=>{n(!t)};return(0,o.jsx)("article",{children:s.Children.map(e.children,((e,n)=>{const o={...e.props};return"AccordionButton"===e.type.displayName?(o.onClick=l,s.cloneElement(e,{...o,isOpened:t})):(o["data-visible"]=t,o.className=`mtui-accordion__item ${q} ${t?G:X}`,s.cloneElement(e,o))}))})},ne=e=>(0,o.jsxs)("button",{onClick:e.onClick,className:(0,S.A)({[Y]:!0,[U]:e.isOpened}),children:[(0,o.jsx)("span",{className:$,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,o.jsx)("i",{className:J,children:(0,o.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});ne.displayName="AccordionButton";const le=ne,se="breadcrumbs_EqqV",oe="item_U93n",ie="divider_e5y_",ce="divider_child_jasW",re="link_Mfuz",ae="last_visible_EQmH",de="last_inactive_e_0M",ue={divider:"/",showLastDivider:!0,lastActive:!1,children:null},pe=function(e){void 0===e&&(e=ue);const t={...e.style},n={...e};return delete n.style,delete n.divider,delete n.showLastDivider,delete n.className,delete n.lastActive,(0,o.jsx)("nav",{...n,className:(0,S.A)({"mtui-breadcrumbs":!0,[se]:!0,[ae]:e.showLastDivider,[de]:!e.lastActive,[e.className]:!!e.className}),style:t,children:s.Children.map(e.children,(t=>s.cloneElement(t,{divider:e.divider,...t.props})))})},he=e=>e.divider?(0,o.jsx)("div",{className:`${ie} ${ce}`,children:e.divider}):(0,o.jsx)("div",{className:ie,children:"/"}),me=e=>(0,o.jsxs)("div",{className:oe,children:[(0,o.jsx)("span",{className:re,children:e.children}),(0,o.jsx)(he,{divider:e.divider})]}),_e={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};function ge(e){let{name:t,value:n,onChange:l,disabled:i,checked:c,toggle:r,linear:d,...u}=e;const[p,h]=s.useState(!1),[m,_]=s.useState(n||c),g={type:"checkbox",className:_e.input,checked:m,onChange:e=>{if(!i){let t=e.target.checked;_(t),"function"==typeof l&&l(e)}},name:t};return s.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,o.jsxs)("label",{className:(0,a.A)(["mtui-checkbox",_e.parent,{[_e.disabled]:i,[_e.toggle]:r,[_e.linear]:d}]),style:u.style,children:[(0,o.jsx)("input",{...g}),(0,o.jsx)("span",{className:_e.checkbox,children:m&&!r?(0,o.jsx)("svg",{className:_e.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:p?(0,o.jsx)("polyline",{children:(0,o.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,o.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),u.children?(0,o.jsx)("span",{className:_e.label,children:u.children}):""]})}ge.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const xe={parent:"parent_ZnxF",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},ve={name:"",onChange:()=>{},value:!1,disabled:!1},be=function(e){void 0===e&&(e=ve);const{name:t,value:n,disabled:l,styleParent:s}=e;return console.log(s),(0,o.jsxs)("label",{className:(0,a.A)(["mtui-radioitem",xe.parent,{[xe.disabled]:l}]),style:{"--bg":s["--bg"],...e.childProps.style},children:[(0,o.jsx)("input",{type:"radio",checked:n===e.childProps.value,className:xe.input,onChange:l?()=>{}:t=>e.onChange(e.childProps.value),name:t}),(0,o.jsx)("span",{className:xe.checkbox}),e.children?(0,o.jsx)("span",{className:xe.label,children:e.children}):""]})},je={value:"",onChange:()=>{}},fe=function(e){void 0===e&&(e=je);const{onChange:t,value:n}=e,l=n||e.defaultValue||"",[i,c]=s.useState(l),r={"--hue":u.Z[e.color]?u.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,o.jsx)("div",{className:(0,S.A)({"mtui-radiogroup":!0,[xe.radio]:!0,[xe["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:r,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,value:t?l:i,onChange:t??c,styleParent:r})))})},ye={value:!1,disabled:!1},Ne=function(e){void 0===e&&(e=ye);const{value:t,disabled:n,defaultValue:l}=e;if(e.children)return(0,o.jsx)("option",{value:t,disabled:n,checked:t===l,children:e.children})},ke="parent_AxwE",Ce="fitContent_kJ4E",we="select_WxMX",Ie="icon_l9F_",Ae={value:"",onChange:()=>{}},Se=function(e){void 0===e&&(e=Ae);const{onChange:t,value:n,fitContent:l}=e,i=n||e.defaultValue||"",[c,r]=s.useState(i),d={...e.style};if(e.children)return(0,o.jsxs)("label",{className:(0,a.A)(["mtui-selectgroup",[ke],{[e.className]:!!e.className,[Ce]:!!e.fitContent}]),style:d,children:[(0,o.jsx)("select",{className:we,onChange:e=>{t?t(e.target.value):r(e.target.value)},value:t?i:c,children:e.children}),(0,o.jsx)("i",{className:Ie,children:(0,o.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},Pe="key_uKP6",Be=e=>e.children?(0,o.jsx)("div",{className:Pe,children:e.children}):"",Ee="parent_VdR2",Ze="act_TEYv",Le="isColor_OwMK",Oe="size_s_KznB",ze="size_m_HLKY",Te="size_l_NawM",Me="size_xl_rRp9",De="text_l7Qz",Re=e=>{const{size:t,colorScheme:n,hidden:l}=e,s={"--hue":u.Z[n]>-1?u.Z[n]:e.hue?e.hue:220,...e.style};return l?"":(0,o.jsxs)("div",{className:(0,a.A)(["mtui-spinner",Ee,{[ze]:"m"===t||"M"===t,[Oe]:"s"===t||"S"===t,[Te]:"l"===t||"L"===t,[Me]:"xl"===t||"XL"===t,[Le]:!!e.colorScheme,[e.className]:!!e.className}]),style:{...s,...e.styles},children:[(0,o.jsx)("span",{className:Ze}),(0,o.jsx)("span",{className:De,children:"Loading..."})]})},Ke="parent_qZrO",Ve="vis_kwFj",Fe="text_Z_cA",We=e=>{const{value:t,stripe:n,colorScheme:l,height:s,isIndeterminate:i,className:c}=e,r={"--hue":u.Z[l]>-1?u.Z[l]:e.hue?e.hue:220,...e.style};return s&&(r.height=-1!==s.indexOf("px")?s:s+"px"),(0,o.jsxs)("div",{className:(0,S.A)({"mtui-progressbar":!0,[Ke]:!0,[e.className]:!!e.className}),style:r,children:[(0,o.jsx)("span",{className:Ve,style:{width:(t||0)+"%"}}),(0,o.jsxs)("span",{className:Fe,children:["Progress: ",t||0,"%"]})]})},He=e=>(0,o.jsx)(ge,{...e,toggle:!0})},403:(e,t,n)=>{"use strict";function l(e){return Object.keys(e).filter((t=>e[t])).join(" ")}n.d(t,{A:()=>l})}}]);