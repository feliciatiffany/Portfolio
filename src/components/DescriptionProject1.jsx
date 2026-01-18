// src/components/DescriptionProject1.jsx
import React from "react";

function BulletList({ bullets }) {
  if (!Array.isArray(bullets) || !bullets.length) return null;

  return (
    <ul className="proj-bullets">
      {bullets.map((b, i) => {
        if (typeof b === "string") return <li key={i}>{b}</li>;
        return (
          <li key={i}>
            {b.label ? <strong>{b.label} </strong> : null}
            {b.text || ""}
          </li>
        );
      })}
    </ul>
  );
}

function Links({ links }) {
  if (!Array.isArray(links) || !links.length) return null;

  return (
    <ul className="proj-references">
      {links.map((l) => (
        <li key={l.href}>
          <a href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Table({ table }) {
  if (!table?.headers?.length || !table?.rows?.length) return null;

  return (
    <table className="proj-table">
      <thead>
        <tr>
          {table.headers.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td key={j}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RenderSection({ s }) {
  if (!s) return null;

  return (
    <div className="proj-desc-section">
      {s.title ? <h3 className="proj-minihead">{s.title}</h3> : null}

      {typeof s.html === "string" ? <p className="proj-desc" dangerouslySetInnerHTML={{ __html: s.html }} /> : null}

      {Array.isArray(s.paragraphs)
        ? s.paragraphs.map((p, i) => (
            <p key={i} className="proj-desc">
              {p}
            </p>
          ))
        : null}

      <BulletList bullets={s.bullets} />
      <Table table={s.table} />
      <Links links={s.links} />
    </div>
  );
}

export default function DescriptionProject1({ data }) {
  if (!data) return null;

  // If it is a simple string, render as paragraph
  if (typeof data === "string") return <p className="proj-desc">{data}</p>;

  // If it has sections, render them
  if (Array.isArray(data.sections)) {
    return (
      <div>
        {data.title ? <h3 className="proj-minihead">{data.title}</h3> : null}
        {data.paragraphs?.map((p, i) => (
          <p key={i} className="proj-desc">
            {p}
          </p>
        ))}
        {data.sections.map((s, i) => (
          <RenderSection key={i} s={s} />
        ))}
      </div>
    );
  }

  // Otherwise treat it as a single section object
  return <RenderSection s={data} />;
}
