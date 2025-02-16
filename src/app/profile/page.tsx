'use client'

import Profile from "@components/sections/Profile/Profile";
import Survey from "@components/sections/Survey/Survey";
import { useAppSelector } from "@store/hook";
import Metadata from "@components/layout/Metadata";
import { FC } from "react";

const ProfilePage: FC = () => {
    const isSurveyShow = useAppSelector((state) => state.survey.isShow)
    return (
        <>
            <Metadata seoTitle="Profile | SpaceSync" seoDescription="Profile Page" />
            <div className="next-page">{isSurveyShow ? <Survey /> : <Profile />}</div>
        </>
    );
};

export default ProfilePage;