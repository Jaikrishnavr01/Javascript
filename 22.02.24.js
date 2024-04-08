// Define a class called Animator
class Animator {
  // Constructor to initialize the selector property with the given selector
  constructor(selector) {
    this.selector = document.querySelector(selector); // Store the selected DOM element
  }

  // Method to fade out the element over a given time
  fadeOut(time) {
    if (this.selector.classList.contains("fadeOut-active")) { // Check if fadeOut-active class is already applied
      this.selector.style.opacity = 1; // Make element fully visible
      this.selector.classList.remove("fadeOut-active"); // Remove fadeOut-active class
    } else {
      // Apply fade out transition to the element
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.opacity = 0; // Make element fully transparent
      this.selector.classList.add("fadeOut-active"); // Add fadeOut-active class
    }
  }

  // Method to move the element over a given time and distance
  move(time, { x = 0, y = 0 }) {
    if (this.selector.classList.contains("move-active")) { // Check if move-active class is already applied
      this.selector.style.transform = `translate(${0}px, ${0}px)`; // Reset element's position
      this.selector.classList.remove("move-active"); // Remove move-active class
    } else {
      // Apply move transition to the element
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.transform = `translate(${x}px, ${y}px)`; // Move the element to specified position
      this.selector.classList.add("move-active"); // Add move-active class
    }
  }

  // Method to change the color and font size of the element over a given time
  color(time) {
    if (this.selector.classList.contains("color-active")) { // Check if color-active class is already applied
      this.selector.style.color = "black"; // Change text color to black
      this.selector.style.fontSize = "20px"; // Set font size to 20px
      this.selector.classList.remove("color-active"); // Remove color-active class
    } else {
      // Apply color transition to the element
      this.selector.style.color = "red"; // Change text color to red
      this.selector.style.fontSize = "40px"; // Set font size to 40px
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.classList.add("color-active"); // Add color-active class
    }
  }
}

// Create instances of Animator for different elements
const intro = new Animator("h1"); // Create an instance for h1 element
const another = new Animator("p"); // Create an instance for p element
const btnAnim = new Animator("button"); // Create an instance for button element

// Select the button element
const button = document.querySelector("button");

// Add click event listener to the button
button.addEventListener("click", () => {
  // Perform animations on different elements when the button is clicked
  intro.move(1, { x: 100, y: 200 }); // Move the h1 element
  intro.fadeOut(1); // Fade out the h1 element
  another.color(2); // Change color and font size of p element
  btnAnim.move(2, { x: 450 }); // Move the button element
});
