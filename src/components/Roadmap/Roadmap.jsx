import styles from "../style";
import { roadmapping } from "../../constants/static";
import roadmap from "../../assets/roadmap.png";
import cardRoadMaps from "../../assets/card-roadmaps.png";
import cardUpdates from "../../assets/card-updates.png";

const Roadmap = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}
      id="tracking"
    >
      {/* Title */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col w-full min-h-[300px] xl:px-0 sm:px-16 px-6 h-14 bg-gradient-to-b from-primary  via-teal-900 to-primary shadow-lg shadow-primary rounded`}
      >
        <h1 className="text-transparent text-4xl md:text-6xl lg:text-8xl font-bold max-w-screen-sm mx-auto text-center break-words bg-gradient-to-br from-white to-gray-700 bg-clip-text">
            Set direction with Roadmaps
        </h1>
      </div>
      {/* Image */}
      <div className="mx-auto">
        <img
          src={roadmap}
          className="w-[790px] mx-auto rounded-[15px] border-slate-500 border"
          alt="issues"
        />
        <h1 className="mx-auto text-white lg:text-4xl md:text-3xl text-xl leading-snug break-words max-w-screen-sm text-center my-10 font-bold">
            Plan visually, collaborate in cross-team projects, and make better decisions with progress insights and project updates.
        </h1>
      </div>

      {/* Roadmap Section */}
      <section
        id="roadmap-box"
        className=" mx-auto border-t border-t-[#1d1f32] py-10 px-10 "
      >
        {/* Roadmap Grid */}
        <div
          className={`${styles.flexCenter} grid grid-cols-2 lg:grid-cols-3 gap-4 sm:mb-20 mb-6 w-fit h-fit mx-auto py-4`}
        >
          {roadmapping.map((item) => (
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
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Board and list Section */}
      <section className="board-list-content lg:flex sm:block gap-6 max-w-screen-lg">
        {/* Board */}
        <div className="board-list lg:w-2/3 sm:w-3/4 mx-auto my-3">
        <div
            className={`h-3/4 bg-gradient-to-b from-primary to-slate-900 border-slate-900 border rounded-[20px] px-10 py-10`}
          >
            <div className="flex flex-col text-start">
              <h2 className="text-white font-bold relative text-start text-3xl w-fit">
                Project updates
              </h2>
              <p className="text-[20px] leading-tight py-2 text-start text-slate-400 break-words max-w-sm mb-8 w-fit">
                Keep everyone up-to-date on the health and progress of projects.
              </p>
            </div>
            <div className="relative max-w-[90%] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent"></div>
              <img src={cardRoadMaps} alt="board" className="mb-20" />
            </div>
          </div>
        </div>
        {/* Todo List */}
        <div className="board-list lg:w-2/3 sm:w-3/4 mx-auto my-3">
          <div
              className={`h-3/4 bg-gradient-to-b from-primary to-slate-900 border-slate-900 border rounded-[20px] px-10 py-10`}
            >
              <div className="flex flex-col text-start">
                <h2 className="text-white font-bold relative text-start text-3xl w-fit">
                Focus on the big picture
                </h2>
                <p className="text-[20px] leading-tight py-2 text-start text-slate-400 break-words max-w-sm mb-8 w-fit">
                    Explore every company project in one view to easily identify what needs attention.
                </p>
              </div>
              <div className="relative max-w-[90%] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent"></div>
                <img src={cardUpdates} alt="list" className="mb-20" />
              </div>
            </div>
        </div>
      </section>
    </section>
  );
};

export default Roadmap;
