"use client";

import Home from "@components/sections/Home/Home";
import Survey from "@components/sections/Survey/Survey";
import { useAppSelector } from "@store/hook";
import { FC } from "react";

const HomePage: FC = () => {
  const isSurveyShow = useAppSelector((state) => state.survey.isShow);

  return (
    <>
      <div className="next-page">{isSurveyShow ? <Survey /> : <Home />}</div>
    </>
  );
};

export default HomePage;
