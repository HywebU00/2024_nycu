<template>
  <v-container class="container">
    <h2 class="text-primary title">批次建立繳費單</h2>
    <p class="text-gray dateInfo">建立日期 2024/06/10 15:30</p>
    <div class="mb-5 content">
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">
            收費項目選擇
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
          <v-col class="justify-end d-flex mt-3" cols="12">
            <p class="text-gray">拖拉以調整排序</p>
          </v-col>
          <paymentTable></paymentTable>
          <v-col class="mb-5 justify-end d-flex" cols="12">
            <p class="text-primary">檔案類型：* xlsx</p>
          </v-col>
        </v-row>
        <div>
          <v-form class="paymentForm">
            <v-container>
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
    <div class="d-flex justify-center pa-2 pt-6 btnList">
      <v-btn
        text="送出"
        class="bg-secondary-gradient elevation-3 btn"
        variant="flat"
      ></v-btn>
    </div>
  </v-container>
</template>

<script>
import paymentTable from "@/components/paymentTable.vue";
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
  }),
  methods: {},
  components: {
    paymentTable,
    datepickerModalVue,
  },
};
</script>
