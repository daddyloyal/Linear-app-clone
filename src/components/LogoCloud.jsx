import { logoCloud } from "../constants/static";
import styles from "./style";

const LogoCloud = () => {
  return (
    <section
      id="logo-cloud"
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {logoCloud.map((logo) => (
        <div key={logo.id} className="grid grid-cols-2 gap-4 mx-auto">
          <div>
            {logo.img}
          <img src={logo.img} alt="company" />
          
          </div>
        </div>
      ))}
    </section>
  );
};

export default LogoCloud;
