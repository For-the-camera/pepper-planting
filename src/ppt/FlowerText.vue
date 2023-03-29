<script>
import { useUserStore } from "../stores/user";
export default {
  name: "FlowerText",
  props: {},
  data() {
    return { store: useUserStore() };
  },
  methods: {},
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
        在辣椒生长的过程中，每天向每个育苗盘中浇等量的水。六周过后，辣椒生长的状况如左图所示。
      </p>

      <p>
        六周后的某个时间为实验数据收集阶段，小明测量了辣椒的植株高度，小红测量了辣椒的花的数量。
      </p>
      <p>
        <strong> 问题5.1</strong>
        请问为了回答哪种肥料能促进植物产出更多辣椒这个问题，你认为需要收集的数据是（{{
          store.issue5.choice
        }}）
      </p>
      <p
        style="cursor: pointer"
        @click="
          () => {
            store.issue5.choice = 'A';
          }
        "
      >
        A: 植株高度
      </p>
      <p
        style="cursor: pointer"
        @click="
          () => {
            store.issue5.choice = 'B';
          }
        "
      >
        B: 花的数量
      </p>
      <p
        style="cursor: pointer"
        @click="
          () => {
            store.issue5.choice = 'C';
          }
        "
      >
        C: 植株高度和花的数量
      </p>
      <p><strong>问题5.2 </strong>请解释选择上述选项的原因：</p>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="store.issue5.answers"
      >
      </el-input>
    </div>
  </div>
</template>
<style scoped></style>
