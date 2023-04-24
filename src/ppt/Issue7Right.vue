<script>
import { useUserStore } from "../stores/user";
import Calculator from "../components/Calculator.vue";
import SelectiveNum from "../components/SelectiveNum.vue";
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";
export default {
  name: "IssueSevenRight",
  components: {
    Calculator,
    SelectiveNum,
  },
  props: {},
  data() {
    return {
      store: useUserStore(),
      pptStore: usePPTStore(),
      processStore: useProcessStore(),
      mark: false,
      nowIssue: 0,
    };
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
    openDialog(nowIssue) {
      this.mark = true;
      this.nowIssue = nowIssue;
    },
  },
  mounted() {
    this.$watch(
      () => this.mark,
      function (val, oldVal) {
        if (!val && oldVal) {
          const answer = JSON.parse(JSON.stringify(this.store.issue7));
          const { flower } = answer;
          const result = Array.from(flower, (val) => {
            if (val.option) {
              return val.option.label[0];
            } else {
              return "";
            }
          });
          if (this.pptStore.nowPage.firstEnterInto) {
            this.processStore.page8.answer.firstResult = result;
            this.processStore.page8.answer.lastResult = result;
          } else {
            this.processStore.page8.answer.lastResult = result;
          }
        }
      }
    );
  },
};
</script>
<template>
  <div
    class="issue flex flex-col bg-right border-radius-round h-full"
    style="position: relative; padding-top: 20%"
  >
    <div class="space-y-3">
      <p>
        <strong> 问题6 </strong
        >小红收集的育苗盘中花的数量数据如左表所示。每一个育苗盘中均有10株苗，苗的编号为1号到10号。
      </p>
      <p>请点击下方蓝色方框，分析各个育苗盘内花的数量：</p>

      <p>
        1号育苗盘内花的数量为：&nbsp;<el-button
          type="primary"
          @click="
            () => {
              openDialog(0);
            }
          "
          >{{ store.issue7.flower[0].answer }}</el-button
        >
        朵；
      </p>
      <p>
        2号育苗盘内花的数量为：
        <el-button
          type="primary"
          @click="
            () => {
              openDialog(1);
            }
          "
          >{{ store.issue7.flower[1].answer }}</el-button
        >
        朵；
      </p>
      <p>
        3号育苗盘内花的数量为：
        <el-button
          type="primary"
          @click="
            () => {
              openDialog(2);
            }
          "
          >{{ store.issue7.flower[2].answer }}</el-button
        >
        朵。
      </p>
    </div>
    <div
      v-show="mark"
      :class="{ 'h-full': true, 'border-radius-round': true, mark: mark }"
    ></div>
    <SelectiveNum
      :no="nowIssue + 1"
      class="selectiveHeight"
      :value="store.issue7.flower[nowIssue].answer"
      v-show="mark"
      @onConfirm="onConfirm"
    ></SelectiveNum>
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
.selectiveHeight {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
