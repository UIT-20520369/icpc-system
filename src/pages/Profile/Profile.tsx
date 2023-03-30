import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Link, NavLink, Route, Routes } from "react-router-dom";

export function PersonalInfo() {
  return (
    <div className={"rounded-lg border border-gray-300 bg-[#f9f9f9] drop-shadow-md"}>
      <form className={"space-y-6 p-3"}>
        <div>
          <label htmlFor={"fullName"} className="mb-2 block text-sm font-medium text-gray-500">
            Họ tên
          </label>
          <input
            type={"text"}
            id={"fullName"}
            className="block w-full rounded-lg border border-[#2196f3] bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#133c55] focus:ring-[#133c55]"
            placeholder={"Trương Xuân Vương"}
          ></input>
        </div>
        <div>
          <label htmlFor={"phone"} className="mb-2 block text-sm font-medium text-gray-500">
            Số điện thoại
          </label>
          <input
            type={"tel"}
            id={"phone"}
            className="block w-full rounded-lg border border-[#2196f3] bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#133c55] focus:ring-[#133c55]"
            placeholder={"0393320811"}
          ></input>
        </div>
        <div>
          <label htmlFor={"email"} className="mb-2 block text-sm font-medium text-gray-500">
            Email
          </label>
          <input
            type={"email"}
            id={"email"}
            className="block w-full rounded-lg border border-[#2196f3] bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#133c55] focus:ring-[#133c55]"
            placeholder={"xuanvuong.truong21@gmail.com  "}
          ></input>
        </div>
        <div>
          <label htmlFor={"schoolName"} className="mb-2 block text-sm font-medium text-gray-500">
            Tên trường / tổ chức
          </label>
          <input
            type={"text"}
            id={"schoolName"}
            className="block w-full rounded-lg border border-[#2196f3] bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#133c55] focus:ring-[#133c55]"
            placeholder={"Trường Đại học Công nghệ Thông tin"}
          ></input>
        </div>

        <button
          className={"mt-10 w-full rounded-lg bg-[#0466c8] p-2.5 text-white hover:bg-[#0582ca] active:translate-y-0.5"}
          type={"submit"}
        >
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

export function AccountInfo() {
  return (
    <div className={"rounded-lg border border-gray-300 bg-[#f9f9f9] drop-shadow-md"}>
      <form className={"space-y-6 p-3"}>
        <div>
          <label htmlFor={"userName"} className="mb-2 block text-sm font-medium text-gray-500">
            Tên đăng nhập
          </label>
          <input
            type={"text"}
            id={"userName"}
            className="block w-full rounded-lg border border-[#2196f3] bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#133c55] focus:ring-[#133c55]"
            placeholder={"NguyenVanA"}
            readOnly={true}
          ></input>
        </div>
        <div>
          <label htmlFor={"oldPassword"} className="mb-2 block text-sm font-medium text-gray-500">
            Mật khẩu cũ
          </label>
          <input
            type={"password"}
            id={"oldPassword"}
            className="block w-full rounded-lg border border-[#2196f3] bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#133c55] focus:ring-[#133c55]"
            placeholder={"••••••••"}
          ></input>
        </div>
        <div>
          <label htmlFor={"newPassword"} className="mb-2 block text-sm font-medium text-gray-500">
            Mật khẩu mới
          </label>
          <input
            type={"password"}
            id={"newPassword"}
            className="block w-full rounded-lg border border-[#2196f3] bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#133c55] focus:ring-[#133c55]"
            placeholder={"••••••••"}
          ></input>
        </div>
        <div>
          <label htmlFor={"retypePassword"} className="mb-2 block text-sm font-medium text-gray-500">
            Xác nhận mật khẩu mới
          </label>
          <input
            type={"password"}
            id={"retypePassword"}
            className="block w-full rounded-lg border border-[#2196f3] bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#133c55] focus:ring-[#133c55]"
            placeholder={"••••••••"}
          ></input>
        </div>

        <button
          className={"mt-10 w-full rounded-lg bg-[#0466c8] p-2.5 text-white hover:bg-[#0582ca] active:translate-y-0.5"}
          type={"submit"}
        >
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

function Profile() {
  useEffect(() => {
    document.title = "Thông tin tài khoản";
  }, []);

  return (
    <>
      <NavBar />
      <div className={"flex w-full items-center justify-center"}>
        <div className={"w-1/2"}>
          {/*<h2 className={"my-4 text-2xl text-gray-500"}>Thông tin tài khoản</h2>*/}
          <div className={"flex h-10 w-full flex-row items-center"}>
            <NavLink
              to={"/profile"}
              end={true}
              className={({ isActive }) =>
                `flex h-full items-center justify-center bg-[#f9f9f9] px-5 ${
                  isActive ? "border-b-4 border-solid border-gray-600" : ""
                }`
              }
            >
              Thông tin cá nhân
            </NavLink>
            <NavLink
              to={"/profile/account-info"}
              className={({ isActive }) =>
                `mr-2 flex h-full items-center justify-center bg-[#f9f9f9] px-5 ${
                  isActive ? "border-b-4 border-solid border-gray-600" : ""
                }`
              }
            >
              Thông tin tài khoản
            </NavLink>
          </div>

          {/*<PersonalInfo/>*/}
          <Routes>
            <Route index={true} element={<PersonalInfo />} />
            <Route path={"/account-info"} element={<AccountInfo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Profile;
