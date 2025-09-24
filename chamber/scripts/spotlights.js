async function getSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();

    // Filter only Silver (2) and Gold (3)
    const eligible = members.filter(m => m.membership === 2 || m.membership === 3);

    // Randomize and pick 2–3
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const container = document.querySelector("#spotlight-cards");
    container.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">${getMembershipName(member.membership)}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Spotlight fetch error:", error);
  }
}

function getMembershipName(level) {
  switch(level) {
    case 2: return "Silver Member";
    case 3: return "Gold Member";
    default: return "Member";
  }
}

// Run spotlights when this script loads
getSpotlights();