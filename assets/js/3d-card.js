const THRESHOLD = 3;

function handleHover(event, card) {
  const { clientX, clientY, currentTarget } = event;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(event, card) {
  card.style.transform = `perspective(${event.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!window.matchMedia('(prefers-reduced-motion)').matches) {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (event) => handleHover(event, card));
    card.addEventListener('mouseleave', (event) => resetStyles(event, card));
  });
}
