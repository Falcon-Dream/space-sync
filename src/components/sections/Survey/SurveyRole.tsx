"use client";

import { FC, useState, useEffect, useRef } from "react";
import { useAppDispatch } from "@store/hook";

import Image from "next/image";

import styles from "./SurveyRole.module.scss";
import { hideSurvey, setStep } from "@store/slices/surveySlice";

type Role = "astronaut" | "scientist";

const SurveyRole: FC = () => {
  const [role, setRole] = useState<Role | null>(null);
  const [isRoleSelected, setIsRoleSelected] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const updateStorage = (selectedRole: Role) => {
    if (selectedRole == null) {
      localStorage.removeItem("role");
    } else {
      localStorage.setItem("role", selectedRole);
    }
  };

  const handleRoleClick = (selectedRole: Role) => {
    if (!isRoleSelected) {
      setRole(selectedRole);
      updateStorage(selectedRole);
      setIsRoleSelected(true);
    } else {
      setRole(null);
      updateStorage(selectedRole);
      setIsRoleSelected(false);

      if (window.screen.width <= 700) {
        if (selectedRole != null) {
          setRole(selectedRole);
          updateStorage(selectedRole);
          setIsRoleSelected(true);
        }
      }
    }
  };

  const handleMouseOver = (selectedRole: Role) => {
    if (!isRoleSelected) {
      setRole(selectedRole);
    }
  };

  const handleNextStep = () => {
    if (!localStorage.getItem("calendar")) {
      dispatch(setStep("calendar"));
      return;
    } else {
      dispatch(hideSurvey());
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setRole(null);
        setIsRoleSelected(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.role} ref={containerRef}>
      <span
        className={`${styles.overlay} ${
          role != null ? styles.overlayActive : ""
        }`}
      ></span>
      <div
        className={`${styles.astronaut} ${
          role == "astronaut" ? styles.active : ""
        }`}
        onMouseOver={() => handleMouseOver("astronaut")}
        onMouseOut={() => !isRoleSelected && setRole(null)}
        onClick={() => handleRoleClick("astronaut")}
      >
        <h3 className={`${styles.subtitle} ${role != null ? styles.hide : ""}`}>
          Astronaut
        </h3>
        <button type="button" className={styles.astronautImage}>
          <Image
            src="/img/survey/astronaut.png"
            blurDataURL="/img/survey/astronaut.png"
            layout="fill"
            alt="Astronaut"
            placeholder="blur"
          />
        </button>
      </div>
      <div className={styles.roleCenter}>
        <h1 className={`${styles.title} ${role != null ? styles.hide : ""}`}>
          Who are <br /> <span className="themeColor">you?</span>
        </h1>
        <h1 className={`${styles.title} ${role == null ? styles.hide : ""}`}>
          <span className="themeColor">{role}</span>
        </h1>
        <button
          className={`${styles.astronautButton} themeButton ${
            role == "astronaut" ? styles.activeButton : ""
          }`}
          onClick={() => handleRoleClick("astronaut")}
        >
          Astronaut
        </button>
        <button
          className={`${styles.scientistButton} themeButton ${
            role == "scientist" ? styles.activeButton : ""
          }`}
          onClick={() => handleRoleClick("scientist")}
        >
          Scientist
        </button>
        <button
          className={`${styles.button} themeButton ${
            isRoleSelected ? styles.index : ""
          }`}
          disabled={!isRoleSelected}
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
      <div
        className={`${styles.scientist} ${
          role == "scientist" ? styles.active : ""
        }`}
        onMouseOver={() => handleMouseOver("scientist")}
        onMouseOut={() => !isRoleSelected && setRole(null)}
        onClick={() => handleRoleClick("scientist")}
      >
        <h3 className={`${styles.subtitle} ${role != null ? styles.hide : ""}`}>
          Scientist
        </h3>
        <button type="button" className={styles.scientistImage}>
          <Image
            src="/img/survey/scientist.png"
            blurDataURL="/img/survey/scientist.png"
            layout="fill"
            alt="Scientist"
            placeholder="blur"
          />
        </button>
      </div>
    </div>
  );
};

export default SurveyRole;
