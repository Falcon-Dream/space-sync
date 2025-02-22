import { FC, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import timeZones from "@data/timezones.json";

import LeftArrow from "@img/icons/left-arrow.svg";
import RightArrow from "@img/icons/right-arrow.svg";

import styles from "./Sync.module.scss";

const initialIndex = timeZones.findIndex((zone) => zone.city === "Chicago");

type Props = {
  onOffsetChange: any;
};

const SyncTimeZone: FC<Props> = ({ onOffsetChange }) => {
  const [currentOffset, setCurrentOffset] = useState(
    timeZones[initialIndex].offset
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    const newOffset = timeZones[swiper.activeIndex].offset;
    setCurrentOffset(newOffset);
    setActiveIndex(swiper.activeIndex);
    onOffsetChange(newOffset);
  };

  return (
    <div className={styles.timezone}>
      <p className={styles.utcNumber}>
        UTC ({currentOffset >= 0 ? `+${currentOffset}` : currentOffset})
      </p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        loop={false}
        initialSlide={initialIndex}
        onSlideChange={(swiper) => {
          handleSlideChange(swiper);
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={styles.list}
        grabCursor={true}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {timeZones.map((zone, index) => (
          <SwiperSlide
            key={zone.offset}
            className={`${styles.item} ${
              index === activeIndex ? styles.activeSlide : ""
            }`}
          >
            <p className={styles.utcTitle}>{zone.city}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigationButtons}>
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className={styles.previous}
        >
          <LeftArrow />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className={styles.next}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default SyncTimeZone;
