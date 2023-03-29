<script>
import { useUserStore } from "../stores/user";
export default {
  name: "SeedlingNumText",
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
        <strong>问题4</strong>
        为探究哪种肥料（肥料A、肥料B）能促进植物产出更多辣椒，左图为一种合理的实验设置。
      </p>

      <p>关注育苗盘中的化肥量，请问为什么3号育苗盘的化肥量是0ml？</p>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="store.issue4.answers"
      >
      </el-input>
    </div>
  </div>
</template>
<style scoped></style>
