
console.log('projects loaded');

const projects = [
     {
        title: "My Portfolio",
        classification: "Personal",
        description: "My personal portfolio which you are viewing right now! Built to showcase my skills, experiences, and projects.",
        thumbnail: "public/project-images/portfolio/thumbnail.png",
        stack: ["HTML" , "CSS", "Javascript"],
        linkLive: "",
        linkGithub: "https://github.com/ElliotJcbH/elliotjcbh-portfolio",
        about: [
            "My personal portfolio which you are viewing right now! Built to showcase my skills, experiences, and projects.",
            "I decided to create this portfolio so I have something to do during my spare time and brush up on my vanilla skills, but most importantly because I am nearing the day when I enter the work force."
        ],
        features: {}
    },
    {
        title: "Atletik",
        classification: "Capstone",
        description: "Atletik is a mobile application with basic social media features built for local sports events and observing game scores live.",
        thumbnail: "public/project-images/atletik/atletik-icon.png",
        stack: ["React Native", "Expo", "Node", "Typescript", "PostgreSQL", "Supabase"],
        linkLive: "https://atletikadmin.vercel.app/",
        linkGithub: "",
        about: [
            "Atletik is a mobile application with basic social media features built for local sports events and observing game scores live.",
            "This project was my very first full-fledged mobile application. I decided to go with React Native because I was way more familiar with JS/TS syntax than native programming languages like Kotlin or Swift. This was built in-collaboration with the Taytay Sports Development Office, who also holds sports events -- which at some point we tested out live scoring with.",
        ],
    },
    {
        title: "Juria's Garden Hotel",
        classification: "School Project",
        description: "Juria's Garden Hotel is a hotel booking web application that allows users to book rooms, view room details, and manage their bookings.",
        thumbnail: "",
        stack: ["Svelte", "Javascript", "HTML", "SCSS", "PostgreSQL", "Supabase"],
        about: [
            "Juria's Garden Hotel is a hotel booking web application that allows users to book rooms, view room details, and manage their bookings."
        ]
    },
    {
        title: "Luxuria",
        classification: "School Project",
        description: "Luxuria is an e-commerce web application specifically made for jewelry products. This web application was our first attempt at creating a fully operational CRUD.",
        thumbnail: "",
        stack: ["Svelte", "Javascript", "HTML", "SCSS", "PostgreSQL", "Supabase"],
        about: [
            "Luxuria is an e-commerce web application specifically made for jewelry products. This web application was our first attempt at creating a fully operational CRUD."
        ],
    },
    {
        title: "Katapusan",
        classification: "Collaborative",
        description: "Katapusan is an interactive short film heavily based on the interactivity features of works such as Black Mirror: Bandersnatch. Users can make choices that affect the storyline and outcome of the film.",
        thumbnail: "",
        stack: ["React", "Javascript", "CSS"],
        about: [
            "Katapusan is an interactive short film heavily based on the interactivity features of works such as Black Mirror: Bandersnatch. Users can make choices that affect the storyline and outcome of the film.",
        ]
    }
]

export default projects;