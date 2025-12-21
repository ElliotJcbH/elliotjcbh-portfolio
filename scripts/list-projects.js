import projects from './constants/projects.js';

const projectContainer = document.querySelector('#project-container');

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

    projectCard.addEventListener('click', () => openProjectDetails(project));
    
    // const thumbnailElement = document.createElement('img');
    // thumbnailElement.src = project.thumbnail;
    // projectElement.appendChild(thumbnailElement);

});

const mainContainer = document.querySelector('#main-container');
const projectModal = document.querySelector('#project-modal');
const projectBackButton = document.querySelector('#project-back-button');
projectBackButton.addEventListener('click', () => closeProjectDetails());

let lastScrollPosition = 0;

function openProjectDetails(project) {

    lastScrollPosition = window.scrollY;

    mainContainer.classList.add('hidden');
    projectModal.classList.add('showing');

    mainContainer.style.height = '101vh';
    mainContainer.style.overflow = 'hidden';

    const projectTitle = document.querySelector('#project-title');
    projectTitle.textContent = project.title;

    const thumbnailContainer = document.querySelector('#modal-thumbnail-container');

}

function closeProjectDetails() {

    mainContainer.classList.remove('hidden');
    projectModal.classList.remove('showing');

    mainContainer.style.height = '';
    mainContainer.style.overflow = '';

    window.scrollTo(0, lastScrollPosition);

}