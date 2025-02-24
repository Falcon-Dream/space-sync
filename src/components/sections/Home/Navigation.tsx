import { FC } from "react";

import PlanetIcon from "@img/home/planet-icon.svg";
import ProfileIcon from "@img/home/profile-icon.svg";
import SyncIcon from "@img/home/sync-icon.svg";
import MeetingIcon from "@img/home/meeting-icon.svg";

import styles from "./Home.module.scss";
import Link from "next/link";

const Navigation: FC = () => {
  return (
    <ul className={styles.list}>
      <Link href="/planets">
        <li className={`${styles.item} themeButton`}>
          <p className={styles.text}>Planets</p>
          <span className={styles.icon}>
            <PlanetIcon />
          </span>
        </li>
      </Link>
      <Link href="/profile">
        <li className={`${styles.item} themeButton`}>
          <p className={styles.text}>Profile</p>
          <span className={styles.icon}>
            <ProfileIcon />
          </span>
        </li>
      </Link>
      <Link href="/sync">
        <li className={`${styles.item} themeButton`}>
          <p className={styles.text}>Sync</p>
          <span className={styles.icon}>
            <SyncIcon />
          </span>
        </li>
      </Link>
      <Link href="/converter">
        <li className={`${styles.item} themeButton`}>
          <p className={styles.text}>Converter</p>
          <span className={styles.icon}>
            <MeetingIcon />
          </span>
        </li>
      </Link>
    </ul>
  );
};

export default Navigation;
