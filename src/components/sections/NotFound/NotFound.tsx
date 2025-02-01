import { FC } from "react";

import styles from "./NotFound.module.scss";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <div className={styles.wrapper} data-aos="fade-down">
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>This page does not exists!</p>
      <Link href="/">
        <button className={`${styles.button} themeButton`}>Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
