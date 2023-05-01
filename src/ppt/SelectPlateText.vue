<script>
import { usePPTStore } from "../stores/ppt";
import { useUserStore } from "../stores/user";
export default {
  name: "SelectPlateText",
  props: {},
  data() {
    return {
      options: [
        {
          value: 1,
          label: "1",
        },
        {
          value: 2,
          label: "2",
        },
        {
          value: 3,
          label: "3",
        },
        {
          value: 4,
          label: "4",
        },
      ],
      store: useUserStore(),
      pptStore: usePPTStore(),
      choiceNum: useUserStore().temp1.choiceNum,
    };
  },
  methods: {},
  watch: {
    choiceNum: function (newValue, oldValue) {
      this.store.temp1.choiceNum = newValue;
      if (newValue == 0) {
        this.store.temp1.choiceA = false;
        this.store.temp1.choiceB = false;
        this.store.temp1.choiceC = false;
        this.store.temp1.choiceD = false;
      }
      if (newValue == 1) {
        this.store.temp1.choiceA = true;
        this.store.temp1.choiceB = false;
        this.store.temp1.choiceC = false;
        this.store.temp1.choiceD = false;
      } else if (newValue == 2) {
        this.store.temp1.choiceA = true;
        this.store.temp1.choiceB = true;
        this.store.temp1.choiceC = false;
        this.store.temp1.choiceD = false;
      } else if (newValue == 3) {
        this.store.temp1.choiceA = true;
        this.store.temp1.choiceB = true;
        this.store.temp1.choiceC = true;
        this.store.temp1.choiceD = false;
      } else if (newValue == 4) {
        this.store.temp1.choiceA = true;
        this.store.temp1.choiceB = true;
        this.store.temp1.choiceC = true;
        this.store.temp1.choiceD = true;
      }
    },
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
        请你设计实验来
        <strong>探究哪种肥料（肥料A、肥料B）能促进植物产出更多辣椒</strong>。
        实验材料包括：一些大型育苗盘、一些辣椒苗、泥土（来自同一片生物角）。
      </p>
      <p>
        <strong>问题1</strong>
        在设计实验时，首先需要几个育苗盘？
        请选择
        <el-select
          style="width: 55px; margin: 0 10px"
          v-model="choiceNum"
          placeholder="请选择育苗盘的个数"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="!pptStore.nowPage.firstEnterInto"
          >
          </el-option> </el-select
        >
      </p>

      <p style="margin-bottom: 20px;">请在左侧你选择的育苗盘中，选择你所需要的辣椒苗株数。</p>
      <p>注:作答完毕点击“下一页”后，答案不可更改。</p>
    </div>
  </div>
</template>
<style scoped></style>
