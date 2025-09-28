document.addEventListener("DOMContentLoaded", () => {
  // Set timestamp when form loads
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  // Open modals when links are clicked
  document.querySelectorAll(".member-card a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modal = document.querySelector(link.getAttribute("href"));
      if (modal) modal.showModal();
    });
  });

  // Handle form submission
  const joinForm = document.getElementById("joinForm");
  const myForm = document.getElementById("myForm");

  if (myForm) {
    myForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      alert(`Thanks, ${name}! Your form has been submitted.`);
      myForm.reset();
    });
  }

  // Extract query string values
  const params = new URLSearchParams(window.location.search);
  const fields = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    mobile: "phone",
    business: "organization",
    businessDescription: "description",
    timestamp: "timestamp"
  };

  for (const [key, param] of Object.entries(fields)) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = params.get(param) || "";
    }
  }
});