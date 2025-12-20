// 2. Highlight All List Items. * Select **all** `<li>` elements inside `#todo-list`.
// * When the button is clicked, change the text color of all `<li>` items to **red**.


const changeColor = () => {

const liElements = document.querySelectorAll("#todo-list li");

liElements.forEach((elem) => {
  elem.style.color = "red";
});
};

const myButton = document.querySelector("#highlight-btn");
myButton.addEventListener("click", changeColor);