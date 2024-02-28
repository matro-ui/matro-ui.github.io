"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[6033],{1307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>h,toc:()=>x});var l=t(4848),s=t(8453),i=t(1470),c=t(9365),a=t(2136),r=t(2293),o=t(4440),d=t(2383);t(1929);const u={sidebar_position:1,title:"<InputNumber/>"},p="InputNumber",h={id:"compontents/inputs/input-number",title:"<InputNumber/>",description:"The `` component allows to select or deselect options in a form. It provides a customizable checkbox input with various options.",source:"@site/docs/compontents/inputs/input-number.mdx",sourceDirName:"compontents/inputs",slug:"/compontents/inputs/input-number",permalink:"/docs/compontents/inputs/input-number",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"<InputNumber/>"},sidebar:"tutorialSidebar",previous:{title:"<Checkbox/>",permalink:"/docs/compontents/inputs/checkbox"},next:{title:"<InputText/>",permalink:"/docs/compontents/inputs/input-text"}},m={},x=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Disabled Input",id:"disabled-input",level:2},{value:"Combination of blocks",id:"combination-of-blocks",level:2}];function _(e){const n={code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"inputnumber",children:"InputNumber"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"<InputNumber/>"})," component allows to select or deselect options in a form. It provides a customizable checkbox input with various options."]}),"\n",(0,l.jsx)(r.A,{git:"https://github.com/matro-ui/matro-ui/tree/main/dist/inputs/Checkbox",npmjs:"https://www.npmjs.com/package/matro-ui",name:"inputnuber"}),"\n",(0,l.jsx)("div",{className:a.A.tabs,children:(0,l.jsxs)(i.A,{className:a.A.parent,children:[(0,l.jsxs)(c.A,{value:"usage",label:"Usage",attributes:{className:[a.A.item,a.A.usage]},children:[(0,l.jsx)(n.h2,{id:"import",children:"Import"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'import { InputNumber, InputNumberField } from "matro-ui";\n'})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"InputNumber"}),": The wrapper that provides context and logic to the components."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"InputNumberField"}),": The ",(0,l.jsx)(d.A,{children:"input"})," field itself."]}),"\n"]}),(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:" <InputNumber>\n   <InputNumberField/>\n </InputNumber>\n"})}),(0,l.jsx)(n.h2,{id:"disabled-input",children:"Disabled Input"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:" <InputNumber disabled>\n   <InputNumberField/>\n </InputNumber>\n"})}),(0,l.jsx)(n.h2,{id:"combination-of-blocks",children:"Combination of blocks"}),(0,l.jsxs)(n.p,{children:["Combine ",(0,l.jsx)(d.A,{children:(0,l.jsx)(n.code,{children:"<InputNumber/>"})}),", ",(0,l.jsx)(d.A,{children:(0,l.jsx)(n.code,{children:"<InputText/>"})}),", ",(0,l.jsx)(d.A,{children:(0,l.jsx)(n.code,{children:"<InputChildSelect/>"})}),", ",(0,l.jsx)(d.A,{children:(0,l.jsx)(n.code,{children:"<InputChildPrefix/>"})})," as you prefer to create any kind of input:"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<Stack column>\n   <LabelText>Example of currency-num</LabelText>\n   <InputNumber placeholder="0.00">\n     <InputChildPrefix value="$"/>\n     <InputNumberField/>\n     <InputChildSelect name="select-name-prop" defaultValue="pln">\n       <option value="eur">EUR</option>\n       <option value="usd">USD</option>\n       <option value="pln">PLN</option>\n     </InputChildSelect>\n   </InputNumber>\n</Stack>\n'})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:"live ",live:!0,children:'function Search () {\n const [value, setValue] = React.useState("")\n const handleChange = (e) => {\n   setValue(e.target.value);\n } \n return(\n <Stack column>\n   <LabelText>Example of search</LabelText>\n   <InputText placeholder="Search..." value={value} onChange={handleChange}>\n     <InputTextField/>\n     <InputChildButton\n       children={<IoSearch />} \n       onClick={() => {alert("Query: " + value); setValue("");}}/>\n   </InputText>\n </Stack>\n );\n}\n'})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'  <label>\n      <LabelText>Example of link-text</LabelText>\n      <InputText\n        color="cyangreen"\n        placeholder="example.com"\n        name="input-name-prop"\n      >\n        <InputChildPrefix value="https://"/>\n        <InputTextField/>\n        <InputChildSelect/>\n      </InputText>\n  </label> \n'})})]}),(0,l.jsxs)(c.A,{value:"props",label:"Props",attributes:{className:[a.A.item,a.A.props]},children:[(0,l.jsx)(o.A,{title:(0,l.jsxs)(n.div,{children:["Props of ",(0,l.jsx)(n.code,{children:"<InputNumber/>"})," or ",(0,l.jsx)(n.code,{children:"<InputText/>"}),":"]}),payload:[{title:"value",type:"boolean",desc:"The value of the input."},{title:"onChange",type:"function",desc:"Callback function triggered when the input value changes."},{title:"name",type:"string",desc:"The name attribute of the input."},{title:"placeholder",type:"string",desc:"Placeholder attribute of the input."},{title:"disabled",type:"boolean",desc:"Disables of the input."}]}),(0,l.jsx)(o.A,{title:(0,l.jsxs)(n.div,{children:["Props of ",(0,l.jsx)(n.code,{children:"<InputChildPrefix/>"}),":"]}),payload:[{title:"value",type:"React.FC  |  string",desc:"Prefix value."}]}),(0,l.jsx)(o.A,{title:(0,l.jsxs)(n.div,{children:["Props of ",(0,l.jsx)(n.code,{children:"<InputChildSelect/>"}),":"]}),payload:[{title:"name",type:"string",desc:"The name attribute of the input."},{title:"defaultValue",type:"boolean",desc:"The default value of the select input."},{title:"children",type:"React.FC  |  React.FC[]",desc:'<option> jsx tags with provided "value" attr'}]}),(0,l.jsx)(o.A,{title:(0,l.jsxs)(n.div,{children:["Props of ",(0,l.jsx)(n.code,{children:"<LabelText/>"}),":"]}),payload:[{title:"children",type:"string",desc:"The string value of the label."}]})]})]})})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(_,{...e})}):_(e)}},2383:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);const l="marker_ejtM";var s=t(4848);const i=e=>{let{children:n}=e;return(0,s.jsx)("span",{className:l,children:n})}},4440:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);const l={title:"title_XigD",content:"content_htMh",act_color:"act_color_knPL"};var s=t(2302),i=t(4848);const c=e=>{let{payload:n,title:t}=e;if(n&&n.length)return(0,i.jsxs)(i.Fragment,{children:[t?(0,i.jsx)("h2",{children:t}):"",n.map((e=>(0,i.jsx)(a,{...e},(0,s.A)())))]})},a=e=>{let{title:n,type:t,desc:s,def:c}=e;return(0,i.jsxs)("div",{className:l.item,children:[(0,i.jsx)("span",{className:l.title,children:n}),(0,i.jsxs)("div",{className:l.content,children:[s?(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Description"}),(0,i.jsx)("span",{children:s})]}):"",t?(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Type"}),(0,i.jsx)("span",{className:l.act_color,children:t})]}):"",c?(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Default"}),(0,i.jsx)("span",{children:c})]}):""]})]})}},2293:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);const l="sources_cKg5";var s=t(7874),i=t(8027),c=t(4848);const a=e=>{let{git:n,npmjs:t,name:a}=e;return(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)(s.A,{leftIcon:(0,c.jsx)(i.hL4,{}),as:(0,c.jsx)("a",{href:n,target:"_blank"}),children:"Source"}),(0,c.jsxs)(s.A,{leftIcon:(0,c.jsx)(i.JyX,{color:"#e24141",style:{fontSize:"2em"}}),as:(0,c.jsx)("a",{href:t,target:"_blank"}),children:["@matro-ui/",a]})]})}},7617:(e,n,t)=>{t.d(n,{Z:()=>l});const l={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,n,t)=>{t.d(n,{A:()=>h});var l=t(6540),s=t(403),i=t(7617);const c="mtui_button_xmEf",a="content_JZQn",r="default_QvER",o="mtui_button__icon_kEuk",d="glossy_1pgh";var u=t(4848);const p={hue:0,isIcon:!1,glossy:!1,leftIcon:l.Component,rightIcon:l.Component,as:(0,u.jsx)("button",{})},h=function(e){void 0===e&&(e=p);const n={"--hue":i.Z[e.color]?i.Z[e.color]:e.hue?e.hue:100,...e.style},t={...e};Object.keys(p).forEach((e=>delete t[e]));const h=(0,s.A)({"mtui-button":!0,[c]:!0,[r]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[o]:e.isIcon,[e.className]:!!e.className}),m=(0,u.jsxs)(l.Fragment,{children:[e.leftIcon??"",(0,u.jsx)("span",{className:a,children:e?.children}),e.rightIcon??""]});return l.cloneElement(e.as,{...t,children:m,style:n,className:h})}},7874:(e,n,t)=>{t.d(n,{A:()=>l.A});var l=t(9427)},1929:(e,n,t)=>{t.r(n),t.d(n,{Accordion:()=>U,AccordionButton:()=>X,AccordionItem:()=>W,Breadcrumbs:()=>ee,BreadcrumbsItem:()=>te,Button:()=>l.A,ButtonIcon:()=>a,Checkbox:()=>se,Code:()=>T,InputChild:()=>f,InputChildButton:()=>k,InputChildIcon:()=>y,InputChildPrefix:()=>g,InputChildSelect:()=>N,InputDecrementStepper:()=>x,InputIncrementStepper:()=>_,InputNumber:()=>p,InputNumberField:()=>h,InputNumberStepper:()=>m,InputText:()=>v,InputTextField:()=>j,Kley:()=>ve,LabelText:()=>C,Progress:()=>ye,Radio:()=>ae,RadioGroup:()=>oe,Select:()=>ue,SelectGroup:()=>_e,Spinner:()=>ge,Stack:()=>L});var l=t(7874),s=t(6540),i=t(9427),c=t(4848);const a=e=>(0,c.jsx)(i.A,{...e,isIcon:!0});var r=t(6268);const o={mtui_inputtype:"mtui_inputtype_ql8R",disabled:"disabled_bOb0","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var d=t(7617);const u=e=>{const{name:n,disabled:t,value:l,onChange:i,placeholder:a}=e,u={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,c.jsx)("div",{className:(0,r.A)("mtui-inputnum",o.mtui_inputtype,{[o["mtui_color_"+e.color]]:e.color,[o.disabled]:t,[e.className]:!!e.className}),style:u,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,value:l,onChange:i,placeholder:a,name:n})))})};u.defaultProps={name:"",disabled:!1,placeholder:"0"};const p=u,h=e=>{let{onChange:n,value:t,placeholder:l,name:s}=e;const i={placeholder:l,name:s};return"function"==typeof n&&(i.onChange=n),(t||""===t)&&(i.value=t),(0,c.jsx)("input",{type:"number",...i})},m=e=>{const n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},t=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,c.jsx)("div",{className:o.stepper,children:s.Children.map(e.children,(e=>s.cloneElement(e,{onDecrement:t,onIncrement:n})))})},x=e=>{let{onDecrement:n}=e;return(0,c.jsx)("button",{onClick:n,children:(0,c.jsx)("span",{children:"\u25bc"})})},_=e=>(0,c.jsx)("button",{onClick:e.onIncrement,children:(0,c.jsx)("span",{children:"\u25b2"})}),b=e=>{const{onChange:n,value:t,placeholder:l,name:i,hue:a,disabled:u}=e,p={"--hue":d.Z[e.color]?d.Z[e.color]:a||160,...e.style};return(0,c.jsx)("div",{className:(0,r.A)("mtui-inputtext",o.mtui_inputtype,{[o.disabled]:u,[o["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:p,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,onChange:n,value:t,placeholder:l,name:i})))})};b.defaultProps={name:"",disabled:!1,placeholder:""};const v=b,j=e=>{let{value:n,placeholder:t,name:l,onChange:s}=e;const i={type:"text",placeholder:t,name:l};return"function"==typeof s&&(i.onChange=s),(n||""===n)&&(i.value=n),(0,c.jsx)("input",{...i})},g=e=>{let{childProps:n}=e;return n.value?(0,c.jsx)("div",{className:o.inputPrefix,children:n.value}):""},N=e=>e.children?(0,c.jsx)("select",{className:o.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",f=e=>{const n={...e};return delete n.children,e.children?(0,c.jsx)("div",{...n,className:o.inputChild,children:s.Children.map(e.children,(e=>{const t={...n,...e.props};return e.props.onClick&&(t.onClick=n=>e.props.onClick(n,t)),s.cloneElement(e,t)}))}):""},k=e=>{const n={...e};return delete n.children,delete n.childProps,e.children?(0,c.jsx)("button",{...n,className:o.inputChildButton,children:e.children}):""},y=e=>{const n={...e};return delete n.children,e.children?(0,c.jsx)("div",{...n,className:o.inputChildIcon,children:e.children}):""},I="label_khEV",C=e=>{let{children:n}=e;return(0,c.jsx)("div",{className:I,children:n})},A={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"};var w=t(403);const T=e=>{const n={...e};return n.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(n.color)||(n.color="gray"),e.children?(0,c.jsx)("span",{className:(0,w.A)({"mtui-codeblock":!0,[A.code]:!0,[A["code__color_"+n.color]]:n.color,[e.className]:!!e.className}),children:e.children}):""},P="stack_VFNJ",S="column_UECP",E="stretch_wfbw",L=e=>{const n={gap:e.gap,flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style},t={...e};return delete t.children,delete t.wrap,delete t.column,e.children?(0,c.jsx)("div",{...t,className:(0,w.A)({stack:!0,[P]:!0,[S]:e.column,[E]:e.stretch,[t.className]:t.className}),style:n,children:e.children}):""},D="accordion_JXnx",F="button_KX5s",B="contentitem_Ypfv",R="visible_Rwwh",Z="hidden_GCVw",V="icon_Tmaf",O="children_fxDu",z="button_opened_GUD0",U=e=>{const n={...e.style},t={...e,style:n};return(0,c.jsx)("section",{...t,className:(0,w.A)({"mtui-accordion":!0,[D]:D,...t.className?.map((e=>({[e]:e})))}),children:t.children})},W=e=>{const[n,t]=(0,s.useState)(e.isOpened||!1),l=()=>{t(!n)};return(0,c.jsx)("article",{children:s.Children.map(e.children,((e,t)=>{const i={...e.props};return"AccordionButton"===e.type.displayName?(i.onClick=l,s.cloneElement(e,{...i,isOpened:n})):(i["data-visible"]=n,i.className=`mtui-accordion__item ${B} ${n?R:Z}`,s.cloneElement(e,i))}))})},Q=e=>(0,c.jsxs)("button",{onClick:e.onClick,className:(0,w.A)({[F]:!0,[z]:e.isOpened}),children:[(0,c.jsx)("span",{className:O,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,c.jsx)("i",{className:V,children:(0,c.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});Q.displayName="AccordionButton";const X=Q,q="breadcrumbs_EqqV",K="item_U93n",M="divider_e5y_",G="divider_child_jasW",H="link_Mfuz",J="last_visible_EQmH",Y="last_inactive_e_0M",$={divider:"/",showLastDivider:!0,lastActive:!1,children:null},ee=function(e){void 0===e&&(e=$);const n={...e.style},t={...e};return delete t.style,delete t.divider,delete t.showLastDivider,delete t.className,delete t.lastActive,(0,c.jsx)("nav",{...t,className:(0,w.A)({"mtui-breadcrumbs":!0,[q]:!0,[J]:e.showLastDivider,[Y]:!e.lastActive,[e.className]:!!e.className}),style:n,children:s.Children.map(e.children,(n=>s.cloneElement(n,{divider:e.divider,...n.props})))})},ne=e=>e.divider?(0,c.jsx)("div",{className:`${M} ${G}`,children:e.divider}):(0,c.jsx)("div",{className:M,children:"/"}),te=e=>(0,c.jsxs)("div",{className:K,children:[(0,c.jsx)("span",{className:H,children:e.children}),(0,c.jsx)(ne,{divider:e.divider})]}),le={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};function se(e){let{name:n,value:t,onChange:l,disabled:i,checked:a,toggle:o,linear:d,...u}=e;const[p,h]=s.useState(!1),[m,x]=s.useState(t||a),_={type:"checkbox",className:le.input,checked:m,onChange:e=>{if(!i){let n=e.target.checked;x(n),"function"==typeof l&&l(e)}},name:n};return s.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,c.jsxs)("label",{className:(0,r.A)(["mtui-checkbox",le.parent,{[le.disabled]:i,[le.toggle]:o,[le.linear]:d}]),style:u.style,children:[(0,c.jsx)("input",{..._}),(0,c.jsx)("span",{className:le.checkbox,children:m&&!o?(0,c.jsx)("svg",{className:le.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:p?(0,c.jsx)("polyline",{children:(0,c.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,c.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),u.children?(0,c.jsx)("span",{className:le.label,children:u.children}):""]})}se.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const ie={parent:"parent_ZnxF",radio:"radio_pI4X",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},ce={name:"",onChange:()=>{},value:!1,disabled:!1},ae=function(e){void 0===e&&(e=ce);const{name:n,value:t,disabled:l}=e;return(0,c.jsxs)("label",{className:(0,w.A)({"mtui-radioitem":!0,[ie.parent]:!0,[ie.disabled]:l}),children:[(0,c.jsx)("input",{type:"radio",checked:t===e.childProps.value,className:ie.input,onChange:l?()=>{}:n=>e.onChange(e.childProps.value),name:n}),(0,c.jsx)("span",{className:ie.checkbox}),e.children?(0,c.jsx)("span",{className:ie.label,children:e.children}):""]})},re={value:"",onChange:()=>{}},oe=function(e){void 0===e&&(e=re);const{onChange:n,value:t}=e,l=t||e.defaultValue||"",[i,a]=s.useState(l),r={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,c.jsx)("div",{className:(0,w.A)({"mtui-radiogroup":!0,[ie.radio]:!0,[ie["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:r,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,value:n?l:i,onChange:n??a})))})},de={value:!1,disabled:!1},ue=function(e){void 0===e&&(e=de);const{value:n,disabled:t,defaultValue:l}=e;if(e.children)return(0,c.jsx)("option",{value:n,disabled:t,checked:n===l,children:e.children})},pe="parent_AxwE",he="select_WxMX",me="icon_l9F_",xe={value:"",onChange:()=>{}},_e=function(e){void 0===e&&(e=xe);const{onChange:n,value:t}=e,l=t||e.defaultValue||"",[i,a]=s.useState(l),r={...e.style};if(e.children)return(0,c.jsxs)("label",{className:(0,w.A)({"mtui-selectgroup":!0,[pe]:!0,[e.className]:!!e.className}),style:r,children:[(0,c.jsx)("select",{className:he,onChange:e=>{n?n(e.target.value):a(e.target.value)},value:n?l:i,children:e.children}),(0,c.jsx)("i",{className:me,children:(0,c.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},be="key_uKP6",ve=e=>e.children?(0,c.jsx)("div",{className:be,children:e.children}):"",je={act:"act_TEYv",kf_load:"kf_load_XZCU",text:"text_l7Qz"},ge=e=>(0,c.jsxs)("div",{className:(0,w.A)({"mtui-spinner":!0,[je.parent]:!0,[e.className]:!!e.className}),style:e.styles,children:[(0,c.jsx)("span",{className:je.act}),(0,c.jsx)("span",{className:je.text,children:"Loading..."})]}),Ne="parent_qZrO",fe="vis_kwFj",ke="text_Z_cA",ye=e=>{const{value:n,stripe:t,colorScheme:l,height:s,isIndeterminate:i,className:a}=e,r={"--hue":d.Z[l]?d.Z[l]:e.hue?e.hue:160,height:-1!==s.indexOf("px")?s:s+"px",...e.style};return(0,c.jsxs)("div",{className:(0,w.A)({"mtui-progressbar":!0,[Ne]:!0,[e.className]:!!e.className}),style:r,children:[(0,c.jsx)("span",{className:fe,style:{width:(n||0)+"%"}}),(0,c.jsxs)("span",{className:ke,children:["Progress: ",n||0,"%"]})]})}},403:(e,n,t)=>{function l(e){return Object.keys(e).filter((n=>e[n])).join(" ")}t.d(n,{A:()=>l})},2136:(e,n,t)=>{t.d(n,{A:()=>l});const l={item:"item_mgdD",preview_box:"preview_box_nOEL",parent:"parent_TUDu",tabs_ic:"tabs_ic_Gtqw",npm:"npm_BRjH",yarn:"yarn_xpLp",pnpm:"pnpm_jLsy",bun:"bun_ukbL",tabs:"tabs_WUFR",usage:"usage_QP_2",props:"props_cScu",extra:"extra_hHdy"}}}]);