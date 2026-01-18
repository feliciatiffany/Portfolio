// src/projects/graphicdesign/personalLogoDesign.js

const base = import.meta.env.BASE_URL; // works for GitHub Pages + custom domain
const asset = (p) => `${base}${String(p).replace(/^\//, "")}`;

export default {
  slug: "personal-logo-design",
  title: "Personal Logo Design",

  meta: {
    category: ["Communication Design", "Typography", "Branding"],
    year: "2024",
    tools: ["Adobe Illustrator", "Sketch" ],
  },

  intro:
    "This project centers on designing a cohesive personal identity, beginning with the creation of a monogram/logo and extending into a personalized ID card. The logo reflects my design style and values, while the ID card complements and enhances the logo, presenting it within a functional and aesthetic layout. The logo serves as the foundation where I build based on my design style and values. Going forward from there, the ID card was build with design that complements and enhances the logo, presenting it within a functional and aesthetic layout.",

  // Row 4 (gallery)
  media: [
    { type: "image", src: asset("media/graphicdesign/idcard/idcard_1.png"), alt: "Personal monogram/logo" },
    { type: "image", src: asset("media/graphicdesign/idcard/idcard_1_1.png"), alt: "Personal monogram/logo variation" },
    { type: "image", src: asset("media/graphicdesign/idcard/idcard_mockup1.png"), alt: "ID card mockup 1" },
    { type: "image", src: asset("media/graphicdesign/idcard/idcard_mockup2.png"), alt: "ID card mockup 2" },
  ],

  // Row 5 (2 columns)
  descLeft: {
    sections: [
      {
        title: "Design Process",
        bullets: [
          { label: "Step 1: Monogram/Logo Design", text: "Designed a bold, meaningful monogram/logo reflecting my style and values." },
          { label: "Step 2: Personal ID Card Design", text: "Developed an ID card focusing on typography and layout, enhancing the logo’s impact." },
          { label: "Outcome", text: "A cohesive identity system that translates well from mark to application." },
        ],
      },
    ],
  },

  
};
