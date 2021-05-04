"use strict";

const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");
const cursor = document.getElementById("cursor");
const body = document.querySelector("body");

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);

function toggleBurgerMenu() {
  burgerBtn.classList.toggle("burger-btn--active");
  menu.classList.toggle("menu--active");
  document.body.classList.toggle("hide-overflow");
}
burgerBtn.addEventListener("click", toggleBurgerMenu);

function parallax(e) {
  this.querySelectorAll(".parallax-img").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 80;
    const y = (window.innerHeight - e.pageY * speed) / 80;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
function hide_cursor() {
  cursor.classList.add("cursor--hidden");
}

function move_cursor(e) {
  cursor.classList.remove("cursor--hidden");

  const cursor_width = cursor.offsetWidth * 0.5;
  const cursor_height = cursor.offsetHeight * 0.5;

  const cursor_x = e.clientX - cursor_width; // x-coordinate
  const cursor_y = e.clientY - cursor_height; // y-coordinate
  const cursor_pos = `translate(${cursor_x}px, ${cursor_y}px)`;
  cursor.style.transform = cursor_pos;
}

document.addEventListener("scroll", () => {
  document.querySelector(".scroll-title").style.left =
    Math.max(100 - 0.2 * window.scrollY) + "vw";
});

if (!isMobile) {
  document.addEventListener("mousemove", move_cursor);
  document.addEventListener("mouseleave", hide_cursor);

  document.querySelectorAll(["a", "input", "button"]).forEach((item) => {
    item.addEventListener("mouseover", () =>
      cursor.classList.add("cursor--hover")
    );
    item.addEventListener("mouseleave", () =>
      cursor.classList.remove("cursor--hover")
    );
  });

  document.addEventListener("mousemove", parallax);
}
