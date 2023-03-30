<script>
import table from "../assets/image/flower_num.png";
import table1 from "../assets/image/mean_height.png";
import table2 from "../assets/image/mean_num.png";
import table3 from "../assets/image/pepper_mean_num.png";
export default {
  name: "IssueEightLeft",
  props: {},
  data() {
    return { table1, table2, table3, table };
  },
  methods: {},
};
</script>
<template>
  <div
    class="bg-left border-radius-round h-full picture space-y-1"
    style="justify-content: center"
  >
    <img :src="table1" alt="" />
    <p class="text-center">图1</p>
    <img :src="table2" alt="" />
    <p class="text-center">图2</p>
    <img :src="table3" alt="" />
    <p class="text-center">图3</p>
  </div>
</template>
<style lang="scss" scoped>
$text-size: 22px;
.picture {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  strong {
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: $text-size;
  }
  img {
    height: 180px;
    object-fit: contain;
  }
  p {
    color: red;
  }
}
</style>
