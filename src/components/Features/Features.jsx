import styles from "../style";
import keyboard from "../../assets/keyboard.svg";
import flash from "../../assets/flash.webp";
import linear from "../../assets/linear.webp";
import input from "../../assets/input.webp";

const Features = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}
      id="feaatures"
    >
      {/* Feature Title */}
      <div className="feature-title max-w-screen-md ">
        <h1 className="text-3xl md:text-5xl  lg:text-6xl py-4 break-words max-w-md font-bold text-center text-white mx-auto">
          Unlike any tool you’ve used before
        </h1>
        <p className="text-[20px] lg:text-[26px] sm:leading-tight leading-tight py-2 text-center text-[#a6adc1] break-words max-w-2xl mb-8">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </div>
      {/* Feature Content */}
      <div className="feature-content flex flex-col max-w-screen-lg">
        {/* Content 1 */}
        <div className="feature1 grid grid-cols-1 md:grid-cols-3 gap-[1rem] rounded-[14px] p-6 my-2">
          {/* Keyboard Contain*/}
          <div
            className={`h-full md:col-span-2 bg-gradient-to-b from-primary to-slate-900 border-slate-900 border rounded-[20px] px-6 py-6`}
          >
            <div className="relative max-w-[90%] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent"></div>
              <img src={keyboard} alt="keyboard" className="mb-20" />
            </div>
            <h2 className="text-white font-bold relative text-center text-3xl">
              Built for your keyboard
            </h2>
            <p className="text-[20px] leading-tight py-2 text-center text-slate-400 break-words max-w-sm mx-auto mb-8">
              Fly through your tasks with rapid-fire keyboard shortcuts for
              everything. Literally everything.
            </p>
          </div>

          {/* Flash Speed Contain */}
          <div
            className={`flex flex-col bg-gradient-to-b from-primary to-slate-900 border-slate-900 border rounded-[20px] px-6 py-4`}
          >
            <img src={flash} alt="zap" className="w-[250px] mx-auto" />
            <h2 className="text-white font-bold relative text-center text-3xl">
              Breathtakingly fast
            </h2>
            <p className="text-[20px] leading-tight text-center text-slate-400 break-words max-w-sm mx-auto mb-8">
              Built for speed with 50ms interactions and real-time sync.
            </p>
          </div>
        </div>

        {/* Content 2 */}
        <div className="feature2 grid grid-cols-1 md:grid-cols-3 gap-[1rem] rounded-[14px] p-6 mt-2">
        {/* Linear Contain */}
        <div
            className={`flex flex-col bg-gradient-to-b from-primary to-slate-900 border-slate-900 border rounded-[20px] px-6 py-4`}
          >
            <img src={linear} alt="linear" className="w-[350px] mx-auto" />
            <h2 className="text-white relative font-bold text-center text-3xl mb-2">
              Designed for modern software teams
            </h2>
            <p className="text-[20px] leading-tight text-center text-slate-400 break-words max-w-sm mx-auto mb-8">
              Comes with built-in workflows that create focus and routine.
            </p>
          </div>
          {/* Input Contain */}
          <div
            className={`h-full md:col-span-2 bg-gradient-to-br from-primary to-slate-900 border-slate-900 border rounded-[20px] px-6 py-4`}
          >
            <h2 className="text-white font-bold relative text-center text-3xl mt-2">
              Meet your command line
            </h2>
            <p className="text-[20px] leading-tight py-2 text-center text-slate-400 break-words max-w-sm mx-auto mb-8">
              Complete any action in seconds with the global command menu.
            </p>
            <div className="relative max-w-[90%] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent"></div>
              <img src={input} alt="keyboard" className="mb-20 rounded-[10px]" />
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Features;
