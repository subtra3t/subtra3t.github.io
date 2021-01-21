window.addEventListener("load", () => {
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  first.style.animationName = "fade-in";
  first.style.animationDuration = "1.25s";
  first.style.animationDelay = "0.25s";
  first.style.animationIterationCount = "1";
  first.id = "first-updated";
  second.style.animationName = "fade-in";
  second.style.animationDuration = "1s";
  second.style.animationDelay = "1.5s";
  second.style.animationIterationCount = "1";
  second.id = "second-updated";
});
