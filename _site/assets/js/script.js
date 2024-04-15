// Array of texts you want to cycle through
const texts = [
  "a computer science student at Cornell University.",
  "a screenwriter.",
  "an amateur chef.",
  "a videographer.",
  "a competitive gamer.",
  "a drummer.",
  "a software developer."
];


// Reference to the span element
const animatedText = document.getElementById('animatedText');

// Time delay for typing and erasing each character
const typingSpeed = 40; // Speed of typing (in milliseconds)
const erasingSpeed = 25; // Speed of erasing (in milliseconds)
const displayTime = 2000; // Time to display each text before erasing (in milliseconds)

// Initialize variables
let currentTextIndex = 0;
let charIndex = 0;
let isErasing = false;
let timeout;

function adjustedEaseInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * t * t + b;
  } else {
    t -= 1;
    return (-c / 2) * ((t * (t - 2)) - 1) + b;
  }
}

// Function to type and erase text with adjusted easing
function typeAndEraseText() {
  const currentText = texts[currentTextIndex];

  if (isErasing) {
    // Erasing the text with adjusted easing
    if (charIndex > 0) {
      charIndex--;
      animatedText.textContent = currentText.substring(0, charIndex);
      const easingDuration = adjustedEaseInOutQuad(charIndex, erasingSpeed, typingSpeed, currentText.length);
      timeout = setTimeout(typeAndEraseText, easingDuration);
    } else {
      isErasing = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(typeAndEraseText, typingSpeed);
    }
  } else {
    // Typing the text with adjusted easing
    if (charIndex < currentText.length) {
      animatedText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      const easingDuration = adjustedEaseInOutQuad(charIndex, typingSpeed, erasingSpeed, currentText.length);
      timeout = setTimeout(typeAndEraseText, easingDuration);
    } else {
      // Finished typing, wait before erasing
      isErasing = true;
      setTimeout(typeAndEraseText, displayTime);
    }
  }
}

// Get the "Projects" link in the navigation bar
const projectsLink = document.querySelector('a[href="/projects"]');

// Get the projects section
const projectsSection = document.getElementById('projects');

// Add an event listener to the "Projects" link
projectsLink.addEventListener('click', function (event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Scroll smoothly to the projects section
  projectsSection.scrollIntoView({
    behavior: 'smooth'
  });
});





// // Function to type and erase text
// function typeAndEraseText() {
//   const currentText = texts[currentTextIndex];

//   if (isErasing) {
//     // Erasing the text
//     if (charIndex > 0) {
//       charIndex--;
//       animatedText.textContent = currentText.substring(0, charIndex);
//       timeout = setTimeout(typeAndEraseText, erasingSpeed);
//     } else {
//       isErasing = false;
//       currentTextIndex = (currentTextIndex + 1) % texts.length;
//       setTimeout(typeAndEraseText, typingSpeed);
//     }
//   } else {
//     // Typing the text
//     if (charIndex < currentText.length) {
//       animatedText.textContent = currentText.substring(0, charIndex + 1);
//       charIndex++;
//       timeout = setTimeout(typeAndEraseText, typingSpeed);
//     } else {
//       // Finished typing, wait before erasing
//       isErasing = true;
//       setTimeout(typeAndEraseText, displayTime);
//     }
//   }
// }

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
  typeAndEraseText();
});
