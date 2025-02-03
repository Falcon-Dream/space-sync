import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./BigLogo.module.scss";

const BigLogo: FC = () => {
  return (
    <Link href="/" className={styles.wrapper}>
      <Image
        src="/img/header/logo.png"
        blurDataURL="/img/header/logo.png"
        layout="fill"
        alt="logo"
        placeholder="blur"
      />
    </Link>
  );
};

export default BigLogo;
