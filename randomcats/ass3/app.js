const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");

setInterval(() => {
  tarih.innerHTML = `${new Date().toLocaleString()}`;
}, 1000);

window.addEventListener("load", () => {
  containerDiv.style.visibility = "hidden";
  setTimeout(() => {
    loadingDiv.style.display = "none";
    containerDiv.style.display = "flex";
    containerDiv.style.visibility = "visible";
    // istekAt() //? burada gecikiyor
  }, 3000);
  istekAt(); //?asenkron çalıştığı için 3sn beklerken burası da hazır hale geldi
});

btn.addEventListener("click", () => {
  cardDiv.innerHTML = "";
  istekAt();
});

const istekAt = () => {
  cardDiv.innerHTML = `<img src="./img/loading.gif" />`;
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        //? Feetch api'da hatayi bizim yakalamiz gerekiyor.
        throw new Error(`Hata: ${res.status}`); //? bir hata firlatiyoruz
      }
      resJSON = res.json();
      console.log(resJSON);
      return resJSON;
    })
    .then((data) => {
      // veri = data
      // console.log(veri)
      showKedi(data);
    })
    .catch((err) => showError(err));
};

const showError = (err) => {
  cardDiv.innerHTML = `
  <h1 style.color="red">${err}</h1>
  <img src="./img/error.gif"/>`;
};

const showKedi = (veri) => {
  cardDiv.innerHTML = "";
  veri.forEach((element) => {
    console.log(element.url);
    cardDiv.innerHTML += `<div class="col-12 col-sm-6 col-lg-4">
      <div style="height:200px;">
        <img src="${element.url}" class="w-100 h-100" alt="...">
      </div>
</div>`;
  });
};
