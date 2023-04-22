<script>
import table from "../assets/image/flower_num.png";
export default {
  name: "IssueSevenLeft",
  props: {},
  data() {
    return { table };
  },
  methods: {},
};
</script>
<template>
  <div
    class="bg-left border-radius-round h-full flex items-center"
    style="justify-content: center"
  >
    <img :src="table" alt="pepper" style="width: 90%" />
  </div>
</template>
<style scoped></style>
