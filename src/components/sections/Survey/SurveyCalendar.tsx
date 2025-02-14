'use client'

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import styles from "./SurveyCalendar.module.scss";
import Select from "@components/ui/Select/Select";
import { useAppDispatch } from "@store/hook";
import { hideSurvey, setStep } from "@store/slices/surveySlice";

const SurveyCalendar: FC = () => {
  const [role, setRole] = useState<string>(null);
  const [calendar, setCalendar] = useState<string | null>(null);
  const calendarList = ["Gregorian", "Jewish"];

  const dispatch = useAppDispatch();

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);

  const handleNextStep = () => {
    localStorage.setItem("calendar", calendar);

    if (!localStorage.getItem("planet")) {
      dispatch(setStep("planet"));
      return;
    } else {
      dispatch(hideSurvey());
    }
  };

  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <div className="container">
        <div className={styles.row}>
          <h1 className={styles.title}>
            Choose your <span className="themeColor">calendar</span>
          </h1>
          <div className={styles.column}>
            <div className={styles.subcolumn}>
              <h2 className={styles.subtitle}>Calendar</h2>
              <Select
                list={calendarList}
                value={calendar}
                setValue={setCalendar}
                className={styles.select}
              />
            </div>
            <button
              type="button"
              className={`${styles.button} themeButton`}
              disabled={calendar == null}
              onClick={handleNextStep}
            >
              →
            </button>
          </div>
        </div>
        <div className={styles.images}>
          {role == "astronaut" && (
            <div className={styles.astronautImage}>
              <Image
                src="/img/survey/astronaut.png"
                blurDataURL="/img/survey/astronaut.png"
                layout="fill"
                alt="Astronaut"
                placeholder="blur"
              />
            </div>
          )}
          {role == "scientist" && (
            <div className={styles.scientistImage}>
              <Image
                src="/img/survey/scientist.png"
                blurDataURL="/img/survey/scientist.png"
                layout="fill"
                alt="Scientist"
                placeholder="blur"
              />
            </div>
          )}
          <div className={styles.rocketImage}>
            <Image
              src="/img/home/rocket.png"
              blurDataURL="/img/home/rocket.png"
              layout="fill"
              alt="Rocket"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCalendar;
