import{m as g,V as t}from"./VCheckboxBtn.90204f2f.js";import{d as A,u as B,e as l}from"./VInput.f52dc89b.js";import{p as I,ap as U,B as R,K as $,t as D,f as K,aF as M,a as u,m as r}from"./index.d0240885.js";import{u as N}from"./index.d41e6895.js";const j=I({...A(),...U(g(),["inline"])},"VCheckbox"),G=R()({name:"VCheckbox",inheritAttrs:!1,props:j(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:a}=c;const o=$(e,"modelValue"),{isFocused:n,focus:i,blur:m}=B(e),V=D(),p=K(()=>e.id||`checkbox-${V}`);return N(()=>{const[b,f]=M(d),k=l.filterProps(e),v=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},b,k,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,id:p.value,focused:n.value,style:e.style}),{...a,default:s=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=s;return u(t,r(v,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},f,{error:y.value===!1,modelValue:o.value,"onUpdate:modelValue":F=>o.value=F,onFocus:i,onBlur:m}),a)}})}),{}}});export{G as V};