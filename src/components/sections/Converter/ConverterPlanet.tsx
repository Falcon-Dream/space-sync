import { FC, useState } from "react";

import Image from "next/image";

import AddPlanetIcon from "@img/icons/add-planet.svg";

import styles from "./Converter.module.scss";
import { IPlanet } from "@shared/interfaces/IPlanets";
import PlanetMenu from "@components/ui/PlanetMenu/PlanetMenu";
import ConverterContent from "./ConverterContent";
import DatePickerProvider, {
  DaySlots,
  Header,
  Title,
  WeekDays,
} from "headless-react-datepicker";
import { formatDateTime } from "@helpers/planets/formatDateTime";
import convertEarthDateToPlanetTime from "@helpers/planets/convertEarthDateToPlanetTime";

type Props = {
  planetName: string;
  setPlanetName: any;
  planetData: IPlanet;
  planetTime: any;
  setPlanetTime: any;
  isRealTime: boolean;
  secondPlanetData: any;
  firstPlanetTimeEdit: any;
  setFirstPlanetTimeEdit: any;
  secondPlanetTimeEdit: any;
  setSecondPlanetTime: any;
};

const ConverterPlanet: FC<Props> = ({
  planetData,
  planetName,
  setPlanetName,
  planetTime,
  setPlanetTime,
  isRealTime,
  firstPlanetTimeEdit,
  secondPlanetTimeEdit,
  setSecondPlanetTime,
  secondPlanetData,
  setFirstPlanetTimeEdit,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    window.scrollTo(0, 0);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value;
    setSelectedTime(time);

    const [hours, minutes] = time.split(":").map(Number);
    const updatedDate = new Date(selectedDate);
    updatedDate.setHours(hours, minutes);

    setSelectedDate(updatedDate);
  };

  const handleSubmit = () => {
    setFirstPlanetTimeEdit(formatDateTime(selectedDate));

    if (secondPlanetData.name != "Earth") {
      setSecondPlanetTime(
        convertEarthDateToPlanetTime(secondPlanetData, new Date(selectedDate))
      );
    }

    setSelectedDate(null);
    setSelectedTime(null);
    setIsCalendarOpen(false);
  };

  return (
    <>
      {!isMenuOpen ? (
        <div className={styles.planet}>
          <div
            data-type="button"
            className={`${styles.button} ${planetName ? styles.active : ""}`}
            onClick={handleToggleMenu}
          >
            <div className={styles.image}>
              {planetName && planetData ? (
                <Image
                  src={planetData.image}
                  blurDataURL={planetData.image}
                  layout="fill"
                  alt={planetName}
                  placeholder="blur"
                />
              ) : (
                <AddPlanetIcon />
              )}
            </div>
          </div>
          {planetName && planetData ? (
            <>
              <h2 className={styles.title}>
                {planetData.name}{" "}
                {planetData.name == "Earth" ? <span>UTC (+0)</span> : ""}
              </h2>
              <ConverterContent
                planetData={planetData}
                planetTime={planetTime}
                setPlanetTime={setPlanetTime}
                isRealTime={isRealTime}
                secondPlanetData={secondPlanetData}
                setSecondPlanetTime={setSecondPlanetTime}
                firstPlanetTimeEdit={firstPlanetTimeEdit}
                secondPlanetTimeEdit={secondPlanetTimeEdit}
                setFirstPlanetTimeEdit={setFirstPlanetTimeEdit}
                setIsCalendarOpen={setIsCalendarOpen}
              />
              <div className={styles.overlay}></div>
              <div className={styles.datepicker}>
                <DatePickerProvider
                  onChange={(date) => setSelectedDate(date as any)}
                  config={{ showOtherDays: true }}
                  calendar={
                    localStorage.getItem("calendar").toLowerCase() as any
                  }
                >
                  <div
                    className={`datepicker-container ${
                      isCalendarOpen ? "active" : ""
                    }`}
                  >
                    <Title className="datepicker-title" />
                    <Header
                      rootClassName="datepicker-header"
                      monthSelectClassName="datepicker-dropdown"
                      yearSelectClassName="datepicker-dropdown"
                    />
                    <WeekDays className="datepicker-weekdays" />
                    <DaySlots
                      parentClassName="datepicker-days"
                      slotClassName="datepicker-day"
                      selectableClassName="selected"
                      todayClassName="today"
                      disableClassName="disabled"
                    />
                    <input
                      className="datepicker-time"
                      type="time"
                      name="appointment-time"
                      value={selectedTime}
                      onChange={handleTimeChange}
                    />
                    <button
                      type="button"
                      className={`${styles.calendarButton} themeButton`}
                      onClick={handleSubmit}
                    >
                      OK
                    </button>
                  </div>
                </DatePickerProvider>
              </div>
            </>
          ) : (
            <h3 className={styles.title}>Choose planet</h3>
          )}
        </div>
      ) : (
        <>
          <div className={styles.menu}>
            <PlanetMenu
              state={planetName}
              setState={setPlanetName}
              onSubmit={handleToggleMenu}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ConverterPlanet;
