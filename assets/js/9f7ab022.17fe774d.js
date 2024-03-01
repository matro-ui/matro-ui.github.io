"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[1840],{72:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>x,toc:()=>j});var t=s(4848),a=s(8453),o=s(1470),n=s(9365),l=s(2136),d=s(2293),r=s(4440),c=s(2383),p=(s(2926),s(8882));const u={sidebar_position:1,title:"<Radio/>"},h="Radio Input",x={id:"compontents/inputs/radio",title:"<Radio/>",description:"The `` component allows to select or deselect options in a form. It provides a customizable checkbox input with various options.",source:"@site/docs/compontents/inputs/radio.mdx",sourceDirName:"compontents/inputs",slug:"/compontents/inputs/radio",permalink:"/docs/compontents/inputs/radio",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"<Radio/>"},sidebar:"tutorialSidebar",previous:{title:"<LabelText/>",permalink:"/docs/compontents/inputs/label-text"},next:{title:"<Select/>",permalink:"/docs/compontents/inputs/select"}},m={},j=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Disabled Radio",id:"disabled-radio",level:2},{value:"Radio sizes",id:"radio-sizes",level:2},{value:"Radio with custom color",id:"radio-with-custom-color",level:2}];function v(e){const i={code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"radio-input",children:"Radio Input"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"<Radio/>"})," component allows to select or deselect options in a form. It provides a customizable checkbox input with various options."]}),"\n",(0,t.jsx)(d.A,{git:"https://github.com/matro-ui/matro-ui/tree/main/dist/inputs/Radio",npmjs:"https://www.npmjs.com/package/matro-ui",name:"radio"}),"\n",(0,t.jsx)("div",{className:l.A.tabs,children:(0,t.jsxs)(o.A,{className:l.A.parent,children:[(0,t.jsxs)(n.A,{value:"usage",label:"Usage",attributes:{className:[l.A.item,l.A.usage]},children:[(0,t.jsx)(i.h2,{id:"import",children:"Import"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:'import { Radio, RadioGroup } from "matro-ui";\n'})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"RadioGroup"}),": The wrapper that provides context and logic to the components."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Radio"}),": The ",(0,t.jsx)(c.A,{children:"radio"})," input itself."]}),"\n"]}),(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <RadioGroup defaultValue="2">\n   <Radio value="1">Value 1</Radio>\n   <Radio value="2">Value 2</Radio>\n </Radio>\n'})}),(0,t.jsx)(i.h2,{id:"disabled-radio",children:"Disabled Radio"}),(0,t.jsxs)(i.p,{children:["Pass the ",(0,t.jsx)("code",{children:"disabled"})," prop to disable any radio option."]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <RadioGroup defaultValue="2">\n   <Radio value="1" disabled>Value 1</Radio>\n   <Radio value="2" disabled>Value 2</Radio>\n   <Radio value="3">Value 3</Radio>\n </Radio>\n'})}),(0,t.jsx)(i.h2,{id:"radio-sizes",children:"Radio sizes"}),(0,t.jsxs)(i.p,{children:["Pass the ",(0,t.jsx)("code",{children:"font-size"})," to change the size of the Radio. Values can be either ",(0,t.jsx)("code",{children:"px"}),", ",(0,t.jsx)("code",{children:"em"}),", ",(0,t.jsx)("code",{children:"rem"})," or ",(0,t.jsx)("code",{children:"%"}),"."]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <RadioGroup defaultValue="2" style={{fontSize: "21px"}}>\n   <Radio value="1" style={{fontSize: "0.7em"}}>Value 1</Radio>\n   <Radio value="2">Value 2</Radio>\n   <Radio value="3">Value 3</Radio>\n </Radio>\n'})}),(0,t.jsx)(i.h2,{id:"radio-with-custom-color",children:"Radio with custom color"}),(0,t.jsxs)(i.p,{children:["You can override the color scheme of the ",(0,t.jsx)(c.A,{children:"radio"})," to any color by providing the css variable ",(0,t.jsx)("code",{children:"--bg"})," to ",(0,t.jsx)(c.A,{children:"RadioGroup"})," or ",(0,t.jsx)(c.A,{children:"Radio"}),"."]}),(0,p.O)([1]),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <RadioGroup defaultValue="2" style={{"--bg": "purple"}}>\n   <Radio value="1">Value 1</Radio>\n   <Radio value="2" style={{"--bg": "#48b048"}}>Value 2</Radio>\n   <Radio value="3" style={{"--bg": "#4848d7"}}>Value 3</Radio>\n </RadioGroup>\n'})})]}),(0,t.jsxs)(n.A,{value:"props",label:"Props",attributes:{className:[l.A.item,l.A.props]},children:[(0,t.jsx)(r.A,{title:(0,t.jsxs)(i.div,{children:["Props of ",(0,t.jsx)(i.code,{children:"<RadioGroup/>"}),":"]}),payload:[{title:"defaultValue",type:"boolean",desc:"The defauilt value of the group."},{title:"onChange",type:"function",desc:"Callback function triggered when the input value changes."},{title:"name",type:"string",desc:"The name attribute of the input."},{title:"style",type:"object",desc:"Additional styling prop."},{title:"children",type:"React.FC | React.FC[] | string | number",desc:"Any possible React Children. At least one <Group/> is required."}]}),(0,t.jsx)(r.A,{title:(0,t.jsxs)(i.div,{children:["Props of ",(0,t.jsx)(i.code,{children:"<Radio/>"}),":"]}),payload:[{title:"value",type:"string | number",desc:"Radio input value."},{title:"style",type:"object",desc:"Additional styling prop."},{title:"disabled",type:"boolean",desc:"Disables the input."},{title:"children",type:"string",desc:"Label of the radio input."}]})]})]})})]})}function b(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},4440:(e,i,s)=>{s.d(i,{A:()=>n});s(6540);const t={title:"title_XigD",content:"content_htMh",act_color:"act_color_knPL"};var a=s(2302),o=s(4848);const n=e=>{let{payload:i,title:s}=e;if(i&&i.length)return(0,o.jsxs)(o.Fragment,{children:[s?(0,o.jsx)("h2",{children:s}):"",i.map((e=>(0,o.jsx)(l,{...e},(0,a.A)())))]})},l=e=>{let{title:i,type:s,desc:a,def:n}=e;return(0,o.jsxs)("div",{className:t.item,children:[(0,o.jsx)("span",{className:t.title,children:i}),(0,o.jsxs)("div",{className:t.content,children:[a?(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"Description"}),(0,o.jsx)("span",{children:a})]}):"",s?(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"Type"}),(0,o.jsx)("span",{className:t.act_color,children:s})]}):"",n?(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"Default"}),(0,o.jsx)("span",{className:t.act_color,children:n})]}):""]})]})}},2293:(e,i,s)=>{s.d(i,{A:()=>l});s(6540);const t="sources_cKg5";var a=s(2926),o=s(8027),n=s(4848);const l=e=>{let{git:i,npmjs:s,name:l}=e;return(0,n.jsxs)("div",{className:t,children:[(0,n.jsx)(a.Button,{leftIcon:(0,n.jsx)(o.hL4,{}),children:"Source"}),(0,n.jsxs)(a.Button,{leftIcon:(0,n.jsx)(o.JyX,{color:"#e24141",style:{fontSize:"2em"}}),as:(0,n.jsx)("a",{href:s,target:"_blank"}),children:["@matro-ui/",l]})]})}},8882:(e,i,s)=>{s.d(i,{O:()=>o});s(6540);var t=s(2302),a=s(4848);function o(e){void 0===e&&(e=[]);const i="a"+(0,t.A)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:e?.map((e=>`.${i} + div .token-line:nth-child(${e}) { \n          background-color: var(--docusaurus-highlighted-code-line-bg);\n          display: inline-block;\n          width: 100%;\n        }\n        `)).join(" ")}),(0,a.jsx)("div",{className:i})]})}},2136:(e,i,s)=>{s.d(i,{A:()=>t});const t={item:"item_mgdD",preview_box:"preview_box_nOEL",parent:"parent_TUDu",tabs_ic:"tabs_ic_Gtqw",npm:"npm_BRjH",yarn:"yarn_xpLp",pnpm:"pnpm_jLsy",bun:"bun_ukbL",tabs:"tabs_WUFR",usage:"usage_QP_2",props:"props_cScu",extra:"extra_hHdy"}}}]);