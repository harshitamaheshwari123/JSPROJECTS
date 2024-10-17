

const inputtask = document.getElementById("task");
const priorityinput = document.getElementById("priority");
const deadlineoftask = document.getElementById("taskdate");
const addtaskbutton = document.getElementById("addtask");
const listoftask = document.getElementById("finalresult");

addtaskbutton.addEventListener("click", () => {
    const task = inputtask.value;
    const priority = priorityinput.value;
    const deadline = deadlineoftask.value;
    if (task.trim === "" || deadline === "") {
        alert("Please select an upcoming date for the deadline");
        return;
    }

    const selectdate = new Date(deadline);
    const currentdate = new Date();

    if (selectdate <= currentdate) {
        alert("Please select an upcoming date for the deadline");
        return;
    }
    
    const taskitem = document.createElement("div");
    taskitem.classList.add("task");
    taskitem.innerHTML = `<p>${task}</p>
    <p>Priority: ${priority}</p>
    <p>Deadline: ${deadline}</p>
    <button class="mark">Mark Done</button>
    `;

    listoftask.appendChild(taskitem);

    task.value = "";
    priority.value = "top";
    deadline.value = "";

});

listoftask.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark")) {
        const taskitem = event.target.parentElement;
        taskitem.style.backgroundColor = "#f2f2f2";
        event.target.disabled = true;
    }
});