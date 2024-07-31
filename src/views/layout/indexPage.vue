<template>
  <div class="index_bg" width="100%">
    <div class="index_container">
      <div class="index_title">
        <h3 class="text-center">
          <img
            style="margin-left: 1rem; width: 100px"
            src="~@/assets/images/logo.png"
            alt=""
          />
          <p class="text-h5 ml-3 text-white font-weight-bold">
            陽明交通大學 繳費平台管理系統
          </p>
        </h3>
        <v-btn color="secondary"
          ><a href="https://github.com/HywebU00/2024_nycu">檔案下載</a></v-btn
        >
      </div>
      <div class="d-flex mb-2 justify-center">
        <div style="width: 75%" class="mt-1">
          <h3 class="title text-center mb-2">後台頁面系統</h3>
          <v-card>
            <v-table class="index_table">
              <thead class="bg-tHeader">
                <tr>
                  <th class="text-left">編號</th>
                  <th class="text-left">頁面名稱</th>
                  <th class="text-left">連結</th>
                  <th class="text-left width">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in desserts" :key="item.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <a :href="item.link">{{ item.link }}</a>
                  </td>
                  <td>{{ item.note }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
          <h3 class="title text-center mb-2 mt-10">前台頁面系統</h3>
          <v-card>
            <v-table class="index_table">
              <thead class="bg-tHeader2">
                <tr>
                  <th class="text-left">編號</th>
                  <th class="text-left">頁面名稱</th>
                  <th class="text-left">連結</th>
                  <th class="text-left width">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in front" :key="item.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <a :href="item.link">{{ item.link }}</a>
                  </td>
                  <td>{{ item.note }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
          <p class="mt-2 text-primary font-weight-bold">
            p.s. index.html頁面 有增加 google font連結 需更新檔案設定。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "收費項目",
          link: "https://hywebu00.github.io/2024_nycu/#/",
          note: "新增收費項目按鈕中有選單",
        },
        {
          name: "登入頁",
          link: "https://hywebu00.github.io/2024_nycu/#/login",
          note: "",
        },
      ],
      front: [
        {
          name: "前台登入頁",
          link: "https://hywebu00.github.io/2024_nycu/#/front",
          note: "",
        },
        {
          name: "",
          link: "",
          note: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.index_bg {
  background: #a3bbd3;
  min-height: 100vh;
}
.index_container {
  padding-top: 5rem;
  padding-bottom: 10rem;
}
.bg-tHeader {
  background: #1a3243;
  color: #fff;
  font-weight: 900;
}
.bg-tHeader2 {
  background: #2f4578;
  color: #fff;
  font-weight: 900;
}
.index_title {
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-weight: 700;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    span {
      font-size: 2rem;
      margin-left: 1rem;
    }
  }
  button.v-btn {
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.index_table {
  thead {
    tr > th {
      font-size: 1rem !important;
      color: #fff !important;
      white-space: nowrap;
    }
    .width {
      width: 100px;
    }
  }
  tbody {
    tr:nth-child(odd) {
      background: #ebedf0;
    }
    tr > td {
      &:nth-child(2) {
        min-width: 150px;
      }
      &:nth-child(4) {
        min-width: 250px;
      }
    }
  }
}
</style>
