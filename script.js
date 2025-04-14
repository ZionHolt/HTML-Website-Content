const quotes = [
    "You shall seal the blinding light that plagues their dreams. You are the Vessel. You are the Hollow Knight.",
    "The Radiance is a great and terrible power. It is the source of all light, but it is also the source of all darkness.",
    "The Dreamers are the guardians of Hallownest. They are the ones who keep the Radiance at bay.",
    "It's hard to believe that it's over isn't it? Funny, how we get attached to the struggle.",
    "This isn't canon is it?",
    "But you should know, Celeste Mountain is a place of great power. It is a place where the veil between worlds is thin, and where the boundaries of reality can be bent.",
    "The world is a dark and dangerous place, but it is also a place of beauty and wonder. It is a place where dreams can come true.",
    "The way I see it, the mountain can't bring you down. It can only show you who you really are.",
    "The way I see it, the mountain can't bring out anything that isn't already in you."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

window.onload = generateQuote;