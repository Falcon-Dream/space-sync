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
    dispatch(hideSurvey());
  };

  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <div className="container">
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
          type="button"
          className={`themeButton ${styles.submitButton}`}
          disabled={name == ""}
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SurveyName;
