import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    issue1: {
      answers: [],
    },
  }),
});
