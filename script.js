const uploadBtn = document.getElementById("uploadBtn");
const uploadPopup = document.getElementById("uploadPopup");
const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatWindow = document.getElementById("chatWindow");

uploadBtn.addEventListener("click", () => {
  uploadPopup.style.display = uploadPopup.style.display === "flex" ? "none" : "flex";
});

function selectUpload(type) {
  uploadPopup.style.display = "none";
  alert(type === "upload" ? "Upload image option selected." : "Camera option selected.");
}

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.classList.add("chat-message", "user");
  userMsg.textContent = text;
  chatWindow.appendChild(userMsg);
  chatInput.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.classList.add("chat-message", "bot");
    botMsg.textContent = "👋 Hi there! I’m EduMate — AI chat coming soon!";
    chatWindow.appendChild(botMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, 600);
}
