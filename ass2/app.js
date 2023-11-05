const bg = document.querySelector(".bgDiv");

// bg.style.backgroundColor="red"

const btnClick = document.querySelector(".btn-click");
const btnMouseOver = document.querySelector(".btn-over");

// btnClick.style.backgroundColor = "red";

function renkUret() {
  // return Math.floor(Math.random()*256)

  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
}

btnClick.addEventListener("click", (e) => {
  // bg.style.backgroundColor=`rgb(${renkUret()},${renkUret()},${renkUret()})`
  bg.style.backgroundColor = renkUret();
});
