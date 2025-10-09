
// carousel move on click
const container = document.querySelector('.promo-cards');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

rightBtn.addEventListener('click', () => {
  container.scrollBy({ left: container.clientWidth / 1.2, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  container.scrollBy({ left: -container.clientWidth / 1.2, behavior: 'smooth' });
});


// cards turn on click
  const cards = document.querySelectorAll(".why-c");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Lukk alle andre kort først
      cards.forEach((c) => {
        if (c !== card) c.classList.remove("clicked");
      });
      // Bytt tilstand på det klikkede kortet
      card.classList.toggle("clicked");
    });
  });