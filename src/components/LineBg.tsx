import { useEffect } from "react";

const LineBg = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    const dotsNum = 80; // 点的数量
    const radius = 1; // 圆的半径，连接线宽度的一半
    const fillStyle = "rgba(234,179,8,0.5)"; // 点的颜色
    const lineWidth = radius * 2;
    const connection = 120; // 连线最大距离
    const followLength = 80; // 鼠标跟随距离

    let dots: Dot[] = [];
    let animationFrame: number | null = null;
    let mouseX: number | null = null;
    let mouseY: number | null = null;

    function addCanvasSize() {
      // 改变画布尺寸
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
      }

      dots = [];
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      initDots(dotsNum);
      moveDots();
    }

    function mouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function mouseOut() {
      mouseX = null;
      mouseY = null;
    }

    function mouseClick() {
      for (const dot of dots) dot.elastic();
    }

    class Dot {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      follow: boolean;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.follow = false;
      }

      draw() {
        if (ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.closePath();
        }
      }

      move() {
        if (this.x >= width || this.x <= 0) this.speedX = -this.speedX;
        if (this.y >= height || this.y <= 0) this.speedY = -this.speedY;
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.speedX >= 1) this.speedX--;
        if (this.speedX <= -1) this.speedX++;
        if (this.speedY >= 1) this.speedY--;
        if (this.speedY <= -1) this.speedY++;
        this.correct();
        this.connectMouse();
        this.draw();
      }

      correct() {
        // 根据鼠标的位置修正
        if (!mouseX || !mouseY) return;
        let lengthX = mouseX - this.x;
        let lengthY = mouseY - this.y;
        const distance = Math.sqrt(lengthX ** 2 + lengthY ** 2);
        if (distance <= followLength) this.follow = true;
        else if (
          this.follow === true &&
          distance > followLength &&
          distance <= followLength + 8
        ) {
          const proportion = followLength / distance;
          lengthX *= proportion;
          lengthY *= proportion;
          this.x = mouseX - lengthX;
          this.y = mouseY - lengthY;
        } else this.follow = false;
      }

      connectMouse() {
        // 点与鼠标连线
        if (mouseX && mouseY) {
          const lengthX = mouseX - this.x;
          const lengthY = mouseY - this.y;
          const distance = Math.sqrt(lengthX ** 2 + lengthY ** 2);
          if (distance <= connection) {
            const opacity = (1 - distance / connection) * 0.5;
            if (ctx) {
              ctx.strokeStyle = `rgba(234,179,8,${opacity})`;
              ctx.beginPath();
              ctx.moveTo(this.x, this.y);
              ctx.lineTo(mouseX, mouseY);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }

      elastic() {
        if (!mouseX || !mouseY) return;
        const lengthX = mouseX - this.x;
        const lengthY = mouseY - this.y;
        const distance = Math.sqrt(lengthX ** 2 + lengthY ** 2);
        if (distance >= connection) return;
        const rate = 1 - distance / connection;
        this.speedX = (40 * rate * -lengthX) / distance;
        this.speedY = (40 * rate * -lengthY) / distance;
      }
    }

    function initDots(num: number) {
      if (ctx) {
        ctx.fillStyle = fillStyle;
        ctx.lineWidth = lineWidth;
      } // 初始化粒子

      for (let i = 0; i < num; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const dot = new Dot(x, y);
        dot.draw();
        dots.push(dot);
      }
    }

    function moveDots() {
      // 移动并建立点与点之间的连接线
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
      }

      for (const dot of dots) {
        dot.move();
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i; j < dots.length; j++) {
          const distance = Math.sqrt(
            (dots[i].x - dots[j].x) ** 2 + (dots[i].y - dots[j].y) ** 2
          );
          if (distance <= connection) {
            const opacity = (1 - distance / connection) * 0.5;
            if (ctx) {
              ctx.strokeStyle = `rgba(234,179,8,${opacity})`;
              ctx.beginPath();
              ctx.moveTo(dots[i].x, dots[i].y);
              ctx.lineTo(dots[j].x, dots[j].y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
      animationFrame = window.requestAnimationFrame(moveDots);
    }

    addCanvasSize();

    initDots(dotsNum);
    moveDots();

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseout", mouseOut);
    window.addEventListener("click", mouseClick);
    window.addEventListener("resize", addCanvasSize);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseout", mouseOut);
      window.removeEventListener("click", mouseClick);
      window.removeEventListener("resize", addCanvasSize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
      }}
    >
      <canvas id="canvas" style={{ backgroundColor: "white" }} />
    </div>
  ); // 鼠标点击后的弹射
};
export default LineBg;
