<script>
import Visual from "../components/Visual.vue";
import { useUserStore } from "../stores/user";
export default {
  name: "SelectFertilizer",
  components: {
    Visual,
  },
  props: {},
  data() {
    return {
      store: useUserStore(),
    };
  },
  methods: {},
};
</script>
<template>
  <div class="bg-left border-radius-round grid-2-1 gap-1">
    <div class="grid grid-1-2">
      <div>
        <Visual :state="1" ref="plateA_Ref"></Visual>
        <p style="padding-left: 25px">1号育苗盘</p>
      </div>
      <div>
        <Visual :state="1" ref="plateB_Ref"></Visual>
        <p style="padding-left: 25px">2号育苗盘</p>
      </div>
    </div>
    <div></div>
  </div>
</template>
<style scoped></style>
