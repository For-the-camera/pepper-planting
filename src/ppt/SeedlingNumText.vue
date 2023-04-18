<script>
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";
import { useUserStore } from "../stores/user";
import { isHistoryPage } from "../tools/isHistoryPage";
export default {
  name: "SeedlingNumText",
  props: {},
  data() {
    return {
      store: useUserStore(),
      processStore: useProcessStore(),
      pptStore: usePPTStore(),
    };
  },
  methods: {},
  computed: {
    lock: function () {
      return isHistoryPage();
    },
  },
  mounted() {
    this.$watch(
      () => this.store.issue2,
      function (val) {
        if (this.pptStore.nowPage.firstEvent === 0) {
          this.pptStore.nowPage.firstEvent = Date.now();
        }
        const answer = Object.assign({}, val);
        this.processStore.page3.answer = {
          firstResult: answer,
          lastResult: answer,
          processResult: [],
        };
      },
      { deep: true }
    );
  },
};
</script>
<template>
  <div
    class="bg-right border-radius-round h-full flex items-center justify-items-center"
  >
    <div
      style="padding: 20px; font-size: 22px; line-height: 2em"
      class="space-y-3"
    >
      <p>
        为探究哪种肥料（肥料<strong>A</strong>、肥料<strong>B</strong>）能促进植物产出更多辣椒，左图为一种合理的实验设置：3个育苗盘、每个育苗盘中辣椒苗均为10株。
      </p>

      <p><strong>问题2.1</strong> 请问为什么设置3个育苗盘？</p>
      <el-input
        :disabled="lock"
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="store.issue2.answers1"
      >
      </el-input>
      <p><strong>问题2.2</strong> 为什么每个育苗盘中的辣椒苗数量都一样？</p>
      <el-input
        :disabled="lock"
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="store.issue2.answers2"
      >
      </el-input>
      <p>注:作答完毕点击”下一页”后，答案不可更改。</p>
    </div>
  </div>
</template>
<style scoped></style>
