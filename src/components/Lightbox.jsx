// src/components/Lightbox.jsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Lightbox({ open, item, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open || !item?.src) return null;

  const content = (
    <div className="lb-backdrop" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="lb-content" onMouseDown={(e) => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {item.type === "video" ? (
          <video className="lb-media" src={item.src} controls autoPlay playsInline />
        ) : (
          <img className="lb-media" src={item.src} alt={item.alt || ""} />
        )}

        {item.caption ? <div className="lb-caption">{item.caption}</div> : null}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
