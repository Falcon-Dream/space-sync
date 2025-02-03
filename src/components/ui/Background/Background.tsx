import { FC, useEffect, useState } from "react";

import styles from "./Background.module.scss";

type Props = {
  stars?: boolean;
  smoke?: boolean;
  fade?: boolean;
};

const Background: FC<Props> = ({
  stars = true,
  smoke = false,
  fade = false,
}) => {
  const [bodyHeight, setBodyHeight] = useState<number>(
    document.body.scrollHeight
  );

  useEffect(() => {
    const updateHeight = () => {
      setBodyHeight(document.body.scrollHeight);
    };

    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight); // Update height on resize
    window.addEventListener("scroll", updateHeight); // Update height on scroll

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {stars && (
        <span
          className={`${styles.stars} ${fade ? styles.fade : ""}`}
          style={{ height: `${bodyHeight}px` }}
        />
      )}
      {smoke && (
        <span className={styles.smoke} style={{ height: `${bodyHeight}px` }} />
      )}
    </div>
  );
};

export default Background;
