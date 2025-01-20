import{m as Pe,V as ce}from"./VTextField.5ea8292b.js";import{p as $,C as ae,J as H,a as i,F as z,m as E,R as be,v as _,N as de,h as N,g as D,P as he,I as te,aS as Te,q as ge,ae as ne,l as xe,G as Ie,M as Ce,A as Y,K as Re,aa as Ae,aq as De,aD as Fe,L as fe,aE as Be,f as Oe,aw as ve,al as _e}from"./index.eb43fa57.js";import{u as Le}from"./VInput.86d69997.js";import{f as Me}from"./forwardRefs.34034356.js";import{m as Ee,u as He,V as qe,b as me}from"./VList.0a3abd53.js";import{m as ye,u as oe,j as Ke,k as Ne,D as Ue,w as pe,i as ze}from"./index.77990c4a.js";import{a as $e,V as je}from"./VMenu.a907f11f.js";import{u as Ve}from"./group.990b857b.js";import{g as We}from"./VOverlay.17b2a242.js";import{V as Ge}from"./VCheckboxBtn.00819da1.js";import{V as Je}from"./VAvatar.f38a976a.js";import{V as Xe}from"./VChip.5ffce6c7.js";const Ye=$({renderless:Boolean,...ye()},"VVirtualScrollItem"),Qe=ae()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ye(),emits:{"update:height":e=>!0},setup(e,c){let{attrs:n,emit:d,slots:r}=c;const{resizeRef:f,contentRect:w}=Ve(void 0,"border");H(()=>{var u;return(u=w.value)==null?void 0:u.height},u=>{u!=null&&d("update:height",u)}),oe(()=>{var u,a;return e.renderless?i(z,null,[(u=r.default)==null?void 0:u.call(r,{itemRef:f})]):i("div",E({ref:f,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(a=r.default)==null?void 0:a.call(r)])})}}),Ze=-1,et=1,le=100,tt=$({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function lt(e,c){const n=be(),d=_(0);de(()=>{d.value=parseFloat(e.itemHeight||0)});const r=_(0),f=_(Math.ceil((parseInt(e.height)||n.height.value)/(d.value||16))||1),w=_(0),u=_(0),a=N(),S=N();let A=0;const{resizeRef:F,contentRect:s}=Ve();de(()=>{F.value=a.value});const P=D(()=>{var t;return a.value===document.documentElement?n.height.value:((t=s.value)==null?void 0:t.height)||parseInt(e.height)||0}),b=D(()=>!!(a.value&&S.value&&P.value&&d.value));let x=Array.from({length:c.value.length}),m=Array.from({length:c.value.length});const I=_(0);let C=-1;function j(t){return x[t]||d.value}const R=Te(()=>{const t=performance.now();m[0]=0;const o=c.value.length;for(let V=1;V<=o-1;V++)m[V]=(m[V-1]||0)+j(V-1);I.value=Math.max(I.value,performance.now()-t)},I),W=H(b,t=>{!t||(W(),A=S.value.offsetTop,R.immediate(),B(),~C&&ge(()=>{ne&&window.requestAnimationFrame(()=>{X(C),C=-1})}))});he(()=>{R.clear()});function Q(t,o){const V=x[t],h=d.value;d.value=h?Math.min(d.value,o):o,(V!==o||h!==d.value)&&(x[t]=o,R())}function T(t){return t=te(t,0,c.value.length-1),m[t]||0}function G(t){return nt(m,t)}let q=0,L=0,U=0;H(P,(t,o)=>{o&&(B(),t<o&&requestAnimationFrame(()=>{L=0,B()}))});function Z(){if(!a.value||!S.value)return;const t=a.value.scrollTop,o=performance.now();o-U>500?(L=Math.sign(t-q),A=S.value.offsetTop):L=t-q,q=t,U=o,B()}function K(){!a.value||!S.value||(L=0,U=0,B())}let J=-1;function B(){cancelAnimationFrame(J),J=requestAnimationFrame(ee)}function ee(){if(!a.value||!P.value)return;const t=q-A,o=Math.sign(L),V=Math.max(0,t-le),h=te(G(V),0,c.value.length),v=t+P.value+le,g=te(G(v)+1,h+1,c.value.length);if((o!==Ze||h<r.value)&&(o!==et||g>f.value)){const p=T(r.value)-T(h),k=T(g)-T(f.value);Math.max(p,k)>le?(r.value=h,f.value=g):(h<=0&&(r.value=h),g>=c.value.length&&(f.value=g))}w.value=T(r.value),u.value=T(c.value.length)-T(f.value)}function X(t){const o=T(t);!a.value||t&&!o?C=t:a.value.scrollTop=o}const l=D(()=>c.value.slice(r.value,f.value).map((t,o)=>({raw:t,index:o+r.value})));return H(c,()=>{x=Array.from({length:c.value.length}),m=Array.from({length:c.value.length}),R.immediate(),B()},{deep:!0}),{containerRef:a,markerRef:S,computedItems:l,paddingTop:w,paddingBottom:u,scrollToIndex:X,handleScroll:Z,handleScrollend:K,handleItemResize:Q}}function nt(e,c){let n=e.length-1,d=0,r=0,f=null,w=-1;if(e[n]<c)return n;for(;d<=n;)if(r=d+n>>1,f=e[r],f>c)n=r-1;else if(f<c)w=r,d=r+1;else return f===c?r:d;return w}const at=$({items:{type:Array,default:()=>[]},renderless:Boolean,...tt(),...ye(),...Ke()},"VVirtualScroll"),ot=ae()({name:"VVirtualScroll",props:at(),setup(e,c){let{slots:n}=c;const d=xe("VVirtualScroll"),{dimensionStyles:r}=Ne(e),{containerRef:f,markerRef:w,handleScroll:u,handleScrollend:a,handleItemResize:S,scrollToIndex:A,paddingTop:F,paddingBottom:s,computedItems:P}=lt(e,Ie(e,"items"));return Ce(()=>e.renderless,()=>{function b(){var I,C;const m=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";f.value===document.documentElement?(document[m]("scroll",u,{passive:!0}),document[m]("scrollend",a)):((I=f.value)==null||I[m]("scroll",u,{passive:!0}),(C=f.value)==null||C[m]("scrollend",a))}Re(()=>{f.value=We(d.vnode.el,!0),b(!0)}),he(b)}),oe(()=>{const b=P.value.map(x=>i(Qe,{key:x.index,renderless:e.renderless,"onUpdate:height":m=>S(x.index,m)},{default:m=>{var I;return(I=n.default)==null?void 0:I.call(n,{item:x.raw,index:x.index,...m})}}));return e.renderless?i(z,null,[i("div",{ref:w,class:"v-virtual-scroll__spacer",style:{paddingTop:Y(F.value)}},null),b,i("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Y(s.value)}},null)]):i("div",{ref:f,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:a,style:[r.value,e.style]},[i("div",{ref:w,class:"v-virtual-scroll__container",style:{paddingTop:Y(F.value),paddingBottom:Y(s.value)}},[b])])}),{scrollToIndex:A}}});function ut(e,c){const n=_(!1);let d;function r(u){cancelAnimationFrame(d),n.value=!0,d=requestAnimationFrame(()=>{d=requestAnimationFrame(()=>{n.value=!1})})}async function f(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(n.value){const a=H(n,()=>{a(),u()})}else u()})}async function w(u){var A,F;if(u.key==="Tab"&&((A=c.value)==null||A.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const a=(F=e.value)==null?void 0:F.$el;if(!a)return;(u.key==="Home"||u.key==="End")&&a.scrollTo({top:u.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await f();const S=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const s=a.getBoundingClientRect().top;for(const P of S)if(P.getBoundingClientRect().top>=s){P.focus();break}}else{const s=a.getBoundingClientRect().bottom;for(const P of[...S].reverse())if(P.getBoundingClientRect().bottom<=s){P.focus();break}}}return{onListScroll:r,onListKeydown:w}}const rt=$({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:Ae,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Ee({itemChildren:!1})},"Select"),st=$({...rt(),...De(Pe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ue({transition:{component:$e}})},"VSelect"),St=ae()({name:"VSelect",props:st(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:n}=c;const{t:d}=Fe(),r=N(),f=N(),w=N(),u=fe(e,"menu"),a=D({get:()=>u.value,set:l=>{var t;u.value&&!l&&((t=f.value)==null?void 0:t.\u03A8openChildren)||(u.value=l)}}),{items:S,transformIn:A,transformOut:F}=He(e),s=fe(e,"modelValue",[],l=>A(l===null?[null]:_e(l)),l=>{var o;const t=F(l);return e.multiple?t:(o=t[0])!=null?o:null}),P=D(()=>typeof e.counterValue=="function"?e.counterValue(s.value):typeof e.counterValue=="number"?e.counterValue:s.value.length),b=Le(),x=D(()=>s.value.map(l=>l.value)),m=_(!1),I=D(()=>a.value?e.closeText:e.openText);let C="",j;const R=D(()=>e.hideSelected?S.value.filter(l=>!s.value.some(t=>e.valueComparator(t,l))):S.value),W=D(()=>e.hideNoData&&!R.value.length||e.readonly||(b==null?void 0:b.isReadonly.value)),Q=D(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),T=N(),{onListScroll:G,onListKeydown:q}=ut(T,r);function L(l){e.openOnClear&&(a.value=!0)}function U(){W.value||(a.value=!a.value)}function Z(l){var v,g;if(!l.key||e.readonly||(b==null?void 0:b.isReadonly.value))return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(a.value=!0),["Escape","Tab"].includes(l.key)&&(a.value=!1),l.key==="Home"?(v=T.value)==null||v.focus("first"):l.key==="End"&&((g=T.value)==null||g.focus("last"));const t=1e3;function o(p){const k=p.key.length===1,O=!p.ctrlKey&&!p.metaKey&&!p.altKey;return k&&O}if(e.multiple||!o(l))return;const V=performance.now();V-j>t&&(C=""),C+=l.key.toLowerCase(),j=V;const h=S.value.find(p=>p.title.toLowerCase().startsWith(C));if(h!==void 0){s.value=[h];const p=R.value.indexOf(h);ne&&window.requestAnimationFrame(()=>{var k;p>=0&&((k=w.value)==null||k.scrollToIndex(p))})}}function K(l){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const o=s.value.findIndex(h=>e.valueComparator(h.value,l.value)),V=t==null?!~o:t;if(~o){const h=V?[...s.value,l]:[...s.value];h.splice(o,1),s.value=h}else V&&(s.value=[...s.value,l])}else{const o=t!==!1;s.value=o?[l]:[],ge(()=>{a.value=!1})}}function J(l){var t;(t=T.value)!=null&&t.$el.contains(l.relatedTarget)||(a.value=!1)}function B(){var l;m.value&&((l=r.value)==null||l.focus())}function ee(l){m.value=!0}function X(l){if(l==null)s.value=[];else if(ve(r.value,":autofill")||ve(r.value,":-webkit-autofill")){const t=S.value.find(o=>o.title===l);t&&K(t)}else r.value&&(r.value.value="")}return H(a,()=>{if(!e.hideSelected&&a.value&&s.value.length){const l=R.value.findIndex(t=>s.value.some(o=>e.valueComparator(o.value,t.value)));ne&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=w.value)==null||t.scrollToIndex(l))})}}),H(()=>e.items,(l,t)=>{a.value||m.value&&!t.length&&l.length&&(a.value=!0)}),oe(()=>{const l=!!(e.chips||n.chip),t=!!(!e.hideNoData||R.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),o=s.value.length>0,V=ce.filterProps(e),h=o||!m.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return i(ce,E({ref:r},V,{modelValue:s.value.map(v=>v.props.value).join(", "),"onUpdate:modelValue":X,focused:m.value,"onUpdate:focused":v=>m.value=v,validationValue:s.externalValue,counterValue:P.value,dirty:o,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":s.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:h,"onClick:clear":L,"onMousedown:control":U,onBlur:J,onKeydown:Z,"aria-label":d(I.value),title:d(I.value)}),{...n,default:()=>i(z,null,[i(je,E({ref:f,modelValue:a.value,"onUpdate:modelValue":v=>a.value=v,activator:"parent",contentClass:"v-select__content",disabled:W.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:B},Q.value),{default:()=>{var v;return[t&&i(qe,E({ref:T,selected:x.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:g=>g.preventDefault(),onKeydown:q,onFocusin:ee,onScrollPassive:G,tabindex:"-1","aria-live":"polite",color:(v=e.itemColor)!=null?v:e.color},e.listProps),{default:()=>{var g,p,k,O;return[(g=n["prepend-item"])==null?void 0:g.call(n),!R.value.length&&!e.hideNoData&&((k=(p=n["no-data"])==null?void 0:p.call(n))!=null?k:i(me,{title:d(e.noDataText)},null)),i(ot,{ref:w,renderless:!0,items:R.value},{default:M=>{var se,ie;let{item:y,index:ue,itemRef:we}=M;const re=E(y.props,{ref:we,key:ue,onClick:()=>K(y,null)});return(ie=(se=n.item)==null?void 0:se.call(n,{item:y,index:ue,props:re}))!=null?ie:i(me,E(re,{role:"option"}),{prepend:Se=>{let{isSelected:ke}=Se;return i(z,null,[e.multiple&&!e.hideSelected?i(Ge,{key:y.value,modelValue:ke,ripple:!1,tabindex:"-1"},null):void 0,y.props.prependAvatar&&i(Je,{image:y.props.prependAvatar},null),y.props.prependIcon&&i(pe,{icon:y.props.prependIcon},null)])}})}}),(O=n["append-item"])==null?void 0:O.call(n)]}})]}}),s.value.map((v,g)=>{function p(y){y.stopPropagation(),y.preventDefault(),K(v,!1)}const k={"onClick:close":p,onKeydown(y){y.key!=="Enter"&&y.key!==" "||(y.preventDefault(),y.stopPropagation(),p(y))},onMousedown(y){y.preventDefault(),y.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},O=l?!!n.chip:!!n.selection,M=O?Be(l?n.chip({item:v,index:g,props:k}):n.selection({item:v,index:g})):void 0;if(!(O&&!M))return i("div",{key:v.value,class:"v-select__selection"},[l?n.chip?i(ze,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:v.title}}},{default:()=>[M]}):i(Xe,E({key:"chip",closable:e.closableChips,size:"small",text:v.title,disabled:v.props.disabled},k),null):M!=null?M:i("span",{class:"v-select__selection-text"},[v.title,e.multiple&&g<s.value.length-1&&i("span",{class:"v-select__selection-comma"},[Oe(",")])])])})]),"append-inner":function(){var k;for(var v=arguments.length,g=new Array(v),p=0;p<v;p++)g[p]=arguments[p];return i(z,null,[(k=n["append-inner"])==null?void 0:k.call(n,...g),e.menuIcon?i(pe,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Me({isFocused:m,menu:a,select:K},r)}});export{ot as V,St as a,rt as m,ut as u};
