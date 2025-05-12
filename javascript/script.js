const moods = {
    happy: {
        quote: "Happiness is not by chance, but by choice.",
        background: "linear-gradient(to right, #f9d423, #ff4e50)",
        emojis: ["😊", "😄", "😁"]
    },
    sad: {
        quote: "Tears come from the heart and not from the brain.",
        background: "linear-gradient(to right, #4b6cb7, #182848)",
        emojis: ["😢", "😞", "😔"]
    },
    anxious: {
        quote: "You don't have to control your thoughts. You just have to stop letting them control you.",
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        emojis: ["😟", "😰", "😣"]
    },
    calm: {
        quote: "Calm mind brings inner strength and self-confidence.",
        background: "linear-gradient(to right, #00c9ff, #92fe9d)",
        emojis: ["😌", "🧘‍♂️", "🌿"]
    },
    excited: {
        quote: "Excitement is the more practical synonym for happiness.",
        background: "linear-gradient(to right, #fc00ff, #00dbde)",
        emojis: ["🤩", "😆", "🎉"]
    }
};

const moodSelector = document.getElementById("mood-selector");
const quoteElement = document.getElementById("quote");
const emojiContainer = document.getElementById("emoji-container");
const body = document.body;

moodSelector.addEventListener("change", () => {
    const selected = moodSelector.value;
    const mood = moods[selected];

    body.style.background = mood.background;

    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.textContent = mood.quote;
        quoteElement.style.opacity = 1;
    }, 300);

    emojiContainer.innerHTML = "";
    mood.emojis.forEach((emoji, i) => {
        const span = document.createElement("span");
        span.textContent = emoji;
        span.style.margin = "10px";
        span.style.animationDelay = `${i * 0.3}s`;
        emojiContainer.appendChild(span);
    });
});
