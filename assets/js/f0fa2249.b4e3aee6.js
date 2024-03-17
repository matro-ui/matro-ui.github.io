"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[3607],{4656:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>v,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>x,toc:()=>h});var s=n(4848),t=n(8453),l=n(1470),i=n(9365),c=n(2136),r=n(5530),d=n(9079),o=n(6874),m=n(8882);const u={sidebar_position:1,title:"<Stack/>"},p="Stack",x={id:"compontents/layout/stack",title:"<Stack/>",description:"The `` is a layout component that allows to group components together and create a space between them.",source:"@site/docs/compontents/layout/stack.mdx",sourceDirName:"compontents/layout",slug:"/compontents/layout/stack",permalink:"/docs/compontents/layout/stack",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"<Stack/>"},sidebar:"tutorialSidebar",previous:{title:"Layout"},next:{title:"Media"}},v={},h=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Direction",id:"direction",level:2},{value:"Flex",id:"flex",level:2},{value:"Wrap",id:"wrap",level:2},{value:"Justify &amp; Align",id:"justify--align",level:2},{value:"Justify by main axis:",id:"justify-by-main-axis",level:3},{value:"Align by cross axis, using <I>align</I> prop (val: <code>start</code>, <code>end</code>, <code>center</code>, <code>stretch</code>):",id:"align-by-cross-axis-using-align-prop-val-start-end-center-stretch",level:3},{value:"Advanced examples",id:"advanced-examples",level:2},{value:"Props",id:"props",level:2}];function j(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"stack",children:"Stack"}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"<Stack/>"})," is a layout component that allows to group components together and create a space between them."]}),"\n",(0,s.jsx)(r.A,{git:"https://github.com/matro-ui/matro-ui/tree/main/src/layout/Stack",npmjs:"https://www.npmjs.com/package/matro-ui",name:"stack"}),"\n",(0,s.jsx)("div",{className:c.A.tabs,children:(0,s.jsxs)(l.A,{className:c.A.parent,children:[(0,s.jsxs)(i.A,{value:"usage",label:"Usage",attributes:{className:[c.A.item,c.A.usage]},children:[(0,s.jsx)(a.h2,{id:"import",children:"Import"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",children:'import { Stack } from "matro-ui";\n'})}),(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"Stack"}),": The ",(0,s.jsx)(o.A,{children:"stack"})," layout component itself."]}),"\n"]}),(0,s.jsx)(a.h2,{id:"usage",children:"Usage"}),(0,s.jsxs)(a.p,{children:["Here's simple exaple of ",(0,s.jsx)(a.code,{children:"<Stack/>"})," component with ",(0,s.jsx)(o.A,{children:"gap"})," 10px:"]}),(0,m.O)([1]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack gap="10">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n'})}),(0,s.jsx)(a.h2,{id:"direction",children:"Direction"}),(0,s.jsxs)(a.p,{children:["If you want to use column dimension, simply add ",(0,s.jsx)(o.A,{children:"column"})," prop:"]}),(0,m.O)([1]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack column>\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n'})}),(0,s.jsx)(a.h2,{id:"flex",children:"Flex"}),(0,s.jsxs)(a.p,{children:["By default, ",(0,s.jsx)(a.code,{children:"<Stack/>"})," items has width set to ",(0,s.jsx)(o.A,{children:"fit-content"}),". If you want to change it, add ",(0,s.jsx)(o.A,{children:"flex"})," prop:"]}),(0,m.O)([1]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack flex>\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n'})}),(0,s.jsx)("br",{}),(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["Alternatively, you can use combined ",(0,s.jsx)(o.A,{children:"flex"})," property (will be passed to children):"]})}),(0,m.O)([1]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack flex="0 1 150px">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n'})}),(0,s.jsx)(a.h2,{id:"wrap",children:"Wrap"}),(0,s.jsxs)(a.p,{children:["By default, ",(0,s.jsx)(a.code,{children:"<Stack/>"})," items is not wrap when overfow of parent is happen. To change this behaviour, simply add ",(0,s.jsx)(o.A,{children:"wrap"})," prop:"]}),(0,m.O)([1]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack flex="1 1 300px" gap="2" wrap>\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n   <div className="example">4</div>\n   <div className="example">5</div>\n </Stack>\n'})}),(0,s.jsx)(a.h2,{id:"justify--align",children:"Justify & Align"}),(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"<Stack/>"})," has two axis - main and cross (",(0,s.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_main_axis",target:"_blank",children:"MDN: learn more"}),").\nTo align items by the ",(0,s.jsx)("i",{children:"main axis"})," ",(0,s.jsx)("br",{})," use ",(0,s.jsx)(o.A,{children:"justify"})," prop (val: ",(0,s.jsx)(a.code,{children:"start"}),", ",(0,s.jsx)(a.code,{children:"end"}),", ",(0,s.jsx)(a.code,{children:"center"}),", ",(0,s.jsx)(a.code,{children:"spaceBetween"}),", ",(0,s.jsx)(a.code,{children:"spaceAround"}),"):"]}),(0,s.jsx)(a.h3,{id:"justify-by-main-axis",children:"Justify by main axis:"}),(0,m.O)([3,9,15,21,27]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small">\n <LabelText>justify="start" (default)</LabelText>\n <Stack>\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n\n<LabelText>justify="end"</LabelText>\n <Stack justify="end">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n\n <LabelText>justify="center"</LabelText>\n <Stack justify="center">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n\n <LabelText>justify="spaceBetween"</LabelText>\n <Stack justify="spaceBetween">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n\n <LabelText>justify="spaceAround"</LabelText>\n <Stack justify="spaceAround">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n</div>\n'})}),(0,s.jsx)("br",{}),(0,s.jsxs)(a.h3,{id:"align-by-cross-axis-using-align-prop-val-start-end-center-stretch",children:["Align by cross axis, using ",(0,s.jsx)(o.A,{children:"align"})," prop (val: ",(0,s.jsx)(a.code,{children:"start"}),", ",(0,s.jsx)(a.code,{children:"end"}),", ",(0,s.jsx)(a.code,{children:"center"}),", ",(0,s.jsx)(a.code,{children:"stretch"}),"):"]}),(0,m.O)([3,10,17,24]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n\n <LabelText>align="start" (default)</LabelText>\n <Stack>\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n\n <LabelText>align="stretch" </LabelText>\n <Stack align="stretch">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n\n<LabelText>align="end"</LabelText>\n <Stack align="end">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n\n <LabelText>align="center"</LabelText>\n <Stack align="center">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n\n</div>\n'})}),(0,s.jsx)(a.h2,{id:"advanced-examples",children:"Advanced examples"}),(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsxs)(a.p,{children:["Here's more advanced examples of how ",(0,s.jsx)(a.code,{children:"<Stack/>"})," can be used:"]})}),(0,m.O)([4]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n <LabelText>row with stretch, flex 1</LabelText>\n\n <Stack flex align="stretch">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n</div>\n'})}),(0,m.O)([4]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>flex 0, align end, justify end</LabelText>\n\n  <Stack align="end" justify="end">\n    <div className="example">1</div>\n    <div className="example">2</div>\n    <div className="example">3</div>\n  </Stack>\n</div>\n'})}),(0,m.O)([5]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>\n    align center, justify center, flexGrow 0 flexShrink 0, base 200px</LabelText>\n\n  <Stack flex="0 0 100px" align="center" justify="center">\n    <div className="example">1</div>\n    <div className="example">2</div>\n    <div className="example">3</div>\n  </Stack>\n</div>\n'})}),(0,m.O)([5]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>\n    align stretch, justify center, flexGrow 0 flexShrink 0, base 200px</LabelText>\n\n  <Stack flex="0 0 100px" align="stretch" justify="center">\n    <div className="example">1</div>\n    <div className="example">2</div>\n    <div className="example">3</div>\n  </Stack>\n</div>\n'})}),(0,m.O)([6,7,8,9]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>\n   column align center, justify center, flexGrow 0 flexShrink 0, \n   minWidth 100px base 50px (in column base sets minHeight)</LabelText>\n\n  <Stack column flex="0 0 50px" align="center" justify="center">\n    <div className="example" style={{minWidth: 100}}>1</div>\n    <div className="example" style={{minWidth: 100}}>2</div>\n    <div className="example" style={{minWidth: 100}}>3</div>\n  </Stack>\n</div>\n'})}),(0,m.O)([7,8,9,10,11,12]),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>\n   column align stretch, justify center, flexGrow 0 flexShrink 0, \n   base 60px padding 20px gap 10px</LabelText>\n\n  <Stack \n    column \n    flex="0 0 60px" \n    align="stretch" \n    justify="center" \n    padding="20" \n    gap="10"\n  >\n    <div className="example">1</div>\n    <div className="example">2</div>\n    <div className="example">3</div>\n  </Stack>\n</div>\n'})})]}),(0,s.jsxs)(i.A,{value:"props",label:"Props",attributes:{className:[c.A.item,c.A.props]},children:[(0,s.jsx)(a.h2,{id:"props",children:"Props"}),(0,s.jsx)(d.A,{payload:[{title:"children",type:"any",desc:"The children/s of the Stack."},{title:"wrap",type:"boolean",desc:"Indicates whether the Stack has to wrap the overflow items / or shrink the existing ones."},{title:"column",type:"boolean",desc:"Set Stack direction to column if true.",def:"bool:false"},{title:"justify",type:'"start" | "end" | "center" | "spaceBetween" | "spaceAround"',desc:"Set Stack items justify option.",def:'"start"'},{title:"align",type:'"start" | "end" | "center" | "stretch"',desc:"Set Stack items align option.",def:'"start"'},{title:"padding",type:"string | number",desc:"Set Stack padding (inner spacing)"},{title:"margin",type:"string | number",desc:"Set Stack margin (outside spacing)"},{title:"gap",type:"string | number",desc:"Stack items gap (spacing between items)",def:"5px"}]})]})]})})]})}function g(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},8882:(e,a,n)=>{n.d(a,{O:()=>l});n(6540);var s=n(2302),t=n(4848);function l(e){void 0===e&&(e=[]);const a="a"+(0,s.A)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:e?.map((e=>`.${a} + div .token-line:nth-child(${e}) { \n          background-color: var(--docusaurus-highlighted-code-line-bg);\n          display: inline-block;\n          width: 100%;\n        }\n        `)).join(" ")}),(0,t.jsx)("div",{className:a})]})}},9365:(e,a,n)=>{n.d(a,{A:()=>i});n(6540);var s=n(4164);const t={tabItem:"tabItem_Ymn6"};var l=n(4848);function i(e){let{children:a,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:n,children:a})}},1470:(e,a,n)=>{n.d(a,{A:()=>N});var s=n(6540),t=n(4164),l=n(3104),i=n(6347),c=n(205),r=n(7485),d=n(1682),o=n(9466);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return m(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:t}}=e;return{value:a,label:n,attributes:s,default:t}}))}(n);return function(e){const a=(0,d.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function x(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.W6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,r.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})}),[l,t])]}function v(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,l=u(e),[i,r]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:l}))),[d,m]=x({queryString:n,groupId:t}),[v,h]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,l]=(0,o.Dv)(n);return[t,(0,s.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),j=(()=>{const e=d??v;return p({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{j&&r(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),m(e),h(e)}),[m,h,l]),tabValues:l}}var h=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function f(e){let{className:a,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const r=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),o=e=>{const a=e.currentTarget,n=r.indexOf(a),t=c[n].value;t!==s&&(d(a),i(t))},m=e=>{let a=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=r.indexOf(e.currentTarget)+1;a=r[n]??r[0];break}case"ArrowLeft":{const n=r.indexOf(e.currentTarget)-1;a=r[n]??r[r.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:c.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>r.push(e),onKeyDown:m,onClick:o,...l,className:(0,t.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function b(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function y(e){const a=v(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,g.jsx)(f,{...e,...a}),(0,g.jsx)(b,{...e,...a})]})}function N(e){const a=(0,h.A)();return(0,g.jsx)(y,{...e,children:m(e.children)},String(a))}},9079:(e,a,n)=>{n.d(a,{A:()=>i});n(6540);const s={title:"title_l2PD",content:"content_ZxaW",act_color:"act_color_Ngku"};var t=n(2302),l=n(4848);const i=e=>{let{payload:a,title:n}=e;if(a&&a.length)return(0,l.jsxs)(l.Fragment,{children:[n?(0,l.jsx)("h2",{children:n}):"",a.map((e=>(0,l.jsx)(c,{...e},(0,t.A)())))]})},c=e=>{let{title:a,type:n,desc:t,def:i}=e;return(0,l.jsxs)("div",{className:s.item,children:[(0,l.jsx)("span",{className:s.title,children:a}),(0,l.jsxs)("div",{className:s.content,children:[t?(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"Description"}),(0,l.jsx)("span",{children:t})]}):"",n?(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"Type"}),(0,l.jsx)("span",{className:s.act_color,children:n})]}):"",i?(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"Default"}),(0,l.jsx)("span",{className:s.act_color,children:i})]}):""]})]})}},5530:(e,a,n)=>{n.d(a,{A:()=>c});n(6540);const s="sources_EWfY";var t=n(7431),l=n(8027),i=n(4848);const c=e=>{let{git:a,npmjs:n,name:c}=e;return(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)(t.Button,{leftIcon:(0,i.jsx)(l.hL4,{}),as:(0,i.jsx)("a",{href:a,target:"_blank"}),children:"Source"}),(0,i.jsxs)(t.Button,{leftIcon:(0,i.jsx)(l.JyX,{color:"#e24141",style:{fontSize:"2em"}}),as:(0,i.jsx)("a",{href:n,target:"_blank"}),children:["@matro-ui/",c]})]})}},2136:(e,a,n)=>{n.d(a,{A:()=>s});const s={item:"item_mgdD",preview_box:"preview_box_nOEL",parent:"parent_TUDu",tabs_ic:"tabs_ic_Gtqw",npm:"npm_BRjH",yarn:"yarn_xpLp",pnpm:"pnpm_jLsy",bun:"bun_ukbL",tabs:"tabs_WUFR",usage:"usage_QP_2",props:"props_cScu",extra:"extra_hHdy"}}}]);