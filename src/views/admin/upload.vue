<template>
  <v-container class="container">
    <h2 class="text-primary title">批次作廢繳費單預覽</h2>
    <p class="text-gray dateInfo">建立日期 2024/06/10 15:30</p>
    <div class="mb-5 content">
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">上傳檔案</h4>
        </v-card-title>
        <v-row>
          <v-col class="justify-space-between d-flex mt-3" cols="12">
            <div
              class="text-subtitle-2 text-primary underlineTitle ml-0 ml-md-6"
            >
              下載繳費單格式檔
            </div>
          </v-col>
        </v-row>
        <div class="upload">
          <v-row>
            <v-col class="title">
              <span
                class="icon material-symbols-outlined d-flex justify-center text-center"
              >
                cloud_upload
              </span>
              <div class="d-flex justify-center text-center">
                請把檔案拖拉到此框<br />或是
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn class="bg-secondary-gradient btn elevation-0"
                >選擇檔案</v-btn
              >
              <v-btn class="bg-secondary-gradient btn elevation-0"
                >重新上傳</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
    <div class="d-flex justify-center pa-2 pt-6 btnList">
      <v-btn
        text="送出"
        class="bg-secondary-gradient elevation-3 btn"
        variant="flat"
        @click="isActive.value = false"
      ></v-btn>
    </div>
  </v-container>
</template>

<script>
//載入 Ｖuetify組合 日期選擇器
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
  components: {},
};
</script>
