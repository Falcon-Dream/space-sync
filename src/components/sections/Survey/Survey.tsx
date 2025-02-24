import { FC, useEffect } from "react";

import styles from "./SurveyRole.module.scss";
import SurveyRole from "./SurveyRole";
import { useAppSelector } from "@store/hook";
import SurveyCalendar from "./SurveyCalendar";
import SurveyPlanet from "./SurveyPlanet";
import SurveyName from "./SurveyName";

const Survey: FC = () => {
  const currentStep = useAppSelector((state) => state.survey.step);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.wrapper} data-f={currentStep}>
      {currentStep == "role" && <SurveyRole />}
      {currentStep == "calendar" && <SurveyCalendar />}
      {currentStep == "planet" && <SurveyPlanet />}
      {currentStep == "name" && <SurveyName />}
    </section>
  );
};

export default Survey;
