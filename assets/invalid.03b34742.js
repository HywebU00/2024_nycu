import{_ as g,o as u,c as f,w as t,d as l,a as e,m as b,e as d}from"./index.d0240885.js";import{V as y}from"./VContainer.4c47bb75.js";import{a as c,V as r,b as h,c as v}from"./VCard.2403f47b.js";import{V as p}from"./VDataTable.8ed76d5f.js";import{V as s}from"./VBtn.0a984baa.js";import{V as _}from"./VDialog.2fa9d447.js";import"./index.d41e6895.js";import"./VAvatar.3f95afcb.js";import"./VPagination.98fe77d4.js";import"./VSelect.111e0d8d.js";import"./VTextField.079ea812.js";import"./index.31300936.js";import"./VInput.f52dc89b.js";import"./forwardRefs.74a345f5.js";import"./VList.72ceb324.js";import"./ssrBoot.2bfb3a30.js";import"./VDivider.6f9cabfa.js";import"./VMenu.e667a9c6.js";import"./delay.01a39222.js";import"./lazy.8932489e.js";import"./scopeId.62559e25.js";import"./VCheckboxBtn.90204f2f.js";import"./VSelectionControl.7536c06d.js";import"./VChip.5551efb3.js";import"./VTable.fc196c42.js";const x={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,visible:!1,expand:!1,headers:[{align:"center",width:"30px",key:"count",sortable:!1,title:"#"},{align:"center",width:"",key:"date",sortable:!1,title:"\u958B\u7ACB\u65E5\u671F"},{title:"\u7E73\u8CBB\u55AE\u7DE8\u865F",key:"num",align:"center",width:"30px"},{title:"\u6536\u8CBB\u9805\u76EE",key:"name",align:"start",sortable:!0},{title:"\u7E73\u6B3E\u4EBA",key:"pay",align:"",sortable:!0},{title:"\u7E73\u8CBB\u72C0\u6CC1",key:"status",align:"",sortable:!0},{title:"\u662F\u5426\u53EF\u4F5C\u5EE2",key:"cancel",align:"",sortable:!0}],data:[{count:1,date:"2024/06/15",num:"N1130606",name:"\u6536\u8CBB\u9805\u76EE113\u5E74,05\u6708\u6C34\u96FB\u8CBB",pay:"\u738B\u5C0F\u660E",status:"\u672A\u7E73\u8CBB",cancel:"\u53EF\u4F5C\u5EE2"},{count:2,date:"2024/06/15",num:"N1130606",name:"\u6536\u8CBB\u9805\u76EE113\u5E74",pay:"\u738B\u5C0F\u660E",status:"\u5DF2\u7E73\u8CBB",cancel:"\u4E0D\u53EF\u4F5C\u5EE2"},{count:3,date:"2024/06/15",num:"N1130606",name:"\u6536\u8CBB\u9805\u76EE113\u5E74",pay:"\u738B\u5C0F\u660E",status:"\u672A\u7E73\u8CBB",cancel:"\u53EF\u4F5C\u5EE2"}],cancelHeaders:[{align:"center",width:"",key:"date",sortable:!1,title:"\u4E0A\u50B3\u6642\u9593"},{title:"\u4E0A\u50B3\u7B46\u6578",key:"upload",align:"center",sortable:!1},{title:"\u5DF2\u7E73\u8CBB\u7B46\u6578",key:"pay",sortable:!1,align:"center"},{title:"\u53EF\u4F5C\u5EE2\u7B46\u6578",key:"delete",align:"center",sortable:!1},{title:"\u6A94\u6848\u4E0B\u8F09",key:"download",align:"center",sortable:!1},{title:"\u4F5C\u5EE2\u7E73\u8CBB\u55AE",key:"cancel",align:"end",sortable:!1}],cancelData:[{date:"2024/06/01 15:15",upload:150,pay:25,delete:125}]}),methods:{},components:{}},k=l("h2",{class:"text-primary title"},"\u6279\u6B21\u5EFA\u7ACB\u7E73\u8CBB\u55AE\u9810\u89BD",-1),V=l("p",{class:"text-gray dateInfo"},"\u5EFA\u7ACB\u65E5\u671F 2024/06/10 15:30",-1),T={class:"mb-5 content"},w=l("h4",{class:"text-primary subtitle d-flex"},[d(" \u7E73\u8CBB\u55AE\u6AA2\u8996 "),l("p",{class:"text-gray d-flex font-weight-medium text-body-1 pt-1 justify-center align-center ml-3"}," \u5171 150 \u7B46 ,\u53EF\u4F5C\u5EE2125\u7B46 ")],-1),C={class:"content"},N=l("h4",{class:"text-primary subtitle d-flex"},"\u7E73\u8CBB\u55AE\u4F5C\u5EE2",-1),$={class:"pa-4 pt-2"},B={class:"d-flex justify-center pa-2 pt-6 btnList"};function P(a,n,D,j,H,U){return u(),f(y,{class:"container"},{default:t(()=>[k,V,l("div",T,[e(r,{class:"elevation-0",color:"transparent"},{default:t(()=>[e(c,{class:"pa-0 dataTableTitle mb-3"},{default:t(()=>[w]),_:1}),e(p,{class:"dataTable mt-6 tableHover",page:a.page,"onUpdate:page":n[0]||(n[0]=i=>a.page=i),headers:a.headers,items:a.data,"item-value":"date","items-per-page":a.itemsPerPage,"hide-default-footer":"",hover:""},{"item.delete":t(({item:i})=>[e(s,{color:"gray",variant:"text",icon:"mdi-trash-can-outline",class:"ma-2"})]),_:1},8,["page","headers","items","items-per-page"])]),_:1})]),l("div",C,[e(r,{class:"elevation-0",color:"transparent"},{default:t(()=>[e(c,{class:"pa-0 dataTableTitle mb-3"},{default:t(()=>[N]),_:1}),e(p,{class:"dataTable mt-6",page:a.page,"onUpdate:page":n[1]||(n[1]=i=>a.page=i),headers:a.cancelHeaders,items:a.cancelData,"item-value":"date","items-per-page":a.itemsPerPage,"hide-default-footer":""},{"item.download":t(({item:i})=>[e(s,{color:"gray",variant:"text",icon:"mdi-upload",class:"ma-2"})]),"item.cancel":t(({item:i})=>[e(_,{"max-width":"420"},{activator:t(({props:o})=>[e(s,b(o,{color:"gray smallBtn",variant:"outlined",size:"small","prepend-icon":"mdi-trash-can-outline"}),{default:t(()=>[d(" \u4F5C\u5EE2 ")]),_:2},1040)]),default:t(({isActive:o})=>[e(r,null,{default:t(()=>[e(h,{class:"pa-12 text-center"},{default:t(()=>[d(" \u78BA\u8A8D\u4F5C\u5EE2 125\u7B46 \u7E73\u8CBB\u55AE\uFF1F ")]),_:1}),e(v,{class:"d-flex justify-center"},{default:t(()=>[l("div",$,[e(s,{text:"\u53D6\u6D88",variant:"flat",class:"bg-light-gradient text-gray elevation-3 btn",onClick:m=>o.value=!1},null,8,["onClick"]),e(s,{class:"bg-secondary-gradient elevation-3 btn",text:"\u78BA\u5B9A",variant:"flat",onClick:m=>o.value=!1},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1},8,["page","headers","items","items-per-page"])]),_:1})]),l("div",B,[e(s,{text:"\u8FD4\u56DE\u7DE8\u8F2F",class:"bg-light-gradient elevation-3 btn text-gray",variant:"flat"}),e(s,{text:"\u78BA\u5B9A",class:"bg-secondary-gradient elevation-3 btn",variant:"flat"})])]),_:1})}const ne=g(x,[["render",P]]);export{ne as default};