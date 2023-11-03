
const header = document.querySelector(".header");
header.style.backgroundColor = "orangered";
header.style.color = "white";
header.style.padding = "1rem";
header.style.textAlign = "center";

const title = document.getElementById("title");
title.textContent = "Javascript Dom Assigment 1";

const navItem = document.querySelector(".nav-item");

navItem.style.display = "flex";
navItem.style.justifyContent = "center";
navItem.style.gap = "1rem";
navItem.style.listStyle = "none";

const user = document.querySelector("#username");
const pass = document.querySelector("#password");

user.value = "Bruce";
pass.value = "123456";
pass.type = "text";
user.disabled = "true";
pass.disabled = "true";

const btn = document.querySelector(".btn");
btn.style.backgroundColor = "greenyellow";
btn.style.color = "black";
btn.style.padding = "1rem";
btn.style.textAlign = "center";
btn.style.borderRadius = "10px";
btn.style.border = "none";
btn.textContent = "Giriş Yap";

const projects = document.getElementById("projects");
projects.style.marginTop="50px"

const h3 = projects.firstElementChild;

h3.textContent = "Js DOM Projects";

const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];

myProjects.forEach((e)=>{
    let li =document.createElement("li")
    projects.lastElementChild.appendChild(li)
    li.textContent=e
})

const img=document.getElementById("img")
img.style.backgroundColor="green"

let foto=document.createElement("img")
foto.src="bocuk.jpeg"
foto.style.height="300px"


img.appendChild(foto)

img.style.marginTop="25px"