import{d as f}from"./datepickerModal.30fffb0c.js";import{_ as u,o as p,c as b,w as e,d as t,a as A,e as a}from"./index.be9352ca.js";import{V as g}from"./VContainer.482bec17.js";import{V as m,a as v}from"./VRow.e9fbf69c.js";import{V as o}from"./VSheet.36925e33.js";import{V as l}from"./VCard.544eb073.js";import{V as n}from"./index.95f4c41b.js";import{V as r}from"./VBtn.3ca639e7.js";import"./VTextField.1331bac9.js";import"./index.0ecc5ef4.js";import"./VInput.c318c4b4.js";import"./forwardRefs.74a345f5.js";import"./VAvatar.669e573e.js";import"./VMenu.017660a6.js";import"./delay.9c1167ed.js";import"./lazy.adeebdd8.js";import"./scopeId.24522e9a.js";import"./group.658edde9.js";const c="data:image/png;base64,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",E=""+new URL("code_2.19daffc2.png",import.meta.url).href,B={data:()=>({tab:null,toggle:null,functionGroupToggle:0,page:1,panel:1,selection:1,visible:!1,expand:!1,itemsPerPage:3,selected:[],data:[{id:"1",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"2",top:!0,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"},{id:"3",top:!1,title:"\u5927\u66F4\u6C92\u65BC\u6B63\u6642\u7BC0\u76F4\u53EA\u5011\u4F86\u58D3\u7B97\u6709\u5148\uFF0C\u6C42\u5316\u5316\u770B\u96E8\u7684",class:"\u6700\u65B0\u6D88\u606F",dateStart:"2019/10/16",dateEnd:"2019/12/16",lang:"\u7E41\u9AD4\u4E2D\u6587",status:"\u5F85\u5BE9"}],tableHeaders:[{align:"center",width:"",key:"date",sortable:!1,title:"\u958B\u7ACB\u65E5\u671F"},{title:"\u7E73\u8CBB\u55AE\u7DE8\u865F",key:"num",align:"center",sortable:!1},{title:"\u7E73\u8CBB\u9805\u76EE",key:"title",sortable:!1,align:"center"},{title:"\u7E73\u8CBB\u91D1\u984D",key:"sum",align:"end",sortable:!1},{title:"\u53EF\u7E73\u6B3E\u65B9\u5F0F",key:"type",align:"center",sortable:!1},{title:"\u7E73\u8CBB\u671F\u9650",key:"date",align:"center",sortable:!1},{title:"\u6578\u91CF",key:"qty",align:"center",sortable:!1},{title:"\u4ED8\u6B3E",key:"pay",align:"center",sortable:!1},{title:"\u7E73\u8CBB\u65B9\u5F0F",key:"status",align:"center",sortable:!1},{title:"\u6536\u64DA\u4E0B\u8F09",key:"download",align:"center",sortable:!1}],tableData:[{date:"2024/06/01",num:"N1130606",title:["\u6CF3\u8A13\u73ED\u500B\u4EBA\u5831\u540D\u8CBB"],sum:1e4,type:"\u4FE1,A,\u8D85...",download:["N12345678","N22345678"]},{date:"2024/06/02",num:"N1130607",title:["\u7C43\u7403\u5834\u79DF\u91D1"],sum:1e4,type:"\u4FE1,A,\u8D85...",download:["N12345678"]},{date:"2024/06/03",num:"N1130608",title:["113\u5E745\u6708 \u9910\u807D\u3001\u8D85\u5546\u3001\u66F8\u5C40\u7E73\u8CBB\u901A\u77E5\u55AE","113\u5E745\u6708 \u9910\u807D\u3001\u8D85\u5546\u3001\u66F8\u5C40\u7E73\u8CBB\u901A\u77E5\u55AE"],sum:1e4,type:"\u4FE1,A,\u8D85... \u9910\u807D\u3001\u8D85\u5546\u3001\u66F8\u5C40\u7E73\u8CBB\u901A\u77E5\u55AE\u9910\u807D\u3001\u8D85\u5546\u3001\u66F8\u5C40\u7E73\u8CBB\u901A\u77E5\u55AE",download:["N12345678"]}]}),methods:{},components:{datepickerModalVue:f},computed:{pageCount(){return Math.ceil(this.tableData.length/this.itemsPerPage)}}},C=t("h2",{class:"text-primary title"},"\u7E73\u8CBB\u689D\u78BC",-1),k=t("p",{class:"text-gray mb-2 font-weight-bold"},"\u4EA4\u6613\u7DE8\u865F : NYCU202409170001",-1),w=t("p",{class:"text-gray mb-2"},[a(" \u7E73\u8CBB\u91D1\u984D\u5171 "),t("span",{class:"necessary"},"$20,000"),a(" \u5143\uFF0C\u8ACB\u6383\u63CF\u4E0B\u5217\u689D\u78BC ")],-1),I=t("p",{class:"text-gray mb-2"},"(QRCODE\u96505\u5206\u9418\u5167\u6709\u6548)",-1),X={class:"mb-5 mt-3"},y=t("div",{class:"container"},[t("p",null,[a(" \u60A8\u7684ATM\u4ED8\u6B3E\u8F49\u5E33\u8CC7\u8A0A\u5982\u4E0B \u8ACB\u65BC\u7E73\u6B3E\u671F\u9650 "),t("span",{class:"necessary"},"2024\u5E7406\u670827\u65E523:59 "),a("\u4E4B\u524D\u5B8C\u6210\u4ED8\u6B3E\uFF1A ")]),t("div",{class:"info"},[t("div",{class:"title"},"\u8F49\u5E33\u8CC7\u6599\uFF1A"),t("ul",null,[t("li",null,[t("span",null,"\u9280\u884C\u4EE3\u78BC"),a(" 013\u570B\u6CF0\u4E16\u83EF")]),t("li",null,[t("span",null,"\u8F49\u5E33\u5E33\u865F"),a(" 1970062724002865")]),t("li",null,[t("span",null,"\u8F49\u5E33\u91D1\u984D"),a(" $20,000")]),t("li",null,[t("span",null,"\u7E73\u6B3E\u671F\u9650"),a(" 2024\u5E7406\u670827\u65E523:59")])])]),t("ul",{class:"message"},[t("li",null," \u63D0\u9192\u60A8\uFF0C\u5982\u7E73\u6B3E\u671F\u9650\u5230\u671F\u4ECD\u672A\u5B8C\u6210\u4ED8\u6B3E\uFF0C\u6B64\u8A02\u55AE\u5C07\u88AB\u81EA\u52D5\u53D6\u6D88 "),t("li",null,"\u6B64ATM\u8F49\u5E33\u5E33\u865F\u70BA\u865B\u64EC\u5E33\u865F\uFF0C\u50C5\u4F9B\u672C\u6B21\u4EA4\u6613\u4E00\u6B21\u4F7F\u7528\u3002")])],-1),N=t("div",{class:"title"},"\u8D85\u5546\u7E73\u8CBB\uFF1A",-1),z=t("ul",null,[t("li",null," \u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E "),t("li",null," \u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E "),t("li",null," \u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E\u8D85\u5546\u7E73\u8CBB\u8AAA\u660E ")],-1),H={class:"d-flex justify-center pa-4 pt-2"};function q(i,s,Q,x,W,P){return p(),b(g,{class:"container"},{default:e(()=>[C,k,w,I,t("div",X,[A(l,{class:"elevation-0",color:"transparent"},{default:e(()=>[A(m,{class:""},{default:e(()=>[A(v,{cols:"12"},{default:e(()=>[A(o,{class:"informationBlock codeInfoBlock"},{default:e(()=>[A(l,{class:"pa-3 codeCard"},{default:e(()=>[A(n,{class:"",cover:"",src:c})]),_:1}),A(l,{class:"pa-3 codeCard"},{default:e(()=>[A(n,{class:"",cover:"",src:c})]),_:1})]),_:1}),A(o,{class:"informationBlock codeInfoBlock"},{default:e(()=>[A(l,{class:"pa-3 codeCard"},{default:e(()=>[A(n,{class:"",cover:"",src:E})]),_:1})]),_:1}),A(o,{class:"informationBlock codeInfoBlock"},{default:e(()=>[A(l,{class:"pa-3 w-100"},{default:e(()=>[y]),_:1})]),_:1})]),_:1})]),_:1}),A(o,{class:"informationBlock my-6"},{default:e(()=>[N,z]),_:1}),t("div",H,[A(r,{text:"\u8FD4\u56DE",variant:"flat",class:"bg-light-gradient text-gray elevation-3 btn mx-2",onClick:s[0]||(s[0]=d=>i.isActive.value=!1)}),A(r,{class:"bg-secondary-gradient elevation-3 btn mx-2",text:"\u4E0B\u8F09\u7E73\u8CBB\u55AE",variant:"flat",onClick:s[1]||(s[1]=d=>i.isActive.value=!1)})])]),_:1})])]),_:1})}const $=u(B,[["render",q]]);export{$ as default};
