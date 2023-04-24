<script>
export default {
  name: "Test2",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div
    class="bg-right border-radius-round h-full flex items-center justify-items-center"
  >
    <div
      style="padding: 20px; font-size: 22px; line-height: 2em"
      class="space-y-3"
    >
      <p>
        <strong>问题3 </strong
        >为探究哪种肥料（肥料A、肥料B）能促进植物产出更多辣椒，请设计实验。
      </p>
      <div style="border: 1px solid black; padding: 5px">
        <p>请在左侧界面进行如下操作：</p>
        <p>
          选择每一个育苗盘中想要添加的化肥种类，并点击鼠标选择想要喷洒的化肥量（单位为ml）。
        </p>
        <p style="margin-top: 20px">
          当你设置完三个育苗盘中的化肥及化肥量后，点击<span
            style="
              background-color: #559eff;
              color: white;
              padding: 3px;
              border-radius: 5px;
              margin-left: 28px;
            "
            >观察</span
          >，可看到肥料喷洒情况。若想重新设计实验，点击<span
            style="
              background-color: #eb6d6c;
              color: white;
              padding: 3px;
              border-radius: 5px;
            "
            >重置</span
          >按钮。
        </p>
      </div>

      <p>注:作答完毕点击”下一页”后，答案不可更改。</p>
    </div>
  </div>
</template>
<style scoped></style>
