import { useEffect, RefObject } from "react";

const useClickOutside = (
    ref: RefObject<HTMLElement>,
    isVisible: boolean,
    onOutsideClick: () => void
) => {
    useEffect(() => {
        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isVisible]);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            onOutsideClick();
        }
    };
};

export default useClickOutside;