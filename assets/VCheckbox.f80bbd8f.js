import{m as A,V as t}from"./VCheckboxBtn.950fcc78.js";import{e as B,b as F,f as l}from"./VInput.c318c4b4.js";import{p as I,ap as U,B as K,K as R,t as $,f as D,aK as M,a as r,m as u}from"./index.be9352ca.js";import{u as N}from"./index.95f4c41b.js";const j=I({...B(),...U(A(),["inline"])},"VCheckbox"),G=K()({name:"VCheckbox",inheritAttrs:!1,props:j(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:a}=c;const o=R(e,"modelValue"),{isFocused:n,focus:i,blur:m}=F(e),V=$(),p=D(()=>e.id||`checkbox-${V}`);return N(()=>{const[b,f]=M(d),k=l.filterProps(e),v=t.filterProps(e);return r(l,u({class:["v-checkbox",e.class]},b,k,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,id:p.value,focused:n.value,style:e.style}),{...a,default:s=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=s;return r(t,u(v,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},f,{error:y.value===!1,modelValue:o.value,"onUpdate:modelValue":g=>o.value=g,onFocus:i,onBlur:m}),a)}})}),{}}});export{G as V};
