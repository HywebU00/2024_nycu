<template>
  <v-app id="inspire">
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
        <h1>國立陽明交通大學<span>繳費平台管理系統</span></h1>
      </div>
      <!-- 平台logo end -->
      <!-- 使用者 登入視窗start -->
      <div class="userInfo ml-auto">
        <div class="bg-secondary-gradient">您好</div>
      </div>
      <!-- 使用者 登入視窗end -->
      <!-- <functionNavigation /> -->
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
        <!-- 網站管理 start -->
        <v-list-group value="網站管理">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-view-compact-outline"
              v-bind="props"
              title="網站管理"
              color="primary"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="網站管理1"
            value="網站管理1"
            @click="pushLink('')"
          >
          </v-list-item>
          <v-list-item
            title="網站管理2"
            value="網站管理2"
            @click="pushLink('')"
          >
          </v-list-item>
        </v-list-group>
        <!-- 網站管理 end -->
        <!-- 收費項目管理 start -->
        <v-list-group value="收費項目管理">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-credit-card-plus-outline"
              v-bind="props"
              title="收費項目管理"
              color="primary"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="項目管理"
            value="項目管理"
            @click="pushLink('charge')"
          >
          </v-list-item>
          <v-list-item
            title="收費項目審核"
            value="收費項目審核"
            @click="pushLink('')"
          >
          </v-list-item>
        </v-list-group>
        <!-- 收費項目管理 end -->
        <!-- 會員管理 start -->
        <v-list-group value="會員管理">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-account-multiple-outline"
              v-bind="props"
              title="會員管理"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="會員管理1"
            value="會員管理1"
            @click="pushLink('')"
          >
          </v-list-item>
          <v-list-item
            title="會員管理2"
            value="會員管理2"
            @click="pushLink('')"
          >
          </v-list-item>
        </v-list-group>
        <!-- 會員管理 end -->
        <!-- 會員管理 start -->
        <v-list-group value="系統管理">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-cog-outline"
              v-bind="props"
              title="系統管理"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="系統管理1"
            value="系統管理1"
            @click="pushLink('')"
          >
          </v-list-item>
          <v-list-item
            title="系統管理2"
            value="系統管理2"
            @click="pushLink('')"
          >
          </v-list-item>
        </v-list-group>
        <!-- 系統管理 end -->
        <!-- 帳號管理 start -->
        <v-list-group value="帳號管理">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-account-cog-outline"
              v-bind="props"
              title="帳號管理"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="帳號管理1"
            value="帳號管理1"
            @click="pushLink('')"
          >
          </v-list-item>
          <v-list-item
            title="帳號管理2"
            value="帳號管理2"
            @click="pushLink('')"
          >
          </v-list-item>
        </v-list-group>
        <!-- 帳號管理 end -->
        <!-- 中央權限控管 start -->
        <v-list-group value="中央權限控管">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-lock-outline"
              v-bind="props"
              title="中央權限控管"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="中央權限控管1"
            value="中央權限控管1"
            @click="pushLink('')"
          >
          </v-list-item>
          <v-list-item
            title="中央權限控管2"
            value="中央權限控管2"
            @click="pushLink('')"
          >
          </v-list-item>
        </v-list-group>
        <!-- 中央權限控管 end -->
        <!-- 繳費單管理 start -->
        <v-list-group value="繳費單管理">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-script-text-outline"
              v-bind="props"
              title="繳費單管理"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="繳費單維護與通知"
            value="繳費單維護與通知"
            @click="pushLink('')"
          >
          </v-list-item>
          <v-list-item
            title="批次建立管理"
            value="批次建立管理"
            @click="pushLink('')"
          >
          </v-list-item>
        </v-list-group>
        <!-- 繳費單管理 end -->
        <!-- 對帳管理 start -->
        <v-list-group value="對帳管理">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-feature-search-outline"
              v-bind="props"
              title="對帳管理"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="繳費查詢-依計畫"
            value="繳費查詢-依計畫"
            @click="pushLink('')"
          >
          </v-list-item>
          <v-list-item
            title="繳費查詢-依單位"
            value="繳費查詢-依單位"
            @click="pushLink('')"
          >
          </v-list-item>
          <v-list-item
            title="對帳異常表"
            value="對帳異常表"
            @click="pushLink('')"
          >
          </v-list-item>
        </v-list-group>
        <!-- 對帳管理 end -->

        <!-- 登入頁面 start -->
        <v-list-group value="login">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-login"
              v-bind="props"
              append-icon=""
              title="login"
              @click="pushLink('login')"
            >
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
