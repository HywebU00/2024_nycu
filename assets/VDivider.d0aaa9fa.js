import{m as c,x as u,u as m}from"./index.0665af30.js";import{p as h,t as g,u as y,v as f,y as _,c as k,x as r,k as s}from"./index.2cd2b8e2.js";const C=h({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...c(),...g()},"VDivider"),x=y()({name:"VDivider",props:C(),setup(e,o){let{attrs:i,slots:a}=o;const{themeClasses:n}=f(e),{textColorClasses:l,textColorStyles:v}=u(_(e,"color")),d=k(()=>{const t={};return e.length&&(t[e.vertical?"height":"width"]=s(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=s(e.thickness)),t});return m(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,l.value,e.class],style:[d.value,v.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null);return a.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[a.default()]),t]):t}),{}}});export{x as V};