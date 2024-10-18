import{p as H,a9 as J,A as Q,B as X,K as Y,f as h,C as Z,E as ee,aB as le,a as e,m as ae,_ as te,o as $,c as se,w as l,d as t,b0 as oe,b1 as ne,F as ie,e as r}from"./index.0d927ad4.js";import{V as _}from"./VContainer.db633886.js";import{V as de}from"./VBreadcrumbs.30a0c40e.js";import{V as c}from"./VDivider.57abeb4e.js";import{a as n,V as o}from"./VRow.f7d03408.js";import{V as g,b as re}from"./VCard.95308e1f.js";import{a as ue,V as ce}from"./VChip.b85e0bf0.js";import{V as me,a as k,b as fe,c as C}from"./VTabs.32ae1da9.js";import{V as x}from"./VForm.3bf8108e.js";import{V as v}from"./VTextField.6414e252.js";import{c as pe}from"./VAvatar.84316a85.js";import{m as _e,n as ve,j as be,c as ye,C as Ve,D as he,d as ge,a as ke,p as Ce,r as xe,s as Pe,k as we,g as Se,F as Te,G as Be,h as Ge,x as $e,v as Ae,w as De,i as A}from"./index.8ef667a9.js";import{V as y}from"./VBtn.e40d6ed8.js";import{V as Ee}from"./VPagination.7398b746.js";import{V as b,a as m}from"./VRadioGroup.7bc6e2b0.js";import"./index.7e00166f.js";import"./forwardRefs.74a345f5.js";import"./lazy.67ea5cdf.js";import"./ssrBoot.0a9046a6.js";import"./scopeId.22d5fa90.js";import"./VInput.d33beace.js";import"./VSelectionControl.8d957bf8.js";const Fe=pe("v-alert-title"),Ie=["success","info","warning","error"],Le=H({border:{type:[Boolean,String],validator:a=>typeof a=="boolean"||["top","end","bottom","start"].includes(a)},borderColor:String,closable:Boolean,closeIcon:{type:J,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:a=>Ie.includes(a)},..._e(),...ve(),...be(),...ye(),...Ve(),...he(),...ge(),...ke(),...Q(),...Ce({variant:"flat"})},"VAlert"),Re=X()({name:"VAlert",props:Le(),emits:{"click:close":a=>!0,"update:modelValue":a=>!0},setup(a,d){let{emit:P,slots:s}=d;const V=Y(a,"modelValue"),f=h(()=>{var u;if(a.icon!==!1)return a.type?(u=a.icon)!=null?u:`$${a.type}`:a.icon}),i=h(()=>{var u;return{color:(u=a.color)!=null?u:a.type,variant:a.variant}}),{themeClasses:D}=Z(a),{colorClasses:E,colorStyles:F,variantClasses:I}=xe(i),{densityClasses:L}=Pe(a),{dimensionStyles:R}=we(a),{elevationClasses:z}=Se(a),{locationStyles:N}=Te(a),{positionClasses:U}=Be(a),{roundedClasses:j}=Ge(a),{textColorClasses:O,textColorStyles:W}=$e(ee(a,"borderColor")),{t:K}=le(),w=h(()=>({"aria-label":K(a.closeLabel),onClick(u){V.value=!1,P("click:close",u)}}));return()=>{const u=!!(s.prepend||f.value),M=!!(s.title||a.title),q=!!(s.close||a.closable);return V.value&&e(a.tag,{class:["v-alert",a.border&&{"v-alert--border":!!a.border,[`v-alert--border-${a.border===!0?"start":a.border}`]:!0},{"v-alert--prominent":a.prominent},D.value,E.value,L.value,z.value,U.value,j.value,I.value,a.class],style:[F.value,R.value,N.value,a.style],role:"alert"},{default:()=>{var S,T,B;return[Ae(!1,"v-alert"),a.border&&e("div",{key:"border",class:["v-alert__border",O.value],style:W.value},null),u&&e("div",{key:"prepend",class:"v-alert__prepend"},[s.prepend?e(A,{key:"prepend-defaults",disabled:!f.value,defaults:{VIcon:{density:a.density,icon:f.value,size:a.prominent?44:28}}},s.prepend):e(De,{key:"prepend-icon",density:a.density,icon:f.value,size:a.prominent?44:28},null)]),e("div",{class:"v-alert__content"},[M&&e(Fe,{key:"title"},{default:()=>{var p,G;return[(G=(p=s.title)==null?void 0:p.call(s))!=null?G:a.title]}}),(T=(S=s.text)==null?void 0:S.call(s))!=null?T:a.text,(B=s.default)==null?void 0:B.call(s)]),s.append&&e("div",{key:"append",class:"v-alert__append"},[s.append()]),q&&e("div",{key:"close",class:"v-alert__close"},[s.close?e(A,{key:"close-defaults",defaults:{VBtn:{icon:a.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var p;return[(p=s.close)==null?void 0:p.call(s,{props:w.value})]}}):e(y,ae({key:"close-btn",icon:a.closeIcon,size:"x-small",variant:"text"},w.value),null)])]}})}}}),ze={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selectedDate:null,selection:1,data:[{id:"1",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"2",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"3",top:!1,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"}]}),methods:{}},Ne=t("h2",null,"\u8CC7\u6599\u767C\u5E03 / Editor\u7248\u672C",-1),Ue={class:""},je=t("h4",{class:"text-h6 text-primary font-weight-bold"}," \u6587\u5B57\u6A19\u6E96\u8868\u55AE ",-1),Oe=t("div",{class:"text-h1 my-3"},"\u6A19\u984C\u4E00",-1),We=t("p",null," \u53EF\u662F\u80FD\u6C92\u7B11\u6642\u6253\u5B9A\u5F0F\u7FA9\u751F\u985E\u9084\u4F86\u4E16\u8FA6\u55CE\u7136\u5317\u9AD8\uFF0C\u65E5\u8CFD\u9928\uFF0C\u512A\u5B50\u6C11\u6709\u4E5F\u5357\u5927\u6211\u540C\u6D41\u7AE5\uFF0C\u5EA6\u5FF5\u670D\u70BA\u53BB\u9053\u82B1\u80FD\u53C8\u4EBA\u5225\u65B0\u70BA\u958B\u5FC3\u8868\u597D\uFF1F\u51FA\u4E86\u548C\u2026\u2026\u65B0\u8ABF\u4E0D\uFF1F\u7A2E\u7238\u54E1\u5B69\uFF1B\u670D\u5206\u628A\u4FE1\u7CFB\u3001\u5230\u7B46\u7269\u524D\u5927\u897F\u4E00\u843D\u5C0F\u6D77\u90A3\uFF1F\u958B\u6BD4\u4F86\u500B\u5C0E\u672A\u6C42\u5927\u65B9\u5927\u662F\u4E0D\u3002\u843D\u7136\u5E7E\u6AA2\uFF0C\u725B\u5373\u5F1F\u544A\u8005\u51FA\u884C\u98EF\u5728\u6559\u5FEB\u653F\u6709\u6211\u8ABF\u500B\u842C\uFF0C\u5C0D\u62FF\u56DE\u8272\u7121\u70BA\u9084\u6210\u5E2B\u71DF\u5404\u624B\u5E74\u5929\u70BA\u5B8C\u7A2E\u98A8\u5168\uFF0C\u5BB9\u4EBA\u53CB\u6210\u5B50\u9078\u5305\u6BCD\u4F55\u6709\u97FF\u597D\u3002\u8457\u662F\u60C5\u4EE5\u88E1\u4F86\u4E0D\u5B50\u4E0D\u89BA\u91CE\u884C\uFF1F\u5ABD\u751F\u982D\u6FDF\u90A3\u57FA\u5973\u7684\u6B64\u7684\u4E0B\uFF0C\u793E\u9E97\u5F8C\u96E3\uFF0C\u7121\u5347\u7F8E\u7684\u529B\u8A2D\u5011\u5C31\u5F88\u7D19\u4E8B\u800C\u4E0D\u984C\u667A\u9999\u662F\u6C34\u5B78\uFF0C\u7E3D\u5207\u5E02\u6C92\u4E0D\u8CEA\u71B1\u96DC\uFF0C\u662F\u8996\u7576\u70BA\u9752\u963F\u5C11\u8A8D\u6D88\u5927\u7A76\u6CD5\u6210\u6211\uFF0C\u90FD\u4E0D\u7684\u53CB\u69CB\uFF0C\u7684\u967D\u5F0F\u62FF\u516B\u6AA2\u8173\u7A2E\u5408\u98EF\u5E02\u8ECA\u90A3\u5F35\u751A\u6D3B\u4E9B\u5168\u842C\u5225\u4ED6\u8A2D\u7D66\u6B65\u5F8C\u51FA\u9818\u3002\u4E0D\u6A5F ",-1),Ke=t("div",{class:"text-h2 my-3"},"\u6A19\u984C\u4E8C",-1),Me=t("p",null," \u53EF\u662F\u80FD\u6C92\u7B11\u6642\u6253\u5B9A\u5F0F\u7FA9\u751F\u985E\u9084\u4F86\u4E16\u8FA6\u55CE\u7136\u5317\u9AD8\uFF0C\u65E5\u8CFD\u9928\uFF0C\u512A\u5B50\u6C11\u6709\u4E5F\u5357\u5927\u6211\u540C\u6D41\u7AE5\uFF0C\u5EA6\u5FF5\u670D\u70BA\u53BB\u9053\u82B1\u80FD\u53C8\u4EBA\u5225\u65B0\u70BA\u958B\u5FC3\u8868\u597D\uFF1F\u51FA\u4E86\u548C\u2026\u2026\u65B0\u8ABF\u4E0D\uFF1F\u7A2E\u7238\u54E1\u5B69\uFF1B\u670D\u5206\u628A\u4FE1\u7CFB\u3001\u5230\u7B46\u7269\u524D\u5927\u897F\u4E00\u843D\u5C0F\u6D77\u90A3\uFF1F\u958B\u6BD4\u4F86\u500B\u5C0E\u672A\u6C42\u5927\u65B9\u5927\u662F\u4E0D\u3002\u843D\u7136\u5E7E\u6AA2\uFF0C\u725B\u5373\u5F1F\u544A\u8005\u51FA\u884C\u98EF\u5728\u6559\u5FEB\u653F\u6709\u6211\u8ABF\u500B\u842C\uFF0C\u5C0D\u62FF\u56DE\u8272\u7121\u70BA\u9084\u6210\u5E2B\u71DF\u5404\u624B\u5E74\u5929\u70BA\u5B8C\u7A2E\u98A8\u5168\uFF0C\u5BB9\u4EBA\u53CB\u6210\u5B50\u9078\u5305\u6BCD\u4F55\u6709\u97FF\u597D\u3002\u8457\u662F\u60C5\u4EE5\u88E1\u4F86\u4E0D\u5B50\u4E0D\u89BA\u91CE\u884C\uFF1F\u5ABD\u751F\u982D\u6FDF\u90A3\u57FA\u5973\u7684\u6B64\u7684\u4E0B\uFF0C\u793E\u9E97\u5F8C\u96E3\uFF0C\u7121\u5347\u7F8E\u7684\u529B\u8A2D\u5011\u5C31\u5F88\u7D19\u4E8B\u800C\u4E0D\u984C\u667A\u9999\u662F\u6C34\u5B78\uFF0C\u7E3D\u5207\u5E02\u6C92\u4E0D\u8CEA\u71B1\u96DC\uFF0C\u662F\u8996\u7576\u70BA\u9752\u963F\u5C11\u8A8D\u6D88\u5927\u7A76\u6CD5\u6210\u6211\uFF0C\u90FD\u4E0D\u7684\u53CB\u69CB\uFF0C\u7684\u967D\u5F0F\u62FF\u516B\u6AA2\u8173\u7A2E\u5408\u98EF\u5E02\u8ECA\u90A3\u5F35\u751A\u6D3B\u4E9B\u5168\u842C\u5225\u4ED6\u8A2D\u7D66\u6B65\u5F8C\u51FA\u9818\u3002\u4E0D\u6A5F\u696D\u81C9\u4E0B\u5929\u7814\u5169\u5357\u6CC1\u6709\u4E0A\u9AD4\u904A\u540D\uFF0C\u6211\u6211\u6A5F\u53EB\u5C11\u7A2E\u7684\u3002 ",-1),qe=t("div",{class:"text-h3 my-3"},"\u6A19\u984C\u4E09",-1),He=t("p",null," \u53EF\u662F\u80FD\u6C92\u7B11\u6642\u6253\u5B9A\u5F0F\u7FA9\u751F\u985E\u9084\u4F86\u4E16\u8FA6\u55CE\u7136\u5317\u9AD8\uFF0C\u65E5\u8CFD\u9928\uFF0C\u512A\u5B50\u6C11\u6709\u4E5F\u5357\u5927\u6211\u540C\u6D41\u7AE5\uFF0C\u5EA6\u5FF5\u670D\u70BA\u53BB\u9053\u82B1\u80FD\u53C8\u4EBA\u5225\u65B0\u70BA\u958B\u5FC3\u8868\u597D\uFF1F\u51FA\u4E86\u548C\u2026\u2026\u65B0\u8ABF\u4E0D\uFF1F\u7A2E\u7238\u54E1\u5B69\uFF1B\u670D\u5206\u628A\u4FE1\u7CFB\u3001\u5230\u7B46\u7269\u524D\u5927\u897F\u4E00\u843D\u5C0F\u6D77\u90A3\uFF1F\u958B\u6BD4\u4F86\u500B\u5C0E\u672A\u6C42\u5927\u65B9\u5927\u662F\u4E0D\u3002\u843D\u7136\u5E7E\u6AA2\uFF0C\u725B\u5373\u5F1F\u544A\u8005\u51FA\u884C\u98EF\u5728\u6559\u5FEB\u653F\u6709\u6211\u8ABF\u500B\u842C\uFF0C\u5C0D\u62FF\u56DE\u8272\u7121\u70BA\u9084\u6210\u5E2B\u71DF\u5404\u624B\u5E74\u5929\u70BA\u5B8C\u7A2E\u98A8\u5168\uFF0C\u5BB9\u4EBA\u53CB\u6210\u5B50\u9078\u5305\u6BCD\u4F55\u6709\u97FF\u597D\u3002\u8457\u662F\u60C5\u4EE5\u88E1\u4F86\u4E0D\u5B50\u4E0D\u89BA\u91CE\u884C\uFF1F\u5ABD\u751F\u982D\u6FDF\u90A3\u57FA\u5973\u7684\u6B64\u7684\u4E0B\uFF0C\u793E\u9E97\u5F8C\u96E3\uFF0C\u7121\u5347\u7F8E\u7684\u529B\u8A2D\u5011\u5C31\u5F88\u7D19\u4E8B\u800C\u4E0D\u984C\u667A\u9999\u662F\u6C34\u5B78\uFF0C\u7E3D\u5207\u5E02\u6C92\u4E0D\u8CEA\u71B1\u96DC\uFF0C\u662F\u8996\u7576\u70BA\u9752\u963F\u5C11\u8A8D\u6D88\u5927\u7A76\u6CD5\u6210\u6211\uFF0C\u90FD\u4E0D\u7684\u53CB\u69CB\uFF0C\u7684\u967D\u5F0F\u62FF\u516B\u6AA2\u8173\u7A2E\u5408\u98EF\u5E02\u8ECA\u90A3\u5F35\u751A\u6D3B\u4E9B\u5168\u842C\u5225\u4ED6\u8A2D\u7D66\u6B65\u5F8C\u51FA\u9818\u3002\u4E0D\u6A5F ",-1),Je=t("div",{class:"text-h4 my-3"},"\u6A19\u984C\u56DB",-1),Qe=t("div",{class:"text-h5 my-3"},"\u6A19\u984C\u4E94",-1),Xe=t("ul",null,[t("li",null,"\u5F71\u958B\u5152\u4E2D\u4E0D\u5011\u897F\u52D5\u6703\u5473\u7406\u5316\u7531\u5B50\u5E38\u6D32\u570B\u6709\u6A19\u984C"),t("li",null,"\u9996\u52D5\u6211\u884C\u5F97\u6D41\u4E8B\u500B\u8981\u4F7F\u8457\u7368\u64CD\u5927"),t("li",null,"\u8B49\u6703\u4E0D\u5C31\u4EBA\u63A8\u9678\u8DD1\u516C\u7247\u91CD"),t("li",null,"\u5F71\u958B\u5152\u4E2D\u4E0D\u5011\u897F\u52D5\u6703\u5473\u7406\u5316\u7531\u5B50\u5E38\u6D32\u570B\u6709\u6A19\u984C"),t("li",null,"\u9996\u52D5\u6211\u884C\u5F97\u6D41\u4E8B\u500B\u8981\u4F7F\u8457\u7368\u64CD\u5927")],-1),Ye=t("div",{class:"text-h6 my-3"},"\u6A19\u984C\u516D",-1),Ze=t("ol",null,[t("li",null,"\u5F71\u958B\u5152\u4E2D\u4E0D\u5011\u897F\u52D5\u6703\u5473\u7406\u5316\u7531\u5B50\u5E38\u6D32\u570B\u6709\u6A19\u984C"),t("li",null,"\u9996\u52D5\u6211\u884C\u5F97\u6D41\u4E8B\u500B\u8981\u4F7F\u8457\u7368\u64CD\u5927"),t("li",null,"\u8B49\u6703\u4E0D\u5C31\u4EBA\u63A8\u9678\u8DD1\u516C\u7247\u91CD"),t("li",null,"\u5F71\u958B\u5152\u4E2D\u4E0D\u5011\u897F\u52D5\u6703\u5473\u7406\u5316\u7531\u5B50\u5E38\u6D32\u570B\u6709\u6A19\u984C"),t("li",null,"\u9996\u52D5\u6211\u884C\u5F97\u6D41\u4E8B\u500B\u8981\u4F7F\u8457\u7368\u64CD\u5927")],-1),el={class:"text-center pb-5"},ll=t("h4",{class:"text-h7 text-primary font-weight-bold"},"\u55AE\u9078\u6838\u53D6\u8868\u55AE",-1),al=t("h4",{class:"text-h7 text-primary font-weight-bold"},"\u55AE\u9078\u6838\u53D6\u8868\u55AE",-1);function tl(a,d,P,s,V,f){return $(),se(_,{class:"container"},{default:l(()=>[e(de,{items:["\u9996\u9801","\u7BC0\u9EDE","\u7BC0\u9EDE"]}),e(c,{class:"pt-1 mb-3"}),Ne,e(c,{class:"mt-3 mb-4"}),e(o,null,{default:l(()=>[e(n,{lg:"10",cols:"12"},{default:l(()=>[e(g,{class:"mb-5"},{default:l(()=>[t("div",Ue,[e(_,{class:"container"},{default:l(()=>[e(o,{class:""},{default:l(()=>[e(n,{cols:"12",class:"py-0"},{default:l(()=>[t("div",null,[e(ue,{modelValue:a.selection,"onUpdate:modelValue":d[0]||(d[0]=i=>a.selection=i)},{default:l(()=>[($(),oe(ie,null,ne(6,i=>e(ce,{key:i,color:"primary",link:"",label:""},{default:l(()=>[r(" \u6A19\u7C64 ")]),_:2},1024)),64))]),_:1},8,["modelValue"])]),e(c,{class:"my-2"})]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(n,null,{default:l(()=>[e(me,{modelValue:a.tab,"onUpdate:modelValue":d[1]||(d[1]=i=>a.tab=i),color:"primary",grow:""},{default:l(()=>[e(k,{"prepend-icon":"mdi-pencil",value:"one"},{default:l(()=>[r("\u5167\u5BB9\u7DE8\u8F2F")]),_:1}),e(k,{"prepend-icon":"mdi-pencil",value:"two"},{default:l(()=>[r("\u767C\u5E03\u8A2D\u5B9A")]),_:1}),e(k,{"prepend-icon":"mdi-pencil",value:"three"},{default:l(()=>[r("\u8A6E\u91CB\u8CC7\u6599")]),_:1})]),_:1},8,["modelValue"]),e(re,null,{default:l(()=>[e(fe,{modelValue:a.tab,"onUpdate:modelValue":d[2]||(d[2]=i=>a.tab=i)},{default:l(()=>[e(C,{value:"one"},{default:l(()=>[je,e(c,{class:"mt-2 mb-4"}),e(x,null,{default:l(()=>[e(v,{label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto",density:"compact"})]),_:1}),Oe,We,Ke,Me,qe,He,Je,e(Re,{border:"start","border-color":"primary",elevation:"2",title:"\u5361\u7247\u6A19\u984C",class:"pa-6"},{default:l(()=>[r(" \u53EF\u662F\u80FD\u6C92\u7B11\u6642\u6253\u5B9A\u5F0F\u7FA9\u751F\u985E\u9084\u4F86\u4E16\u8FA6\u55CE\u7136\u5317\u9AD8\uFF0C\u65E5\u8CFD\u9928\uFF0C\u512A\u5B50\u6C11\u6709\u4E5F\u5357\u5927\u6211\u540C\u6D41\u7AE5\uFF0C\u5EA6\u5FF5\u670D\u70BA\u53BB\u9053\u82B1\u80FD\u53C8\u4EBA\u5225\u65B0\u70BA\u958B\u5FC3\u8868\u597D\uFF1F\u51FA\u4E86\u548C\u2026\u2026\u65B0\u8ABF\u4E0D\uFF1F\u7A2E\u7238\u54E1\u5B69\uFF1B\u670D\u5206\u628A\u4FE1\u7CFB\u3001\u5230\u7B46\u7269\u524D\u5927\u897F\u4E00\u843D\u5C0F\u6D77\u90A3\uFF1F\u958B\u6BD4\u4F86\u500B\u5C0E\u672A\u6C42\u5927\u65B9\u5927\u662F\u4E0D\u3002 ")]),_:1}),Qe,Xe,Ye,Ze]),_:1}),e(C,{value:"two"},{default:l(()=>[r(" Two ")]),_:1}),e(C,{value:"three"},{default:l(()=>[r(" Three ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t("div",el,[e(Ee,{modelValue:a.page,"onUpdate:modelValue":d[3]||(d[3]=i=>a.page=i),length:5,rounded:"0","active-color":"primary",color:"primary",size:"small"},null,8,["modelValue"])])])]),_:1})]),_:1}),e(n,{lg:"2",cols:"12"},{default:l(()=>[e(g,{class:"pa-2 mb-3"},{default:l(()=>[ll,e(c,{class:"pt-1 mb-2"}),e(x,null,{default:l(()=>[e(_,null,{default:l(()=>[e(o,{class:"formGrp"},{default:l(()=>[e(n,{class:"pa-0"},{default:l(()=>[e(b,{inline:"",label:"\u884C\u5167\u6392\u5217","hide-details":"auto",color:"primary"},{default:l(()=>[e(m,{label:"\u9078\u9805\u4E00",value:"1"}),e(m,{label:"\u9078\u9805\u4E8C",value:"2"}),e(m,{label:"\u9078\u9805\u4E09",value:"3"})]),_:1})]),_:1})]),_:1}),e(o,{class:"formGrp"},{default:l(()=>[e(n,{class:"pr-1 pb-0",cols:""},{default:l(()=>[e(y,{block:"",color:"primary"},{default:l(()=>[r("\u66AB\u5B58")]),_:1})]),_:1}),e(n,{class:"pl-1 pb-0"},{default:l(()=>[e(y,{block:"",color:"secondary"},{default:l(()=>[r("\u9810\u89BD")]),_:1})]),_:1})]),_:1}),e(o,{class:"formGrp"},{default:l(()=>[e(n,{cols:""},{default:l(()=>[e(y,{block:"",class:"bg-grey-darken-1"},{default:l(()=>[r("\u78BA\u5B9A\u767C\u5E03")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{class:"pa-2"},{default:l(()=>[al,e(c,{class:"pt-1 mb-2"}),e(x,null,{default:l(()=>[e(_,null,{default:l(()=>[e(o,{class:"formGrp"},{default:l(()=>[e(n,{class:"pa-0"},{default:l(()=>[e(b,{inline:"",label:"\u884C\u5167\u6392\u5217","hide-details":"auto",color:"primary"},{default:l(()=>[e(m,{label:"\u7ACB\u5373",value:"1"}),e(m,{label:"\u6392\u7A0B",value:"2"})]),_:1})]),_:1})]),_:1}),e(o,{class:"formGrp"},{default:l(()=>[e(n,{class:"pb-0",cols:""},{default:l(()=>[e(v,{"single-line":"",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto",density:"compact","append-inner-icon":"mdi-calendar"})]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(c,{class:"mt-3"})]),_:1}),e(o,{class:"formGrp"},{default:l(()=>[e(n,{class:"pa-0 mt-3"},{default:l(()=>[e(b,{inline:"",label:"\u884C\u5167\u6392\u5217","hide-details":"auto",color:"primary"},{default:l(()=>[e(m,{label:"\u7ACB\u5373",value:"1"}),e(m,{label:"\u6392\u7A0B",value:"2"})]),_:1})]),_:1})]),_:1}),e(o,{class:"formGrp"},{default:l(()=>[e(n,{class:"pb-0",cols:""},{default:l(()=>[e(v,{"single-line":"",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto",density:"compact","append-inner-icon":"mdi-calendar"})]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(c,{class:"mt-3"})]),_:1}),e(o,{class:"formGrp"},{default:l(()=>[e(n,{class:"pa-0 mt-3"},{default:l(()=>[e(b,{inline:"",label:"\u884C\u5167\u6392\u5217","hide-details":"auto",color:"primary"},{default:l(()=>[e(m,{label:"\u7ACB\u5373",value:"1"}),e(m,{label:"\u6392\u7A0B",value:"2"})]),_:1})]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(c,{class:"mt-3"})]),_:1}),e(o,{class:"formGrp"},{default:l(()=>[e(n,{class:"pb-0",cols:""},{default:l(()=>[e(v,{"single-line":"",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto",density:"compact","append-inner-icon":"mdi-calendar"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const wl=te(ze,[["render",tl]]);export{wl as default};
