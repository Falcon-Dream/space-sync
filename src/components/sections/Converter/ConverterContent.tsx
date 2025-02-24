import { FC, useEffect } from "react";

import styles from "./Converter.module.scss";
import { IPlanet } from "@shared/interfaces/IPlanets";
import { formatUTCDateTime } from "@helpers/planets/formatDateTime";
import formatTime from "@helpers/planets/formatTime";
import formatDate from "@helpers/planets/formatDate";
import calculateCurrentDate from "@helpers/planets/calculateCurrentDate";
import getMaxDaysInPlanetYear from "@helpers/planets/getMaxDaysInPlanetYear";
import getMaxHourInPlanetDay from "@helpers/planets/getMaxHourInPlanetDay";
import getMaxMinuteInPlanetHour from "@helpers/planets/getMaxMinuteInPlanetHour";
import Swal from "sweetalert2";
import convertPlanetTimeToAnotherPlanetTime from "@helpers/planets/convertPlanetTimeToAnotherPlanetTime";
import convertPlanetTimeToEarthDate from "@helpers/planets/convertPlanetTimeToEarthDate";

type Props = {
  planetData: IPlanet | null;
  planetTime: any;
  setPlanetTime: any;
  isRealTime: boolean;
  secondPlanetData: any;
  firstPlanetTimeEdit: any;
  setFirstPlanetTimeEdit: any;
  secondPlanetTimeEdit: any;
  setSecondPlanetTime: any;
  setIsCalendarOpen: any;
};

const ConverterContent: FC<Props> = ({
  planetData,
  setPlanetTime,
  isRealTime,
  secondPlanetData,
  setSecondPlanetTime,
  firstPlanetTimeEdit,
  setFirstPlanetTimeEdit,
  setIsCalendarOpen,
}) => {
  let currentTime = "";
  let currentDate = "";
  if (planetData.name === "Earth") {
    currentTime = formatUTCDateTime().time;
    currentDate = formatUTCDateTime().date;
  } else {
    currentTime = formatTime(calculateCurrentDate(planetData));
    currentDate = formatDate(calculateCurrentDate(planetData));
  }

  useEffect(() => {
    const handleUpdateDate = () => {
      if (planetData.name != "Earth") {
        setPlanetTime(formatUTCDateTime());
      } else {
        setPlanetTime(calculateCurrentDate(planetData));
      }
    };

    handleUpdateDate();

    const intervalId = setInterval(() => {
      handleUpdateDate();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [planetData, setPlanetTime]);

  const handleChooseDate = async () => {
    if (planetData.name != "Earth") {
      const { value } = await Swal.fire({
        title: "Choose the date",
        html: `
              <input type="number" id="planet-manual-year" placeholder="Year" class="swal2-input">
              <input type="number" id="planet-manual-day" placeholder="Day" class="swal2-input">
              <input type="number" id="planet-manual-hour" placeholder="Hour" class="swal2-input">
              <input type="number" id="planet-manual-minute" placeholder="Minute" class="swal2-input">
              <input type="number" id="planet-manual-second" placeholder="Second" class="swal2-input">
            `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            (document.getElementById("planet-manual-year") as HTMLInputElement)
              .value,
            (document.getElementById("planet-manual-day") as HTMLInputElement)
              .value,
            (document.getElementById("planet-manual-hour") as HTMLInputElement)
              .value,
            (
              document.getElementById(
                "planet-manual-minute"
              ) as HTMLInputElement
            ).value,
            (
              document.getElementById(
                "planet-manual-second"
              ) as HTMLInputElement
            ).value,
          ];
        },
      });

      const manualDate = {
        year: Number(value[0]),
        day: Number(value[1]),
        hour: Number(value[2]),
        minute: Number(value[3]),
        second: Number(value[4]),
      };
      await setFirstPlanetTimeEdit(manualDate);

      if (secondPlanetData.name != "Earth") {
        await setSecondPlanetTime(
          convertPlanetTimeToAnotherPlanetTime(
            planetData,
            secondPlanetData,
            manualDate
          )
        );
      } else {
        await setSecondPlanetTime(
          formatUTCDateTime(
            convertPlanetTimeToEarthDate(planetData, manualDate)
          )
        );
      }
    } else {
      setIsCalendarOpen(true);
      setFirstPlanetTimeEdit(null);
    }
  };

  return (
    <>
      <div
        className={`${styles.content} ${!isRealTime ? styles.contentEdit : ""}`}
        onClick={!isRealTime ? handleChooseDate : () => {}}
      >
        {isRealTime ? (
          <>
            <p className={styles.date}>{planetData && currentDate}</p>
            <p className={styles.time}>{planetData && currentTime}</p>
          </>
        ) : (
          <></>
        )}

        {!isRealTime && !firstPlanetTimeEdit ? (
          <p className={styles.date}>Choose the date</p>
        ) : (
          <></>
        )}

        {!isRealTime && firstPlanetTimeEdit ? (
          <>
            {planetData.name != "Earth" ? (
              <>
                <p className={styles.date}>{formatDate(firstPlanetTimeEdit)}</p>
                <p className={styles.time}>{formatTime(firstPlanetTimeEdit)}</p>
              </>
            ) : (
              <>
                <p className={styles.date}>{firstPlanetTimeEdit.date}</p>
                <p className={styles.time}>{firstPlanetTimeEdit.time}</p>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>Length of the day:</h3>
          <br />
          <p className={styles.infoDesc}>
            {getMaxHourInPlanetDay(planetData)} h{" "}
            {getMaxMinuteInPlanetHour(planetData)} m
          </p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>Length of the year:</h3>
          <br />
          <p className={styles.infoDesc}>
            {getMaxDaysInPlanetYear(planetData)} days
          </p>
        </div>
      </div>
    </>
  );
};

export default ConverterContent;
