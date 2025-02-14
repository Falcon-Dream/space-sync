"use client";

import { FC, useEffect, useState } from "react";
import { MouseEvent } from "react";

import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";
import BigLogo from "@components/ui/BigLogo/BigLogo";
import Link from "next/link";
import anchorClick from "@helpers/anchorClick";

const Header: FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const mainPages = ["/profile", '/planets', '/meetings', '/sync'];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsSticky(window.scrollY > 0 ? true : false);
    });
  }, []);

  const toggleMenu = () => {
    // document.body.classList.toggle('lock-scroll');
    setIsMenuOpen(!isMenuOpen);
  }

  const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.screen.width < 731) toggleMenu();
  }

  return (
    <header
      className={`${styles.wrapper} ${isSticky ? styles.sticky : ""}`}
      id="header"
    >
      <div className="container">
        {!mainPages.includes(pathname) ? <BigLogo /> : (
          <div className={styles.navigation}>
            <BigLogo className={styles.logo} callback={anchorHandleClick} />
            <div className={`${styles.menuWrapper} ${isMenuOpen ? styles.menuWrapperActive : ''}`}>
              <button type="button" className={`${styles.menuButton} ${isMenuOpen ? styles.closeMenu : ''}`} onClick={toggleMenu}></button>
              <ul className={`${styles.menu} ${isMenuOpen ? styles.menuActive : ''}`}>
                <li className={styles.item}>
                  <Link href="/" className={`${styles.link} ${pathname == '/' ? styles.active : ''}`}>
                    Home
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/meetings" className={`${styles.link} ${pathname == '/meetings' ? styles.active : ''}`} onClick={anchorHandleClick}>
                    Meetings
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/sync" className={`${styles.link} ${pathname == '/sync' ? styles.active : ''}`} onClick={anchorHandleClick}>
                    Sync
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/planets" className={`${styles.link} ${pathname == '/planets' ? styles.active : ''}`} onClick={anchorHandleClick}>
                    Planets
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/profile" className={`${styles.link} ${pathname == '/profile' ? styles.active : ''}`} onClick={anchorHandleClick}>
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
