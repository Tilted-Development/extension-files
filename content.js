// Modify the background-color of the element with the 'wrapper' class
const wrapperElement = document.querySelector('.wrapper');
if (wrapperElement) {
    wrapperElement.style.backgroundColor = 'rgb(255, 200, 200)';
}

// Get all the .screenBasic-word elements inside .screenBasic-lines
const wordElements = document.querySelectorAll('.screenBasic-lines .screenBasic-word');

// Initialize an array to hold the cleaned content
let cleanedText = [];

// Loop through each .screenBasic-word element
wordElements.forEach(wordElement => {
    // Extract the text content of each word and remove HTML tags
    let wordText = wordElement.textContent || wordElement.innerText;
    
    // Push the cleaned word to the array (with all HTML tags removed)
    cleanedText.push(wordText.trim());
});

// Join the array into a string, with words separated by a space
let finalText = cleanedText.join(' ');

// Output the final cleaned text (you can process it further if needed)
console.log(finalText);

// Modify the <h1> element's text content
const headerElement = document.querySelector('.well.well--f.lessonNav-lesson');
if (headerElement) {
    headerElement.textContent = headerElement.textContent + " [WITH CHEATS!!]";
}