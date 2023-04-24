<script>
import pepper from "../assets/image/pepper.png";

export default {
  name: "EndChart",
  props: {},
  data() {
    return {
      pepper,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="page-container">
    <img :src="pepper" alt="" />
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: #55e6c1;
  border: 0.1rem solid #353b48;
  border-radius: 30px;
  p {
    margin: 20px;
    font-size: 1.25rem;
    line-height: 1.5;
  }
  .tip {
    background-color: #4472c4;
    width: 400px;
    height: 100px;
    p {
      color: white;
    }
  }
}
</style>
