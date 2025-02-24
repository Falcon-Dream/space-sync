"use client";

import { FC, useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";
import BigLogo from "@components/ui/BigLogo/BigLogo";
import Link from "next/link";

const Header: FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const mainPages = [
    "/profile",
    "/planets",
    "/meetings",
    "/sync",
    "/converter",
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsSticky(window.scrollY > 0 ? true : false);
    });

    console.log(typeof pathname.split("/").slice(1)[1]);
  }, [pathname]);

  const toggleMenu = () => {
    // document.body.classList.toggle('lock-scroll');
    setIsMenuOpen(!isMenuOpen);
  };

  const anchorHandleClick = () => {
    if (window.screen.width < 731) toggleMenu();
  };

  return (
    <header
      className={`${styles.wrapper} ${isSticky ? styles.sticky : ""}`}
      id="header"
      style={{ zIndex: 100, position: "relative" }}
    >
      <div className="container">
        {mainPages.includes(pathname) ||
        typeof pathname.split("/").slice(1)[1] == "string" ? (
          <div className={styles.navigation}>
            <BigLogo className={styles.logo} callback={anchorHandleClick} />
            <div
              className={`${styles.menuWrapper} ${
                isMenuOpen ? styles.menuWrapperActive : ""
              }`}
            >
              <button
                type="button"
                className={`${styles.menuButton} ${
                  isMenuOpen ? styles.closeMenu : ""
                }`}
                onClick={toggleMenu}
              ></button>
              <ul
                className={`${styles.menu} ${
                  isMenuOpen ? styles.menuActive : ""
                }`}
              >
                <li className={styles.item}>
                  <Link
                    href="/"
                    className={`${styles.link} ${
                      pathname == "/" ? styles.active : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href="/converter"
                    className={`${styles.link} ${
                      pathname == "/converter" ? styles.active : ""
                    }`}
                    onClick={anchorHandleClick}
                  >
                    Converter
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href="/sync"
                    className={`${styles.link} ${
                      pathname == "/sync" ? styles.active : ""
                    }`}
                    onClick={anchorHandleClick}
                  >
                    Sync
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href="/planets"
                    className={`${styles.link} ${
                      pathname == "/planets" ? styles.active : ""
                    } ${
                      typeof pathname.split("/").slice(1)[1] == "string"
                        ? styles.active
                        : ""
                    }`}
                    onClick={anchorHandleClick}
                  >
                    Planets
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href="/profile"
                    className={`${styles.link} ${
                      pathname == "/profile" ? styles.active : ""
                    }`}
                    onClick={anchorHandleClick}
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <BigLogo />
        )}
      </div>
    </header>
  );
};

export default Header;
