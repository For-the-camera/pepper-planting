<script>
export default {
  name: "SelectiveNum",
  props: {
    no: {
      type: Number,
    },
    value: {
      type: Number | String,
    },
  },
  data() {
    return {
      options1: [
        {
          value: "14.1",
          label: "A. 平均值(13,14,15,13,16,15,12,14,16,13)",
        },
        {
          value: "13.0",
          label: "B. 众数(13,14,15,13,16,15,12,14,16,13)",
        },
        {
          value: "16.0",
          label: "C. 最大值(13,14,15,13,16,15,12,14,16,13)",
        },
        {
          value: "12.0",
          label: "D. 最小值(13,14,15,13,16,15,12,14,16,13)",
        },
        {
          value: "14.0",
          label: "E. 中位数(13,14,15,13,16,15,12,14,16,13)",
        },
      ],
      options2: [
        {
          value: "21.6",
          label: "A. 平均值(20,21,23,21,22,20,20,22,24,23)",
        },
        {
          value: "20.0 ",
          label: "B. 众数(20,21,23,21,22,20,20,22,24,23)",
        },
        {
          value: "24.0",
          label: "C. 最大值(20,21,23,21,22,20,20,22,24,23)",
        },
        {
          value: "20.0",
          label: "D. 最小值(20,21,23,21,22,20,20,22,24,23)",
        },
        {
          value: "21.5",
          label: "E. 中位数(20,21,23,21,22,20,20,22,24,23)",
        },
      ],
      options3: [
        {
          value: "9.8",
          label: "A. 平均值(9,10,11,11,10,8,9,12,10,8)",
        },
        {
          value: "10.0 ",
          label: "B. 众数(9,10,11,11,10,8,9,12,10,8)",
        },
        {
          value: "12.0",
          label: "C. 最大值(9,10,11,11,10,8,9,12,10,8)",
        },
        {
          value: "8.0",
          label: "D. 最小值(9,10,11,11,10,8,9,12,10,8)",
        },
        {
          value: "10.0",
          label: "E. 中位数(9,10,11,11,10,8,9,12,10,8)",
        },
      ],
    };
  },
  methods: {
    onConfirm() {
      let option = "";
      if (this.no === 1) {
        option = this.options1.find((item) => {
          if (item.value === this.value) {
            return true;
          }
          return false;
        });
      } else if (this.no === 2) {
        option = this.options2.find((item) => {
          if (item.value === this.value) {
            return true;
          }
          return false;
        });
      } else if (this.no === 3) {
        option = this.options3.find((item) => {
          if (item.value === this.value) {
            return true;
          }
          return false;
        });
      }
      this.$emit("onConfirm", {
        answer: this.value,
        option,
      });
      this.value = "";
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
    style="
      width: 85%;
      height: 70%;
      background-color: white;
      font-size: 14px;
      border-radius: 4%;
      padding: 22px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    "
  >
    <!-- {{ props.no }}号盘内植株高度 -->
    <p>
      <span> {{ no }}号盘内花的数量 = &nbsp;</span>
      <el-select v-model="value" placeholder="请选择" style="font-size: 14px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </p>
    <p>&nbsp;= {{ value }}&nbsp;朵</p>
    <p style="text-align: right">
      <el-button type="primary" @click="onConfirm">确定</el-button>
    </p>
  </div>
</template>
<style scoped></style>
