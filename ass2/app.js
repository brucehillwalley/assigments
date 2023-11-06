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
