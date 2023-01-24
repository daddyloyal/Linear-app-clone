import styles from "../style";
import cycles from "../../assets/cycles.png";
import { momentum } from "../../constants/static";
const Momentum = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}
    id="momentum">
      {/* Title */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col w-full min-h-[300px] xl:px-0 sm:px-16 px-6 h-14 shadow-lg shadow-primary rounded`}
      >
        <h1 className="text-transparent text-4xl md:text-6xl lg:text-8xl font-bold max-w-screen-sm mx-auto text-center break-words bg-gradient-to-br from-white to-gray-300 bg-clip-text">
            Build momentum with Cycles
        </h1>
      </div>
      {/* Image */}
      <div className="mx-auto">
        <img
          src={cycles}
          className="w-[850px] mx-auto rounded-[15px] border-gray-800 border"
          alt="issues"
        />
        <h1 className="mx-auto text-white lg:text-4xl md:text-3xl text-xl leading-snug break-words max-w-screen-sm text-center my-16 font-bold">
            Cycles focus your team on what work should happen next. A healthy routine to maintain velocity and make meaningful progress.
        </h1>
      </div>
      {/* Momentum Section */}
      <section
        id="issues-box"
        className=" mx-auto border-t border-t-[#1d1f32] py-10 px-10 "
      >
        {/* Issue Grid */}
        <div
          className={`${styles.flexCenter} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mb-20 mb-6 w-fit h-fit mx-auto py-4`}
        >
          {momentum.map((item) => (
            <div key={item.id} className={"mx-auto lg:block"}>
              <div className="mx-auto">
                <div className="issue-diplay flex py-4 lg:max-w-[300px] max-w-screen-sm px-2">
                  
                  <p className=" text-white text-start break-words text-lg font-semibold">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mr-1 inline-block align-top h-4 mt-1"
                  />
                    {item.title}.{" "}
                    <span className="text-md font-normal text-slate-300">
                      {" "}
                      {item.content}.
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Momentum