"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[8209],{3630:(e,t,s)=>{s.d(t,{A:()=>v});var a=s(9474),i=s(8923),r=s(1691),l=s(2322),n=s(8584),c=s(549),o=s(241),m=s(4270);function d(e){const{pathname:t}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_xROV",sidebarItemTitle:"sidebarItemTitle_xjfp",sidebarItemList:"sidebarItemList_QBHC",sidebarItem:"sidebarItem_QsUV",sidebarItemLink:"sidebarItemLink_Coj1",sidebarItemLinkActive:"sidebarItemLinkActive_vaAb"};var g=s(3274);function b(e){let{sidebar:t}=e;const s=d(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(9073);function j(e){let{sidebar:t}=e;const s=d(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,g.jsx)(h.GX,{component:j,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,g.jsx)(p,{sidebar:t}):(0,g.jsx)(b,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,g.jsx)(r.A,{...l,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,g.jsx)("div",{className:"col col--2",children:s})]})})})}},5581:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(9474);var a=s(8923),i=s(549);const r=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(3319),n=s(8340),c=s(3630),o=s(2471),m=s(5453);const d={tag:"tag_nN2c"};var u=s(3274);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(m.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:d.tag,children:(0,u.jsx)(o.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function b(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var h=s(828);function j(e){let{tags:t,sidebar:s}=e;const i=r();return(0,u.jsxs)(l.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,u.jsx)(l.be,{title:i}),(0,u.jsx)(h.A,{tag:"blog_tags_list"}),(0,u.jsxs)(c.A,{sidebar:s,children:[(0,u.jsx)(m.A,{as:"h1",children:i}),(0,u.jsx)(b,{tags:t})]})]})}},2471:(e,t,s)=>{s.d(t,{A:()=>n});s(9474);var a=s(8923),i=s(8584);const r={tag:"tag_YtoR",tagRegular:"tagRegular_ozL8",tagWithCount:"tagWithCount_UNEd"};var l=s(3274);function n(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(i.A,{href:t,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}}}]);