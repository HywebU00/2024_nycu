import{m as i,n as g,d as f,F as V,a as y,p as k,r as C,s as P,h as S,G as h,u as z,V as A,w as I,i as D,v as x}from"./index.77990c4a.js";import{C as o,aA as B,az as F,a2 as R,p as T,aa as _,B as w,D as G,a as l}from"./index.eb43fa57.js";function b(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return o()({name:e!=null?e:B(F(a.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...i()},setup(t,u){let{slots:s}=u;return()=>{var n;return R(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const N=T({start:Boolean,end:Boolean,icon:_,image:String,text:String,...i(),...g(),...f(),...V(),...y(),...w(),...k({variant:"flat"})},"VAvatar"),j=o()({name:"VAvatar",props:N(),setup(a,r){let{slots:e}=r;const{themeClasses:t}=G(a),{colorClasses:u,colorStyles:s,variantClasses:n}=C(a),{densityClasses:c}=P(a),{roundedClasses:m}=S(a),{sizeClasses:v,sizeStyles:d}=h(a);return z(()=>l(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,u.value,c.value,m.value,v.value,n.value,a.class],style:[s.value,d.value,a.style]},{default:()=>[e.default?l(D,{key:"content-defaults",defaults:{VImg:{cover:!0,image:a.image},VIcon:{icon:a.icon}}},{default:()=>[e.default()]}):a.image?l(A,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?l(I,{key:"icon",icon:a.icon},null):a.text,x(!1,"v-avatar")]})),{}}});export{j as V,b as c};
