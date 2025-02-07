import { FC } from "react";

import styles from "./Survey.module.scss";
import SurveyRole from "./SurveyRole";

const Survey: FC = () => {
  return (
    <section className={styles.wrapper}>
      <SurveyRole />
    </section>
  );
};

export default Survey;
