import{i as K,s as G,b as H,aj as P,ak as ye,r as A,p as B,D as Z,c as g,j as ge,g as We,y as C,d as Xe,al as Je,a9 as T,u as _,x as d,a5 as Se,a7 as Qe,am as D,t as be,B as Ye,v as he,an as Ze,a6 as et,F as oe,G as ce,ag as tt,ao as L,ap as pe,z as nt,aq as at}from"./index.58279052.js";import{V as lt}from"./index.ddc3e40d.js";import{m as R,a as $,u as E,i as ee,M as it,b as ke,n as Ce,j as we,c as Ie,d as Ve,o as st,p as Ae,R as rt,q as ut,f as Pe,r as ot,s as Le,k as Oe,g as Be,h as je,v as ct,w as de,x as dt,e as vt}from"./index.d46c1fab.js";import{u as ft}from"./ssrBoot.9bf5929e.js";import{c as mt,V as ve}from"./VAvatar.d1346c74.js";import{V as yt}from"./VDivider.d74826d3.js";const te=Symbol.for("vuetify:list");function xe(){const e=K(te,{hasPrepend:G(!1),updateHasPrepend:()=>null}),i={hasPrepend:G(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return H(te,i),e}function Me(){return K(te,null)}const ae=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=P(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;if(t!=null)for(const s of ye(t))a=i.activate({id:s,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},Te=e=>{const i=ae(e);return{activate:n=>{let{activated:l,id:a,...s}=n;a=P(a);const u=l.has(a)?new Set([a]):new Set;return i.activate({...s,id:a,activated:u})},in:(n,l,a)=>{let s=new Set;if(n!=null){const u=ye(n);u.length&&(s=i.in(u.slice(0,1),l,a))}return s},out:(n,l,a)=>i.out(n,l,a)}},gt=e=>{const i=ae(e);return{activate:n=>{let{id:l,activated:a,children:s,...u}=n;return l=P(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...u})},in:i.in,out:i.out}},St=e=>{const i=Te(e);return{activate:n=>{let{id:l,activated:a,children:s,...u}=n;return l=P(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...u})},in:i.in,out:i.out}},bt={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let s=l.get(i);for(;s!=null;)a.add(s),s=l.get(s);return a}else return n.delete(i),n},select:()=>null},_e={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},ht={open:_e.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let s=l.get(i);for(;s!=null;)a.push(s),s=l.get(s);return new Set(a)}},le=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=P(n),e&&!l){const s=Array.from(a.entries()).reduce((u,v)=>{let[S,f]=v;return f==="on"&&u.push(S),u},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},Fe=e=>{const i=le(e);return{select:n=>{let{selected:l,id:a,...s}=n;a=P(a);const u=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...s,id:a,selected:u})},in:(n,l,a)=>{let s=new Map;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,a)),s},out:(n,l,a)=>i.out(n,l,a)}},pt=e=>{const i=le(e);return{select:n=>{let{id:l,selected:a,children:s,...u}=n;return l=P(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...u})},in:i.in,out:i.out}},kt=e=>{const i=Fe(e);return{select:n=>{let{id:l,selected:a,children:s,...u}=n;return l=P(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...u})},in:i.in,out:i.out}},Ct=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:s,parents:u}=t;n=P(n);const v=new Map(a),S=[n];for(;S.length;){const b=S.shift();a.set(b,l?"on":"off"),s.has(b)&&S.push(...s.get(b))}let f=u.get(n);for(;f;){const b=s.get(f),k=b.every(o=>a.get(o)==="on"),r=b.every(o=>!a.has(o)||a.get(o)==="off");a.set(f,k?"on":r?"off":"indeterminate"),f=u.get(f)}return e&&!l&&Array.from(a.entries()).reduce((k,r)=>{let[o,c]=r;return c==="on"&&k.push(o),k},[]).length===0?v:a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&l.push(a);return l}};return i},N=Symbol.for("vuetify:nested"),De={id:G(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:A(!1),selectable:A(!1),opened:A(new Set),activated:A(new Set),selected:A(new Map),selectedValues:A([])}},wt=B({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),It=e=>{let i=!1;const t=A(new Map),n=A(new Map),l=Z(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=g(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return gt(e.mandatory);case"single-leaf":return St(e.mandatory);case"independent":return ae(e.mandatory);case"single-independent":default:return Te(e.mandatory)}}),s=g(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return kt(e.mandatory);case"leaf":return pt(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":return Fe(e.mandatory);case"classic":default:return Ct(e.mandatory)}}),u=g(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ht;case"single":return bt;case"multiple":default:return _e}}),v=Z(e,"activated",e.activated,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value)),S=Z(e,"selected",e.selected,r=>s.value.in(r,t.value,n.value),r=>s.value.out(r,t.value,n.value));ge(()=>{i=!0});function f(r){const o=[];let c=r;for(;c!=null;)o.unshift(c),c=n.value.get(c);return o}const b=We("nested"),k={id:G(),root:{opened:l,activatable:C(e,"activatable"),selectable:C(e,"selectable"),activated:v,selected:S,selectedValues:g(()=>{const r=[];for(const[o,c]of S.value.entries())c==="on"&&r.push(o);return r}),register:(r,o,c)=>{o&&r!==o&&n.value.set(r,o),c&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{var c;if(i)return;t.value.delete(r);const o=n.value.get(r);if(o){const m=(c=t.value.get(o))!=null?c:[];t.value.set(o,m.filter(h=>h!==r))}n.value.delete(r),l.value.delete(r)},open:(r,o,c)=>{b.emit("click:open",{id:r,value:o,path:f(r),event:c});const m=u.value.open({id:r,value:o,opened:new Set(l.value),children:t.value,parents:n.value,event:c});m&&(l.value=m)},openOnSelect:(r,o,c)=>{const m=u.value.select({id:r,value:o,selected:new Map(S.value),opened:new Set(l.value),children:t.value,parents:n.value,event:c});m&&(l.value=m)},select:(r,o,c)=>{b.emit("click:select",{id:r,value:o,path:f(r),event:c});const m=s.value.select({id:r,value:o,selected:new Map(S.value),children:t.value,parents:n.value,event:c});m&&(S.value=m),k.root.openOnSelect(r,o,c)},activate:(r,o,c)=>{if(!e.activatable)return k.root.select(r,!0,c);b.emit("click:activate",{id:r,value:o,path:f(r),event:c});const m=a.value.activate({id:r,value:o,activated:new Set(v.value),children:t.value,parents:n.value,event:c});m&&(v.value=m)},children:t,parents:n}};return H(N,k),k.root},Ge=(e,i)=>{const t=K(N,De),n=Symbol(Xe()),l=g(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(s,u)=>t.root.open(l.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(l.value,s,u),isOpen:g(()=>t.root.opened.value.has(l.value)),parent:g(()=>t.root.parents.value.get(l.value)),activate:(s,u)=>t.root.activate(l.value,s,u),isActivated:g(()=>t.root.activated.value.has(P(l.value))),select:(s,u)=>t.root.select(l.value,s,u),isSelected:g(()=>t.root.selected.value.get(P(l.value))==="on"),isIndeterminate:g(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:g(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),ge(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&H(N,a),a},Vt=()=>{const e=K(N,De);H(N,{...e,isGroupActivator:!0})},At=Je({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return Vt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Pt=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:T,default:"$collapse"},expandIcon:{type:T,default:"$expand"},prependIcon:T,appendIcon:T,fluid:Boolean,subgroup:Boolean,title:String,value:null,...R(),...$()},"VListGroup"),fe=_()({name:"VListGroup",props:Pt(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=Ge(C(e,"value"),!0),s=g(()=>`v-list-group--id-${String(a.value)}`),u=Me(),{isBooted:v}=ft();function S(r){r.stopPropagation(),l(!n.value,r)}const f=g(()=>({onClick:S,class:"v-list-group__header",id:s.value})),b=g(()=>n.value?e.collapseIcon:e.expandIcon),k=g(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&b.value,appendIcon:e.appendIcon||!e.subgroup&&b.value,title:e.title,value:e.value}}));return E(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&d(ee,{defaults:k.value},{default:()=>[d(At,null,{default:()=>[t.activator({props:f.value,isOpen:n.value})]})]}),d(it,{transition:{component:lt},disabled:!v.value},{default:()=>{var r;return[Se(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(r=t.default)==null?void 0:r.call(t)]),[[Qe,n.value]])]}})]})),{isOpen:n}}});const Lt=B({opacity:[Number,String],...R(),...$()},"VListItemSubtitle"),Ot=_()({name:"VListItemSubtitle",props:Lt(),setup(e,i){let{slots:t}=i;return E(()=>d(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Bt=mt("v-list-item-title"),jt=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:T,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:T,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:D(),onClickOnce:D(),...ke(),...R(),...Ce(),...we(),...Ie(),...Ve(),...st(),...$(),...be(),...Ae({variant:"text"})},"VListItem"),me=_()({name:"VListItem",directives:{Ripple:rt},props:jt(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=ut(e,t),s=g(()=>e.value===void 0?a.href.value:e.value),{activate:u,isActivated:v,select:S,isSelected:f,isIndeterminate:b,isGroupActivator:k,root:r,parent:o,openOnSelect:c}=Ge(s,!1),m=Me(),h=g(()=>{var y;return e.active!==!1&&(e.active||((y=a.isActive)==null?void 0:y.value)||(r.activatable.value?v.value:f.value))}),p=g(()=>e.link!==!1&&a.isLink.value),I=g(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!m&&(r.selectable.value||r.activatable.value||e.value!=null))),j=g(()=>e.rounded||e.nav),x=g(()=>{var y;return(y=e.color)!=null?y:e.activeColor}),q=g(()=>{var y;return{color:h.value&&(y=x.value)!=null?y:e.baseColor,variant:e.variant}});Ye(()=>{var y;return(y=a.isActive)==null?void 0:y.value},y=>{y&&o.value!=null&&r.open(o.value,!0),y&&c(y)},{immediate:!0});const{themeClasses:z}=he(e),{borderClasses:W}=Pe(e),{colorClasses:X,colorStyles:J,variantClasses:O}=ot(q),{densityClasses:w}=Le(e),{dimensionStyles:M}=Oe(e),{elevationClasses:Ee}=Be(e),{roundedClasses:Ue}=je(j),Ke=g(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Q=g(()=>({isActive:h.value,select:S,isSelected:f.value,isIndeterminate:b.value}));function ie(y){var U;l("click",y),I.value&&((U=a.navigate)==null||U.call(a,y),!k&&(r.activatable.value?u(!v.value,y):(r.selectable.value||e.value!=null)&&S(!f.value,y)))}function He(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),ie(y))}return E(()=>{const y=p.value?"a":e.tag,U=n.title||e.title!=null,qe=n.subtitle||e.subtitle!=null,se=!!(e.appendAvatar||e.appendIcon),ze=!!(se||n.append),re=!!(e.prependAvatar||e.prependIcon),Y=!!(re||n.prepend);return m==null||m.updateHasPrepend(Y),e.activeColor&&Ze("active-color",["color","base-color"]),Se(d(y,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":e.disabled,"v-list-item--link":I.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Y&&(m==null?void 0:m.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&h.value},z.value,W.value,X.value,w.value,Ee.value,Ke.value,Ue.value,O.value,e.class],style:[J.value,M.value,e.style],href:a.href.value,tabindex:I.value?m?-2:0:void 0,onClick:ie,onKeydown:I.value&&!p.value&&He},{default:()=>{var ue;return[ct(I.value||h.value,"v-list-item"),Y&&d("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?d(ee,{key:"prepend-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var V;return[(V=n.prepend)==null?void 0:V.call(n,Q.value)]}}):d(oe,null,[e.prependAvatar&&d(ve,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(de,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[U&&d(Bt,{key:"title"},{default:()=>{var V,F;return[(F=(V=n.title)==null?void 0:V.call(n,{title:e.title}))!=null?F:e.title]}}),qe&&d(Ot,{key:"subtitle"},{default:()=>{var V,F;return[(F=(V=n.subtitle)==null?void 0:V.call(n,{subtitle:e.subtitle}))!=null?F:e.subtitle]}}),(ue=n.default)==null?void 0:ue.call(n,Q.value)]),ze&&d("div",{key:"append",class:"v-list-item__append"},[n.append?d(ee,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var V;return[(V=n.append)==null?void 0:V.call(n,Q.value)]}}):d(oe,null,[e.appendIcon&&d(de,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(ve,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[et("ripple"),I.value&&e.ripple]])}),{activate:u,isActivated:v,isGroupActivator:k,isSelected:f,list:m,select:S}}}),xt=B({color:String,inset:Boolean,sticky:Boolean,title:String,...R(),...$()},"VListSubheader"),Mt=_()({name:"VListSubheader",props:xt(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=dt(C(e,"color"));return E(()=>{const a=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s,u;return[a&&d("div",{class:"v-list-subheader__text"},[(u=(s=t.default)==null?void 0:s.call(t))!=null?u:e.title])]}})}),{}}}),Tt=B({items:Array,returnObject:Boolean},"VListChildren"),Ne=_()({name:"VListChildren",props:Tt(),setup(e,i){let{slots:t}=i;return xe(),()=>{var n,l,a;return(a=(n=t.default)==null?void 0:n.call(t))!=null?a:(l=e.items)==null?void 0:l.map(s=>{var r,o,c,m;let{children:u,props:v,type:S,raw:f}=s;if(S==="divider")return(o=(r=t.divider)==null?void 0:r.call(t,{props:v}))!=null?o:d(yt,v,null);if(S==="subheader")return(m=(c=t.subheader)==null?void 0:c.call(t,{props:v}))!=null?m:d(Mt,v,null);const b={subtitle:t.subtitle?h=>{var p;return(p=t.subtitle)==null?void 0:p.call(t,{...h,item:f})}:void 0,prepend:t.prepend?h=>{var p;return(p=t.prepend)==null?void 0:p.call(t,{...h,item:f})}:void 0,append:t.append?h=>{var p;return(p=t.append)==null?void 0:p.call(t,{...h,item:f})}:void 0,title:t.title?h=>{var p;return(p=t.title)==null?void 0:p.call(t,{...h,item:f})}:void 0},k=fe.filterProps(v);return u?d(fe,ce({value:v==null?void 0:v.value},k),{activator:h=>{let{props:p}=h;const I={...v,...p,value:e.returnObject?f:v.value};return t.header?t.header({props:I}):d(me,I,b)},default:()=>d(Ne,{items:u,returnObject:e.returnObject},t)}):t.item?t.item({props:v}):d(me,ce(v,{value:e.returnObject?f:v.value}),b)})}}}),_t=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:tt}},"list-items");function ne(e,i){var u;const t=L(i,e.itemTitle,i),n=L(i,e.itemValue,t),l=L(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?pe(i,["children"]):i:void 0:L(i,e.itemProps),s={title:t,value:n,...a};return{title:String((u=s.title)!=null?u:""),value:s.value,props:s,children:Array.isArray(l)?Re(e,l):void 0,raw:i}}function Re(e,i){const t=[];for(const n of i)t.push(ne(e,n));return t}function qt(e){const i=g(()=>Re(e,e.items)),t=g(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(s=>s!==null)),a.map(s=>e.returnObject&&typeof s=="string"?ne(e,s):i.value.find(u=>e.valueComparator(s,u.value))||ne(e,s))}function l(a){return e.returnObject?a.map(s=>{let{raw:u}=s;return u}):a.map(s=>{let{value:u}=s;return u})}return{items:i,transformIn:n,transformOut:l}}function Ft(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Dt(e,i){const t=L(i,e.itemType,"item"),n=Ft(i)?i:L(i,e.itemTitle),l=L(i,e.itemValue,void 0),a=L(i,e.itemChildren),s=e.itemProps===!0?pe(i,["children"]):L(i,e.itemProps),u={title:n,value:l,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&a?$e(e,a):void 0,raw:i}}function $e(e,i){const t=[];for(const n of i)t.push(Dt(e,n));return t}function Gt(e){return{items:g(()=>$e(e,e.items))}}const Nt=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":D(),"onClick:select":D(),"onUpdate:opened":D(),...wt({selectStrategy:"single-leaf",openStrategy:"list"}),...ke(),...R(),...Ce(),...we(),...Ie(),itemType:{type:String,default:"type"},..._t(),...Ve(),...$(),...be(),...Ae({variant:"text"})},"VList"),zt=_()({name:"VList",props:Nt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=Gt(e),{themeClasses:l}=he(e),{backgroundColorClasses:a,backgroundColorStyles:s}=vt(C(e,"bgColor")),{borderClasses:u}=Pe(e),{densityClasses:v}=Le(e),{dimensionStyles:S}=Oe(e),{elevationClasses:f}=Be(e),{roundedClasses:b}=je(e),{children:k,open:r,parents:o,select:c}=It(e),m=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),h=C(e,"activeColor"),p=C(e,"baseColor"),I=C(e,"color");xe(),nt({VListGroup:{activeColor:h,baseColor:p,color:I,expandIcon:C(e,"expandIcon"),collapseIcon:C(e,"collapseIcon")},VListItem:{activeClass:C(e,"activeClass"),activeColor:h,baseColor:p,color:I,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const j=G(!1),x=A();function q(w){j.value=!0}function z(w){j.value=!1}function W(w){var M;!j.value&&!(w.relatedTarget&&((M=x.value)==null?void 0:M.contains(w.relatedTarget)))&&O()}function X(w){const M=w.target;if(!(!x.value||["INPUT","TEXTAREA"].includes(M.tagName))){if(w.key==="ArrowDown")O("next");else if(w.key==="ArrowUp")O("prev");else if(w.key==="Home")O("first");else if(w.key==="End")O("last");else return;w.preventDefault()}}function J(w){j.value=!0}function O(w){if(x.value)return at(x.value,w)}return E(()=>d(e.tag,{ref:x,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,u.value,v.value,f.value,m.value,b.value,e.class],style:[s.value,S.value,e.style],tabindex:e.disabled||j.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:q,onFocusout:z,onFocus:W,onKeydown:X,onMousedown:J},{default:()=>[d(Ne,{items:n.value,returnObject:e.returnObject},t)]})),{open:r,select:c,focus:O,children:k,parents:o}}});export{zt as V,fe as a,me as b,_t as m,qt as u};
