import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectTemplate from "../components/ProjectTemplate.jsx";
import { getProject } from "../lib/projects.js";

// Load all per-project detail files: src/projects/**/<others>.js
const modules = import.meta.glob("../projects/**/*.js", { eager: true });

// Build { slug -> detailData }
const DETAIL = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .reduce((acc, p) => {
    if (p?.slug) acc[p.slug] = p;
    return acc;
  }, {});

export default function Project() {
  const { slug } = useParams();

  // base data from project.json (list view: title, num, label, thumb media)
  const base = getProject(slug);

  // detail data from src/projects/**/<slug>.js (intro, descLeft/right, full media)
  const detail = DETAIL[slug];

  // Redirect to external link if present
  useEffect(() => {
    if (detail?.externalLink) {
      window.location.href = detail.externalLink;
    }
  }, [detail?.externalLink]);

  if (!base && !detail) return <p style={{ padding: 24 }}>Project not found.</p>;

  // If external link exists, show loading and redirect
  if (detail?.externalLink) {
    return <p style={{ padding: 24 }}>Redirecting...</p>;
  }

  // Merge (detail overrides base)
  const project = {
    ...(base || {}),
    ...(detail || {}),
    title: detail?.title || base?.title || slug,
    media: detail?.media || base?.media || [],
    intro: detail?.intro || "",
    meta: detail?.meta || {
      category: base?.category || "",
      year: base?.num || "",
      tools: base?.label ? [base.label] : [],
    },
    descLeft: detail?.descLeft || "",
    descRight: detail?.descRight || "",
  };

  return <ProjectTemplate project={project} />;
}
