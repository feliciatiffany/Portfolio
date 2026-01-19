// src/projects/techdesign/wehearyou.js

export default {
    slug: "wehearyou",
    title: "We Hear You",

    meta: {
        category: ["Interactive Installations", "Gesture Interaction", "3D Environment Building"],
        year: "2025",
        tools: ["Unity", "MediaPipe", "Python", "C#", "Projection + Live Testing"],
    },

    // Render order (reorder freely)
    sections: [
        { kind: "intro" },
        { kind: "youtubes", title: "Full Project Demonstration", itemsPath: "youtubes" },
        { kind: "media", title: "Documentation", layout: "slider", itemsPath: "row6.websiteScreens.media" },




        { kind: "twoCol", leftPath: "descLeft", rightPath: "descRight" },
        { kind: "media", title: "Posters + Gesture Guide", layout: "gallery", itemsPath: "media" },

        { kind: "youtubes", title: "Videos", itemsPath: "row6.youtubes" },

        { kind: "references", title: "References", itemsPath: "references" },
    ],

    intro:
        "We Hear You is a gesture-based interactive experience that invites players into a soft, reflective landscape, where they can encounter the memories, thoughts, and quiet truths of people from different generations, occupations, and backgrounds.\n\n" +
        "“Leave a thought for someone you’ll never meet.”\n" +
        "“Sometimes, the first step is simply to listen.”",

    youtubes: [{ videoId: "1wj80nTQ0a4" }],

    media: [
        { type: "image", src: "/media/techdesign/wehearyou/poster_1@300x.png", alt: "Poster 1" },
        { type: "image", src: "/media/techdesign/wehearyou/poster_2@300x.png", alt: "Poster 2" },
        { type: "image", src: "/media/techdesign/wehearyou/poster_3@300x.png", alt: "Poster 3" },
        { type: "image", src: "/media/techdesign/wehearyou/poster_4@300x.png", alt: "Poster 4" },
        { type: "image", src: "/media/techdesign/wehearyou/guide@300x.png", alt: "Gesture Guide" },
    ],

    descLeft: {
        title: "Issues Addressed & Concept",
        paragraphs: [
            "This project is a continuation of a piece I created, Speaking to the Wind — an interactive work where users spoke into an Arduino-based object and heard their own words reflected back as a form of personal reflection. We Hear You carries that thread forward. But instead of turning inward, it turns outward. It’s about seeing the world as whole because of the people in it, and understanding ourselves more deeply through the thoughts and feelings of others. While self-reflection matters, we often forget that the purpose of life isn’t only about ourselves, but to live in relation to others, to exist within community.",
            "We Hear You brings forward the quiet voices we often overlook: the child wondering if anyone understands them, the elder remembering love, the worker whose name no one remembers. It’s a space to honor emotional traces that rarely make it into the archive — not grand declarations, but small, honest truths that quietly shape what it means to be human.",
            "This work explores disconnection across generations and lived experiences, in an effort to build a shared, living monument to our common humanity — across time, space, and culture. My goal is to create a space where someone can feel heard, even if the speaker is no longer there, and to open the mind toward understanding.",
        ],
        sections: [
            {
                title: "Disconnection Across Generations and Lives",
                paragraphs: [
                    "In a world that moves fast, we often grow apart, not just by age, but by experience, by work, by silence. We Hear You creates a space to gently encounter voices unlike our own and to sit with them. It’s a reminder that listening, even quietly, can bring us closer.",
                ],
            },
            {
                title: "The Psychology of Listening and Being Seen",
                paragraphs: [
                    "Psychology tells us that being heard without interruption or judgment can be healing. This project offers that space — a space where players can listen with care, and maybe feel seen in return. Because sometimes, knowing someone has heard you is enough.",
                ],
            },
            {
                title: "Self-Understanding Through Others",
                paragraphs: [
                    "While looking inward matters, it’s often in meeting someone else’s truth that we begin to see ourselves more clearly. We Hear You invites players to reflect not just on what they feel but on what others carry and, in that reflection, find something of their own.",
                ],
            },
            {
                title: "A Living Archive to Emotional Traces of Shared Humanity",
                paragraphs: [
                    "The game doesn’t chase big narratives. Instead, it holds space for what often goes unrecorded — the worker’s quiet exhaustion, the child’s shy question, the elder’s soft remembering. These aren’t grand declarations, but the small, ordinary truths that shape a person.",
                ],
            },
        ],
    },

    descRight: {
        title: "Experience Description",
        paragraphs: [
            "Set in a vast pastel field with a glowing, blossoming tree at its center, the player explores the world and uncovers the message left behind. Falling light orbs and scattered antique objects represent memories and hopes embedded in each message. The player follows these sparks of light or approaches forgotten relics, hoping to find one carrying a message from someone else. No one knows which message will appear or who wrote it, but maybe it’s the one meant for them.",
            "Using hand gestures, players choose how to respond: to relate, to protect, to carry the message forward, or to let it go. Each response creates a different emotional path, subtly shifting the environment and storyline to reflect the connection formed between player and message. The experience is open-ended. Players are encouraged to explore the living archive and contribute to it.",
        ],
        sections: [
            {
                title: "Gesture Responses",
                bullets: [
                    "Open palm: “I relate to this.”",
                    "Fist: “I will protect this truth.”",
                    "Peace sign: “I will carry this for someone else.”",
                    "Hands forming a circle: “I release this memory” (letting go).",
                ],
            },
            {
                title: "Interaction & Environment",
                paragraphs: [
                    "Inspired by the idea of the Tree of Life, the blossoming tree at the center of the world offers each player the opportunity to leave behind a message of their own. Each one is saved and becomes part of the archive for future players to discover. As more people visit, the archive grows — and so does the tree, nourished by every new voice.",
                    "All movement and interaction in the experience are guided by hand gestures, built with MediaPipe and Python integrated into Unity. The use of physical movement is intentional to ask the player to be more present, to respond with attention, and to connect more deeply. It becomes something players not only feel emotionally, but physically, as if reaching out to touch memory.",
                    "The experience is supported by narration and gentle guidance to create a space for empathy, reflection, and stillness. Through this gesture-based interaction, We Hear You invites players to engage with memory, connection, and listening in a world built from the shared emotional fragments of others. My hope is to create a more connected community and to quietly remind us of the psychology, and the power, of listening to understand.",
                ],
            },
        ],
    },

    row6: {
        title: "Documentation + Videos",
        websiteScreens: {
            title: "Documentation",
            layout: "slider",
            media: [
                { type: "image", src: "/media/techdesign/wehearyou/documentation1.jpeg", alt: "Documentation 1" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation2.jpeg", alt: "Documentation 2" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation3.jpeg", alt: "Documentation 3" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation4.jpeg", alt: "Documentation 4" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation5.jpeg", alt: "Documentation 5" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation6.jpeg", alt: "Documentation 6" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation7.jpeg", alt: "Documentation 7" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation8.jpeg", alt: "Documentation 8" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation9.jpeg", alt: "Documentation 9" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation10.jpeg", alt: "Documentation 10" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation11.jpeg", alt: "Documentation 11" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation12.jpeg", alt: "Documentation 12" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation13.jpeg", alt: "Documentation 13" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation14.JPG", alt: "Documentation 14" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation15.jpeg", alt: "Documentation 15" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation16.JPG", alt: "Documentation 16" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation17.jpeg", alt: "Documentation 17" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation18.jpeg", alt: "Documentation 18" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation19.jpeg", alt: "Documentation 19" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation20.jpeg", alt: "Documentation 20" },
                { type: "image", src: "/media/techdesign/wehearyou/documentation21.jpeg", alt: "Documentation 21" },
            ],
        },
        youtubes: [
            { title: "Project Live Testing", videoId: "nVtlClpfk0Y" },
        ],
    },

    references: [
        { label: "Reddit thread: MediaPipe handtracking driving game (Unity3D)", href: "https://www.reddit.com/r/Unity3D/comments/16a726x/mediapipe_handtracking_driving_game/" },
        { label: "homuler/MediaPipeUnityPlugin", href: "https://github.com/homuler/MediaPipeUnityPlugin" },
        { label: "Arham-Aalam/MediaPipeUnityPlugin (macOS notes)", href: "https://github.com/Arham-Aalam/MediaPipeUnityPlugin?tab=readme-ov-file#macOS" },
        { label: "Handspew (Hugging Face Space) — tinazone", href: "https://huggingface.co/spaces/tinazone/handspew" },
        { label: "MediaPipe Hand Landmarker (official docs)", href: "https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker" },
        { label: "tina.zone — work page", href: "https://www.tina.zone/work.html" },
    ],
};
