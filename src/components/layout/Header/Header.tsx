"use client";

import { FC, useEffect, useState } from "react";

import styles from "./Header.module.scss";

const Header: FC = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false);

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
                Header
            </div>
        </header>
    );
};

export default Header;