<script>
import {
  drawImage,
  coordYTransform,
  WaterDrop,
  canvasWidth,
  canvasHeight,
} from "../tools/canvas";
import soil_img from "../assets/image/soil.png";
import seedling from "../assets/image/seedling.png";
import spray_bottle from "../assets/image/spray_bottle.png";
import seedling20 from "../assets/image/seedling20.png";
import seedling30 from "../assets/image/seedling30.png";
import seedling40 from "../assets/image/seedling40.png";
import flower1 from "../assets/image/flower1.png";
import flower2 from "../assets/image/flower2.png";
import flower3 from "../assets/image/flower3.png";
let renderList = [];
export default {
  name: "Visual",
  props: {
    state: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      soil_img,
      seedling,
      seedling20,
      seedling30,
      seedling40,
      spray_bottle,
      flower1,
      flower2,
      flower3,
      canvasHeight,
      canvasWidth,
      botany_ctx: null,
      animation_ctx: null,
    };
  },
  methods: {
    plant(num) {
      console.log(33, num);
      this.botany_ctx.clearRect(0, 0, 240, 250);
      let positionX = [
        120 - 46,
        120 - 46 - 46,
        120,
        120 - 46 - 46 - 46,
        120 + 46,
        120 - 46 - 20,
        120 - 46 + 20,
        120 - 46 - 46 - 20,
        120 - 46 - 46 + 20,
        120 - 20,
      ];
      if (num !== 0) {
        if (num <= 10) {
          for (let i = 0; i < num; i++) {
            drawImage(
              this.botany_ctx,
              this.seedling,
              positionX[i],
              coordYTransform(30, 112)
            );
          }
        } else {
          if (num > 10 && num <= 20) {
            drawImage(
              this.botany_ctx,
              this.seedling20,
              0,
              coordYTransform(0, 171)
            );
          }
          if (num > 20 && num <= 30) {
            drawImage(
              this.botany_ctx,
              this.seedling30,
              0,
              coordYTransform(0, 171)
            );
          }
          if (num > 30 && num <= 40) {
            drawImage(
              this.botany_ctx,
              this.seedling40,
              0,
              coordYTransform(0, 171)
            );
          }
        }
      }
    },
    watering(num, tip) {
      const animationEl = this.$refs.animationRef;
      const animation_ctx = animationEl.getContext("2d");
      const bottleEl = this.$refs.bottleRef;
      const bottle_ctx = bottleEl.getContext("2d");

      const state = tip === "化肥A" ? true : false;
      bottle_ctx.fillStyle = state ? "rgba(114, 167, 226)" : "red";
      bottle_ctx.font = "15px serif";
      if (!state) {
        // 右喷
        drawImage(bottle_ctx, spray_bottle, 180, 60);
        bottle_ctx.fillText(tip, 190, 60);
      } else {
        // 左喷
        drawImage(bottle_ctx, spray_bottle, 30, 60, true);
        bottle_ctx.fillText(tip, 10, 60);
      }

      // 创建喷水数量
      let drops = [];
      // 创建drops实例
      for (let i = 0; i < num; i++) {
        drops.push(new WaterDrop(state));
      }
      // 开始绘制
      function draw() {
        animation_ctx.clearRect(0, 0, 240, 250);
        for (let i = 0; i < num; i++) {
          drops[i].update(
            animation_ctx,
            state ? "rgba(114, 167, 226)" : "rgba(255, 143, 107)"
          );
        }
      }
      const id = setInterval(() => {
        draw();
      }, 40);
      setTimeout(() => {
        drops.length = 0;
        clearInterval(id);
        // bottle_ctx.clearRect(0, 0, 240, 250);
        animation_ctx.clearRect(0, 0, 240, 250);
      }, 2000);
      // setTimeout(() => {
      //   bottle_ctx.clearRect(0, 0, 240, 250);
      // }, 1500);
      // draw();
    },
    flower(state) {
      if (state === 1) {
        drawImage(this.botany_ctx, flower1, 0, coordYTransform(0, 211));
      } else if (state === 2) {
        drawImage(this.botany_ctx, flower2, 0, coordYTransform(0, 211));
      } else if (state === 3) {
        drawImage(this.botany_ctx, flower3, 0, coordYTransform(0, 211));
      }
    },
    clear() {
      const bottleEl = this.$refs.bottleRef;
      const bottle_ctx = bottleEl.getContext("2d");
      bottle_ctx.clearRect(0, 0, 240, 250);
    },
  },
  mounted() {
    const canvasEl = this.$refs.canvasRef;
    this.botany_ctx = canvasEl.getContext("2d");
    const soilEl = this.$refs.soilRef;
    const soil_ctx = soilEl.getContext("2d");
    drawImage(soil_ctx, this.soil_img, 0, coordYTransform(0, 57));
    if (this.state == 0) {
      this.plant(0);
    }
    if (this.state == 1) {
      this.plant(10);
    }
  },
};
</script>
<template>
  <div style="position: relative; height: 220px">
    <canvas
      ref="canvasRef"
      :width="canvasWidth"
      :height="canvasHeight"
      style="position: absolute; left: 10%"
    ></canvas>

    <canvas
      ref="soilRef"
      :width="canvasWidth"
      :height="canvasHeight"
      style="position: absolute; left: 10%"
    ></canvas>
    <canvas
      ref="animationRef"
      :width="canvasWidth"
      :height="canvasHeight"
      style="position: absolute; left: 10%"
    ></canvas>
    <canvas
      ref="bottleRef"
      :width="canvasWidth"
      :height="canvasHeight"
      style="position: absolute; left: 10%"
    ></canvas>
  </div>
</template>
