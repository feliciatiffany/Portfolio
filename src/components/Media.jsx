import React from "react";

export default function Media({ item, autoPlay = false, className }) {
  if (!item) return null;
  if (item.type === "video") {
    return (
      <video
        className={className}
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
  return <img className={className} src={item.src} alt={item.alt || ""} loading="lazy" />;
}
