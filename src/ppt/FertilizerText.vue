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
        阅读材料
        为探究哪种肥料（肥料A、肥料B）能促进植物产出更多辣椒，左图为一种合理的实验设置。
      </p>

      <p>
        根据左图的实验设置开展实验，在辣椒生长的过程中，每天向每个育苗盘中浇等量的水。
      </p>
      <!-- <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="store.issue4.answers"
      >
      </el-input> -->
    </div>
  </div>
</template>
<style scoped></style>
