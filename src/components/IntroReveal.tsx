"use client";

import { useEffect, useRef, useState } from "react";

interface IntroRevealProps {
  onComplete?: () => void;
}

export default function IntroReveal({ onComplete }: IntroRevealProps) {
  const [isHidden, setIsHidden] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const forkRef = useRef<SVGSVGElement>(null);
  const plateRef = useRef<HTMLButtonElement>(null);
  const triggerTearRef = useRef<() => void>(() => undefined);

  useEffect(() => {
    const fork = forkRef.current;
    const plate = plateRef.current;
    const container = containerRef.current;
    if (!fork || !plate || !container) return;

    let hasTorn = false;
    let hasMoved = false;
    let completionTimer: ReturnType<typeof setTimeout> | undefined;
    const previousBodyOverflow = document.body.style.overflow;

    // Keep the page fixed while the two paper halves cover it.
    document.body.style.overflow = "hidden";

    const finishReveal = () => {
      document.body.style.overflow = previousBodyOverflow;
      setIsHidden(true);
      onComplete?.();
    };

    const triggerTear = (duration = 3500) => {
      if (hasTorn) return;
      hasTorn = true;
      container.classList.add("is-torn");
      completionTimer = setTimeout(finishReveal, duration);
    };

    triggerTearRef.current = () => triggerTear();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      triggerTear(0);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (hasTorn) return;

      // Make fork visible only after user moves mouse (prevents jarring start at 0,0)
      if (!hasMoved) {
        hasMoved = true;
        fork.style.opacity = "1";
      }

      const rect = plate.getBoundingClientRect();
      const plateCX = rect.left + rect.width / 2;
      const plateCY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - plateCX, e.clientY - plateCY);

      let forkRotation = -25;
      let forkOffsetY = -10;

      // Zone 1: Hovering near plate
      if (distance < 200 && distance > 80) {
        plate.classList.add("is-near");
        const progress = (200 - distance) / 120;
        forkRotation = -25 - 40 * progress;
        forkOffsetY = -10 + 25 * progress;
      } else {
        plate.classList.remove("is-near");
      }

      // Apply fork position directly (60fps, no React render lag)
      fork.style.transform = `translate(-12px, ${forkOffsetY}px) rotate(${forkRotation}deg)`;
      fork.style.left = `${e.clientX}px`;
      fork.style.top = `${e.clientY}px`;

      // Zone 2: Touches plate
      if (distance <= 80) {
        triggerTear();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") triggerTear();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (completionTimer) clearTimeout(completionTimer);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      triggerTearRef.current = () => undefined;
    };
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div ref={containerRef} className="intro-container">
      <style>{`
        /* EXACT REFERENCE STYLES PORTED TO REACT */
        .intro-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 9999;
          pointer-events: none;
          perspective: 1500px;
          cursor: none; /* Hide default cursor entirely */
        }

        .intro-container.is-torn {
          pointer-events: none;
        }

        .paper-half {
          position: absolute;
          top: 0;
          height: 100vh;
          background-color: #111111;
          background-image: radial-gradient(#222222 1px, transparent 1px);
          background-size: 20px 20px;
          filter: drop-shadow(0px 0px 20px rgba(0,0,0,0.15));
          transition: transform 3s cubic-bezier(0.45, 0, 0.15, 1), opacity 2s ease 1s;
          overflow: hidden;
          pointer-events: auto; /* Catch mouse events on the paper */
        }

        .paper-content {
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 10vh 0;
          color: #e8e4dc;
        }

        .paper-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 6vw, 5rem);
          letter-spacing: 3px;
        }

        .paper-content p {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.2rem);
          letter-spacing: 6px;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .paper-left {
          left: 0;
          width: 52vw;
          clip-path: polygon(0 0, 100% 0, 96% 8%, 99% 15%, 95% 23%, 98% 30%, 94% 38%, 100% 45%, 95% 53%, 98% 60%, 93% 68%, 99% 75%, 95% 83%, 98% 90%, 96% 100%, 0 100%);
          transform-origin: left center;
        }
        .paper-left .paper-content { left: 0; }

        .paper-right {
          right: 0;
          width: 52vw;
          clip-path: polygon(100% 0, 0 0, 4% 8%, 1% 15%, 5% 23%, 2% 30%, 6% 38%, 0% 45%, 5% 53%, 2% 60%, 7% 68%, 1% 75%, 5% 83%, 2% 90%, 4% 100%, 100% 100%);
          transform-origin: right center;
        }
        .paper-right .paper-content { right: 0; }

        .intro-plate {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(240px, 25vw, 320px);
          height: clamp(240px, 25vw, 320px);
          border-radius: 50%;
          border: 16px solid #161616;
          /* Real food photo, zoomed to 115% to hide the dark slate board edges */
          background: url('/images/intro_plate_food.png') center/115% no-repeat;
          background-color: #161616;
          box-shadow: 0 35px 60px rgba(0,0,0,0.35), inset 0 10px 20px rgba(0,0,0,0.4);
          z-index: 15;
          transition: transform 2.5s cubic-bezier(0.5, 0, 0.2, 1), opacity 2s ease, box-shadow 0.5s ease;
          animation: introBreathe 4s infinite ease-in-out;
          pointer-events: auto;
          transform: translate(-50%, -50%) scale(1);
          padding: 0;
          appearance: none;
          cursor: none;
        }

        .intro-plate:focus-visible {
          outline: 2px solid #c49a6c;
          outline-offset: 8px;
        }

        @keyframes introBreathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.03); }
        }

        .intro-plate.is-near {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.4), 0 35px 60px rgba(0,0,0,0.35), inset 0 10px 20px rgba(0,0,0,0.4);
          animation-play-state: paused;
        }

        .intro-fork {
          position: fixed;
          top: 0;
          left: 0;
          width: 45px;
          height: 90px;
          z-index: 10000;
          pointer-events: none;
          transition: opacity 0.5s ease;
          filter: drop-shadow(15px 15px 10px rgba(0,0,0,0.4));
          opacity: 0; /* Hidden initially, shown after first mousemove */
        }

        @media (pointer: coarse) {
          .intro-fork { display: none !important; }
          .intro-plate { cursor: pointer; }
        }

        @media (prefers-reduced-motion: reduce) {
          .paper-half,
          .intro-plate,
          .intro-fork {
            animation: none !important;
            transition: none !important;
          }
        }

        /* ─── TORN ANIMATION STATES ─── */
        .is-torn .paper-left {
          transform: translateX(-55vw) rotateY(60deg) rotateZ(-8deg);
          opacity: 0;
        }
        .is-torn .paper-right {
          transform: translateX(55vw) rotateY(-60deg) rotateZ(8deg);
          opacity: 0;
        }
        .is-torn .intro-plate {
          transform: translate(-50%, 100vh) scale(0.4) rotate(180deg) !important;
          opacity: 0;
          box-shadow: none;
        }
        .is-torn .intro-fork {
          opacity: 0 !important;
        }
      `}</style>

      <div className="paper-half paper-left" aria-hidden="true">
        <div className="paper-content">
          <h2>L&apos;Épicure</h2>
          <p>Dig in to begin</p>
        </div>
      </div>

      <div className="paper-half paper-right" aria-hidden="true">
        <div className="paper-content">
          <h2>L&apos;Épicure</h2>
          <p>Dig in to begin</p>
        </div>
      </div>

      <button
        ref={plateRef}
        className="intro-plate"
        type="button"
        aria-label="Enter L'Épicure"
        onClick={() => triggerTearRef.current()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            triggerTearRef.current();
          }
        }}
      />

      <svg ref={forkRef} className="intro-fork" viewBox="0 0 24 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8c7355" />
            <stop offset="50%" stopColor="#cca77b" />
            <stop offset="100%" stopColor="#5c4a2a" />
          </linearGradient>
        </defs>
        <path d="M2 5 L2 30 Q2 40 12 40 Q22 40 22 30 L22 5" stroke="url(#metal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 5 L8 30" stroke="url(#metal)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 5 L16 30" stroke="url(#metal)" strokeWidth="3" strokeLinecap="round"/>
        <line x1="12" y1="40" x2="12" y2="95" stroke="url(#metal)" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
