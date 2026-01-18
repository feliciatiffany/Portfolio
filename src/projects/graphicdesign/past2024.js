// src/projects/graphicdesign/past2023.js

const base = import.meta.env.BASE_URL;
const asset = (p) => `${base}${String(p).replace(/^\//, "")}`;

export default {
  slug: "past-2024",
  title: "Past Work (Before 2024)",

  // ✅ tells ProjectTemplate/CSS to use the special layout
  layout: "fullpage-stack",

  meta: {
    category: ["Archive", "Communication Design", "Fine Art","Merchandise", "Branding & Marketing", "Illustration", "Game Design", "Photo Editing", "Typography", "Short Movies"],
    year: "Pre-2024",
    tools: ["Adobe Illustrator", "Photoshop", "Premiere Pro", "After Effects", "Paint", "Photography", "Traditional Media","Canva" ],
  },

  intro:
    "A curated archive of work created before 2024 — documenting my growth into design across organizations, competitions, hobbies, and early studies.\n\n"+ 
    "This collection showcases all my work created before 2024.Growing up with a curiosity for exploring various disciplines, I discovered a passion for design, which eventually led me to major in Design and Technology. These pieces represent my journey as a designer, from contributions to student organizations and competition entries to personal creative hobbies. Some works also come from my foundation year at Parsons, The New School, where I experimented with diverse forms and styles.",

  // Row 4: full-page stack images (public/media/graphicdesign/past2023/)
  media: [
    { type: "image", src: asset("media/graphicdesign/past2024/page1.png"), alt: "Past work page 1" },
    { type: "image", src: asset("media/graphicdesign/past2024/page2.png"), alt: "Past work page 2" },
    { type: "image", src: asset("media/graphicdesign/past2024/page3.png"), alt: "Past work page 3" },
    { type: "image", src: asset("media/graphicdesign/past2024/page4.png"), alt: "Past work page 4" },
    { type: "image", src: asset("media/graphicdesign/past2024/page5.png"), alt: "Past work page 5" },
    { type: "image", src: asset("media/graphicdesign/past2024/page6.png"), alt: "Past work page 6" },
    { type: "image", src: asset("media/graphicdesign/past2024/page7.png"), alt: "Past work page 7" },
    { type: "image", src: asset("media/graphicdesign/past2024/page8.png"), alt: "Past work page 8" },
  ],

  
};
