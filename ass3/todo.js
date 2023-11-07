const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector(".add-btn");
const ulListe = document.querySelector(".liste");
const silBtn = document.querySelector(".sil");
const listArr = [];

addBtn.addEventListener("click", (e) => {
  if (inputBox.value.trim() == "") {
    alert("değer girin");
  } else {
    if (listArr.includes(inputBox.value)) {
      alert("farklı girin");
    } else {
      listArr.push(inputBox.value);

      const liste = document.createElement("li");
      liste.className = "todo";
      // const text = document.createTextNode(inputBox.value)
      liste.innerHTML = `${inputBox.value} <button class="sil">🗑</button>`;
      // liste.textContent=inputBox.value

      liste.style.color = "white";
      liste.style.listStyleType = "number";

      // liste.appendChild(text)
      ulListe.appendChild(liste);
      inputBox.value = "";
      inputBox.focus();
    }
  }
});

ulListe.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.className == "sil") {
    console.log("sile tık");

    // e.target.parentNode.remove()
    //? bir üste çıkıyor li yi lsilmemiz lazım parentElement de olur
    //? e.target.parentNode.parentNode.remove() ul yi siler

    e.target.closest("li").remove();
  } else if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("check-it"); //! class ı nokta koyarak yazma lütfen hata oluyor
  }
});

inputBox.addEventListener("keydown", (e) => {
  //? form için de olursa yazmaya gerek kalmaz submit çalışır enter da
  if (e.key == "Enter") {
    addBtn.click();
    console.log(e.altKey);
  }
});

// inputBox.addEventListener("keypress", (e) => {
//   //? form için de olursa yazmaya gerek kalmaz submit çalışır enter da
//   console.log(e);
//   if (e.key === "Enter" && e.altKey) {
//     addBtn.click();
//   }
// });

// "Alt" tuşuna basılırken "Enter" tuşuna basıldığında tetiklenen 
// olaylar tarayıcı güvenlik politikaları nedeniyle genellikle çalışmaz.
//  Bu tür kombinasyonlar genellikle tarayıcı tarafından engellenir.
