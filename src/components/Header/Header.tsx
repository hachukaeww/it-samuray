import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}></div>
    </header>
  );
};

export default Header;
