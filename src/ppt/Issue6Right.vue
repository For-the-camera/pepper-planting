<script>
import { useUserStore } from "../stores/user";
// import Calculator from "../components/Calculator.vue";
import SelectiveHeight from "../components/SelectiveHeight.vue";
import { useProcessStore } from "../stores/process";
import { usePPTStore } from "../stores/ppt";
export default {
  name: "IssueSixRight",
  components: {
    SelectiveHeight,
  },
  props: {},
  data() {
    return {
      store: useUserStore(),
      processStore: useProcessStore(),
      pptStore: usePPTStore(),
      mark: false,
      nowIssue: 0,
    };
  },
  methods: {
    onConfirm(val) {
      this.store.issue6.height[this.nowIssue] = val;
      this.mark = false;
    },
    openDialog(nowIssue) {
      this.mark = true;
      this.nowIssue = nowIssue;
    },
    // postData() {
    //   const answer = JSON.parse(JSON.stringify(this.store.issue6));

    //   if (this.pptStore.nowPage.firstEnterInto) {
    //     this.processStore.page7.answer.firstResult = result;
    //     this.processStore.page7.answer.lastResult = result;
    //   } else {
    //     this.processStore.page7.answer.lastResult = result;
    //   }
    // },
  },
  mounted() {
    this.$watch(
      () => this.mark,
      function (val, oldval) {
        if (!val && oldval) {
          const answer = JSON.parse(JSON.stringify(this.store.issue6));
          const { height } = answer;
          const result = Array.from(height, (val) => {
            if (val.option) {
              return val.option.label[0];
            } else {
              return "";
            }
          });
          if (this.pptStore.nowPage.firstEnterInto) {
            this.processStore.page7.answer.firstResult = result;
            this.processStore.page7.answer.lastResult = result;
          } else {
            this.processStore.page7.answer.lastResult = result;
          }
        }
      },
      { deep: true }
    );
    this.$watch(
      () => this.store.issue6,
      function () {
        if (this.pptStore.nowPage.firstEvent === 0) {
          this.pptStore.nowPage.firstEvent = Date.now();
        }
      },
      { deep: true }
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
        <strong>问题5</strong>
        小明收集的育苗盘中植株高度数据如左表所示。每一个育苗盘中均有10株苗，苗的编号为1号到10号。
      </p>
      <p>请点击下方蓝色方框，分析各个育苗盘内植株的高度:</p>
      <p>
        1号育苗盘内植株高度：
        <el-button
          type="primary"
          @click="
            () => {
              openDialog(0);
            }
          "
          >{{ store.issue6.height[0].answer }}</el-button
        >
        cm
      </p>
      <p>
        2号育苗盘内植株高度：
        <el-button
          type="primary"
          @click="
            () => {
              openDialog(1);
            }
          "
          >{{ store.issue6.height[1].answer }}</el-button
        >
        cm
      </p>
      <p>
        3号育苗盘内植株高度：
        <el-button
          type="primary"
          @click="
            () => {
              openDialog(2);
            }
          "
          >{{ store.issue6.height[2].answer }}</el-button
        >
        cm
      </p>
      <!-- <p>请解释你是如何得出上述数据的：</p>
      <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="store.issue6.answers"
        @blur="postData"
      >
      </el-input> -->
    </div>
    <div
      v-show="mark"
      :class="{ 'h-full': true, 'border-radius-round': true, mark: mark }"
    ></div>
    <SelectiveHeight
      :no="nowIssue + 1"
      class="selectiveHeight"
      :value="store.issue6.height[nowIssue].answer"
      v-show="mark"
      @onConfirm="onConfirm"
    ></SelectiveHeight>
    <!-- <Calculator v-show="mark" @onConfirm="onConfirm"></Calculator> -->
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
