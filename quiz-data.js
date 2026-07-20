// Question Bank - Quiz Data
const quizData = [
    {
        quote: "I believe we are in danger of being swamped by Asians.",
        speaker: "hanson"
    },
    {
        quote: "I've never been a fan of facts. You know, you could say anything if nobody ever checked.",
        speaker: "trump"
    },
    {
        quote: "The Australian people have given us a mandate.",
        speaker: "hanson"
    },
    {
        quote: "It's freezing and snowing in New York – we need global warming!",
        speaker: "trump"
    },
    {
        quote: "You'll understand when you get to my age that everything is worth doing if it's worth doing.",
        speaker: "hanson"
    },
    {
        quote: "Look, having nuclear—my uncle was a great professor and scientist and engineer.",
        speaker: "trump"
    },
    {
        quote: "I'm not a racist. I don't have a racist bone in my body.",
        speaker: "hanson"
    },
    {
        quote: "An 'extremely credible source' has called my office and told me that Barack Hussein Obama's birth certificate is a fraud.",
        speaker: "trump"
    },
    {
        quote: "We need to look at Queensland. They have opened the flood gates.",
        speaker: "hanson"
    },
    {
        quote: "I have the best words. I have the best, much better than anybody else.",
        speaker: "trump"
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
