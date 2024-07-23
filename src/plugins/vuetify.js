// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa4";
import { md3 } from "vuetify/blueprints";
// import { VDataTableServer } from "vuetify/labs/VDataTable";
export default createVuetify({
  // blueprint: md3,藍圖樣式
  theme: {
    defaultTheme: "default",
    themes: {
      default: {
        dark: false,
        colors: {
          primary: "#0033a0",
          secondary: "#fe8c05",
          gray: "#4d4d4d",
          // secondary: "#32a7fa",
          // loginColor: "#0156a2",
          // light: "#8eebb1",
          // navText: "#262626",
          // thead: "#dadfe0",
        },
      },
    },
  },
  components: {
    // VDataTableServer,
  },
  blueprint: md3,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});
