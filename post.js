const addButton = document.getElementById("notebutton")
addButton.addEventListener("click", function (e) {
    e.preventDefault();

    let newNoteInput = document.getElementById("noteinput");
    let notesList = document.getElementById("notes");
    let newListItem = document.createElement("li");
    newListItem.textContent = newNoteInput.value;
    notesList.appendChild(newListItem);
    newNoteInput.value = "";
});