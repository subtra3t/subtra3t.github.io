window.addEventListener("load", () => {
  const terminal = new Typewriter(document.getElementById("type-term"), {loop: false});
  setTimeout(() => {
    terminal.typeString("Hello World")
      .pauseFor(500)
      .deleteChars(6)
      .typeString(". My name is <strong>subtra3t</strong>")
      .pauseFor(1250)
      .deleteChars(24)
      .typeString("Take a look at my portfolio site and some of my projects.")
      .start();
  }, 750);
});
