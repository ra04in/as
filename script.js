document.getElementById("fun-button").addEventListener("click", function() {
    let messages = [
        "Acey is in the house! 🎉",
        "You're awesome! 😎",
        "Keep clicking, something might happen... 🤔",
        "Boom! 💥 Magic!"
    ];
    
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("random-text").textContent = randomMessage;
});
