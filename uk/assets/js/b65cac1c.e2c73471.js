(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[9551],{1490:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>K,contentTitle:()=>E,default:()=>X,frontMatter:()=>A,metadata:()=>G,toc:()=>U});var o=n(4578),i=n(9611),s=n(5594);const l="searchinput_jE7d",r="category_items_oI5b",c="item_svBn",a="imgartv_oMe5",d="title_DXOr",u="category_title_zM2i",p="category_group_ppjk";var m=n(4328),h=n(8575);const g={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290};var x=n(1895);const _={mtui_inputtype:"mtui_inputtype_ql8R","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};function b(e){return Object.keys(e).filter((t=>e[t])).join(" ")}const j=e=>{const t={"--hue":g[e.color]?g[e.color]:e.hue?e.hue:160,...e.style};return(0,x.jsx)("div",{className:b({"mtui-inputtext":!0,[_.mtui_inputtype]:!0,[_["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:t,children:h.Children.map(e.children,(t=>h.cloneElement(t,{childProps:t.props,onChange:e.onChange,value:e.value,placeholder:e.placeholder,name:e.name})))})},v=e=>{const t={onChange:t=>e.onChange(t.target.value),value:e.value,placeholder:e.placeholder,name:e.name};return(0,x.jsx)("input",{type:"text",...t,children:e?.children})},f=e=>{const t={...e};return delete t.children,delete t.childProps,e.children?(0,x.jsx)("button",{...t,className:_.inputChildButton,children:e.children}):""},k="button_KX5s",y="icon_Tmaf",C="children_fxDu",w="button_opened_GUD0",N=e=>(0,x.jsxs)("button",{onClick:e.onClick,className:b({[k]:!0,[w]:e.isOpened}),children:[(0,x.jsx)("span",{className:C,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,x.jsx)("i",{className:y,children:(0,x.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});N.displayName="AccordionButton";const I=()=>{const[e,t]=(0,s.useState)(""),n=e=>t(e);return(0,o.jsxs)(j,{className:l,value:e,onChange:n,hue:"100",placeholder:"Search...",name:"input-name-prop",children:[(0,o.jsx)(v,{}),(0,o.jsx)(f,{children:(0,o.jsx)(m.zfp,{}),onClick:()=>{alert("Query: "+e),n("")}})]})};var S=n(7850),B=n.n(S);class T extends s.PureComponent{static propTypes={disabled:B().bool};static defaultProps={disabled:!0};state={disabled:this.props.disabled};_hideImage=()=>this.setState({disabled:!0});_displayImage=()=>this.setState({disabled:!1});render=()=>{const{disabled:e}=this.state;return!e&&(0,o.jsx)("img",{onError:this._hideImage,onLoad:this._displayImage,...this.props})}}const M=T;var P=n(7452),L=n(8109);const O={img:"",title:"def-title"},D=function(e){void 0===e&&(e=O);const{img:t,title:n,url:i}={...O,...e},s=(0,L.W6)();return(0,o.jsxs)("article",{className:c,onClick:()=>{s.push(i||"")},children:[(0,o.jsx)("div",{className:a,children:(0,o.jsx)(M,{src:t,alt:n})}),(0,o.jsx)(P.A,{href:i,children:(0,o.jsx)("p",{className:d,children:(0,o.jsx)("span",{children:n})})})]})};var H=n(6579),R=n.n(H);const z=()=>{const e=R();return console.log(Object.keys(e)),(0,o.jsxs)("div",{children:[(0,o.jsx)(I,{}),Object.keys(e).map((e=>{const t=R()[e];return t.length?(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)("h2",{className:u,children:e.replace("-"," ")}),(0,o.jsx)("div",{className:r,children:t?.map((e=>(0,o.jsx)(D,{...e})))})]}):""}))]})},A={id:"view",title:"Components",sidebar_label:"Components"},E="Components",G={id:"compontents/view",title:"Components",description:"Matro UI provides you with the tools you need to create fast, beautiful and functional user interfaces.",source:"@site/docs/compontents/view.md",sourceDirName:"compontents",slug:"/compontents/view",permalink:"/uk/docs/compontents/view",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"view",title:"Components",sidebar_label:"Components"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/uk/docs/intro"},next:{title:"Inputs"}},K={},U=[];function W(e){const t={h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"components",children:"Components"}),"\n",(0,o.jsxs)(t.p,{children:["Matro UI provides you with the tools you need to create fast, beautiful and functional user interfaces.",(0,o.jsx)("br",{}),"\nHere is an overview of the component categories:"]}),"\n",(0,o.jsx)(z,{})]})}function X(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(W,{...e})}):W(e)}},6579:e=>{e.exports={inputs:[{id:1,title:"Checkbox",url:"/docs/compontents/inputs/checkbox",img:null},{id:2,title:"Input Number",url:"/docs/compontents/inputs/input-number",img:null},{id:3,title:"Input Text",url:"/docs/compontents/inputs/input-text",img:null},{id:5,title:"Radio",url:"/docs/compontents/inputs/radio",img:null},{id:6,title:"Select",url:"/docs/compontents/inputs/select",img:null},{id:7,title:"Slider",url:"/docs/compontents/inputs/slider",img:null},{id:8,title:"Textarea",url:"/docs/compontents/inputs/textarea",img:null}],layout:[{id:1,title:"Stack",url:"/docs/compontents/layout/stack",img:null}],media:[{id:1,title:"Hide",url:"/docs/compontents/media/hide",img:null},{id:1,title:"Minmax",url:"/docs/compontents/media/minmax",img:null},{id:1,title:"Show",url:"/docs/compontents/media/show",img:null}],navigation:[{id:1,title:"Breadcrumbs",url:"/docs/compontents/navigation/breadcrumbs",img:null},{id:1,title:"Link",url:"/docs/compontents/navigation/link",img:null}],progress:[{id:1,title:"Progress",url:"/docs/compontents/progress/",img:null},{id:1,title:"Spinner",url:"/docs/compontents/progress/spinner",img:null}],other:[{id:1,title:"Switch",url:"/docs/compontents/other/switch",img:null},{id:1,title:"Button",url:"/docs/compontents/other/button",img:null},{id:1,title:"Accordion",url:"/docs/compontents/other/accordion",img:null},{id:1,title:"Key",url:"/docs/compontents/other/kley",img:null}]}}}]);