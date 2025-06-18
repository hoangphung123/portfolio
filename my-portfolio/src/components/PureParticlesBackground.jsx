import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 88;
const COLORS = ["#A79295", "#A79295", "#A79295", "#A79295"];

class Particle {
  constructor(x, y, canvas) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.speedX = Math.random() * 1.6 - 0.8;
    this.speedY = Math.random() * 1.6 - 0.8;
    this.opacity = 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around edges
    if (this.x < 0) this.x = this.canvas.width;
    if (this.x > this.canvas.width) this.x = 0;
    if (this.y < 0) this.y = this.canvas.height;
    if (this.y > this.canvas.height) this.y = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
  }
}

const PureParticlesBackground = ({ number = "01" }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Create particles
    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particlesRef.current.push(new Particle(x, y, canvas));
      }
    };

    // Draw connections between particles
    const drawConnections = () => {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            ctx.beginPath();
            ctx.strokeStyle = "#F5F2F0";
            ctx.globalAlpha = 0.25 * (1 - distance / 110);
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw background number
    const drawNumber = () => {
      ctx.font = "bold 200px Arial";
      ctx.fillStyle = "#F5F2F0";
      ctx.globalAlpha = 0.1;
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      ctx.fillText(number, width - 50, height - 50);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 1;

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connections
      drawConnections();

      // Draw number
      drawNumber();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createParticles();
    };

    // Initialize
    createParticles();
    animate();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
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

export default PureParticlesBackground; 