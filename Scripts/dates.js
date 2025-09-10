document.addEventListener('DOMContentLoaded', () => {
  // Set the current year
  var currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  // Set the last modified date
  var lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});