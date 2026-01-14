// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

/* --- tiny media box (image/gif/video), with placeholder fallback --- */
function Thumb({ item }) {
  if (!item || !item.src) {
    return <span className="thumb" aria-hidden="true" />;
  }
  if (item.type === "video") {
    return (
      <span className="thumb">
        <video
          src={item.src}
          poster={item.poster || undefined}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
        />
      </span>
    );
  }
  return (
    <span className="thumb">
      <img src={item.src} alt={item.alt || ""} loading="lazy" />
    </span>
  );
}



export default function Home() {

  return (
    <section className="hero">
      {/* Intro — unchanged */}
      <p className="intro">
        <span className="line">
          <span className="mono">Hi, I’m</span>{" "}
          <Link to="/About" className="grow-band name" data-role="fany">Fany!</Link>{" "}
          <span className="mono">a</span>{" "}
          <Link to="/Tech" className="grow-band" data-role="tech">tech designer</Link>
          <span className="comma">,</span>
        </span>
        <span className="line">
          <Link to="/graphic" className="grow-band" data-role="graphic">graphic designer</Link>
          <span className="comma">,</span>{" "}
          <span className="mono">and I create </span>{" "}
          <Link to="/anything" className="grow-band" data-role="anything">solutions</Link>
        </span>
      </p>
     

      <p className="kicker" style={{ maxWidth: 880 }}>
        Also: Adidas London, Adidas Soccer, Apple, Audi, A-Trak, Balenciaga, Beefeater,
        Louis Vuitton, MoMA, Nike Adapt, Nike React, Pinterest, Space10
      </p>
    </section>
  );
}
