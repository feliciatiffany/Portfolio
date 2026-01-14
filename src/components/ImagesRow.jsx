import React from "react";
import Media from "./Media.jsx";

export default function ImagesRow({ media = [] }) {
  return (
    <div className="proj-gallery">
      {media.map((m, i) => (
        <div className="proj-gallery__cell" key={i}>
          <Media item={m} className="proj-media" />
        </div>
      ))}
    </div>
  );
}
