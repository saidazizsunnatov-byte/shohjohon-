
const qidiruv = document.querySelector("#qidiruv");
const kartochkalar = document.querySelectorAll(".karta");
const savatSoni = document.querySelector("#savatSoni");
const savatBtn = document.querySelector("#savatBtn");

let savat = 0;
let sevimlilar = 0;

// Sevimli tugmasi
document.querySelectorAll(".sevimli").forEach((tugma) => {
  tugma.addEventListener("click", () => {
    tugma.classList.toggle("active");

    if (tugma.classList.contains("active")) {
      tugma.textContent = "♥";
    } else {
      tugma.textContent = "♡";
    }

    sevimlilar = document.querySelectorAll(
      ".sevimli.active"
    ).length;
  });
});

// Savatga qo'shish
document.querySelectorAll(".savatga").forEach((tugma) => {
  tugma.addEventListener("click", () => {
    savat++;
    savatSoni.textContent = savat;

    alert("Mahsulot savatga qo'shildi!");
  });
});

// Mahsulot qidirish
qidiruv.addEventListener("input", () => {
  const matn = qidiruv.value.toLowerCase().trim();

  kartochkalar.forEach((karta) => {
    const nom = karta.dataset.nom.toLowerCase();

    if (nom.includes(matn)) {
      karta.style.display = "";
    } else {
      karta.style.display = "none";
    }
  });
});

// Savatni ko'rish
savatBtn.addEventListener("click", () => {
  alert("Savatingizda " + savat + " ta mahsulot bor.");
});
