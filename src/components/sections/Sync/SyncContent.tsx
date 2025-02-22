import { FC, useEffect, useState } from "react";

import styles from "./Sync.module.scss";
import { IPlanet } from "@shared/interfaces/IPlanets";
import emptyPlanetTime from "@helpers/emptyPlanetTime";
import { formatUTCDateTime } from "@helpers/planets/formatDateTime";
import calculateCurrentDate from "@helpers/planets/calculateCurrentDate";
import formatTime from "@helpers/planets/formatTime";
import formatDate from "@helpers/planets/formatDate";
import SyncTimeZone from "./SyncTimeZone";
import getMaxMinuteInPlanetHour from "@helpers/planets/getMaxMinuteInPlanetHour";
import getMaxHourInPlanetDay from "@helpers/planets/getMaxHourInPlanetDay";
import getMaxDaysInPlanetYear from "@helpers/planets/getMaxDaysInPlanetYear";

type Props = {
  planetData: IPlanet;
};

const SyncContent: FC<Props> = ({ planetData }) => {
  const [planetTime, setPlanetTime] = useState<any>(emptyPlanetTime);
  const [utcTime, setUtcTime] = useState<any>(formatUTCDateTime());
  const [currentOffset, setCurrentOffset] = useState<number>(0);

  const handleOffsetChange = (offset: number) => {
    setCurrentOffset(offset);
  };

  const planetName = planetData.name;

  let currentTime = "";
  let currentDate = "";

  if (planetName === "Earth") {
    currentTime = formatUTCDateTime().time;
    currentDate = formatUTCDateTime().date;
  } else {
    currentTime = formatTime(calculateCurrentDate(planetData));
    currentDate = formatDate(calculateCurrentDate(planetData));
  }

  useEffect(() => {
    const handleUpdateDate = () => {
      if (planetName == "Earth") {
        const adjustedTime = new Date(Date.now() + currentOffset * 3600 * 1000);
        const newUtcTime = formatUTCDateTime(adjustedTime);
        setUtcTime({
          date: newUtcTime.date,
          time: newUtcTime.time,
        });
      } else {
        setPlanetTime(calculateCurrentDate(planetData));
      }
    };

    handleUpdateDate();

    const intervalId = setInterval(() => {
      handleUpdateDate();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentOffset, planetName, planetData]);

  return (
    <>
      <div className={styles.content} data-planet={planetTime}>
        {planetName == "Earth" ? (
          <>
            <p className={styles.date}>{utcTime?.date}</p>
            <p className={styles.time}>{utcTime?.time}</p>
          </>
        ) : (
          <>
            <p className={styles.date}>{planetData && currentDate}</p>
            <p className={styles.time}>{planetData && currentTime}</p>
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
        )}
      </div>
      {planetName && planetName === "Earth" ? (
        <SyncTimeZone onOffsetChange={handleOffsetChange} />
      ) : (
        ""
      )}
    </>
  );
};

export default SyncContent;
