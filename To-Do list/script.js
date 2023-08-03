const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let edit = document.createElement("button");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.classList.add("edit");
        li.appendChild(edit);

        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    } else if (e.target.matches(".edit")) {
        const newTask = prompt("Enter a new task description:", e.target.parentElement.firstChild.textContent);
        if (newTask) {
            e.target.parentElement.firstChild.textContent = newTask;
        }
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();