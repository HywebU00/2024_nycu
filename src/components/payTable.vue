<template>
  <v-data-table
    class="dataTable payTable"
    :headers="headers"
    :items="table"
    hide-default-footer
  ></v-data-table>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        title: "交易編號",
        align: "center",
        key: "name",
      },
      { title: "特店代號", align: "center", key: "num" },
      { title: "金額", align: "center", key: "money" },
      { title: "授權狀態", align: "center", key: "status" },
      { title: "收單交易日期", align: "center", key: "date" },
      { title: "收單交易時間", align: "center", key: "time" },
      { title: "遮蔽卡號", align: "center", key: "cardnum" },
      { title: "請款狀態", align: "center", key: "moneystatus" },
      { title: "建立時間", align: "center", key: "setuptime" },
      { title: "撥款時間", align: "center", key: "moneytime" },
      { title: "動作", align: "center", key: "stay" },
    ],
    table: [
      {
        name: "ABC001",
        num: "1",
        money: 130,
        status: "成功(5)",
        date: 2024 / 7 / 30,
        time: "15:15",
        cardnum: "406376*****0000",
        moneystatus: "請款中(3)",
        setuptime: "2024/7/30 15:15",
        moneytime: "2024/7/30 15:15",
        stay: "取消授權",
      },
      {
        name: "ABC001",
        num: "1",
        money: 130,
        status: "成功(5)",
        date: 2024 / 7 / 30,
        time: "15:15",
        cardnum: "406376*****0000",
        moneystatus: "請款中(3)",
        setuptime: "2024/7/30 15:15",
        moneytime: "2024/7/30 15:15",
        stay: "取消授權",
      },
    ],
  }),
};
</script>

<style></style>
