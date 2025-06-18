import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Background from "./Background";

const Layout = () => {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout; 