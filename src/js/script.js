
const bodySelector = document.querySelector("body");
const htmlSelector = document.querySelector("html");
const cardsSelector = document.querySelectorAll(".card");
const textSelector =document.querySelectorAll(".text-gk")
const buttonSelector = document.getElementById("ld-btn");
const footerTextSelector = document.querySelectorAll(".footer-text");
const footerBoxSelector = document.querySelectorAll(".footer-box");
const textftSelector = document.querySelectorAll(".text-ft");

localStorage.setItem("theme","dark");

buttonSelector.addEventListener("click",function(){
    if((localStorage.getItem("theme")=="dark" )){
        htmlSelector.style.backgroundColor = "white";
        bodySelector.style.backgroundColor = "white";


        localStorage.setItem("theme","light");
        cardsSelector.forEach((e) => {
            //e.classList.add("bg-theme-light");
            //e.classList.remove("bg-theme-secondary");
            e.style.backgroundColor = "white";
        });
        textSelector.forEach((e) =>{
            e.style.color = "#000";
        })
        textftSelector.forEach((e) =>{
            e.style.color = "white";
        })
        footerBoxSelector.forEach((e) => {
            e.classList.add("bg-theme-light");
            e.classList.remove("bg-theme-secondary");
            //e.style.backgroundColor = "white";
        });
        footerTextSelector.forEach((e) => {
            e.classList.add("text-dark");
            e.classList.remove("text-white");
            //e.style.backgroundColor = "white";
        });
    } 
    else if (localStorage.getItem("theme")=="light"){
        htmlSelector.style.backgroundColor = "#0f172a";
        bodySelector.style.backgroundColor = "#0f172a";
        
        localStorage.setItem("theme","dark");
        
        cardsSelector.forEach((e) => {
            //e.classList.add("bg-theme-secondary");
            //e.classList.remove("bg-theme-light");
            e.style.backgroundColor = "#0f172a";
        });
        textSelector.forEach((e) =>{
            e.style.color = "white";
        })
        textftSelector.forEach((e) =>{
            e.style.color = "#000";
        })
        footerBoxSelector.forEach((e) => {
            e.classList.remove("bg-theme-light");
            e.classList.add("bg-theme-secondary");
            //e.style.backgroundColor = "white";
        });
        footerTextSelector.forEach((e) => {
            e.classList.remove("text-dark");
            e.classList.add("text-white");
            //e.style.backgroundColor = "white";    
        });
    }
})
