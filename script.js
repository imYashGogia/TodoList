const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const errorText = document.getElementById("error-text");

function addTask() {
  if (inputBox.value === "") {
    errorText.style.display = "block";
  } else {
    errorText.style.display = "none";
    //Used for adding Tasks
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    //Used for adding cross icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("todo-data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("todo-data");
}
showData();
