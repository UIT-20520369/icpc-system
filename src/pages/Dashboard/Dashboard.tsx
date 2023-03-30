import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Home from "../Home";

function Dashboard() {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

  return (
  <div className={"w-full"}>
    <NavBar/>
    <Home/>
  </div>
  );
}

export default Dashboard;
