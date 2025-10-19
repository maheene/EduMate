const uploadBtn = document.getElementById("uploadBtn");
const uploadPopup = document.getElementById("uploadPopup");
const chatInput = document.querySelector(".chat-input");
const sendBtn = document.querySelector(".send-btn");
const chatWindow = document.querySelector(".chat-window");

// Toggle upload popup
uploadBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (uploadPopup.style.display === "flex") {
    uploadPopup.style.display = "none";
    return;
  }

  uploadPopup.style.display = "flex";

  // Position popup above the plus button
  const btnRect = uploadBtn.getBoundingClientRect();
  const parentRect = uploadBtn.parentElement.getBoundingClientRect();

  uploadPopup.style.top = `${btnRect.top - parentRect.top - uploadPopup.offsetHeight - 8}px`;
  uploadPopup.style.left = `${btnRect.left - parentRect.left}px`;
});

// Close popup when clicking outside
document.addEventListener("click", (e) => {
  if (!uploadPopup.contains(e.target) && e.target !== uploadBtn) {
    uploadPopup.style.display = "none";
  }
});

// Send message on Enter
chatInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});

// Send message on arrow click
sendBtn.addEventListener("click", sendMessage);

// Send message function
function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-message");
  msgDiv.style.alignSelf = "flex-end";
  msgDiv.style.backgroundColor = "#FF7B54";
  msgDiv.style.color = "#fff";
  msgDiv.textContent = message;

  chatWindow.appendChild(msgDiv);
  chatInput.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
