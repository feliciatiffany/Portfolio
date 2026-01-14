// src/components/ImagesSlider.jsx
import React from "react";

function MediaSlide({ item }) {
  if (!item) return null;

  if (item.type === "video") {
    return (
      <video
        className="proj-slide-media"
        src={item.src}
        muted
        loop
        playsInline
        controls
      />
    );
  }

  return (
    <img
      className="proj-slide-media"
      src={item.src}
      alt={item.alt || ""}
      loading="lazy"
    />
  );
}

export default function ImagesSlider({ items = [], title = "More Pages / Mockups" }) {
  const [index, setIndex] = React.useState(0);
  const total = items.length;

  React.useEffect(() => {
    setIndex(0);
  }, [total]);

  if (!items || items.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="proj-slider">
      <h3 className="proj-minihead">{title}</h3>

      <div className="slider-container" aria-roledescription="carousel">
        <div
          className="slider"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div className="slide" key={i} aria-hidden={i !== index}>
              <MediaSlide item={item} />
            </div>
          ))}
        </div>

        <div className="navigation-buttons">
          <button type="button" className="prev" onClick={prev} aria-label="Previous">
            &#10094;
          </button>
          <button type="button" className="next" onClick={next} aria-label="Next">
            &#10095;
          </button>
        </div>
      </div>

      <p className="proj-caption">{items[index]?.alt || ""}</p>
    </section>
  );
}
