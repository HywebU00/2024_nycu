<template>
  <v-container class="">
    <h2 class="text-primary title">對帳管理</h2>

    <!-- tab 元件 start -->
    <v-card color="transparent" class="tabComponent elevation-0">
      <v-tabs v-model="tab" class="mb-3" color="secondary">
        <v-tab :value="1">信用卡</v-tab>
        <v-tab :value="2">掃碼支付</v-tab>
        <v-tab :value="3">ATM繳費</v-tab>
        <v-tab :value="4">臨櫃繳費</v-tab>
        <v-tab :value="5">超商繳費</v-tab>
        <v-tab :value="6">悠遊卡</v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="n in 6" :key="n" :value="n">
          <v-container fluid class="pa-0">
            <v-row>
              <v-col>
                <div class="d-flex my-5">
                  <v-text-field
                    label="請輸入查詢關鍵字"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                  <v-btn
                    class="bg-secondary-gradient px-6"
                    prepend-icon="mdi-magnify"
                    >搜尋</v-btn
                  >
                </div>

                <v-card color="transparent" class="tabComponent elevation-0">
                  <v-tabs v-model="tab2" class="my-5">
                    <v-tab value="1">核帳資料</v-tab>
                    <v-tab value="2">請撥款狀態資料</v-tab>
                    <v-tab value="3">信用卡訂單編號狀態</v-tab>
                    <v-tab value="4">總收資料</v-tab>
                  </v-tabs>

                  <v-card-text>
                    <v-tabs-window v-model="tab2">
                      <v-tabs-window-item v-for="o in 5" :key="o" :value="o">
                        <!-- tablet 卡片列 start -->
                        <div class="mb-5">
                          <v-card class="elevation-0" color="transparent">
                            <v-card-title class="pa-0 dataTableTitle mb-3">
                              <h4 class="text-primary subtitle d-flex">
                                繳費明細確認 {{ o }}
                              </h4>
                            </v-card-title>
                            <v-row class="px-2 mb-5">
                              <v-col
                                class="justify-end d-flex align-center"
                                cols="12"
                              >
                                <v-menu transition="slide-x-transition">
                                  <template v-slot:activator="{ props }">
                                    <v-icon
                                      v-bind="props"
                                      class="text-gary"
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
                                <v-btn
                                  variant="flat"
                                  class="bg-secondary-gradient elevation-3 mx-2"
                                  >合併帳單</v-btn
                                >
                                <p class="text-gray">點擊收據號碼下載</p>
                              </v-col>

                              <v-data-table
                                class="dataTable"
                                show-select
                                v-model:page="page"
                                :headers="tableHeaders"
                                :items="tableData"
                                item-value="num"
                                :items-per-page="itemsPerPage"
                                hide-default-footer
                                show-expand
                                color="gray"
                              >
                                <template v-slot:item.type="{ item }">
                                  <v-tooltip :text="item.type">
                                    <template v-slot:activator="{ props }">
                                      <div
                                        v-bind="props"
                                        class="text-truncate truncateStyle"
                                      >
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
                                    合併帳單
                                  </v-chip>
                                  <div
                                    v-for="(i, index) in item.title"
                                    :key="index"
                                    class="tableTitle text-start my-2"
                                  >
                                    {{ i }}
                                  </div>
                                </template>
                                <template v-slot:item.qty="{ item }">
                                  <v-select
                                    width="150"
                                    label="下拉式選單"
                                    single-line
                                    density="compact"
                                    hide-details="auto"
                                    :items="['選項ㄧ', '選項二', '選項三']"
                                  ></v-select>
                                </template>
                                <template v-slot:item.pay="{ item }">
                                  <v-btn
                                    color="gray"
                                    variant="text"
                                    icon="mdi-credit-card-outline"
                                    class="ma-2"
                                  >
                                  </v-btn>
                                </template>
                                <template v-slot:item.tag="{ item }">
                                  <v-chip :color="getColor(item.tag)"
                                    >{{ item.tag }}
                                  </v-chip>
                                </template>
                                <template v-slot:item.status="{ item }">
                                  <v-dialog max-width="420">
                                    <template
                                      v-slot:activator="{
                                        props: activatorProps,
                                      }"
                                    >
                                      <v-btn
                                        v-bind="activatorProps"
                                        class="my-2 bg-secondary-gradient"
                                        block
                                        >解除併單</v-btn
                                      >
                                    </template>
                                    <template v-slot:default="{ isActive }">
                                      <v-card>
                                        <v-card-text class="pa-12 text-center">
                                          確認解除合併帳單？
                                        </v-card-text>
                                        <v-card-actions
                                          class="d-flex justify-center"
                                        >
                                          <div class="pa-4 pt-2">
                                            <v-btn
                                              text="取消"
                                              variant="flat"
                                              class="bg-light-gradient text-gray elevation-3 btn"
                                              @click="isActive.value = false"
                                            ></v-btn>
                                            <v-btn
                                              class="bg-secondary-gradient elevation-3 btn"
                                              text="確定"
                                              variant="flat"
                                              @click="isActive.value = false"
                                            ></v-btn>
                                          </div>
                                        </v-card-actions>
                                      </v-card>
                                    </template>
                                  </v-dialog>
                                  <v-btn
                                    class="my-2 bg-light-gradient text-gray"
                                    block
                                    >變更</v-btn
                                  >
                                </template>
                                <template v-slot:item.download="{ item }">
                                  <div
                                    v-for="(i, index) in item.download"
                                    :key="index"
                                    class="text-decoration-underline text-gray cursor-pointer mb-1"
                                  >
                                    {{ i }}
                                    <!-- <router-link to="/">Home</router-link> -->
                                  </div>
                                </template>
                                <template v-slot:item.action="{ item }">
                                  <v-menu transition="slide-y-transition">
                                    <template v-slot:activator="{ props }">
                                      <v-btn
                                        icon="mdi-cog"
                                        class="ma-2"
                                        v-bind="props"
                                        color="gray"
                                        variant="text"
                                      >
                                      </v-btn>
                                    </template>
                                    <v-card class="pa-2">
                                      <v-btn
                                        variant="outlined"
                                        class="my-1"
                                        block
                                        color="gray"
                                        >開立繳款單</v-btn
                                      >
                                      <v-btn
                                        variant="outlined"
                                        class="my-1"
                                        block
                                        color="gray"
                                        >通知繳款人</v-btn
                                      >
                                      <v-btn
                                        variant="outlined"
                                        class="my-1"
                                        block
                                        color="gray"
                                        >標示已處理</v-btn
                                      >
                                      <div class="pa-2">
                                        <span class="font-weight-medium"
                                          >上次通知日期:</span
                                        >
                                        <p>2024/06/06 17:05</p>
                                      </div>
                                    </v-card>
                                  </v-menu>
                                </template>
                                <!-- expanded-row start -->
                                <template
                                  v-slot:expanded-row="{ columns, item }"
                                >
                                  <tr>
                                    <td :colspan="columns.length">
                                      <div class="my-3">
                                        <payTable />
                                      </div>
                                    </td>
                                  </tr>
                                </template>
                                <!-- expanded-row end -->
                                <template v-slot:bottom>
                                  <div
                                    class="d-flex align-center justify-center pagination"
                                  >
                                    <span
                                      >共{{ tableData.length }}筆資料，第1/{{
                                        pageCount || 1
                                      }}頁，每頁顯示 </span
                                    >
                                    <v-text-field
                                      :model-value="itemsPerPage"
                                      class="mx-2"
                                      max="15"
                                      density="compact"
                                      min="1"
                                      type="number"
                                      hide-details
                                      @update:model-value="
                                        itemsPerPage = parseInt($event, 10)
                                      "
                                    ></v-text-field>
                                    <span>筆</span>
                                  </div>
                                  <div class="text-center mt-6">
                                    <v-pagination
                                      active-color="gray"
                                      color="gray"
                                      size="small"
                                      v-model="page"
                                      :length="pageCount"
                                    ></v-pagination>
                                  </div>
                                </template>
                              </v-data-table>
                            </v-row>
                            <div class="d-flex justify-center pa-4 pt-2">
                              <v-btn
                                text="取消"
                                variant="flat"
                                class="bg-light-gradient text-gray elevation-3 btn mx-2"
                                @click="isActive.value = false"
                              ></v-btn>
                              <v-btn
                                class="bg-secondary-gradient elevation-3 btn mx-2"
                                text="付款"
                                variant="flat"
                                @click="isActive.value = false"
                              ></v-btn>
                            </div>
                          </v-card>
                        </div>
                        <!-- tablet 卡片列 end -->
                      </v-tabs-window-item>
                    </v-tabs-window>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
    <!-- tab 元件 end -->
  </v-container>
