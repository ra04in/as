document.getElementById("fun-button").addEventListener("click", function() {
    let messages = [
        "Acey Salaysay is watching you! 👀",
        "Boom! 💥 Something exploded!",
        "You found a secret message! 🔥",
        "Who summoned me?! 🤖",
        "This is getting weird... 🌀",
        "Click again... if you dare! 👻"
    ];

    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("random-text").textContent = randomMessage;

    // Make text move randomly
    let movingText = document.getElementById("moving-text");
    movingText.style.top = Math.random() * 80 + "vh";
    movingText.style.left = Math.random() * 80 + "vw";

    // Create random stuff on screen
    let randomStuff = document.createElement("div");
    randomStuff.classList.add("random-stuff");
    randomStuff.textContent = "🎉😂🔥💀💃";
    randomStuff.style.top = Math.random() * 90 + "vh";
    randomStuff.style.left = Math.random() * 90 + "vw";

    document.body.appendChild(randomStuff);

    setTimeout(() => {
        randomStuff.remove();
    }, 4000);
});
