const dropdown = document.querySelector(".nav-links");
const dropContent = document.querySelector(".container");

dropdown.addEventListener("click", () => {
    dropContent.classList.toggle("active")
})


const signIN =  document.querySelector(".basic");
const signMODAL =  document.querySelector(".ls");

signMODAL.addEventListener("click", ()=> {
    signIN.classList.add("active")
})


const add = document.querySelector(":active");
add.addEventListener()