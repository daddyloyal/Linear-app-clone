import styles from "./style";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import { navLinks } from "../constants/static";
import { navButton } from "../constants/static";

const Header = () => {
  return (
    <header className={`${styles.paddingX} ${styles.flexCenter} pb-1`}>
      <nav
        className={`${styles.boxWidth} pt-2.5 w-9/12 flex justify-between items-center navbar border-b border-b-slate-600`}
      >
        <div className="text-white text-xl brand flex items-center mx-10">
          <img src={Logo} alt="logo" className="mr-1" /> Linear
        </div>

        <ul className="list-none sm:flex hidden justify-start items-center flex-1 mx-20">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[13px] text-white mr-4`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navButton.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[13px] text-white mr-4`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
