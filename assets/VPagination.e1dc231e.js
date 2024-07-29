import{b as E,m as G,n as K,c as W,d as X,y as q,a as H,p as O,u as U}from"./index.0665af30.js";import{r as Y,aX as j,p as J,a9 as x,t as Q,u as Z,D as aa,az as ea,w as ta,v as la,L as ia,s as na,z as A,c as b,y as f,x as o,G as P,aH as k,aY as R,n as $}from"./index.2cd2b8e2.js";import{u as sa,V as L}from"./VBtn.1e0390b3.js";function ra(){const a=Y([]);j(()=>a.value=[]);function V(n,p){a.value[p]=n}return{refs:a,updateRef:V}}const ua=J({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:a=>a.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:a=>a%1===0},totalVisible:[Number,String],firstIcon:{type:x,default:"$first"},prevIcon:{type:x,default:"$prev"},nextIcon:{type:x,default:"$next"},lastIcon:{type:x,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...E(),...G(),...K(),...W(),...X(),...q(),...H({tag:"nav"}),...Q(),...O({variant:"text"})},"VPagination"),da=Z()({name:"VPagination",props:ua(),emits:{"update:modelValue":a=>!0,first:a=>!0,prev:a=>!0,next:a=>!0,last:a=>!0},setup(a,V){let{slots:n,emit:p}=V;const i=aa(a,"modelValue"),{t:g,n:B}=ea(),{isRtl:h}=ta(),{themeClasses:w}=la(a),{width:C}=ia(),_=na(-1);A(void 0,{scoped:!0});const{resizeRef:F}=sa(e=>{if(!e.length)return;const{target:t,contentRect:l}=e[0],u=t.querySelector(".v-pagination__list > *");if(!u)return;const v=l.width,m=u.offsetWidth+parseFloat(getComputedStyle(u).marginRight)*2;_.value=I(v,m)}),s=b(()=>parseInt(a.length,10)),r=b(()=>parseInt(a.start,10)),c=b(()=>a.totalVisible!=null?parseInt(a.totalVisible,10):_.value>=0?_.value:I(C.value,58));function I(e,t){const l=a.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((e-t*l)/t).toFixed(2)))}const M=b(()=>{if(s.value<=0||isNaN(s.value)||s.value>Number.MAX_SAFE_INTEGER)return[];if(c.value<=0)return[];if(c.value===1)return[i.value];if(s.value<=c.value)return k(s.value,r.value);const e=c.value%2===0,t=e?c.value/2:Math.floor(c.value/2),l=e?t:t+1,u=s.value-t;if(l-i.value>=0)return[...k(Math.max(1,c.value-1),r.value),a.ellipsis,s.value];if(i.value-u>=(e?1:0)){const v=c.value-1,m=s.value-v+r.value;return[r.value,a.ellipsis,...k(v,m)]}else{const v=Math.max(1,c.value-3),m=v===1?i.value:i.value-Math.ceil(v/2)+r.value;return[r.value,a.ellipsis,...k(v,m),a.ellipsis,s.value]}});function y(e,t,l){e.preventDefault(),i.value=t,l&&p(l,t)}const{refs:N,updateRef:z}=ra();A({VPaginationBtn:{color:f(a,"color"),border:f(a,"border"),density:f(a,"density"),size:f(a,"size"),variant:f(a,"variant"),rounded:f(a,"rounded"),elevation:f(a,"elevation")}});const D=b(()=>M.value.map((e,t)=>{const l=u=>z(u,t);if(typeof e=="string")return{isActive:!1,key:`ellipsis-${t}`,page:e,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}};{const u=e===i.value;return{isActive:u,key:e,page:B(e),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!a.disabled||+a.length<2,color:u?a.activeColor:a.color,"aria-current":u,"aria-label":g(u?a.currentPageAriaLabel:a.pageAriaLabel,e),onClick:v=>y(v,e)}}}})),d=b(()=>{const e=!!a.disabled||i.value<=r.value,t=!!a.disabled||i.value>=r.value+s.value-1;return{first:a.showFirstLastPage?{icon:h.value?a.lastIcon:a.firstIcon,onClick:l=>y(l,r.value,"first"),disabled:e,"aria-label":g(a.firstAriaLabel),"aria-disabled":e}:void 0,prev:{icon:h.value?a.nextIcon:a.prevIcon,onClick:l=>y(l,i.value-1,"prev"),disabled:e,"aria-label":g(a.previousAriaLabel),"aria-disabled":e},next:{icon:h.value?a.prevIcon:a.nextIcon,onClick:l=>y(l,i.value+1,"next"),disabled:t,"aria-label":g(a.nextAriaLabel),"aria-disabled":t},last:a.showFirstLastPage?{icon:h.value?a.firstIcon:a.lastIcon,onClick:l=>y(l,r.value+s.value-1,"last"),disabled:t,"aria-label":g(a.lastAriaLabel),"aria-disabled":t}:void 0}});function S(){var t;const e=i.value-r.value;(t=N.value[e])==null||t.$el.focus()}function T(e){e.key===R.left&&!a.disabled&&i.value>+a.start?(i.value=i.value-1,$(S)):e.key===R.right&&!a.disabled&&i.value<r.value+s.value-1&&(i.value=i.value+1,$(S))}return U(()=>o(a.tag,{ref:F,class:["v-pagination",w.value,a.class],style:a.style,role:"navigation","aria-label":g(a.ariaLabel),onKeydown:T,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[a.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(d.value.first):o(L,P({_as:"VPaginationBtn"},d.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(d.value.prev):o(L,P({_as:"VPaginationBtn"},d.value.prev),null)]),D.value.map((e,t)=>o("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(e):o(L,P({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(d.value.next):o(L,P({_as:"VPaginationBtn"},d.value.next),null)]),a.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(d.value.last):o(L,P({_as:"VPaginationBtn"},d.value.last),null)])])]})),{}}});export{da as V};