import renderNoteList from "./renderNoteList.js";
import renderNotePane from "./renderNotePane.js";
import getFormattedDate from "./getDate.js";
import { saveData } from "./localStorageManagement.js";

const myForm = document.getElementById("myForm");

export default function addNote(isPinned, notesData) {
  const formData = new FormData(myForm);
  const title = formData.get("title");
  const author = formData.get("author");
  const youNote = formData.get("youNote");

  const newId = `note-${Date.now()}`;

  const newNote = {
    id: newId,
    title: title,
    author: author,
    date: getFormattedDate(),
    content: youNote,
    isPinned: isPinned,
  };

  notesData.push(newNote);

  renderNoteList(notesData);
  renderNotePane(notesData);
  saveData(notesData);

  myForm.reset();
}
