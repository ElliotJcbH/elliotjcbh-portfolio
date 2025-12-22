import projects from './constants/projects.js';

const body = document.querySelector('body');
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

const projectDate = document.querySelector('#project-modal-date');
const projectClassification = document.querySelector('#project-modal-classification');
const about = document.querySelector('#project-modal-about');

const featureContainer = document.querySelector('#feature-container');

// window.history.replaceState({ modalOpen: false }, '', window.location.href);

let lastScrollPosition = 0;
let modalOpen = false;

function openProjectDetails(project) {

    // console.log(window.history);
    modalOpen = true;
    window.history.pushState({ modalOpen: true }, '', window.location.href);

    about.innerHTML = '';
    featureContainer.innerHTML = '';

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

   
    appendAbout(project);
    appendFeatures(project);

}

function closeProjectDetails() {

    mainContainer.classList.remove('hidden');
    projectModal.classList.remove('showing');

    liveLink.classList.remove('unavailable');
    githubLink.classList.remove('unavailable');
    liveLink.style.pointerEvents = 'all';
    githubLink.style.pointerEvents = 'all';

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

function appendAbout(project) {

    project.about.forEach((paragraph) => {
        const p = document.createElement('p');
        p.textContent = paragraph;

        about.appendChild(p);
    })

}

function appendFeatures(project) {

    project.features.forEach((feature) => {
        const featureCard = document.createElement('li');
        featureCard.classList.add('feature-card');

        const h3 = document.createElement('h3');
        h3.textContent = feature.headline;
        const p = document.createElement('p');
        p.textContent = feature.desc;

        featureCard.appendChild(h3);
        featureCard.appendChild(p);

        if(feature.visuals.length > 0) {
            const carousell = document.createElement('div');
            carousell.classList.add('carousell');

            feature.visuals.forEach((visual) => {
                const img = document.createElement('img');
                img.src = visual;
                carousell.appendChild(img);

                // img.addEventListener('click', () => expandImage(visual));
                img.addEventListener('click', () => expandImageCarousell(visual, feature.visuals));
            })

            featureCard.appendChild(carousell);
        }

        featureContainer.appendChild(featureCard);
    })

}

function expandImage(src) {
    const dialog = document.createElement('div');
    dialog.id = 'expanded-image';

    const img = document.createElement('img');
    img.src = src;

    dialog.appendChild(img);
    body.appendChild(dialog);

    // body.style.overflow = 'hidden';

    dialog.focus();
}

function expandImageCarousell(src, allSrcs) {

    const dialog = document.createElement('div');
    dialog.id = 'expanded-image';

    let selectedImageIndex = allSrcs.findIndex(x => x === src);

    const img = document.createElement('img');
    img.src = src;
    const pager = document.createElement('span');
    pager.id = 'expanded-image-pager';
    pager.textContent = `${selectedImageIndex + 1} / ${allSrcs.length}`;


    const close = document.createElement('button');
    close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`;
    close.id = 'expanded-image-close-button';
    const leftButton = document.createElement('button');
    leftButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>`;
    leftButton.id = 'expanded-image-left-button';
    const rightButton = document.createElement('button');
    rightButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>`;
    rightButton.id = 'expanded-image-right-button';
    const bottom = document.createElement('div');
    bottom.id = 'expanded-image-bottom';

    bottom.appendChild(leftButton);
    bottom.appendChild(pager);
    bottom.appendChild(rightButton);
    bottom.appendChild(close);
    dialog.appendChild(img);
    dialog.appendChild(bottom);
    body.appendChild(dialog);

    dialog.focus();

    leftButton.addEventListener('click', (e) => {
        e.stopPropagation();

        selectedImageIndex = selectedImageIndex <= 0 ? allSrcs.length - 1 : selectedImageIndex - 1;
        img.src = allSrcs[selectedImageIndex];
        pager.textContent = `${selectedImageIndex + 1} / ${allSrcs.length}`;
    })

    rightButton.addEventListener('click', (e) => {
        e.stopPropagation(); 

        selectedImageIndex = selectedImageIndex >= allSrcs.length - 1 ? 0 : selectedImageIndex + 1;
        img.src = allSrcs[selectedImageIndex];
        pager.textContent = `${selectedImageIndex + 1} / ${allSrcs.length}`;
    })

    close.addEventListener('click', () => {
        dialog.remove();
    })

    dialog.addEventListener('click', () => {
        dialog.remove();
    })

}