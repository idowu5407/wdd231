// Courses Data
const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce students to programming...',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web...',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'CSE 111 students become more organized, efficient...',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce the notion of classes...',
    technology: ['C#'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience in Web Fundamentals...',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

// DOM Elements
const courseList = document.getElementById('course-list');
const creditCount = document.getElementById('credit-count');
const filterButtons = document.querySelectorAll('#filters button');

// Render Courses
function renderCourses(filter = 'all') {
  courseList.innerHTML = '';

  let filtered = courses.filter(course => {
    if (filter === 'all') return true;
    return course.subject === filter;
  });

  filtered.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    if (course.completed) card.classList.add('completed');

    card.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Certificate:</strong> ${course.certificate}</p>
      <p>${course.description}</p>
      <p class="tech"><strong>Tech:</strong> ${course.technology.join(', ')}</p>
      <p><strong>Status:</strong> ${course.completed ? '✅ Completed' : '❌ Not Completed'}</p>
    `;
    courseList.appendChild(card);
  });

  // Update credit count
  const totalCredits = filtered.reduce((sum, c) => sum + c.credits, 0);
  creditCount.textContent = totalCredits;
}

// Filter Events
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    renderCourses(btn.dataset.filter);
  });
});


// Initial Render
renderCourses();