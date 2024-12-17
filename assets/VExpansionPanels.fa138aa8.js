import{p as P,B as b,i as S,a as l,a5 as h,a7 as L,a9 as k,f as r,a6 as $,q as j,aJ as z,A as q,C as F,G as J,E as t}from"./index.be9352ca.js";import{V as N}from"./index.0ecc5ef4.js";import{m as g,u as y,R as O,e as T,i as w,w as H,c as K,d as M,a as A,g as Q,h as U}from"./index.95f4c41b.js";import{m as W,u as X}from"./lazy.adeebdd8.js";import{b as Y,c as Z,m as ee,a as ae}from"./group.658edde9.js";const p=Symbol.for("vuetify:v-expansion-panel"),B=P({...g(),...W()},"VExpansionPanelText"),C=b()({name:"VExpansionPanelText",props:B(),setup(e,d){let{slots:n}=d;const a=S(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=X(e,a.isSelected);return y(()=>l(N,{onAfterLeave:u},{default:()=>{var o;return[h(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(o=n.default)==null?void 0:o.call(n)])]),[[L,a.isSelected.value]])]}})),{}}}),_=P({color:String,expandIcon:{type:k,default:"$expand"},collapseIcon:{type:k,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...g()},"VExpansionPanelTitle"),I=b()({name:"VExpansionPanelTitle",directives:{Ripple:O},props:_(),setup(e,d){let{slots:n}=d;const a=S(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=T(e,"color"),o=r(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),v=r(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return y(()=>{var f;return h(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[u.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(f=n.default)==null?void 0:f.call(n,o.value),!e.hideActions&&l(w,{defaults:{VIcon:{icon:v.value}}},{default:()=>{var x,m;return[l("span",{class:"v-expansion-panel-title__icon"},[(m=(x=n.actions)==null?void 0:x.call(n,o.value))!=null?m:l(H,null,null)])]}})]),[[$("ripple"),e.ripple]])}),{}}}),R=P({title:String,text:String,bgColor:String,...K(),...Y(),...M(),...A(),..._(),...B()},"VExpansionPanel"),de=b()({name:"VExpansionPanel",props:R(),emits:{"group:selected":e=>!0},setup(e,d){let{slots:n}=d;const a=Z(e,p),{backgroundColorClasses:i,backgroundColorStyles:u}=T(e,"bgColor"),{elevationClasses:o}=Q(e),{roundedClasses:v}=U(e),f=r(()=>(a==null?void 0:a.disabled.value)||e.disabled),x=r(()=>a.group.items.value.reduce((c,s,V)=>(a.group.selected.value.includes(s.id)&&c.push(V),c),[])),m=r(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===1)}),D=r(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===-1)});return j(p,a),y(()=>{const c=!!(n.text||e.text),s=!!(n.title||e.title),V=I.filterProps(e),G=C.filterProps(e);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":m.value,"v-expansion-panel--after-active":D.value,"v-expansion-panel--disabled":f.value},v.value,i.value,e.class],style:[u.value,e.style]},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...o.value]},null),l(w,{defaults:{VExpansionPanelTitle:{...V},VExpansionPanelText:{...G}}},{default:()=>{var E;return[s&&l(I,{key:"title"},{default:()=>[n.title?n.title():e.title]}),c&&l(C,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(E=n.default)==null?void 0:E.call(n)]}})]})}),{groupItem:a}}}),ne=["default","accordion","inset","popout"],le=P({flat:Boolean,...ee(),...z(R(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...q(),...g(),...A(),variant:{type:String,default:"default",validator:e=>ne.includes(e)}},"VExpansionPanels"),ue=b()({name:"VExpansionPanels",props:le(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:n}=d;const{next:a,prev:i}=ae(e,p),{themeClasses:u}=F(e),o=r(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return J({VExpansionPanel:{bgColor:t(e,"bgColor"),collapseIcon:t(e,"collapseIcon"),color:t(e,"color"),eager:t(e,"eager"),elevation:t(e,"elevation"),expandIcon:t(e,"expandIcon"),focusable:t(e,"focusable"),hideActions:t(e,"hideActions"),readonly:t(e,"readonly"),ripple:t(e,"ripple"),rounded:t(e,"rounded"),static:t(e,"static")}}),y(()=>l(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},u.value,o.value,e.class],style:e.style},{default:()=>{var v;return[(v=n.default)==null?void 0:v.call(n,{prev:i,next:a})]}})),{next:a,prev:i}}});export{ue as V,de as a,I as b,C as c};
