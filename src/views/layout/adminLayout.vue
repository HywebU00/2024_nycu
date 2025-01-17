<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0 menuBtn"
        @click.stop="[(rail = !rail), handleOverlay()]"
      ></v-app-bar-nav-icon>
      <!-- (overlay = !overlay) -->
      <!-- @click.stop="rail = !rail" -->
      <!-- d-md-none -->
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
      @click="[isSmallScreen ? ((rail = !rail), (overlay = !overlay)) : null]"
    >
      <!-- (rail = !rail),  -->
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
            <v-list-item v-bind="props" title="網站管理" color="primary">
              <span class="material-symbols-outlined text-primary mr-2">
                web
              </span>
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
            <v-list-item v-bind="props" title="收費項目管理" color="primary">
              <span class="material-symbols-outlined text-primary mr-2">
                add_card
              </span>
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
            <v-list-item v-bind="props" title="會員管理" color="primary">
              <span class="material-symbols-outlined text-primary mr-2">
                group
              </span>
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
            <v-list-item v-bind="props" title="系統管理" color="primary">
              <span class="material-symbols-outlined text-primary mr-2">
                settings
              </span>
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
            <v-list-item v-bind="props" title="帳號管理" color="primary">
              <span class="material-symbols-outlined text-primary mr-2">
                manage_accounts
              </span>
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
            <v-list-item v-bind="props" title="中央權限控管" color="primary">
              <span class="material-symbols-outlined text-primary mr-2">
                lock
              </span>
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
            <v-list-item v-bind="props" title="繳費單管理" color="primary">
              <span class="material-symbols-outlined text-primary mr-2">
                receipt_long
              </span>
            </v-list-item>
          </template>
          <v-list-item
            title="繳費單維護與通知"
            value="繳費單維護與通知"
            @click="pushLink('payment')"
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
            <v-list-item v-bind="props" title="對帳管理" color="primary">
              <span class="material-symbols-outlined text-primary mr-2">
                find_in_page
              </span>
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
              v-bind="props"
              append-icon=""
              title="login"
              @click="pushLink('login')"
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
        <v-overlay
          v-if="isSmallScreen"
          v-model="overlay"
          @click="rail = !rail"
          style="z-index: 1000"
        ></v-overlay>
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
      if (this.isSmallScreen) {
        this.handleOverlay();
      }
    },
    menuTarget(newOpened) {
      this.opened = newOpened.slice(-1);
    },
    pushLink(item) {
      this.$router.push({ path: item });
    },
    getWidth() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 960) {
        this.rail = false;
      } else {
        this.rail = true;
      }
    },
    handleOverlay() {
      if (this.isSmallScreen) {
        this.overlay = !this.overlay;
      }
      if (this.rail) {
        this.overlay = false;
      }
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleResize();
    this.getWidth();
    this.handleOverlay();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
