export default [
  {
    index: 1,
    title: "前言",
    single: true,
    page: import("../src/ppt/Introduction.vue"),
  },
  {
    index: 2,
    title: "问题1",
    left: import("../src/ppt/SelectPlate.vue"),
    right: import("../src/ppt/test1.vue"),
  },
];
