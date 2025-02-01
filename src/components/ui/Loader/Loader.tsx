import { FC, useEffect } from "react";
import { useAppSelector } from "@store/hook";

import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

import styles from "./Loader.module.scss";

const Preloader: FC = () => {
  const isLoading = useAppSelector((state) => state.loader.isLoading);

  useEffect(() => {
    document.body.className = isLoading ? "lock-scroll" : "";
  }, [isLoading]);

  return (
    <div className={`${styles.wrapper} ${isLoading ? styles.active : ""}`}>
      <span className={styles.stars}></span>
      <span className={`${styles.logo} ${righteous.className}`}>
        <h1 className={styles.text}>Sp</h1>
        <span className={styles.icon}></span>
        <h1 className={styles.text}>ceSync</h1>
      </span>
    </div>
  );
};

export default Preloader;
