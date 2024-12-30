// Park Açıklaması
const dropdownButtonPark = document.getElementById("dropdownButtonPark");
const dropdownButtonArac = document.getElementById("dropdownButtonArac");
const dropdownItemsPark = document.querySelectorAll(".ddi-park");
const dropdownItemsArac = document.querySelectorAll(".ddi-arac");
const descriptionInput = document.getElementById("descriptionInput");

dropdownItemsPark.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const value = item.getAttribute("data-value");
    const text = item.textContent.trim();
    dropdownButtonPark.textContent = text;
    if (value === "kendi") {
      descriptionInput.value = "Kendine ait otoparkı mevcuttur.";
    } else if (value === "yok") {
      descriptionInput.value = "Otoparkı yoktur.";
    }
  });
});

dropdownItemsArac.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const value = item.getAttribute("data-value");
    if (value === "mb") {
      dropdownButtonArac.textContent = "MB";
    } else if (value === "mbg") {
      dropdownButtonArac.textContent = "MBG";
    } else if (value === "diger") {
      dropdownButtonArac.textContent = "Diğer"
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".calc-input");
  const totalInput = document.getElementById("total");
  function calculateTotal() {
    let total = 0;
    inputs.forEach(input => {
      const value = parseInt(input.value) || 0;
      total += value;
    });
    totalInput.value = total;
  }
  inputs.forEach(input => {
    input.addEventListener("input", calculateTotal);
  });
  calculateTotal();
});

















