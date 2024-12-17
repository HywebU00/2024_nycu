import{d as b}from"./datepickerModal.30fffb0c.js";import{Q as h}from"./vue-quill.snow.1a1c4a71.js";import{_ as g,r as u,o as x,c as y,w as e,d as l,a as t,e as o}from"./index.be9352ca.js";import{V as c}from"./VContainer.482bec17.js";import{V as s,a}from"./VRow.e9fbf69c.js";import{a as i,V as f}from"./VCard.544eb073.js";import{V as m}from"./VForm.fbc1b015.js";import{V}from"./VTextField.1331bac9.js";import{V as v}from"./VAlert.a041a755.js";import{a as p}from"./VSelect.97d872b5.js";import{V as r}from"./VCheckbox.f80bbd8f.js";import{V as d}from"./VBtn.3ca639e7.js";import{V as w}from"./VDivider.a4f8b243.js";import"./VAvatar.669e573e.js";import"./index.95f4c41b.js";import"./index.0ecc5ef4.js";import"./VSheet.36925e33.js";import"./VMenu.017660a6.js";import"./forwardRefs.74a345f5.js";import"./delay.9c1167ed.js";import"./lazy.adeebdd8.js";import"./scopeId.24522e9a.js";import"./VInput.c318c4b4.js";import"./VList.b5460b72.js";import"./ssrBoot.cb851e3c.js";import"./group.658edde9.js";import"./VCheckboxBtn.950fcc78.js";import"./VSelectionControl.de59e22a.js";import"./VChip.47bd2526.js";const k={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,visible:!1,expand:!1,items:[{title:"\u6536\u8CBB\u9805\u76EEA",value:1,props:{appendIcon:"mdi-minus-box-outline"}},{title:"\u6536\u8CBB\u9805\u76EEB",value:2,props:{appendIcon:"mdi-minus-box-outline"}},{title:"\u6536\u8CBB\u9805\u76EEC",value:3,props:{appendIcon:"mdi-plus-box"}},{title:"\u6536\u8CBB\u9805\u76EED",value:4,props:{appendIcon:"mdi-minus-box-outline"}}],data:[{id:"1",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"2",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"3",top:!1,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"}],headers:[{align:"center",width:"30px",key:"delete",sortable:!1,title:"\u522A\u9664"},{title:"\u6392\u5E8F",key:"num",align:"center",width:"30px"},{title:"\u6536\u8CBB\u9805\u76EE",key:"name",align:"start",sortable:!1,width:"300px"},{title:"\u7E73\u8CBB\u91D1\u984D",key:"pay",align:"center",sortable:!1,width:"200px"},{title:"\u5C0F\u8A08",key:"total",align:"end",sortable:!1}],desserts:[{num:1,name:"113\u5E74\u5B78\u751F\u6703\u6D3B\u52D5\u6524\u8CA9\u79DF\u91D1",total:"16,000"},{num:2,name:"\u6536\u8CBB\u9805\u76EEB",total:"16,000"},{num:3,name:"\u6536\u8CBB\u9805\u76EEC",total:"16,000"}]}),methods:{},components:{datepickerModalVue:b,QuillEditor:h}},G=l("h2",{class:"text-primary title"},"\u65B0\u589E\u55AE\u7B46\u7E73\u8CBB\u55AE",-1),T={class:"mb-5 content"},C=l("h4",{class:"text-primary subtitle d-flex"},"\u65B0\u589E/\u7DE8\u8F2F\u516C\u544A-\u4E2D\u6587\u7248",-1),B=l("label",{class:"text-gray font-weight-bold",for:""},"\u4E2D\u6587\u6A19\u984C:",-1),j=l("label",{class:"text-gray font-weight-bold",for:""},"\u767C\u5E03\u6642\u9593:",-1),M=l("label",{class:"text-gray font-weight-bold",for:""},"\u4E0B\u67B6\u6642\u9593:",-1),P=l("label",{class:"text-gray font-weight-bold",for:""},"\u5F35\u8CBC\u8005",-1),E=l("label",{class:"text-gray font-weight-bold",for:""},"\u986F\u793A\u65B9\u5F0F:",-1),I=l("label",{class:"text-gray font-weight-bold mb-3",for:""},"\u5F35\u8CBC\u5230:",-1),N=l("label",{class:"text-gray font-weight-bold mb-3",for:""},"\u7F6E\u9802\u516C\u544A:",-1),S=l("h4",{class:"text-primary subtitle d-flex"},"\u4E2D\u6587\u516C\u544A\u5167\u5BB9",-1),$={class:"pa-4"},F=l("h4",{class:"text-primary subtitle d-flex"},"\u9644\u4EF6\u5716\u7247",-1),q={class:"pa-4"},A={class:"upload"},D=l("span",{class:"icon material-symbols-outlined d-flex justify-center text-center"}," cloud_upload ",-1),Q=l("div",{class:"d-flex justify-center text-center"},[o(" \u8ACB\u628A\u6A94\u6848\u62D6\u62C9\u5230\u6B64\u6846"),l("br"),o("\u6216\u662F ")],-1),J=l("div",{class:"text-subtitle-2 text-grey-darken-1 ml-0 ml-md-5"}," \u8ACB\u6CE8\u610F\uFF1A\u63A5\u53D7JPG,PNG\u7B49\u5716\u7247\u683C\u5F0F\uFF0C\u6A94\u6848\u5927\u5C0F\u8ACB\u52FF\u8D85\u904E5MB\u3002 ",-1),R=l("h4",{class:"text-primary subtitle d-flex"},"\u9644\u4EF6\u6A94\u6848\u4E0A\u50B3",-1),z={class:"pa-4"},H={class:"upload"},K=l("span",{class:"icon material-symbols-outlined d-flex justify-center text-center"}," cloud_upload ",-1),L=l("div",{class:"d-flex justify-center text-center"},[o(" \u8ACB\u628A\u6A94\u6848\u62D6\u62C9\u5230\u6B64\u6846"),l("br"),o("\u6216\u662F ")],-1),O=l("div",{class:"text-subtitle-2 text-grey-darken-1 ml-0 ml-md-5"}," \u8ACB\u6CE8\u610F\uFF1A\u63A5\u53D7xls,pdf,word,\u7B49\u5F71\u7247\u683C\u5F0F\uFF0C\u6A94\u6848\u5927\u5C0F\u8ACB\u52FF\u8D85\u904E500MB(\u5167\u7DB2)\u6216250MB(\u5916\u7DB2)\u3002 ",-1),U=l("h4",{class:"text-h7 text-primary font-weight-bold mb-2"}," \u767C\u5E03\u72C0\u614B ",-1);function W(X,Y,Z,tt,et,lt){const n=u("datepickerModalVue"),_=u("quill-editor");return x(),y(c,{class:"container"},{default:e(()=>[G,l("div",T,[t(f,{class:"elevation-0",color:"transparent"},{default:e(()=>[t(s,{class:""},{default:e(()=>[t(a,null,{default:e(()=>[t(i,{class:"pa-0 dataTableTitle mb-3"},{default:e(()=>[C]),_:1}),l("div",null,[t(m,{class:"boardForm"},{default:e(()=>[t(c,null,{default:e(()=>[t(s,{class:"formGrp"},{default:e(()=>[t(a,{class:"pb-0",cols:"12",lg:""},{default:e(()=>[B]),_:1}),t(a,{cols:"12",md:"6",lg:"6",class:"pt-0 d-flex"},{default:e(()=>[t(V,{label:"\u6587\u5B57\u6A19\u6E96\u8868\u55AE",density:"compact","single-line":"","hide-details":"auto"})]),_:1})]),_:1}),t(s,{class:"formGrp datePick"},{default:e(()=>[t(a,{class:"pb-0"},{default:e(()=>[j]),_:1}),t(a,{cols:"12",md:"6",lg:"3"},{default:e(()=>[t(n)]),_:1})]),_:1}),t(s,{class:"formGrp datePick"},{default:e(()=>[t(a,{class:"pb-0"},{default:e(()=>[M]),_:1}),t(a,{cols:"12",md:"6",lg:"3"},{default:e(()=>[t(n)]),_:1})]),_:1}),t(s,{class:"formGrp datePick"},{default:e(()=>[t(a,{class:"pb-0"},{default:e(()=>[P]),_:1}),t(a,{cols:"12",md:"6",lg:"3"},{default:e(()=>[t(v,{class:"pa-2 bg-blue-lighten-5"},{default:e(()=>[o("\u51FA\u7D0D\u7D44")]),_:1})]),_:1})]),_:1}),t(s,{class:"formGrp"},{default:e(()=>[t(a,{class:"pb-0",cols:"12",lg:""},{default:e(()=>[E]),_:1}),t(a,{cols:"12",md:"6",lg:"6",class:"pt-0"},{default:e(()=>[t(p,{label:"\u4E0B\u62C9\u5F0F\u9078\u55AE",density:"compact","single-line":"",class:"h-100","hide-details":"auto",items:["\u91CD\u8981","\u4E00\u822C"]})]),_:1})]),_:1}),t(s,{class:"formGrp checkboxGrp"},{default:e(()=>[t(a,{class:"pb-0"},{default:e(()=>[I]),_:1}),t(a,{cols:"12",md:"9"},{default:e(()=>[t(s,{class:"mt-2"},{default:e(()=>[t(a,{cols:"12",lg:"auto",md:"4",sm:"6",class:"item py-0 mb-3"},{default:e(()=>[t(r,{color:"white",label:"\u7E73\u8CBB\u5E73\u53F0","hide-details":"auto"})]),_:1}),t(a,{cols:"12",lg:"auto",md:"4",sm:"6",class:"item py-0 mb-3"},{default:e(()=>[t(r,{color:"white",label:"\u5167\u90E8\u516C\u544A","hide-details":"auto"})]),_:1})]),_:1})]),_:1})]),_:1}),t(s,{class:"formGrp checkboxGrp"},{default:e(()=>[t(a,{class:"pb-0"},{default:e(()=>[N]),_:1}),t(a,{cols:"12",md:"9"},{default:e(()=>[t(s,{class:"mt-2"},{default:e(()=>[t(a,{cols:"12",lg:"auto",md:"4",sm:"6",class:"item py-0 mb-3"},{default:e(()=>[t(r,{color:"white",label:"\u7F6E\u9802\u516C\u544A","hide-details":"auto"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(i,{class:"pa-0 dataTableTitle mb-3"},{default:e(()=>[S]),_:1}),l("div",$,[t(_,{style:{height:"200px"}})]),t(i,{class:"pa-0 dataTableTitle mb-3"},{default:e(()=>[F]),_:1}),l("div",q,[l("div",A,[t(s,null,{default:e(()=>[t(a,{class:"title"},{default:e(()=>[D,Q]),_:1}),t(a,{cols:"12",class:"d-flex justify-center"},{default:e(()=>[t(d,{class:"bg-gray-gradient btn elevation-0"},{default:e(()=>[o("\u9078\u64C7\u6A94\u6848")]),_:1}),t(d,{class:"bg-gray-gradient btn elevation-0"},{default:e(()=>[o("\u91CD\u65B0\u4E0A\u50B3")]),_:1})]),_:1})]),_:1})]),t(s,null,{default:e(()=>[t(a,{class:"justify-space-between d-flex mt-3",cols:"12"},{default:e(()=>[J]),_:1})]),_:1})]),t(i,{class:"pa-0 dataTableTitle mb-3"},{default:e(()=>[R]),_:1}),l("div",z,[l("div",H,[t(s,null,{default:e(()=>[t(a,{class:"title"},{default:e(()=>[K,L]),_:1}),t(a,{cols:"12",class:"d-flex justify-center"},{default:e(()=>[t(d,{class:"bg-gray-gradient btn elevation-0"},{default:e(()=>[o("\u9078\u64C7\u6A94\u6848")]),_:1}),t(d,{class:"bg-gray-gradient btn elevation-0"},{default:e(()=>[o("\u91CD\u65B0\u4E0A\u50B3")]),_:1})]),_:1})]),_:1})]),t(s,null,{default:e(()=>[t(a,{class:"justify-space-between d-flex mt-3",cols:"12"},{default:e(()=>[O]),_:1})]),_:1})])]),_:1}),t(a,{lg:"2",md:"3",cols:"12",class:"fixedCard"},{default:e(()=>[t(f,{class:"pa-2 mb-3"},{default:e(()=>[U,t(w),t(m,null,{default:e(()=>[t(c,null,{default:e(()=>[t(s,{class:"formGrp"},{default:e(()=>[t(a,{class:"pa-0"},{default:e(()=>[t(p,{label:"\u4E0B\u62C9\u5F0F\u9078\u55AE",density:"compact","single-line":"",class:"h-100","hide-details":"auto",items:["\u9078\u9805\u3127","\u9078\u9805\u4E8C","\u9078\u9805\u4E09"]})]),_:1})]),_:1}),t(s,{class:"formGrp"},{default:e(()=>[t(a,{cols:""},{default:e(()=>[t(d,{block:"",class:"bg-primary-gradient"},{default:e(()=>[o("\u78BA\u5B9A\u767C\u5E03")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const Et=g(k,[["render",W]]);export{Et as default};
