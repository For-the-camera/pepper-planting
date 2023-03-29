<script>
import { useUserStore } from "../stores/user";
import table from "../assets/image/flower_num.png";
export default {
  name: "IssueSeven",
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
        <strong>问题7</strong>
        小红收集的育苗盘中花的数量数据如左表所示。每一个育苗盘中均有10株苗，苗的编号为1号到10号。
      </p>
      <p>请借助计算器分析数据，请回答：</p>
      <p>
        1号育苗盘内每一棵苗的花的数量：
        <el-input
          size="small"
          v-model="store.issue7.flower[0]"
          placeholder="请输入内容"
          style="width: 120px"
        ></el-input
        >朵（保留1位小数）
      </p>
      <p>
        2号育苗盘内每一棵苗的花的数量：<el-input
          size="small"
          v-model="store.issue7.flower[1]"
          placeholder="请输入内容"
          style="width: 120px"
        ></el-input>
        朵（保留1位小数）
      </p>
      <p>
        3号育苗盘内每一棵苗的花的数量：<el-input
          size="small"
          v-model="store.issue7.flower[2]"
          placeholder="请输入内容"
          style="width: 120px"
        ></el-input>
        朵（保留1位小数）
      </p>
      <p style="text-align: right">
        <el-button type="primary">计算器</el-button>
      </p>
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
