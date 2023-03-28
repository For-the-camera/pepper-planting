<script>
import Visual from "../components/Visual.vue";
export default {
  components: {
    Visual,
  },
  props: {},
  data() {
    return {
      options: [
        {
          value: 1,
          label: "1",
        },
        {
          value: 2,
          label: "2",
        },
        {
          value: 3,
          label: "3",
        },
        {
          value: 4,
          label: "4",
        },
        {
          value: 5,
          label: "5",
        },
        {
          value: 6,
          label: "6",
        },
        {
          value: 7,
          label: "7",
        },
        {
          value: 8,
          label: "8",
        },
        {
          value: 9,
          label: "9",
        },
        {
          value: 10,
          label: "10",
        },
        {
          value: 11,
          label: "11",
        },
        {
          value: 21,
          label: "21",
        },
        {
          value: 31,
          label: "31",
        },
      ],
      value: 1,
    };
  },
  watch: {
    value: {
      handler: function (newVal) {
        if (newVal) {
          this.$nextTick(() => {
            // this.$refs.visualRef.plant(newVal);
            // this.$refs.visualRef.watering(200);
            this.$refs.visualRef.flower(3);
          });
        }
      },
    },
  },
  computed: {},
  methods: {},
  mounted() {
    setTimeout(() => {
      // this.$refs.visualRef.watering();
    }, 1000);
  },
};
</script>
<template>
  <div>
    <Visual ref="visualRef" :state="3"></Visual>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>
<style scoped></style>
