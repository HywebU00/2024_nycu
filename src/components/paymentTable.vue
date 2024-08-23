<template>
  <v-data-table
    class="dataTable paymentTable"
    v-model:page="page"
    :headers="headers"
    :items="desserts"
    item-value="date"
    :items-per-page="itemsPerPage"
    hide-default-footer
    hover
  >
    <template v-slot:item.delete="{ item }">
      <v-btn
        color="gray"
        variant="text"
        icon="mdi-trash-can-outline"
        class="ma-2"
      >
      </v-btn>
    </template>
    <template v-slot:item.pay="{ item }">
      <!-- class 增加 inputText-end 輸入數字 向右靠齊 -->
      <v-text-field
        label="請輸入金額"
        density="compact"
        single-line
        hide-details="auto"
        class=""
      ></v-text-field>
    </template>
    <template v-slot:item.file="{ item }">
      <div>
        <v-btn
          v-if="item.file == null"
          color="gray"
          variant="text"
          icon="mdi-upload"
          @click="onButtonClick(item)"
        >
        </v-btn>
        <p>{{ item.file }}</p>
        <input
          ref="uploader"
          class="d-none"
          type="file"
          @change="onFileChanged($event)"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
      </div>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
      selected: [],
      headers: [
        {
          align: "center",
          width: "30px",
          key: "delete",
          sortable: false,
          title: "刪除",
        },
        { title: "排序", key: "num", align: "center", width: "30px" },
        {
          title: "收費項目",
          key: "name",
          align: "start",
          sortable: false,
          width: "300px",
        },
        {
          title: "繳費金額",
          key: "pay",
          align: "center",
          sortable: false,
          width: "200px",
        },
        {
          title: "檔案上傳",
          key: "file",
          align: "end",
          sortable: false,
        },
      ],
      desserts: [
        {
          num: 1,
          name: "113年學生會活動攤販租金",
          file: "1130630會計科.xlsx",
        },
        {
          num: 2,
          name: "收費項目B",
        },
        {
          num: 3,
          name: "收費項目C",
        },
      ],
      selectedFile: null,
      isSelecting: false,
      clickNum: 0,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.desserts.length / this.itemsPerPage);
    },
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : null;
    },
  },
  methods: {
    onButtonClick(item) {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );
      this.clickNum = item.num;
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      this.desserts[this.clickNum - 1].file = e.target.files[0].name;
      this.clickNum = 0;
    },
  },
};
</script>
