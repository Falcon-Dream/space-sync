import { FC } from "react";

import styles from "./Planet.module.scss";

type Props = {
  planet: string;
};

const Planet: FC<Props> = ({ planet }) => {
  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <div className="container">
        <h1 className={styles.title}>{planet}</h1>
      </div>
    </div>
  );
};

export default Planet;
