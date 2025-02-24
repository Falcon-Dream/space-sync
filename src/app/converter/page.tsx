"use client";

import Converter from "@components/sections/Converter/Converter";
import Survey from "@components/sections/Survey/Survey";
import { useAppSelector } from "@store/hook";
import Metadata from "@components/layout/Metadata";
import { FC } from "react";

const TeamPage: FC = () => {
  const isSurveyShow = useAppSelector((state) => state.survey.isShow);
  return (
    <>
      <Metadata
        seoTitle="Converter | SpaceSync"
        seoDescription="Converter Page"
      />
      <div className="next-page over">
        {isSurveyShow ? <Survey /> : <Converter />}
      </div>
    </>
  );
};

export default TeamPage;
