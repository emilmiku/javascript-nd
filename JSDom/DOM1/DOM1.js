// 1. Change Heading Text. Select the `<h1>` element by its **id**.
// * When the button is clicked, change the heading text to: `New amazing title`.

const changeText = () => {
  const myHeading = document.querySelector("#main-title"); // CSS ID yra su #, todel ir cia reik

  myHeading.innerHTML = "New amazing title";
};

const myButton = document.querySelector("#change-title-btn");
myButton.addEventListener("click", changeText);
