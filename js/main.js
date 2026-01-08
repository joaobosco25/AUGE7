// ===========================
// Minimalist Logic
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Loader
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);

    // Mobile Menu
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Portfolio - Selected Few Images
    const portfolioImages = [
        '01.png', '02.png', '03.png', 'DSC00025.jpg', 'DSC01964.jpg', 'IMG_2198.jpg'
    ];

    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (portfolioGrid) {
        portfolioImages.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'portfolio-item-min';
            item.innerHTML = `<img src="assets/images/portfolio/${img}" alt="Auge7 Work">`;
            portfolioGrid.appendChild(item);
        });
    }

    // Intersection Observer for Opacity Animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .portfolio-item-min, .section-label').forEach(el => {
        observer.observe(el);
    });

    // Hero Line Animation on Scroll
    window.addEventListener('scroll', () => {
        const line = document.querySelector('.hero-line');
        if (line) {
            const scroll = window.scrollY;
            line.style.width = (50 + scroll * 0.5) + 'px';
        }
    });
});


// ===== MODAL FIX DEFINITIVO =====

// abrir
document.addEventListener("click", function (e) {
    const card = e.target.closest(".glass-card[data-modal]");
    if (!card) return;

    const modal = document.getElementById(card.dataset.modal);
    if (modal) modal.classList.add("active");
});

// fechar clicando no X
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-close")) {
        const modal = e.target.closest(".modal-overlay");
        if (modal) modal.classList.remove("active");
    }
});

// fechar clicando no fundo
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-overlay")) {
        e.target.classList.remove("active");
    }
});
