<template>
  <v-container class="container">
    <h2 class="text-primary title">對帳管理</h2>
    <p class="text-gray dateInfo">
      僅保留六個月內繳費記錄，超過六個月以上請至歷史繳費記錄查詢
    </p>
    <!-- 查詢區塊 start -->
    <v-btn
      class="mr-0 ml-auto bg-secondary-gradient searchBtn"
      prepend-icon="mdi-magnify"
      rounded="lg"
      @click="expand = !expand"
      >查詢</v-btn
    >
    <v-expand-transition>
      <div height="300" v-show="expand">
        <v-card class="mb-6 searchContent">
          <div class="pa-6">
            <v-form>
              <v-container>
                <v-row class="formGrp">
                  <v-col cols="12" lg="12">
                    <label class="text-gray font-weight-bold d-block" for=""
                      >繳費單編號
                    </label>
                    <v-text-field
                      label="文字標準表單"
                      density="compact"
                      single-line
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col cols="12" lg="12">
                    <label class="text-gray font-weight-bold d-block" for=""
                      >訂單編號
                    </label>
                    <v-text-field
                      label="文字標準表單"
                      density="compact"
                      single-line
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col cols="12" lg="12">
                    <label class="text-gray font-weight-bold d-block" for=""
                      >繳款人姓名
                    </label>
                    <v-text-field
                      label="文字標準表單"
                      density="compact"
                      single-line
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="formGrp datePick">
                  <v-col class="pb-0" cols="12" lg="2">
                    <label class="text-gray font-weight-bold" for=""
                      >申請日期</label
                    >
                  </v-col>
                  <v-col cols="12">
                    <v-row
                      ><v-col>
                        <datepickerModalVue> </datepickerModalVue
                      ></v-col>
                      <v-col class="tilde" cols="auto"> ~ </v-col>
                      <v-col> <datepickerModalVue> </datepickerModalVue></v-col
                    ></v-row>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="d-flex justify-center">
                    <v-btn class="ma-1 bg-light-gradient text-gray btn">
                      重設
                    </v-btn>
                    <v-btn class="ma-1 bg-secondary-gradient btn"> 查詢 </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </div>
        </v-card>
      </div>
    </v-expand-transition>
    <!-- 查詢區塊 end  -->
    <div class="d-flex my-5">
      <v-text-field
        label="請輸入查詢關鍵字"
        density="compact"
        single-line
        hide-details="auto"
      ></v-text-field>
      <v-btn class="bg-secondary-gradient px-6" prepend-icon="mdi-magnify"
        >搜尋</v-btn
      >
    </div>

    <!-- tablet 卡片列 start -->
    <div class="mb-5">
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">YYMMDD01-信用卡對帳檔</h4>
          <p
            class="text-gray d-flex font-weight-medium text-body-1 pt-2 align-center ml-5"
          >
            共7筆資料，含3筆訂單資料
          </p>
        </v-card-title>
        <v-row class="px-2 mb-5">
          <v-col
            class="justify-end d-flex align-center mb-0 flex-wrap"
            cols="12"
          >
            <v-btn variant="flat" class="bg-secondary-gradient elevation-3 mx-2"
              >確認核帳</v-btn
            >
            <p class="text-gray w-100 text-right mt-2">
              <v-icon>mdi-alert-outline</v-icon>
              原手續費與調整後手續費加總金額需相符
            </p>
          </v-col>

          <v-data-table
            class="dataTable"
            v-model:page="page"
            :headers="tableHeaders"
            :items="tableData"
            item-value="num"
            :items-per-page="itemsPerPage"
            hide-default-footer
          >
            <template v-slot:item.input="{ item }">
              <div class="my-5">
                <div class="d-flex align-center">
                  <v-text-field
                    value="850"
                    disabled
                    class="mb-3"
                    style="width: 80px"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                  <v-btn
                    class="bg-secondary-gradient ml-2"
                    variant="text"
                    color="#fff"
                    size="small"
                    icon="mdi-pen"
                  ></v-btn>
                </div>
                <div class="d-flex align-center">
                  <v-text-field
                    label=""
                    class="mb-3"
                    value="850"
                    style="width: 80px"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                  <v-btn
                    variant="text"
                    class="bg-gray-gradient ml-2"
                    size="small"
                    color="#fff"
                    icon="mdi-checkbox-marked-circle-outline"
                  ></v-btn>
                </div>
              </div>
            </template>

            <template v-slot:body.append>
              <tr>
                <td colspan="6"></td>
                <td colspan="1" class="text-center font-weight-bold text-h7">
                  總計
                </td>
                <td colspan="1" class="text-center font-weight-bold">
                  137,130
                </td>
                <td colspan="1" class="text-center font-weight-bold">
                  2,620.21
                </td>
                <td
                  colspan="1"
                  class="text-center font-weight-bold text-primary"
                >
                  2,620
                </td>
                <td colspan="1" class="text-center font-weight-bold">
                  138,750
                </td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <td colspan="8"></td>

                <td colspan="1" class="text-center font-weight-bold py-4">
                  <div class="">
                    <span
                      class="text-no-wrap font-weight-bold text-h7 d-block mb-1"
                      >請款金額</span
                    >
                    <span class="text-primary"> 428,390</span>
                  </div>
                </td>
                <td colspan="1" class="text-center font-weight-bold">
                  <div class="">
                    <span
                      class="text-no-wrap font-weight-bold text-h7 d-block mb-1"
                      >銀行總手續費</span
                    >
                    <span class="text-primary"> 2,620</span>
                  </div>
                </td>
                <td colspan="1" class="text-center">
                  <div class="font-weight-bold">
                    <span
                      class="text-no-wrap font-weight-bold text-h7 d-block mb-1"
                      >撥款金額</span
                    >
                    <span class="text-primary"> 138,750</span>
                  </div>
                </td>
                <td colspan="2"></td>
              </tr>
            </template>

            <!-- <template v-slot:bottom>
              <div class="d-flex">
                <div class="text-end mt-6 mr-6 text-h6">
                  <span>合併帳單金額共$ 20,000元</span>
                </div>
                <div class="text-end mt-6 mr-6 text-h6">
                  <span>合併帳單金額共$ 20,000元</span>
                </div>
              </div>
            </template> -->
          </v-data-table>
        </v-row>
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

    // table
    tableHeaders: [
      {
        align: "center",
        width: "",
        key: "num",
        sortable: false,
        title: "NO.",
      },
      {
        align: "center",
        width: "",
        key: "date",
        sortable: true,
        title: "撥款日期",
      },
      { title: "訂單編號", key: "order", align: "center", sortable: true },
      {
        title: "繳費單編號",
        key: "paymentNum",
        align: "center",
        sortable: true,
      },
      {
        title: "刷卡金額",
        key: "sum",
        align: "center",
        sortable: true,
      },
      {
        title: "業管單位",
        key: "class",
        align: "center",
        sortable: true,
      },
      {
        title: "計畫代碼",
        key: "title",
        sortable: true,
        align: "center",
      },
      {
        title: "繳費項目金額",
        key: "pay",
        align: "center",
        sortable: true,
      },
      {
        title: "估算手續費",
        key: "handling",
        align: "center",
        sortable: true,
      },
      {
        title: "調整後手續費",
        align: "center",
        width: "",
        key: "input",
        sortable: false,
      },
      {
        title: "淨額",
        key: "net",
        align: "center",
        sortable: true,
      },
      {
        title: "收據編號",
        key: "receipt",
        align: "center",
        sortable: false,
      },
      {
        title: "收據開立日期",
        key: "receiptDate",
        align: "center",
        sortable: false,
      },
    ],
    tableData: [
      {
        num: "1",
        date: "2024/06/01",
        order: "A123456",
        paymentNum: "N118890",
        sum: 10000,
        class: "單位名稱",
        title: "計畫代碼1",
        pay: "50,050",
        handling: "850.85",
        net: "46,247",
        receipt: "N00000001",
        receiptDate: "2024/06/30 17:14:15",
      },
      {
        num: "2",
        date: "2024/06/01",
        order: "A123456",
        paymentNum: "N118890",
        sum: 10000,
        class: "單位名稱",
        title: "計畫代碼2",
        pay: "50,050",
        handling: "850.85",
        net: "46,247",
        receipt: "N00000001",
        receiptDate: "2024/06/30 17:14:15",
      },
      {
        num: "3",
        date: "2024/06/01",
        order: "A123456",
        paymentNum: "N118890",
        sum: 10000,
        class: "單位名稱",
        title: "計畫代碼3",
        pay: "50,050",
        handling: "850.85",
        net: "46,247",
        receipt: "N00000001",
        receiptDate: "2024/06/30 17:14:15",
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
