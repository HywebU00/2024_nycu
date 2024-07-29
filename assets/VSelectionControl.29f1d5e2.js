import{m as U,n as J,u as _,R as O,w as Q,s as K,x as W,e as X}from"./index.0665af30.js";import{p as h,a9 as D,ag as Y,t as Z,u as $,D as j,d as E,c as n,b as p,J as ee,z as le,y as u,x as v,s as T,r as ae,aI as te,G as R,a5 as oe,a6 as ne,F as ue,i as ie,ak as I,aQ as re,n as ce}from"./index.2cd2b8e2.js";import{b as se}from"./VInput.d7984538.js";const L=Symbol.for("vuetify:selection-control-group"),M=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:D,trueIcon:D,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Y},...U(),...J(),...Z()},"SelectionControlGroup"),de=h({...M({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),be=$()({name:"VSelectionControlGroup",props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:f}=i;const l=j(e,"modelValue"),t=E(),C=n(()=>e.id||`v-selection-control-group-${t}`),c=n(()=>e.name||C.value),a=new Set;return p(L,{modelValue:l,forceUpdate:()=>{a.forEach(o=>o())},onForceUpdate:o=>{a.add(o),ee(()=>{a.delete(o)})}}),le({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),_(()=>{var o;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(o=f.default)==null?void 0:o.call(f)])}),{}}}),ve=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...U(),...M()},"VSelectionControl");function fe(e){const i=ie(L,void 0),{densityClasses:f}=K(e),l=j(e,"modelValue"),t=n(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),C=n(()=>e.falseValue!==void 0?e.falseValue:!1),c=n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=n({get(){const m=i?i.modelValue.value:l.value;return c.value?I(m).some(r=>e.valueComparator(r,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const r=m?t.value:C.value;let y=r;c.value&&(y=m?[...I(l.value),r]:I(l.value).filter(s=>!e.valueComparator(s,t.value))),i?i.modelValue.value=y:l.value=y}}),{textColorClasses:o,textColorStyles:b}=W(n(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:S}=X(n(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),k=n(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:f,trueValue:t,falseValue:C,model:a,textColorClasses:o,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:S,icon:k}}const Ve=$()({name:"VSelectionControl",directives:{Ripple:O},inheritAttrs:!1,props:ve(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:f,slots:l}=i;const{group:t,densityClasses:C,icon:c,model:a,textColorClasses:o,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:S,trueValue:k}=fe(e),m=E(),r=T(!1),y=T(!1),s=ae(),g=n(()=>e.id||`input-${m}`),x=n(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{s.value&&(s.value.checked=a.value)});function F(d){!x.value||(r.value=!0,re(d.target,":focus-visible")!==!1&&(y.value=!0))}function A(){r.value=!1,y.value=!1}function N(d){d.stopPropagation()}function q(d){if(!x.value){s.value&&(s.value.checked=a.value);return}e.readonly&&t&&ce(()=>t.forceUpdate()),a.value=d.target.checked}return _(()=>{var G,P,w;const d=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[z,H]=te(f),B=v("input",R({ref:s,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:A,onFocus:F,onInput:q,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},H),null);return v("div",R({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},C.value,e.class]},z,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",o.value],style:b.value},[(G=l.default)==null?void 0:G.call(l,{backgroundColorClasses:V,backgroundColorStyles:S}),oe(v("div",{class:["v-selection-control__input"]},[(w=(P=l.input)==null?void 0:P.call(l,{model:a,textColorClasses:o,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:S,inputNode:B,icon:c.value,props:{onFocus:F,onBlur:A,id:g.value}}))!=null?w:v(ue,null,[c.value&&v(Q,{key:"icon",icon:c.value},null),B])]),[[ne("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),d&&v(se,{for:g.value,onClick:N},{default:()=>[d]})])}),{isFocused:r,input:s}}});export{Ve as V,M as a,be as b,ve as m};