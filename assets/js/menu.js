const navSlide = () => {
  const burger = document.querySelector('[data-burger]');
  const nav = document.querySelector('[data-nav]');

  burger.addEventListener("click", () => {
    nav.classList.toggle('nav_links--active');
    burger.classList.toggle("nav_links__burger--active");
  });
}

navSlide();


