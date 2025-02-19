"use client";

import Planets from "@components/sections/Planets/Planets";
import Survey from "@components/sections/Survey/Survey";
import { useAppSelector } from "@store/hook";
import Metadata from "@components/layout/Metadata";
import { FC } from "react";

const PlanetsPage: FC = () => {
  const isSurveyShow = useAppSelector((state) => state.survey.isShow);
  return (
    <>
      <Metadata seoTitle="Planets | SpaceSync" seoDescription="Planets Page" />
      <div className="next-page">{isSurveyShow ? <Survey /> : <Planets />}</div>
    </>
  );
};

export default PlanetsPage;
