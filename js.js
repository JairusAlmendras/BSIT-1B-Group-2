document.addEventListener("DOMContentLoaded", function () {

    

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("open");

            const isOpen = navLinks.classList.contains("open");

            menuToggle.textContent = isOpen ? "✕" : "☰";

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            });

        });

    }

    
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    
    const guideSearch = document.getElementById("guideSearch");
    const guideFilter = document.getElementById("guideFilter");
    const guideCards = document.querySelectorAll(".gutom-C");

    function filterGuides() {

        if (!guideSearch || !guideFilter) return;

        const searchText = guideSearch.value.toLowerCase();
        const selectedCategory = guideFilter.value.toLowerCase();

        guideCards.forEach(function (card) {

            const cardText = card.textContent.toLowerCase();

            const cardCategory = card.dataset.category.toLowerCase();

            const matchesSearch = cardText.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                cardCategory === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    }

    if (guideSearch && guideFilter) {
        guideSearch.addEventListener("input", filterGuides);
        guideFilter.addEventListener("change", filterGuides);
    }

});
