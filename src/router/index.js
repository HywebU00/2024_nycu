// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/admin/chargeComponent.vue"),
      },
      {
        path: "payment",
        component: () => import("@/views/admin/payment.vue"),
      },
      {
        path: "addpayment",
        component: () => import("@/views/admin/addpayment.vue"),
      },
      {
        path: "addboard",
        component: () => import("@/views/admin/addboard.vue"),
      },
      {
        path: "upload",
        component: () => import("@/views/admin/upload.vue"),
      },
      {
        path: "invalid",
        component: () => import("@/views/admin/invalid.vue"),
      },
      {
        path: "system",
        component: () => import("@/views/admin/systemComponent.vue"),
      },
      {
        path: "component",
        component: () => import("@/views/admin/Component.vue"),
      },
      {
        path: "from",
        component: () => import("@/views/admin/fromComponent.vue"),
      },
      {
        path: "table",
        component: () => import("@/views/admin/tableComponent.vue"),
      },
      {
        path: "charge",
        component: () => import("@/views/admin/chargeComponent.vue"),
      },
      {
        path: "card",
        component: () => import("@/views/admin/cardComponent.vue"),
      },
      {
        path: "chart",
        component: () => import("@/views/admin/chartComponent.vue"),
      },
      {
        path: "widget",
        component: () => import("@/views/admin/widgetComponent.vue"),
      },
      {
        path: "addNews",
        component: () => import("@/views/admin/addNewsComponent.vue"),
      },
      {
        path: "mediaPhoto",
        component: () => import("@/views/admin/mediaPhotoComponent.vue"),
      },
    ],
  },
  {
    path: "/index",
    component: () => import("@/views/layout/indexPage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/layout/loginPage.vue"),
  },
  {
    path: "/frontLogin",
    component: () => import("@/views/layout/frontLoginPage.vue"),
  },
  {
    path: "/frontFrom",
    component: () => import("@/views/layout/frontLoginFrom.vue"),
  },
  {
    path: "/frontFinish",
    component: () => import("@/views/layout/frontLoginFinish.vue"),
  },
  {
    path: "/front",
    component: () => import("@/views/layout/frontLayout.vue"),
    children: [
      {
        path: "/front",
        component: () => import("@/views/front/cardComponent.vue"),
      },
      {
        path: "/front/info",
        component: () => import("@/views/front/paymentinfoComponent.vue"),
      },
      {
        path: "/front/userinfo",
        component: () => import("@/views/front/userinfoComponent.vue"),
      },
      {
        path: "/front/infocheck",
        component: () => import("@/views/front/userinfoCheckComponent.vue"),
      },
      {
        path: "/front/component",
        component: () => import("@/views/front/component.vue"),
      },
      {
        path: "/front/code",
        component: () => import("@/views/front/codeComponent.vue"),
      },
      {
        path: "/front/check",
        component: () => import("@/views/front/paymentcheckComponent.vue"),
      },
      {
        path: "/front/notpay",
        component: () => import("@/views/front/notpayComponent.vue"),
      },
      {
        path: "/front/faq",
        component: () => import("@/views/front/faqComponent.vue"),
      },
      {
        path: "/front/board",
        component: () => import("@/views/front/boardComponent.vue"),
      },
      {
        path: "/front/boardContent",
        component: () => import("@/views/front/boardContent.vue"),
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
