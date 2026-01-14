import React from "react";
import { Link } from "react-router-dom";
import Media from "./Media.jsx";

export default function ProjectRow({ p }) {
  return (
    <article className="proj-row" tabIndex={0}>
      <div className="row-top">
        <Link to={`/work/${p.slug}`} className="title">{p.title}</Link>
        <sup className="meta-sup">
          <span className="num">{p.num}</span>
          <span className="label">{p.label}</span>
        </sup>

        {(p.media || []).map((m, i) => (
          <span className="thumb-wrap" key={i}>
            <span className="thumb">
              <Media item={m} autoPlay={m?.type === "video"} />
            </span>
            <span className="preview">
              <Media item={m} autoPlay />
            </span>
          </span>
        ))}

        <span className="punct">;</span>
      </div>
    </article>
  );
}