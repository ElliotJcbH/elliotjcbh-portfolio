import projects from './constants/projects.js';

const projectContainer = document.querySelector('#project-container');

projects.forEach(project => {
    const projectCard = document.createElement('button');
    projectCard.classList.add('project-card');

    const projectCardThumbnailContainer = document.createElement('div');
    projectCardThumbnailContainer.classList.add('project-card-thumbnail-container');
    const projectCardImage = document.createElement('img');
    projectCardImage.src = project.thumbnail;
    projectCardThumbnailContainer.appendChild(projectCardImage);
    projectCard.appendChild(projectCardThumbnailContainer);

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

    projectCard.addEventListener('click', () => openProjectDetails(project));
    
    // const thumbnailElement = document.createElement('img');
    // thumbnailElement.src = project.thumbnail;
    // projectElement.appendChild(thumbnailElement);

});

const mainContainer = document.querySelector('#main-container');
const projectModal = document.querySelector('#project-modal');
const projectBackButton = document.querySelector('#project-back-button');
projectBackButton.addEventListener('click', () => closeProjectDetails());

const projectThumbnail = document.querySelector('#project-thumbnail');
const projectTitle = document.querySelector('#project-modal-title');
const liveLink = document.querySelector('#project-link');
const githubLink = document.querySelector('#github-link');


const about = document.querySelector('#project-modal-about');
const projectDate = document.querySelector('#project-modal-date');
const projectClassification = document.querySelector('#project-modal-classification');

// window.history.replaceState({ modalOpen: false }, '', window.location.href);

let lastScrollPosition = 0;
let modalOpen = false;

function openProjectDetails(project) {

    // console.log(window.history);
    modalOpen = true;
    window.history.pushState({ modalOpen: true }, '', window.location.href);

    about.innerHTML = '';

    lastScrollPosition = window.scrollY;

    mainContainer.classList.add('hidden');
    projectModal.classList.add('showing');

    projectModal.focus();

    projectThumbnail.src = project.thumbnail;
    projectTitle.textContent = project.title;

    liveLink.href = project.linkLive;
    githubLink.href = project.linkGithub;

    if(!project.linkLive || project.linkLive.trim() === "") {
        liveLink.classList.add('unavailable');
        liveLink.style.pointerEvents = 'none';  
    }
    if(!project.linkGithub || project.linkGithub.trim() === "") {
        githubLink.classList.add('unavailable');
        githubLink.style.pointerEvents = 'none';  
    }

    projectClassification.textContent = project.classification;
    projectDate.textContent = project.date;

    project.about.forEach((paragraph) => {
        const p = document.createElement('p');
        p.textContent = paragraph;

        about.appendChild(p);
    })

    const thumbnailContainer = document.querySelector('#modal-thumbnail-container');

}

function closeProjectDetails() {

    mainContainer.classList.remove('hidden');
    projectModal.classList.remove('showing');

    liveLink.classList.remove('unavailable');
    githubLink.classList.remove('unavailable');

    mainContainer.style.height = '';
    mainContainer.style.overflow = '';

    setTimeout(() => {
        projectModal.scrollTo(0, 0);
    }, 1000)

}

window.addEventListener('popstate', function(event) {

    if(modalOpen === true) {
        closeProjectDetails();
        window.history.pushState({ modalOpen: false }, '', window.location.href);
    }

});