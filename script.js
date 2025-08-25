function toggleGift(item) {
  item.classList.toggle("gifted");
}

function addMessage() {
  const messageBox = document.getElementById("wish-message");
  const messages = document.getElementById("messages");

  if (messageBox.value.trim() === "") {
    alert("Please write a message!");
    return;
  }

  const div = document.createElement("div");
  div.className = "message-card";
  div.textContent = messageBox.value;
  messages.appendChild(div);

  messageBox.value = "";
}
