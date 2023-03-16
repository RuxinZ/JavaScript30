// If the js code lives outside the index.html file
// Need to wrap the JavaScript code in index.js with the DOMContentLoaded event listener
// to prevent the JS code being executed before the DOM has fully loaded.
document.addEventListener('DOMContentLoaded', () => {
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) // need the "" 
    if (!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play(); //If you call play on an audio that is currently playing, it won't work
  
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) // select by the class
    key.classList.add('playing');
  }
  
  function removeTransition(e) {
    console.log(e)
    if (e.propertyName !== 'transform') return;
    console.log(this.classList)
    this.classList.remove('playing'); // <==> e.target.classList.remove()
  }
  
  window.addEventListener('keydown', playSound)
  
  // Attach the event listener to all .key elements
  const keys = document.querySelectorAll('.key');
  // When you have an array of elements, you have to loop over them to attach the event listener.
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  
})





// Review:
// Changes: 
// 1. play sound => triggered by keydown
// 2. change CSS => triggered by keydown
// 3. change CSS back => triggered by transitionend