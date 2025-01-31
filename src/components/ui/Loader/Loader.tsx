"use client";
import { FC, useState, useEffect, useRef } from "react";
import styles from "./Loader.module.scss";
import { useAppSelector } from "@store/hook";
import { $ } from "@helpers/classMerge";

const Loader: FC = () => {
    const preloader_wrapper = useRef<HTMLDivElement>(null);
    const isLoading = useAppSelector((state) => state.loader.isLoading);

    const [visible, setVisible] = useState<boolean>(true);

    const recalculateLineSizes = () => {
        if (!preloader_wrapper.current) return;
        const paths = Array.from(
            preloader_wrapper.current.querySelectorAll("path")
        );
        paths.forEach((path) => {
            const length = path.getTotalLength();
            path.style.strokeDashoffset = `${length}px`;
            path.style.strokeDasharray = `${length}px`;
        });
    };

    useEffect(() => {
        window.addEventListener("resize", recalculateLineSizes);
        return () => window.removeEventListener("resize", recalculateLineSizes);
    });

    useEffect(() => {
        if (!preloader_wrapper.current) return;
        document.body.className = isLoading ? "lock-scroll" : "";

        if (isLoading) setVisible(true);
    }, [isLoading]);

    useEffect(() => recalculateLineSizes());

    return (
        <div
            className={$(
                styles.preloader,
                isLoading ? styles.active : "",
                visible ? styles.visible : ""
            )}
            ref={preloader_wrapper}
        >
            {/* <div className={$(styles.copyright, russo_one.className)}>
        <span>Developed by</span> AlphaDigital
      </div> */}
            <svg
                width="675"
                height="133.5"
                viewBox="0 0 675 133.5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    id="svgGroup"
                    strokeLinecap="round"
                    fillRule="evenodd"
                    fontSize="9pt"
                    stroke="#000"
                    strokeWidth="0.25mm"
                    fill="none"
                >
                    <path
                        d="M 91.5 1.5 L 91.5 106.5 L 63 106.5 L 27 43.5 L 27 106.5 L 0 106.5 L 0 1.5 L 28.5 1.5 L 64.5 64.5 L 64.5 1.5 L 91.5 1.5 Z"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M 181.5 86.25 L 181.5 105 Q 152.55 108 129 108 A 27.41 27.41 0 0 1 121.784 107.099 A 20.168 20.168 0 0 1 112.65 101.85 Q 106.5 95.7 106.5 85.5 L 106.5 49.5 A 32.067 32.067 0 0 1 107.253 42.342 Q 108.691 36.059 112.875 31.875 A 21.015 21.015 0 0 1 123.044 26.323 Q 126.35 25.526 130.248 25.501 A 39.419 39.419 0 0 1 130.5 25.5 L 160.5 25.5 A 32.067 32.067 0 0 1 167.658 26.253 Q 173.941 27.691 178.125 31.875 A 21.015 21.015 0 0 1 183.677 42.044 Q 184.474 45.35 184.499 49.248 A 39.419 39.419 0 0 1 184.5 49.5 L 184.5 77.25 L 132.75 77.25 L 132.75 83.25 A 5.544 5.544 0 0 0 133.091 85.224 A 4.983 4.983 0 0 0 134.25 87 Q 135.75 88.5 138 88.5 Q 149.37 88.5 168.828 87.181 A 1190.996 1190.996 0 0 0 181.5 86.25 Z M 152.25 44.25 L 138.75 44.25 A 8.638 8.638 0 0 0 136.376 44.547 Q 133.713 45.31 133.006 48.028 A 8.84 8.84 0 0 0 132.75 50.25 L 132.75 58.5 L 158.25 58.5 L 158.25 50.25 A 8.638 8.638 0 0 0 157.953 47.876 Q 157.19 45.213 154.472 44.506 A 8.84 8.84 0 0 0 152.25 44.25 Z"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M 230.25 51 L 243 27 L 272.25 27 L 248.25 66.75 L 273 106.5 L 243.75 106.5 L 230.25 82.5 L 216.75 106.5 L 187.5 106.5 L 212.25 66.75 L 188.25 27 L 217.5 27 L 230.25 51 Z"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M 334.5 87 L 334.5 106.5 Q 319.95 108 306 108 A 27.41 27.41 0 0 1 298.784 107.099 A 20.168 20.168 0 0 1 289.65 101.85 Q 283.5 95.7 283.5 85.5 L 283.5 47.25 L 274.5 47.25 L 274.5 27 L 283.5 27 L 286.5 9 L 309.75 9 L 309.75 27 L 328.5 27 L 328.5 47.25 L 309.75 47.25 L 309.75 81.75 A 5.544 5.544 0 0 0 310.091 83.724 A 4.983 4.983 0 0 0 311.25 85.5 Q 312.75 87 315 87 L 334.5 87 Z"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M 472.5 84.75 L 472.5 105 Q 450.026 107.016 432.698 107.677 A 413.471 413.471 0 0 1 417 108 Q 402.3 108 395.4 101.1 A 21.024 21.024 0 0 1 390.565 93.248 Q 388.5 87.541 388.5 79.5 L 388.5 31.5 Q 388.5 15.75 395.625 8.625 A 21.225 21.225 0 0 1 403.172 3.881 Q 409.395 1.5 418.5 1.5 L 472.5 1.5 L 472.5 22.5 L 424.5 22.5 Q 417.358 22.5 415.884 28.167 A 13.26 13.26 0 0 0 415.5 31.5 L 415.5 79.5 Q 415.5 82.95 417.525 84.975 A 6.833 6.833 0 0 0 421.93 86.968 A 9.185 9.185 0 0 0 422.7 87 A 304.085 304.085 0 0 0 426 86.981 A 394.941 394.941 0 0 0 429.6 86.925 A 445.789 445.789 0 0 0 435.394 86.77 A 500.236 500.236 0 0 0 437.4 86.7 Q 441.45 86.55 445.575 86.4 Q 449.265 86.266 454.875 85.892 A 601.229 601.229 0 0 0 456.225 85.8 Q 462.592 85.361 472.031 84.779 A 3894.641 3894.641 0 0 1 472.5 84.75 Z"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M 478.5 30 L 516 30 L 516 106.5 L 489.75 106.5 L 489.75 50.25 L 478.5 50.25 L 478.5 30 Z M 489.75 21 L 489.75 0 L 516 0 L 516 21 L 489.75 21 Z"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M 586.5 87 L 586.5 106.5 Q 571.95 108 558 108 A 27.41 27.41 0 0 1 550.784 107.099 A 20.168 20.168 0 0 1 541.65 101.85 Q 535.5 95.7 535.5 85.5 L 535.5 47.25 L 526.5 47.25 L 526.5 27 L 535.5 27 L 538.5 9 L 561.75 9 L 561.75 27 L 580.5 27 L 580.5 47.25 L 561.75 47.25 L 561.75 81.75 A 5.544 5.544 0 0 0 562.091 83.724 A 4.983 4.983 0 0 0 563.25 85.5 Q 564.75 87 567 87 L 586.5 87 Z"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M 595.5 132 L 595.5 112.5 L 609 112.5 A 15.887 15.887 0 0 0 611.565 112.309 Q 615.125 111.725 616.425 109.35 Q 617.866 106.719 616.429 102.309 A 23.177 23.177 0 0 0 615.75 100.5 L 585 27 L 612.75 27 L 631.5 78 L 647.25 27 L 675 27 L 645 109.5 A 59.897 59.897 0 0 1 641.544 117.271 Q 639.383 121.283 636.792 124.322 A 30.413 30.413 0 0 1 633.75 127.425 A 23.264 23.264 0 0 1 624.117 132.419 Q 619.999 133.5 615 133.5 A 107.636 107.636 0 0 1 608.531 133.289 Q 605.625 133.113 602.367 132.791 A 226.765 226.765 0 0 1 595.5 132 Z"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Loader;