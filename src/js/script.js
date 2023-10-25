window.addEventListener(
  "load",
  () => {
    localStorage.setItem("theme", "dark");
  },
  false
);

const buttonSelector = document.getElementById("ld-btn");
const PrimaryColor = "#0f172a";
const SecondaryColor = "#1e293b";

buttonSelector.addEventListener("click", function () {
  const bodySelector = document.querySelector("body");
  const htmlSelector = document.querySelector("html");
  const cardsSelector = document.querySelectorAll(".card");
  const textSelector = document.querySelectorAll(".text-gk");

  const footerTextSelector = document.querySelectorAll(".footer-text");
  const footerBoxSelector = document.querySelectorAll(".footer-box");
  const textftSelector = document.querySelectorAll(".text-ft");

  const boxDarkElements = document.querySelectorAll(".bg-theme-secondary");
  const boxLigthElements = document.querySelectorAll(".bg-theme-light");

  const textWhiteElements = document.querySelectorAll(".text-white");
  const textDarkElements = document.querySelectorAll(".text-dark");

  if (localStorage.getItem("theme") == "dark") {
    localStorage.setItem("theme", "light");
    htmlSelector.style.backgroundColor = "white";
    bodySelector.style.backgroundColor = "white";

    boxDarkElements.forEach((element) => {
      element.classList.remove("bg-theme-secondary");
      element.classList.add("bg-theme-light");
    });

    textWhiteElements.forEach((element) => {
      element.classList.remove("text-white");
      element.classList.add("text-dark");
    });

    // cardsSelector.forEach((e) => {
    //   e.style.backgroundColor = "white";
    // });
    // textSelector.forEach((e) => {
    //   e.style.color = "#000";
    // });
    // textftSelector.forEach((e) => {
    //   e.style.color = "white";
    // });
    // footerBoxSelector.forEach((e) => {
    //   e.classList.add("bg-theme-light");
    //   e.classList.remove("bg-theme-secondary");
    // });
    // footerTextSelector.forEach((e) => {
    //   e.classList.add("text-dark");
    //   e.classList.remove("text-white");
    // });
  } else if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
    htmlSelector.style.backgroundColor = PrimaryColor;
    bodySelector.style.backgroundColor = PrimaryColor;

    boxLigthElements.forEach((element) => {
      element.classList.remove("bg-theme-light");
      element.classList.add("bg-theme-secondary");
    });

    textDarkElements.forEach((element) => {
        element.classList.add("text-white");
        element.classList.remove("text-dark");
      });
    // cardsSelector.forEach((e) => {
    //   e.style.backgroundColor = "#0f172a";
    // });
    // textSelector.forEach((e) => {
    //   e.style.color = "white";
    // });
    // textftSelector.forEach((e) => {
    //   e.style.color = "#000";
    // });
    // footerBoxSelector.forEach((e) => {
    //   e.classList.remove("bg-theme-light");
    //   e.classList.add("bg-theme-secondary");
    // });
    // footerTextSelector.forEach((e) => {
    //   e.classList.remove("text-dark");
    //   e.classList.add("text-white");
    // });
  }
});
