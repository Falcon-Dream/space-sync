"use client";

import Team from "@components/sections/Team/Team";
import Survey from "@components/sections/Survey/Survey";
import { useAppSelector } from "@store/hook";
import Metadata from "@components/layout/Metadata";
import { FC } from "react";

const TeamPage: FC = () => {
  const isSurveyShow = useAppSelector((state) => state.survey.isShow);
  return (
    <>
      <Metadata seoTitle="Team | SpaceSync" seoDescription="Team Page" />
      <div className="next-page">{isSurveyShow ? <Survey /> : <Team />}</div>
    </>
  );
};

export default TeamPage;
