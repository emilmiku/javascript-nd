//const users = [
  //  { name: "Alice", age: 25 },
//    { name: "Bob", age: 30 },
//    { name: "Charlie", age: 22 }
//];

//const [user1,,user3] = users;

const changeColour = () => {
    const para = document.getElementById("content");
    para.style.color ="#da0b73ff"
};

const button = document.getElementById("button");

button.addEventListener("click", changeColour);