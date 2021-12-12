const reviews = [{
        id: 1,
        img: "UTT.jpg",
        diploma: "Diploma in Telecom and Networking engineering at University Of Troyes.",
    },
    {
        id: 1,
        img: "LU1.jpg",
        diploma: "Bachelor degree in Mathematics at the Lebanese university, Hadath Campus.",
    },
    {
        id: 3,
        img: "MSA.jpg",
        diploma: "Lebanese Bachelor in General Science at MSA school.",

    },
]


const navToggle = document.querySelector(".menu-btn");
const links = document.querySelector(".nav__links");
const buttonEl = document.querySelector(".toggle-button")
navToggle.addEventListener("click", function() {

    links.classList.toggle("show-links");
    buttonEl.classList.toggle("button-show")
})


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const uniEl = document.getElementById("uni-el")
const diplomaEl = document.getElementById("dip-el")

let currentItem = 0

window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    uniEl.src = item.img;
    diplomaEl.textContent = item.diploma;

});

function showPerson(person) {
    const item = reviews[person];
    uniEl.src = item.img;
    diplomaEl.textContent = item.diploma;

}
prevBtn.addEventListener("click", function() {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})
nextBtn.addEventListener("click", function() {
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})