
const projectContainer = document.querySelector('#project-container');

const projects = [
     {
        title: "My Portfolio",
        classification: "Personal",
        description: "My personal portfolio which you are viewing right now! Built to showcase my skills, experiences, and projects.",
        thumbnail: "",
        stack: ["HTML" , "CSS", "Javascript"],
    },
    {
        title: "Atletik",
        classification: "Capstone",
        description: "Atletik is a mobile application with basic social media features built for local sports events and games live.",
        thumbnail: "",
        stack: ["React Native", "Expo", "Node", "Typescript", "PostgreSQL", "Supabase"],
    },
    {
        title: "Juria's Garden Hotel",
        classification: "School Project",
        description: "Juria's Garden Hotel is a hotel booking web application that allows users to book rooms, view room details, and manage their bookings.",
        thumbnail: "",
        stack: ["Svelte", "Javascript", "HTML", "SCSS", "PostgreSQL", "Supabase"],
    },
    {
        title: "Luxuria",
        classification: "School Project",
        description: "Luxuria is an e-commerce web application specifically made for jewelry products. This web application was our first attempt at creating a fully operational CRUD.",
        thumbnail: "",
        stack: ["Svelte", "Javascript", "HTML", "SCSS", "PostgreSQL", "Supabase"],
    },
    {
        title: "Katapusan",
        classification: "Collaborative",
        description: "Katapusan is an interactive short film heavily based on the interactivity features of works such as Black Mirror: Bandersnatch. Users can make choices that affect the storyline and outcome of the film.",
        thumbnail: "",
        stack: ["React", "Javascript", "CSS"],
    }
]

projects.forEach(project => {
    const projectCard = document.createElement('button');
    projectCard.classList.add('project-card');

    const contentContainerElement = document.createElement('div');
    projectCard.appendChild(contentContainerElement);

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    const titleElement = document.createElement('h1');
    titleElement.textContent = project.title;
    projectHeader.appendChild(titleElement);

    const classificationElement = document.createElement('p');
    classificationElement.textContent = project.classification;
    projectHeader.appendChild(classificationElement);

    contentContainerElement.appendChild(projectHeader);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;
    contentContainerElement.appendChild(descriptionElement);

    const stackList = document.createElement('div');
    stackList.classList.add('stack-list');

    project.stack.forEach((tech, index) => {
        const techElement = document.createElement('div');
        techElement.classList.add('stack-tag');
        techElement.textContent = tech;
        stackList.appendChild(techElement);

        if(index < project.stack.length - 1) {
            const separator = document.createElement('span');
            separator.classList.add('stack-divider');
            separator.textContent = '-';
            stackList.appendChild(separator);
        }
    });

    contentContainerElement.appendChild(stackList);

    projectContainer.appendChild(projectCard);
    
    // const thumbnailElement = document.createElement('img');
    // thumbnailElement.src = project.thumbnail;
    // projectElement.appendChild(thumbnailElement);

});

function openProjectDetails(projectTitle) {

}