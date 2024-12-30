// Phone Dropdown Country Codes Filling
function populateCountryCodes(countryCodes) {
  const list = document.getElementById("country-code-list");

  // Var olan öğeleri temizle
  list.innerHTML = '<input type="text" class="form-control" id="country-code-search" placeholder="Ara (örn: 93)">';

  // Her ülkeyi listeye ekle
  countryCodes.forEach(country => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
							<button class="dropdown-item" data-code="${country.dial_code}">
									${country.name} (${country.dial_code})
							</button>`;
    list.appendChild(listItem);
  });

  // Seçim olaylarını ekle
  attachCountryCodeEvents();
}

// Ülke kodu seçimi
function attachCountryCodeEvents() {
  document.querySelectorAll("#country-code-list .dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
      const code = item.getAttribute("data-code");
      document.getElementById("country-code-dropdown").textContent = code;
    });
  });
}

// Ülke kodu arama
document.getElementById("country-code-list").addEventListener("input", function (e) {
  if (e.target.id === "country-code-search") {
    const search = e.target.value.toLowerCase();
    const items = document.querySelectorAll("#country-code-list .dropdown-item");

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(search) ? "block" : "none";
    });
  }
});

// API'den veri çek ve dropdown'u doldur
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://countriesnow.space/api/v0.1/countries/codes")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      populateCountryCodes(data.data); // API'den gelen 'data' dizisi
    })
    .catch(error => {
      console.error("API'den veri alınamadı:", error);
    });
});