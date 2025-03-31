document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.querySelector(".chat-icon");
    const chatbot = document.querySelector(".chatbot-container");
    const closeButton = document.querySelector(".close-btn");
    const sendButton = document.querySelector("#send-btn");
    const userInput = document.querySelector("#user-input");
    const chatBody = document.querySelector(".chat-body");
    const messagesContainer = document.querySelector(".messages");

    // Open chatbot
    chatIcon.addEventListener("click", function () {
        chatbot.style.display = "flex";
        chatIcon.style.display = "none";
    });

    // Close chatbot
    closeButton.addEventListener("click", function () {
        chatbot.style.display = "none";
        chatIcon.style.display = "block";
    });

    // Send message
    sendButton.addEventListener("click", function () {
        sendMessage();
    });

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === "") return;

        // Add user message
        const userMessage = document.createElement("p");
        userMessage.classList.add("user-message");
        userMessage.textContent = messageText;
        messagesContainer.appendChild(userMessage);

        // Clear input field
        userInput.value = "";

        // Simulated bot response
        setTimeout(() => {
            const botMessage = document.createElement("p");
            botMessage.classList.add("bot-message");
            botMessage.textContent = "I'm here to help!";
            messagesContainer.appendChild(botMessage);

            // Scroll down to latest message
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);
    }
});
