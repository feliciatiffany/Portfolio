// src/projects/others/theTrueLight.js
// (or wherever you store "Others" projects)

export default {
  slug: "theTrueLight",
  title: "The True Light",

  meta: {
    category: ["Others", "Short Movie", "World Building / Critical Utopias", "Video Editing"],
    year: "2025",
    tools: ["Premiere Pro", "Photoshop", "After Effects"],
  },

  // Render order (reorder freely)
  sections: [
    { kind: "intro" },

    { kind: "youtube", title: "Short Movie", videoIdPath: "youtube.videoId" },

    { kind: "twoCol", leftPath: "descLeft", rightPath: "descRight" },

    { kind: "media", title: "Film Stills + Documentation", layout: "gallery", itemsPath: "documentation" },

    { kind: "media", title: "Behind the Scenes + Process", layout: "slider", itemsPath: "process" },
  ],

  intro:
    "Julian Bleecker describes strong design fiction as “everyday leftovers” from possible worlds—signals of big societal shifts that reveal implications, not forecasts. " +
    "This project is worldbuilding through the lens of the uncanny: imagine a near future we could realistically live in. " +
    "What still feels familiar and comforting, and what feels subtly off or strangely different?",

  youtube: {
    title: "Project Video",
    videoId: "XBf0mxK4v6c",
    url: "https://www.youtube.com/watch?v=XBf0mxK4v6c",
  },

  // Left column: quick facts
  descLeft: {
    title: "Project Details",
    bullets: [
      { label: "Title:", text: "The True Light" },
      { label: "Duration:", text: "3 minutes 45 seconds (includes behind-the-scenes)" },
      { label: "Format:", text: "Short movie + process documentation" },
    ],
    

  },

  // Right column: synopsis + meaning
  descRight: {
    title: "Synopsis",
    paragraphs: [
      "The True Light tells the story of Nyi Roro Nirmana, a spy who receives a major mission to infiltrate and eliminate the boss of a shady corporation.",
      "With the 'The True Light' flashlight, Nirmana carries out her mission with the help of technology to access information, hack data, provide explanations, and even serve as a weapon.",
      "Just like its name, The True Light brings out all knowledge and the truth about this world.",
    ],
  },

  // These match your folder exactly: /media/others/theTrueLight/...
  documentation: [
    { type: "image", src: "/media/others/theTrueLight/documentation1.jpg", alt: "Documentation 1" },
    { type: "image", src: "/media/others/theTrueLight/documentation2.jpg", alt: "Documentation 2" },
    { type: "image", src: "/media/others/theTrueLight/documentation3.jpg", alt: "Documentation 3" },
    { type: "image", src: "/media/others/theTrueLight/documentation4.jpg", alt: "Documentation 4" },
  ],

  process: [
    { type: "image", src: "/media/others/theTrueLight/process1.jpg", alt: "Process 1" },
    { type: "image", src: "/media/others/theTrueLight/process2.jpg", alt: "Process 2" },
    { type: "image", src: "/media/others/theTrueLight/process3.jpg", alt: "Process 3" },
    { type: "image", src: "/media/others/theTrueLight/process4.png", alt: "Process 4" },
    { type: "image", src: "/media/others/theTrueLight/process5.JPG", alt: "Process 5" },
    { type: "image", src: "/media/others/theTrueLight/process6.JPG", alt: "Process 6" },
    { type: "image", src: "/media/others/theTrueLight/process7.JPG", alt: "Process 7" },
    { type: "image", src: "/media/others/theTrueLight/process8.JPG", alt: "Process 8" },
    { type: "image", src: "/media/others/theTrueLight/process9.JPG", alt: "Process 9" },
    { type: "image", src: "/media/others/theTrueLight/process10.JPG", alt: "Process 10" },
    { type: "image", src: "/media/others/theTrueLight/process11.JPG", alt: "Process 11" },
    { type: "image", src: "/media/others/theTrueLight/process12.JPG", alt: "Process 12" },
  ],
};
