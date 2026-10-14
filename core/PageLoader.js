import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const INITIAL_DELAY = 2200;
const NAVIGATION_DELAY = 1200;
const EXIT_DURATION = 820;

export default function PageLoader() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [entering, setEntering] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(1);
  const startedAt = useRef(Date.now());
  const enterFrame = useRef(null);
  const skipNavigation = useRef(false);

  useEffect(() => {
    let hideTimer;
    let removeTimer;
    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 94) return current;
        return Math.min(current + Math.ceil(Math.random() * 6), 94);
      });
    }, 90);

    const hide = () => {
      if (skipNavigation.current) {
        skipNavigation.current = false;
        clearTimeout(hideTimer);
        clearTimeout(removeTimer);
        return;
      }

      clearTimeout(hideTimer);
      const elapsed = Date.now() - startedAt.current;
      const remaining = Math.max(0, NAVIGATION_DELAY - elapsed);

      hideTimer = window.setTimeout(() => {
        setProgress(100);
        setLeaving(true);
        removeTimer = window.setTimeout(() => {
          setLoading(false);
          setLeaving(false);
        }, EXIT_DURATION);
      }, remaining);
    };

    const show = (url) => {
      const nextPath = new URL(url, window.location.origin).pathname.replace(/\/$/, "");
      const currentPath = window.location.pathname.replace(/\/$/, "");

      // การเปลี่ยนตัวกรองในหน้า Projects ไม่ต้องแสดง page transition
      if (currentPath === "/projects" && nextPath === "/projects") {
        skipNavigation.current = true;
        clearTimeout(hideTimer);
        clearTimeout(removeTimer);
        setLoading(false);
        setEntering(false);
        setLeaving(false);
        setProgress(100);
        return;
      }

      clearTimeout(removeTimer);
      startedAt.current = Date.now();
      setEntering(true);
      setLeaving(false);
      setLoading(true);
      setProgress(1);

      enterFrame.current = window.requestAnimationFrame(() => {
        enterFrame.current = window.requestAnimationFrame(() => {
          setEntering(false);
        });
      });
    };

    hideTimer = window.setTimeout(hide, INITIAL_DELAY);
    router.events.on("routeChangeStart", show);
    router.events.on("routeChangeComplete", hide);
    router.events.on("routeChangeError", hide);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
      clearInterval(progressTimer);
      if (enterFrame.current) window.cancelAnimationFrame(enterFrame.current);
      router.events.off("routeChangeStart", show);
      router.events.off("routeChangeComplete", hide);
      router.events.off("routeChangeError", hide);
    };
  }, [router.events]);

  if (!loading) return null;

  return (
    <>
      <div
        className={`page-loader ${entering ? "page-loader--entering" : ""} ${
          leaving ? "page-loader--leaving" : ""
        }`}
      >
        <div
          className="page-loader__fade"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
        <div className="page-loader__content" aria-label="Loading XOBAZJR">
          <span>XOBAZJR</span>
        </div>
        <div className="page-loader__progress" aria-live="polite">
          {progress}%
        </div>
      </div>
    </>
  );
}
