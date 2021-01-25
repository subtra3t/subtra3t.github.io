window.addEventListener("load", () => {
  const terminal = new TypeWriter(document.getElementById("type-term"), {loop: false});
  setTimeout(() => {
    terminal.typeString("Hello World")
      .pausefor(500)
      .deleteChars(6)
      .typeString(". My name is <strong>Devansh Patil</strong>")
      .pauseFor(1250)
      .deleteChars(24)
      .typeString("Take a look at my portfolio site and some of my projects.")
      .start();
  }, 750);
});
