<template>
  <v-container class="container">
    <h2 class="text-primary title">個人資料</h2>
    <div class="mb-5 content">
      <!-- 個人資料確認 start -->
      <v-card class="elevation-0" color="transparent">
        <div>
          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col cols="12">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >公司名稱
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    >
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
                <v-col cols="12">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >統一編號
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    >
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
                <v-col cols="12">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >聯絡人姓名
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col cols="12">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >聯絡人Email
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col cols="12">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >聯絡人電話
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col cols="12">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >請輸入舊密碼
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col cols="12">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >請輸入新密碼
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    messages="至少八個字元、大寫與小寫、一個數字、一個特殊字元(不含_)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col cols="12">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >請再輸入一次新密碼
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </v-card>
      <!-- 個人資料確認 end -->
    </div>
    <div class="d-flex justify-center pa-4 pt-2">
      <v-btn class="ma-1 bg-light-gradient text-gray btn"> 重設 </v-btn>
      <v-btn class="ma-1 bg-secondary-gradient btn"> 確認 </v-btn>
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
