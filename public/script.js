let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

const skillBtn = document.querySelectorAll(".skill-btn");
const skillItem = document.querySelectorAll(".skill-item");
const skillImg = document.querySelectorAll(".skill-img img");
console.log(skillImg);

skillBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        skillBtn.forEach(element => {
            element.classList.remove("skill-active");
        });
        btn.classList.add("skill-active");
        skillItem.forEach(element => {
            element.style.top = `${index*(-100)}%`;
            console.log("masuk");
        });
        skillImg.forEach(element => {
            element.classList.add("hidden");
        });
        skillImg[index].classList.remove("hidden");
    });
});

const menu = document.querySelector(".header-right ul");
const bread = document.querySelector(".bread img");
bread.addEventListener("click", () => {
    menu.classList.toggle("open");
    bread.classList.toggle("click");
});

const body = document.querySelector("body");
const header = document.querySelector("header");
const container = document.querySelectorAll(".container");


const btnDark = document.querySelector(".toggle");
btnDark.addEventListener("click", () => {
    btnDark.classList.toggle("light");
    body.classList.toggle("light");
    header.classList.toggle("light");
    container.forEach(element => {
        element.classList.toggle("light");
    });
});
