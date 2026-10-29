const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-link");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const profileImage = document.querySelector(".profile-photo img");
const showProfileImage = () => profileImage?.parentElement?.classList.add("has-image");
profileImage?.addEventListener("load", showProfileImage);
if (profileImage?.complete && profileImage.naturalWidth > 0) showProfileImage();

const projectFilters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card[data-category]");
const projectFilterStatus = document.querySelector("#project-filter-status");

projectFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const isVisible = selectedFilter === "all" || card.dataset.category === selectedFilter;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    projectFilters.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.setAttribute("aria-pressed", String(isActive));
      filterButton.classList.toggle("button-primary", isActive);
      filterButton.classList.toggle("button-ghost", !isActive);
    });

    if (projectFilterStatus) {
      projectFilterStatus.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "project" : "projects"}`;
    }
  });
});

// Contact form: validates the fields, then opens the visitor's email app.
// This requires no backend, but the visitor must have an email app configured.
const form = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const senderEmail = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
  );
  const mailto = `mailto:ebisaindalu41@gmail.com?subject=${subject}&body=${body}`;

  formNote.textContent = "Opening your email app… If it doesn't open, email ebisaindalu41@gmail.com directly.";
  window.location.href = mailto;
});

// Update the highlighted navigation item as sections enter view.
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}
