"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[3105],{6492:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>j,contentTitle:()=>h,default:()=>g,frontMatter:()=>p,metadata:()=>x,toc:()=>m});var i=s(4848),r=s(8453),t=s(1470),l=s(9365),c=s(2136),o=s(5530),a=s(9079),d=s(6874);s(8358);const p={sidebar_position:1,title:"<Spinner/>"},h="Spinner",x={id:"compontents/progress/spinner",title:"<Spinner/>",description:"The `` component visually indicate that a process is underway and awaiting a change or outcome.",source:"@site/docs/compontents/progress/spinner.mdx",sourceDirName:"compontents/progress",slug:"/compontents/progress/spinner",permalink:"/docs/compontents/progress/spinner",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"<Spinner/>"},sidebar:"tutorialSidebar",previous:{title:"<Progress/>",permalink:"/docs/compontents/progress/"},next:{title:"Other"}},j={},m=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Spinner Size",id:"spinner-size",level:2},{value:"Color Scheme",id:"color-scheme",level:2},{value:"Conditional Rendering",id:"conditional-rendering",level:2}];function u(e){const n={code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"spinner",children:"Spinner"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"<Spinner/>"})," component visually indicate that a process is underway and awaiting a change or outcome."]}),"\n",(0,i.jsx)(o.A,{git:"https://github.com/matro-ui/matro-ui/tree/main/dist/progress/Spinner",npmjs:"https://www.npmjs.com/package/matro-ui",name:"Spinner"}),"\n",(0,i.jsx)("div",{className:c.A.tabs,children:(0,i.jsxs)(t.A,{className:c.A.parent,children:[(0,i.jsxs)(l.A,{value:"usage",label:"Usage",attributes:{className:[c.A.item,c.A.usage]},children:[(0,i.jsx)(n.h2,{id:"import",children:"Import"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import { Spinner } from "matro-ui";\n'})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Spinner"}),": Spinner component by itself."]}),"\n"]}),(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:" <Spinner />\n"})}),(0,i.jsx)(n.h2,{id:"spinner-size",children:"Spinner Size"}),(0,i.jsxs)(n.p,{children:["To change the size of ",(0,i.jsx)(n.code,{children:"<Spinner/>"}),", simply set the ",(0,i.jsx)(n.code,{children:"size"})," prop (val.",(0,i.jsx)(d.A,{children:'"XS"'})," | ",(0,i.jsx)(d.A,{children:'"S"'})," | ",(0,i.jsx)(d.A,{children:'"M"'})," | ",(0,i.jsx)(d.A,{children:'"L"'})," | ",(0,i.jsx)(d.A,{children:'"XL"'}),"):"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Spinner size="XL" />\n'})}),(0,i.jsx)(n.h2,{id:"color-scheme",children:"Color Scheme"}),(0,i.jsxs)(n.p,{children:["To change the color of ",(0,i.jsx)(n.code,{children:"<Spinner/>"}),", set the ",(0,i.jsx)(n.code,{children:"colorScheme"})," prop (val. ",(0,i.jsx)(d.A,{children:'"red"'})," | ",(0,i.jsx)(d.A,{children:'"orange"'})," | ",(0,i.jsx)(d.A,{children:'"yellow"'})," | ",(0,i.jsx)(d.A,{children:'"green"'})," | ",(0,i.jsx)(d.A,{children:'"cyangreen"'})," | ",(0,i.jsx)(d.A,{children:'"cyanblue"'})," | ",(0,i.jsx)(d.A,{children:'"blue"'})," | ",(0,i.jsx)(d.A,{children:'"purple"'})," | ",(0,i.jsx)(d.A,{children:'"pink"'}),"):"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<Stack>\n <Spinner size="M" colorScheme="pink" />\n <Spinner size="M" colorScheme="orange" />\n <Spinner size="M" colorScheme="cyanblue" />\n</Stack>\n'})}),(0,i.jsx)(n.h2,{id:"conditional-rendering",children:"Conditional Rendering"}),(0,i.jsxs)(n.p,{children:["If you need to hide the ",(0,i.jsx)(n.code,{children:"<Spinner/>"}),", you can set the ",(0,i.jsx)(n.code,{children:"hidden"})," prop to ",(0,i.jsx)(d.A,{children:"true"}),", or use a ternary JSX statement:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'function demo() {\n  const [visible, setVisible] = React.useState(true);\n  return (\n    <Stack column>\n\n\n    <LabelText>Example of hiding with prop\u3164<I>"hidden"</I></LabelText>\n    <Spinner hidden={!visible} />\n\n    <LabelText>Example of conditional rendering</LabelText>\n    {visible ? <Spinner /> : ""}\n\n      \n      <Button \n        onClick={() => setVisible(!visible)} \n        rightIcon="\u2699\ufe0f">\n        toggle visibility\n      </Button>\n    </Stack>\n  );\n}\n'})})]}),(0,i.jsx)(l.A,{value:"props",label:"Props",attributes:{className:[c.A.item,c.A.props]},children:(0,i.jsx)(a.A,{title:(0,i.jsxs)(n.div,{children:["Props of ",(0,i.jsx)(n.code,{children:"<Spinner/>"}),":"]}),payload:[{title:"size",type:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{children:'"XS"'})," | ",(0,i.jsx)(d.A,{children:'"S"'})," | ",(0,i.jsx)(d.A,{children:'"M"'})," | ",(0,i.jsx)(d.A,{children:'"L"'})," | ",(0,i.jsx)(d.A,{children:'"XL"'})]}),desc:(0,i.jsxs)(i.Fragment,{children:["size of the ",(0,i.jsx)(n.code,{children:"<Spinner/>"}),"."]}),def:'"S"'},{title:"colorScheme",type:'"red" | "orange" | "yellow" | "green" | "cyangreen" | "cyanblue" | "blue" | "purple" | "pink"',desc:"Shows last divider if set to true."},{title:"hidden",type:"boolean",desc:"Hidden if set to true."}]})})]})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9079:(e,n,s)=>{s.d(n,{A:()=>l});s(6540);const i={title:"title_l2PD",content:"content_ZxaW",act_color:"act_color_Ngku"};var r=s(2302),t=s(4848);const l=e=>{let{payload:n,title:s}=e;if(n&&n.length)return(0,t.jsxs)(t.Fragment,{children:[s?(0,t.jsx)("h2",{children:s}):"",n.map((e=>(0,t.jsx)(c,{...e},(0,r.A)())))]})},c=e=>{let{title:n,type:s,desc:r,def:l}=e;return(0,t.jsxs)("div",{className:i.item,children:[(0,t.jsx)("span",{className:i.title,children:n}),(0,t.jsxs)("div",{className:i.content,children:[r?(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Description"}),(0,t.jsx)("span",{children:r})]}):"",s?(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Type"}),(0,t.jsx)("span",{className:i.act_color,children:s})]}):"",l?(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Default"}),(0,t.jsx)("span",{className:i.act_color,children:l})]}):""]})]})}},5530:(e,n,s)=>{s.d(n,{A:()=>c});s(6540);const i="sources_EWfY";var r=s(8358),t=s(8027),l=s(4848);const c=e=>{let{git:n,npmjs:s,name:c}=e;return(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)(r.Button,{leftIcon:(0,l.jsx)(t.hL4,{}),children:"Source"}),(0,l.jsxs)(r.Button,{leftIcon:(0,l.jsx)(t.JyX,{color:"#e24141",style:{fontSize:"2em"}}),as:(0,l.jsx)("a",{href:s,target:"_blank"}),children:["@matro-ui/",c]})]})}},2136:(e,n,s)=>{s.d(n,{A:()=>i});const i={item:"item_mgdD",preview_box:"preview_box_nOEL",parent:"parent_TUDu",tabs_ic:"tabs_ic_Gtqw",npm:"npm_BRjH",yarn:"yarn_xpLp",pnpm:"pnpm_jLsy",bun:"bun_ukbL",tabs:"tabs_WUFR",usage:"usage_QP_2",props:"props_cScu",extra:"extra_hHdy"}}}]);