import styles from "../style";
import { exponential } from "../../constants/static";
import Button from "../Button/Button";
import plus from "../../assets/plus.webp";
import appIcon from "../../assets/appIcon.png";
import figma from "../../assets/figma.svg";
import gitlab from "../../assets/gitlab.svg";
import front from "../../assets/front.svg";
import github from "../../assets/github.svg";

const Workflow = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}
    id="workflow">
        {/* Title */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col w-full min-h-[300px] xl:px-0 sm:px-16 px-6 h-14 shadow-lg shadow-primary rounded`}
      >
        <h1 className="text-transparent text-4xl md:text-6xl lg:text-8xl font-bold max-w-screen-sm mx-auto text-center break-words bg-gradient-to-br from-white to-gray-300 bg-clip-text">
            Linear workflows. Exponential results.
        </h1>
      </div>

      <div className="mx-auto">
        <div className="images w-[200px] p-8 border border-slate-500 rounded-full bg-primary mx-auto gap-3">
            {/* <img src={figma} alt="" className="w-[20px]" />
            <img src={gitlab} alt="" className="w-[1000px]" />
            <img src={front} alt="" className="" /> */}
            <img
            src={plus}
            className="w-[200px] mx-auto rounded-full "
            alt="issues"
            />
            {/* <img src={front} alt="" className="" />
            <img src={github} alt="" className="" />
            <img src={figma} alt="" className="w-[20px]" /> */}
        </div>
        <h1 className="mx-auto text-white lg:text-4xl md:text-3xl text-xl leading-snug break-words max-w-screen-sm text-center my-10 font-bold">
            From customer support integrations to powerful Git automations, Linear streamlines the entire product development process.
        </h1>
        <button
          className={`flex flex-row items-center  mb-2 mx-auto bg-slate-800 text-white p-1 overflow-hidden font-bold text-sm rounded-full`}
        >
          <p className="py-[1px] px-4">Discover integrations</p>
          <div className=" py-[4px] px-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              width={13}
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
      </div>

      {/* Workflow Section */}
      <section
        id="workflow-box"
        className=" mx-auto border-t border-t-[#1d1f32] py-10 px-10 my-10"
      >
        {/* Workflow Grid */}
        <div
          className={`${styles.flexCenter} grid grid-cols-2 lg:grid-cols-3 gap-4 sm:mb-20 mb-20 w-fit h-fit mx-auto py-4`}
        >
          {exponential.map((item) => (
            <div key={item.id} className={"mx-auto lg:block"}>
              <div className="mx-auto">
                <div className="issue-diplay flex py-4 lg:max-w-[300px] max-w-screen-sm px-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mr-2 inline-block align-top h-4 mt-1"
                  />
                  <p className=" text-white text-start break-words text-lg font-semibold">
                    {item.title}.{" "}
                    <span className="text-md font-normal text-slate-300">
                      {" "}
                      {item.content}.
                    </span> {" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advert */}

        {/* App Icon  */}
        

        {/* Advert Title */}
        <section id="hero-text" className="mx-auto max-w-fit text-center mt-40">
          <img src={appIcon} alt="App Icon" className="w-32 mx-auto" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-transparent py-4 break-words max-w-2xl font-bold text-center bg-gradient-to-br from-white to-gray-300 bg-clip-text">
            Built for the future. Available today.
          </h1>
          
          <button className="">
            <Button title={"Sign up for free"} />
          </button>
        </section>
      </section>

    </section>
  )
}

export default Workflow;