import renderNoteList from "./renderNoteList.js";

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export default function searchBar(notesData) {
  const searchBar = document.querySelectorAll(".searchBar");

  const filterNotes = (query) => {
    if (query === "") {
      renderNoteList(notesData);
      return;
    }

    const filtered = notesData.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
    renderNoteList(filtered);
  };

  const debouncedFilter = debounce(filterNotes, 1000);

  searchBar.forEach((bar) => {
    bar.addEventListener("keyup", (event) => {
      debouncedFilter(event.target.value);
    });
  });
}
