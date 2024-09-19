<template>
  <v-container class="container">
    <h2 class="text-primary title">繳費資訊</h2>

    <!-- tablet 卡片列 start -->
    <div class="mb-5">
      <!-- 個人資料確認 start -->
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">個人資料確認</h4>
        </v-card-title>
        <div>
          <v-form>
            <v-btn
              class="d-flex ml-auto mr-0"
              color="primary"
              prepend-icon="mdi-square-edit-outline"
              variant="text"
              >編輯</v-btn
            >
            <!-- 無法編輯 請增加  disabled  -->
            <v-btn
              disabled
              class="d-flex ml-auto mr-0"
              color="primary"
              prepend-icon="mdi-square-edit-outline"
              variant="text"
              >編輯</v-btn
            >
            <!-- 無法編輯 請增加  disabled  -->
            <v-container>
              <v-row class="formGrp">
                <v-col cols="12" md="6" lg="3">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >姓名/收據抬頭
                  </label>
                  <!-- 無法編輯 請增加  disabled  -->
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    value="凌網科技"
                    disabled
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                  <!-- 無法編輯 請增加  disabled  -->
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >Email</label
                  >
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >電話</label
                  >
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >統編</label
                  >
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >聯絡人姓名</label
                  >
                  <v-text-field
                    placeholder="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="d-flex justify-center pa-2 pt-6 btnList">
                <v-btn
                  text="儲存"
                  class="bg-secondary-gradient elevation-3 btn"
                  variant="flat"
                ></v-btn>
              </div>
            </v-container>
          </v-form>
        </div>
      </v-card>
      <!-- 個人資料確認 end -->
      <!-- 繳費明細確認 start -->
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">繳費明細確認</h4>
        </v-card-title>
        <v-row class="px-2 mt-6">
          <v-data-table
            class="dataTable"
            v-model:page="page"
            :headers="tableHeaders"
            :items="tableData"
            item-value="num"
            :items-per-page="itemsPerPage"
            hide-default-footer
          >
            <template v-slot:item.type="{ item }">
              <v-tooltip :text="item.type">
                <template v-slot:activator="{ props }">
                  <div v-bind="props" class="text-truncate truncateStyle">
                    {{ item.type }}
                  </div>
                </template>
              </v-tooltip>
            </template>
            <template v-slot:item.title="{ item }">
              <v-chip
                v-if="item.title.length > 1"
                class="chip"
                variant="elevated"
                size="small"
                color="secondary"
              >
                申請停用
              </v-chip>
              <div
                v-for="(i, index) in item.title"
                :key="index"
                class="tableTitle text-start my-2"
              >
                {{ i }}
              </div>
            </template>
            <template v-slot:item.download="{ item }">
              <div
                v-for="(i, index) in item.download"
                :key="index"
                class="text-decoration-underline text-gray cursor-pointer mb-1"
              >
                {{ i }}
              </div>
            </template>
            <template v-slot:bottom>
              <div class="text-end mt-6 mr-6 text-h6">
                <span>合併帳單金額共$ 20,000元</span>
              </div>
            </template>
          </v-data-table>
          <v-col class="justify-end d-flex align-center" cols="12">
            <p class="text-gray">合併帳單說明</p>
            <v-menu transition="slide-x-transition">
              <template v-slot:activator="{ props }">
                <v-icon
                  v-bind="props"
                  class="text-gary mx-2"
                  icon="mdi-information-outline"
                  color="gray"
                >
                </v-icon>
              </template>
              <v-sheet class="infoCard pa-2 ma-2">
                <p>
                  說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明
                </p>
              </v-sheet>
            </v-menu>
          </v-col>
        </v-row>
      </v-card>
      <!-- 繳費明細確認 end -->
      <!-- 繳款方式 start -->
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">繳款方式</h4>
        </v-card-title>
        <v-form>
          <v-container>
            <v-row class="formGrp">
              <v-col>
                <v-radio-group inline hide-details="auto" color="secondary">
                  <v-radio label="ATM轉帳" value="1"></v-radio>
                  <v-radio label="eATM轉帳" value="2"></v-radio>
                  <v-radio label="信用卡" value="3"></v-radio>
                  <v-radio label="超商繳費" value="4"></v-radio>
                  <v-radio label="臨櫃繳費(出納組)" value="5"></v-radio>
                  <v-radio label="掃碼支付" value="6"></v-radio> </v-radio-group
              ></v-col>
            </v-row>
            <v-row class="formGrp">
              <v-col>
                <label class="text-gray font-weight-bold mb-3 d-block" for=""
                  >請選擇支付方式</label
                ><v-radio-group inline hide-details="auto" color="secondary">
                  <v-radio label="街口支付" value="1"></v-radio>
                  <v-radio label="Linepay" value="2"></v-radio>
                  <v-radio label="Taiwanpay" value="3"></v-radio>
                  <v-radio label="支付寶" value="4"></v-radio> </v-radio-group
              ></v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-sheet class="informationBlock mb-3">
          <div class="title">臨櫃繳費說明：</div>
          <ul>
            <li>說明文字說明文字說明文字</li>
          </ul>
        </v-sheet>
        <div class="d-flex justify-center pa-4 pt-2">
          <v-btn
            text="取消"
            variant="flat"
            class="bg-light-gradient text-gray elevation-3 btn mx-2"
            @click="isActive.value = false"
          ></v-btn>
          <v-btn
            class="bg-secondary-gradient elevation-3 btn mx-2"
            text="顯示繳費單"
            variant="flat"
            @click="isActive.value = false"
          ></v-btn>
        </div>
      </v-card>
      <!-- 繳款方式 end -->
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
