import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    issue1: {
      answers: [],
    },
    issue2: {
      answers1: "",
      answers2: "",
    },
    issue3: {
      answer: [],
    },
    issue4: {
      answers: "",
    },
    issue5: {
      choice: "",
      answers: "",
    },
    issue6: {
      height: [
        { answer: "请选择" },
        { answer: "请选择" },
        { answer: "请选择" },
      ],
      answers: "",
    },
    issue7: {
      flower: [
        { answer: "请选择" },
        { answer: "请选择" },
        { answer: "请选择" },
      ],
      answers: "",
    },
    issue8: {
      choice: "",
      answers: "",
    },
    temp1: {
      choiceA: false,
      choiceB: false,
      choiceC: false,
      choiceD: false,
      choiceNum: 0,
    },
  }),
});
