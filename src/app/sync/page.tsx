'use client'

import Survey from "@components/sections/Survey/Survey";
import { useAppSelector } from "@store/hook";
import Metadata from "@components/layout/Metadata";
import { FC } from "react";
import Sync from "@components/sections/Sync/Sync";

const SyncPage: FC = () => {
    const isSurveyShow = useAppSelector((state) => state.survey.isShow)
    return (
        <>
            <Metadata seoTitle="Sync | SpaceSync" seoDescription="Sync Page" />
            <div className="next-page over">{isSurveyShow ? <Survey /> : <Sync />}</div>
        </>
    );
};

export default SyncPage;