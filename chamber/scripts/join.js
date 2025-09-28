document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm");

  form.innerHTML = `
    <label>
      First Name:
      <input type="text" name="firstName" title="Enter your first name" autocomplete="given-name" required>
    </label>

    <label>
      Last Name:
      <input type="text" name="lastName" title="Enter your last name" autocomplete="family-name" required>
    </label>

    <label>
      Organizational Title:
      <input type="text" name="organizationTitle" title="Enter your role in the organization" autocomplete="organization-title" pattern="[A-Za-z\\s-]{7,}">
    </label>

    <label>
      Email:
      <input type="email" name="email" title="Enter your email" autocomplete="email" placeholder="example@email.com" required>
    </label>

    <label>
      Mobile Phone:
      <input type="tel" name="phone" title="Enter your mobile number" autocomplete="tel" required>
    </label>

    <label>
      Business/Organization Name:
      <input type="text" name="organization" title="Enter your organization name" autocomplete="organization" required>
    </label>

    <label>
      Membership Level:
      <select name="membership" title="Select membership level" required>
        <option value="">-- Select a level --</option>
        <option value="np">NP Membership (Free)</option>
        <option value="bronze">Bronze Membership</option>
        <option value="silver">Silver Membership</option>
        <option value="gold">Gold Membership</option>
      </select>
    </label>

    <label>
      Business Description:
      <textarea name="description" title="Describe your business"></textarea>
    </label>

    <input type="hidden" id="timestamp" name="timestamp">

    <input type="submit" value="Submit Application">
  `;

  // Set timestamp
  document.getElementById("timestamp").value = new Date().toISOString();

  // Open modals
  document.querySelectorAll(".member-card a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modal = document.querySelector(link.getAttribute("href"));
      if (modal) modal.showModal();
    });
  });
});

const form = document.getElementById("myForm");
  form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert(`Thanks, ${document.getElementById("name").value}! Your form has been submitted.`);
  form.reset();
});    

      
// Extract query string values
const params = new URLSearchParams(window.location.search);
document.getElementById("firstName").textContent = params.get("firstName");
document.getElementById("lastName").textContent = params.get("lastName");
document.getElementById("email").textContent = params.get("email");
document.getElementById("mobile").textContent = params.get("phone");
document.getElementById("business").textContent = params.get("organization");
document.getElementById("timestamp").textContent = params.get("timestamp");
