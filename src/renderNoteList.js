import deleteNoteFn from "./deleteNoteFn";
import isContainsArabic from "./isContainsArabic";
import pinNote from "./pinNote";
import renderNotePane from "./renderNotePane";

export default function renderNoteList(notesData) {
  const pinnedNotesList = document.getElementById("pinnedNotesList");
  const unPinnedNotesList = document.getElementById("unPinnedNotesList");
  const pinnedSection = pinnedNotesList.parentElement;
  const noteInAside = document.getElementById("noteInAside");

  pinnedNotesList.innerHTML = "";
  unPinnedNotesList.innerHTML = "";

  if (notesData.length === 0) {
    unPinnedNotesList.innerHTML = `
      <div class="p-4 text-center text-[#898989]">
        <p>No Found Notes</p>
      </div>
    `;
  }

  notesData.forEach((note) => {
    const isArabic = isContainsArabic(note.content);
    const directionClass = isArabic ? "rtl text-right" : "ltr text-left";

    const noteHTML = `
      <li data-note-id=${
        note.id
      } class="group flex flex-col note h-full w-full p-4 rounded-[8px] focus-within:bg-[#F6F6F6] cursor-pointer shadow" tabindex="0">
        <div class="flex justify-end mb-1">
          <button data-note-id=${note.id} class="pinBtn ${
      note.isPinned ? "visible " : "invisible"
    } group-hover:visible group-focus:visible">
            <svg class=" fill-[#EC7160] hover:fill-[#D82700]" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              width="15px" height="15px" viewBox="0 0 425.963 425.963"
              xml:space="preserve">
              <g>
                <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
                  c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
                  c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
                  C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
                  c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"/>
              </g>
            </svg>
          </button>
        </div>
        <h4 class="text-[16px] ${directionClass} leading-[27px] font-[400] mb-2">
          ${note.title}
        </h4>
        <p class="text-[13px] ${directionClass} leading-[27px] font-[400] text-[#898989] mb-4 overflow-hidden w-full h-[60px]">
          ${note.content}
        </p>
        <div class="flex justify-between">
          <p class="text-[14px] font-[400] text-[#898989]">
            ${note.date}
          </p>
          <button data-note-id=${
            note.id
          } class="deleteNote text-[15px] font-[400] hover:font-[600] text-[#D82700]">
            Delete
          </button>
        </div>
      </li>
    `;

    if (note.isPinned) {
      pinnedNotesList.insertAdjacentHTML("beforeend", noteHTML);
    } else {
      unPinnedNotesList.insertAdjacentHTML("beforeend", noteHTML);
    }
  });

  if (notesData.length > 0) {
    const firstNoteSelector = `[data-note-id='${notesData[0].id}']`;
    const firstNoteElement = document.querySelector(firstNoteSelector);

    if (firstNoteElement) {
      firstNoteElement.click();
    }
  }

  if (pinnedNotesList.children.length === 0) {
    pinnedSection.classList.add("hidden");
    noteInAside.classList.remove("border-t");
  } else {
    pinnedSection.classList.remove("hidden");
    noteInAside.classList.add("border-t");
  }
  renderNotePane(notesData);
  deleteNoteFn(notesData);
  pinNote(notesData);
}
