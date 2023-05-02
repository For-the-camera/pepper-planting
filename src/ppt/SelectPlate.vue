<script>
import { log } from "mathjs";
import Visual from "../components/Visual.vue";
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";
import { useUserStore } from "../stores/user";
import { isHistoryPage } from "../tools/isHistoryPage";
export default {
  name: "SelectPlate",
  components: {
    Visual,
  },
  props: {},
  data() {
    return {
      plateA: 0,
      plateB: 0,
      plateC: 0,
      plateD: 0,

      store: useUserStore(),
      processStore: useProcessStore(),
      pptStore: usePPTStore(),
    };
  },
  watch: {
    plateA: function (newVal) {
      this.$nextTick(function () {
        this.$refs.plateA_Ref.plant(newVal);
        this.submitStore();
      });
    },
    plateB: function (newVal) {
      this.$nextTick(function () {
        this.$refs.plateB_Ref.plant(newVal);
        this.submitStore();
      });
    },
    plateC: function (newVal) {
      this.$nextTick(function () {
        this.$refs.plateC_Ref.plant(newVal);
        this.submitStore();
      });
    },
    plateD: function (newVal) {
      this.$nextTick(function () {
        this.$refs.plateD_Ref.plant(newVal);
        this.submitStore();
      });
    },
  },
  computed: {
    options: function () {
      return Array.from({ length: 40 }).map((_, index) => ({
        value: index + 1,
        label: `${index + 1}`,
      }));
    },
    choice: function () {
      return [
        useUserStore().temp1.choiceA,
        useUserStore().temp1.choiceB,
        useUserStore().temp1.choiceC,
        useUserStore().temp1.choiceD,
      ];
    },
    lock: function () {
      return isHistoryPage();
    },
    choiceA: function () {
      return useUserStore().temp1.choiceA;
    },
    choiceB: function () {
      return useUserStore().temp1.choiceB;
    },
    choiceC: function () {
      return useUserStore().temp1.choiceC;
    },
    choiceD: function () {
      return useUserStore().temp1.choiceD;
    },
    choiceNum: function () {
      return useUserStore().temp1.choiceNum;
    },
  },
  methods: {
    submitStore() {
      let answersList = [];
      this.choice.forEach((choice, index) => {
        if (choice) {
          const temp = {
            no: index + 1,
            num: 1,
          };
          if (index == 0) {
            temp.num = this.plateA;
          } else if (index == 1) {
            temp.num = this.plateB;
          } else if (index == 2) {
            temp.num = this.plateC;
          } else if (index == 3) {
            temp.num = this.plateD;
          }
          answersList.push(temp);
        }
      });
      this.store.issue1.answers = answersList;
    },
  },
  mounted() {
    this.$watch(
      () => this.store.issue1.answers,
      function (val) {
        if (this.pptStore.nowPage.firstEvent === 0) {
          this.pptStore.nowPage.firstEvent = Date.now();
        }
        const answers = JSON.parse(JSON.stringify(val));
        this.processStore.page2.answer = {
          firstResult: answers,
          lastResult: answers,
          processResult: [],
        };
      },
      { deep: true }
    );
  },
};
</script>
<template>
  <div
    class="bg-left border-radius-round grid-2-2 gap-1"
    style="max-height;: 661px"
  >
    <div
      :class="{
        border: choiceA,
        notAllowed: lock,
        'border-radius-round': choiceA,
      }"
      style="cursor: pointer"
      @click.prevent="
        () => {
          if (!lock) {
            choiceA = !choiceA;
            submitStore();
          }
        }
      "
      v-if="choiceNum >= 1"
    >
      <Visual :state="0" ref="plateA_Ref"></Visual>
      <div style="padding-left: 25px; margin-top: 12px" class="space-y-1">
        <p>
          <el-radio :disabled="lock" v-model="choiceA" :label="true"
            >1号育苗盘</el-radio
          >
        </p>
        <p style="user-select: none">
          {{ plateA }}株辣椒苗（点击下拉框选择）
        </p>
        <el-select v-model="plateA" placeholder="请选择" :disabled="lock">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div
      :class="{
        border: choiceB,
        notAllowed: lock,
        'border-radius-round': choiceB,
      }"
      style="cursor: pointer"
      @click.prevent="
        () => {
          if (!lock) {
            choiceB = !choiceB;
            submitStore();
          }
        }
      "
      v-if="choiceNum >= 2"
    >
      <Visual :state="0" ref="plateB_Ref"></Visual>
      <div style="padding-left: 25px; margin-top: 12px" class="space-y-1">
        <p>
          <el-radio :disabled="lock" v-model="choiceB" :label="true"
            >2号育苗盘</el-radio
          >
        </p>
        <p style="user-select: none">
          {{ plateB }}株辣椒苗（点击下拉框选择）
        </p>
        <el-select :disabled="lock" v-model="plateB" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div
      :class="{
        border: choiceC,
        notAllowed: lock,
        'border-radius-round': choiceC,
      }"
      style="cursor: pointer"
      @click.prevent="
        () => {
          if (!lock) {
            choiceC = !choiceC;
            submitStore();
          }
        }
      "
      v-if="choiceNum >= 3"
    >
      <Visual :state="0" ref="plateC_Ref"></Visual>
      <div style="padding-left: 25px; margin-top: 12px" class="space-y-1">
        <p>
          <el-radio :disabled="lock" v-model="choiceC" :label="true"
            >3号育苗盘</el-radio
          >
        </p>
        <p style="user-select: none">
          {{ plateC }}株辣椒苗（点击下拉框选择）
        </p>
        <el-select :disabled="lock" v-model="plateC" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div
      :class="{
        border: choiceD,
        notAllowed: lock,
        'border-radius-round': choiceD,
      }"
      style="cursor: pointer"
      @click.prevent="
        () => {
          if (!lock) {
            choiceD = !choiceD;
            submitStore();
          }
        }
      "
      v-if="choiceNum >= 4"
    >
      <Visual :state="0" ref="plateD_Ref"></Visual>
      <div style="padding-left: 25px; margin-top: 12px" class="space-y-1">
        <p>
          <el-radio :disabled="lock" v-model="choiceD" :label="true"
            >4号育苗盘</el-radio
          >
        </p>
        <p style="user-select: none">
          {{ plateD }}株辣椒苗（点击下拉框选择）
        </p>
        <el-select :disabled="lock" v-model="plateD" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>
<style scoped>
.notAllowed {
  cursor: not-allowed !important;
}
</style>
