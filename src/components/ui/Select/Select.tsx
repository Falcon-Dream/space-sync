import { FC, useRef, useState } from "react";

import SelectArrow from "@img/select/arrow.svg";

import styles from "./Select.module.scss";
import useClickOutside from "@hooks/useClickOutside";

type Props = {
  list: string[];
  value: any;
  setValue: any;
  placeholder?: string;
  className?: string;
};

const Select: FC<Props> = ({
  list,
  value,
  setValue,
  placeholder = "Choose",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item: string) => {
    toggleSelect();
    setValue(item);
  };

  useClickOutside(selectRef, isOpen, () => {
    setIsOpen(false);
  });

  return (
    <div className={`${styles.wrapper} ${className}`} ref={selectRef}>
      <div
        className={`${styles.button} ${isOpen ? styles.buttonActive : ""}`}
        onClick={toggleSelect}
      >
        <div className={`${styles.row} ${isOpen ? styles.rowActive : ""}`}>
          <p className={`${styles.value} ${isOpen ? styles.valueActive : ""}`}>
            {!value ? placeholder : value}
          </p>
          <div
            className={`${styles.arrow} ${isOpen ? styles.arrowActive : ""}`}
          >
            <SelectArrow />
          </div>
        </div>
      </div>
      <ul className={`${styles.list} ${isOpen ? styles.listActive : ""}`}>
        {list
          .filter((item) => item !== value)
          .map((item, index) => (
            <li
              className={styles.item}
              onClick={() => selectItem(item)}
              key={index}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Select;
