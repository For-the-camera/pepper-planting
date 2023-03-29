<script>
import Visual from "../components/Visual.vue";
import { useUserStore } from "../stores/user";
export default {
  name: "SeedlingNum",
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
      <div style="position: relative">
        <p
          style="
            position: relative;
            top: 70px;
            left: 38%;
            z-index: 1;
            font-size: 18px;
          "
        >
          10株辣椒苗
        </p>
        <Visual :state="1" ref="plateA_Ref"></Visual>
        <div style="padding-left: 25px">
          <p>1号育苗盘</p>
        </div>
      </div>
      <div>
        <p
          style="
            position: relative;
            top: 70px;
            left: 38%;
            z-index: 1;
            font-size: 18px;
          "
        >
          10株辣椒苗
        </p>
        <Visual :state="1" ref="plateB_Ref"></Visual>
        <div style="padding-left: 25px">
          <p>2号育苗盘</p>
        </div>
      </div>
    </div>
    <div>
      <p
        style="
          position: relative;
          top: 70px;
          left: 23%;
          z-index: 1;
          font-size: 18px;
        "
      >
        10株辣椒苗
      </p>
      <Visual :state="1" ref="plateB_Ref"></Visual>
      <div style="padding-left: 60px">
        <p>3号育苗盘</p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
