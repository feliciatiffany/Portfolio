export default {
  slug: "book-indo",
  title: "Book Design: Wonder of Indonesia",

  meta: {
    category: ["Communication Design", "Typhography"],
    year: "2024",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Plotter"],
  },

  intro:
    "A booklet design themed “Fun Facts About Indonesia.” The project celebrates Indonesia’s cultural heritage, biodiversity, and trivia through typography-led storytelling—combining modern typefaces and engaging layouts to educate and inspire.",

  // Row 4: all pages become the gallery

  media: [
    // slider 1 pages
    { type: "image", src: "/media/graphicdesign/bookIndo/page-01.png", alt: "Book page 1" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-02.jpg", alt: "Book page 2" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-02b.png", alt: "Book page 2 (variation)" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-03.png", alt: "Book page 3" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-04b.jpg", alt: "Book page 4 (variation B)" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-05.jpg", alt: "Book page 5" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-06.jpg", alt: "Book page 6" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-07.png", alt: "Book page 7" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-07a.png", alt: "Book page 7 (detail A)" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-07b.png", alt: "Book page 7 (detail B)" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-08.png", alt: "Book page 8" },
    { type: "image", src: "/media/graphicdesign/bookIndo/page-09.png", alt: "Book page 9" },

  ],
  slider: {
  title: "Book Mockups / Spreads",
  items: [
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-01-title.png", alt: "Mockup title" },
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-01-front.png", alt: "Mockup front cover" },
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-02.png", alt: "Mockup spread 2" },
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-03.png", alt: "Mockup spread 3" },
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-04.png", alt: "Mockup spread 4" },
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-05.png", alt: "Mockup spread 5" },
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-06.png", alt: "Mockup spread 6" },
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-07.png", alt: "Mockup spread 7" },
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-08.png", alt: "Mockup spread 8" },
    { type: "image", src: "/media/graphicdesign/bookIndo/mock-09.png", alt: "Mockup spread 9" },
  ],
},


  // Row 5 (2 columns): overview + outcome on the left, process on the right
  descLeft: {
    sections: [
      {
        title: "Project Overview",
        html:
          "This project focuses on designing a visually captivating booklet themed “Fun Facts About Indonesia.” " +
          "The booklet celebrates Indonesia’s cultural heritage, biodiversity, and intriguing trivia through a typographic lens. " +
          "By combining modern typefaces and engaging layouts, the project crafts a narrative that educates and inspires, " +
          "while showcasing typography as a storytelling medium.",
      },
      {
        title: "Outcome",
        html:
          "<strong>Outcome:</strong> A cohesive, multi-page booklet that uses typography to celebrate Indonesia’s diversity—" +
          "balancing aesthetic appeal with educational content.",
      },
    ],
  },

  descRight: {
    sections: [
      {
        title: "Design Process",
        bullets: [
          {
            label: "Step 1: Concept Development —",
            text: "Defined the theme and concept, focusing on Indonesia’s diversity and fascinating facts.",
          },
          {
            label: "Step 2: Typeface Selection —",
            text: "Paired Raleway and Roboto to balance modern elegance with readability and clarity.",
          },
          {
            label: "Step 3: Visual Hierarchy & Layout —",
            text: "Designed each page with unique yet cohesive layouts using tonal contrasts and typographic refinements.",
          },
          {
            label: "Step 4: Integration of Visuals —",
            text: "Added minimal illustrations and graphic elements to support the typography and enhance the narrative.",
          },
        ],
      },
    ],
  },
};
