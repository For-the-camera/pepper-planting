<script>
import Visual from "../components/Visual.vue";
import { useUserStore } from "../stores/user";
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

      choiceA: false,
      choiceB: false,
      choiceC: false,
      choiceD: false,
      store: useUserStore(),
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
      return [this.choiceA, this.choiceB, this.choiceC, this.choiceD];
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
        'border-radius-round': choiceA,
      }"
      style="cursor: pointer"
      @click="
        () => {
          choiceA = !choiceA;
          submitStore();
        }
      "
    >
      <Visual :state="0" ref="plateA_Ref"></Visual>
      <div style="padding-left: 25px; margin-top: 12px" class="space-y-1">
        <p><el-radio v-model="choiceA" :label="true">1号育苗盘</el-radio></p>
        <p style="user-select: none">{{ plateA }}株辣椒苗</p>
        <el-select v-model="plateA" placeholder="请选择">
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
        'border-radius-round': choiceB,
      }"
      style="cursor: pointer"
      @click="
        () => {
          choiceB = !choiceB;
          submitStore();
        }
      "
    >
      <Visual :state="0" ref="plateB_Ref"></Visual>
      <div style="padding-left: 25px; margin-top: 12px" class="space-y-1">
        <p><el-radio v-model="choiceB" :label="true">2号育苗盘</el-radio></p>
        <p style="user-select: none">{{ plateB }}株辣椒苗</p>
        <el-select v-model="plateB" placeholder="请选择">
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
        'border-radius-round': choiceC,
      }"
      style="cursor: pointer"
      @click="
        () => {
          choiceC = !choiceC;
          submitStore();
        }
      "
    >
      <Visual :state="0" ref="plateC_Ref"></Visual>
      <div style="padding-left: 25px; margin-top: 12px" class="space-y-1">
        <p><el-radio v-model="choiceC" :label="true">3号育苗盘</el-radio></p>
        <p style="user-select: none">{{ plateC }}株辣椒苗</p>
        <el-select v-model="plateC" placeholder="请选择">
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
        'border-radius-round': choiceD,
      }"
      style="cursor: pointer"
      @click="
        () => {
          choiceD = !choiceD;
          submitStore();
        }
      "
    >
      <Visual :state="0" ref="plateD_Ref"></Visual>
      <div style="padding-left: 25px; margin-top: 12px" class="space-y-1">
        <p><el-radio v-model="choiceD" :label="true">4号育苗盘</el-radio></p>
        <p style="user-select: none">{{ plateD }}株辣椒苗</p>
        <el-select v-model="plateD" placeholder="请选择">
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
<style scoped></style>
