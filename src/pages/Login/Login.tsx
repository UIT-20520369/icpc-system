import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  return (
    <div>
      Đăng nhập
    </div>
  );
};

export default Login;
