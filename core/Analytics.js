import { useEffect } from "react";
import { useRouter } from "next/router";

const Analytics = () => {
    const router = useRouter();

    useEffect(() => {
        window.gtag?.("config", "G-PNJHKLJQQH", { page_path: router.asPath });
    }, [router.asPath]);

    return null;
};

export default Analytics;
