import{m as k,V as n,a as C,b as A}from"./VSelectionControl.c402abe1.js";import{p as f,u as V,x as o,G as i,ap as O,a9 as m,d as h,c as x,D as F,aI as U,F as D}from"./index.6133225e.js";import{u as y}from"./index.852dac69.js";import{m as N,V as p,b as L}from"./VInput.9af54aa2.js";const M=f({...k({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),B=V()({name:"VRadio",props:M(),setup(e,l){let{slots:r}=l;return y(()=>{const a=n.filterProps(e);return o(n,i(a,{class:["v-radio",e.class],style:e.style,type:"radio"}),r)}),{}}});const T=f({height:{type:[Number,String],default:"auto"},...N(),...O(C(),["multiple"]),trueIcon:{type:m,default:"$radioOn"},falseIcon:{type:m,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),E=V()({name:"VRadioGroup",inheritAttrs:!1,props:T(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:r,slots:a}=l;const b=h(),c=x(()=>e.id||`radio-group-${b}`),t=F(e,"modelValue");return y(()=>{const[v,I]=U(r),P=p.filterProps(e),R=n.filterProps(e),s=a.label?a.label({label:e.label,props:{for:c.value}}):e.label;return o(p,i({class:["v-radio-group",e.class],style:e.style},v,P,{modelValue:t.value,"onUpdate:modelValue":u=>t.value=u,id:c.value}),{...a,default:u=>{let{id:d,messagesId:g,isDisabled:G,isReadonly:S}=u;return o(D,null,[s&&o(L,{id:d.value},{default:()=>[s]}),o(A,i(R,{id:d.value,"aria-describedby":g.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:S.value,"aria-labelledby":s?d.value:void 0,multiple:!1},I,{modelValue:t.value,"onUpdate:modelValue":$=>t.value=$}),a)])}})}),{}}});export{E as V,B as a};
