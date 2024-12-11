<template>
  <v-container class="container minHeightContainer">
    <h2 class="text-primary title">系統公告</h2>
    <div class="d-flex my-5">
      <v-select
        label="中文公告/英文公告"
        single-line
        density="compact"
        variant="outlined"
        hide-details="auto"
        :items="['選項ㄧ', '選項二', '選項三']"
      ></v-select>
    </div>

    <!-- tablet 卡片列 start -->
    <div class="mb-5">
      <v-card class="elevation-0" color="transparent">
        <v-row class="px-2 mb-5">
          <v-col
            class="justify-end d-flex align-center mb-0 flex-wrap"
            cols="12"
          >
            <v-btn variant="flat" class="bg-secondary-gradient elevation-3 mx-2"
              >新增公告事項</v-btn
            >
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
            <template v-slot:item.title="{ item }">
              <div class="d-flex align-center">
                <v-chip
                  v-if="item.new"
                  class="chip mt-0 elevation-0 text-deep-orange-lighten-1"
                  variant="elevated"
                  size="small"
                  color="deep-orange-lighten-5"
                >
                  最新
                </v-chip>
                <v-chip
                  v-if="item.draft"
                  class="chip mt-0 elevation-0 text-blue-lighten-1"
                  variant="elevated"
                  size="small"
                  color="blue-lighten-5"
                >
                  草稿
                </v-chip>
                <div class="">
                  {{ item.title }}
                </div>
              </div>
            </template>
            <template v-slot:item.action="{ item }">
              <div class="">
                <v-menu transition="slide-y-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon="mdi-chevron-down"
                      class="ma-2 bg-secondary-gradient downBtn"
                      v-bind="props"
                      size="x-small"
                    >
                    </v-btn>
                  </template>
                  <v-card class="pa-2">
                    <v-btn
                      variant="outlined"
                      class="mb-2"
                      block
                      color="gray"
                      v-bind="activatorProps"
                      >查閱</v-btn
                    >
                    <v-btn variant="outlined" block color="gray">停用</v-btn>
                  </v-card>
                </v-menu>
              </div>
            </template>
            <template v-slot:bottom>
              <div class="d-flex align-center justify-center pagination">
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
                  @update:model-value="itemsPerPage = parseInt($event, 10)"
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
    itemsPerPage: 5,
    selected: [],

    // table
    tableHeaders: [
      {
        align: "center",
        width: "",
        key: "date",
        sortable: false,
        title: "發布日期",
      },
      {
        title: "標題",
        key: "title",
        sortable: false,
        align: "center",
      },
      {
        title: "張貼於",
        key: "class",
        align: "center",
        sortable: false,
      },
      {
        title: "功能",
        align: "center",
        width: "",
        key: "action",
        sortable: false,
      },
    ],
    tableData: [
      {
        date: "2024/06/01",
        class: "繳費平台 內部公告",
        title: "【公告】2024/10/31(四) 平台維修通知",
        new: true,
      },
      {
        date: "2024/06/01",
        class: "繳費平台 內部公告",
        title: "【公告】2024/10/31(四) 平台維修通知",
        draft: true,
      },
      {
        date: "2024/06/01",
        class: "繳費平台 內部公告",
        title: "【公告】2024/10/31(四) 平台維修通知",
      },
      {
        date: "2024/06/01",
        class: "繳費平台 內部公告",
        title: "【公告】2024/10/31(四) 平台維修通知",
      },
      {
        date: "2024/06/01",
        class: "繳費平台 內部公告",
        title: "【公告】2024/10/31(四) 平台維修通知",
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
