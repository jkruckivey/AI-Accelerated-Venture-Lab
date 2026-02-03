// assets/site.js
// Minimal site behavior for the Venture Lab hub
// Currently handles contrast mode toggle

(function () {
  const STORAGE_KEY = "aavl-contrast";
  const btn = document.querySelector("[data-contrast-toggle]");

  // Apply saved preference on load
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "high") {
    document.documentElement.setAttribute("data-contrast", "high");
  }

  // Update button label and state
  function updateButton() {
    if (!btn) return;
    const isHigh =
      document.documentElement.getAttribute("data-contrast") === "high";

    btn.textContent = isHigh
      ? "High contrast: On"
      : "High contrast: Off";

    btn.setAttribute("aria-pressed", isHigh ? "true" : "false");
  }

  updateButton();

  // Toggle handler
  if (btn) {
    btn.addEventListener("click", () => {
      const isHigh =
        document.documentElement.getAttribute("data-contrast") === "high";

      if (isHigh) {
        document.documentElement.removeAttribute("data-contrast");
        localStorage.setItem(STORAGE_KEY, "normal");
      } else {
        document.documentElement.setAttribute("data-contrast", "high");
        localStorage.setItem(STORAGE_KEY, "high");
      }

      updateButton();
    });
  }
})();
