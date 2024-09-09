<template>
  <v-app id="front">
    <v-app-bar>
      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0 d-md-none menuBtn"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon>
      <!-- 平台logo start -->
      <div class="logoImg">
        <v-img class="logo" src="~@/assets/images/logo.png" alt="" />
        <h1>國立陽明交通大學</h1>
      </div>
      <!-- 平台logo end -->
      <!-- 使用者 登入視窗start -->
      <template>
        <v-card flat> </v-card>
      </template>
      <div class="userInfo ml-auto">
        <div class="mr-3">中文/English</div>
        <div class="bg-secondary-gradient">您好</div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :class="['navDrawer', { hidden: rail }]"
      :rail="rail"
      permanent
      :rail-width="railWidth"
      width="256"
      @click="rail = false"
    >
      <v-list
        density="compact"
        nav
        class="text-navText"
        :opened="opened"
        @update:opened="menuTarget"
      >
        <!-- 待繳費項目 start -->
        <v-list-group value="待繳費項目">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="待繳費項目"
              color="primary"
              append-icon=""
            >
              <span class="material-symbols-outlined text-primary mr-2">
                price_change
              </span>
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 待繳費項目 end -->
        <!-- 固定規費項目 start -->
        <v-list-group value="固定規費項目">
          <template v-slot:activator="{ props }">
            <v-list-item
              class="hasSubtitle"
              v-bind="props"
              title="固定規費項目"
              color="primary"
              append-icon=""
              subtitle="文件申請、論匙遊失"
            >
              <!-- <span>文件申請、論匙遊失</span> -->
              <span class="material-symbols-outlined text-primary mr-2">
                add_card
              </span>
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 固定規費項目 end -->
        <!-- 捐款 start -->
        <v-list-group value="捐款">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="捐款"
              color="primary"
              append-icon=""
            >
              <span class="material-symbols-outlined text-primary mr-2">
                payments
              </span>
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 捐款 end -->
        <!-- 繳費查詢與收據下載start -->
        <v-list-group value="繳費查詢與收據下載">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="繳費查詢與收據下載"
              color="primary"
              append-icon=""
            >
              <span class="material-symbols-outlined text-primary mr-2">
                system_update_alt
              </span>
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 繳費查詢與收據下載 end -->
        <!-- 歷史繳費記錄 start -->
        <v-list-group value="歷史繳費記錄">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="歷史繳費記錄"
              color="primary"
              append-icon=""
            >
              <span class="material-symbols-outlined text-primary mr-2">
                receipt_long
              </span>
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 歷史繳費記錄 end -->
        <!-- 個人資料 start -->
        <v-list-group value="個人資料">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="個人資料" color="primary">
              <span class="material-symbols-outlined text-primary mr-2">
                manage_accounts
              </span>
            </v-list-item>
          </template>
          <v-list-item
            title="個人資料修改"
            value="個人資料修改"
            @click="pushLink('')"
          >
          </v-list-item>
          <v-list-item title="修改密碼" value="修改密碼" @click="pushLink('')">
          </v-list-item>
        </v-list-group>

        <!-- 個人資料 end -->
        <!-- 登入頁面 start -->
        <v-list-group value="login">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              append-icon=""
              title="login"
              @click="pushLink('frontLogin')"
            >
              <span class="material-symbols-outlined text-primary mr-2">
                login
              </span>
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 登入頁面 end -->
      </v-list>

      <!--  navigation-drawer end-->
    </v-navigation-drawer>
    <v-main>
      <div class="elevation-3">
        <pageView />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import pageView from "./pageView.vue";
export default {
  data: () => ({
    tab: null,
    drawer: true,
    rail: false,
    value: 0,
    windowWidth: "",
    railWidth: "0",
    open: ["Users"],
    theme: "default",
    themeDark: "false",
    opened: ["收費項目管理"],
    overlay: false,
    isSmallScreen: window.innerWidth < 768,
  }),
  components: {
    pageView,
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 959 ? null : (this.rail = false);
      this.isSmallScreen = window.innerWidth < 991;
    },
    menuTarget(newOpened) {
      this.opened = newOpened.slice(-1);
    },
    pushLink(item) {
      this.$router.push({ path: item });
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
