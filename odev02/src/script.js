"use strict";

// Sonradan kullanacağımız bazı değişkenleri yazıyoruz
const alanId = document.getElementById("alanId");
const win = document.getElementById("kazandiId");
const lose = document.getElementById("yenildiId");

const img0 = document.getElementById("img-0");
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");

const btnWin = document.getElementById("btn-win");
const btnLose = document.getElementById("btn-lose");

// Kazanma veya kaybetme durumunda kullanacağımız fonksiyonlar
const kazandinYazi = function () {
  alanId.style.display = "none";
  win.style.display = "block";
};

const kaybettinYazi = function () {
  alanId.style.display = "none";
  lose.style.display = "block";
};

const kartlarArr = ["cat.jpg", "dog.jpg", "bird.jpg"];

let playing;
let hataliSecim;

const init = function () {
  // Oyunun default ayarları
  playing = true;
  hataliSecim = 0;

  // Arrayı karıştırıyoruz
  const kartlarıKarıstır = (array) => {
    let currentIndex = array.length;
    let geciciDeger;
    let randomDeger;
    while (0 !== currentIndex) {
      randomDeger = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      geciciDeger = array[currentIndex];
      array[currentIndex] = array[randomDeger];
      array[randomDeger] = geciciDeger;
    }
    return array;
  };

  // Karıştırmış olduğumuz arrayi HTML'e uyarlıyoruz
  const karısıkFotolar = kartlarıKarıstır(kartlarArr);
  for (let i = 0; i < 3; i++) {
    document.getElementById("img-" + i).src = karısıkFotolar[i];
  }

  // AlanID yazısı oyun başındaki haline geri dönüyor
  alanId.style.display = "block";
  win.style.display = "none";
  lose.style.display = "none";

  // Kartları tekrar kapatıyoruz
  img0.style.opacity = 0;
  img1.style.opacity = 0;
  img2.style.opacity = 0;

  // Oyunu yeniden başlattığımızda tekrar tıklanabilir hale gelmiş gibi gösteriyoruz
  img0.style.cursor = "pointer";
  img1.style.cursor = "pointer";
  img2.style.cursor = "pointer";
};
init();

// "Buraya" yazılarına click eventi atıyoruz
btnWin.addEventListener("click", init);
btnLose.addEventListener("click", init);

// Click eventini oluşturuyoruz
const click = function (imageName) {
  imageName.onclick = function (e) {
    // Bu kontrol sayesinde açılan bir image'a tekrar hatalı tıklanamıyor
    if (imageName.style.opacity == 0) {
      // Tıkladığımızda image görünür oluyor
      imageName.style.cursor = "auto";
      imageName.style.opacity = 1;
      if (playing) {
        const image = e.target.getAttribute("src");
        // Kazanma şartları
        if (image === "cat.jpg" && hataliSecim < 2) {
          kazandinYazi();
          playing = false;
        } else if (image !== "cat.jpg") {
          hataliSecim++;
          if (hataliSecim >= 2) {
            kaybettinYazi();
          }
        }
      }
    }
  };
};
// Her image'a click eventi atanıyor
click(img0);
click(img1);
click(img2);
