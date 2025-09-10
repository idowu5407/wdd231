const navButton = document.querySelector('#nav-button');
const navlinks = document.querySelector('#nav-bar');
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navlinks.classList.toggle('show')
  
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");

});


const courses = [
  { code: "WDD 130", credits: 2, subject: "wdd", completed: true },
  { code: "WDD 131", credits: 2, subject: "wdd", completed: false },
  { code: "WDD 231", credits: 2, subject: "wdd", completed: false },
  { code: "CSE 110", credits: 3, subject: "cse", completed: true }
];

const courseList = document.getElementById("course-list");
const totalCreditsEl = document.getElementById("total-credits");

function renderCourses(filter) {
  let filtered = courses;
  if (filter !== "all") {
    filtered = courses.filter(course => course.subject === filter);
  }

  // Clear
  courseList.innerHTML = "";

  // Add
  filtered.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");
    if (course.completed) div.classList.add("completed");
    div.textContent = `${course.code} (${course.credits} credits)`;
    courseList.appendChild(div);
  });

  // Calculate total credits
  const total = filtered.reduce((sum, c) => sum + c.credits, 0);
  totalCreditsEl.textContent = `The total credits for courses listed above is ${total}`;
}

// Filters
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    renderCourses(filter);
  });
});

// Initial load
renderCourses("all");

