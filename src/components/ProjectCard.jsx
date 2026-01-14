import React from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../lib/projects.js";
import Media from "../components/Media.jsx";

export default function Project() {
  const { slug } = useParams();
  const p = getProject(slug);
  if (!p) return <p>Not found.</p>;
  const first = p.media?.[0];

  return (
    <article className="section">
      <h1 className="title">{p.title}</h1>
      <p className="kicker"><sup className="meta-sup"><span className="num">{p.num}</span><span className="label">{p.label}</span></sup></p>
      {first && (
        <div style={{ maxWidth: 960, marginTop: 16 }}>
          <Media item={first} autoPlay className="detail-media" />
        </div>
      )}
      {/* add body/credits when you extend JSON */}
    </article>
  );
}
