import data from "../data/project.json";

/** Return all projects */
export function all() {
  return data.projects || [];
}

/** Return projects for a category: 'tech' | 'graphic' | 'anything' */
export function byCategory(category) {
  return (data.projects || []).filter(p => p.category === category);
}

/** Find one by slug */
export function getProject(slug) {
  return (data.projects || []).find(p => p.slug === slug);
}
