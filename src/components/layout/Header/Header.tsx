"use client";

import { FC, useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";
import BigLogo from "@components/ui/BigLogo/BigLogo";

const Header: FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const pathname = usePathname();
  const mainPages = ["/lll"];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsSticky(window.scrollY > 0 ? true : false);
    });
  }, []);

  return (
    <header
      className={`${styles.wrapper} ${isSticky ? styles.sticky : ""}`}
      id="header"
    >
      <div className="container">
        {!mainPages.includes(pathname) ? <BigLogo /> : <h1>Header Other</h1>}
      </div>
    </header>
  );
};

export default Header;
