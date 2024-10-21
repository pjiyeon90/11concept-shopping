const BathText = document.querySelector(".bath-text");

window.addEventListener("scroll", () => {
  const v = window.scrollY;
  console.log(v);

  if (1100 <= v && v <= 1850) {
    BathText.style.animation = "slideIn 1.5s ease-out forwards";
  } else {
    BathText.style.animation = "slideOut 3s ease-out forwards";
  }
});
