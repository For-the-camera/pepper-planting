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
    class="bg-left border-radius-round h-full flex items-center"
    style="justify-content: center"
  >
    <img :src="table" alt="pepper" />
  </div>
</template>
<style scoped></style>
