import styles from "../style";
import { issueItem } from "../../constants/static";
import issues from "../../assets/issues.webp";
import board from "../../assets/board.webp";
import list from "../../assets/list.webp";

const Tracking = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}
      id="tracking"
    >
      {/* Title */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col w-full min-h-[300px] xl:px-0 sm:px-16 px-6 h-14 shadow-lg shadow-primary rounded`}
      >
        <h1 className="text-transparent text-4xl md:text-6xl lg:text-8xl font-bold max-w-screen-sm mx-auto text-center break-words bg-gradient-to-br from-white to-gray-300 bg-clip-text">
          Issue tracking you’ll enjoy using
        </h1>
      </div>
      {/* Image */}
      <div className="mx-auto">
        <img
          src={issues}
          className="w-[790px] mx-auto rounded-[15px] border-slate-500 border"
          alt="issues"
        />
        <h1 className="mx-auto text-white lg:text-4xl md:text-3xl text-xl leading-snug break-words max-w-screen-sm text-center my-16 font-bold">
          Create tasks in seconds, discuss issues in context, and breeze through
          your work in views tailored to you and your team.
        </h1>
      </div>

      {/* Issues Section */}
      <section
        id="issues-box"
        className=" mx-auto border-t border-t-[#1d1f32] py-10 px-10 "
      >
        {/* Issue Grid */}
        <div
          className={`${styles.flexCenter} grid grid-cols-2 lg:grid-cols-3 gap-4 sm:mb-20 mb-6 w-fit h-fit mx-auto py-4`}
        >
          {issueItem.map((item) => (
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
      <section className="board-list-content lg:flex sm:block gap-6 max-w-screen-lg h-fit">
        {/* Board */}
        <div className="board-list lg:w-2/3 sm:w-3/4 mx-auto mt-3">
        <div
            className={`bg-gradient-to-b from-primary to-slate-900 border-slate-900 border rounded-[20px] px-10 py-10`}
          >
            <div className="flex flex-col text-start">
              <h2 className="text-white font-bold relative text-start text-3xl w-fit">
                List and board
              </h2>
              <p className="text-[20px] leading-tight py-2 text-start text-slate-400 break-words max-w-sm mb-8 w-fit">
                Switch between list and board layout to view work from any angle.
              </p>
            </div>
            <div className="relative max-w-[90%] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent"></div>
              <img src={board} alt="board" className="mb-20" />
            </div>
          </div>
        </div>
        {/* Todo List */}
        <div className="board-list lg:w-2/3 sm:w-3/4 mx-auto mt-3">
          <div
              className={`bg-gradient-to-b from-primary to-slate-900 border-slate-900 border rounded-[20px] px-10 py-10`}
            >
              <div className="flex flex-col text-start">
                <h2 className="text-white font-bold relative text-start text-3xl w-fit">
                  Make it yours
                </h2>
                <p className="text-[20px] leading-tight py-2 text-start text-slate-400 break-words max-w-sm mb-8 w-fit">
                  Quickly apply filters and operators to refine your issue lists and create custom views.
                </p>
              </div>
              <div className="relative max-w-[90%] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent"></div>
                <img src={list} alt="list" className="mb-20 h-[235px]" />
              </div>
            </div>
        </div>
      </section>
    </section>
  );
};

export default Tracking;
