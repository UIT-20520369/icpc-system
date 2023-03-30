import React from "react";
import Dashboard from "./pages/Dashboard";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contests from "./pages/Contests";
import Teams from "./pages/Teams";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Dashboard/>}/>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/contests"} element={<Contests />} />
      <Route path={"/teams"} element={<Teams />} />
      <Route path={"/profile/*"} element={<Profile />} />
    </Routes>
  );
}

export default App;
