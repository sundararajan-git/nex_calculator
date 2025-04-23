import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const cleanPath = location.pathname.replace(/([^:]\/)\/+/g, "$1");
    console.log(cleanPath);
    if (location.pathname !== cleanPath) {
      navigate(cleanPath, { replace: true }); // Replace URL without adding to history
    }
  }, [location, navigate]);
  return (
    <section className="h-dvh overflow-auto">
      <NavBar />
      <Outlet />
    </section>
  );
};

export default RootLayout;
