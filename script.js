const uploadBtn = document.getElementById("uploadBtn");
const uploadPopup = document.getElementById("uploadPopup");

uploadBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  uploadPopup.style.display =
    uploadPopup.style.display === "flex" ? "none" : "flex";
  uploadPopup.style.position = "absolute";
  uploadPopup.style.top = `${uploadBtn.getBoundingClientRect().top - 90}px`;
  uploadPopup.style.left = `${uploadBtn.getBoundingClientRect().left - 20}px`;
});

document.addEventListener("click", (e) => {
  if (!uploadPopup.contains(e.target) && e.target !== uploadBtn) {
    uploadPopup.style.display = "none";
  }
});
