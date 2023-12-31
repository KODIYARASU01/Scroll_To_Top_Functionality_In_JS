let buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
