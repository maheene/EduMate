document.getElementById("upload-btn").addEventListener("click", () => {
  const options = document.getElementById("upload-options");
  options.style.display = options.style.display === "flex" ? "none" : "flex";
});

document.getElementById("send-btn").addEventListener("click", () => {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() !== "") {
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.textContent = input.value;
    chatBox.appendChild(userMsg);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
