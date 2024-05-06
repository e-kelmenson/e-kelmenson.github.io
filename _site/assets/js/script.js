document.addEventListener('DOMContentLoaded', function () {
  // Get the intro-text element
  const introText = document.querySelector('.intro-text');

  // Add the slide-in class to trigger the CSS animation
  if (introText) {
    introText.classList.add('slide-in');
  }
});


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
// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
  typeAndEraseText();
});

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

// Select all project elements
const projects = document.querySelectorAll('.project');

// Callback function for Intersection Observer
function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop observing the element once it is visible
      observer.unobserve(entry.target);
    }
  });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersect, {
  root: null, // Observing within the entire document
  rootMargin: '0px',
  threshold: 0.1 // Trigger callback when 10% of the element is in view
});

// Observe each project element
projects.forEach(project => {
  observer.observe(project);
});

// Get the dropdown menu links
const dropdownLinks = document.querySelectorAll('.dropdown-menu li a');
// const projects = document.querySelectorAll('.project');

// Function to filter projects
function filterProjects(category) {
  projects.forEach(project => {
    const projectCategory = project.getAttribute('data-category');

    // Show or hide projects based on the filter
    if (category === 'all' || projectCategory === category) {
      project.style.display = 'flex';
    } else {
      project.style.display = 'none';
    }
  });
}

// Add click event listener to each dropdown link
dropdownLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const filterCategory = link.getAttribute('data-filter');
    filterProjects(filterCategory);
  });
});

// Initialize the filter to show all projects by default
filterProjects('all');



document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Collect form data
  const formData = new FormData(this);

  // Send form data to your server or form submission service
  fetch('/your-form-submission-endpoint', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        this.reset(); // Clear the form fields
      } else {
        alert('Error sending message.');
      }
    })
    .catch(error => {
      alert('Error sending message: ' + error.message);
    });
});









document.addEventListener('DOMContentLoaded', function() {
  const imageElement = document.getElementById('cooking');
  const imageSources = ['/assets/files/ramen-web.png', '/assets/files/danish-web.png', '/assets/files/curry-web.png', '/assets/files/eggplant-web.png'];
  let currentIndex = 0;

  function cycleImages() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    imageElement.src = imageSources[currentIndex];
  }

  // Change image every 3 seconds (3000 milliseconds)
  setInterval(cycleImages, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
  const imageElement = document.getElementById('cats');
  const imageSources = ['/assets/files/moo-web.png', '/assets/files/hoarding-web.png', '/assets/files/pepper-web.png'];
  let currentIndex = 0;

  function cycleImages() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    imageElement.src = imageSources[currentIndex];
  }

  // Change image every 3 seconds (3000 milliseconds)
  setInterval(cycleImages, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
  const imageElement = document.getElementById('hiking');
  const imageSources = ['/assets/files/hiking1-web.png', '/assets/files/hiking2-web.png', '/assets/files/hiking3-web.png', '/assets/files/hiking4-web.png', '/assets/files/hiking5-web.png', '/assets/files/hiking6-web.png', '/assets/files/hiking7-web.png', '/assets/files/hiking8-web.png'];
  let currentIndex = 0;

  function cycleImages() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    imageElement.src = imageSources[currentIndex];
  }

  // Change image every 3 seconds (3000 milliseconds)
  setInterval(cycleImages, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
  const imageElement = document.getElementById('blender');
  const imageSources = ['/assets/files/blender-web.png', '/assets/files/blender2-web.png'];
  let currentIndex = 0;

  function cycleImages() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    imageElement.src = imageSources[currentIndex];
  }

  // Change image every 3 seconds (3000 milliseconds)
  setInterval(cycleImages, 3000);
});
