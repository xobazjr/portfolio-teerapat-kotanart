import "../styles/globals.css";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Cursor from "../core/Cursor";
import PageLoader from "../core/PageLoader";

export default function App({ Component, pageProps, router }) {
  const lenisRef = useRef(null);
  const pendingNavigation = useRef(null);
  const [displayedPage, setDisplayedPage] = useState({
    Component,
    pageProps,
    asPath: router.asPath,
  });

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
    const getPathname = (url) =>
      new URL(url, window.location.origin).pathname.replace(/\/$/, "");

    const markNavigation = (url) => {
      pendingNavigation.current = {
        isProjectsFilter:
          router.pathname.replace(/\/$/, "") === "/projects" &&
          getPathname(url) === "/projects",
      };
    };

    const cancelNavigation = () => {
      pendingNavigation.current = null;
    };

    router.events.on("routeChangeStart", markNavigation);
    router.events.on("routeChangeError", cancelNavigation);

    return () => {
      router.events.off("routeChangeStart", markNavigation);
      router.events.off("routeChangeError", cancelNavigation);
    };
  }, [router.events, router.pathname]);

  useEffect(() => {
    if (displayedPage.asPath === router.asPath) return undefined;

    const nextPage = { Component, pageProps, asPath: router.asPath };
    const isProjectsFilter = pendingNavigation.current?.isProjectsFilter;

    if (isProjectsFilter) {
      pendingNavigation.current = null;
      setDisplayedPage(nextPage);
      return undefined;
    }

    const swapTimer = window.setTimeout(() => {
      pendingNavigation.current = null;
      setDisplayedPage(nextPage);
    }, 860);

    return () => window.clearTimeout(swapTimer);
  }, [Component, pageProps, router.asPath, displayedPage.asPath]);

  const DisplayedComponent = displayedPage.Component;

  return (
    <>
      <PageLoader />
      <Cursor />
      <DisplayedComponent {...displayedPage.pageProps} />
    </>
  );
}
