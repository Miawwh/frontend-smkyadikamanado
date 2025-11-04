/* Show Even*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

// Mengatur form
function showEmailForm() {
  document.getElementById("email-form").style.display = "block";
  document.getElementById("wa-form").style.display = "none";
}

function showWaForm() {
  document.getElementById("email-form").style.display = "none";
  document.getElementById("wa-form").style.display = "block";
}

// Menutup pop-up saat mengklik di luar konten
window.onclick = function (event) {
  if (event.target == document.getElementById("popupBox")) {
    closePopup();
  }
};

// Fungsi untuk menutup dropdown saat arrow button diklik di mobile
function setupDropdownArrows() {
  // Cek jika layar mobile (menggunakan breakpoint yang sama dengan CSS)
  if (window.innerWidth < 1118) {
    const dropdownItems = document.querySelectorAll(".dropdown__item");

    dropdownItems.forEach((item) => {
      const arrowBtn = item.querySelector(".dropdown__arrow");
      const dropdownMenu = item.querySelector(".dropdown__menu");

      if (arrowBtn && dropdownMenu) {
        arrowBtn.addEventListener("click", (e) => {
          // Toggle max-height untuk dropdown menu
          if (dropdownMenu.style.maxHeight === "1000px") {
            dropdownMenu.style.maxHeight = "0";
            arrowBtn.style.transform = "rotate(0deg)";
          } else {
            dropdownMenu.style.maxHeight = "1000px";
            arrowBtn.style.transform = "rotate(180deg)";
          }

          // Mencegah event bubble ke parent agar tidak memicu hover effect
          e.stopPropagation();
        });
      }
    });
  }
}

// Panggil fungsi saat halaman dimuat
window.addEventListener("DOMContentLoaded", setupDropdownArrows);

// Panggil ulang saat window di-resize
window.addEventListener("resize", () => {
  // Debounce agar tidak terlalu sering dipanggil
  clearTimeout(window.resizeTimer);
  window.resizeTimer = setTimeout(setupDropdownArrows, 250);
});
