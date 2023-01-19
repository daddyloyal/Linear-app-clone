import styles from "../style";

const Features = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}
      id="feaatures"
    >
      {/* Feature Title */}
      <div className="feature-title max-w-screen-md">
        <h1 className="text-6xl py-4 break-words max-w-md font-bold text-center text-white mx-auto">
          Unlike any tool you’ve used before
        </h1>
        <p className="text-[26px] leading-tight py-2 text-center text-slate-400 break-words max-w-2xl mb-8">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </div>
      {/* Feature Content */}
      <div className="feature-content">
        {/* Content 1 */}
        <div className="feature1"></div>

        {/* Content 2 */}
        <div className="feature2"></div>
      </div>
    </section>
  );
};

export default Features;
