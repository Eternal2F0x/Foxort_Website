const STORAGE_KEY = "foxdesk_tasks";


function getTasks() {

    const data =
        localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return [];
    }

    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}


function saveTasks(tasks) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );

}


function createTask(title, priority) {

    const tasks = getTasks();

    const task = {

        id: crypto.randomUUID(),

        title: title,

        priority: priority,

        completed: false,

        createdAt:
            new Date().toLocaleDateString("fr-FR")

    };


    tasks.push(task);

    saveTasks(tasks);

    renderTasks();

}


function toggleTask(id) {

    const tasks = getTasks();

    const task =
        tasks.find(
            task => task.id === id
        );


    if (!task) {
        return;
    }


    task.completed =
        !task.completed;


    saveTasks(tasks);

    renderTasks();

}


function priorityName(priority) {

    const names = {
        low: "Faible",
        medium: "Moyenne",
        high: "Haute"
    };

    return names[priority] || "Moyenne";

}


function renderTask(task) {

    return `

        <div
            class="task ${
                task.completed
                    ? "completed"
                    : ""
            }"
        >

            <button
                class="task-checkbox ${
                    task.completed
                        ? "checked"
                        : ""
                }"
                data-task-id="${task.id}"
            >
                ${
                    task.completed
                        ? "✓"
                        : ""
                }
            </button>


            <div class="task-info">

                <strong>
                    ${escapeHtml(task.title)}
                </strong>

                <span>
                    Créée le ${task.createdAt}
                </span>

            </div>


            <span
                class="badge ${task.priority}"
            >
                ${priorityName(task.priority)}
            </span>

        </div>

    `;

}


function renderTasks() {

    const tasks = getTasks();


    const taskList =
        document.querySelector(
            "#task-list"
        );


    const dashboardTasks =
        document.querySelector(
            "#dashboard-tasks"
        );


    if (taskList) {

        taskList.innerHTML =
            tasks.length === 0

                ? `
                    <div class="empty">
                        <div>🦊</div>

                        <h2>
                            Aucune tâche
                        </h2>

                        <p>
                            Crée ta première tâche.
                        </p>
                    </div>
                `

                : tasks
                    .map(renderTask)
                    .join("");

    }


    if (dashboardTasks) {

        dashboardTasks.innerHTML =
            tasks.length === 0

                ? `
                    <div class="empty">
                        <div>🦊</div>

                        <p>
                            Aucune tâche pour le moment.
                        </p>
                    </div>
                `

                : tasks
                    .slice(-5)
                    .reverse()
                    .map(renderTask)
                    .join("");

    }


    document
        .querySelectorAll(
            ".task-checkbox"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    toggleTask(
                        button.dataset.taskId
                    );

                }
            );

        });


    updateStatistics(tasks);

}


function updateStatistics(tasks) {

    const total =
        document.querySelector(
            "#task-count"
        );


    const completed =
        document.querySelector(
            "#completed-count"
        );


    if (total) {

        total.textContent =
            tasks.length;

    }


    if (completed) {

        completed.textContent =
            tasks.filter(
                task => task.completed
            ).length;

    }

}


function escapeHtml(value) {

    const element =
        document.createElement("div");

    element.textContent = value;

    return element.innerHTML;

}


export function initializeTasks() {

    renderTasks();


    const form =
        document.querySelector(
            "#task-form"
        );


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const title =
                document.querySelector(
                    "#task-name"
                ).value.trim();


            const priority =
                document.querySelector(
                    "#task-priority"
                ).value;


            if (!title) {
                return;
            }


            createTask(
                title,
                priority
            );


            form.reset();


            document
                .querySelector("#task-modal")
                .classList
                .remove("open");

        }
    );

}