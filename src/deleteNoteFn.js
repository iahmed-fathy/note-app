import { saveData } from "./localStorageManagement";
import renderNoteList from "./renderNoteList";
import renderNotePane from "./renderNotePane";

export default function deleteNoteFn(notesData) {
  document.querySelectorAll(".deleteNote").forEach((btn) => {
    btn.replaceWith(btn.cloneNode(true));
  });

  document.querySelectorAll(".deleteNote").forEach((note) => {
    note.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const noteID = note.dataset.noteId;
      const noteIndex = notesData.findIndex((n) => n.id === noteID);
      if (noteIndex !== -1) {
        const userConfirmed = window.confirm(
          "هل أنت متأكد من أنك تريد حذف هذه الملاحظة؟"
        );
        if (userConfirmed) {
          notesData.splice(noteIndex, 1);
          renderNoteList(notesData);
          renderNotePane(notesData);
          saveData(notesData);
        }
      }
    });
  });
}
