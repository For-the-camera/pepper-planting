<script>
import { useUserStore } from "../stores/user";
import Calculator from "../components/Calculator.vue";
export default {
  name: "IssueSixRight",
  components: {
    Calculator,
  },
  props: {},
  data() {
    return { store: useUserStore(), mark: false, nowIssue: 0 };
  },
  methods: {
    onConfirm(val) {
      this.mark = false;
      this.store.issue6.height[this.nowIssue] = val;
    },
    openCalculator(nowIssue) {
      this.mark = true;
      this.nowIssue = nowIssue;
    },
  },
};
</script>
<template>
  <div
    class="issue flex flex-col justify-items-center bg-right border-radius-round h-full"
    style="position: relative"
  >
    <div class="space-y-3">
      <p>
        <strong>问题6</strong>
        小明收集的育苗盘中植株高度数据如左表所示。每一个育苗盘中均有10株苗，苗的编号为1号到10号。在测量植株高度时，为减少实验误差，每株植株高度为多次测量取平均值。
      </p>
      <p>请借助计算器分析数据，请回答：</p>
      <p>
        1号育苗盘内植株高度：<el-button
          type="primary"
          @click="openCalculator(0)"
          >{{ store.issue6.height[0].answer }}</el-button
        >
        cm（保留1位小数）
      </p>
      <p>
        2号育苗盘内植株高度：<el-button
          type="primary"
          @click="openCalculator(1)"
          >{{ store.issue6.height[1].answer }}</el-button
        >
        cm（保留1位小数）
      </p>
      <p>
        3号育苗盘内植株高度：<el-button
          type="primary"
          @click="openCalculator(2)"
          >{{ store.issue6.height[2].answer }}</el-button
        >
        cm（保留1位小数）
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
    <div
      :class="{ 'h-full': true, 'border-radius-round': true, mark: mark }"
    ></div>
    <Calculator v-show="mark" @onConfirm="onConfirm"></Calculator>
  </div>
</template>
<style lang="scss" scoped>
$text-size: 22px;
.issue {
  font-size: $text-size;
  padding: 15px;
  line-height: 2em;
  position: relative;
}
.mark {
  width: 100%;
  background-color: black;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.6;
}
</style>
