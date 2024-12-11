<template>
  <v-container class="container minHeightContainer">
    <h2 class="text-primary title">【公告】2024/10/31(四) 平台維修通知</h2>
    <!-- tablet 卡片列 start -->
    <div class="mb-5">
      <v-card class="elevation-0" color="transparent">
        <v-row class="px-2 mb-3">
          <v-col class="" cols="12">
            <p class="my-5">
              本月系統升級時間為2024/10/31(四) 01:00-02:00
              ，將無法登入系統，如有不便敬請見諒。
            </p>
            <v-card class="pa-3 boardCard">
              <v-img
                aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              ></v-img>
            </v-card>
          </v-col>
          <v-col class="d-flex align-center mb-0 flex-wrap" cols="12"> </v-col>
        </v-row>
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">檔案下載</h4>
        </v-card-title>
        <v-row>
          <v-col>
            <v-list class="downloadList bg-transparent">
              <v-list-item
                v-for="item in files"
                :key="item.title"
                :title="item.title"
              >
                <template v-slot:append>
                  <v-chip
                    class="chip mt-0 elevation-0 text-blue-lighten-5 mx-1"
                    variant="elevated"
                    size="small"
                    color="blue-lighten-1"
                  >
                    jpg
                  </v-chip>
                  <v-chip
                    class="chip mt-0 mx-1 elevation-0 text-deep-orange-lighten-5"
                    variant="elevated"
                    size="small"
                    color="deep-orange-darken-3"
                  >
                    pdf
                  </v-chip>
                  <v-chip
                    class="chip mt-0 mx-1 elevation-0 text-green-lighten-5"
                    variant="elevated"
                    size="small"
                    color="green-darken-3"
                  >
                    xls
                  </v-chip>
                  <v-chip
                    class="chip mt-0 mx-1 elevation-0 text-light-blue-lighten-5"
                    variant="elevated"
                    size="small"
                    color="light-blue-darken-3"
                  >
                    doc
                  </v-chip>
                </template>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <!-- tablet 卡片列 end -->
  </v-container>
</template>

<script>
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
    files: [
      {
        title: "公告圖片",
      },
      {
        title: "PDF檔案名稱",
      },
      {
        title: "DOC檔案名稱",
      },
      {
        title: "檔案名稱",
      },
    ],
  }),
  methods: {},
  components: {},
  computed: {
    pageCount() {
      return Math.ceil(this.tableData.length / this.itemsPerPage);
    },
  },
};
</script>
