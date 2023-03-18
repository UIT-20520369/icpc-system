import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";

function Dashboard() {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Dashboard;
