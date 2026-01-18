// src/components/ProjectTemplate.jsx
import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import ImagesRow from "./ImagesRow.jsx";
import ImagesSlider from "./ImagesSlider.jsx";
import DescriptionProject1 from "./DescriptionProject1.jsx";
import Lightbox from "./Lightbox.jsx";
import LogoUrl from "../assets/logosmall.png";

const ytEmbed = (id) => `https://www.youtube.com/embed/${id}`;

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => "proj-nav__link" + (isActive ? " is-active" : "")}
    >
      {children}
    </NavLink>
  );
}

export default function ProjectTemplate({ project }) {
  const [lbItem, setLbItem] = useState(null);
  const layoutAttr = project?.layout ? project.layout : undefined;

  const openLightbox = (item) => {
    if (!item?.src) return;
    setLbItem({
      type: item.type || "image",
      src: item.src,
      alt: item.alt || "",
      caption: item.alt || "",
    });
  };

  const closeLightbox = () => setLbItem(null);

  const row6Blocks = useMemo(() => {
    const r6 = project?.row6;
    if (!r6) return [];

    const blocks = [];
    const inheritedLayout = r6.layout; // allows row6.layout = "slider" to apply to children

    // websiteScreens block
    if (r6.websiteScreens?.media?.length) {
      blocks.push({
        kind: "media",
        title: r6.websiteScreens.title || "Documentation",
        layout: r6.websiteScreens.layout || inheritedLayout || "gallery",
        media: r6.websiteScreens.media,
      });
    }

    // items block (Dialogue)
    if (r6.items?.length) {
      blocks.push({
        kind: "media",
        title: r6.title || "Row 6",
        layout: inheritedLayout || "gallery",
        media: r6.items,
      });
    }

    // youtubes array (We Hear You)
    if (Array.isArray(r6.youtubes) && r6.youtubes.length) {
      blocks.push({
        kind: "youtubes",
        title: r6.title || "Videos",
        youtubes: r6.youtubes,
      });
    }

    // single youtube in row6 (Protocol Nation)
    if (r6.youtube?.videoId) {
      blocks.push({
        kind: "youtube",
        title: r6.youtube.title || "Video",
        videoId: r6.youtube.videoId,
      });
    }

    return blocks;
  }, [project]);

  if (!project) {
    return (
      <div className="project-template">
        <div className="proj-body">
          <p>Project not found.</p>
          <Link to="/">Go back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-template" data-layout={layoutAttr}>
      {/* ROW 1 */}
      <header className="proj-head">
        <Link to="/" className="proj-logo" aria-label="Home">
          <img src={LogoUrl} alt="Logo" />
        </Link>

        <div className="proj-head__text">Hi, I’m Fany and now you are seeing</div>
        <h1 className="proj-head__title">{project.title}</h1>
      </header>

      {/* ROW 2 */}
      <nav className="proj-nav" aria-label="Main navigation">
        <NavItem to="/about">About</NavItem>
        <NavItem to="/tech">Tech Designer</NavItem>
        <NavItem to="/graphic">Graphic Designer</NavItem>
        <NavItem to="/anything">Others</NavItem>
      </nav>

      <main className="proj-body">
        {/* ROW 3 */}
        <section className="proj-row3">
          <p className="proj-text">{project.intro}</p>

          {project.meta && (
            <dl className="proj-meta">
              <div className="proj-meta__item">
                <dt>Category</dt>
                <dd>
                  {Array.isArray(project.meta.category)
                    ? project.meta.category.join(", ")
                    : project.meta.category}
                </dd>
              </div>
              <div className="proj-meta__item">
                <dt>Year</dt>
                <dd>{project.meta.year}</dd>
              </div>
              <div className="proj-meta__item">
                <dt>Tools</dt>
                <dd>
                  {Array.isArray(project.meta.tools) ? project.meta.tools.join(", ") : project.meta.tools}
                </dd>
              </div>
            </dl>
          )}
        </section>

        {/* ROW 4 (Gallery) */}
        {Array.isArray(project.media) && project.media.length > 0 && (
          <section className="proj-section proj-section--4">
            <ImagesRow media={project.media} onOpen={openLightbox} />
          </section>
        )}

        {/* Optional slider (top-level "slider") */}
        {project.slider?.items?.length ? (
          <section className="proj-slider">
            <h3 className="proj-minihead">{project.slider.title || "Slider"}</h3>
            <ImagesSlider items={project.slider.items} onOpen={openLightbox} showTitle={false} />
          </section>
        ) : null}

        {/* ROW 5 (Descriptions) */}
        {(project.descLeft || project.descRight) && (
          <section className="proj-row5">
            <div className="proj-col">
              <DescriptionProject1 data={project.descLeft} />
            </div>
            <div className="proj-col">
              <DescriptionProject1 data={project.descRight} />
            </div>
          </section>
        )}

        {/* ROW 6 (Flexible) */}
        {row6Blocks.length ? (
          <section className="proj-row6">
            {row6Blocks.map((b, i) => {
              if (b.kind === "media") {
                const isSlider = b.layout === "slider";
                return (
                  <div key={i} className={isSlider ? "proj-slider" : ""}>
                    <h3 className="proj-minihead">{b.title}</h3>
                    {isSlider ? (
                      <ImagesSlider items={b.media} onOpen={openLightbox} showTitle={false} />
                    ) : (
                      <ImagesRow media={b.media} onOpen={openLightbox} />
                    )}
                  </div>
                );
              }

              if (b.kind === "youtubes") {
                return (
                  <div key={i}>
                    <h3 className="proj-minihead">{b.title}</h3>
                    {b.youtubes.map((y) => (
                      <div key={y.videoId} style={{ display: "grid", gap: 10, marginBottom: 18 }}>
                        <div className="proj-row6__link">{y.title}</div>
                        <div className="yt-wrap">
                          <iframe
                            className="yt-embed"
                            src={ytEmbed(y.videoId)}
                            title={y.title || "YouTube video"}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              if (b.kind === "youtube") {
                return (
                  <div key={i} style={{ display: "grid", gap: 10 }}>
                    <h3 className="proj-minihead">{b.title}</h3>
                    <div className="yt-wrap">
                      <iframe
                        className="yt-embed"
                        src={ytEmbed(b.videoId)}
                        title={b.title || "YouTube video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </section>
        ) : null}

        {/* Top-level youtube */}
        {project.youtube?.videoId ? (
          <section className="proj-row6" style={{ marginTop: 18 }}>
            <h3 className="proj-minihead">{project.youtube.title || "Project Video"}</h3>
            <div className="yt-wrap">
              <iframe
                className="yt-embed"
                src={ytEmbed(project.youtube.videoId)}
                title={project.youtube.title || "YouTube video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        ) : null}

        {/* References */}
        {Array.isArray(project.references) && project.references.length > 0 && (
          <section className="proj-row6" style={{ marginTop: 18 }}>
            <h3 className="proj-minihead">References</h3>
            <ul className="proj-references">
              {project.references.map((r) => (
                <li key={r.href}>
                  <a href={r.href} target="_blank" rel="noreferrer">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <Lightbox open={!!lbItem} item={lbItem} onClose={closeLightbox} />
    </div>
  );
}
