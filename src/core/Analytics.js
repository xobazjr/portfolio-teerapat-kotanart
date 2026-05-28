import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        window.gtag("config", "G-PNJHKLJQQH", {
            page_path: location.pathname,
        });
    }, [location]);

    return null;
};

export default Analytics;