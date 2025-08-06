import deleteNoteFn from "./deleteNoteFn";
import isContainsArabic from "./isContainsArabic";

export default function renderNotePane(notesData) {
  const notes = document.querySelectorAll(".note");
  const notePane = document.getElementById("notePane");
  const asideNoteList = document.getElementById("asideNoteList");
  const notePaneContainer = document.getElementById("notePaneContainer");

  if (notesData.length === 0) {
    notePane.innerHTML = ``;
  } else {
    const firstNoteData = notesData[0];
    const isArabic = isContainsArabic(firstNoteData.content);
    const directionClass = isArabic ? "rtl text-right" : "ltr text-left";

    notePane.innerHTML = `
      <div class="p-14 ${directionClass}">
        <h2 class="text-[26px] font-[400] leading-[31px] mb-4">
          ${firstNoteData.title}
        </h2>
        <p class="text-[#898989] text-[13px] font-[400] mb-10">
          <span>${firstNoteData.date} </span>/<span> ${firstNoteData.author}</span>
        </p>
        <p class="text-[16px] font-[400] leading-[31px]">
          ${firstNoteData.content}</p>
      </div>
    `;
  }

  notes.forEach((note) => {
    note.addEventListener("click", () => {
      const noteID = note.dataset.noteId;
      const noteData = notesData.find((note) => note.id === noteID);
      console.log(note);

      asideNoteList.classList.add("max-sm:hidden");
      notePaneContainer.classList.remove("max-sm:hidden");

      const isArabic = isContainsArabic(noteData.content);
      const directionClass = isArabic ? "rtl text-right" : "ltr text-left";

      notePane.innerHTML = `
        <div class="p-14 ${directionClass}">          <h2 class="text-[26px] font-[400] leading-[31px] mb-4">
            ${noteData.title}
          </h2>
          <p class="text-[#898989] text-[13px] font-[400] mb-10">
            <span>${noteData.date} </span>/<span> ${noteData.author}</span>
          </p>
          <p class="text-[16px] font-[400] leading-[31px]">
            ${noteData.content}</p>
        </div>
      `;
    });
  });
  deleteNoteFn(notesData);
}
