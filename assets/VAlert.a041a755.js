import{c as L}from"./VAvatar.669e573e.js";import{m as p,n as z,j as F,c as w,C as E,D as R,d as j,a as O,p as G,r as K,s as M,k as N,g as q,F as H,G as J,h as Q,x as U,v as W,w as X,i as m}from"./index.95f4c41b.js";import{p as Y,a9 as Z,A as ee,B as te,K as ae,f as o,C as le,E as ne,ax as se,a,m as oe}from"./index.be9352ca.js";import{V as re}from"./VBtn.3ca639e7.js";const ie=L("v-alert-title"),ce=["success","info","warning","error"],ue=Y({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Z,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ce.includes(e)},...p(),...z(),...F(),...w(),...E(),...R(),...j(),...O(),...ee(),...G({variant:"flat"})},"VAlert"),fe=te()({name:"VAlert",props:ue(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,y){let{emit:f,slots:t}=y;const r=ae(e,"modelValue"),s=o(()=>{var l;if(e.icon!==!1)return e.type?(l=e.icon)!=null?l:`$${e.type}`:e.icon}),k=o(()=>{var l;return{color:(l=e.color)!=null?l:e.type,variant:e.variant}}),{themeClasses:b}=le(e),{colorClasses:V,colorStyles:C,variantClasses:P}=K(k),{densityClasses:g}=M(e),{dimensionStyles:x}=N(e),{elevationClasses:S}=q(e),{locationStyles:_}=H(e),{positionClasses:A}=J(e),{roundedClasses:B}=Q(e),{textColorClasses:h,textColorStyles:T}=U(ne(e,"borderColor")),{t:D}=se(),i=o(()=>({"aria-label":D(e.closeLabel),onClick(l){r.value=!1,f("click:close",l)}}));return()=>{const l=!!(t.prepend||s.value),I=!!(t.title||e.title),$=!!(t.close||e.closable);return r.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},b.value,V.value,g.value,S.value,A.value,B.value,P.value,e.class],style:[C.value,x.value,_.value,e.style],role:"alert"},{default:()=>{var c,u,d;return[W(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",h.value],style:T.value},null),l&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(m,{key:"prepend-defaults",disabled:!s.value,defaults:{VIcon:{density:e.density,icon:s.value,size:e.prominent?44:28}}},t.prepend):a(X,{key:"prepend-icon",density:e.density,icon:s.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[I&&a(ie,{key:"title"},{default:()=>{var n,v;return[(v=(n=t.title)==null?void 0:n.call(t))!=null?v:e.title]}}),(u=(c=t.text)==null?void 0:c.call(t))!=null?u:e.text,(d=t.default)==null?void 0:d.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),$&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(m,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var n;return[(n=t.close)==null?void 0:n.call(t,{props:i.value})]}}):a(re,oe({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{fe as V};
