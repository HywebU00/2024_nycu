<template>
  <div class="loginPage h-screen w-100 d-flex justify-center">
    <div class="loginCard">
      <v-sheet elevation="5" class="mx-auto">
        <v-img
          aspect-ratio="1/1"
          class="mr-auto ml-aut mb-2"
          cover
          src="~@/assets/images/login_logo.png"
        ></v-img>
        <h2 class="my-3 mb-5 text-center text-gray">
          國立陽明交通大學繳費管理系統
        </h2>
        <v-divider class="pt-2 mb-3"></v-divider>
        <v-form fast-fail>
          <v-text-field
            prepend-inner-icon="mdi-account-circle-outline"
            density="compact"
            placeholder="請輸入帳號"
            variant="outlined"
            hide-details="auto"
            rounded="lg"
            class="mb-4"
          ></v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-lock-outline"
            density="compact"
            placeholder="請輸入密碼"
            rounded="lg"
            hide-details="auto"
            variant="outlined"
            class="mb-4"
          ></v-text-field>
          <div class="d-flex align-center mb-4 verifyGrp">
            <v-text-field
              prepend-inner-icon=""
              rounded="lg"
              density="compact"
              placeholder="請輸入驗證碼"
              variant="outlined"
              hide-details="auto"
            ></v-text-field>
            <v-img
              aspect-ratio="1/1"
              cover
              src="~@/assets/images/code.png"
            ></v-img>
          </div>
          <v-btn
            type="submit"
            size="large"
            block
            rounded="lg"
            class="mt-2 btn bg-secondary-gradient"
            >登入</v-btn
          >
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {},
};
</script>
