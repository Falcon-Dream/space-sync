import { FC } from "react";

import styles from "./LostConnection.module.scss";

const LostConnection: FC = () => {
  return (
    <section className={styles.wrapper} data-aos="fade-down">
      <div className="container">
        <h1 className={styles.title}>No Connection!</h1>
        <p className={styles.description}>
          Oops, it seems you are not connected to the internet :(
        </p>
      </div>
    </section>
  );
};

export default LostConnection;
