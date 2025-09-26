// output.mjs
export function setTitle(course) {
  const nameEl = document.querySelector("#courseName");
  const codeEl = document.querySelector("#courseCode");
  if (nameEl) nameEl.textContent = course.name;
  if (codeEl) codeEl.textContent = course.code;
}

export function renderSections(sections) {
  const tbody = document.querySelector("#sections");
  if (!tbody) return;
  tbody.innerHTML = sections
    .map(
      (section) => `<tr>
        <td>${section.sectionNumber}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
      </tr>`
    )
    .join("");
}