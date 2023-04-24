<script>
import { useUserStore } from "../stores/user";
import table from "../assets/image/seedling_height.png";
// import Calculator from "../components/calculator.vue";
export default {
  name: "IssueSix",
  components: {
    // Calculator,
  },
  data() {
    return {
      table,
      store: useUserStore(),
    };
  },
};
</script>
<template>
  <div class="container bg-single border-radius-round">
    <div class="picture">
      <img :src="table" alt="pepper" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
$text-size: 22px;
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
  .issue {
    font-size: $text-size;
    padding: 15px;
    line-height: 2em;
    position: relative;
  }
}
</style>
