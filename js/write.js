const title = document.querySelector(".intro-title");

function typeWriter(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = "";
  textArray.forEach((letter, index) => {
    setTimeout(() => (element.innerHTML += letter), 75 * index);
  });
}
typeWriter(title);
