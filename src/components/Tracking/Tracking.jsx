import styles from "../style";
import { issueItem } from "../../constants/static";
import issues from "../../assets/issues.webp";

const Tracking = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}
      id="tracking"
    >
      {/* Title */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col w-full min-h-[300px] xl:px-0 sm:px-16 px-6 h-14 bg-gradient-to-b from-primary  via-slate-900 to-primary shadow-lg shadow-primary rounded`}
      >
        <h1 className="text-transparent text-4xl md:text-6xl lg:text-8xl font-bold max-w-screen-sm mx-auto text-center break-words bg-gradient-to-br from-white to-gray-700 bg-clip-text">Issue tracking you’ll enjoy using</h1>
      </div>
      {/* Image */}
      <div className="mx-auto">
        <img src={issues} className="w-[790px] mx-auto rounded-[15px] border-slate-500 border" alt="issues" />
        <h1 className="mx-auto text-white lg:text-4xl md:text-3xl text-xl leading-snug break-words max-w-screen-sm text-center my-10 font-bold">
            Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.
        </h1>
      </div>

      {/* Issues Section */}
      <section id="issues-box" className=" mx-auto border-t border-t-[#1d1f32] py-10 px-10 ">
        {/* Issue Grid */}
        <div className={`${styles.flexCenter} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:mb-20 mb-6 w-[95vw] md:w-[90vw] lg:w-[80vw] mx-auto`}>
        {issueItem.map((item) => (
          <div
            key={item.id}
            className={"mx-auto " + item.display_small + " lg:block"}
          >
            <div className="mx-auto mt-10">
              <div className="issue-diplay flex flex-wrap py-4 min-w-[400px] px-2 ">
              <img src={item.icon} alt={item.title} className="mr-2" />
              <p className=" text-white text-start break-words">{item.title}. {item.content}. </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
    </section>
  );
};

export default Tracking;
