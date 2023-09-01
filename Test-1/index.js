// Get elements from the DOM
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

// Add a new task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        // Add event listeners for checkbox and delete button
        const checkbox = li.querySelector(".checkbox");
        const deleteButton = li.querySelector(".delete-button");

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
        });

        deleteButton.addEventListener("click", () => {
            li.remove();
            updateTaskCount();
        });

        taskList.appendChild(li);
        taskInput.value = "";
        updateTaskCount();
    }
});

// Function to update task count
function updateTaskCount() {
    taskCount.textContent = taskList.children.length;
}
