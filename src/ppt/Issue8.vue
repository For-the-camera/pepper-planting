<script>
import { useUserStore } from "../stores/user";
import table1 from "../assets/image/mean_height.png";
import table2 from "../assets/image/mean_num.png";
import { usePPTStore } from "../stores/ppt";
import table3 from "../assets/image/pepper_mean_num.png";
import { useProcessStore } from "../stores/process";
export default {
  name: "IssueEight",
  data() {
    return {
      table1,
      table2,
      table3,
      store: useUserStore(),
      pptStore: usePPTStore(),
      processStore: useProcessStore(),
      mark: false,
      nowIssue: 0,
      options: [
        { label: "化肥A", value: "A" },
        { label: "化肥B", value: "B" },
        { label: "实验结果不能说明哪种肥料效果更好", value: "C" },
      ],
    };
  },
  methods: {
    onConfirm(val) {
      this.mark = false;
      this.store.issue6.height[this.nowIssue] = val;
    },
    openCalculator(nowIssue) {
      this.mark = true;
      this.nowIssue = nowIssue;
    },
    selectOption(index) {
      this.store.issue8.choice === index
        ? (this.store.issue8.choice = "")
        : (this.store.issue8.choice = index);
    },
    postData() {
      const reason = this.store.issue8.answers;
      if (this.pptStore.nowPage.firstEnterInto) {
        this.processStore.page9.answer.firstResult.reason = reason;
        this.processStore.page9.answer.lastResult.reason = reason;
      } else {
        this.processStore.page9.answer.lastResult.reason = reason;
      }
    },
  },
  mounted() {
    this.$watch(
      () => this.store.issue8.choice,
      function (val) {
        console.log(val);
        if (this.pptStore.nowPage.firstEvent === 0) {
          this.pptStore.nowPage.firstEvent = Date.now();
        }
        const reason = this.store.issue8.reason;
        if (this.pptStore.nowPage.firstEnterInto) {
          this.processStore.page9.answer.firstResult = { choice: val, reason };
          this.processStore.page9.answer.lastResult = { choice: val, reason };
        } else {
          this.processStore.page9.answer.lastResult = { choice: val, reason };
        }
      }
    );
  },
};
</script>
<template>
  <div class="container bg-single border-radius-round">
    <div class="picture">
      <div>
        <img :src="table1" alt="" />
        <p class="text-center">图1</p>
      </div>
      <div>
        <img :src="table2" alt="" />
        <p class="text-center">图2</p>
      </div>
      <div>
        <img :src="table3" alt="" />
        <p class="text-center">图3</p>
      </div>
    </div>
    <div class="issue space-y-3">
      <p>
        <strong
          >问题7 为探究哪种肥料（肥料A、肥料B）能促进植物产出更多辣椒，</strong
        >左图是对育苗盘中植株高度(单位cm)、花的数量数据的科学分析。另外，图3是实验结束后的辣椒平均数量。
      </p>

      <div
        style="
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          grid-template-rows: 1fr;
        "
      >
        <div>
          <p>
            基于数据，请回答实验结果显示哪种化肥效果更好？{{
              store.issue8.choice
            }}
          </p>
          <ul>
            <el-radio-group v-model="store.issue8.choice">
              <li
                v-for="item in options"
                :key="item.value"
                @click.prevent="selectOption(item.value)"
              >
                <el-radio :label="item.value">{{ "" }}</el-radio>
                {{ item.value }}. {{ item.label }}
              </li>
            </el-radio-group>
          </ul>
        </div>
        <div>
          <p>请解释你选择上述选项的原因：</p>
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="store.issue8.answers"
            @blur="postData"
          >
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$text-size: 22px;
.container {
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  grid-template-columns: 1fr;
  .picture {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    strong {
      margin-bottom: 10px;
      margin-left: 10px;
      font-size: $text-size;
    }
    img {
      width: 350px;
      object-fit: contain;
    }
    p {
      color: red;
    }
  }
  .issue {
    font-size: $text-size;
    padding: 15px;
    line-height: 2em;
  }
}
ul {
  list-style: none;
  list-style-position: inside;
  li {
    font-size: $text-size;
    padding: 10px 0;
    cursor: pointer;
  }
}
</style>
