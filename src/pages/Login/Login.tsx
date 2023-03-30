import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InputFieldLogin from "../../components/InputFieldLogin";

type IFormInput = {
  userName: string;
  password: string;
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
    <div className={"flex h-screen w-full flex-col items-center justify-center bg-[#f8f9fa] px-96 py-10"}>
      <div className={"w-full rounded-lg border border-gray-100 bg-white shadow"}>
        <h1 className="space-y-4 p-8 text-xl text-2xl font-bold leading-tight tracking-tight text-[#023e8a]">
          Đăng nhập
        </h1>
        <form className={"flex w-full flex-row justify-between "} onSubmit={handleSubmit(onSubmit)}>
          <div className={"w-full p-8 pt-0"}>
            <InputFieldLogin
              className={""}
              title={"Tên đăng nhập"}
              idField={"userName"}
              placeholder={"NguyenVanA"}
              type={"text"}
              register={register}
            />
            <InputFieldLogin
              className={"mt-6"}
              title={"Mật khẩu"}
              idField={"password"}
              placeholder={"••••••••"}
              type={"password"}
              register={register}
            />
            <button
              className={
                "mt-10 w-full rounded-lg bg-[#0466c8] p-2.5 text-white hover:bg-[#0582ca] active:translate-y-0.5"
              }
              type={"submit"}
            >
              Đăng nhập
            </button>
            <div className={"mt-6"}>
              <p className={"text-sm font-light text-gray-500 text-gray-400"}>
                Chưa có tài khoản?{" "}
                <Link
                  to={"/register"}
                  className="text-primary-600 text-primary-500 font-medium hover:font-bold hover:text-[#21295c] hover:underline"
                >
                  Đăng ký tài khoản
                </Link>
              </p>
              <p className={"text-sm font-light text-gray-500 text-gray-400"}>
                <Link
                  className="text-primary-600 text-primary-500 font-medium hover:font-bold hover:text-[#21295c] hover:underline"
                  to={"/"}
                >
                  Quên mật khẩu?
                </Link>
              </p>
              <p className={"text-sm font-light text-gray-500 text-gray-400"}>
                Quay lại{" "}
                <Link
                  to={"/"}
                  className="text-primary-600 text-primary-500 font-medium hover:font-bold hover:text-[#21295c] hover:underline"
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
