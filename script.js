(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

  const search = document.getElementById("offer-search");
  const category = document.getElementById("category-filter");
  const device = document.getElementById("device-filter");
  const list = document.getElementById("offer-list");
  const count = document.getElementById("results-count");
  const empty = document.getElementById("empty-state");

  if (search && category && device && list) {
    const cards = [...list.querySelectorAll(".offer-card")];
    function update() {
      const term = search.value.trim().toLowerCase();
      let visibleCount = 0;
      cards.forEach(card => {
        const devices = (card.dataset.devices || "").split(/\s+/).filter(Boolean);
        const textMatch = `${card.dataset.search || ""} ${card.textContent}`.toLowerCase().includes(term);
        const categoryMatch = category.value === "all" || card.dataset.category === category.value;
        const deviceMatch = device.value === "all" || devices.includes(device.value) ||
          (device.value === "ios" && devices.includes("iphone"));
        const show = textMatch && categoryMatch && deviceMatch;
        card.classList.toggle("hidden", !show);
        if (show) visibleCount++;
      });
      if (count) count.textContent = `${visibleCount} ${visibleCount === 1 ? "listing" : "listings"}`;
      if (empty) empty.hidden = visibleCount !== 0;
    }
    search.addEventListener("input", update);
    category.addEventListener("change", update);
    device.addEventListener("change", update);

    const params = new URLSearchParams(location.search);
    const initialCategory = params.get("category");
    if (initialCategory && [...category.options].some(o => o.value === initialCategory)) category.value = initialCategory;
    update();
  }

  const draft = document.getElementById("email-draft");
  if (draft) draft.addEventListener("click", () => {
    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const topic = document.getElementById("topic")?.value || "Enquiry";
    const message = document.getElementById("message")?.value.trim() || "";
    const subject = encodeURIComponent(`[Shemu Hub] ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\nTopic: ${topic}\n\nDetails:\n${message}`);
    // Replace the placeholder with a real, monitored contact email before launch.
    window.location.href = `mailto:REPLACE-WITH-YOUR-REAL-EMAIL@example.com?subject=${subject}&body=${body}`;
  });
})();