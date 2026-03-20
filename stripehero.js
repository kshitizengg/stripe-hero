const gradient = document.querySelector('.gradient');
let tick = 0;

function animate() {
  tick += 0.015; // Adjust this for speed (smaller = slower)

  // Subtle movement offsets using sine/cosine waves
  const moveX = (amp) => Math.sin(tick) * amp;
  const moveY = (amp) => Math.cos(tick * 0.8) * amp;

  // Update the CSS variables for each blob
  // The 'offset' ensures they don't all move in the exact same direction
  gradient.style.setProperty('--x1', `${385 + moveX(30)}px`);
  gradient.style.setProperty('--y1', `${-24 + moveY(20)}px`);
  
  gradient.style.setProperty('--x2', `${-940 + moveX(50)}px`);
  gradient.style.setProperty('--y2', `${290 + moveY(40)}px`);

  gradient.style.setProperty('--x5', `${122 + Math.cos(tick) * 40}px`);
  gradient.style.setProperty('--y5', `${-120 + Math.sin(tick) * 30}px`);

  // Repeat for other variables if you want more chaotic movement
  // Or just update the most prominent ones for a 'subtle' feel

  requestAnimationFrame(animate);
}

animate();