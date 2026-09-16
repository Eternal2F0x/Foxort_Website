import {
    initializeTasks
} from "./tasks.js";


const pages = {

    dashboard: {
        title: "Dashboard",
        description:
            "Bienvenue dans ton espace d'organisation."
    },

    tasks: {
        title: "Mes tâches",
        description:
            "Organise ton travail."
    },

    projects: {
        title: "Projets",
        description:
            "Gère tes projets personnels."
    },

    calendar: {
        title: "Planning",
        description:
            "Organise ton temps."
    },

    notes: {
        title: "Notes",
        description:
            "Ton espace de notes."
    },

    admin: {
        title: "Administration",
        description:
            "Gestion du système."
    },

    settings: {
        title: "Paramètres",
        description:
            "Configuration de FoxDesk."
    }

};


function navigate(pageName) {

    if (!pages[pageName]) {
        pageName = "dashboard";
    }


    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active"
            );

        });


    document
        .getElementById(pageName)
        ?.classList.add("active");


    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.page === pageName
            );

        });


    document
        .querySelector("#page-title")
        .textContent =
        pages[pageName].title;


    document
        .querySelector("#page-description")
        .textContent =
        pages[pageName].description;

}


/* Navigation */

document
    .querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                navigate(
                    button.dataset.page
                );

            }
        );

    });


document
    .querySelectorAll("[data-page-button]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                navigate(
                    button.dataset.pageButton
                );

            }
        );

    });


/* Modal */

const modal =
    document.querySelector(
        "#task-modal"
    );


const addTask =
    document.querySelector(
        "#add-task"
    );


const closeModal =
    document.querySelector(
        "#close-modal"
    );


const cancelModal =
    document.querySelector(
        "#cancel-modal"
    );


function openModal() {

    modal.classList.add("open");

}


function closeTaskModal() {

    modal.classList.remove("open");

}


addTask?.addEventListener(
    "click",
    openModal
);


closeModal?.addEventListener(
    "click",
    closeTaskModal
);


cancelModal?.addEventListener(
    "click",
    closeTaskModal
);


modal?.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeTaskModal();

        }

    }
);


/* Initialisation */

initializeTasks();