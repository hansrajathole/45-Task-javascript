// Function to play sound
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // If no audio, stop the function
    audio.currentTime = 0; // Rewind to the start
    audio.play(); // Play audio
    key.classList.add("playing"); // Add playing class
  }
  
  // Function to remove the animation
  function removeTransition(e) {
    if (e.propertyName !== "transform") return; // Skip if it's not a transform
    this.classList.remove("playing");
  }
  
  // Add event listeners
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playSound);
  