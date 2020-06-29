const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_links');

  burger.addEventListener("click", () => {
    nav.classList.toggle('nav_links--active');
    burger.classList.toggle("burger--active");
  });
}

navSlide();


