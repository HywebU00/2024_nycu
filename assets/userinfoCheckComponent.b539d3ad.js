import{d as s}from"./datepickerModal.30fffb0c.js";import{_ as n,o,c as i,w as l,d as t,a as e,e as r}from"./index.be9352ca.js";import{V as c}from"./VContainer.482bec17.js";import{V as d}from"./VSheet.36925e33.js";import{V as u}from"./VCard.544eb073.js";import{V as a}from"./VBtn.3ca639e7.js";import"./VTextField.1331bac9.js";import"./index.0ecc5ef4.js";import"./index.95f4c41b.js";import"./VInput.c318c4b4.js";import"./forwardRefs.74a345f5.js";import"./VAvatar.669e573e.js";import"./VMenu.017660a6.js";import"./delay.9c1167ed.js";import"./lazy.adeebdd8.js";import"./scopeId.24522e9a.js";import"./group.658edde9.js";const m={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,visible:!1,expand:!1,itemsPerPage:3,selected:[],tableHeaders:[{align:"center",width:"",key:"date",sortable:!1,title:"\u958B\u7ACB\u65E5\u671F"},{title:"\u7E73\u8CBB\u55AE\u7DE8\u865F",key:"num",align:"center",sortable:!1},{title:"\u7E73\u8CBB\u9805\u76EE",key:"title",sortable:!1,align:"center"},{title:"\u7E73\u8CBB\u91D1\u984D",key:"sum",align:"end",sortable:!1},{title:"\u4EFD\u6578",key:"qty",align:"center",sortable:!1},{title:"\u5C0F\u8A08",key:"pay",align:"center",sortable:!1},{title:"\u7E73\u8CBB\u671F\u9650",key:"date",align:"center",sortable:!1}],tableData:[{date:"2024/06/01",num:"N1130606",title:["\u6CF3\u8A13\u73ED\u500B\u4EBA\u5831\u540D\u8CBB"],sum:1e4,qty:1,pay:1e4},{date:"2024/06/02",num:"N1130607",title:["\u7C43\u7403\u5834\u79DF\u91D1"],sum:1e4,qty:1,pay:1e4},{date:"2024/06/03",num:"N1130608",title:["113\u5E745\u6708 \u9910\u807D\u3001\u8D85\u5546\u3001\u66F8\u5C40\u7E73\u8CBB\u901A\u77E5\u55AE"],sum:1e4,qty:1,pay:1e4}]}),methods:{},components:{datepickerModalVue:s},computed:{pageCount(){return Math.ceil(this.tableData.length/this.itemsPerPage)}}},p=t("h2",{class:"text-primary title"},"\u6536\u64DA\u4E0B\u8F09",-1),f={class:"mb-5 content"},_=t("div",{class:"title"},"\u6536\u64DA\u4E0B\u8F09\u8AAA\u660E\uFF1A",-1),h=t("ul",null,[t("li",null,"\u6536\u64DA\u50C5\u80FD\u4E0B\u8F09\u4E00\u6B21\uFF0C\u8ACB\u900F\u904E\u624B\u6A5F\u622A\u5716\u6216\u9EDE\u9078\u4E0B\u8F09\u4FDD\u5B58\u6A94\u6848\u3002")],-1),b=t("div",{class:"invoiceTable"},[t("table",{class:""},[t("thead",null,[t("tr",null,[t("th",null,"\u7E73\u6B3E\u4EBA"),t("th",null,"\u6536\u5165\u79D1\u76EE"),t("th",null,"\u91D1\u984D"),t("th",null,"\u4E8B\u7531"),t("th",null,"\u5099\u8A3B")])]),t("tbody",null,[t("tr",null,[t("td",null,"\uFF2F\uFF2F\uFF38\uFF38\u6709\u9650\u516C\u53F8"),t("td",null,"\u8D0A\u52A9\uFF2F\uFF2F\u793E\uFF2F\uFF2F\u6D3B\u52D5"),t("td",{class:"num"},"$5,000"),t("td",null,"\u8D0A\u52A9\uFF2F\uFF2F\u793E\uFF2F\uFF2F\u6D3B\u52D5"),t("td",null,"112D10007C\u8AB2\u5916\u7D44 50905")]),t("tr",null,[t("td",null,"\uFF2F\uFF2F\uFF38\uFF38\u6709\u9650\u516C\u53F8"),t("td",null,"\u8D0A\u52A9\uFF2F\uFF2F\u793E\uFF2F\uFF2F\u6D3B\u52D5"),t("td",{class:"num"},"$5,000"),t("td",null,"\u8D0A\u52A9\uFF2F\uFF2F\u793E\uFF2F\uFF2F\u6D3B\u52D5"),t("td",null,"112D10007C\u8AB2\u5916\u7D44 50905")]),t("tr",{class:"footer"},[t("td",{colspan:"5"},[t("span",null,"\u5408\u8A08"),r(" \u4F0D\u4EDF\u5143\u6574")])])])])],-1),g={class:"d-flex justify-center pa-4 pt-2"};function y(k,x,V,v,C,N){return o(),i(c,{class:"container"},{default:l(()=>[p,t("div",f,[e(u,{class:"elevation-0",color:"transparent"},{default:l(()=>[e(d,{class:"informationBlock mb-3"},{default:l(()=>[_,h]),_:1}),b]),_:1})]),t("div",g,[e(a,{class:"bg-secondary-gradient elevation-0 btn mx-2",text:"\u60A8\u5DF2\u65BC 2024/07/15 15:15:20 \u4E0B\u8F09\u6536\u64DA",variant:"flat",disabled:""}),e(a,{class:"bg-secondary-gradient elevation-3 btn mx-2",text:"\u6536\u64DA\u4E0B\u8F09",variant:"flat"})])]),_:1})}const J=n(m,[["render",y]]);export{J as default};
