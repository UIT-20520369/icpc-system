import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import InputFieldRegister from "../../components/InputFieldRegister";

enum RoleEnum {
  organiser = "Tổ chức cuộc thi",
  participant = "Tham gia thi đấu"
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
    <div className={"flex h-screen w-full flex-col items-center justify-center bg-[#f8f9fa] px-40 py-10"}>
      <div className={"w-full rounded-lg border border-gray-100 bg-white shadow"}>
        <h1 className="space-y-4 p-8 text-xl text-2xl font-bold leading-tight tracking-tight text-gray-900 text-[#023e8a]">
          Đăng ký tài khoản
        </h1>
        <form className={"flex w-full flex-row justify-between"} onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[50%] p-8 pt-0">
            <InputFieldRegister
              title={"Họ tên"}
              idField={"fullName"}
              placeholder={"Nguyễn Văn A"}
              type={"text"}
              className={""}
            />
            <InputFieldRegister
              title={"Số điện thoại"}
              idField={"phone"}
              placeholder={"0394563752"}
              type={"tel"}
              className={"mt-6"}
            />
            <InputFieldRegister
              title={"Email"}
              idField={"email"}
              placeholder={"nguyenvana@gmail.com"}
              type={"email"}
              className={"mt-6"}
            />
            <InputFieldRegister
              title={"Tên trường / tên tổ chức"}
              idField={"schoolName"}
              placeholder={"Trương Đại học Công nghệ Thông tin"}
              type={"text"}
              className={"mt-6"}
            />
            <button
              className={
                "mt-10 w-full rounded-lg bg-[#0466c8] p-2.5 text-white hover:bg-[#0582ca] active:translate-y-0.5"
              }
              type={"submit"}
            >
              Đăng ký
            </button>
            <div className={"mt-8"}>
              <p className={"text-sm font-light text-gray-500 text-gray-400"}>
                Đã có tài khoản?{" "}
                <Link
                  to={"/login"}
                  className="text-primary-600 text-primary-500 font-medium hover:font-bold hover:text-[#21295c] hover:underline"
                >
                  Đăng nhập
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
          <div className="w-[50%] space-y-6 p-8 pt-0">
            <InputFieldRegister
              title={"Tên đăng nhập"}
              idField={"userName"}
              placeholder={"NguyenVanA"}
              type={"text"}
              className={""}
            />
            <InputFieldRegister
              title={"Mật khẩu"}
              idField={"password"}
              placeholder={"••••••••"}
              type={"password"}
              className={""}
            />
            <InputFieldRegister
              title={"Nhập lại mật khẩu"}
              idField={"retypePassword"}
              placeholder={"••••••••"}
              type={"password"}
              className={""}
            />
            <div>
              <label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-500">
                Loại tài khoản
              </label>
              <select
                {...register("role")}
                id={"role"}
                className={
                  "block w-full rounded-lg border border-[#2196f3] bg-white p-3 text-sm text-gray-900 focus:border-[#133c55] focus:ring-[#133c55]"
                }
              >
                <option value={"organiser"}>Tổ chức cuộc thi</option>
                <option value={"participant"}>Tham gia thi đấu</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
