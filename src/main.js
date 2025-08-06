import renderNoteList from "./renderNoteList.js";
import renderNotePane from "./renderNotePane.js";
import addNote from "./addNote.js";
import deleteNoteFn from "./deleteNoteFn.js";
import { getData } from "./localStorageManagement.js";
import searchBar from "./searchBar.js";

const formPage = document.getElementById("addNote");
const notePageBtn = document.getElementById("notesPage");
const addNotePageBtn = document.getElementById("addNotesPage");
const myForm = document.getElementById("myForm");
const addNotePageCircularBtn = document.getElementById("CircularBtn");
const ToggleSidebarBtn = document.getElementById("ToggleSidebarBtn");
const closeNav = document.getElementById("closeNav");
const navbar = document.getElementById("navbar");
const menuIcon = document.getElementById("menuIcon");
const searchIcon = document.getElementById("searchIcon");
const mobileSearchBar = document.getElementById("mobileSearchBar");
const closeSearchIcon = document.getElementById("closeSearchIcon");
const header = document.querySelector("header");
const asideNoteList = document.getElementById("asideNoteList");
const notePaneContainer = document.getElementById("notePaneContainer");

let notesData = getData();

notePageBtn.addEventListener("click", () => {
  asideNoteList.classList.remove("hidden");
  notePaneContainer.classList.remove("hidden");
  formPage.classList.add("hidden");
  addNotePageCircularBtn.classList.remove("hidden");
  asideNoteList.classList.remove("max-sm:hidden");
  notePaneContainer.classList.add("max-sm:hidden");
  ToggleSidebarBtn.classList.remove("hidden");
});

addNotePageBtn.addEventListener("click", () => {
  asideNoteList.classList.add("hidden");
  notePaneContainer.classList.add("hidden");
  formPage.classList.remove("hidden");
  addNotePageCircularBtn.classList.add("hidden");
  ToggleSidebarBtn.classList.add("hidden");
});

addNotePageCircularBtn.addEventListener("click", () => {
  asideNoteList.classList.add("hidden");
  notePaneContainer.classList.add("hidden");
  formPage.classList.remove("hidden");
  ToggleSidebarBtn.classList.add("hidden");
});

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isPinned = event.submitter.id === "AddPinNoteBtn";
  addNote(isPinned, notesData);
});

ToggleSidebarBtn.addEventListener("click", () => {
  asideNoteList.classList.toggle("hidden");
  ToggleSidebarBtn.classList.toggle("rotate-180");
});

closeNav.addEventListener("click", () => {
  navbar.classList.add("max-sm:translate-x-[-100%]");
  setTimeout(() => {
    navbar.classList.add("max-sm:hidden");
  }, 500);
});

menuIcon.addEventListener("click", () => {
  if (navbar.classList.contains("max-sm:hidden")) {
    navbar.classList.remove("max-sm:hidden");
    asideNoteList.classList.remove("hidden");
    setTimeout(() => {
      navbar.classList.remove("max-sm:translate-x-[-100%]");
    }, 200);
  } else {
    navbar.classList.add("max-sm:translate-x-[-100%]");
    setTimeout(() => {
      navbar.classList.add("max-sm:hidden");
    }, 500);
  }
});

searchIcon.addEventListener("click", () => {
  mobileSearchBar.classList.remove("hidden");
  closeSearchIcon.classList.remove("hidden");
  searchIcon.classList.add("hidden");
  header.classList.remove("bg-white");
  header.classList.add("bg-[#F6F6F6]");
  header.classList.remove("h-20");
  header.classList.add("h-50");
});

closeSearchIcon.addEventListener("click", () => {
  mobileSearchBar.classList.add("hidden");
  closeSearchIcon.classList.add("hidden");
  searchIcon.classList.remove("hidden");
  header.classList.remove("bg-[##F6F6F6]");
  header.classList.add("bg-white");
  header.classList.remove("h-50");
  header.classList.add("h-20");
});

searchBar(notesData);
renderNoteList(notesData);
renderNotePane(notesData);
deleteNoteFn(notesData);
