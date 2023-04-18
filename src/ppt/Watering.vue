<script>
import { forEach, log } from "mathjs";
import { isHistoryPage } from "../tools/isHistoryPage";
import Visual from "../components/Visual.vue";
import { useUserStore } from "../stores/user";
import { useProcessStore } from "../stores/process";
import { usePPTStore } from "../stores/ppt";
export default {
  name: "Watering",
  components: {
    Visual,
  },
  props: {},
  data() {
    return {
      store: useUserStore(),
      processStore: useProcessStore(),
      pptStore: usePPTStore(),
      answer: [
        {
          NPKA: 0,
          NPKB: 0,
          noNPK: "0",
        },
        {
          NPKA: 0,
          NPKB: 0,
          noNPK: "0",
        },
        {
          NPKA: 0,
          NPKB: 0,
          noNPK: "0",
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
  mounted() {
    this.$watch(
      () => this.answer[0].noNPK,
      function (val) {
        if (val === "1") {
          const lastResult = JSON.parse(
            JSON.stringify(this.processStore.page4.answer.lastResult[0])
          );
          const { processA, processB } = lastResult;
          processA.push(-1);
          processB.push(-1);
          const result = {
            npkA: -1,
            npkB: -1,
            noNPK: val,
            processA: processA,
            processB: processB,
          };
          this.processStore.page4.answer.firstResult[0] = result;
          this.processStore.page4.answer.lastResult[0] = result;
        } else {
          const answer = this.answer[0];
          const processA = JSON.parse(
            JSON.stringify(
              this.processStore.page4.answer.lastResult[0].processA
            )
          );
          const processB = JSON.parse(
            JSON.stringify(
              this.processStore.page4.answer.lastResult[0].processB
            )
          );
          processA.push(answer.NPKA);
          processB.push(answer.NPKB);
          this.processStore.page4.answer.firstResult[0] = {
            npkA: answer.NPKA,
            npkB: answer.NPKB,
            processA,
            processB,
            noNPK: val,
          };

          this.processStore.page4.answer.lastResult[0] = {
            npkA: answer.NPKA,
            npkB: answer.NPKB,
            processA,
            processB,
            noNPK: val,
          };
        }
      }
    );
    this.$watch(
      () => this.answer[1].noNPK,
      function (val) {
        if (val === "1") {
          const lastResult = JSON.parse(
            JSON.stringify(this.processStore.page4.answer.lastResult[1])
          );
          const { processA, processB } = lastResult;
          processA.push(-1);
          processB.push(-1);
          const result = {
            npkA: -1,
            npkB: -1,
            noNPK: val,
            processA: processA,
            processB: processB,
          };
          this.processStore.page4.answer.firstResult[1] = result;
          this.processStore.page4.answer.lastResult[1] = result;
        } else {
          const answer = this.answer[0];
          const processA = JSON.parse(
            JSON.stringify(
              this.processStore.page4.answer.lastResult[1].processA
            )
          );
          const processB = JSON.parse(
            JSON.stringify(
              this.processStore.page4.answer.lastResult[1].processB
            )
          );
          processA.push(answer.NPKA);
          processB.push(answer.NPKB);
          this.processStore.page4.answer.firstResult[1] = {
            npkA: answer.NPKA,
            npkB: answer.NPKB,
            processA,
            processB,
            noNPK: val,
          };

          this.processStore.page4.answer.lastResult[1] = {
            npkA: answer.NPKA,
            npkB: answer.NPKB,
            processA,
            processB,
            noNPK: val,
          };
        }
      }
    );
    this.$watch(
      () => this.answer[2].noNPK,
      function (val) {
        if (val === "1") {
          const lastResult = JSON.parse(
            JSON.stringify(this.processStore.page4.answer.lastResult[2])
          );
          const { processA, processB } = lastResult;
          processA.push(-1);
          processB.push(-1);
          const result = {
            npkA: -1,
            npkB: -1,
            noNPK: val,
            processA: processA,
            processB: processB,
          };
          this.processStore.page4.answer.firstResult[2] = result;
          this.processStore.page4.answer.lastResult[2] = result;
        } else {
          const answer = this.answer[2];
          const processA = JSON.parse(
            JSON.stringify(
              this.processStore.page4.answer.lastResult[2].processA
            )
          );
          const processB = JSON.parse(
            JSON.stringify(
              this.processStore.page4.answer.lastResult[2].processB
            )
          );
          processA.push(answer.NPKA);
          processB.push(answer.NPKB);
          this.processStore.page4.answer.firstResult[2] = {
            npkA: answer.NPKA,
            npkB: answer.NPKB,
            processA,
            processB,
            noNPK: val,
          };

          this.processStore.page4.answer.lastResult[2] = {
            npkA: answer.NPKA,
            npkB: answer.NPKB,
            processA,
            processB,
            noNPK: val,
          };
        }
        parent.postMessage(
          {
            data: this.processStore.$state,
            postTime: Date.now(),
            cst: new Date(),
            checkedAnswer: this.pptStore.checkedAnswer,
          },
          "*"
        );
      }
    );
    this.$watch(
      () => this.answer,
      function () {
        if (this.pptStore.nowPage.firstEvent === 0) {
          this.pptStore.nowPage.firstEvent = Date.now();
        }
      },
      { deep: true }
    );
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
        return [""];
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

    reset: function () {
      this.answer = [
        {
          NPKA: 0,
          NPKB: 0,
          noNPK: "0",
        },
        {
          NPKA: 0,
          NPKB: 0,
          noNPK: "0",
        },
        {
          NPKA: 0,
          NPKB: 0,
          noNPK: "0",
        },
      ];
      const refList = [
        this.$refs.plateA_Ref,
        this.$refs.plateB_Ref,
        this.$refs.plateC_Ref,
      ];
      refList.forEach((refItem) => {
        refItem.clear();
      });
    },
    onSliderChange(index, npk) {
      const currentAnswer = JSON.parse(JSON.stringify(this.answer[index]));
      const { NPKA, NPKB, noNPK } = currentAnswer;
      const lastResult = JSON.parse(
        JSON.stringify(this.processStore.page4.answer.lastResult[index])
      );

      if (noNPK !== "1") {
        console.log(123);
        const process = lastResult[`${npk === 0 ? "processA" : "processB"}`];
        npk === 0 ? process.push(NPKA) : process.push(NPKB);
        const result = {
          plate: index,
          npkA: NPKA,
          npkB: NPKB,
          processA: npk === 0 ? process : lastResult.processA,
          processB: npk === 0 ? lastResult.processB : process,
        };
        this.processStore.page4.answer.firstResult[index] = result;
        this.processStore.page4.answer.lastResult[index] = result;
        parent.postMessage(
          {
            data: this.processStore.$state,
            postTime: Date.now(),
            cst: new Date(),
            checkedAnswer: this.pptStore.checkedAnswer,
          },
          "*"
        );
      }
    },
  },
  computed: {
    lock: function () {
      return isHistoryPage();
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
        <div style="padding-left: 30px; width: 90%">
          <div
            style="display: flex; gap: 10px; width: 100%; align-items: center"
          >
            <span>化肥A</span>
            <el-slider
              :disabled="lock"
              :show-tooltip="false"
              :min="0"
              :max="20"
              :step="5"
              v-model="answer[0].NPKA"
              :marks="marks"
              @change="onSliderChange(0, 0)"
              style="width: 70%"
            ></el-slider>
          </div>
          <div
            style="display: flex; gap: 10px; width: 100%; align-items: center"
          >
            <span>化肥B</span>
            <el-slider
              :disabled="lock"
              :show-tooltip="false"
              :min="0"
              :max="20"
              :step="5"
              :marks="marks"
              v-model="answer[0].NPKB"
              style="width: 70%"
              class="NPKB"
              @change="onSliderChange(0, 1)"
            ></el-slider>
          </div>

          <div
            style="margin-top: 15px"
            @click.prevent="
              () => {
                if (!lock) {
                  answer[0].noNPK = answer[0].noNPK === '1' ? '0' : '1';
                }
              }
            "
          >
            <el-radio
              :disabled="lock"
              v-model="answer[0].noNPK"
              label="1"
              style="margin-right: 5px"
              >{{ "" }}</el-radio
            >
            <span style="cursor: pointer; user-select: none">不施化肥</span>
          </div>
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
        <div style="padding-left: 30px; width: 90%">
          <div
            style="display: flex; gap: 10px; width: 100%; align-items: center"
          >
            <span>化肥A</span>
            <el-slider
              :disabled="lock"
              :show-tooltip="false"
              :min="0"
              :max="20"
              :step="5"
              v-model="answer[1].NPKA"
              :marks="marks"
              style="width: 70%"
              @change="onSliderChange(1, 0)"
            ></el-slider>
          </div>
          <div
            style="display: flex; gap: 10px; width: 100%; align-items: center"
          >
            <span>化肥B</span>
            <el-slider
              :disabled="lock"
              :show-tooltip="false"
              :min="0"
              :max="20"
              :step="5"
              :marks="marks"
              v-model="answer[1].NPKB"
              style="width: 70%"
              class="NPKB"
              @change="onSliderChange(1, 1)"
            ></el-slider>
          </div>
          <div
            @click.prevent="
              () => {
                if (!lock) {
                  answer[1].noNPK = answer[1].noNPK === '1' ? '0' : '1';
                }
              }
            "
            style="margin-top: 15px; position: relative; z-index: 10"
          >
            <el-radio
              :disabled="lock"
              v-model="answer[1].noNPK"
              label="1"
              style="margin-right: 5px"
              >{{ "" }}</el-radio
            >
            <span style="cursor: pointer; user-select: none; z-index: 5"
              >不施化肥</span
            >
          </div>
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
      <div
        style="display: flex; justify-content: space-between; padding: 0 30px"
      >
        <Visual :state="1" ref="plateC_Ref"></Visual>
        <div
          style="
            width: 40%;
            display: flex;
            flex-direction: column;
            margin: 60px 40px 0 0;
          "
        >
          <div
            style="display: flex; gap: 10px; width: 100%; align-items: center"
          >
            <span>化肥A</span>
            <el-slider
              :disabled="lock"
              :show-tooltip="false"
              :min="0"
              :max="20"
              :step="5"
              v-model="answer[2].NPKA"
              :marks="marks"
              style="width: 70%"
              @change="onSliderChange(2, 0)"
            ></el-slider>
          </div>
          <div
            style="display: flex; gap: 10px; width: 100%; align-items: center"
          >
            <span>化肥B</span>
            <el-slider
              :disabled="lock"
              :show-tooltip="false"
              :min="0"
              :max="20"
              :step="5"
              :marks="marks"
              v-model="answer[2].NPKB"
              style="width: 70%"
              class="NPKB"
              @change="onSliderChange(2, 1)"
            ></el-slider>
          </div>
          <div
            style="margin-top: 15px"
            @click.prevent="
              () => {
                if (!lock) {
                  answer[2].noNPK = answer[2].noNPK === '1' ? '0' : '1';
                }
              }
            "
          >
            <el-radio
              :disabled="lock"
              v-model="answer[2].noNPK"
              label="1"
              style="margin-right: 5px"
              >{{ "" }}</el-radio
            >
            <span style="cursor: pointer; user-select: none">不施化肥</span>
          </div>
          <p v-for="item in getDropdownLabel(2)">{{ item }}</p>
        </div>
      </div>

      <!--  -->
      <div
        style="
          padding-left: 60px;
          display: flex;
          justify-content: space-between;
        "
      >
        <div
          style="
            margin-right: 30px;
            display: flex;
            align-items: end;
            flex-direction: column;
            width: 100%;
          "
          class="space-y-1"
        >
          <el-button @click="startExperiment" :disabled="buttonLock || lock"
            >开始实验</el-button
          >

          <el-button @click="reset" :disabled="buttonLock || lock"
            >重置</el-button
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
::v-deep .NPKB .el-slider__bar {
  background-color: red;
}
</style>
