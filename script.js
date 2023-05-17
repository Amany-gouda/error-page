let toggle = document.getElementById("nav-toggle");
let close = document.getElementById("nav-close");
let nav = document.getElementsByClassName("main-list");
let ul = document.getElementsByClassName("nav-list");
let li = document.getElementsByClassName("nav-li");

toggle.addEventListener("click",()=>{
    nav[0].classList.add("show");
})
close.addEventListener("click",()=>{
    nav[0].classList.remove("show");
})