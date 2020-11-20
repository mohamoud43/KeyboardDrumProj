
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return; // stop func from running
  audio.currentTime = 0; // rewinds play to the start
  audio.play();
  key.classList.add('playing'); 
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // do nothing
  this.classList.remove('playing') // this.>>key      --removes based on the key that is fired by the eventListener below
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
