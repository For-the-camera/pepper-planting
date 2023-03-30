<script>
import { useUserStore } from "../stores/user";
import Calculator from "../components/Calculator.vue";
export default {
  name: "IssueEightRight",
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
