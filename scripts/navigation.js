// ------------------ Responsive Navigation ------------------
const navButton = document.getElementById("nav-button");
const navBar = document.getElementById("nav-bar");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("show");
  navBar.classList.toggle("show");
});

// date and time
const yearSpan = document.querySelector("#year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
if (lastModified) lastModified.textContent = `Last Modification: ${document.lastModified}`;


function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}

courseDiv.addEventListener('click', () => {
  displayCourseDetails(course);
});