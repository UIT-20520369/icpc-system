import React, { useEffect } from "react";
import Announcement from "../../components/Announcement";

function Home() {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <div className={"mt-5 flex w-full flex-col items-center justify-center"}>
      <div className="w-4/5 bg-green-200">
        <Announcement />
        <Announcement />

        <Announcement />
      </div>
    </div>
  );
}

export default Home;
