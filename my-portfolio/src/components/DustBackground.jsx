import { useEffect, useRef } from "react";

const DUST_PARTICLE_COUNT = 1000;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createParticles(width, height) {
  return Array.from({ length: DUST_PARTICLE_COUNT }, () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    r: randomBetween(0.5, 2.5),
    opacity: randomBetween(0.1, 0.5),
    dx: randomBetween(-0.2, 0.2),
    dy: randomBetween(-0.2, 0.2),
  }));
}

const DustBackground = ({ number = "02" }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create particles
    particlesRef.current = createParticles(width, height);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw background number
      ctx.font = "bold 200px Arial";
      ctx.fillStyle = "#F5F2F0";
      ctx.globalAlpha = 0.1;
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      ctx.fillText(number, width - 50, height - 50);

      // Draw particles
      for (let p of particlesRef.current) {
        // Move
        p.x += p.dx;
        p.y += p.dy;

        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particlesRef.current = createParticles(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [number]); // Re-run effect when number changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#111",
        zIndex: 0,
        pointerEvents: "none",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default DustBackground; 