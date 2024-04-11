function createNote() {
  const userInput = document.getElementById("input").value.trim();
  const userTopic = document.getElementById("topic").value.trim();
  if (userInput !== "") {
    const notesContainer = document.getElementById("notesContainer");
    const noteDiv = document.createElement("div");
    const pinDiv = document.createElement("div");
    const noteContentDiv = document.createElement("div");

    noteDiv.classList.add("note");
    pinDiv.classList.add("pin");
    noteContentDiv.classList.add("note-content");

    noteContentDiv.textContent = userInput;

    noteDiv.appendChild(pinDiv);
    noteDiv.appendChild(noteContentDiv);
    notesContainer.appendChild(noteDiv);

    document.getElementById("input").value = "";
  }
}
