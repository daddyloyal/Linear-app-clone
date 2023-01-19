import styles from "../style";
import issues from "../../assets/issues.webp";

const Tracking = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}
      id="tracking"
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col w-full min-h-[300px] xl:px-0 sm:px-16 px-6 h-14 bg-gradient-to-b from-primary  via-slate-900 to-primary shadow-lg shadow-primary rounded`}
      >
        <h1 className="text-transparent text-5xl md:text-6xl lg:text-8xl font-bold max-w-screen-sm mx-auto text-center break-words bg-gradient-to-br from-white to-gray-700 bg-clip-text">Issue tracking you’ll enjoy using</h1>
      </div>
      <div className="mx-auto">
        <img src={issues} className="w-[790px] mx-auto rounded-[15px] border-slate-500 border" alt="issues" />
        <h1 className="mx-auto text-white text-4xl break-words max-w-screen-sm text-center my-10 font-bold">
            Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.
        </h1>
      </div>
    </section>
  );
};

export default Tracking;
