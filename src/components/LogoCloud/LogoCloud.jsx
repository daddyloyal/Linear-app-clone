import { logoCloud } from "../../constants/static";
import styles from "../style";

const LogoCloud = () => {
  return (
    <section id="logo-cloud">
      <div className="logo-title mx-auto block text-white text-[26px] text-center">
        <p className="py-[2px] px-4 text-slate-400">
          Powering the world’s best product teams.
        </p>
        <p className="py-[2px] px-4 font-normal">
          From next-gen startups to established enterprises.
        </p>
      </div>
      <div className={`${styles.flexCenter} grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:mb-20 mb-6 w-[95vw] md:w-[90vw] lg:w-[80vw] mx-auto`}>
        {logoCloud.map((logo) => (
          <div
            key={logo.id}
            className={"mx-auto " + logo.display_small + " lg:block"}
          >
            <div>
              <p className="invisible">{logo.img}</p>
              <img src={logo.img} alt={logo.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCloud;
