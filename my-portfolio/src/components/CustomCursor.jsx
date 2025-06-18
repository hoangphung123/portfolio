import { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".cursor-circle");

    const colors = [
      "rgba(196, 187, 187, 0.97)",
      "rgba(196, 187, 187, 0.95)",
      "rgba(196, 187, 187, 0.92)",
      "rgba(196, 187, 187, 0.89)",
      "rgba(196, 187, 187, 0.86)",
      "rgba(196, 187, 187, 0.83)",
      "rgba(196, 187, 187, 0.8)",
      "rgba(196, 187, 187, 0.77)",
      "rgba(196, 187, 187, 0.74)",
      "rgba(196, 187, 187, 0.71)",
      "rgba(196, 187, 187, 0.68)",
      "rgba(196, 187, 187, 0.65)",
      "rgba(196, 187, 187, 0.62)",
      "rgba(196, 187, 187, 0.59)",
      "rgba(196, 187, 187, 0.56)",
      "rgba(196, 187, 187, 0.53)",
      "rgba(196, 187, 187, 0.5)",
      "rgba(196, 187, 187, 0.47)",
      "rgba(196, 187, 187, 0.44)",
      "rgba(196, 187, 187, 0.41)",
      "rgba(196, 187, 187, 0.38)",
      "rgba(196, 187, 187, 0.35)"
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
     
      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", function(e){
        coords.x = e.clientX;
        coords.y = e.clientY;
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-circle"></div>
    </>
  );
};

export default CustomCursor;