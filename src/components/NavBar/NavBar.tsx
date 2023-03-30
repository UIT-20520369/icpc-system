import React, { useState } from "react";
import logo from "./../../assets/transparent-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

function NavBar() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className={"mb-10 h-14 w-full border-b border-gray-200 bg-[#f9f9f9] drop-shadow-md"}>
      <div className={"flex h-full flex-row items-center justify-between px-40"}>
        <div className={"flex h-full items-center"}>
          <Link to={"/"} className={"px-3"}>
            <img className={"h-14 w-14"} src={logo} alt="logo-web" />
          </Link>
          <NavLink
            className={({ isActive }) =>
              `mx-3 inline-block flex h-full items-center justify-center px-2.5 text-gray-500 hover:bg-gray-200 hover:text-black ${
                isActive ? "border-b-4 border-solid border-gray-500" : ""
              }`
            }
            to={"/contests"}
          >
            Danh sách kỳ thi
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `mx-3 inline-block flex h-full items-center justify-center px-2.5 text-gray-500 hover:bg-gray-200 hover:text-black ${
                isActive ? "border-b-4 border-solid border-gray-500" : ""
              }`
            }
            to={"/teams"}
          >
            Đăng ký đội
          </NavLink>
          <button
            className={"mx-3 inline-block h-full px-2.5 text-gray-500 hover:bg-gray-200 hover:text-black"}
            onClick={() => {
              setIsLogin((prevState) => !prevState);
            }}
          >
            {/*<Link to={"/contests"}>Thứ hạng</Link>*/}
            Bảng xếp hạng
          </button>
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
          <Link to={"/profile"}>
            <FaRegUserCircle className={"h-8 w-8 cursor-pointer"} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
