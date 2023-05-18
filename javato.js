const chatbot = document.querySelector('.chatbot');
const collapseBtn = chatbot.querySelector('.collapse-btn');
const chatHeader = chatbot.querySelector('.chat-header');
const chatBody = chatbot.querySelector('.chat-body');
const messageInput = chatbot.querySelector('input[type="text"]');
const sendBtn = chatbot.querySelector('.send-btn');

collapseBtn.addEventListener('click', () => {
  chatbot.classList.toggle('collapsed');
  if (chatbot.classList.contains('collapsed')) {
    chatbot.classList.remove('expanded');
  } else {
    chatbot.classList.add('expanded');
  }
});

chatHeader.addEventListener('click', (e) => {
  if (chatbot.classList.contains('collapsed')) {
    return;
  }
  if (e.target !== chatHeader) {
    return;
  }
  chatbot.classList.toggle('expanded');
});

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    const messageEl = document.createElement('p');
    messageEl.textContent = message;
    chatBody.appendChild(messageEl);
    messageInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
    respondToMessage(message);
  }
}

function respondToMessage(message) {
  const responses = [
    'I am a dummy chatbot and I do not know how to respond to that',
    'Sorry, I did not understand what you said',
    'Can you please rephrase that?',
    'I am working on it, please wait a moment',
    'Here is your answer: ...'
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  const responseEl = document.createElement('p');
  responseEl.textContent = response;
  chatBody.appendChild(responseEl);
  chatBody.scrollTop = chatBody.scrollHeight;
}

