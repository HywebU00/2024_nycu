<template>
  <div class="frontLogin h-100 w-100 d-md-flex d-block justify-center">
    <v-btn class="languageBtn" color="gray" variant="outlined"
      >中文/English</v-btn
    >
    <div class="infoList">
      <v-container>
        <h1 class="d-flex align-center title">
          <v-img
            aspect-ratio="1/1"
            cover
            src="~@/assets/images/logo.png"
          ></v-img>
          <span class=""> 國立陽明交通大學</span>
        </h1>
        <h2 class="my-3 mb-5">繳費平台</h2>
        <h3 class="">
          登入NYCU繳費平台帳號 <br />(可切換中/英語系進行登入或註冊）
        </h3>
        <ul class="list">
          <li>
            <div class="listTitle">
              <span class="material-symbols-outlined"> person </span>
              <span> 選擇登入身份</span>
            </div>
            <ul>
              <li>在校學生、教職員工。</li>
              <li>校友、廠商、校外人士</li>
            </ul>
          </li>
          <li>
            <div class="listTitle">
              <span class="material-symbols-outlined"> price_change </span
              ><span>選擇「本校各項費用繳款」或「固定規費項目」</span>
            </div>
            <ul>
              <li>本校各項費用繳款：屬個人/企業之繳款單。</li>
              <li>校固定規費項目：各項文件申請、鑰匙遺失申請等。</li>
            </ul>
          </li>
          <li>
            <div class="listTitle">
              <span class="material-symbols-outlined"> login </span
              ><span> 帳號驗證與登入</span>
            </div>
            <ul>
              <li>
                輸入登入帳號（Email）進行帳號驗證：如您曾經註冊過，或校方曾開立繳費單至您的Email
                信箱，系統將存有您的Email紀錄，輸入完Email帳號後，可選擇『一次性驗證碼』或『密碼登入』登入繳費平台。
              </li>
              <li>
                選擇「一次性驗證碼」登入者：系統將寄送一則驗證信至您的Email信箱，請收信完成驗證程序後即可登入。
              </li>
              <li>選擇「密碼登入」者：直接輸入密碼登入。</li>
              <li>
                未註冊過：請在輸入Email帳號驗證後，依據您的身份『個人/公司行號』完成註冊資料填寫，點選註冊後，系統將寄發一則驗證信至您的Email信箱，請收信完成驗證程序後即可登入。
              </li>
            </ul>
          </li>
        </ul>
      </v-container>
    </div>
    <div class="loginFrom">
      <div class="">
        <h1 class="text-gray mb-3 text-center">
          感謝您！已發送至<span class="block"></span>您的信箱
        </h1>
        <p class="text-center">請至Email信箱收信，完成驗證程序後即可登入</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radios: "one",
    };
  },
  methods: {},
  mounted() {},
};
</script>
