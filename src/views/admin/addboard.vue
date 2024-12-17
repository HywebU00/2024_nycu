<template>
  <v-container class="container">
    <h2 class="text-primary title">新增單筆繳費單</h2>
    <!-- <p class="text-gray dateInfo">建立日期 2024/06/10 15:30</p> -->
    <div class="mb-5 content">
      <v-card class="elevation-0" color="transparent">
        <v-row class="">
          <v-col>
            <v-card-title class="pa-0 dataTableTitle mb-3">
              <h4 class="text-primary subtitle d-flex">新增/編輯公告-中文版</h4>
            </v-card-title>
            <div>
              <v-form class="boardForm">
                <v-container>
                  <v-row class="formGrp">
                    <v-col class="pb-0" cols="12" lg="">
                      <label class="text-gray font-weight-bold" for=""
                        >中文標題:</label
                      >
                    </v-col>
                    <v-col cols="12" md="6" lg="6" class="pt-0 d-flex">
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
                        >發布時間:</label
                      >
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <datepickerModalVue> </datepickerModalVue>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp datePick">
                    <v-col class="pb-0">
                      <label class="text-gray font-weight-bold" for=""
                        >下架時間:</label
                      >
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <datepickerModalVue> </datepickerModalVue>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp datePick">
                    <v-col class="pb-0">
                      <label class="text-gray font-weight-bold" for=""
                        >張貼者</label
                      >
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-alert class="pa-2 bg-blue-lighten-5">出納組</v-alert>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col class="pb-0" cols="12" lg="">
                      <label class="text-gray font-weight-bold" for=""
                        >顯示方式:</label
                      >
                    </v-col>
                    <v-col cols="12" md="6" lg="6" class="pt-0">
                      <v-select
                        label="下拉式選單"
                        density="compact"
                        single-line
                        class="h-100"
                        hide-details="auto"
                        :items="['重要', '一般']"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp checkboxGrp">
                    <v-col class="pb-0">
                      <label class="text-gray font-weight-bold mb-3" for=""
                        >張貼到:</label
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
                            label="繳費平台"
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
                            label="內部公告"
                            hide-details="auto"
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp checkboxGrp">
                    <v-col class="pb-0">
                      <label class="text-gray font-weight-bold mb-3" for=""
                        >置頂公告:</label
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
                            label="置頂公告"
                            hide-details="auto"
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
            <v-card-title class="pa-0 dataTableTitle mb-3">
              <h4 class="text-primary subtitle d-flex">中文公告內容</h4>
            </v-card-title>
            <div class="pa-4">
              <quill-editor style="height: 200px"></quill-editor>
            </div>
            <v-card-title class="pa-0 dataTableTitle mb-3">
              <h4 class="text-primary subtitle d-flex">附件圖片</h4>
            </v-card-title>
            <div class="pa-4">
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
                    <v-btn class="bg-gray-gradient btn elevation-0"
                      >選擇檔案</v-btn
                    >
                    <v-btn class="bg-gray-gradient btn elevation-0"
                      >重新上傳</v-btn
                    >
                  </v-col>
                </v-row>
              </div>
              <v-row>
                <v-col class="justify-space-between d-flex mt-3" cols="12">
                  <div class="text-subtitle-2 text-grey-darken-1 ml-0 ml-md-5">
                    請注意：接受JPG,PNG等圖片格式，檔案大小請勿超過5MB。
                  </div>
                </v-col>
              </v-row>
            </div>
            <v-card-title class="pa-0 dataTableTitle mb-3">
              <h4 class="text-primary subtitle d-flex">附件檔案上傳</h4>
            </v-card-title>
            <div class="pa-4">
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
                    <v-btn class="bg-gray-gradient btn elevation-0"
                      >選擇檔案</v-btn
                    >
                    <v-btn class="bg-gray-gradient btn elevation-0"
                      >重新上傳</v-btn
                    >
                  </v-col>
                </v-row>
              </div>
              <v-row>
                <v-col class="justify-space-between d-flex mt-3" cols="12">
                  <div class="text-subtitle-2 text-grey-darken-1 ml-0 ml-md-5">
                    請注意：接受xls,pdf,word,等影片格式，檔案大小請勿超過500MB(內網)或250MB(外網)。
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col lg="2" md="3" cols="12" class="fixedCard">
            <v-card class="pa-2 mb-3">
              <h4 class="text-h7 text-primary font-weight-bold mb-2">
                發布狀態
              </h4>
              <v-divider></v-divider>
              <v-form>
                <v-container>
                  <v-row class="formGrp">
                    <v-col class="pa-0">
                      <v-select
                        label="下拉式選單"
                        density="compact"
                        single-line
                        class="h-100"
                        hide-details="auto"
                        :items="['選項ㄧ', '選項二', '選項三']"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col cols="">
                      <v-btn block class="bg-primary-gradient">確定發布</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <!-- <div class="d-flex justify-end px-4">
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
    </div> -->
  </v-container>
</template>

<script>
//載入 Ｖuetify組合 日期選擇器
import datepickerModalVue from "@/components/datepickerModal.vue";
//載入 文字編輯器
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
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
  }),
  methods: {},
  components: {
    datepickerModalVue,
    QuillEditor,
  },
};
</script>
