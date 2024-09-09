<template>
  <v-container class="container">
    <h2 class="text-primary title">繳費條碼</h2>
    <p class="text-gray mb-5">
      繳費金額共 <span class="necessary">$20,000</span> 元，請掃描下列條碼
    </p>

    <!-- tablet 卡片列 start -->
    <div class="mb-5">
      <v-card class="elevation-0" color="transparent">
        <v-row class="">
          <v-col cols="12">
            <v-sheet class="informationBlock codeInfoBlock">
              <v-card class="pa-3 codeCard">
                <v-img class="" cover src="@/assets/images/code_1.png"></v-img>
              </v-card>
              <v-card class="pa-3 codeCard">
                <v-img class="" cover src="@/assets/images/code_1.png"></v-img>
              </v-card>
            </v-sheet>
            <v-sheet class="informationBlock codeInfoBlock">
              <v-card class="pa-3 codeCard">
                <v-img class="" cover src="@/assets/images/code_2.png"></v-img>
              </v-card>
            </v-sheet>
            <v-sheet class="informationBlock codeInfoBlock">
              <v-card class="pa-3 w-100">
                <div class="container">
                  <p>
                    您的ATM付款轉帳資訊如下 請於繳款期限
                    <span class="necessary">2024年06月27日23:59 </span
                    >之前完成付款：
                  </p>
                  <div class="info">
                    <div class="title">轉帳資料：</div>
                    <ul>
                      <li><span>銀行代碼</span> 013國泰世華</li>
                      <li><span>轉帳帳號</span> 1970062724002865</li>
                      <li><span>轉帳金額</span> $20,000</li>
                      <li><span>繳款期限</span> 2024年06月27日23:59</li>
                    </ul>
                  </div>
                  <ul class="message">
                    <li>
                      提醒您，如繳款期限到期仍未完成付款，此訂單將被自動取消
                    </li>
                    <li>此ATM轉帳帳號為虛擬帳號，僅供本次交易一次使用。</li>
                  </ul>
                </div>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
        <v-sheet class="informationBlock my-6">
          <div class="title">超商繳費：</div>
          <ul>
            <li>
              超商繳費說明超商繳費說明超商繳費說明超商繳費說明超商繳費說明超商繳費說明
            </li>
            <li>
              超商繳費說明超商繳費說明超商繳費說明超商繳費說明超商繳費說明超商繳費說明
            </li>
            <li>
              超商繳費說明超商繳費說明超商繳費說明超商繳費說明超商繳費說明超商繳費說明
            </li>
          </ul>
        </v-sheet>
        <div class="d-flex justify-center pa-4 pt-2">
          <v-btn
            text="返回"
            variant="flat"
            class="bg-light-gradient text-gray elevation-3 btn mx-2"
            @click="isActive.value = false"
          ></v-btn>
          <v-btn
            class="bg-secondary-gradient elevation-3 btn mx-2"
            text="下載繳費單"
            variant="flat"
            @click="isActive.value = false"
          ></v-btn>
        </div>
      </v-card>
    </div>
    <!-- tablet 卡片列 end -->
  </v-container>
</template>

<script>
//載入 Ｖuetify組合 日期選擇器
import datepickerModalVue from "@/components/datepickerModal.vue";
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    visible: false,
    expand: false,
    //table data
    itemsPerPage: 3,
    selected: [],
    data: [
      {
        id: "1",
        top: true,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
      {
        id: "2",
        top: true,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
      {
        id: "3",
        top: false,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
    ],
    // table
    tableHeaders: [
      {
        align: "center",
        width: "",
        key: "date",
        sortable: false,
        title: "開立日期",
      },
      { title: "繳費單編號", key: "num", align: "center", sortable: false },
      {
        title: "繳費項目",
        key: "title",
        sortable: false,
        align: "center",
      },
      {
        title: "繳費金額",
        key: "sum",
        align: "end",
        sortable: false,
      },
      {
        title: "可繳款方式",
        key: "type",
        align: "center",
        sortable: false,
      },
      {
        title: "繳費期限",
        key: "date",
        align: "center",
        sortable: false,
      },
      {
        title: "數量",
        key: "qty",
        align: "center",
        sortable: false,
      },
      {
        title: "付款",
        key: "pay",
        align: "center",
        sortable: false,
      },
      {
        title: "繳費方式",
        key: "status",
        align: "center",
        sortable: false,
      },
      {
        title: "收據下載",
        key: "download",
        align: "center",
        sortable: false,
      },
    ],
    tableData: [
      {
        date: "2024/06/01",
        num: "N1130606",
        title: ["泳訓班個人報名費"],
        sum: 10000,
        type: "信,A,超...",
        download: ["N12345678", "N22345678"],
      },
      {
        date: "2024/06/02",
        num: "N1130607",
        title: ["籃球場租金"],
        sum: 10000,
        type: "信,A,超...",
        download: ["N12345678"],
      },
      {
        date: "2024/06/03",
        num: "N1130608",
        title: [
          "113年5月 餐聽、超商、書局繳費通知單",
          "113年5月 餐聽、超商、書局繳費通知單",
        ],
        sum: 10000,
        type: "信,A,超... 餐聽、超商、書局繳費通知單餐聽、超商、書局繳費通知單",
        download: ["N12345678"],
      },
    ],
  }),
  methods: {},
  components: {
    datepickerModalVue,
  },
  computed: {
    pageCount() {
      return Math.ceil(this.tableData.length / this.itemsPerPage);
    },
  },
};
</script>
