<script>
import { useUserStore } from "../stores/user";
import Calculator from "../components/Calculator.vue";
export default {
  name: "IssueSevenRight",
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
      this.store.issue7.flower[this.nowIssue] = val;
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
    <div class="space-y-3" style="padding-top: 25%">
      <p>
        阅读材料
        小红收集的育苗盘中花的数量数据如左表所示。每一个育苗盘中均有10株苗，苗的编号为1号到10号。
      </p>
      <p>小红对花的数量数据进行科学分析，得出：</p>
      <p>1号育苗盘内花的平均数量为14.2朵；</p>
      <p>2号育苗盘内花的平均数量为21.5朵；</p>
      <p>3号育苗盘内花的平均数量为9.7朵。</p>
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
