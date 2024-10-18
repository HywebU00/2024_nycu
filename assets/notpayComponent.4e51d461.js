import{d as _}from"./datepickerModal.7a723569.js";import{_ as h,o as d,c as b,w as e,d as s,a as t,e as o,m as u,ax as c,a$ as k,b0 as p,b1 as V,F as v}from"./index.0d927ad4.js";import{V as C}from"./VContainer.db633886.js";import{V as x}from"./VTextField.6414e252.js";import{V as n}from"./VBtn.e40d6ed8.js";import{V as w,a as g}from"./VTabs.32ae1da9.js";import{V as f,a as T,b as P,c as N}from"./VCard.95308e1f.js";import{V as D,a as S}from"./VRow.f7d03408.js";import{V as $}from"./VMenu.81bbd3f9.js";import{w as A}from"./index.8ef667a9.js";import{V as B}from"./VSheet.21a2eb12.js";import{V as j}from"./VDataTable.e412f46e.js";import{V as E}from"./VTooltip.7693c9b6.js";import{V as U}from"./VChip.b85e0bf0.js";import{V as F}from"./VSelect.245e056f.js";import{V as I}from"./VDialog.486a71b4.js";import{V as M}from"./VPagination.7398b746.js";import"./VAvatar.84316a85.js";import"./index.7e00166f.js";import"./VInput.d33beace.js";import"./forwardRefs.74a345f5.js";import"./lazy.67ea5cdf.js";import"./ssrBoot.0a9046a6.js";import"./scopeId.22d5fa90.js";import"./delay.7441f35f.js";import"./VCheckboxBtn.84ad870f.js";import"./VSelectionControl.8d957bf8.js";import"./VTable.f623b13e.js";import"./VDivider.57abeb4e.js";import"./VList.9299baf6.js";const q={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,visible:!1,expand:!1,itemsPerPage:3,selected:[],data:[{id:"1",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"2",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"3",top:!1,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"}],tableHeaders:[{align:"center",width:"",key:"date",sortable:!1,title:"\u958B\u7ACB\u65E5\u671F"},{title:"\u7E73\u8CBB\u55AE\u7DE8\u865F",key:"num",align:"center",sortable:!1},{title:"\u7E73\u8CBB\u9805\u76EE",key:"title",sortable:!1,align:"center"},{title:"\u7E73\u8CBB\u91D1\u984D",key:"sum",align:"end",sortable:!1},{title:"\u53EF\u7E73\u6B3E\u65B9\u5F0F",key:"type",align:"center",sortable:!1},{title:"\u7E73\u8CBB\u671F\u9650",key:"date",align:"center",sortable:!1},{title:"\u6578\u91CF",key:"qty",align:"center",sortable:!1},{title:"\u4ED8\u6B3E",key:"pay",align:"center",sortable:!1},{title:"\u7E73\u8CBB\u65B9\u5F0F",key:"status",align:"center",sortable:!1},{title:"\u6536\u64DA\u4E0B\u8F09",key:"download",align:"center",sortable:!1}],tableData:[{date:"2024/06/01",num:"N1130606",title:["\u6CF3\u8A13\u73ED\u500B\u4EBA\u5831\u540D\u8CBB"],sum:1e4,type:"\u4FE1,A,\u8D85...",download:["N12345678","N22345678"]},{date:"2024/06/02",num:"N1130607",title:["\u7C43\u7403\u5834\u79DF\u91D1"],sum:1e4,type:"\u4FE1,A,\u8D85...",download:["N12345678"]},{date:"2024/06/03",num:"N1130608",title:["113\u5E745\u6708 \u9910\u807D\u3001\u8D85\u5546\u3001\u66F8\u5C40\u7E73\u8CBB\u901A\u77E5\u55AE","113\u5E745\u6708 \u9910\u807D\u3001\u8D85\u5546\u3001\u66F8\u5C40\u7E73\u8CBB\u901A\u77E5\u55AE"],sum:1e4,type:"\u4FE1,A,\u8D85... \u9910\u807D\u3001\u8D85\u5546\u3001\u66F8\u5C40\u7E73\u8CBB\u901A\u77E5\u55AE\u9910\u807D\u3001\u8D85\u5546\u3001\u66F8\u5C40\u7E73\u8CBB\u901A\u77E5\u55AE",download:["N12345678"]}]}),methods:{},components:{datepickerModalVue:_},computed:{pageCount(){return Math.ceil(this.tableData.length/this.itemsPerPage)}}},z=s("h2",{class:"text-primary title"},"\u5F85\u7E73\u8CBB\u9805\u76EE",-1),H=s("p",{class:"text-gray dateInfo"}," \u50C5\u4FDD\u7559\u516D\u500B\u6708\u5167\u7E73\u8CBB\u8A18\u9304\uFF0C\u8D85\u904E\u516D\u500B\u6708\u4EE5\u4E0A\u8ACB\u81F3\u6B77\u53F2\u7E73\u8CBB\u8A18\u9304\u67E5\u8A62 ",-1),L={class:"d-flex my-5"},G={class:"mb-5"},R=s("h4",{class:"text-primary subtitle d-flex"},"\u7E73\u8CBB\u660E\u7D30\u78BA\u8A8D",-1),J=s("p",null," \u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E\u8AAA\u660E ",-1),K=s("p",{class:"text-gray"},"\u9EDE\u64CA\u6536\u64DA\u865F\u78BC\u4E0B\u8F09",-1),O={class:"pa-4 pt-2"},Q={class:"d-flex align-center justify-center pagination"},W=s("span",null,"\u7B46",-1),X={class:"text-center mt-6"},Y={class:"d-flex justify-center pa-4 pt-2"};function Z(l,i,ee,te,ae,y){return d(),b(C,{class:"container"},{default:e(()=>[z,H,s("div",L,[t(x,{label:"\u8ACB\u8F38\u5165\u67E5\u8A62\u95DC\u9375\u5B57",density:"compact","single-line":"","hide-details":"auto"}),t(n,{class:"bg-secondary-gradient px-6","prepend-icon":"mdi-magnify"},{default:e(()=>[o("\u641C\u5C0B")]),_:1})]),t(f,null,{default:e(()=>[t(w,{modelValue:l.tab,"onUpdate:modelValue":i[0]||(i[0]=a=>l.tab=a),"align-tabs":"center",color:"deep-purple-accent-4"},{default:e(()=>[t(g,{value:1},{default:e(()=>[o("Landscape")]),_:1}),t(g,{value:2},{default:e(()=>[o("City")]),_:1}),t(g,{value:3},{default:e(()=>[o("Abstract")]),_:1})]),_:1},8,["modelValue"])]),_:1}),s("div",G,[t(f,{class:"elevation-0",color:"transparent"},{default:e(()=>[t(T,{class:"pa-0 dataTableTitle mb-3"},{default:e(()=>[R]),_:1}),t(D,{class:"px-2 mb-5"},{default:e(()=>[t(S,{class:"justify-end d-flex align-center",cols:"12"},{default:e(()=>[t($,{transition:"slide-x-transition"},{activator:e(({props:a})=>[t(A,u(a,{class:"text-gary",icon:"mdi-information-outline",color:"gray"}),null,16)]),default:e(()=>[t(B,{class:"infoCard pa-2 ma-2"},{default:e(()=>[J]),_:1})]),_:1}),t(n,{variant:"flat",class:"bg-secondary-gradient elevation-3 mx-2"},{default:e(()=>[o("\u5408\u4F75\u5E33\u55AE")]),_:1}),K]),_:1}),t(j,{class:"dataTable","show-select":"",page:l.page,"onUpdate:page":i[3]||(i[3]=a=>l.page=a),headers:l.tableHeaders,items:l.tableData,"item-value":"num","items-per-page":l.itemsPerPage,"hide-default-footer":""},{"item.type":e(({item:a})=>[t(E,{text:a.type},{activator:e(({props:r})=>[s("div",u(r,{class:"text-truncate truncateStyle"}),c(a.type),17)]),_:2},1032,["text"])]),"item.title":e(({item:a})=>[a.title.length>1?(d(),b(U,{key:0,class:"chip",variant:"elevated",size:"small",color:"secondary"},{default:e(()=>[o(" \u5408\u4F75\u5E33\u55AE ")]),_:1})):k("",!0),(d(!0),p(v,null,V(a.title,(r,m)=>(d(),p("div",{key:m,class:"tableTitle text-start my-2"},c(r),1))),128))]),"item.qty":e(({item:a})=>[t(F,{width:"150",label:"\u4E0B\u62C9\u5F0F\u9078\u55AE","single-line":"",density:"compact","hide-details":"auto",items:["\u9078\u9805\u3127","\u9078\u9805\u4E8C","\u9078\u9805\u4E09"]})]),"item.pay":e(({item:a})=>[t(n,{color:"gray",variant:"text",icon:"mdi-credit-card-outline",class:"ma-2"})]),"item.status":e(({item:a})=>[t(I,{"max-width":"420"},{activator:e(({props:r})=>[t(n,u(r,{class:"my-2 bg-secondary-gradient",block:""}),{default:e(()=>[o("\u89E3\u9664\u4F75\u55AE")]),_:2},1040)]),default:e(({isActive:r})=>[t(f,null,{default:e(()=>[t(P,{class:"pa-12 text-center"},{default:e(()=>[o(" \u78BA\u8A8D\u89E3\u9664\u5408\u4F75\u5E33\u55AE\uFF1F ")]),_:1}),t(N,{class:"d-flex justify-center"},{default:e(()=>[s("div",O,[t(n,{text:"\u53D6\u6D88",variant:"flat",class:"bg-light-gradient text-gray elevation-3 btn",onClick:m=>r.value=!1},null,8,["onClick"]),t(n,{class:"bg-secondary-gradient elevation-3 btn",text:"\u78BA\u5B9A",variant:"flat",onClick:m=>r.value=!1},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)]),_:1}),t(n,{class:"my-2 bg-light-gradient text-gray",block:""},{default:e(()=>[o("\u8B8A\u66F4")]),_:1}),t(n,{class:"my-2 bg-secondary text-white",disabled:"",variant:"flat",block:""},{default:e(()=>[o("\u8B8A\u66F4")]),_:1}),t(n,{class:"my-2 bg-light-gradient",disabled:"",block:""},{default:e(()=>[o("\u8B8A\u66F4")]),_:1})]),"item.download":e(({item:a})=>[(d(!0),p(v,null,V(a.download,(r,m)=>(d(),p("div",{key:m,class:"text-decoration-underline text-gray cursor-pointer mb-1"},c(r)+" ",1))),128))]),bottom:e(()=>[s("div",Q,[s("span",null,"\u5171"+c(l.tableData.length)+"\u7B46\u8CC7\u6599\uFF0C\u7B2C1/"+c(y.pageCount||1)+"\u9801\uFF0C\u6BCF\u9801\u986F\u793A\xA0",1),t(x,{"model-value":l.itemsPerPage,class:"mx-2",max:"15",density:"compact",min:"1",type:"number","hide-details":"","onUpdate:modelValue":i[1]||(i[1]=a=>l.itemsPerPage=parseInt(a,10))},null,8,["model-value"]),W]),s("div",X,[t(M,{"active-color":"gray",color:"gray",size:"small",modelValue:l.page,"onUpdate:modelValue":i[2]||(i[2]=a=>l.page=a),length:y.pageCount},null,8,["modelValue","length"])])]),_:1},8,["page","headers","items","items-per-page"])]),_:1}),s("div",Y,[t(n,{text:"\u53D6\u6D88",variant:"flat",class:"bg-light-gradient text-gray elevation-3 btn mx-2",onClick:i[4]||(i[4]=a=>l.isActive.value=!1)}),t(n,{class:"bg-secondary-gradient elevation-3 btn mx-2",text:"\u4ED8\u6B3E",variant:"flat",onClick:i[5]||(i[5]=a=>l.isActive.value=!1)})])]),_:1})])]),_:1})}const Be=h(q,[["render",Z]]);export{Be as default};
