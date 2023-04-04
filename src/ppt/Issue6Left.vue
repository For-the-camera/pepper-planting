<script>
import table from "../assets/image/seedling_height.png";
export default {
  name: "IssueSixLeft",
  props: {},
  data() {
    return { table };
  },
  methods: {},
};
</script>
<template>
  <div
    class="bg-left border-radius-round h-full flex flex-col items-center"
    style="justify-content: center"
  >
    <img :src="table" alt="pepper" />
    <p style="color: red; margin-top: 20px; width: 80%">
      注：在测量植株高度时，为减少实验误差，每株植株高度为 多次测量取平均值。
    </p>
  </div>
</template>
<style scoped></style>
