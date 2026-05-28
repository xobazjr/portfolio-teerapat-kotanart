import { useState } from "react";

import getAverageColor from "../core/getAverageColor";
import getLuminance from "../core/getLuminance";

const useTooltip = () => {

    const [tooltip, setTooltip] = useState(null);

    const [pos, setPos] = useState({
        x: 0,
        y: 0
    });

    const showTooltip = (
        e,
        imgRef = null,
        text = ""
    ) => {

        try {

            let isDark = true;

            if (imgRef?.current) {

                const avg = getAverageColor(
                    imgRef.current
                );

                const lum = getLuminance(avg);

                isDark = lum < 0.5;

            }

            setTooltip({
                text,
                bg: isDark ? "#ffffff" : "#000000",
                color: isDark ? "#000000" : "#ffffff",
            });

            setPos({
                x: e.clientX,
                y: e.clientY
            });

        } catch {

            setTooltip({
                text,
                bg: "#ffffff",
                color: "#000000",
            });

        }

    };

    const moveTooltip = (e) => {

        setPos({
            x: e.clientX,
            y: e.clientY
        });

    };

    const hideTooltip = () => {
        setTooltip(null);
    };

    return {
        tooltip,
        pos,
        showTooltip,
        moveTooltip,
        hideTooltip
    };

};

export default useTooltip;