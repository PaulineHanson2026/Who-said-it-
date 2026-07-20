# Who Said It? - Pauline Hanson vs Donald Trump Quiz

An interactive Vanilla JavaScript quiz that challenges you to identify whether quotes came from Pauline Hanson or Donald Trump.

## Features

✅ **Question Bank** - 10 curated quotes from both speakers  
✅ **Interactive Quiz Interface** - User-friendly UI with photos  
✅ **Score Tracking** - Real-time tracking of correct/incorrect answers  
✅ **Results Display** - Comprehensive results with accuracy breakdown  

## How to Play

1. Open `index.html` in your web browser
2. Click "Start Quiz" to begin
3. Read each quote carefully
4. Click on either "Pauline Hanson" or "Donald Trump" to select your answer
5. The correct answer will be highlighted in green
6. See your final score and accuracy at the end
7. Click "Retake Quiz" to try again with a new set of shuffled questions

## Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript (ES6)** - No frameworks or dependencies

## Files Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── quiz-data.js        # Question bank and utility functions
├── script.js           # Quiz application logic
├── img/
│   ├── pauline-hanson.jpg    # Photo of Pauline Hanson
│   └── donald-trump.jpg      # Photo of Donald Trump
└── README.md           # This file
```

## Installation

No installation required! Just:

1. Clone or download this repository
2. Add photos of Pauline Hanson and Donald Trump to the `img/` folder
   - Name them `pauline-hanson.jpg` and `donald-trump.jpg`
3. Open `index.html` in your browser

## Customization

### Adding More Questions

Edit `quiz-data.js` and add new objects to the `quizData` array:

```javascript
{
    quote: "Your quote here",
    speaker: "hanson" // or "trump"
}
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #e74c3c;
    /* ... more colors ... */
}
```

## Screenshots

### Start Screen
- Displays photos of both speakers
- Shows quiz title and instructions
- Start button

### Quiz Screen
- Progress bar showing quiz completion
- Quote in large, readable text
- Two answer buttons with speaker photos
- Feedback on selection (correct in green, incorrect in red)

### Results Screen
- Final score in a circle display
- Performance message
- Breakdown of correct, incorrect, and accuracy percentage
- Retake quiz button

## Responsive Design

The quiz is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Credits

Quiz concept inspired by The Guardian's "Who said it?" quiz format.

## License

Open source - feel free to modify and share!
