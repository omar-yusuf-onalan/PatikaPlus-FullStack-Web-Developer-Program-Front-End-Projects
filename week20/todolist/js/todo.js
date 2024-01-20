let addTaskBtn = document.querySelector("#addTaskBtn");

let ulDOM = document.querySelector("#list");

addTaskBtn.addEventListener("click", handleAddTaskEvent);

function handleAddTaskEvent() {
    let task = document.querySelector("#task");

    if (!(task.value.length > 0)) {
        $('#toastError').toast('show')
        return;
    }

    let liElement = document.createElement("li");
    liElement.innerHTML = task.value;

    ulDOM.appendChild(liElement);

    task.value = "";

    $('#toastSuccess').toast('show')

}

ulDOM.addEventListener("click", handleCompleteTaskEvent);

function handleCompleteTaskEvent(event) {
    let clickedLi = event.target;
    clickedLi.classList.add("bg-success")
}

let removeTaskBtn = document.querySelector("#removeTaskBtn");

removeTaskBtn.addEventListener("click", handleRemoveTaskEvent);

function handleRemoveTaskEvent() {
    let liElementsUnderUl = document.querySelectorAll("ul > li");

    for(i = 0; i < liElementsUnderUl.length; i++) {
        if (liElementsUnderUl[i].classList.contains("bg-success")) {
            liElementsUnderUl[i].remove();
        }
    }
}