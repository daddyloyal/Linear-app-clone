import styles from "./style";
import Button from "./Button";
import { useState } from "react";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { navLinks } from "../constants/static";
import { navButton } from "../constants/static";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className={`${styles.paddingX} ${styles.flexCenter} pb-3 `}>
      <nav
        className={`${styles.boxWidth} py-4 w-full max-w-[90vw] md:max-w-7xl flex justify-between items-center navbar border-b border-b-[#1d1f32]`}
      >
        <div className="text-white text-xl gap-2 brand flex items-center mx-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="25"
            height="25"
            viewBox="0 0 100 100"
          >
            <path
              fill="currentColor"
              d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"
            />
          </svg>
          Linear
        </div>

        <ul
          className={`list-none sm:flex hidden justify-start items-center flex-1 mx-20`}
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-linear font-normal cursor-pointer text-[16px] text-white mr-4`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li
            className={`font-linear font-normal cursor-pointer text-[16px] text-white mr-4`}
          >
            <a
              className="bg-transparent text-white font-bold py-2 px-4 rounded-full"
              href={`#signup`}
            >Log in</a>
          </li>
          <li
            className={`font-linear font-normal cursor-pointer text-[16px] text-white mr-4`}
          >
            <a
              className="bg-gradient-to-tr from-purple-900 to-indigo-500 text-white font-bold py-2 px-4 rounded-full"
              href={`#signup`}
            >Sign up</a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? Close : Menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1 mx-4">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-linear font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
