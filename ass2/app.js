const bg = document.querySelector(".bgDiv");

// bg.style.backgroundColor="red"

const btnClick = document.querySelector(".btn-click");
const btnMouseOver = document.querySelector(".btn-over");

console.log(document.getElementById("colorInput").value);
document.getElementById("colorText").textContent = "#take hex here";

// btnClick.style.backgroundColor = "red";
// btnMouseOver.style.backgroundColor = "red";

function rgbUret() {
  return Math.floor(Math.random() * 256);
}

//stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
//? Aşağıdakinin çalışma mantığını öğren alternatifler yukarı linkte

https: function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

let colorStr = "";

btnClick.addEventListener("click", () => {
  colorStr = rgbToHex(rgbUret(), rgbUret(), rgbUret());
  bg.style.backgroundColor = colorStr;
  document.getElementById("colorText").textContent = colorStr;
  document.getElementById("colorText").style.color = colorStr;
  document.getElementById("colorInput").value = colorStr;
});

btnMouseOver.addEventListener("mouseover", () => {
  colorStr = rgbToHex(rgbUret(), rgbUret(), rgbUret()).toUpperCase();
  bg.style.backgroundColor = colorStr;
  document.getElementById("colorText").textContent = colorStr;
  document.getElementById("colorText").style.color = colorStr;
  document.getElementById("colorInput").value = colorStr;
});

document.getElementById("copy").addEventListener("click", () => {
  navigator.clipboard.writeText(colorStr);
});

document.getElementById("colorInput").addEventListener("input", () => {
  bg.style.backgroundColor = document.getElementById("colorInput").value;
  document.getElementById("colorText").style.color =
    document.getElementById("colorInput").value;
  document.getElementById("colorText").textContent =
    document.getElementById("colorInput").value;
});

/* -------------------------------------------------------------------------- */
/*                              ALTERNATİF İNCELEYEBİLİRSİN                             */
/* -------------------------------------------------------------------------- */
// function RandomColor() {
//   let items = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//       color += items[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// const main = document.querySelector(".bgDiv");
// const inputbox = document.querySelector("#colorInput");
// const colorno = document.querySelector("#colorText");
// const clipboard = document.querySelector("#coppy");
// const h1 = document.getElementById("baslik");

// function equal (){
//   h1.style.color=inputbox.value = main.style.backgroundColor = colorno.textContent = RandomColor();    
// }

// document.getElementById("ColorButton").addEventListener("click", equal)
// document.getElementById("mouseover").addEventListener("mouseover", equal);
// window.addEventListener('load', equal);

// inputbox.addEventListener("input", () => {
//   const selectColor = inputbox.value;
//  h1.style.color=main.style.backgroundColor= selectColor;
// });

// clipboard.addEventListener('click', () => {
//  navigator.clipboard.writeText(colorno.innerText)
      
// })