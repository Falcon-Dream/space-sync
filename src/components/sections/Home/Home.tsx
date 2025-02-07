import { FC } from "react";

import styles from "./Home.module.scss";
import Navigation from "./Navigation";
import Image from "next/image";

const Home: FC = () => {
  return (
    <section className={styles.wrapper} data-aos="fade-up">
      <div className="container">
        <Navigation />
        <div className={styles.image}>
          <Image
            src="/img/home/rocket.png"
            blurDataURL="/img/home/rocket.png"
            layout="fill"
            alt="Rocket"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
