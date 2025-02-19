"use client";

import Planet from "@components/sections/Planet/Planet";
import Survey from "@components/sections/Survey/Survey";
import { useAppSelector } from "@store/hook";
import Metadata from "@components/layout/Metadata";
import { FC, use, useEffect } from "react";

type ParamsType = { planet: string };
type Props = { params: Promise<ParamsType> };

const PlanetPage: FC<Props> = ({ params }) => {
  const isSurveyShow = useAppSelector((state) => state.survey.isShow);

  const planet: string = (use(params) as ParamsType).planet;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Metadata
        seoTitle={`${planet} | SpaceSync`}
        seoDescription={`${planet} Page`}
      />
      <div className="next-page">
        {isSurveyShow ? <Survey /> : <Planet planet={planet} />}
      </div>
    </>
  );
};

export default PlanetPage;
