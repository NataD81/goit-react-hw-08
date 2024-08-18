import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";

const Layout = () => (
  <div className={s.layout}>
    <AppBar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
