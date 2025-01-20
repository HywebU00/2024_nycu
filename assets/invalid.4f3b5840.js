import{_ as g,o as u,c as f,w as t,d as l,a as e,m as b,f as p}from"./index.eb43fa57.js";import{V as y}from"./VContainer.fc049310.js";import{a as d,V as n,b as h,c as v}from"./VCard.dc086846.js";import{V as c}from"./VDataTable.ae9987bb.js";import{V as s}from"./VBtn.2b7ea710.js";import{V as _}from"./VDialog.f935d2c0.js";import"./index.77990c4a.js";import"./VAvatar.f38a976a.js";import"./VPagination.0a3c2854.js";import"./group.990b857b.js";import"./VSelect.3ca73536.js";import"./VTextField.5ea8292b.js";import"./index.5754ae22.js";import"./VInput.86d69997.js";import"./easing.c06eec13.js";import"./forwardRefs.34034356.js";import"./VList.0a3abd53.js";import"./ssrBoot.526f0ace.js";import"./VDivider.5c17c73a.js";import"./VMenu.a907f11f.js";import"./VOverlay.17b2a242.js";import"./delay.598bd158.js";import"./lazy.1b928398.js";import"./scopeId.23bd787d.js";import"./VCheckboxBtn.00819da1.js";import"./VSelectionControl.558e9fd6.js";import"./VChip.5ffce6c7.js";import"./VTable.20030358.js";const x={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,visible:!1,expand:!1,headers:[{align:"center",width:"30px",key:"count",sortable:!1,title:"#"},{align:"center",width:"",key:"date",sortable:!1,title:"\u958B\u7ACB\u65E5\u671F"},{title:"\u7E73\u8CBB\u55AE\u7DE8\u865F",key:"num",align:"center",width:"30px"},{title:"\u6536\u8CBB\u9805\u76EE",key:"name",align:"start",sortable:!0},{title:"\u7E73\u6B3E\u4EBA",key:"pay",align:"",sortable:!0},{title:"\u7E73\u8CBB\u72C0\u6CC1",key:"status",align:"",sortable:!0},{title:"\u662F\u5426\u53EF\u4F5C\u5EE2",key:"cancel",align:"",sortable:!0}],data:[{count:1,date:"2024/06/15",num:"N1130606",name:"\u6536\u8CBB\u9805\u76EE113\u5E74,05\u6708\u6C34\u96FB\u8CBB",pay:"\u738B\u5C0F\u660E",status:"\u672A\u7E73\u8CBB",cancel:"\u53EF\u4F5C\u5EE2"},{count:2,date:"2024/06/15",num:"N1130606",name:"\u6536\u8CBB\u9805\u76EE113\u5E74",pay:"\u738B\u5C0F\u660E",status:"\u5DF2\u7E73\u8CBB",cancel:"\u4E0D\u53EF\u4F5C\u5EE2"},{count:3,date:"2024/06/15",num:"N1130606",name:"\u6536\u8CBB\u9805\u76EE113\u5E74",pay:"\u738B\u5C0F\u660E",status:"\u672A\u7E73\u8CBB",cancel:"\u53EF\u4F5C\u5EE2"}],cancelHeaders:[{align:"center",width:"",key:"date",sortable:!1,title:"\u4E0A\u50B3\u6642\u9593"},{title:"\u4E0A\u50B3\u7B46\u6578",key:"upload",align:"center",sortable:!1},{title:"\u5DF2\u7E73\u8CBB\u7B46\u6578",key:"pay",sortable:!1,align:"center"},{title:"\u53EF\u4F5C\u5EE2\u7B46\u6578",key:"delete",align:"center",sortable:!1},{title:"\u6A94\u6848\u4E0B\u8F09",key:"download",align:"center",sortable:!1},{title:"\u4F5C\u5EE2\u7E73\u8CBB\u55AE",key:"cancel",align:"end",sortable:!1}],cancelData:[{date:"2024/06/01 15:15",upload:150,pay:25,delete:125}]}),methods:{},components:{}},k=l("h2",{class:"text-primary title"},"\u6279\u6B21\u5EFA\u7ACB\u7E73\u8CBB\u55AE\u9810\u89BD",-1),V=l("p",{class:"text-gray dateInfo"},"\u5EFA\u7ACB\u65E5\u671F 2024/06/10 15:30",-1),T={class:"mb-5 content"},w=l("h4",{class:"text-primary subtitle d-flex"},[p(" \u7E73\u8CBB\u55AE\u6AA2\u8996 "),l("p",{class:"text-gray d-flex font-weight-medium text-body-1 pt-1 justify-center align-center ml-3"}," \u5171 150 \u7B46 ,\u53EF\u4F5C\u5EE2125\u7B46 ")],-1),C={class:"content"},N=l("h4",{class:"text-primary subtitle d-flex"},"\u7E73\u8CBB\u55AE\u4F5C\u5EE2",-1),$={class:"pa-4 pt-2"},P={class:"d-flex justify-center pa-2 pt-6 btnList"};function B(a,o,D,j,H,U){return u(),f(y,{class:"container"},{default:t(()=>[k,V,l("div",T,[e(n,{class:"elevation-0",color:"transparent"},{default:t(()=>[e(d,{class:"pa-0 dataTableTitle mb-3"},{default:t(()=>[w]),_:1}),e(c,{class:"dataTable mt-6 tableHover",page:a.page,"onUpdate:page":o[0]||(o[0]=i=>a.page=i),headers:a.headers,items:a.data,"item-value":"date","items-per-page":a.itemsPerPage,"hide-default-footer":"",hover:""},{"item.delete":t(({item:i})=>[e(s,{color:"gray",variant:"text",icon:"mdi-trash-can-outline",class:"ma-2"})]),_:1},8,["page","headers","items","items-per-page"])]),_:1})]),l("div",C,[e(n,{class:"elevation-0",color:"transparent"},{default:t(()=>[e(d,{class:"pa-0 dataTableTitle mb-3"},{default:t(()=>[N]),_:1}),e(c,{class:"dataTable mt-6",page:a.page,"onUpdate:page":o[1]||(o[1]=i=>a.page=i),headers:a.cancelHeaders,items:a.cancelData,"item-value":"date","items-per-page":a.itemsPerPage,"hide-default-footer":""},{"item.download":t(({item:i})=>[e(s,{color:"gray",variant:"text",icon:"mdi-upload",class:"ma-2"})]),"item.cancel":t(({item:i})=>[e(_,{"max-width":"420"},{activator:t(({props:r})=>[e(s,b(r,{color:"gray",variant:"text",icon:"mdi-trash-can-outline",class:"ma-2"}),null,16)]),default:t(({isActive:r})=>[e(n,null,{default:t(()=>[e(h,{class:"pa-12 text-center"},{default:t(()=>[p(" \u78BA\u8A8D\u4F5C\u5EE2 125\u7B46 \u7E73\u8CBB\u55AE\uFF1F ")]),_:1}),e(v,{class:"d-flex justify-center"},{default:t(()=>[l("div",$,[e(s,{text:"\u53D6\u6D88",variant:"flat",class:"bg-light-gradient text-gray elevation-3 btn",onClick:m=>r.value=!1},null,8,["onClick"]),e(s,{class:"bg-secondary-gradient elevation-3 btn",text:"\u78BA\u5B9A",variant:"flat",onClick:m=>r.value=!1},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1},8,["page","headers","items","items-per-page"])]),_:1})]),l("div",P,[e(s,{text:"\u8FD4\u56DE\u7DE8\u8F2F",class:"bg-light-gradient elevation-3 btn text-gray",variant:"flat"}),e(s,{text:"\u78BA\u5B9A",class:"bg-secondary-gradient elevation-3 btn",variant:"flat"})])]),_:1})}const de=g(x,[["render",B]]);export{de as default};
