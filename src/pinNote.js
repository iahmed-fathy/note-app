import { saveData } from "./localStorageManagement";
import renderNoteList from "./renderNoteList";
import renderNotePane from "./renderNotePane";

export default function pinNote(notesData) {
  const pinBtn = document.querySelectorAll(".pinBtn");
  pinBtn.forEach((icon) =>
    icon.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const noteID = icon.dataset.noteId;
      const noteIndex = notesData.findIndex((n) => n.id === noteID);
      if (notesData[noteIndex].isPinned === true) {
        notesData[noteIndex].isPinned = false;
      } else {
        notesData[noteIndex].isPinned = true;
      }
      renderNoteList(notesData);
      renderNotePane(notesData);
      saveData(notesData);
    })
  );
}
