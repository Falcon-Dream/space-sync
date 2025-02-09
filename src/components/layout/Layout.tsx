"use client";
import { FC, ReactNode, useEffect } from "react";
import Loader from "@components/ui/Loader/Loader";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useAppDispatch, useAppSelector } from "@store/hook";
import Aos from "aos";
import "aos/dist/aos.css";
import { Exo_2 } from "next/font/google";
import { hideLoader } from "@store/slices/loaderSlice";
import useOnlineStatus from "@hooks/useOnlineStatus";
import useHasWindow from "@hooks/useHasWindows";
import LostConnection from "@components/sections/LostConnection/LostConnection";
import Background from "@components/ui/Background/Background";
import { hideSurvey, setStep } from "@store/slices/surveySlice";

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
  const isOverlayShow = useAppSelector((state) => state.overlay.isShow);

  const isOnline = useOnlineStatus();
  const hasWindow = useHasWindow();

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('role') && localStorage.getItem('calendar')) {
        dispatch(hideSurvey())
      }

      if (!localStorage.getItem('role')) {
        dispatch(setStep('role'))
      } else if (!localStorage.getItem('calendar')) {
        dispatch(setStep('calendar'))
      }

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
          <div className={`overlay ${isOverlayShow ? 'overlayActive' : ''}`}></div>
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
          <div className={`overlay ${isOverlayShow ? 'overlayActive' : ''}`}></div>
        </>
      )}
    </div>
  );
};

export default Layout;
