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
    right: import("../src/ppt/SelectPlateText.vue"),
  },
  {
    index: 3,
    title: "问题2",
    left: import("../src/ppt/SeedlingNum.vue"),
    right: import("../src/ppt/SeedlingNumText.vue"),
  },
  {
    index: 4,
    title: "问题3",
    left: import("../src/ppt/Fertilizer.vue"),
    right: import("../src/ppt/SelectFertilizerText.vue"),
  },
  {
    index: 5,
    title: "问题4",
    left: import("../src/ppt/Fertilizer.vue"),
    right: import("../src/ppt/FertilizerText.vue"),
  },
  {
    index: 6,
    title: "问题5",
    left: import("../src/ppt/Flower.vue"),
    right: import("../src/ppt/FlowerText.vue"),
  },
  {
    index: 7,
    title: "问题6",
    single: true,
    page: import("../src/ppt/Issue6.vue"),
  },
  {
    index: 8,
    title: "问题7",
    single: true,
    page: import("../src/ppt/Issue7.vue"),
  },
  {
    index: 9,
    title: "问题8",
    single: true,
    page: import("../src/ppt/Issue8.vue"),
  },
];
