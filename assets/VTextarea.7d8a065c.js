import{p as ee,ap as T,B as te,K as ae,f as V,g as v,u as ne,M as le,J as oe,I as m,y as ie,aF as ue,a as o,m as I,F as k,a5 as _,a6 as re,aN as se,l as R,aH as ce,z as de,H as fe}from"./index.72c80cda.js";import{a as ve,f as me,b as xe,c as ge}from"./VTextField.cbfb7e13.js";import{d as he,u as we,e as G}from"./VInput.0dde04a6.js";import{f as Ve}from"./forwardRefs.74a345f5.js";import{I as ye,u as Fe}from"./index.8f8fbca9.js";const Ce=ee({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...T(he(),["centerAffix"]),...T(ve(),["centerAffix"])},"VTextarea"),Se=te()({name:"VTextarea",directives:{Intersect:ye},inheritAttrs:!1,props:Ce(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:y,emit:b,slots:u}=D;const i=ae(e,"modelValue"),{isFocused:f,focus:E,blur:U}=we(e),O=V(()=>typeof e.counterValue=="function"?e.counterValue(i.value):(i.value||"").toString().length),$=V(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,l;!e.autofocus||!t||(l=(a=n[0].target)==null?void 0:a.focus)==null||l.call(a)}const S=v(),x=v(),H=ne(""),g=v(),p=V(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function J(t){F(),b("click:control",t)}function K(t){b("mousedown:control",t)}function q(t){t.stopPropagation(),F(),R(()=>{i.value="",ce(e["onClick:clear"],t)})}function L(t){var a;const n=t.target;if(i.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const l=[n.selectionStart,n.selectionEnd];R(()=>{n.selectionStart=l[0],n.selectionEnd=l[1]})}}const c=v(),M=v(+e.rows),Q=V(()=>["plain","underlined"].includes(e.variant));le(()=>{e.autoGrow||(M.value=+e.rows)});function d(){!e.autoGrow||R(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),l=c.value.scrollHeight,h=parseFloat(t.lineHeight),C=Math.max(parseFloat(e.rows)*h+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),P=parseFloat(e.maxRows)*h+a||1/0,s=fe(l!=null?l:0,C,P);M.value=Math.floor((s-a)/h),H.value=de(s)})}oe(d),m(i,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),ie(()=>{r==null||r.disconnect()}),Fe(()=>{const t=!!(u.counter||e.counter||e.counterValue),n=!!(t||u.details),[a,l]=ue(y),{modelValue:h,...C}=G.filterProps(e),P=me(e);return o(G,I({ref:S,modelValue:i.value,"onUpdate:modelValue":s=>i.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":Q.value},e.class],style:e.style},a,C,{centerAffix:!1,focused:f.value}),{...u,default:s=>{let{id:w,isDisabled:A,isDirty:B,isReadonly:W,isValid:X}=s;return o(xe,I({ref:x,style:{"--v-textarea-control-height":H.value},onClick:J,onMousedown:K,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},P,{id:w.value,active:p.value||B.value,centerAffix:!1,dirty:B.value||e.dirty,disabled:A.value,focused:f.value,error:X.value===!1}),{...u,default:Y=>{let{props:{class:N,...z}}=Y;return o(k,null,[e.prefix&&o("span",{class:"v-text-field__prefix"},[e.prefix]),_(o("textarea",I({ref:g,class:N,value:i.value,onInput:L,autofocus:e.autofocus,readonly:W.value,disabled:A.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},z,l),null),[[re("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&_(o("textarea",{class:[N,"v-textarea__sizer"],id:`${z.id}-sizer`,"onUpdate:modelValue":Z=>i.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[se,i.value]]),e.suffix&&o("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var w;return o(k,null,[(w=u.details)==null?void 0:w.call(u,s),t&&o(k,null,[o("span",null,null),o(ge,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},u.counter)])])}:void 0})}),Ve({},S,x,g)}});export{Se as V};
