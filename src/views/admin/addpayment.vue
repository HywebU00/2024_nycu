<template>
  <v-container class="container">
    <h2 class="text-primary title">新增單筆繳費單</h2>
    <!-- <p class="text-gray dateInfo">建立日期 2024/06/10 15:30</p> -->
    <div class="mb-5 content">
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">
            繳費單號 N1130606
            <p
              class="text-gray d-flex font-weight-medium text-body-1 pt-1 justify-center align-center ml-3"
            >
              申請日期 2024/06/10 15:30
            </p>
          </h4>
        </v-card-title>
        <div>
          <v-form class="paymentForm">
            <v-container>
              <v-row class="formGrp">
                <v-col class="pb-0">
                  <label class="text-gray font-weight-bold d-block" for=""
                    >角色設定:</label
                  ></v-col
                >
                <v-col class="pt-1 pb-0" cols="12" md="6" lg="6">
                  <v-radio-group inline hide-details="auto" color="secondary">
                    <v-radio label="校內人士" value="1"></v-radio>
                    <v-radio label="校外人士或其他" value="2"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12" class="">
                  <v-dialog class="dialogCard" max-width="600" scrollable>
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        class="bg-gray-gradient elevation-0 text-subtitle-2 ml-3"
                        v-bind="activatorProps"
                      >
                        歷史開單紀錄查詢</v-btn
                      >
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-card title="歷史開單紀錄">
                        <v-card-text class="px-4 mt-0">
                          <div>
                            <v-form class="elevation-3 mb-7 mx-3">
                              <v-container>
                                <v-row class="formGrp">
                                  <v-col class="" cols="12" lg="">
                                    <label
                                      class="text-gray font-weight-bold"
                                      for=""
                                      >收費項目名稱</label
                                    >
                                  </v-col>
                                  <v-col cols="12" class="pt-0 d-flex">
                                    <!-- variant="outlined" -->
                                    <v-text-field
                                      label="請輸入查詢關鍵字"
                                      density="compact"
                                      single-line
                                      hide-details="auto"
                                    ></v-text-field>
                                    <v-btn
                                      class="bg-secondary-gradient"
                                      prepend-icon="mdi-magnify"
                                      >搜尋</v-btn
                                    >
                                  </v-col>
                                </v-row>
                              </v-container>
                            </v-form>
                            <h4 class="text-primary subtitle ma-3">查詢清單</h4>
                            <v-data-table
                              class="dataTable paymentTable mt-6 px-3"
                              v-model:page="page"
                              :headers="historyheaders"
                              :items="historylist"
                              item-value="title"
                              :items-per-page="itemsPerPage"
                              hide-default-footer
                              show-select
                            >
                            </v-data-table>
                            <v-empty-state
                              class="text-gray"
                              title="查無資料"
                            ></v-empty-state>
                          </div>
                        </v-card-text>
                        <v-card-actions class="d-block">
                          <div class="d-flex justify-center pa-4 pt-2">
                            <v-btn
                              text="取消"
                              class="bg-light-gradient text-gray elevation-3 btn"
                              variant="flat"
                              @click="isActive.value = false"
                            ></v-btn>
                            <v-btn
                              text="確定"
                              class="bg-secondary-gradient elevation-3 btn"
                              variant="flat"
                              @click="isActive.value = false"
                            ></v-btn>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="">
                  <label class="text-gray font-weight-bold" for=""
                    >姓名/聯絡人:</label
                  >
                </v-col>
                <v-col cols="12" md="6" lg="6" class="pt-0 d-flex">
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                  <v-btn class="bg-gray-gradient elevation-0"> 搜尋 </v-btn>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="">
                  <label class="text-gray font-weight-bold" for=""
                    >Email:</label
                  >
                </v-col>
                <v-col cols="12" md="6" lg="6" class="pt-0">
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="">
                  <label class="text-gray font-weight-bold" for=""
                    >學號/人事代號:</label
                  >
                </v-col>
                <v-col cols="12" md="6" lg="6" class="pt-0">
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp datePick">
                <v-col class="pb-0">
                  <label class="text-gray font-weight-bold" for=""
                    >繳費期限:</label
                  >
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <datepickerModalVue> </datepickerModalVue>
                </v-col>
              </v-row>
              <v-row class="formGrp mt-6">
                <v-col class="pb-0" cols="12" lg="">
                  <label class="text-gray font-weight-bold mb-3 d-block" for=""
                    >收費項目說明
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col class="pt-0" cols="12" md="6" lg="6">
                  <v-textarea
                    hide-details="auto"
                    variant="outlined"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="">
                  <label class="text-gray font-weight-bold" for="">備註:</label>
                </v-col>
                <v-col cols="12" md="6" lg="6" class="pt-0">
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
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">
            繳費項目
            <p
              class="text-gray d-flex font-weight-medium text-body-1 pt-1 justify-center align-center ml-3"
            >
              收費項目選擇
            </p>
            <v-dialog class="dialogCard" max-width="600" scrollable>
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  class="bg-primary-gradient elevation-0 text-subtitle-2 ml-3 moreBtn"
                  size="x-small"
                  v-bind="activatorProps"
                  ><span class="material-symbols-outlined">
                    more_horiz
                  </span></v-btn
                >
              </template>
              <template v-slot:default="{ isActive }">
                <v-card title="選取收費項目">
                  <v-card-text class="px-4 mt-0">
                    <div>
                      <v-form class="elevation-3 mb-7 mx-3">
                        <v-container>
                          <v-row class="formGrp">
                            <v-col class="" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >收費項目名稱</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0 d-flex">
                              <!-- variant="outlined" -->
                              <v-text-field
                                label="請輸入查詢關鍵字"
                                density="compact"
                                single-line
                                hide-details="auto"
                              ></v-text-field>
                              <v-btn
                                class="bg-secondary-gradient"
                                prepend-icon="mdi-magnify"
                                >搜尋</v-btn
                              >
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                      <h4 class="text-primary subtitle ma-3">收費項目清單</h4>
                      <v-list class="mx-3 paymentList" :items="items"></v-list>
                    </div>
                  </v-card-text>
                  <v-card-actions class="d-block">
                    <div class="d-flex justify-center pa-4 pt-2">
                      <v-btn
                        text="關閉"
                        class="bg-light-gradient text-gray elevation-3 btn"
                        variant="flat"
                        @click="isActive.value = false"
                      ></v-btn>
                    </div>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </h4>
        </v-card-title>
        <v-row>
          <v-data-table
            class="dataTable paymentTable mt-6"
            v-model:page="page"
            :headers="headers"
            :items="desserts"
            item-value="date"
            :items-per-page="itemsPerPage"
            hide-default-footer
            hover
          >
            <template v-slot:item.delete="{ item }">
              <v-btn
                color="gray"
                variant="text"
                icon="mdi-trash-can-outline"
                class="ma-2"
              >
              </v-btn>
            </template>
            <template v-slot:item.pay="{ item }">
              <!-- class 增加 inputText-end 輸入數字 向右靠齊 -->
              <v-text-field
                label="請輸入金額"
                density="compact"
                single-line
                hide-details="auto"
                class=""
              ></v-text-field>
            </template>
            <template v-slot:item.file="{ item }">
              <div></div>
            </template>
            <template v-slot:bottom>
              <div class="text-end mt-6 mr-6 text-h6">
                <span>合併帳單金額共$ 20,000元</span>
              </div>
            </template>
          </v-data-table>
        </v-row>
        <div>
          <v-form class="paymentForm">
            <v-container>
              <v-row class="formGrp datePick">
                <v-col class="pb-0">
                  <label class="text-gray font-weight-bold" for=""
                    >允許併單？</label
                  >
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-radio-group inline hide-details="auto" color="secondary">
                    <v-radio label="是" value="1"></v-radio>
                    <v-radio label="否" value="2"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row class="formGrp checkboxGrp">
                <v-col class="pb-0">
                  <label class="text-gray font-weight-bold mb-3" for=""
                    >可收費方式:</label
                  >
                </v-col>
                <v-col cols="12" md="9">
                  <v-row class="mt-2">
                    <v-col
                      cols="12"
                      lg="auto"
                      md="4"
                      sm="6"
                      class="item py-0 mb-3"
                    >
                      <v-checkbox
                        color="white"
                        label="eATM轉帳"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="auto"
                      md="4"
                      sm="6"
                      class="item py-0 mb-3"
                    >
                      <v-checkbox
                        color="white"
                        label="線上信用卡繳費"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="auto"
                      md="4"
                      sm="6"
                      class="item py-0 mb-3"
                    >
                      <v-checkbox
                        color="white"
                        label="超商繳款"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="auto"
                      md="4"
                      sm="6"
                      class="item py-0 mb-3"
                    >
                      <v-checkbox
                        color="white"
                        label="掃碼支付"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="auto"
                      md="4"
                      sm="6"
                      class="item py-0 mb-3"
                    >
                      <v-checkbox
                        color="white"
                        label="出納臨櫃繳款"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="auto"
                      md="4"
                      sm="6"
                      class="item py-0 mb-3"
                    >
                      <v-checkbox
                        color="white"
                        label="悠遊卡"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </v-card>
    </div>
    <div class="d-flex justify-end px-4">
      <ul class="infoList">
        <li class="text-gray">
          新增人員系統管理者(admin)新增時間2023/02/08 16:56:12
        </li>
      </ul>
    </div>
    <div class="d-flex justify-center pa-2 pt-6 btnList">
      <v-btn
        text="暫存"
        variant="flat"
        class="bg-light-gradient text-gray elevation-3 btn"
      ></v-btn>
      <v-btn
        class="bg-secondary-gradient elevation-3 btn"
        text="送出"
        variant="flat"
      ></v-btn>
      <v-btn
        text="關閉"
        class="bg-light-gradient text-gray elevation-3 btn"
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
    items: [
      {
        title: "收費項目A",
        value: 1,
        props: {
          appendIcon: "mdi-minus-box-outline",
        },
      },
      {
        title: "收費項目B",
        value: 2,
        props: {
          appendIcon: "mdi-minus-box-outline",
        },
      },
      {
        title: "收費項目C",
        value: 3,
        props: {
          appendIcon: "mdi-plus-box",
        },
      },
      {
        title: "收費項目D",
        value: 4,
        props: {
          appendIcon: "mdi-minus-box-outline",
        },
      },
    ],
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
    headers: [
      {
        align: "center",
        width: "30px",
        key: "delete",
        sortable: false,
        title: "刪除",
      },
      { title: "排序", key: "num", align: "center", width: "30px" },
      {
        title: "收費項目",
        key: "name",
        align: "start",
        sortable: false,
        width: "300px",
      },
      {
        title: "繳費金額",
        key: "pay",
        align: "center",
        sortable: false,
        width: "200px",
      },
      {
        title: "小計",
        key: "total",
        align: "end",
        sortable: false,
      },
    ],
    desserts: [
      {
        num: 1,
        name: "113年學生會活動攤販租金",
        total: "16,000",
      },
      {
        num: 2,
        name: "收費項目B",
        total: "16,000",
      },
      {
        num: 3,
        name: "收費項目C",
        total: "16,000",
      },
    ],
    historyheaders: [
      {
        title: "公司名稱",
        sortable: false,
        key: "title",
        align: "center",
        width: "300px",
      },
      {
        title: "姓名/聯絡人",
        key: "name",
        align: "center",
        sortable: false,
        width: "100px",
      },
      {
        title: "Email",
        key: "email",
        align: "center",
        sortable: false,
        width: "200px",
      },
      {
        title: "統編",
        key: "total",
        align: "center",
        sortable: false,
      },
    ],
    historylist: [
      {
        title: "第一股份有限公司1",
        name: "王O明",
        email: "a**@gmail.com",
        total: "22223333",
      },
      {
        title: "第一股份有限公司2",
        name: "王O明",
        email: "a**@gmail.com",
        total: "22223333",
      },
      {
        title: "第一股份有限公司3",
        name: "王O明",
        email: "a**@gmail.com",
        total: "22223333",
      },
    ],
  }),
  methods: {},
  components: {
    datepickerModalVue,
  },
};
</script>
