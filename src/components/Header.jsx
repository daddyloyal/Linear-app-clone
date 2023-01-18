import styles from "./style"
import { useState } from "react";
// import {logo, close, menu } from "../assets";


const Header = () => {
  return (
    <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <nav className={ `${styles.boxWidth} ${styles.marginY} text-white text-xl` }>
          Linear
        </nav>
      </header>
  )
}

export default Header