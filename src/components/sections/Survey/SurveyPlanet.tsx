'use client'

import { FC, useState } from "react";

import styles from "./SurveyPlanet.module.scss";
import PlanetMenu from "@components/ui/PlanetMenu/PlanetMenu";
import { useAppDispatch } from "@store/hook";
import { hideSurvey, setStep } from "@store/slices/surveySlice";

const SurveyPlanet: FC = () => {
  const [planet, setPlanet] = useState<string>(null);

  const dispatch = useAppDispatch();

  const handleNextStep = () => {
    localStorage.setItem("planet", planet);

    if (!localStorage.getItem("name")) {
      dispatch(setStep("name"));
      return;
    } else {
      dispatch(hideSurvey());
    }
  };

  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <PlanetMenu
        state={planet}
        setState={setPlanet}
        onSubmit={handleNextStep}
      />
    </div>
  );
};

export default SurveyPlanet;
