const uploadBtn = document.getElementById("uploadBtn");
const uploadPopup = document.getElementById("uploadPopup");

uploadBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  uploadPopup.style.display =
    uploadPopup.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("click", (e) => {
  if (!uploadPopup.contains(e.target) && e.target !== uploadBtn) {
    uploadPopup.style.display = "none";
  }
});
