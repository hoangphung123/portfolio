import { useLocation } from "react-router-dom";
import PureParticlesBackground from "./PureParticlesBackground";
import DustBackground from "./DustBackground";

const Background = () => {
  const location = useLocation();
  
  // Map routes to background types and numbers
  const routeConfig = {
    "/": { type: "particles", number: "01" },
    "/about": { type: "dust", number: "02" },
    "/projects": { type: "particles", number: "03" },
    "/contact": { type: "particles", number: "04" }
  };

  // Get current route config or default to home
  const currentConfig = routeConfig[location.pathname] || routeConfig["/"];

  console.log("Current path:", location.pathname);
  console.log("Current config:", currentConfig);

  return currentConfig.type === "particles" ? (
    <PureParticlesBackground number={currentConfig.number} />
  ) : (
    <DustBackground number={currentConfig.number} />
  );
};

export default Background; 