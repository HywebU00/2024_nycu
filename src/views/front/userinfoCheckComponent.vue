<template>
  <v-container class="container">
    <!-- 收據下載 start -->
    <h2 class="text-primary title">收據下載</h2>
    <div class="mb-5 content">
      <v-card class="elevation-0" color="transparent">
        <v-sheet class="informationBlock mb-3">
          <div class="title">收據下載說明：</div>
          <ul>
            <li>收據僅能下載一次，請透過手機截圖或點選下載保存檔案。</li>
          </ul>
        </v-sheet>
        <div class="invoiceTable">
          <table class="">
            <thead>
              <tr>
                <th>繳款人</th>
                <th>收入科目</th>
                <th>金額</th>
                <th>事由</th>
                <th>備註</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ＯＯＸＸ有限公司</td>
                <td>贊助ＯＯ社ＯＯ活動</td>
                <td class="num">$5,000</td>
                <td>贊助ＯＯ社ＯＯ活動</td>
                <td>112D10007C課外組 50905</td>
              </tr>
              <tr>
                <td>ＯＯＸＸ有限公司</td>
                <td>贊助ＯＯ社ＯＯ活動</td>
                <td class="num">$5,000</td>
                <td>贊助ＯＯ社ＯＯ活動</td>
                <td>112D10007C課外組 50905</td>
              </tr>
              <tr class="footer">
                <td colspan="5"><span>合計</span> 伍仟元整</td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-card>
      <!-- 收據下載 end -->
    </div>
    <div class="d-flex justify-center pa-4 pt-2">
      <v-btn
        class="bg-secondary-gradient elevation-0 btn mx-2"
        text="您已於 2024/07/15 15:15:20 下載收據"
        variant="flat"
        disabled
      ></v-btn>
      <v-btn
        class="bg-secondary-gradient elevation-3 btn mx-2"
        text="收據下載"
        variant="flat"
      ></v-btn>
    </div>
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
        title: "份數",
        key: "qty",
        align: "center",
        sortable: false,
      },
      {
        title: "小計",
        key: "pay",
        align: "center",
        sortable: false,
      },
      {
        title: "繳費期限",
        key: "date",
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
        qty: 1,
        pay: 10000,
      },
      {
        date: "2024/06/02",
        num: "N1130607",
        title: ["籃球場租金"],
        sum: 10000,
        qty: 1,
        pay: 10000,
      },
      {
        date: "2024/06/03",
        num: "N1130608",
        title: ["113年5月 餐聽、超商、書局繳費通知單"],
        sum: 10000,
        qty: 1,
        pay: 10000,
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
