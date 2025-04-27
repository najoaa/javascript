// Play sound function
function playSound(e) {
  const keyCode = e instanceof KeyboardEvent ? e.keyCode : parseInt(e.currentTarget.getAttribute('data-key'));
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const pad = document.querySelector(`.drum-pad[data-key="${keyCode}"]`);
  
  if (!audio) return;
  
  audio.currentTime = 0;
  audio.play();
  
  if (pad) {
    pad.classList.add('active');
    setTimeout(() => pad.classList.remove('active'), 100);
  }
}

// Keyboard support
window.addEventListener('keydown', playSound);

// Mobile touch support
document.querySelectorAll('.drum-pad').forEach(pad => {
  pad.addEventListener('click', playSound);
  pad.addEventListener('touchstart', playSound);
});
