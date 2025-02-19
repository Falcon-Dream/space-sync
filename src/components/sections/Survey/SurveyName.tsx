"use client";

import { FC, useState } from "react";

import styles from "./SurveyName.module.scss";
import { hideSurvey, setStep } from "@store/slices/surveySlice";
import { useAppDispatch } from "@store/hook";

const SurveyName: FC = () => {
  const [name, setName] = useState<string>("");

  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    setName(value);
  };

  const handleNextStep = () => {
    localStorage.setItem("name", name);

    dispatch(setStep(""));
    window.scrollTo(0, 0);
    dispatch(hideSurvey());
  };

  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <form className="container">
        <h1 className={styles.title}>
          What is your <span className="themeColor">name?</span>
        </h1>
        <input
          type="text"
          placeholder="name"
          required={true}
          className={styles.nameInput}
          onChange={(e: any) => onChange((e.target as HTMLInputElement).value)}
        />
        <button
          type="submit"
          className={`themeButton ${styles.submitButton}`}
          disabled={name == ""}
          onClick={handleNextStep}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SurveyName;
