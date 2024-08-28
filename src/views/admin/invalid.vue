<template>
  <v-container class="container">
    <h2 class="text-primary title">批次建立繳費單預覽</h2>
    <p class="text-gray dateInfo">建立日期 2024/06/10 15:30</p>
    <div class="mb-5 content">
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">
            繳費單檢視
            <p
              class="text-gray d-flex font-weight-medium text-body-1 pt-1 justify-center align-center ml-3"
            >
              共 150 筆 ,可作廢125筆
            </p>
          </h4>
        </v-card-title>
        <v-data-table
          class="dataTable mt-6 tableHover"
          v-model:page="page"
          :headers="headers"
          :items="data"
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
        </v-data-table>
      </v-card>
    </div>
    <div class="content">
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">繳費單作廢</h4>
        </v-card-title>
        <v-data-table
          class="dataTable mt-6"
          v-model:page="page"
          :headers="cancelHeaders"
          :items="cancelData"
          item-value="date"
          :items-per-page="itemsPerPage"
          hide-default-footer
        >
          <template v-slot:item.download="{ item }">
            <v-btn color="gray" variant="text" icon="mdi-upload" class="ma-2">
            </v-btn>
          </template>
          <template v-slot:item.cancel="{ item }">
            <v-dialog max-width="420">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  color="gray smallBtn"
                  variant="outlined"
                  prepend-icon="mdi-trash-can-outline"
                >
                  作廢
                </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-card-text class="pa-12 text-center">
                    確認作廢 125筆 繳費單？
                  </v-card-text>
                  <v-card-actions class="d-flex justify-center">
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
          </template>
        </v-data-table>
      </v-card>
    </div>
    <div class="d-flex justify-center pa-2 pt-6 btnList">
      <v-btn
        text="返回編輯"
        class="bg-light-gradient elevation-3 btn text-gray"
        variant="flat"
      ></v-btn>
      <v-btn
        text="確定"
        class="bg-secondary-gradient elevation-3 btn"
        variant="flat"
      ></v-btn>
    </div>
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
    headers: [
      {
        align: "center",
        width: "30px",
        key: "count",
        sortable: false,
        title: "#",
      },
      {
        align: "center",
        width: "",
        key: "date",
        sortable: false,
        title: "開立日期",
      },
      { title: "繳費單編號", key: "num", align: "center", width: "30px" },
      {
        title: "收費項目",
        key: "name",
        align: "start",
        sortable: true,
      },
      {
        title: "繳款人",
        key: "pay",
        align: "",
        sortable: true,
      },
      {
        title: "繳費狀況",
        key: "status",
        align: "",
        sortable: true,
      },
      {
        title: "是否可作廢",
        key: "cancel",
        align: "",
        sortable: true,
      },
    ],
    data: [
      {
        count: 1,
        date: "2024/06/15",
        num: "N1130606",
        name: "收費項目113年,05月水電費",
        pay: "王小明",
        status: "未繳費",
        cancel: "可作廢",
      },
      {
        count: 2,
        date: "2024/06/15",
        num: "N1130606",
        name: "收費項目113年",
        pay: "王小明",
        status: "已繳費",
        cancel: "不可作廢",
      },
      {
        count: 3,
        date: "2024/06/15",
        num: "N1130606",
        name: "收費項目113年",
        pay: "王小明",
        status: "未繳費",
        cancel: "可作廢",
      },
    ],
    // table cancel
    cancelHeaders: [
      {
        align: "center",
        width: "",
        key: "date",
        sortable: false,
        title: "上傳時間",
      },
      { title: "上傳筆數", key: "upload", align: "center", sortable: false },
      {
        title: "已繳費筆數",
        key: "pay",
        sortable: false,
        align: "center",
      },
      {
        title: "可作廢筆數",
        key: "delete",
        align: "center",
        sortable: false,
      },
      {
        title: "檔案下載",
        key: "download",
        align: "center",
        sortable: false,
      },
      {
        title: "作廢繳費單",
        key: "cancel",
        align: "end",
        sortable: false,
      },
    ],
    cancelData: [
      {
        date: "2024/06/01 15:15",
        upload: 150,
        pay: 25,
        delete: 125,
      },
    ],
  }),
  methods: {},
  components: {},
};
</script>
