import React, { useState } from "react";
import logo_web from "./../../assets/logo_web.svg";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

type Item = {
  key: String;
  name: String;
  to: String;
};

const menuItems: Item[] = [
  {
    key: "item-1",
    name: "TRANG CHỦ",
    to: "/"
  },
  {
    key: "item-2",
    name: "DANH SÁCH CUỘC THI",
    to: "/contests"
  },
  {
    key: "item-3",
    name: "ĐĂNG KÝ ĐỘI",
    to: "/teams"
  }
];

function NavBar() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className={"flex w-full flex-col items-center justify-center"}>
      <div className={"flex  h-16 w-4/5 flex-row items-center justify-between"}>
        <div className={"flex cursor-pointer flex-row items-center"}>
          <img className={"h-14 w-14"} src={logo_web} alt="logo-web" />
          <span className={"font-bold"}>Thi lập trình</span>
        </div>

        {!isLogin && (
          <div className={"flex w-52 flex-row items-center justify-around"}>
            <Link
              to={"/login"}
              className={
                "ml-0.5 w-24 cursor-pointer rounded-md border border-solid border-black p-2 text-center hover:bg-red-400"
              }
            >
              Đăng nhập
            </Link>
            <Link
              className={
                "mr-0.5 w-24 cursor-pointer rounded-md border border-solid border-black bg-teal-100 p-2 text-center hover:bg-blue-200"
              }
              to={"/register"}
            >
              Đăng ký
            </Link>
          </div>
        )}

        {isLogin && (
          <div>
            <FaRegUserCircle className={"h-8 w-8 cursor-pointer"} />
          </div>
        )}
      </div>

      <div className={"flex h-12 w-4/5 items-center rounded-lg border border-solid border-black"}>
        <div className={"flex w-1/2 items-center justify-around"}>
          {menuItems.map((item) => (
            <Link key={item.key.toString()} className={"text-center border-b-2 border-black"} to={item.to.toString()}>
              {item.name}
            </Link>
          ))}

          <button onClick={() => setIsLogin(!isLogin)}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
