// src/pages/Others.jsx
import React from "react";
import { Link } from "react-router-dom";
import { byCategory } from "../lib/projects";

/* Media */
function Media({ item, autoPlay = false }) {
  if (item?.type === "video") {
    return (
      <video
        src={item.src}
        poster={item.poster || undefined}
        muted
        loop
        playsInline
        preload="metadata"
        {...(autoPlay ? { autoPlay: true } : {})}
      />
    );
  }
  return <img src={item?.src} alt={item?.alt || ""} loading="lazy" />;
}
function ThumbWrap({ item }) {
  return (
    <span className="thumb-wrap">
      <span className="thumb">
        <Media item={item} autoPlay={item?.type === "video"} />
      </span>
    </span>
  );
}
function ProjectCard({ row }) {
  return (
    <Link to={`/work/${row.slug}`} className="proj-card-link">
      <article className="proj-card">
        <div className="proj-row">
          <div className="row-top">
            <span className="title">{row.title}</span>
            <span className="meta-block">
              <span className="num">{row.num}</span>
              <span className="label">{row.label}</span>
            </span>

            {(row.media || []).map((m, j) => (
              <ThumbWrap key={j} item={m} />
            ))}

            <span className="punct">;</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Others() {
  const projects = byCategory("others");
  return (
    <>
      <section className="hero">
        <p className="intro">
          <span className="line">
            <span className="mono">Hi, I’m</span>{" "}
            <Link to="/about" className="grow-band name" data-role="fany">Fany!</Link>{" "}
            <span className="mono">a</span>{" "}
            <Link to="/tech" className="grow-band" data-role="tech">tech designer</Link>
            <span className="comma">,</span>
          </span>
          <span className="line">
            <Link to="/graphic" className="grow-band" data-role="graphic">graphic designer</Link>
            <span className="comma">,</span>{" "}
            <span className="mono">and I create </span>{" "}
            <Link to="/others" className="grow-band is-current" data-role="others">solutions</Link>
          </span>
        </p>
      </section>

     {/* PROJECT LIST — maps to grid-area:content (see style.css) */}
      <section className="projects projects--tiny projects--block projects--side projects--grid">
        {projects.map((row) => (
          <ProjectCard key={row.slug || row.title} row={row} />
        ))}
      </section>
    </>
  );
}
