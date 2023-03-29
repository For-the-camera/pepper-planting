<script>
import { useUserStore } from "../stores/user";
import table from "../assets/image/seedling_height.png";
export default {
  name: "IssueSix",
  data() {
    return {
      table,
      store: useUserStore(),
    };
  },
};
</script>
<template>
  <div class="container bg-single border-radius-round">
    <div class="picture">
      <img :src="table" alt="pepper" />
    </div>
    <div class="issue space-y-3">
      <p>
        <strong>问题6</strong>
        小明收集的育苗盘中植株高度数据如左表所示。每一个育苗盘中均有10株苗，苗的编号为1号到10号。在测量植株高度时，为减少实验误差，每株植株高度为多次测量取平均值。
      </p>
      <p>请借助计算器分析数据，请回答：</p>
      <p>
        1号育苗盘内植株高度：
        <el-input
          size="small"
          v-model="store.issue6.height[0]"
          placeholder="请输入内容"
          style="width: 120px"
        ></el-input
        >cm（保留1位小数）
      </p>
      <p>
        2号育苗盘内植株高度：<el-input
          size="small"
          v-model="store.issue6.height[1]"
          placeholder="请输入内容"
          style="width: 120px"
        ></el-input>
        cm（保留1位小数）
      </p>
      <p>
        3号育苗盘内植株高度：<el-input
          size="small"
          v-model="store.issue6.height[2]"
          placeholder="请输入内容"
          style="width: 120px"
        ></el-input>
        cm（保留1位小数）
      </p>
      <p style="text-align: right">
        <el-button type="primary">计算器</el-button>
      </p>
      <p>请解释你是如何得出上述数据的：</p>
      <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="store.issue6.answers"
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
  }
  .issue {
    font-size: $text-size;
    padding: 15px;
    line-height: 2em;
  }
}
</style>
