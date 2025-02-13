import { FC } from "react";

import styles from "./SurveyRole.module.scss";
import SurveyRole from "./SurveyRole";
import { useAppSelector } from "@store/hook";
import SurveyCalendar from "./SurveyCalendar";
import SurveyPlanet from "./SurveyPlanet";

const Survey: FC = () => {
  const currentStep = useAppSelector((state) => state.survey.step);

  return (
    <section className={styles.wrapper} data-f={currentStep}>
      {currentStep == 'role' && <SurveyRole />}
      {currentStep == 'calendar' && <SurveyCalendar />}
      {currentStep == 'planet' && <SurveyPlanet />}
    </section>
  );
};

export default Survey;
