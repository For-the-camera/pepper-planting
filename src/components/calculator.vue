<script>
import calc from "calculatorjs";
import { evaluate } from "mathjs";
export default {
  props: {},
  data() {
    return {
      expression: "",

      keyboardActivateCtrl: {
        C: false,
        Divide: false,
        Multiplication: false,
        Delete: false,
        Num_7: false,
        Num_8: false,
        Num_9: false,
        Num_6: false,
        Num_5: false,
        Num_4: false,
        Num_3: false,
        Num_2: false,
        Num_1: false,
        Num_0: false,
        Equal: false,
        Percent: false,
        Dot: false,
        Minus: false,
        Add: false,
        Confirm: false,
        LeftBracket: false,
        RightBracket: false,
      },
    };
  },
  watch: {},
  computed: {
    answer: function () {
      let temp = 0;
      if (this.expression.length !== 0) {
        try {
          temp = evaluate(this.expression);
        } catch (e) {
          temp = "表达式错误";
        }
      }
      return temp;
    },
  },
  methods: {
    deleteText() {
      this.keyboardActivateCtrl.Delete = true;
      this.expression = this.expression.substr(0, this.expression.length - 1);
    },
  },
};
</script>
<template>
  <div class="calculator border-radius-round">
    <div class="display">
      <div class="expression">{{ expression }}</div>
      <div class="answer">{{ answer }}</div>
    </div>
    <div class="keyboard">
      <div
        :class="{
          button: true,
          blue: true,
          button_active: keyboardActivateCtrl.LeftBracket,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.LeftBracket = true;
            expression = expression + '(';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.LeftBracket = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.LeftBracket = false;
          }
        "
        style="grid-area: LeftBracket"
      >
        (
      </div>
      <div
        :class="{
          button: true,
          blue: true,
          button_active: keyboardActivateCtrl.RightBracket,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.RightBracket = true;
            expression = expression + ')';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.RightBracket = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.RightBracket = false;
          }
        "
        style="grid-area: RightBracket"
      >
        )
      </div>
      <div
        :class="{
          button: true,
          blue: true,
          button_active: keyboardActivateCtrl.C,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.C = true;
            expression = '';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.C = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.C = false;
          }
        "
        style="grid-area: C"
      >
        C
      </div>

      <div
        :class="{
          button: true,
          blue: true,
          button_active: keyboardActivateCtrl.Divide,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Divide = true;
            expression = expression + '/';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Divide = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Divide = false;
          }
        "
        style="grid-area: Divide"
      >
        /
      </div>
      <div
        :class="{
          button: true,
          blue: true,
          button_active: keyboardActivateCtrl.Multiplication,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Multiplication = true;
            expression = expression + '*';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Multiplication = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Multiplication = false;
          }
        "
        style="grid-area: Multiplication"
      >
        <i class="el-icon-close"></i>
      </div>
      <div
        :class="{
          button: true,
          blue: true,
          button_active: keyboardActivateCtrl.Delete,
        }"
        @mousedown="deleteText"
        @mouseup="
          () => {
            keyboardActivateCtrl.Delete = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Delete = false;
          }
        "
        style="grid-area: Delete"
      >
        <i class="el-icon-back"></i>
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_7,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_7 = true;
            expression = expression + '7';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_7 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_7 = false;
          }
        "
        style="grid-area: Num_7"
      >
        7
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_8,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_8 = true;
            expression = expression + '8';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_8 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_8 = false;
          }
        "
        style="grid-area: Num_8"
      >
        8
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_9,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_9 = true;
            expression = expression + '9';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_9 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_9 = false;
          }
        "
        style="grid-area: Num_9"
      >
        9
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Minus,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Minus = true;
            expression = expression + '-';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Minus = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Minus = false;
          }
        "
        style="grid-area: Minus"
      >
        <i class="el-icon-minus"></i>
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_4,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_4 = true;
            expression = expression + '4';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_4 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_4 = false;
          }
        "
        style="grid-area: Num_4"
      >
        4
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_5,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_5 = true;
            expression = expression + '5';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_5 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_5 = false;
          }
        "
        style="grid-area: Num_5"
      >
        5
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_6,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_6 = true;
            expression = expression + '6';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_6 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_6 = false;
          }
        "
        style="grid-area: Num_6"
      >
        6
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Add,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Add = true;
            expression = expression + '+';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Add = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Add = false;
          }
        "
        style="grid-area: Add"
      >
        <i class="el-icon-plus"></i>
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_1,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_1 = true;
            expression = expression + '1';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_1 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_1 = false;
          }
        "
        style="grid-area: Num_1"
      >
        1
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_2,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_2 = true;
            expression = expression + '2';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_2 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_2 = false;
          }
        "
        style="grid-area: Num_2"
      >
        2
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_3,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_3 = true;
            expression = expression + '3';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_3 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_3 = false;
          }
        "
        style="grid-area: Num_3"
      >
        3
      </div>
      <div
        :class="{
          equal_button: true,
          equal_button_active: keyboardActivateCtrl.Equal,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Equal = true;
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Equal = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Equal = false;
          }
        "
      >
        =
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Percent,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Percent = true;
            expression = expression + '%';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Percent = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Percent = false;
          }
        "
        style="grid-area: Percent"
      >
        %
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Num_0,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Num_0 = true;
            expression = expression + '0';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Num_0 = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Num_0 = false;
          }
        "
        style="grid-area: Zero"
      >
        0
      </div>
      <div
        :class="{
          button: true,
          button_active: keyboardActivateCtrl.Dot,
        }"
        @mousedown="
          () => {
            keyboardActivateCtrl.Dot = true;
            expression = expression + '.';
          }
        "
        @mouseup="
          () => {
            keyboardActivateCtrl.Dot = false;
          }
        "
        @mouseleave="
          () => {
            keyboardActivateCtrl.Dot = false;
          }
        "
        style="grid-area: Dot"
      >
        .
      </div>
      <div class="confirm_button_container">
        <div
          :class="{
            confirm_button: true,
            equal_button_active: keyboardActivateCtrl.Confirm,
          }"
          @mousedown="
            () => {
              keyboardActivateCtrl.Confirm = true;
            }
          "
          @mouseup="
            () => {
              keyboardActivateCtrl.Confirm = false;
            }
          "
          @mouseleave="
            () => {
              keyboardActivateCtrl.Confirm = false;
            }
          "
        >
          确认
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.calculator {
  width: 50%;
  height: 83%;
  background: #f3f4f6;
  position: absolute;
  top: 55%;
  left: 25%;
  transform: translateY(-60%);
  .display {
    width: 100%;
    height: 100px;

    background: #e9ecf1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .expression {
      width: 100%;
      min-height: 35px;
      display: inline;
      white-space: nowrap;
      text-align: right;
      font-size: 25px;
      overflow-x: scroll;
      overflow-y: hidden;
    }

    .expression::-webkit-scrollbar {
      height: 0px;
    }

    .answer {
      width: 100%;
      text-align: right;
    }
  }
  .keyboard {
    width: 100%;
    height: calc(100% - 100px);
    display: grid;
    padding: 10px;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "LeftBracket RightBracket Confirm Confirm"
      "C Divide Multiplication Delete"
      "Num_7 Num_8 Num_9 Minus" "Num_4 Num_5 Num_6 Add"
      "Num_1 Num_2 Num_3 Equal" "Percent Zero Dot Equal";
    gap: 0.45rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .button {
      width: 100%;
      height: 63px;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      border-radius: 50%;
      background: #f8f8f8;
      font-weight: 300;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    .blue {
      color: #0b58f4;
    }
    .equal_button {
      grid-area: Equal;
      background-color: #0b58f4;
      color: white;
      height: 100%;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
    }
    .confirm_button {
      grid-area: Confirm;
      background-color: #0b58f4;
      color: white;
      width: 100%;
      border-radius: 25px;
      text-align: center;
      user-select: none;
      font-size: 18px;
    }
    .button_active {
      background-color: #e4e5e7;
    }
    .equal_button_active {
      background-color: #0845ba;
    }
    .confirm_button_container {
      grid-area: Confirm;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
</style>
