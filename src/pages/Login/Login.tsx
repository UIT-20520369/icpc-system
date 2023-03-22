import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type IFormInput = {
  userName: String;
  password: String;
};

const Login = () => {
  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className={"flex h-screen w-full flex-col items-center justify-center px-96 py-10"}>
      <div className={"w-full rounded-lg shadow dark:border dark:border-gray-700 dark:bg-gray-800"}>
        <h1 className="space-y-4 p-8 text-xl text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Đăng nhập
        </h1>
        <form className={"flex w-full flex-row justify-between "} onSubmit={handleSubmit(onSubmit)}>
          <div className={"w-full p-8 pt-0"}>
            <div className={""}>
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
            <div className={"mt-6"}>
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
            <button
              className={
                "mt-10 w-full rounded-lg bg-[#0466c8] p-2.5 hover:bg-[#0582ca] active:translate-y-0.5 dark:text-white"
              }
              type={"submit"}
            >
              Đăng nhập
            </button>
            <div className={"mt-6"}>
              <p className={"text-sm font-light text-gray-500 dark:text-gray-400"}>
                Chưa có tài khoản?{" "}
                <Link
                  to={"/register"}
                  className="text-primary-600 dark:text-primary-500 font-medium hover:text-white hover:underline"
                >
                  Đăng ký tài khoản
                </Link>
              </p>
              <p className={"text-sm font-light text-gray-500 dark:text-gray-400"}>
                <Link
                  className="text-primary-600 dark:text-primary-500 font-medium hover:text-white hover:underline"
                  to={"/"}
                >
                  Quên mật khẩu?
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
        </form>
      </div>
    </div>
  );
};

export default Login;
