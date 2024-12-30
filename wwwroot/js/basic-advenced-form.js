// Basic Form Advanced Form
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll("input[name='report-type']");
  const basicSection = document.querySelector(".basic-input");
  const advancedSection = document.querySelector(".advanced-input");

  function toggleSections() {
    const selectedValue = document.querySelector("input[name='report-type']:checked").value;

    if (selectedValue === "basic") {
      // Sadece temel bölümü göster
      basicSection.style.display = "block";
      advancedSection.style.display = "none";
    } else if (selectedValue === "advanced") {
      // Tüm bölümleri göster
      basicSection.style.display = "block";
      advancedSection.style.display = "block";
    }
  }

  // Radyo butonlarına olay dinleyicisi ekle
  radioButtons.forEach(button => button.addEventListener("change", toggleSections));

  // Sayfa yüklendiğinde doğru bölümü göster
  toggleSections();
});