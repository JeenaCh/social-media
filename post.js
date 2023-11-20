const addButton = document.getElementById("notebutton")
addButton.addEventListener("click", function (e) {
    e.preventDefault();

    let newNoteInput = document.getElementById("noteinput");
    let notesList = document.getElementById("notes");
    let newListItem = document.createElement("li");
    newListItem.textContent = newNoteInput.value;
    notesList.appendChild(newListItem);
    newNoteInput.value = "";
    let newDeleteButton = document.createElement("button");
    newListItem.appendChild(newDeleteButton);
    newDeleteButton.textContent = "delete";
    newDeleteButton.addEventListener("click", function (e){
        newListItem.remove();
    })
});