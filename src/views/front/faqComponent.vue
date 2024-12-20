<template>
  <v-container class="container minHeightContainer">
    <h2 class="text-primary title">FAQ 常見問題</h2>

    <!-- tablet 卡片列 start -->
    <div class="mb-5">
      <v-card class="elevation-0" color="transparent">
        <!-- 標籤列 start -->
        <v-row class="mt-1">
          <v-col cols="12" class="py-0"
            ><div>
              <v-chip-group v-model="selection">
                <v-chip color="primary" link label> 繳費 </v-chip>
                <v-chip color="primary" link label> 收據 </v-chip>
                <v-chip color="primary" link label> 其他 </v-chip>
              </v-chip-group>
            </div>
          </v-col>
        </v-row>
        <!-- 標籤列 end -->
        <v-row>
          <v-col>
            <div>
              <v-expansion-panels class="mb-3 pa-1 expansionPanels">
                <v-expansion-panel class="expansionPanel">
                  <v-expansion-panel-title
                    class="text-h6 font-weight-black text-white bg-gray-gradient"
                  >
                    <div class="num">1.</div>
                    Ｑ：如何查詢待繳費項目？
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="">
                      <div class="title">A:</div>
                      <ul>
                        <li>限繳費期限內之帳單合併繳費</li>
                        <li>合併帳單擇最近日繳費期限為繳費截止日期</li>
                        <li>各繳費單需含共同繳費方式方可合併帳單</li>
                        <li>
                          合併帳單後，如需解除併單或更改繳費方式，請至「繳費查詢與收據下載」設定
                        </li>
                      </ul>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="expansionPanel">
                  <v-expansion-panel-title
                    class="text-h6 font-weight-black text-white bg-gray-gradient"
                  >
                    <div class="num">2.</div>
                    Ｑ：固定規費繳費方式？
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="">
                      <div class="title">A:</div>
                      <ul>
                        <li>限繳費期限內之帳單合併繳費</li>
                        <li>合併帳單擇最近日繳費期限為繳費截止日期</li>
                        <li>各繳費單需含共同繳費方式方可合併帳單</li>
                        <li>
                          合併帳單後，如需解除併單或更改繳費方式，請至「繳費查詢與收據下載」設定
                        </li>
                      </ul>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="expansionPanel">
                  <v-expansion-panel-title
                    class="text-h6 font-weight-black text-white bg-gray-gradient"
                  >
                    <div class="num">3.</div>
                    Ｑ：為什麼無法合併帳單？
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="">
                      <div class="title">A:</div>
                      <ul>
                        <li>限繳費期限內之帳單合併繳費</li>
                        <li>合併帳單擇最近日繳費期限為繳費截止日期</li>
                        <li>各繳費單需含共同繳費方式方可合併帳單</li>
                        <li>
                          合併帳單後，如需解除併單或更改繳費方式，請至「繳費查詢與收據下載」設定
                        </li>
                      </ul>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="expansionPanel">
                  <v-expansion-panel-title
                    class="text-h6 font-weight-black text-white bg-gray-gradient"
                  >
                    <div class="num">4.</div>
                    Ｑ：繳費方式有哪些？
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="">
                      <div class="title">A:</div>
                      <ul>
                        <li>限繳費期限內之帳單合併繳費</li>
                        <li>合併帳單擇最近日繳費期限為繳費截止日期</li>
                        <li>各繳費單需含共同繳費方式方可合併帳單</li>
                        <li>
                          合併帳單後，如需解除併單或更改繳費方式，請至「繳費查詢與收據下載」設定
                        </li>
                      </ul>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
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
