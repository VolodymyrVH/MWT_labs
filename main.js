import ColorChanger from "./library.js";

let button = document.getElementById("my-button");

const obj = new ColorChanger("my-paragraph", "red");

button.addEventListener("click", () => {
    obj.changeColor();
})