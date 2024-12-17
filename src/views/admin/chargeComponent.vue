<template>
  <v-container class="container">
    <h2 class="text-primary title">繳費資訊</h2>
    <!-- 查詢區塊 start -->
    <v-btn
      class="mr-0 ml-auto bg-secondary-gradient searchBtn"
      prepend-icon="mdi-magnify"
      rounded="lg"
      @click="expand = !expand"
      >查詢</v-btn
    >
    <v-expand-transition>
      <div height="300" v-show="expand">
        <v-card class="mb-6 searchContent">
          <div class="pa-6">
            <v-form>
              <v-container>
                <v-row class="formGrp">
                  <v-col cols="12" lg="6">
                    <label class="text-gray font-weight-bold d-block" for=""
                      >收費項目名稱
                    </label>
                    <v-text-field
                      label="文字標準表單"
                      density="compact"
                      single-line
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <label class="text-gray font-weight-bold d-block" for=""
                      >計畫編號</label
                    >
                    <v-text-field
                      label="文字標準表單"
                      density="compact"
                      single-line
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="formGrp datePick">
                  <v-col class="pb-0" cols="12" lg="2">
                    <label class="text-gray font-weight-bold" for=""
                      >申請日期</label
                    >
                  </v-col>
                  <v-col cols="12">
                    <v-row
                      ><v-col>
                        <datepickerModalVue> </datepickerModalVue
                      ></v-col>
                      <v-col class="tilde" cols="auto"> ~ </v-col>
                      <v-col> <datepickerModalVue> </datepickerModalVue></v-col
                    ></v-row>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col cols="12" lg="6">
                    <label class="text-gray font-weight-bold d-block" for=""
                      >單位
                    </label>
                    <v-select
                      label="下拉式選單"
                      single-line
                      density="compact"
                      hide-details="auto"
                      :items="['選項ㄧ', '選項二', '選項三']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <label class="text-gray font-weight-bold d-block" for=""
                      >收費項目</label
                    >
                    <v-combobox
                      multiple
                      class="comboboxSelect"
                      hide-details="auto"
                      :items="['收費項目Ａ', '收費項目Ｂ', '收費項目Ｃ']"
                    ></v-combobox>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col cols="12" lg="6">
                    <label class="text-gray font-weight-bold d-block" for=""
                      >計畫編號
                    </label>
                    <v-combobox
                      multiple
                      class="comboboxSelect"
                      hide-details="auto"
                      :items="['計畫編號Ａ', '計畫編號Ｂ', '計畫編號Ｃ']"
                    ></v-combobox>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <label class="text-gray font-weight-bold d-block" for=""
                      >繳費方式</label
                    >
                    <v-combobox
                      multiple
                      class="comboboxSelect"
                      hide-details="auto"
                      :items="['信用卡', '臨櫃', 'ATM轉帳']"
                    ></v-combobox>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col class="pb-0" cols="12" lg="2">
                    <label class="text-gray font-weight-bold" for=""
                      >收費性質</label
                    >
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <v-select
                      label="下拉式選單"
                      single-line
                      density="compact"
                      hide-details="auto"
                      :items="['選項ㄧ', '選項二', '選項三']"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col class="pb-0" cols="12" lg="2">
                    <label class="text-gray font-weight-bold" for=""
                      >收費性質</label
                    >
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <v-select
                      label="下拉式選單"
                      single-line
                      density="compact"
                      hide-details="auto"
                      :items="['選項ㄧ', '選項二', '選項三']"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col class="pb-0" cols="12" lg="2">
                    <label class="text-gray font-weight-bold" for=""
                      >收費性質</label
                    >
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <v-select
                      label="下拉式選單"
                      single-line
                      density="compact"
                      hide-details="auto"
                      :items="['選項ㄧ', '選項二', '選項三']"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex justify-center">
                    <v-btn class="ma-1 bg-light-gradient text-gray btn">
                      重設
                    </v-btn>
                    <v-btn class="ma-1 bg-secondary-gradient btn"> 查詢 </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </div>
        </v-card>
      </div>
    </v-expand-transition>
    <!-- 查詢區塊 end  -->
    <!-- tablet 卡片列 start -->
    <div class="mb-5">
      <v-card class="elevation-0" color="transparent">
        <v-card-title class="pa-0 dataTableTitle mb-3">
          <h4 class="text-primary subtitle d-flex">
            計畫編號 N1130145 - 業管單位 -共4筆
          </h4>
          <v-select
            class="mb-3 ml-auto text-gray bg-white"
            width="200"
            label="多筆歸戶"
            single-line
            density="compact"
            hide-details="none"
            variant="outlined"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-card-title>
        <v-row>
          <v-col class="mb-3 justify-end d-flex" cols="12">
            <v-dialog class="dialogCard" max-width="800" scrollable>
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  variant="flat"
                  class="bg-secondary-gradient elevation-3"
                  prepend-icon="mdi-plus"
                  v-bind="activatorProps"
                  >新增收費項目</v-btn
                >
              </template>
              <template v-slot:default="{ isActive }">
                <v-card title="新增/編輯收費項目">
                  <div class="py-0 editBtn">
                    <v-btn
                      color="primary"
                      prepend-icon="mdi-square-edit-outline"
                      variant="text"
                      >編輯</v-btn
                    >
                  </div>
                  <v-card-text class="px-4">
                    <div>
                      <h4 class="text-primary subtitle ml-3">
                        收費項目
                        <v-chip
                          class="ml-2 font-weight-bold"
                          variant="elevated"
                          size="small"
                          color="secondary"
                        >
                          申請停用
                        </v-chip>
                      </h4>
                      <div class="ml-4 mt-2 text-gray info">
                        申請時間:2024/06/07 13:00
                      </div>
                      <v-form>
                        <v-container>
                          <v-row class="formGrp">
                            <v-col class="pb-0" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >申請單位</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
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
                                >申請代碼</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
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
                                >申請人姓名</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
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
                                >電話/分機</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
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
                                >Email</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
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
                              <label
                                class="text-gray font-weight-bold mb-3 d-block"
                                for=""
                                >收費項目說明
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-textarea
                                hide-details="auto"
                                variant="outlined"
                              ></v-textarea>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-0" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >收費性質
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                label="下拉式選單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col>
                              <label
                                class="text-gray font-weight-bold mb-3 d-block"
                                for=""
                                >是否允許繳款人自行繳費？</label
                              ><v-radio-group
                                inline
                                hide-details="auto"
                                color="secondary"
                              >
                                <v-radio label="是" value="1"></v-radio>
                                <v-radio
                                  label="否"
                                  value="2"
                                ></v-radio> </v-radio-group
                            ></v-col>
                          </v-row>
                          <v-row class="formGrp checkboxGrp">
                            <v-col class="">
                              <label
                                class="text-gray font-weight-bold mb-3 d-block"
                                for=""
                                >收費方式</label
                              >
                              <v-row class="mt-2">
                                <v-col
                                  cols="12"
                                  lg="auto"
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
                                  class="item py-0 mb-3"
                                >
                                  <v-checkbox
                                    color="white"
                                    label="悠遊卡"
                                    hide-details="auto"
                                  ></v-checkbox>
                                </v-col>
                                <v-col
                                  cols="12"
                                  lg="auto"
                                  class="py-0 mb-3 item"
                                >
                                  <div class="d-flex checkboxHasSelect">
                                    <v-checkbox
                                      color="white"
                                      label="ATM轉帳"
                                      hide-details="auto"
                                      class="pr-0"
                                    >
                                    </v-checkbox>
                                    <!-- variant="outlined" -->
                                    <v-select
                                      label="下拉式選單"
                                      single-line
                                      density="compact"
                                      width="180"
                                      class="pl-0"
                                      hide-details="auto"
                                      :items="['選項ㄧ', '選項二', '選項三']"
                                    ></v-select>
                                  </div>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-0" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >電子收據</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                label="下拉式選單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-0" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >審核單位</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                label="下拉式選單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col>
                              <label
                                class="text-gray font-weight-bold mb-3 d-block"
                                for=""
                                >固定繳費金額</label
                              ><v-radio-group
                                inline
                                hide-details="auto"
                                color="secondary"
                              >
                                <v-radio label="是" value="1"></v-radio>
                                <v-text-field
                                  label="文字標準表單"
                                  density="compact"
                                  single-line
                                  hide-details="auto"
                                ></v-text-field>
                                <v-radio
                                  label="否"
                                  value="2"
                                ></v-radio> </v-radio-group
                            ></v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-0" cols="12" lg="">
                              <label
                                class="text-gray font-weight-bold d-block mb-3"
                                for=""
                                >停用說明
                                <span class="ml-2 text-gray info"
                                  >退回時間:2024/06/07 13:00</span
                                >
                              </label>
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-textarea
                                hide-details="auto"
                                variant="outlined"
                              ></v-textarea>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                      <h4 class="text-primary subtitle my-3 ml-3">
                        主計室確認
                      </h4>
                      <v-form>
                        <v-container>
                          <v-row class="formGrp">
                            <v-col class="pb-0" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >主計經費編號</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
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
                                >會計科目</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
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
                      <h4 class="text-primary subtitle my-3 ml-3">
                        出納組確認
                      </h4>
                      <v-form>
                        <v-container>
                          <v-row class="formGrp">
                            <v-col class="pb-0" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >校區別</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                label="下拉式選單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-0" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >銀行帳戶</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
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
                                >特店代號</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                label="下拉式選單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-0" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >企業識別碼</label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                label="下拉式選單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col>
                              <label
                                class="text-gray font-weight-bold mb-3 d-block"
                                for=""
                                >是否採總認列</label
                              ><v-radio-group
                                inline
                                hide-details="auto"
                                color="secondary"
                              >
                                <v-radio label="是" value="1"></v-radio>
                                <v-radio
                                  label="否"
                                  value="2"
                                ></v-radio> </v-radio-group
                            ></v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                    </div>
                  </v-card-text>
                  <v-card-actions class="d-block">
                    <div class="d-flex justify-end px-4">
                      <ul class="infoList">
                        <li class="text-gray">
                          新增人員系統管理者(admin)新增時間2023/02/08 16:56:12
                        </li>
                        <!-- <li class="text-gray">
                        異動人員系統管理者(admin)異動時間2023/06/27 11:30:25
                      </li> -->
                      </ul>
                    </div>
                    <!-- <v-spacer></v-spacer> -->
                    <div class="d-flex justify-center pa-4 pt-2">
                      <v-btn
                        text="暫存"
                        variant="flat"
                        class="bg-light-gradient text-gray elevation-3 btn"
                        @click="isActive.value = false"
                      ></v-btn>
                      <v-btn
                        class="bg-secondary-gradient elevation-3 btn"
                        text="送出"
                        variant="flat"
                        @click="isActive.value = false"
                      ></v-btn>
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
          </v-col>
        </v-row>

        <div class="tableList d-sm-none">
          <table>
            <thead>
              <tr>
                <th>申請日期</th>
                <th>計畫編號</th>
                <th>收費項目名稱</th>
                <th>單位名稱</th>
                <th>收費性質</th>
                <th>申請項目</th>
                <th>狀態</th>
                <th>動作</th>
                <th>收費項目</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 3" :key="i">
                <td>2024/06/01</td>
                <td>N1130145</td>
                <td>113年學生會活動攤販租金</td>
                <td>
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </td>
                <td>一般收費</td>
                <td>申請新增</td>
                <td>申請中</td>
                <td>
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
                </td>
                <td>
                  <v-select
                    width="160"
                    label="下拉式選單"
                    single-line
                    density="compact"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="paginationStyle">
            <div class="d-flex justify-center align-center">
              共7筆資料，第1/2頁，每頁顯示
              <v-text-field
                label=""
                density="compact"
                single-line
                type="number"
                hide-details="auto"
              ></v-text-field>
              筆
            </div>
            <v-pagination class="mt-6" :length="3" size="small"></v-pagination>
          </div>
        </div>
        <dataTable class="d-sm-block d-none"></dataTable>
      </v-card>
    </div>
    <!-- tablet 卡片列 end -->
  </v-container>
