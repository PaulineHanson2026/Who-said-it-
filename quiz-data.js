// Question Bank - Quiz Data
const quizData = [
    {
        quote: "Workers are on their phones, they don't work, they don't turn up, they actually are lazy, and businesses are tied to it. They've had enough.",
        speaker: "hanson"
    },
    {
        quote: "Young people struggling under the economy are lazy and entitled... the affordability crisis is a 'hoax'.",
        speaker: "trump"
    },
    {
        quote: "Industrial relations, I can assure you, needs a complete overhaul, because it's not working. Businesses also tell me you can't sack people these days.",
        speaker: "hanson"
    },
    {
        quote: "They come in, and they immediately go on welfare, and they get healthcare, and they get everything.",
        speaker: "trump"
    },
    {
        quote: "Then they started bringing in the different migrants... a lot of people...are purely for the welfare system",
        speaker: "hanson"
    },
    {
        quote: "I believe we are in danger of being swamped by Asians. They have their own culture and religion, form ghettos and do not assimilate.",
        speaker: "hanson"
    },
    {
        quote: "You say, 'Well, there's good Muslims out there.' How can you tell me there are good Muslims?",
        speaker: "hanson"
    },
    {
        quote: "The people that came in, they're eating the cats. They're eating... they're eating the pets of the people that live there.",
        speaker: "trump"
    },
    {
        quote: "There are a lot of women out there who are making fatuous claims and lies against men",
        speaker: "hanson"
    },
    {
        quote: "They are bringing in people from South Africa at the moment... a lot of them have disease and AIDS... they will be a burden on our health system.",
        speaker: "hanson"
    }
];

// Shuffle quiz data function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}