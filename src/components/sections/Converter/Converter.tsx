import { FC, useEffect, useState } from "react";

import ConverterPlanet from "./ConverterPlanet";

import styles from "./Converter.module.scss";
import Switch from "react-switch";
import { IPlanet } from "@shared/interfaces/IPlanets";
import findPlanetByName from "@helpers/findPlanetByName";
import emptyPlanetTime from "@helpers/emptyPlanetTime";

const Converter: FC = () => {
  const [isRealTime, setIsRealTime] = useState<boolean>(true);

  const [leftPlanetName, setLeftPlanetName] = useState<string>(null);
  const [rightPlanetName, setRightPlanetName] = useState<string>(null);

  const [leftPlanetData, setLeftPlanetData] = useState<IPlanet>(null);
  const [rightPlanetData, setRightPlanetData] = useState<IPlanet>(null);

  const [leftPlanetTime, setLeftPlanetTime] = useState<any>(emptyPlanetTime);
  const [rightPlanetTime, setRightPlanetTime] = useState<any>(emptyPlanetTime);

  const [leftPlanetTimeEdit, setLeftPlanetTimeEdit] = useState<any>(null);
  const [rightPlanetTimeEdit, setRightPlanetTimeEdit] = useState<any>(null);

  const resetDates = () => {
    setIsRealTime(true);
    setLeftPlanetTimeEdit(null);
    setRightPlanetTimeEdit(null);
  };

  useEffect(() => {
    if (leftPlanetName) {
      setLeftPlanetData(findPlanetByName(leftPlanetName));
      resetDates();
    }
  }, [leftPlanetName]);

  useEffect(() => {
    if (rightPlanetName) {
      setRightPlanetData(findPlanetByName(rightPlanetName));
      resetDates();
    }
  }, [rightPlanetName]);

  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <div className="container over">
        <div className={styles.row}>
          <ConverterPlanet
            planetData={leftPlanetData}
            planetName={leftPlanetName}
            setPlanetName={setLeftPlanetName}
            planetTime={leftPlanetTime}
            setPlanetTime={setLeftPlanetTime}
            isRealTime={isRealTime}
            firstPlanetTimeEdit={leftPlanetTimeEdit}
            secondPlanetTimeEdit={rightPlanetTimeEdit}
            setFirstPlanetTimeEdit={setLeftPlanetTimeEdit}
            setSecondPlanetTime={setRightPlanetTimeEdit}
            secondPlanetData={rightPlanetData}
          />
          <div
            className={`${styles.switchWrapper} ${
              leftPlanetData && rightPlanetData ? styles.showSwitch : ""
            }`}
          >
            <Switch
              checked={isRealTime}
              onChange={setIsRealTime}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={63}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={58}
              width={145}
              className={`${styles.switch}`}
              id="material-switch"
            />
            <p className={styles.switchLabel}>
              {isRealTime ? "Real Time" : "Manual Mode"}
            </p>
          </div>
          <ConverterPlanet
            planetData={rightPlanetData}
            planetName={rightPlanetName}
            setPlanetName={setRightPlanetName}
            planetTime={rightPlanetTime}
            setPlanetTime={setRightPlanetTime}
            isRealTime={isRealTime}
            firstPlanetTimeEdit={rightPlanetTimeEdit}
            secondPlanetTimeEdit={leftPlanetTimeEdit}
            setFirstPlanetTimeEdit={setRightPlanetTimeEdit}
            setSecondPlanetTime={setLeftPlanetTimeEdit}
            secondPlanetData={leftPlanetData}
          />
        </div>
      </div>
    </div>
  );
};

export default Converter;
