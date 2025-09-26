// ------------------ Courses Data ------------------
let courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
    technology: ['Python'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web and to careers in web site design and development...',
    technology: ['HTML','CSS'],
    completed: false
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'CSE 111 students become more organized, efficient, and powerful computer programmers...',
    technology: ['Python'],
    completed: false
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce the notion of classes and objects...',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience in Web Fundamentals and programming...',
    technology: ['HTML','CSS','JavaScript'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming...',
    technology: ['HTML','CSS','JavaScript'],
    completed: false
  }
];

// ------------------ Mark Completed Courses ------------------
const completedCourses = ["CSE110", "CSE111", "CSE210", "WDD130", "WDD131"];

courses = courses.map(course => {
  const courseCode = course.subject + course.number;
  if (completedCourses.includes(courseCode)) {
    return { ...course, completed: true };
  }
  return course;
});

// ------------------ DOM Elements ------------------
const courseList = document.getElementById("course-list");
const creditCount = document.getElementById("credit-count");
const filterButtons = document.querySelectorAll("#filters button");

// ------------------ Render Courses ------------------
function renderCourses(courseArray) {
  courseList.innerHTML = "";

  courseArray.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Description:</strong> ${course.description}</p>
      <p class="tech"><strong>Technology:</strong> ${course.technology.join(", ")}</p>
    `;

    courseList.appendChild(card);
  });

  // Update credits
  const totalCredits = courseArray.reduce((sum, c) => sum + c.credits, 0);
  creditCount.textContent = totalCredits;
}

// ------------------ Filter Handling ------------------
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    let filteredCourses;
    if (filter === "all") {
      filteredCourses = courses;
    } else {
      filteredCourses = courses.filter(c => c.subject === filter);
    }

    renderCourses(filteredCourses);
  });
});

// ------------------ Init ------------------
renderCourses(courses);