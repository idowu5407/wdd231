// modules.mjs
import byuiCourse from "./course.mjs";
import { setSectionSelection } from "./sections.mjs";
import { setTitle, renderSections } from "./output.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const enrollBtn = document.querySelector("#enrollStudent");
  const dropBtn = document.querySelector("#dropStudent");
  const select = document.querySelector("#sectionNumber");

  // initial render
  setTitle(byuiCourse);
  setSectionSelection(byuiCourse.sections);
  renderSections(byuiCourse.sections);

  enrollBtn.addEventListener("click", () => {
    const sectionNum = Number(select.value);
    if (!sectionNum) {
      alert("Please choose a section first.");
      return;
    }
    byuiCourse.changeEnrollment(sectionNum, true);
    renderSections(byuiCourse.sections);
  });

  dropBtn.addEventListener("click", () => {
    const sectionNum = Number(select.value);
    if (!sectionNum) {
      alert("Please choose a section first.");
      return;
    }
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
  });
});