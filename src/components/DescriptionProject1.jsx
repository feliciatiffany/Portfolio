import React from "react";

function Section({ title, html, bullets }) {
  return (
    <section className="proj-desc-section">
      {title ? <h3 className="proj-minihead">{title}</h3> : null}

      {html ? (
        <p
          className="proj-desc"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : null}

      {Array.isArray(bullets) && bullets.length > 0 ? (
        <ul className="proj-bullets">
          {bullets.map((b, idx) => (
            <li key={idx}>
              {b?.label ? <strong>{b.label}</strong> : null}{" "}
              {b?.text || ""}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function Poster({ src, alt, caption }) {
  return (
    <figure className="proj-poster">
      <img className="proj-poster__img" src={src} alt={alt || ""} loading="lazy" />
      {caption ? <figcaption className="proj-caption">{caption}</figcaption> : null}
    </figure>
  );
}

export default function DescriptionProject1({ left, right }) {
  const leftIsObj = left && typeof left === "object";
  const rightIsObj = right && typeof right === "object";

  return (
    <div className="proj-row5">
      {/* LEFT COLUMN */}
      <div className="proj-col">
        {!leftIsObj ? (
          <p className="proj-text">{left || ""}</p>
        ) : (
          <>
            {left.sections?.map((s, i) => (
              <Section key={i} title={s.title} html={s.html} bullets={s.bullets} />
            ))}

            {Array.isArray(left.posters) && left.posters.length > 0 ? (
              <div className="proj-subposters">
                {left.posters.map((p, i) => (
                  <Poster key={i} src={p.src} alt={p.alt} caption={p.caption} />
                ))}
              </div>
            ) : null}
          </>
        )}
      </div>

      {/* RIGHT COLUMN */}
      <div className="proj-col">
        {!rightIsObj ? (
          <p className="proj-text">{right || ""}</p>
        ) : (
          <>
            {right.poster ? (
              <div className="proj-mainposter">
                <Poster
                  src={right.poster.src}
                  alt={right.poster.alt}
                  caption={right.poster.caption}
                />
              </div>
            ) : null}

            {/* optional extra sections on right, if you ever want */}
            {right.sections?.map((s, i) => (
              <Section key={i} title={s.title} html={s.html} bullets={s.bullets} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
