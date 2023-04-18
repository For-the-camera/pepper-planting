import { defineStore } from "pinia";

export const usePPTStore = defineStore("ppt", {
  state: () => ({
    nowPage: {},
    historyPage: [],
    checkedAnswer: false,
  }),
});
