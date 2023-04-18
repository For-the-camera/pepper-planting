<script>
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";
import { useUserStore } from "../stores/user";

export default {
  name: "FlowerText",
  props: {},
  data() {
    const store = useUserStore();
    return {
      store,
      processStore: useProcessStore(),
      pptStore: usePPTStore(),
      options: [
        { label: "植株高度", value: "A" },
        { label: "花的数量", value: "B" },
        { label: "植株的高度和花的数量", value: "C" },
      ],
    };
  },
  methods: {
    selectOption: function (index) {
      this.store.issue5.choice === index
        ? (this.store.issue5.choice = "")
        : (this.store.issue5.choice = index);
    },
    postData() {
      const reason = this.store.issue5.answers;
      if (this.pptStore.nowPage.firstEnterInto) {
        this.processStore.page6.answer.firstResult.reason = reason;
        this.processStore.page6.answer.lastResult.reason = reason;
      } else {
        this.processStore.page6.answer.lastResult.reason = reason;
      }
    },
  },
  mounted() {
    this.$watch(
      () => this.store.issue5.choice,
      function (val) {
        console.log(val);
        if (this.pptStore.nowPage.firstEvent === 0) {
          this.pptStore.nowPage.firstEvent = Date.now();
        }
        const reason = this.store.issue5.reason;
        if (this.pptStore.nowPage.firstEnterInto) {
          this.processStore.page6.answer.firstResult = { choice: val, reason };
          this.processStore.page6.answer.lastResult = { choice: val, reason };
        } else {
          this.processStore.page6.answer.lastResult = { choice: val, reason };
        }
      }
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
      <p>六周过后，辣椒生长的状况如左图所示。</p>

      <p>
        六周后的某个时间为实验数据收集阶段，小明测量了辣椒的植株高度，小红测量了辣椒的花的数量。
      </p>
      <p>
        <strong> 问题4.1</strong>
        请问为了回答哪种肥料能促进植物产出更多辣椒这个问题，你认为需要收集的数据是（{{
          store.issue5.choice
        }}）
      </p>
      <ul>
        <el-radio-group v-model="store.issue5.choice">
          <li
            v-for="item in options"
            :key="item.value"
            @click.prevent="
              () => {
                selectOption(item.value);
              }
            "
          >
            <el-radio :label="item.value">{{ "" }}</el-radio>
            {{ item.value }}.
            {{ item.label }}
          </li>
        </el-radio-group>
      </ul>
      <p><strong>问题4.2 </strong>请解释选择上述选项的原因：</p>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="store.issue5.answers"
        @blur="postData"
      >
      </el-input>
    </div>
  </div>
</template>
<style scoped lang="scss">
ul {
  list-style: none;
  list-style-position: inside;
  li {
    cursor: pointer;
    padding: 10px 0;
    font-size: 22px;
    user-select: none;
  }
}
</style>
