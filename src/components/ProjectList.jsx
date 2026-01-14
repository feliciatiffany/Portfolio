import React from "react";
import ProjectRow from "./ProjectRow.jsx";
import { byCategory } from "../lib/projects.js";

export default function ProjectList({ categorySlug }) {
  const items = byCategory(categorySlug);
  return (
    <section className="projects projects--tiny projects--block projects--side projects--grid">
      {items.map(p => <ProjectRow key={p.slug} p={p} />)}
    </section>
  );
}
