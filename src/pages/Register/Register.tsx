import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

enum RoleEnum {
  host = "Người tổ chức",
  student = "Người tham gia"
}

type IFormInput = {
  fullName: String;
  phone: String;
  email: String;
  address: String;
  userName: String;
  password: String;
  retypePassword: String;
  schoolName: String;
  role: RoleEnum;
};

const Register = () => {
  useEffect(() => {
    document.title = "Đăng ký";
  });

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className={"flex h-screen w-full flex-col items-center justify-center px-40 py-10"}>
      <div className={"w-full rounded-lg shadow dark:border dark:border-gray-700 dark:bg-gray-800"}>
        <h1 className="space-y-4 p-8 text-xl text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Đăng ký tài khoản
        </h1>
        <form className={"flex w-full flex-row justify-between "} onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[50%] p-8 pt-0">
            <div className={""}>
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Họ tên
              </label>
              <input
                type="text"
                {...register("fullName")}
                id="fullName"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div className={"mt-6"}>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Số điện thoại
              </label>
              <input
                type="tel"
                {...register("phone")}
                id="phone"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="0394563752"
              />
            </div>
            <div className={"mt-6"}>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="nguyenvana@gmail.com"
              />
            </div>
            <div className={"mt-6"}>
              <label htmlFor="schoolName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Tên trường / tên tổ chức
              </label>
              <input
                type="text"
                {...register("schoolName")}
                id="schoolName"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="Trương Đại học Công nghệ Thông tin"
              />
            </div>
            <button
              className={
                "mt-10 w-full rounded-lg bg-[#0466c8] p-2.5 hover:bg-[#0582ca] active:translate-y-0.5 dark:text-white"
              }
              type={"submit"}
            >
              Đăng ký
            </button>
            <div className={"mt-8"}>
              <p className={"text-sm font-light text-gray-500 dark:text-gray-400"}>
                Đã có tài khoản?{" "}
                <Link
                  to={"/login"}
                  className="text-primary-600 dark:text-primary-500 font-medium hover:text-white hover:underline"
                >
                  Đăng nhập
                </Link>
              </p>
              <p className={"text-sm font-light text-gray-500 dark:text-gray-400"}>
                Quay lại{" "}
                <Link
                  to={"/"}
                  className="text-primary-600 dark:text-primary-500 font-medium hover:text-white hover:underline"
                >
                  trang chủ
                </Link>
              </p>
            </div>
          </div>
          <div className="w-[50%] space-y-6 p-8 pt-0">
            <div>
              <label htmlFor="userName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Tên đăng nhập
              </label>
              <input
                type="text"
                {...register("userName")}
                id="userName"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="NguyenVanA"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Mật khẩu
              </label>
              <input
                type="password"
                {...register("password")}
                id="password"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label htmlFor="retypePassword" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                {...register("retypePassword")}
                id="retypePassword"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Nhập lại mật khẩu
              </label>
              <select
                {...register("role")}
                id={"role"}
                className={"block w-full rounded-lg bg-gray-700 p-3 text-sm dark:text-white"}
              >
                <option value={"host"}>Người tổ chức</option>
                <option value={"student"}>Người tham gia</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
