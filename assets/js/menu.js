const navSlide = () => {
  const burger = document.querySelector('.nav_links__burger');
  const nav = document.querySelector('.nav_links');

  burger.addEventListener("click", () => {
    nav.classList.toggle('nav_links--active');
    burger.classList.toggle("nav_links__burger--active");
  });
}

navSlide();


