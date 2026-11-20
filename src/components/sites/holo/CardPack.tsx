"use client";

import { useEffect, useRef } from "react";
import "./card-pack.css";

export function CardPack() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || root.dataset.initialized === "true") return;

    root.dataset.initialized = "true";
    document.title = "Card pack";

    const script = document.createElement("script");
    script.src = "/sites/holo/card-pack.js";
    script.async = false;
    root.appendChild(script);

    return () => {
      // Keep the initialized runtime across React Strict Mode effect replays.
    };
  }, []);

  return (
    <div ref={rootRef} className="holo-page">
      <h1 className="sr">Card pack</h1>
      <main className="stage">
        <i className="ground" id="ground" />
        <div className="scene" id="scene">
          <div className="flow" id="flow" aria-hidden="true">
            <svg className="rays" id="rays" viewBox="0 0 100 76" />
          </div>
          <div className="pack" id="pack">
            <div className="skin front" aria-hidden="true">
              <span className="tag">Tear here ⟶</span>
              <span className="lips"><i className="lip" /></span>
              <b className="mark">holo</b>
              <span className="series">Series 01</span>
              <div className="orb" />
              <span className="foot l">Card pack</span>
              <span className="foot r">5 cards</span>
            </div>
            <div className="skin back" aria-hidden="true">
              <i className="fin" />
              <b className="mark sm">holo</b>
              <p className="blurb">5 collectible cards<br />One holo in every pack</p>
              <i className="code" />
            </div>
            <div className="flap" id="flap" aria-hidden="true" />
            <button
              className="hit"
              id="hit"
              type="button"
              aria-label="Card pack, 5 cards. Drag across the top to tear it open, or press to open."
            />
          </div>
        </div>
        <canvas className="fx" id="fx" aria-hidden="true" />
      </main>
      <button className="again" id="again" type="button" hidden>
        Open another pack
      </button>
      <button className="mute" id="mute" type="button" aria-label="Mute sound" aria-pressed="false">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M4 9.5v5h3.5l4.5 4v-13l-4.5 4z" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <g className="on">
              <path d="M15.5 9.2a4 4 0 0 1 0 5.6" />
              <path d="M18.2 6.8a7.5 7.5 0 0 1 0 10.4" />
            </g>
            <g className="off">
              <path d="m15.5 9.5 5 5m0-5-5 5" />
            </g>
          </g>
        </svg>
      </button>
      <p className="sr" id="live" aria-live="polite" />
    </div>
  );
}

