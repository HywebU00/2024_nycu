<template>
  <v-table class="codeTable">
    <tbody>
      <tr>
        <th class="text-center">
          <div class="title">出納臨櫃繳費條碼</div>
        </th>
        <td>
          <v-sheet class="informationBlock codeInfoBlock">
            <v-card class="pa-3 codeCard">
              <v-img class="" cover src="@/assets/images/code_1.png"></v-img>
            </v-card>
          </v-sheet>
        </td>
      </tr>
      <tr>
        <th class="text-center">
          <div class="title">超商繳費條碼</div>
        </th>
        <td>
          <v-sheet class="informationBlock codeInfoBlock">
            <v-card class="pa-3 codeCard">
              <v-img class="" cover src="@/assets/images/code_1.png"></v-img>
            </v-card>
            <v-card class="pa-3 codeCard">
              <v-img class="" cover src="@/assets/images/code_1.png"></v-img>
            </v-card>
            <v-card class="pa-3 codeCard">
              <v-img class="" cover src="@/assets/images/code_1.png"></v-img>
            </v-card>
          </v-sheet>
        </td>
      </tr>
      <tr>
        <th class="text-center"><div class="title">ATM繳費資訊</div></th>
        <td>
          <v-sheet class="informationBlock codeInfoBlock">
            <v-card class="pa-3 w-100">
              <div class="container">
                <p>
                  您的ATM付款轉帳資訊如下 請於繳款期限
                  <span class="necessary">2024年06月27日23:59 </span
                  >之前完成付款：
                </p>
                <div class="info">
                  <div class="title">轉帳資料：</div>
                  <ul>
                    <li><span>銀行代碼</span> 013國泰世華</li>
                    <li><span>轉帳帳號</span> 1970062724002865</li>
                    <li><span>轉帳金額</span> $20,000</li>
                    <li><span>繳款期限</span> 2024年06月27日23:59</li>
                  </ul>
                </div>
                <ul class="message">
                  <li>
                    提醒您，如繳款期限到期仍未完成付款，此訂單將被自動取消
                  </li>
                  <li>此ATM轉帳帳號為虛擬帳號，僅供本次交易一次使用。</li>
                </ul>
              </div>
            </v-card>
          </v-sheet>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data: () => ({
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
};
</script>

<style></style>
