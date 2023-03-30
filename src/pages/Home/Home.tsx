import React, { useEffect } from "react";
import Announcement from "../../components/Announcement";

function Home() {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <div className={"flex w-full flex-col items-center justify-center"}>
      <div className="w-4/5">Home</div>
    </div>
  );
}

export default Home;
