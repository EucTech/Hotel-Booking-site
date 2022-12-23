const menuListEl = document.querySelector(".menulist");
const barEl = document.querySelector(".fa-bars");

const sliderEl = document.querySelectorAll(".slide")
const PrevEl = document.querySelector(".arrow-left");
const nextEl = document.querySelector(".arrow-right");
let currentnum = 0;

PrevEl.addEventListener("click", () => {
    previmage()
})

nextEl.addEventListener("click", () => {
    nextimage()
})

function reset() {
    for (i = 0; i < sliderEl.length; i++) {
        sliderEl[i].classList.remove("active");
    }
};

function nextimage() {
 reset();

    if (currentnum === sliderEl.length - 1) {
        currentnum = -1;
    } 
        sliderEl[currentnum + 1].classList.add("active");
        currentnum++;
   
} 


function previmage() {
    reset();
    if (currentnum === 0) {
        currentnum = sliderEl.length;
    } 
    sliderEl[currentnum - 1].classList.add("active");
    currentnum--;
}

setInterval(nextimage, 3000);