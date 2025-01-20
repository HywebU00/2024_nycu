import{_ as v,o as y,c as g,w as a,a as l,d as e,aH as w,aI as x,F as G,f as o}from"./index.eb43fa57.js";import{V as c}from"./VContainer.fc049310.js";import{V as k}from"./VBreadcrumbs.a94c73d9.js";import{V as i}from"./VDivider.5c17c73a.js";import{a as s,V as t}from"./VRow.e6ee80f5.js";import{V as f,b as C}from"./VCard.dc086846.js";import{a as T,V as B}from"./VChip.5ffce6c7.js";import{V as E,a as _,b as F,c as b}from"./VTabs.c8549025.js";import{V}from"./VForm.e233beeb.js";import{V as m}from"./VTextField.5ea8292b.js";import{V as N}from"./VAlert.158ee363.js";import{V as U}from"./VPagination.0a3c2854.js";import{V as p,a as r}from"./VRadioGroup.b9e004d2.js";import{V as h}from"./VBtn.2b7ea710.js";import"./index.77990c4a.js";import"./VAvatar.f38a976a.js";import"./index.5754ae22.js";import"./group.990b857b.js";import"./forwardRefs.34034356.js";import"./easing.c06eec13.js";import"./lazy.1b928398.js";import"./ssrBoot.526f0ace.js";import"./scopeId.23bd787d.js";import"./VInput.86d69997.js";import"./VSelectionControl.558e9fd6.js";const $={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selectedDate:null,selection:1,data:[{id:"1",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"2",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"3",top:!1,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"}]}),methods:{}},R=e("h2",null,"\u8CC7\u6599\u767C\u5E03 / Editor\u7248\u672C",-1),S={class:""},D=e("h4",{class:"text-h6 text-primary font-weight-bold"}," \u6587\u5B57\u6A19\u6E96\u8868\u55AE ",-1),I=e("div",{class:"text-h1 my-3"},"\u6A19\u984C\u4E00",-1),W=e("p",null," \u53EF\u662F\u80FD\u6C92\u7B11\u6642\u6253\u5B9A\u5F0F\u7FA9\u751F\u985E\u9084\u4F86\u4E16\u8FA6\u55CE\u7136\u5317\u9AD8\uFF0C\u65E5\u8CFD\u9928\uFF0C\u512A\u5B50\u6C11\u6709\u4E5F\u5357\u5927\u6211\u540C\u6D41\u7AE5\uFF0C\u5EA6\u5FF5\u670D\u70BA\u53BB\u9053\u82B1\u80FD\u53C8\u4EBA\u5225\u65B0\u70BA\u958B\u5FC3\u8868\u597D\uFF1F\u51FA\u4E86\u548C\u2026\u2026\u65B0\u8ABF\u4E0D\uFF1F\u7A2E\u7238\u54E1\u5B69\uFF1B\u670D\u5206\u628A\u4FE1\u7CFB\u3001\u5230\u7B46\u7269\u524D\u5927\u897F\u4E00\u843D\u5C0F\u6D77\u90A3\uFF1F\u958B\u6BD4\u4F86\u500B\u5C0E\u672A\u6C42\u5927\u65B9\u5927\u662F\u4E0D\u3002\u843D\u7136\u5E7E\u6AA2\uFF0C\u725B\u5373\u5F1F\u544A\u8005\u51FA\u884C\u98EF\u5728\u6559\u5FEB\u653F\u6709\u6211\u8ABF\u500B\u842C\uFF0C\u5C0D\u62FF\u56DE\u8272\u7121\u70BA\u9084\u6210\u5E2B\u71DF\u5404\u624B\u5E74\u5929\u70BA\u5B8C\u7A2E\u98A8\u5168\uFF0C\u5BB9\u4EBA\u53CB\u6210\u5B50\u9078\u5305\u6BCD\u4F55\u6709\u97FF\u597D\u3002\u8457\u662F\u60C5\u4EE5\u88E1\u4F86\u4E0D\u5B50\u4E0D\u89BA\u91CE\u884C\uFF1F\u5ABD\u751F\u982D\u6FDF\u90A3\u57FA\u5973\u7684\u6B64\u7684\u4E0B\uFF0C\u793E\u9E97\u5F8C\u96E3\uFF0C\u7121\u5347\u7F8E\u7684\u529B\u8A2D\u5011\u5C31\u5F88\u7D19\u4E8B\u800C\u4E0D\u984C\u667A\u9999\u662F\u6C34\u5B78\uFF0C\u7E3D\u5207\u5E02\u6C92\u4E0D\u8CEA\u71B1\u96DC\uFF0C\u662F\u8996\u7576\u70BA\u9752\u963F\u5C11\u8A8D\u6D88\u5927\u7A76\u6CD5\u6210\u6211\uFF0C\u90FD\u4E0D\u7684\u53CB\u69CB\uFF0C\u7684\u967D\u5F0F\u62FF\u516B\u6AA2\u8173\u7A2E\u5408\u98EF\u5E02\u8ECA\u90A3\u5F35\u751A\u6D3B\u4E9B\u5168\u842C\u5225\u4ED6\u8A2D\u7D66\u6B65\u5F8C\u51FA\u9818\u3002\u4E0D\u6A5F ",-1),z=e("div",{class:"text-h2 my-3"},"\u6A19\u984C\u4E8C",-1),A=e("p",null," \u53EF\u662F\u80FD\u6C92\u7B11\u6642\u6253\u5B9A\u5F0F\u7FA9\u751F\u985E\u9084\u4F86\u4E16\u8FA6\u55CE\u7136\u5317\u9AD8\uFF0C\u65E5\u8CFD\u9928\uFF0C\u512A\u5B50\u6C11\u6709\u4E5F\u5357\u5927\u6211\u540C\u6D41\u7AE5\uFF0C\u5EA6\u5FF5\u670D\u70BA\u53BB\u9053\u82B1\u80FD\u53C8\u4EBA\u5225\u65B0\u70BA\u958B\u5FC3\u8868\u597D\uFF1F\u51FA\u4E86\u548C\u2026\u2026\u65B0\u8ABF\u4E0D\uFF1F\u7A2E\u7238\u54E1\u5B69\uFF1B\u670D\u5206\u628A\u4FE1\u7CFB\u3001\u5230\u7B46\u7269\u524D\u5927\u897F\u4E00\u843D\u5C0F\u6D77\u90A3\uFF1F\u958B\u6BD4\u4F86\u500B\u5C0E\u672A\u6C42\u5927\u65B9\u5927\u662F\u4E0D\u3002\u843D\u7136\u5E7E\u6AA2\uFF0C\u725B\u5373\u5F1F\u544A\u8005\u51FA\u884C\u98EF\u5728\u6559\u5FEB\u653F\u6709\u6211\u8ABF\u500B\u842C\uFF0C\u5C0D\u62FF\u56DE\u8272\u7121\u70BA\u9084\u6210\u5E2B\u71DF\u5404\u624B\u5E74\u5929\u70BA\u5B8C\u7A2E\u98A8\u5168\uFF0C\u5BB9\u4EBA\u53CB\u6210\u5B50\u9078\u5305\u6BCD\u4F55\u6709\u97FF\u597D\u3002\u8457\u662F\u60C5\u4EE5\u88E1\u4F86\u4E0D\u5B50\u4E0D\u89BA\u91CE\u884C\uFF1F\u5ABD\u751F\u982D\u6FDF\u90A3\u57FA\u5973\u7684\u6B64\u7684\u4E0B\uFF0C\u793E\u9E97\u5F8C\u96E3\uFF0C\u7121\u5347\u7F8E\u7684\u529B\u8A2D\u5011\u5C31\u5F88\u7D19\u4E8B\u800C\u4E0D\u984C\u667A\u9999\u662F\u6C34\u5B78\uFF0C\u7E3D\u5207\u5E02\u6C92\u4E0D\u8CEA\u71B1\u96DC\uFF0C\u662F\u8996\u7576\u70BA\u9752\u963F\u5C11\u8A8D\u6D88\u5927\u7A76\u6CD5\u6210\u6211\uFF0C\u90FD\u4E0D\u7684\u53CB\u69CB\uFF0C\u7684\u967D\u5F0F\u62FF\u516B\u6AA2\u8173\u7A2E\u5408\u98EF\u5E02\u8ECA\u90A3\u5F35\u751A\u6D3B\u4E9B\u5168\u842C\u5225\u4ED6\u8A2D\u7D66\u6B65\u5F8C\u51FA\u9818\u3002\u4E0D\u6A5F\u696D\u81C9\u4E0B\u5929\u7814\u5169\u5357\u6CC1\u6709\u4E0A\u9AD4\u904A\u540D\uFF0C\u6211\u6211\u6A5F\u53EB\u5C11\u7A2E\u7684\u3002 ",-1),H=e("div",{class:"text-h3 my-3"},"\u6A19\u984C\u4E09",-1),L=e("p",null," \u53EF\u662F\u80FD\u6C92\u7B11\u6642\u6253\u5B9A\u5F0F\u7FA9\u751F\u985E\u9084\u4F86\u4E16\u8FA6\u55CE\u7136\u5317\u9AD8\uFF0C\u65E5\u8CFD\u9928\uFF0C\u512A\u5B50\u6C11\u6709\u4E5F\u5357\u5927\u6211\u540C\u6D41\u7AE5\uFF0C\u5EA6\u5FF5\u670D\u70BA\u53BB\u9053\u82B1\u80FD\u53C8\u4EBA\u5225\u65B0\u70BA\u958B\u5FC3\u8868\u597D\uFF1F\u51FA\u4E86\u548C\u2026\u2026\u65B0\u8ABF\u4E0D\uFF1F\u7A2E\u7238\u54E1\u5B69\uFF1B\u670D\u5206\u628A\u4FE1\u7CFB\u3001\u5230\u7B46\u7269\u524D\u5927\u897F\u4E00\u843D\u5C0F\u6D77\u90A3\uFF1F\u958B\u6BD4\u4F86\u500B\u5C0E\u672A\u6C42\u5927\u65B9\u5927\u662F\u4E0D\u3002\u843D\u7136\u5E7E\u6AA2\uFF0C\u725B\u5373\u5F1F\u544A\u8005\u51FA\u884C\u98EF\u5728\u6559\u5FEB\u653F\u6709\u6211\u8ABF\u500B\u842C\uFF0C\u5C0D\u62FF\u56DE\u8272\u7121\u70BA\u9084\u6210\u5E2B\u71DF\u5404\u624B\u5E74\u5929\u70BA\u5B8C\u7A2E\u98A8\u5168\uFF0C\u5BB9\u4EBA\u53CB\u6210\u5B50\u9078\u5305\u6BCD\u4F55\u6709\u97FF\u597D\u3002\u8457\u662F\u60C5\u4EE5\u88E1\u4F86\u4E0D\u5B50\u4E0D\u89BA\u91CE\u884C\uFF1F\u5ABD\u751F\u982D\u6FDF\u90A3\u57FA\u5973\u7684\u6B64\u7684\u4E0B\uFF0C\u793E\u9E97\u5F8C\u96E3\uFF0C\u7121\u5347\u7F8E\u7684\u529B\u8A2D\u5011\u5C31\u5F88\u7D19\u4E8B\u800C\u4E0D\u984C\u667A\u9999\u662F\u6C34\u5B78\uFF0C\u7E3D\u5207\u5E02\u6C92\u4E0D\u8CEA\u71B1\u96DC\uFF0C\u662F\u8996\u7576\u70BA\u9752\u963F\u5C11\u8A8D\u6D88\u5927\u7A76\u6CD5\u6210\u6211\uFF0C\u90FD\u4E0D\u7684\u53CB\u69CB\uFF0C\u7684\u967D\u5F0F\u62FF\u516B\u6AA2\u8173\u7A2E\u5408\u98EF\u5E02\u8ECA\u90A3\u5F35\u751A\u6D3B\u4E9B\u5168\u842C\u5225\u4ED6\u8A2D\u7D66\u6B65\u5F8C\u51FA\u9818\u3002\u4E0D\u6A5F ",-1),P=e("div",{class:"text-h4 my-3"},"\u6A19\u984C\u56DB",-1),j=e("div",{class:"text-h5 my-3"},"\u6A19\u984C\u4E94",-1),q=e("ul",null,[e("li",null,"\u5F71\u958B\u5152\u4E2D\u4E0D\u5011\u897F\u52D5\u6703\u5473\u7406\u5316\u7531\u5B50\u5E38\u6D32\u570B\u6709\u6A19\u984C"),e("li",null,"\u9996\u52D5\u6211\u884C\u5F97\u6D41\u4E8B\u500B\u8981\u4F7F\u8457\u7368\u64CD\u5927"),e("li",null,"\u8B49\u6703\u4E0D\u5C31\u4EBA\u63A8\u9678\u8DD1\u516C\u7247\u91CD"),e("li",null,"\u5F71\u958B\u5152\u4E2D\u4E0D\u5011\u897F\u52D5\u6703\u5473\u7406\u5316\u7531\u5B50\u5E38\u6D32\u570B\u6709\u6A19\u984C"),e("li",null,"\u9996\u52D5\u6211\u884C\u5F97\u6D41\u4E8B\u500B\u8981\u4F7F\u8457\u7368\u64CD\u5927")],-1),J=e("div",{class:"text-h6 my-3"},"\u6A19\u984C\u516D",-1),K=e("ol",null,[e("li",null,"\u5F71\u958B\u5152\u4E2D\u4E0D\u5011\u897F\u52D5\u6703\u5473\u7406\u5316\u7531\u5B50\u5E38\u6D32\u570B\u6709\u6A19\u984C"),e("li",null,"\u9996\u52D5\u6211\u884C\u5F97\u6D41\u4E8B\u500B\u8981\u4F7F\u8457\u7368\u64CD\u5927"),e("li",null,"\u8B49\u6703\u4E0D\u5C31\u4EBA\u63A8\u9678\u8DD1\u516C\u7247\u91CD"),e("li",null,"\u5F71\u958B\u5152\u4E2D\u4E0D\u5011\u897F\u52D5\u6703\u5473\u7406\u5316\u7531\u5B50\u5E38\u6D32\u570B\u6709\u6A19\u984C"),e("li",null,"\u9996\u52D5\u6211\u884C\u5F97\u6D41\u4E8B\u500B\u8981\u4F7F\u8457\u7368\u64CD\u5927")],-1),M={class:"text-center pb-5"},O=e("h4",{class:"text-h7 text-primary font-weight-bold"},"\u55AE\u9078\u6838\u53D6\u8868\u55AE",-1),Q=e("h4",{class:"text-h7 text-primary font-weight-bold"},"\u55AE\u9078\u6838\u53D6\u8868\u55AE",-1);function X(n,u,Y,Z,ll,al){return y(),g(c,{class:"container"},{default:a(()=>[l(k,{items:["\u9996\u9801","\u7BC0\u9EDE","\u7BC0\u9EDE"]}),l(i,{class:"pt-1 mb-3"}),R,l(i,{class:"mt-3 mb-4"}),l(t,null,{default:a(()=>[l(s,{lg:"10",cols:"12"},{default:a(()=>[l(f,{class:"mb-5"},{default:a(()=>[e("div",S,[l(c,{class:"container"},{default:a(()=>[l(t,{class:""},{default:a(()=>[l(s,{cols:"12",class:"py-0"},{default:a(()=>[e("div",null,[l(T,{modelValue:n.selection,"onUpdate:modelValue":u[0]||(u[0]=d=>n.selection=d)},{default:a(()=>[(y(),w(G,null,x(6,d=>l(B,{key:d,color:"primary",link:"",label:""},{default:a(()=>[o(" \u6A19\u7C64 ")]),_:2},1024)),64))]),_:1},8,["modelValue"])]),l(i,{class:"my-2"})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(s,null,{default:a(()=>[l(E,{modelValue:n.tab,"onUpdate:modelValue":u[1]||(u[1]=d=>n.tab=d),color:"primary",grow:""},{default:a(()=>[l(_,{"prepend-icon":"mdi-pencil",value:"one"},{default:a(()=>[o("\u5167\u5BB9\u7DE8\u8F2F")]),_:1}),l(_,{"prepend-icon":"mdi-pencil",value:"two"},{default:a(()=>[o("\u767C\u5E03\u8A2D\u5B9A")]),_:1}),l(_,{"prepend-icon":"mdi-pencil",value:"three"},{default:a(()=>[o("\u8A6E\u91CB\u8CC7\u6599")]),_:1})]),_:1},8,["modelValue"]),l(C,null,{default:a(()=>[l(F,{modelValue:n.tab,"onUpdate:modelValue":u[2]||(u[2]=d=>n.tab=d)},{default:a(()=>[l(b,{value:"one"},{default:a(()=>[D,l(i,{class:"mt-2 mb-4"}),l(V,null,{default:a(()=>[l(m,{label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto",density:"compact"})]),_:1}),I,W,z,A,H,L,P,l(N,{border:"start","border-color":"primary",elevation:"2",title:"\u5361\u7247\u6A19\u984C",class:"pa-6"},{default:a(()=>[o(" \u53EF\u662F\u80FD\u6C92\u7B11\u6642\u6253\u5B9A\u5F0F\u7FA9\u751F\u985E\u9084\u4F86\u4E16\u8FA6\u55CE\u7136\u5317\u9AD8\uFF0C\u65E5\u8CFD\u9928\uFF0C\u512A\u5B50\u6C11\u6709\u4E5F\u5357\u5927\u6211\u540C\u6D41\u7AE5\uFF0C\u5EA6\u5FF5\u670D\u70BA\u53BB\u9053\u82B1\u80FD\u53C8\u4EBA\u5225\u65B0\u70BA\u958B\u5FC3\u8868\u597D\uFF1F\u51FA\u4E86\u548C\u2026\u2026\u65B0\u8ABF\u4E0D\uFF1F\u7A2E\u7238\u54E1\u5B69\uFF1B\u670D\u5206\u628A\u4FE1\u7CFB\u3001\u5230\u7B46\u7269\u524D\u5927\u897F\u4E00\u843D\u5C0F\u6D77\u90A3\uFF1F\u958B\u6BD4\u4F86\u500B\u5C0E\u672A\u6C42\u5927\u65B9\u5927\u662F\u4E0D\u3002 ")]),_:1}),j,q,J,K]),_:1}),l(b,{value:"two"},{default:a(()=>[o(" Two ")]),_:1}),l(b,{value:"three"},{default:a(()=>[o(" Three ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e("div",M,[l(U,{modelValue:n.page,"onUpdate:modelValue":u[3]||(u[3]=d=>n.page=d),length:5,rounded:"0","active-color":"primary",color:"primary",size:"small"},null,8,["modelValue"])])])]),_:1})]),_:1}),l(s,{lg:"2",cols:"12"},{default:a(()=>[l(f,{class:"pa-2 mb-3"},{default:a(()=>[O,l(i,{class:"pt-1 mb-2"}),l(V,null,{default:a(()=>[l(c,null,{default:a(()=>[l(t,{class:"formGrp"},{default:a(()=>[l(s,{class:"pa-0"},{default:a(()=>[l(p,{inline:"",label:"\u884C\u5167\u6392\u5217","hide-details":"auto",color:"primary"},{default:a(()=>[l(r,{label:"\u9078\u9805\u4E00",value:"1"}),l(r,{label:"\u9078\u9805\u4E8C",value:"2"}),l(r,{label:"\u9078\u9805\u4E09",value:"3"})]),_:1})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(s,{class:"pr-1 pb-0",cols:""},{default:a(()=>[l(h,{block:"",color:"primary"},{default:a(()=>[o("\u66AB\u5B58")]),_:1})]),_:1}),l(s,{class:"pl-1 pb-0"},{default:a(()=>[l(h,{block:"",color:"secondary"},{default:a(()=>[o("\u9810\u89BD")]),_:1})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(s,{cols:""},{default:a(()=>[l(h,{block:"",class:"bg-grey-darken-1"},{default:a(()=>[o("\u78BA\u5B9A\u767C\u5E03")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(f,{class:"pa-2"},{default:a(()=>[Q,l(i,{class:"pt-1 mb-2"}),l(V,null,{default:a(()=>[l(c,null,{default:a(()=>[l(t,{class:"formGrp"},{default:a(()=>[l(s,{class:"pa-0"},{default:a(()=>[l(p,{inline:"",label:"\u884C\u5167\u6392\u5217","hide-details":"auto",color:"primary"},{default:a(()=>[l(r,{label:"\u7ACB\u5373",value:"1"}),l(r,{label:"\u6392\u7A0B",value:"2"})]),_:1})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(s,{class:"pb-0",cols:""},{default:a(()=>[l(m,{"single-line":"",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto",density:"compact","append-inner-icon":"mdi-calendar"})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(i,{class:"mt-3"})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(s,{class:"pa-0 mt-3"},{default:a(()=>[l(p,{inline:"",label:"\u884C\u5167\u6392\u5217","hide-details":"auto",color:"primary"},{default:a(()=>[l(r,{label:"\u7ACB\u5373",value:"1"}),l(r,{label:"\u6392\u7A0B",value:"2"})]),_:1})]),_:1})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(s,{class:"pb-0",cols:""},{default:a(()=>[l(m,{"single-line":"",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto",density:"compact","append-inner-icon":"mdi-calendar"})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(i,{class:"mt-3"})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(s,{class:"pa-0 mt-3"},{default:a(()=>[l(p,{inline:"",label:"\u884C\u5167\u6392\u5217","hide-details":"auto",color:"primary"},{default:a(()=>[l(r,{label:"\u7ACB\u5373",value:"1"}),l(r,{label:"\u6392\u7A0B",value:"2"})]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(i,{class:"mt-3"})]),_:1}),l(t,{class:"formGrp"},{default:a(()=>[l(s,{class:"pb-0",cols:""},{default:a(()=>[l(m,{"single-line":"",label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE","hide-details":"auto",density:"compact","append-inner-icon":"mdi-calendar"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Tl=v($,[["render",X]]);export{Tl as default};
