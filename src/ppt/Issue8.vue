<script>
import { useUserStore } from "../stores/user";
import table1 from "../assets/image/mean_height.png";
import table2 from "../assets/image/mean_num.png";
import table3 from "../assets/image/pepper_mean_num.png";
export default {
  name: "IssueEight",
  data() {
    return {
      table1,
      table2,
      table3,
      store: useUserStore(),
    };
  },
};
</script>
<template>
  <div class="container bg-single border-radius-round">
    <div class="picture space-y-1">
      <img :src="table1" alt="" />
      <p class="text-center">图1</p>
      <img :src="table2" alt="" />
      <p class="text-center">图2</p>
      <img :src="table3" alt="" />
      <p class="text-center">图3</p>
    </div>
    <div class="issue space-y-3">
      <p>
        <strong
          >问题8 为探究哪种肥料（肥料A、肥料B）能促进植物产出更多辣椒，</strong
        >左图是对育苗盘中植株高度(单位cm)、花的数量数据的科学分析。另外，图3是实验结束后的辣椒平均数量。
      </p>
      <p>
        基于数据，请回答实验结果显示哪种化肥效果更好？{{ store.issue8.choice }}
      </p>
      <p
        style="cursor: pointer"
        @click="
          () => {
            store.issue8.choice = 'A';
          }
        "
      >
        A. 化肥A
      </p>
      <p
        style="cursor: pointer"
        @click="
          () => {
            store.issue8.choice = 'B';
          }
        "
      >
        B. 化肥B
      </p>
      <p
        style="cursor: pointer"
        @click="
          () => {
            store.issue8.choice = 'C';
          }
        "
      >
        C. 实验结果不能说明哪种肥料效果最好
      </p>
      <p>请解释你选择上述选项的原因：</p>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="store.issue8.answers"
      >
      </el-input>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$text-size: 22px;
.container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  .picture {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    strong {
      margin-bottom: 10px;
      margin-left: 10px;
      font-size: $text-size;
    }
    img {
      height: 180px;
      object-fit: contain;
    }
    p {
      color: red;
    }
  }
  .issue {
    font-size: $text-size;
    padding: 15px;
    line-height: 2em;
  }
}
</style>
