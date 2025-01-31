"use client";
import { FC, ReactNode, useEffect } from "react";
import Loader from "@components/ui/Loader/Loader";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useAppDispatch } from "@store/hook";
import Aos from "aos";
import "aos/dist/aos.css";
import { hideLoader } from "@store/slices/loaderSlice";
import { Montserrat } from "next/font/google";
import useOnlineStatus from "@hooks/useOnlineStatus";
import useHasWindow from "@hooks/useHasWindows";
import LostConnection from "@components/sections/LostConnection/LostConnection";

type Props = {
    children: ReactNode;
};

const montserrat = Montserrat({
    subsets: ["cyrillic"],
    display: "swap",
    weight: ["400", "500", "600"],
});

const Layout: FC<Props> = ({ children }) => {
    const dispatch = useAppDispatch();

    const isOnline = useOnlineStatus();
    const hasWindow = useHasWindow();

    useEffect(() => {
        setTimeout(() => {
            dispatch(hideLoader());
            Aos.init({ duration: 500 });
            window.scrollTo(0, 0);
        }, 2000);
    }, [dispatch]);

    return (
        <div className={`next-layout ${montserrat.className}`}>
            <Loader />

            {isOnline && hasWindow && (
                <>
                    <div style={{ flex: "1 0 auto" }}>
                        <Header />
                        <main>{children}</main>
                    </div>
                    <Footer />
                </>
            )}

            {!isOnline && hasWindow && <LostConnection />}
        </div>
    );
};

export default Layout;