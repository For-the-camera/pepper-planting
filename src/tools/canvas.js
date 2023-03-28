const canvasHeight = 250;
export const canvasWidth = 240;

export function drawImage(ctx, imgData, x, y) {
  const img = new Image();
  img.src = imgData;
  img.onload = function () {
    ctx.drawImage(img, x, y);
  };
}
export function coordYTransform(y, objHeight) {
  return canvasHeight - y - objHeight;
}

export class WaterDrop {
  constructor() {
    this.x = 200;
    this.y = 90;
    this.vx = -Math.random() * 3 - 2;
    this.vy = (Math.random() * 0.3 + 0.4) * 10 - 2;
  }
  draw(ctx) {
    if (this.y < canvasHeight - 57) {
      ctx.fillStyle = "rgba(114, 167, 226)";
    } else {
      ctx.fillStyle = "rgba(255, 255, 255,0)";
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI, true);
    ctx.fill();
  }
  update(ctx) {
    this.x += this.vx;
    this.y += this.vy;
    this.draw(ctx);
  }
}
