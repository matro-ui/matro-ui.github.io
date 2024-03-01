"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[4813,8401],{7713:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var l=t(1312),o=t(9022),s=t(4848);function c(e){const{metadata:n}=e,{previousPage:t,nextPage:c}=n;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,l.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[t&&(0,s.jsx)(o.A,{permalink:t,title:(0,s.jsx)(l.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),c&&(0,s.jsx)(o.A,{permalink:c,title:(0,s.jsx)(l.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var l=t(7131),o=t(8258),s=t(4848);function c(e){let{items:n,component:t=o.A}=e;return(0,s.jsx)(s.Fragment,{children:n.map((e=>{let{content:n}=e;return(0,s.jsx)(l.i,{content:n,children:(0,s.jsx)(t,{children:(0,s.jsx)(n,{})})},n.metadata.permalink)}))})}},3069:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});t(6540);var l=t(4164),o=t(1312),s=t(5846),c=t(1003),a=t(7559),r=t(8774),i=t(6535),d=t(7713),u=t(1463),p=t(3892),h=t(996),m=t(1107),g=t(4848);function x(e){const n=function(){const{selectMessage:e}=(0,s.W)();return n=>e(n,(0,o.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:n}))}();return(0,o.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function _(e){let{tag:n}=e;const t=x(n);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.be,{title:t}),(0,g.jsx)(u.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:n,items:t,sidebar:l,listMetadata:s}=e;const c=x(n);return(0,g.jsxs)(i.A,{sidebar:l,children:[n.unlisted&&(0,g.jsx)(h.A,{}),(0,g.jsxs)("header",{className:"margin-bottom--xl",children:[(0,g.jsx)(m.A,{as:"h1",children:c}),(0,g.jsx)(r.A,{href:n.allTagsPath,children:(0,g.jsx)(o.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,g.jsx)(p.A,{items:t}),(0,g.jsx)(d.A,{metadata:s})]})}function j(e){return(0,g.jsxs)(c.e3,{className:(0,l.A)(a.G.wrapper.blogPages,a.G.page.blogTagPostListPage),children:[(0,g.jsx)(_,{...e}),(0,g.jsx)(b,{...e})]})}},996:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var l=t(4164),o=t(1312),s=t(5260),c=t(4848);function a(){return(0,c.jsx)(o.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,c.jsx)(o.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function i(){return(0,c.jsx)(s.A,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function p(e){let{className:n}=e;return(0,c.jsx)(u.A,{type:"caution",title:(0,c.jsx)(a,{}),className:(0,l.A)(n,d.G.common.unlistedBanner),children:(0,c.jsx)(r,{})})}function h(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{}),(0,c.jsx)(p,{...e})]})}},356:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var l=t(4164),o=t(6058),s=t(7559),c=t(4291);const a={codeBlockContainer:"codeBlockContainer_APcc"};var r=t(4848);function i(e){let{as:n,...t}=e;const i=(0,o.A)(),d=(0,c.M$)(i);return(0,r.jsx)(n,{...t,style:d,className:(0,l.A)(t.className,a.codeBlockContainer,s.G.common.codeBlock)})}},5822:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var l=t(4164),o=t(356),s=t(2626),c=t(4848);function a(e){let{children:n,className:t}=e;return(0,c.jsx)(o.A,{as:"pre",tabIndex:0,className:(0,l.A)(s.A.codeBlockStandalone,"thin-scrollbar",t),children:(0,c.jsx)("code",{className:s.A.codeBlockLines,children:n})})}},8336:(e,n,t)=>{t.d(n,{A:()=>j});t(6540);var l=t(4164),o=t(6342),s=t(6058),c=t(4291),a=t(6591),r=t(1765);const i={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};var d=t(4848);function u(e){let{line:n,classNames:t,showLineNumbers:o,getLineProps:s,getTokenProps:c}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const a=s({line:n,className:(0,l.A)(t,o&&i.codeLine)}),r=n.map(((e,n)=>(0,d.jsx)("span",{...c({token:e,key:n})},n)));return(0,d.jsxs)("span",{...a,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:i.codeLineNumber}),(0,d.jsx)("span",{className:i.codeLineContent,children:r})]}):r,(0,d.jsx)("br",{})]})}var p=t(2092),h=t(1312),m=t(5048);const g={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function x(e){let{className:n,onClick:t,isEnabled:o}=e;const s=(0,h.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:t,className:(0,l.A)("clean-btn",n,o&&g.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,d.jsx)(m.A,{className:g.wordWrapButtonIcon,"aria-hidden":"true"})})}var _=t(356),b=t(2626);function j(e){let{children:n,className:t="",metastring:i,title:h,showLineNumbers:m,language:g}=e;const{prism:{defaultLanguage:j,magicComments:v}}=(0,o.p)(),N=function(e){return e?.toLowerCase()}(g??(0,c.Op)(t)??j),f=(0,s.A)(),y=(0,a.f)(),k=(0,c.wt)(i)||h,{lineClassNames:A,code:C}=(0,c.Li)(n,{metastring:i,language:N,magicComments:v}),B=m??(0,c._u)(i);return(0,d.jsxs)(_.A,{as:"div",className:(0,l.A)(t,N&&!t.includes(`language-${N}`)&&`language-${N}`),children:[k&&(0,d.jsx)("div",{className:b.A.codeBlockTitle,children:k}),(0,d.jsxs)("div",{className:b.A.codeBlockContent,children:[(0,d.jsx)(r.f4,{theme:f,code:C,language:N??"text",children:e=>{let{className:n,style:t,tokens:o,getLineProps:s,getTokenProps:c}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,l.A)(n,b.A.codeBlock,"thin-scrollbar"),style:t,children:(0,d.jsx)("code",{className:(0,l.A)(b.A.codeBlockLines,B&&b.A.codeBlockLinesWithNumbering),children:o.map(((e,n)=>(0,d.jsx)(u,{line:e,getLineProps:s,getTokenProps:c,classNames:A[n],showLineNumbers:B},n)))})})}}),(0,d.jsxs)("div",{className:b.A.buttonGroup,children:[(y.isEnabled||y.isCodeScrollable)&&(0,d.jsx)(x,{className:b.A.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),(0,d.jsx)(p.A,{className:b.A.codeButton,code:C})]})]})]})}},2092:(e,n,t)=>{t.d(n,{A:()=>u});var l=t(6540),o=t(4164),s=t(6861),c=t(1312),a=t(1473),r=t(4115);const i={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR",copyButtonText:"copyButtonText_xXQF"};var d=t(4848);function u(e){let{code:n,className:t}=e;const[u,p]=(0,l.useState)(!1),h=(0,l.useRef)(void 0),m=(0,l.useCallback)((()=>{(0,s.A)(n),p(!0),h.current=window.setTimeout((()=>{p(!1)}),1e3)}),[n]);return(0,l.useEffect)((()=>()=>window.clearTimeout(h.current)),[]),(0,d.jsxs)("button",{type:"button","aria-label":u?(0,c.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,c.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,c.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.A)("clean-btn",t,i.copyButton,u&&i.copyButtonCopied),onClick:m,children:[(0,d.jsx)("span",{className:i.copyButtonText,children:u?(0,c.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,c.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"})}),(0,d.jsxs)("span",{className:i.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(a.A,{className:i.copyButtonIcon}),(0,d.jsx)(r.A,{className:i.copyButtonSuccessIcon})]})]})}},224:(e,n,t)=>{t.d(n,{A:()=>S});var l=t(6540),o=t(4164),s=t(2303),c=t(6850),a=t(1312),r=t(4586),i=t(8478),d=t(2181),u=t(6058),p=t(7489);const h={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"},m={codeParent:"codeParent_GSj2",codeButton:"codeButton_bR3a"};var g=t(2092),x=t(4848);function _(e){let{children:n}=e;return(0,x.jsx)("div",{className:(0,o.A)(h.playgroundHeader),children:n})}function b(){return(0,x.jsx)("div",{children:"Loading..."})}function j(){return(0,x.jsx)(i.A,{fallback:(0,x.jsx)(b,{}),children:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.A,{fallback:e=>(0,x.jsx)(d.MN,{...e}),children:(0,x.jsx)(c.pA,{})}),(0,x.jsx)(c.p1,{})]})})}function v(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:h.playgroundPreview,children:(0,x.jsx)(j,{})})})}function N(){const e=(0,s.A)();return(0,x.jsx)(c.w,{className:h.playgroundEditor},String(e))}function f(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{children:(0,x.jsx)(a.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,x.jsx)(N,{})]})}const y=e=>`${e};`;function k(e){let{children:n,transformCode:t,...l}=e;const{siteConfig:{themeConfig:o}}=(0,r.A)(),{liveCodeBlock:{playgroundPosition:s}}=o,a=(0,u.A)(),i=l.metastring?.includes("noInline")??!1;return(0,x.jsx)("div",{className:h.playgroundContainer,children:(0,x.jsx)(c.Q,{code:n?.replace(/\n$/,""),noInline:i,transformCode:t??y,theme:a,...l,children:"top"===s?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{}),(0,x.jsxs)("div",{className:m.codeParent,children:[(0,x.jsx)(g.A,{className:m.codeButton,code:n?.replace(/\n$/,"")||""}),(0,x.jsx)(f,{})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{}),(0,x.jsx)(v,{})]})})})}var A=t(960),C=t(9644);const B=(w=C.A,function(e){return e.live?(0,x.jsx)(k,{scope:A.A,...e,className:(0,o.A)(e.className,m.playground)}):(0,x.jsx)(w,{...e})});var w,I=t(3230),T=t(3730),P=t(1351),L=t(6512),E=t(8774);function S(e){return function(e){return void 0!==e.children&&l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,x.jsx)(I.A,{...e}):(0,x.jsx)(B,{...e,scope:{...T,IoBluetoothOutline:P.xo_,IoLayersOutline:P.llF,IoSearch:P.zfp,IoMailUnreadOutline:P.Jex,IoIosArrowForward:L.OQo,Link:E.A}})}},7617:(e,n,t)=>{t.d(n,{Z:()=>l});const l={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,n,t)=>{t.d(n,{A:()=>h});var l=t(6540),o=t(403),s=t(7617);const c="mtui_button_xmEf",a="content_JZQn",r="default_QvER",i="mtui_button__icon_kEuk",d="glossy_1pgh";var u=t(4848);const p={hue:0,isIcon:!1,glossy:!1,leftIcon:l.Component,rightIcon:l.Component,as:(0,u.jsx)("button",{})},h=function(e){void 0===e&&(e=p);const n={"--hue":s.Z[e.color]?s.Z[e.color]:e.hue?e.hue:100,...e.style},t={...e};Object.keys(p).forEach((e=>delete t[e]));const h=(0,o.A)({"mtui-button":!0,[c]:!0,[r]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[i]:e.isIcon,[e.className]:!!e.className}),m=(0,u.jsxs)(l.Fragment,{children:[e.leftIcon??"",(0,u.jsx)("span",{className:a,children:e?.children}),e.rightIcon??""]});return l.cloneElement(e.as,{...t,children:m,style:n,className:h})}},7874:(e,n,t)=>{t.d(n,{A:()=>l.A});var l=t(9427)},3730:(e,n,t)=>{t.r(n),t.d(n,{Accordion:()=>ee,AccordionButton:()=>le,AccordionItem:()=>ne,Breadcrumbs:()=>pe,BreadcrumbsItem:()=>me,Button:()=>l.A,ButtonIcon:()=>r,Checkbox:()=>xe,Code:()=>T,InputChild:()=>y,InputChildButton:()=>k,InputChildIcon:()=>A,InputChildPrefix:()=>N,InputChildSelect:()=>f,InputDecrementStepper:()=>x,InputIncrementStepper:()=>_,InputNumber:()=>h,InputNumberField:()=>m,InputNumberStepper:()=>g,InputText:()=>j,InputTextField:()=>v,Kley:()=>Pe,LabelText:()=>B,LinkButton:()=>c,Progress:()=>We,Radio:()=>je,RadioGroup:()=>Ne,Select:()=>ye,SelectGroup:()=>Ie,Spinner:()=>Ee,Stack:()=>z,Toggle:()=>Ze});var l=t(7874),o=t(6540),s=t(4848);const c=e=>(0,s.jsx)(l.A,{...e});var a=t(9427);const r=e=>(0,s.jsx)(a.A,{...e,isIcon:!0});var i=t(6268);const d={mtui_inputtype:"mtui_inputtype_ql8R",disabled:"disabled_bOb0","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var u=t(7617);const p=e=>{const{name:n,disabled:t,value:l,onChange:c,placeholder:a}=e,r={"--hue":u.Z[e.color]?u.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,s.jsx)("div",{className:(0,i.A)("mtui-inputnum",d.mtui_inputtype,{[d["mtui_color_"+e.color]]:e.color,[d.disabled]:t,[e.className]:!!e.className}),style:r,children:o.Children.map(e.children,(e=>o.cloneElement(e,{childProps:e.props,value:l,onChange:c,placeholder:a,name:n})))})};p.defaultProps={name:"",disabled:!1,placeholder:"0"};const h=p,m=e=>{let{onChange:n,value:t,placeholder:l,name:o,disabled:c}=e;const a={placeholder:l,name:o,disabled:c};return"function"==typeof n&&(a.onChange=n),(t||""===t)&&(a.value=t),(0,s.jsx)("input",{type:"number",...a})},g=e=>{const n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},t=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,s.jsx)("div",{className:d.stepper,children:o.Children.map(e.children,(e=>o.cloneElement(e,{onDecrement:t,onIncrement:n})))})},x=e=>{let{onDecrement:n}=e;return(0,s.jsx)("button",{onClick:n,children:(0,s.jsx)("span",{children:"\u25bc"})})},_=e=>(0,s.jsx)("button",{onClick:e.onIncrement,children:(0,s.jsx)("span",{children:"\u25b2"})}),b=e=>{const{onChange:n,value:t,placeholder:l,name:c,hue:a,disabled:r}=e,p={"--hue":u.Z[e.color]?u.Z[e.color]:a||160,...e.style};return(0,s.jsx)("div",{className:(0,i.A)("mtui-inputtext",d.mtui_inputtype,{[d.disabled]:r,[d["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:p,children:o.Children.map(e.children,(e=>o.cloneElement(e,{childProps:e.props,onChange:n,value:t,placeholder:l,disabled:r,name:c})))})};b.defaultProps={name:"",disabled:!1,placeholder:""};const j=b,v=e=>{let{value:n,placeholder:t,name:l,onChange:o,disabled:c}=e;const a={type:"text",placeholder:t,name:l,disabled:c};return"function"==typeof o&&(a.onChange=o),(n||""===n)&&(a.value=n),(0,s.jsx)("input",{...a})},N=e=>{let{childProps:n}=e;return n.value?(0,s.jsx)("div",{className:d.inputPrefix,children:n.value}):""},f=e=>e.children?(0,s.jsx)("select",{className:d.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",y=e=>{const n={...e};return delete n.children,e.children?(0,s.jsx)("div",{...n,className:d.inputChild,children:o.Children.map(e.children,(e=>{const t={...n,...e.props};return e.props.onClick&&(t.onClick=n=>e.props.onClick(n,t)),o.cloneElement(e,t)}))}):""},k=e=>{const n={...e};return delete n.children,delete n.childProps,e.children?(0,s.jsx)("button",{...n,className:d.inputChildButton,children:e.children}):""},A=e=>{const n={...e};return delete n.children,e.children?(0,s.jsx)("div",{...n,className:d.inputChildIcon,children:e.children}):""},C="label_khEV",B=e=>{let{children:n}=e;return(0,s.jsx)("div",{className:C,children:n})},w={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"};var I=t(403);const T=e=>{const n={...e};return n.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(n.color)||(n.color="gray"),e.children?(0,s.jsx)("span",{className:(0,I.A)({"mtui-codeblock":!0,[w.code]:!0,[w["code__color_"+n.color]]:n.color,[e.className]:!!e.className}),children:e.children}):""},P="stack_wl5C",L="column_AVcH",E="stretch_Koba",S="flex__9bI",F="js_end_cSG9",O="js_center_boE0",W="js_start_k4mk",Z="js_spaceBetween_ny_D",G="js_spaceAround_eiM1",R="al_start_euFe",D="al_end_O7Cd",Q="al_center_YCq4",$="al_stretch_QfIY";var q=t(464);const z=e=>{const n="mtstack__"+(0,q.A)(),{flex:t,justify:l,align:o,margin:c,padding:a}=e,r={gap:isNaN(e.gap)?e.gap:e.gap+"px",flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style};"string"==typeof c&&(r.margin=isNaN(c)?c:c+"px"),"string"==typeof a&&(r.padding=isNaN(a)?a:a+"px"),console.log(t);const d={...e};return delete d.children,delete d.wrap,delete d.column,delete d.justify,delete d.flex,delete d.margin,delete d.padding,e.children?(0,s.jsxs)("div",{...d,className:(0,i.A)(["mtui-stack",n,P,{[L]:e.column,[S]:"boolean"==typeof t&&t,[F]:"end"===l,[O]:"center"===l,[W]:"start"===l,[Z]:"spaceBetween"===l,[G]:"spaceAround"===l,[R]:"start"===o,[D]:"end"===o,[Q]:"center"===o,[$]:"stretch"===o,[E]:e.stretch,[d.className]:d.className}]),style:r,children:[e.children,(0,s.jsx)("style",{children:`.${n} > * {\n          flex: ${"string"==typeof t?t:"0 1 auto"}\n      }`})]}):""},V="accordion_JXnx",M="button_KX5s",Y="contentitem_Ypfv",H="visible_Rwwh",J="hidden_GCVw",K="icon_Tmaf",U="children_fxDu",X="button_opened_GUD0",ee=e=>{const n={...e.style},t={...e,style:n};return(0,s.jsx)("section",{...t,className:(0,I.A)({"mtui-accordion":!0,[V]:V,...t.className?.map((e=>({[e]:e})))}),children:t.children})},ne=e=>{const[n,t]=(0,o.useState)(e.isOpened||!1),l=()=>{t(!n)};return(0,s.jsx)("article",{children:o.Children.map(e.children,((e,t)=>{const s={...e.props};return"AccordionButton"===e.type.displayName?(s.onClick=l,o.cloneElement(e,{...s,isOpened:n})):(s["data-visible"]=n,s.className=`mtui-accordion__item ${Y} ${n?H:J}`,o.cloneElement(e,s))}))})},te=e=>(0,s.jsxs)("button",{onClick:e.onClick,className:(0,I.A)({[M]:!0,[X]:e.isOpened}),children:[(0,s.jsx)("span",{className:U,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,s.jsx)("i",{className:K,children:(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});te.displayName="AccordionButton";const le=te,oe="breadcrumbs_EqqV",se="item_U93n",ce="divider_e5y_",ae="divider_child_jasW",re="link_Mfuz",ie="last_visible_EQmH",de="last_inactive_e_0M",ue={divider:"/",showLastDivider:!0,lastActive:!1,children:null},pe=function(e){void 0===e&&(e=ue);const n={...e.style},t={...e};return delete t.style,delete t.divider,delete t.showLastDivider,delete t.className,delete t.lastActive,(0,s.jsx)("nav",{...t,className:(0,I.A)({"mtui-breadcrumbs":!0,[oe]:!0,[ie]:e.showLastDivider,[de]:!e.lastActive,[e.className]:!!e.className}),style:n,children:o.Children.map(e.children,(n=>o.cloneElement(n,{divider:e.divider,...n.props})))})},he=e=>e.divider?(0,s.jsx)("div",{className:`${ce} ${ae}`,children:e.divider}):(0,s.jsx)("div",{className:ce,children:"/"}),me=e=>(0,s.jsxs)("div",{className:se,children:[(0,s.jsx)("span",{className:re,children:e.children}),(0,s.jsx)(he,{divider:e.divider})]}),ge={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};function xe(e){let{name:n,value:t,onChange:l,disabled:c,checked:a,toggle:r,linear:d,...u}=e;const[p,h]=o.useState(!1),[m,g]=o.useState(t||a),x={type:"checkbox",className:ge.input,checked:m,onChange:e=>{if(!c){let n=e.target.checked;g(n),"function"==typeof l&&l(e)}},name:n};return o.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,s.jsxs)("label",{className:(0,i.A)(["mtui-checkbox",ge.parent,{[ge.disabled]:c,[ge.toggle]:r,[ge.linear]:d}]),style:u.style,children:[(0,s.jsx)("input",{...x}),(0,s.jsx)("span",{className:ge.checkbox,children:m&&!r?(0,s.jsx)("svg",{className:ge.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:p?(0,s.jsx)("polyline",{children:(0,s.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,s.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),u.children?(0,s.jsx)("span",{className:ge.label,children:u.children}):""]})}xe.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const _e={parent:"parent_ZnxF",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},be={name:"",onChange:()=>{},value:!1,disabled:!1},je=function(e){void 0===e&&(e=be);const{name:n,value:t,disabled:l,styleParent:o}=e;return console.log(o),(0,s.jsxs)("label",{className:(0,i.A)(["mtui-radioitem",_e.parent,{[_e.disabled]:l}]),style:{"--bg":o["--bg"],...e.childProps.style},children:[(0,s.jsx)("input",{type:"radio",checked:t===e.childProps.value,className:_e.input,onChange:l?()=>{}:n=>e.onChange(e.childProps.value),name:n}),(0,s.jsx)("span",{className:_e.checkbox}),e.children?(0,s.jsx)("span",{className:_e.label,children:e.children}):""]})},ve={value:"",onChange:()=>{}},Ne=function(e){void 0===e&&(e=ve);const{onChange:n,value:t}=e,l=t||e.defaultValue||"",[c,a]=o.useState(l),r={"--hue":u.Z[e.color]?u.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,s.jsx)("div",{className:(0,I.A)({"mtui-radiogroup":!0,[_e.radio]:!0,[_e["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:r,children:o.Children.map(e.children,(e=>o.cloneElement(e,{childProps:e.props,value:n?l:c,onChange:n??a,styleParent:r})))})},fe={value:!1,disabled:!1},ye=function(e){void 0===e&&(e=fe);const{value:n,disabled:t,defaultValue:l}=e;if(e.children)return(0,s.jsx)("option",{value:n,disabled:t,checked:n===l,children:e.children})},ke="parent_AxwE",Ae="fitContent_kJ4E",Ce="select_WxMX",Be="icon_l9F_",we={value:"",onChange:()=>{}},Ie=function(e){void 0===e&&(e=we);const{onChange:n,value:t,fitContent:l}=e,c=t||e.defaultValue||"",[a,r]=o.useState(c),d={...e.style};if(e.children)return(0,s.jsxs)("label",{className:(0,i.A)(["mtui-selectgroup",[ke],{[e.className]:!!e.className,[Ae]:!!e.fitContent}]),style:d,children:[(0,s.jsx)("select",{className:Ce,onChange:e=>{n?n(e.target.value):r(e.target.value)},value:n?c:a,children:e.children}),(0,s.jsx)("i",{className:Be,children:(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},Te="key_uKP6",Pe=e=>e.children?(0,s.jsx)("div",{className:Te,children:e.children}):"",Le={act:"act_TEYv",kf_load:"kf_load_XZCU",text:"text_l7Qz"},Ee=e=>(0,s.jsxs)("div",{className:(0,I.A)({"mtui-spinner":!0,[Le.parent]:!0,[e.className]:!!e.className}),style:e.styles,children:[(0,s.jsx)("span",{className:Le.act}),(0,s.jsx)("span",{className:Le.text,children:"Loading..."})]}),Se="parent_qZrO",Fe="vis_kwFj",Oe="text_Z_cA",We=e=>{const{value:n,stripe:t,colorScheme:l,height:o,isIndeterminate:c,className:a}=e,r={"--hue":u.Z[l]?u.Z[l]:e.hue?e.hue:160,height:-1!==o.indexOf("px")?o:o+"px",...e.style};return(0,s.jsxs)("div",{className:(0,I.A)({"mtui-progressbar":!0,[Se]:!0,[e.className]:!!e.className}),style:r,children:[(0,s.jsx)("span",{className:Fe,style:{width:(n||0)+"%"}}),(0,s.jsxs)("span",{className:Oe,children:["Progress: ",n||0,"%"]})]})},Ze=e=>(0,s.jsx)(xe,{...e,toggle:!0})},403:(e,n,t)=>{function l(e){return Object.keys(e).filter((n=>e[n])).join(" ")}t.d(n,{A:()=>l})},2626:(e,n,t)=>{t.d(n,{A:()=>l});const l={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);