export const canvasHeight = 220;
export const canvasWidth = 240;

export function drawImage(ctx, imgData, x, y, overturn = false) {
  if (ctx) {
    const img = new Image();
    img.src = imgData;
    img.onload = function () {
      if (overturn) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-img.width, 0);
      }
      ctx.drawImage(img, x, y);
      overturn ? ctx.restore() : null;
    };
  }
}
export function coordYTransform(y, objHeight) {
  return canvasHeight - y - objHeight;
}

export class WaterDrop {
  constructor(state = true) {
    this.x = state ? 30 : 200;
    this.y = 90;
    this.vx = state ? Math.random() * 3.3 + 2 : -Math.random() * 3.3 - 2;
    this.vy = (Math.random() * 0.3 + 0.35) * 10 - 2;
  }
  draw(ctx, color) {
    if (this.y < canvasHeight - 57) {
      ctx.fillStyle = color;
    } else {
      ctx.fillStyle = "rgba(255, 255, 255,0)";
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI, true);
    ctx.fill();
  }
  update(ctx, color) {
    if (ctx) {
      this.x += this.vx;
      this.y += this.vy;
      this.draw(ctx, color);
    }
  }
}
