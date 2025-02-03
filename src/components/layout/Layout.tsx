"use client";
import { FC, ReactNode, useEffect } from "react";
import Loader from "@components/ui/Loader/Loader";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useAppDispatch } from "@store/hook";
import Aos from "aos";
import "aos/dist/aos.css";
import { Exo_2 } from "next/font/google";
import { hideLoader } from "@store/slices/loaderSlice";
import useOnlineStatus from "@hooks/useOnlineStatus";
import useHasWindow from "@hooks/useHasWindows";
import LostConnection from "@components/sections/LostConnection/LostConnection";
import Background from "@components/ui/Background/Background";

type Props = {
  children: ReactNode;
};

const Exo2 = Exo_2({
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
    <div className={`next-layout ${Exo2.className}`}>
      <Loader />

      {isOnline && hasWindow && (
        <>
          <Background smoke={true} fade={true} />
          <div style={{ flex: "1 0 auto" }}>
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
        </>
      )}

      {!isOnline && hasWindow && (
        <>
          <Background smoke={true} fade={true} />
          <LostConnection />
        </>
      )}
    </div>
  );
};

export default Layout;
