document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const search = document.getElementById("offer-search");
  const filter = document.getElementById("category-filter");
  const list = document.getElementById("offer-list");
  if (search && filter && list) {
    const cards = Array.from(list.querySelectorAll(".directory-card"));
    const count = document.getElementById("results-count");
    const empty = document.getElementById("empty-state");

    function updateResults() {
      const term = search.value.trim().toLowerCase();
      const category = filter.value;
      let shown = 0;
      cards.forEach(card => {
        const matchesText = (card.dataset.search + " " + card.textContent).toLowerCase().includes(term);
        const matchesCategory = category === "all" || card.dataset.category === category;
        const visible = matchesText && matchesCategory;
        card.hidden = !visible;
        if (visible) shown++;
      });
      count.textContent = `${shown} resource${shown === 1 ? "" : "s"}`;
      empty.hidden = shown !== 0;
    }

    search.addEventListener("input", updateResults);
    filter.addEventListener("change", updateResults);
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    if (categoryParam && Array.from(filter.options).some(option => option.value === categoryParam)) {
      filter.value = categoryParam;
    }
    updateResults();
  }

  // Placeholder offer buttons deliberately do not redirect anywhere.
  document.querySelectorAll('[data-placeholder="true"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("This is a demo placeholder. Edit cpa.html and replace this button's href with your real, approved offer URL before publishing.");
    });
  });
});
