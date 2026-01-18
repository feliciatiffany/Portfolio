// src/components/ImagesRow.jsx
import React, { useMemo } from "react";
import Media from "./Media.jsx";

export default function ImagesRow({ media = [], onOpen }) {
  const safeMedia = useMemo(() => (Array.isArray(media) ? media.filter(Boolean) : []), [media]);

  if (safeMedia.length === 0) return null;

  return (
    <div className="proj-gallery">
      {safeMedia.map((m, idx) => {
        const clickable = typeof onOpen === "function" && m?.src;

        return (
          <div className="proj-gallery__cell" key={m.src || idx}>
            {clickable ? (
              <button
                type="button"
                className="proj-media-btn"
                onClick={() => onOpen(m)}
                aria-label={m.alt ? `Open ${m.alt}` : "Open media"}
              >
                <Media item={m} className="proj-media" />
              </button>
            ) : (
              <Media item={m} className="proj-media" />
            )}
          </div>
        );
      })}
    </div>
  );
}
