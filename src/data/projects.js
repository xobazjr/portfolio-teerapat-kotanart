import { v4 as uuidv4 } from "uuid";

const projects = [
    // MARK: goIT
    {
        id: uuidv4(),
        slug: "goIT",
        image:"/assets/img/projects/goIT.webp",
        title:"goIT",
        with:"Hackathon",
        alt:"goIT",
        type:"UX/UI Design",
        detail: `
            Passionate about designing modern, user-friendly web interfaces
            with a strong focus on UI/UX and visual design.

            I enjoy creating digital experiences that are not only visually
            appealing but also intuitive, responsive, and performance-driven
            across all devices.

            Dedicated to crafting clean layouts, smooth interactions,
            and meaningful user experiences that combine creativity
            with functionality.
        `,
        link_to: null
    },
    // MARK: Generative AI Prompt
    {
        id: uuidv4(),
        slug: "AI Prompt",
        image:"/assets/img/projects/Generative_AI.webp",
        title:"AI Prompt",
        with:"Hackathon", 
        alt:"Generative AI Prompt",
        type:"Generative AI",
        detail: `
            Developed a Generative AI image concept project focused on reimagining
            and transforming the visual identity of KMUTNB through AI-generated
            creative design. The project explored the integration of modern AI
            technologies with visual storytelling and digital presentation,
            earning 1st Runner-Up in the competition.
        `,
        link_to: {
            type: "Canva",
            url: "https://canva.link/unvto9l50a1xu1w"
        }
    },
    // MARK: Smart Medicine Box
    {
        id: uuidv4(),
        slug: "Smart Medicine",
        image:"/assets/img/projects/Smart_Medicine.webp",
        title:"SMB",
        with:"Teamwork", 
        alt:"Smart Medicine Box",
        type:"IoT",
        detail: `
            Developed Smart Medicine, an IoT-based automated medicine box designed
            to improve medication management and daily healthcare routines.
            The system was built using Arduino and NodeMCU technologies, allowing
            the device to synchronize with a mobile application where users can
            schedule medication times. The medicine box automatically opens at
            the designated time, providing a smart and user-friendly healthcare solution.
        `,
        link_to: {
            type: "GitHub",
            url: "https://github.com/xobazjr/smart-medicine"
        }
    },
    // MARK: Snowbeef
    {
        id: uuidv4(),
        slug: "Snowbeef",
        image:"/assets/img/projects/Snowbeef.webp",
        title:"Snowbeef",
        with:"Allmass Idea", 
        alt:"Snowbeef",
        type:"Frontend",
        detail: `
            Designed the UX/UI for goIT, a job-seeking platform focused on
            skill assessment and certification for users after completing
            qualification tests. The project emphasizes user-friendly navigation,
            modern interface design, and clear user experience flows to support
            career development and recruitment processes. Awarded 1st Runner-Up
            in the competition.
        `,
        link_to: {
            type: "Website",
            url: "https://www.snowbeefthailand.com/"
        }
    },
]

export default projects;