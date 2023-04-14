<script>
export default {
  name: "SelectiveHeight",
  props: {
    no: {
      type: Number,
    },
  },
  data() {
    return {
      value: "0",
      options1: [
        {
          value: "87.4",
          label: "A. 平均值(87.0,87.7,87.8,87.2,86.8,87.2,87.5,87.4,88.0,87.6)",
        },
        {
          value: "87.2",
          label: "B. 众数(87.0,87.7,87.8,87.2,86.8,87.2,87.5,87.4,88.0,87.6)",
        },
        {
          value: "88.0",
          label: "C. 最大值(87.0,87.7,87.8,87.2,86.8,87.2,87.5,87.4,88.0,87.6)",
        },
        {
          value: "86.8",
          label: "D. 最小值(87.0,87.7,87.8,87.2,86.8,87.2,87.5,87.4,88.0,87.6)",
        },
        {
          value: "87.5",
          label: "E.中位数(87.0,87.7,87.8,87.2,86.8,87.2,87.5,87.4,88.0,87.6)",
        },
      ],
      options2: [
        {
          value: "85.5",
          label: "A. 平均值(85.5,84.6,84.9,85.1,86.4,85.7,86.5,84.7,85.7,86.1)",
        },
        {
          value: "85.7",
          label: "B. 众数(85.5,84.6,84.9,85.1,86.4,85.7,86.5,84.7,85.7,86.1)",
        },
        {
          value: "86.5",
          label: "C. 最大值(85.5,84.6,84.9,85.1,86.4,85.7,86.5,84.7,85.7,86.1)",
        },
        {
          value: "84.6",
          label: "D. 最小值(85.5,84.6,84.9,85.1,86.4,85.7,86.5,84.7,85.7,86.1)",
        },
        {
          value: "85.6",
          label: "E. 中位数(85.5,84.6,84.9,85.1,86.4,85.7,86.5,84.7,85.7,86.1)",
        },
      ],
      options3: [
        {
          value: "83.5",
          label: "A. 平均值(84.2,83.9,83.3,82.9,83.8,83.0,84.0,84.3,83.0,82.7)",
        },
        {
          value: "83.0",
          label: "B. 众数(84.2,83.9,83.3,82.9,83.8,83.0,84.0,84.3,83.0,82.7)",
        },
        {
          value: "84.3",
          label: "C. 最大值(84.2,83.9,83.3,82.9,83.8,83.0,84.0,84.3,83.0,82.7)",
        },
        {
          value: "82.7",
          label: "D. 最小值(84.2,83.9,83.3,82.9,83.8,83.0,84.0,84.3,83.0,82.7)",
        },
        {
          value: "83.6",
          label: "E.中位数(84.2,83.9,83.3,82.9,83.8,83.0,84.0,84.3,83.0,82.7)",
        },
      ],
    };
  },
  methods: {
    onConfirm() {
      this.$emit("onConfirm", {
        answer: this.value,
      });
      this.value = "0";
      this.options = [];
    },
  },
  computed: {
    options: function () {
      if (this.no === 1) {
        return this.options1;
      } else if (this.no === 2) {
        return this.options2;
      }
      return this.options3;
    },
  },
};
</script>
<template>
  <div
    style="width: 85%; height: 70%; background-color: white; font-size: 14px"
  >
    <!-- {{ props.no }}号盘内植株高度 -->
    <p>
      <span> {{ no }}号盘内植株高度=</span>
      <el-select
        v-model="value"
        placeholder="请选择最恰当的数据分析方法"
        style="font-size: 14px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </p>
    <p>= {{ value }}cm</p>
    <p>
      <el-button type="primary" @click="onConfirm">确定</el-button>
    </p>
  </div>
</template>
<style scoped></style>
