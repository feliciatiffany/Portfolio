// src/projects/techdesign/dialogueWithTheWind.js

export default {
  slug: "dialogue-with-the-wind",
  title: "Dialogue with the Wind",

  meta: {
    category: "Tech Designer",
    year: "2024",
    tools: ["p5.js", "Arduino", "NeoPixel LEDs", "PIR Sensor", "WebSockets", "Installation"],
  },

  // Row 3
  intro:
    "“Dialogue with the Wind” is an interactive installation that invites self-reflection through a responsive field of fiber-optic grass. " +
    "Participants speak honestly into the space; the installation responds through shifting color, ambient flow, and sound—turning private emotions into a gentle, sensory dialogue.",

  // Row 4 (gallery grid)
  media: [
    { type: "image", src: "/media/techdesign/dialogue/dialogue_main.jpg", alt: "Main visual" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_2.JPG", alt: "Slide 2" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_3.JPG", alt: "Slide 3" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_4.JPG", alt: "Slide 4" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_5.JPG", alt: "Slide 5" },

    { type: "image", src: "/media/techdesign/dialogue/dialogue_green.jpg", alt: "Green variation" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_blue.jpg", alt: "Blue variation" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_purple.jpg", alt: "Purple variation" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_pink.jpg", alt: "Pink variation" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_white.jpg", alt: "White variation" },

    { type: "image", src: "/media/techdesign/dialogue/dialogue_process.JPG", alt: "Process 1" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_process2.JPG", alt: "Process 2" },
    { type: "image", src: "/media/techdesign/dialogue/dialogue_process3.JPG", alt: "Process 3" },
    { type: "image", src: "/media/techdesign/dialogue/IMG_0617.JPG", alt: "Build photo 1" },
    { type: "image", src: "/media/techdesign/dialogue/IMG_0619.JPG", alt: "Build photo 2" },
  ],

  // Row 5 (2 columns)
  descLeft: {
    title: "Abstract",
    paragraphs: [
      "“Dialogue with the Wind” opens a gentle conversation between individuals and their inner selves. In a fast-paced, hyperconnected world, the work creates a quiet, judgment-free space for introspection and emotional release.",
      "Participants speak openly while touching a field of fiber-optic grass. Their words are carried by the metaphorical “wind” and translated into responsive shifts in color and ambient flow, mirroring the energy and tone of the voice.",
      "The installation also replays the user’s recorded words—inviting self-confrontation through listening, and encouraging acceptance and understanding of one’s inner narrative.",
      "Rooted in self-reflection and emotional awareness, the work serves as both a mirror and a mentor—asking people to pause, look inward, and reconnect with the most essential voice: their own.",
    ],
  },

  descRight: {
    title: "Concept + System Overview",
    paragraphs: [
      "The installation explores self-reflection through an immersive, sensory-driven interaction. A field of swaying fiber-optic grass reacts to presence and voice energy, shifting colors based on amplitude and movement.",
      "Symbolism:",
    ],
    bullets: [
      "Wind as metaphor — change, emotion, freedom; spoken words are carried away but reflected back.",
      "Grass as responsive medium — tactile + visual feedback for the speaker’s emotional energy.",
      "Self-confrontation through sound — replaying the participant’s words encourages reflection.",
    ],
    subTitle: "Core Components",
    table: {
      headers: ["Component", "Functionality"],
      rows: [
        ["Microphone (Laptop / p5.js)", "Captures speech and converts it into amplitude data."],
        ["PIR Motion Sensor", "Detects presence and movement in the space."],
        ["Amplitude Analysis", "Estimates emotional intensity from voice energy."],
        ["NeoPixel LEDs + Fiber-Optic Grass (Arduino)", "Color shifts based on voice + motion."],
        ["Audio Playback", "Replays the user’s recorded words for reflection."],
      ],
    },
  },

  // Row 6 (Slider + Video)
  row6: {
    title: "Mockups + Process",
    layout: "slider",
    items: [
      { type: "image", src: "/media/techdesign/dialogue/dialogue_mockup%20person@300x-100.jpg", alt: "Mockup 1" },
      { type: "image", src: "/media/techdesign/dialogue/dialogue_mockup2@300x-100.jpg", alt: "Mockup 2" },
      { type: "image", src: "/media/techdesign/dialogue/dialogue_mockup3@300x-100.jpg", alt: "Mockup 3" },
      { type: "image", src: "/media/techdesign/dialogue/process1.jpg", alt: "Process step 1" },
      { type: "image", src: "/media/techdesign/dialogue/process2.jpg", alt: "Process step 2" },
      { type: "image", src: "/media/techdesign/dialogue/process3.jpg", alt: "Process step 3" },
      { type: "image", src: "/media/techdesign/dialogue/process4.jpg", alt: "Process step 4" },
      { type: "image", src: "/media/techdesign/dialogue/process5.jpg", alt: "Process step 5" },
      { type: "image", src: "/media/techdesign/dialogue/process6.jpg", alt: "Process step 6" },
    ],
  },


  youtube: {
    title: "Project Video",
    videoId: "HuoycS263FM",
    url: "https://www.youtube.com/watch?v=HuoycS263FM",
  },

  references: [
    { label: "Thoughtforms (Science Gallery Melbourne)", href: "https://melbourne.sciencegallery.com/mental-exhibits/thoughtforms" },
    { label: "Review: MENTAL – Colours of Wellbeing", href: "https://artandmarket.net/reviews/2022/10/24/review-of-mental-colours-of-wellbeing" },
    { label: "Doing Nothing With AI (Emanuel Gollob)", href: "https://www.emanuelgollob.com/doing-nothing-with-ai/" },
    { label: "MENTAL Exhibition (ArtScience Museum)", href: "https://www.marinabaysands.com/museum/exhibitions/mental.html" },
    { label: "WHITEvoid – Fluidic (My Modern Met)", href: "https://mymodernmet.com/whitevoid-fluidic/" },
    { label: "Arduino Sound Level Meter & Spectrum Analyzer", href: "https://blog.yavilevich.com/2016/08/arduino-sound-level-meter-and-spectrum-analyzer/" },

  ],
};
