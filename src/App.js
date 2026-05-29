import "./App.css";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Cursor from "./core/Cursor";
import Analytics from "./core/Analytics";

import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function AppWrapper() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

function App() {
    const lenisRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
        });
        lenisRef.current = lenis;
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, {
                immediate: true,
            });
        }
    }, [location.pathname]);

    return (
        <>
            <Analytics />
            <Cursor />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:slug" element={<ProjectsPage />} />
            </Routes>
        </>
    );
}

export default AppWrapper;