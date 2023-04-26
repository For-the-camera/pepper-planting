<script>
import { usePPTStore } from "./stores/ppt";
import { useProcessStore } from "./stores/process";
import Index from "./views/Index.vue";
export default {
  components: { Index },
  data() {
    return {
      pptStore: usePPTStore(),
      processStore: useProcessStore(),
    };
  },
  mounted() {
    window.addEventListener("message", (e) => {
      console.log("post");
    });
    this.$watch(
      () => this.processStore,
      (val) => {
        parent.postMessage(
          {
            data: val.$state,
            postTime: Date.now(),
            cst: new Date(),
            isAnswered: this.pptStore.checkedAnswer,
          },
          "*"
        );
      },
      { deep: true }
    );
  },
};
</script>

<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<style scoped></style>
