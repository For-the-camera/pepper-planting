<script>
import { forEach, log } from "mathjs";
import Visual from "../components/Visual.vue";
import { useUserStore } from "../stores/user";
export default {
  name: "Watering",
  components: {
    Visual,
  },
  props: {},
  data() {
    return {
      store: useUserStore(),
      answer: [
        {
          NPKA: 10,
          NPKB: 0,
          noNPK: "0",
        },
        {
          NPKA: 0,
          NPKB: 10,
          noNPK: "0",
        },
        {
          NPKA: 0,
          NPKB: 0,
          noNPK: "1",
        },
      ],
      marks: {
        0: "0ml",
        5: "5ml",
        10: "10ml",
        15: "15ml",
        20: "20ml",
      },
      buttonLock: false,
    };
  },
  methods: {
    handleCommand: function (index) {
      if (!index) {
        return;
      }
      this.answer[index].noNPK = this.answer[index].noNPK === "1" ? "0" : "1";
    },
    watering(ref, answer) {
      let timeout = 0;
      let now = null;
      if (answer.noNPK !== "1") {
        if (answer.NPKA !== 0) {
          timeout = timeout + 2000;
          now = "A";
        }
        if (answer.NPKB !== 0) {
          timeout = timeout + 2000;
          now = "B";
        }
        if (now) {
          if (timeout === 2000) {
            if (now === "A") {
              ref.watering(answer.NPKA * 3, "化肥A");
            }
            if (now === "B") {
              ref.watering(answer.NPKB * 3, "化肥B");
            }
          } else if (timeout === 4000) {
            ref.watering(answer.NPKA * 3, "化肥A");
            setTimeout(() => {
              ref.watering(answer.NPKB * 3, "化肥B");
            }, 3000);
          }
        }
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, timeout + 1000);
      });
    },
    getDropdownLabel: function (index) {
      const { NPKA, NPKB, noNPK } = this.answer[index];

      if (noNPK === "1") {
        return ["不选择化肥"];
      } else if (NPKA === 0 && NPKB !== 0) {
        return ["化肥B (" + NPKB + "ml)"];
      } else if (NPKB === 0 && NPKA !== 0) {
        return ["化肥A (" + NPKA + "ml)"];
      } else if (NPKA !== 0 && NPKB !== 0) {
        return ["化肥A (" + NPKA + "ml)", "化肥B (" + NPKB + "ml)"];
      } else {
        return [];
      }
    },
    startExperiment: async function () {
      this.store.issue3.answer = this.answer;
      this.buttonLock = true;
      const [A_answer, B_answer, C_answer] = this.answer;
      const refList = [
        this.$refs.plateA_Ref,
        this.$refs.plateB_Ref,
        this.$refs.plateC_Ref,
      ];
      await this.watering(refList[0], A_answer);
      await this.watering(refList[1], B_answer);
      await this.watering(refList[2], C_answer);
      this.buttonLock = false;
    },
  },
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
        <!-- 1号 -->
        <div style="padding-left: 25px">
          <el-dropdown
            :hide-on-click="false"
            trigger="click"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              1号育苗盘<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu style="width: 200px" slot="dropdown">
              <el-dropdown-item style="height: 80px; padding: 10px 20px">
                <p style="line-height: 1; padding-top: 5px">化肥A</p>
                <el-slider
                  :show-tooltip="false"
                  :min="0"
                  :max="20"
                  :step="5"
                  :marks="marks"
                  v-model="answer[0].NPKA"
                  :disabled="answer[0].noNPK === '1'"
                ></el-slider>
              </el-dropdown-item>
              <el-dropdown-item style="height: 80px; padding: 10px 20px">
                <p style="line-height: 1; padding-top: 5px">化肥B</p>
                <el-slider
                  :show-tooltip="false"
                  :min="0"
                  :max="20"
                  :step="5"
                  :marks="marks"
                  v-model="answer[0].NPKB"
                  :disabled="answer[0].noNPK === '1'"
                ></el-slider>
              </el-dropdown-item>
              <el-dropdown-item command="0" style="z-index: 1">
                <el-radio
                  style="z-index: -1"
                  v-model="answer[0].noNPK"
                  label="1"
                  >不施化肥</el-radio
                >
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <p v-for="item in getDropdownLabel(0)">{{ item }}</p>
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
        <!-- 2号 -->
        <div style="padding-left: 25px">
          <el-dropdown
            :hide-on-click="false"
            trigger="click"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              2号育苗盘<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu style="width: 200px" slot="dropdown">
              <el-dropdown-item style="height: 80px; padding: 10px 20px">
                <p style="line-height: 1; padding-top: 5px">化肥A</p>
                <el-slider
                  :show-tooltip="false"
                  :min="0"
                  :max="20"
                  :step="5"
                  :marks="marks"
                  v-model="answer[1].NPKA"
                  :disabled="answer[1].noNPK === '1'"
                ></el-slider>
              </el-dropdown-item>
              <el-dropdown-item style="height: 80px; padding: 10px 20px">
                <p style="line-height: 1; padding-top: 5px">化肥B</p>
                <el-slider
                  :show-tooltip="false"
                  :min="0"
                  :max="20"
                  :step="5"
                  :marks="marks"
                  v-model="answer[1].NPKB"
                  :disabled="answer[1].noNPK === '1'"
                ></el-slider>
              </el-dropdown-item>
              <el-dropdown-item command="1" style="z-index: 1">
                <el-radio
                  style="z-index: -1"
                  v-model="answer[1].noNPK"
                  label="1"
                  >不施化肥</el-radio
                >
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <p v-for="item in getDropdownLabel(1)">{{ item }}</p>
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
      <Visual :state="1" ref="plateC_Ref"></Visual>
      <!--  -->
      <div
        style="
          padding-left: 60px;
          display: flex;
          justify-content: space-between;
        "
      >
        <div>
          <el-dropdown
            :hide-on-click="false"
            trigger="click"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              3号育苗盘<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu style="width: 200px" slot="dropdown">
              <el-dropdown-item style="height: 80px; padding: 10px 20px">
                <p style="line-height: 1; padding-top: 5px">化肥A</p>
                <el-slider
                  :show-tooltip="false"
                  :min="0"
                  :max="20"
                  :step="5"
                  :marks="marks"
                  v-model="answer[2].NPKA"
                  :disabled="answer[2].noNPK === '1'"
                ></el-slider>
              </el-dropdown-item>
              <el-dropdown-item style="height: 80px; padding: 10px 20px">
                <p style="line-height: 1; padding-top: 5px">化肥B</p>
                <el-slider
                  :show-tooltip="false"
                  :min="0"
                  :max="20"
                  :step="5"
                  :marks="marks"
                  v-model="answer[2].NPKB"
                  :disabled="answer[2].noNPK === '1'"
                ></el-slider>
              </el-dropdown-item>
              <el-dropdown-item command="2" style="z-index: 1">
                <el-radio
                  style="z-index: -1"
                  v-model="answer[2].noNPK"
                  label="1"
                  >不施化肥</el-radio
                >
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <p v-for="item in getDropdownLabel(2)">{{ item }}</p>
        </div>
        <div style="margin-right: 30px">
          <el-button @click="startExperiment" :disabled="buttonLock"
            >开始实验</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
::v-deep .el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: transparent;
}

::v-deep .el-dropdown {
  font-size: 1rem;
  color: #000;
  span {
    cursor: pointer;
  }
}
</style>
