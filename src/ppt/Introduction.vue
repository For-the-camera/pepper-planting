<script>
import pepper from "../assets/image/pepper.png";
import { usePPTStore } from "../stores/ppt";
export default {
  name: "Introduction",
  data() {
    return {
      pepper,
      store: usePPTStore(),
    };
  },
  mounted() {
    this.store.nowPage.enterInto = Date.now();
  },
};
</script>
<template>
  <div class="container bg-single border-radius-round">
    <div class="picture">
      <strong>辣椒种植</strong>
      <img :src="pepper" alt="pepper" />
    </div>
    <div class="introduction">
      <p><strong>前言</strong></p>
      <p>
        四月份春暖花开、气温回升，老师鼓励大家在学校的生物角种植辣椒。
        现有A、B两种肥料，需要探究<strong>哪种肥料能促进植物产出更多辣椒</strong>。
        接下来请你通过实验来解决这个问题。
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$text-size: 24px;
.container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
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
  }
  .introduction {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: $text-size;
    line-height: 2em;
  }
}
</style>
