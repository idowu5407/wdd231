// sections.mjs
export function setSectionSelection(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");
  if (!sectionSelect) return; // safety

  // Remove any previously added options (keep placeholder at index 0)
  while (sectionSelect.options.length > 1) {
    sectionSelect.remove(1);
  }

  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}