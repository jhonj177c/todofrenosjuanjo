
    // Script para alternar el menú móvil
    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector(".hamburger");
        const mobileMenu = document.querySelector(".nav-links-mobile");
  
        hamburger.addEventListener("click", () => {
          mobileMenu.classList.toggle("show");
        });
      });