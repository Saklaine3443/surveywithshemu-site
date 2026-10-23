/* Shemu Hub — Basic Employee Access
   Client-side demo only. Not secure authentication. */

const SHEMU_EMPLOYEE_CODE = "inshaallah";
const SHEMU_ACCESS_KEY = "shemu_employee_access";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("accessModal");
  if (!modal) return;

  const openBtn = document.getElementById("openAccessModal");
  const closeBtn = document.getElementById("closeAccessModal");
  const form = document.getElementById("accessForm");
  const codeInput = document.getElementById("employeeAccessCode");
  const message = document.getElementById("accessMessage");
  const lockBtn = document.getElementById("lockEmployeeAccess");

  const hasAccess = () =>
    sessionStorage.getItem(SHEMU_ACCESS_KEY) === "granted";

  function showMessage(text, type = "") {
    message.textContent = text;
    message.className = "access-message " + type;
  }

  function openModal() {
    modal.hidden = false;
    showMessage("");
    codeInput.value = "";
    lockBtn.hidden = !hasAccess();
    codeInput.focus();
  }

  function closeModal() {
    modal.hidden = true;
  }

  openBtn?.addEventListener("click", openModal);
  closeBtn?.addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  form?.addEventListener("submit", event => {
    event.preventDefault();

    if (codeInput.value === SHEMU_EMPLOYEE_CODE) {
      sessionStorage.setItem(SHEMU_ACCESS_KEY, "granted");
      lockBtn.hidden = false;
      showMessage("Access enabled for this tab.", "success");
      codeInput.value = "";
      window.setTimeout(closeModal, 700);
    } else {
      showMessage("Incorrect code. Please try again.", "error");
      codeInput.select();
    }
  });

  lockBtn?.addEventListener("click", () => {
    sessionStorage.removeItem(SHEMU_ACCESS_KEY);
    lockBtn.hidden = true;
    showMessage("Access locked for this tab.", "success");
  });

  if (new URLSearchParams(window.location.search).get("access") === "required") {
    openModal();
    showMessage(
      "This page requires employee access. Enter your code to continue.",
      "error"
    );
  }
});
