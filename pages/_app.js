import "../styles/globals.css";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Cursor from "../core/Cursor";
import PageLoader from "../core/PageLoader";

export default function App({ Component, pageProps, router }) {
  const lenisRef = useRef(null);
  const latestPage = useRef({ Component, pageProps, asPath: router.asPath });
  const [displayedPage, setDisplayedPage] = useState({
    Component,
    pageProps,
    asPath: router.asPath,
  });

  latestPage.current = { Component, pageProps, asPath: router.asPath };

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true, smoothTouch: false });
    lenisRef.current = lenis;
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [displayedPage.asPath]);

  useEffect(() => {
    let swapTimer;

    const swapPageAfterLoaderEnters = () => {
      clearTimeout(swapTimer);
      swapTimer = window.setTimeout(() => {
        setDisplayedPage(latestPage.current);
      }, 860);
    };

    router.events.on("routeChangeComplete", swapPageAfterLoaderEnters);

    return () => {
      clearTimeout(swapTimer);
      router.events.off("routeChangeComplete", swapPageAfterLoaderEnters);
    };
  }, [router.events]);

  const DisplayedComponent = displayedPage.Component;

  return (
    <>
      <PageLoader />
      <Cursor />
      <DisplayedComponent {...displayedPage.pageProps} />
    </>
  );
}