</template>

<script>
import dataTable from "@/components/dataTable.vue";
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
    windowWidth: "",
    mobileWidth: false,
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
  methods: {
    tableAddDataAttributes(obj) {
      const el = document.querySelectorAll(obj.elemClass);
      el.forEach((i) => {
        const tableItem = i.querySelectorAll("table");
        tableItem.forEach((i) => {
          setTrAttr(i);
        });
        i.classList.add("loaded");
      });
      function setTrAttr(i) {
        const thList = i.querySelectorAll("th");
        const trList = i.querySelectorAll("tr");
        trList.forEach((trItem) => {
          const tdList = trItem.querySelectorAll("td");
          tdList.forEach((i, idx) => {
            tdList[idx].setAttribute(
              `data-${obj.dataName}`,
              `${thList[idx].textContent}`
            );
          });
        });
      }
    },
    getWidth() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 960) {
        this.mobileWidth = false;
      } else {
        this.mobileWidth = true;
      }
    },
  },
  mounted() {
    this.getWidth();

    this.tableAddDataAttributes({
      elemClass: ".tableList", // 目標table
      dataName: "title", // tableList樣式 加上 data-title
    });
    window.addEventListener("resize", function () {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 960) {
        this.mobileWidth.value = false;
      } else {
        this.mobileWidth.value = true;
      }
    });
  },
  watch() {},
  components: {
    dataTable,
    datepickerModalVue,
  },
};
</script>
