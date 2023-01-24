import Button from "../Button/Button";
import styles from "../style";
import heroImg from "../../assets/hero@4x.png";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mt-2`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <button
          className={`flex flex-row items-center  mb-2 mx-auto bg-slate-800 text-white p-1 overflow-hidden font-bold text-sm rounded-full`}
        >
          <p className=" px-4">Linear 2022 Release - Built for scale</p>
          <div className="bg-slate-700 rounded-full py-[2px] px-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              width={15}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </button>

        <section id="hero-text" className="mx-auto max-w-screen-md text-center mb-5">
          <h1 className="text-5xl md:text-6xl  lg:text-7xl text-transparent py-4 break-words max-w-2xl font-bold text-center bg-gradient-to-br from-white to-gray-300 bg-clip-text">
            Linear is a better way to build products
          </h1>
          <p className="text-xl md:text-2xl py-2 text-center text-[#b4bcd0] break-words max-w-2xl mb-8">
            Meet the new standard for modern software development. Streamline
            issues, sprints, and product roadmaps.
          </p>
          <button className="">
            <Button title={"Get started"} />
          </button>
        </section>
        <section id="hero-img" className="mx-auto max-w-screen-lg mt-0">
          <img src={heroImg} className="my-28 w-auto rounded-[15px] border-slate-800 border" alt="hero-img" />
        </section>
      </div>
    </section>
  );
};

export default Hero;
