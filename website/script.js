document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const messageInput = document.getElementById("message");
  const sendButton = document.getElementById("sendButton");
  const messagesDiv = document.getElementById("messages");

  let username = "";

  usernameInput.addEventListener("input", () => {
    username = usernameInput.value.trim();
    sendButton.disabled = username === "";
    messageInput.disabled = username === "";
  });

  function appendMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${message.username}: ${message.message}`;
    messagesDiv.appendChild(messageDiv);
  }

  // function loadMessages() {
  //   fetch('http://localhost:9090/messages')
  //     .then(response => response.json())
  //     .then(messages => {
  //       messages.forEach(message => appendMessage(message));
  //     })
  //     .catch(error => console.error('Error:', error));
  // }

  // loadMessages();
});

function sendMessage() {
  alert("SENT");
  // const message = messageInput.value.trim();
  // if (message !== '') {
  //   fetch('http://localhost:9090/messages', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, message }),
  //   })
  //   .then(response => response.json())
  //   .then(() => {
  //     messageInput.value = '';
  //   })
  //   .catch(error => console.error('Error:', error));
  // }
}
