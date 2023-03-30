import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";

function Teams() {
  useEffect(() => {
    document.title = "Đăng ký đội";
  }, []);
  return (
    <div>
      <NavBar />
      Teams
    </div>
  );
}

export default Teams;
