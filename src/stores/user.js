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
    issue4: {
      answers: "",
    },
    issue5: {
      choice: "",
      answers: "",
    },
    issue6: {
      height: [0, 0, 0],
      answers: "",
    },
    issue7: {
      flower: [0, 0, 0],
    },
    issue8: {
      choice: "",
      answers: "",
    },
  }),
});