</template>

<script>
//載入 Ｖuetify組合 日期選擇器
import datepickerModalVue from "@/components/datepickerModal.vue";
import payTable from "@/components/payTable.vue";
export default {
  data: () => ({
    tab: null,
    tab2: null,
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
        title: "核帳",
        key: "tag",
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
      {
        title: "動作",
        key: "action",
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
        tag: "已核帳",
      },
      {
        date: "2024/06/02",
        num: "N1130607",
        title: ["籃球場租金"],
        sum: 10000,
        type: "信,A,超...",
        download: ["N12345678"],
        tag: "待確認",
      },
      {
        date: "2024/06/03",
        num: "N1130608",
        title: ["113年5月 餐聽、超商、書局繳費通知單"],
        sum: 10000,
        type: "信,A,超... 餐聽、超商、書局繳費通知單餐聽、超商、書局繳費通知單",
        download: ["N12345678"],
        tag: "核帳",
      },
    ],
  }),
  methods: {
    getColor(item) {
      if (item === "已核帳") return "primary";
      else if (item === "待確認") return "error";
      else return "lightblue";
    },
  },
  components: {
    datepickerModalVue,
    payTable,
  },
  computed: {
    pageCount() {
      return Math.ceil(this.tableData.length / this.itemsPerPage);
    },
  },
};
</script>
