const h1 = document.querySelector("h1");

const fun1 = function (e) {
  alert("addEventListener: Great! you are reading the heading :D");

  h1.removeEventListener("mouseenter", fun1);
};

h1.addEventListener("mouseenter", fun1);
