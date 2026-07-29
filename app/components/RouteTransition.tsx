"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type TransitionPhase = "idle" | "covering" | "revealing";

const prefetchedRoutes = [
  "/",
  "/soluciones/tercerizacion-de-personal",
  "/soluciones/reclutamiento-y-seleccion",
  "/soluciones/personal-temporal",
  "/soluciones/equipos-dedicados",
];

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

export function RouteTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const pendingHref = useRef<string | null>(null);
  const transitioning = useRef(false);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const revealTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    prefetchedRoutes.forEach((route) => router.prefetch(route));
  }, [router]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        transitioning.current
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");

      if (
        !anchor ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.dataset.noTransition === "true"
      ) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);

      if (
        destination.origin !== current.origin ||
        destination.pathname === current.pathname
      ) {
        return;
      }

      event.preventDefault();

      const nextHref = `${destination.pathname}${destination.search}${destination.hash}`;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        router.push(nextHref);
        return;
      }

      transitioning.current = true;
      pendingHref.current = nextHref;
      setPhase("covering");

      navigationTimer.current = setTimeout(() => {
        router.push(nextHref);
      }, 380);

      fallbackTimer.current = setTimeout(() => {
        if (pendingHref.current) window.location.assign(nextHref);
      }, 1600);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);

  useEffect(() => {
    const destination = pendingHref.current;
    const destinationPath = destination
      ? normalizePathname(new URL(destination, window.location.origin).pathname)
      : null;

    if (
      !destination ||
      destinationPath !== normalizePathname(pathname)
    ) {
      return;
    }

    pendingHref.current = null;
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    setPhase("revealing");

    revealTimer.current = setTimeout(() => {
      setPhase("idle");
      transitioning.current = false;
    }, 450);
  }, [pathname]);

  useEffect(
    () => () => {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
      if (revealTimer.current) clearTimeout(revealTimer.current);
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    },
    [],
  );

  return (
    <>
      <div
        className="route-transition"
        data-phase={phase}
        aria-hidden="true"
      >
        <span className="route-transition-dot" />
      </div>
      {phase !== "idle" ? (
        <span className="sr-only" role="status" aria-live="polite">
          Cargando página
        </span>
      ) : null}
    </>
  );
}
