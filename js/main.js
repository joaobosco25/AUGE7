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

    // Portfolio - All Gallery Images
    const portfolioImages = [
        '01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png', '08.png', '09.png', '10.png', '11.png',
        '20250708_095044.jpg', 'DSC00025.jpg', 'DSC00030.jpg', 'DSC00034.jpg', 'DSC01964.jpg', 'DSC02315.jpg',
        'DSC03047.jpg', 'DSC03059.jpg', 'DSC03491.jpg', 'DSC03532.jpg', 'DSC03715.jpg', 'DSC03808.jpg',
        'DSC04605.jpg', 'DSC04842.jpg', 'DSC05089.jpg', 'DSC05096.jpg', 'DSC05111.jpg', 'DSC05233.jpg',
        'DSC05551.jpg', 'DSC05891.jpg', 'DSC05909.jpg', 'DSC06036.jpg', 'DSC06301.jpg', 'DSC09980.jpg',
        'DSC09988.jpg', 'IMG_2198.jpg', 'IMG_2200.jpg', 'IMG_2201.jpg', 'IMG_2202.jpg', 'IMG_2203.jpg',
        'IMG_2204.jpg', 'IMG_2206.jpg', 'IMG_2207.jpg', 'IMG_2209.jpg', 'IMG_2212.jpg', 'IMG_2213.jpg',
        'IMG_2234.jpg', 'IMG_2235.jpg', 'IMG_2236.jpg', 'IMG_2239.jpg', 'IMG_2240.jpg', 'IMG_2242.jpg',
        'IMG_2243.jpg', 'IMG_2244.jpg', 'IMG_2245.jpg', 'IMG_2247.jpg', 'IMG_2249.jpg', 'IMG_2250.jpg',
        'IMG_2251.jpg', 'IMG_2253.jpg', 'IMG_2254.jpg', 'IMG_E7114.jpg', 'IMG_E7117.jpg', 'IMG_E7119.jpg',
        'IMG_E7124.jpg', 'IMG_E7130.jpg', 'IMG_E7134.jpg', 'IMG_E7139.jpg', 'IMG_E7140.jpg', 'IMG_E7143.jpg',
        'IMG_E7150.jpg', 'IMG_E7152.jpg', 'IMG_E7156.jpg', 'IMG_E7158.jpg', 'IMG_E7161.jpg', 'IMG_E7162.jpg',
        'IMG_E7165.jpg', 'IMG_E7166.jpg', 'IMG_E7168.jpg', 'IMG_E7171.jpg', 'IMG_E7173.jpg', 'IMG_E7174.jpg',
        'IMG_E7179.jpg', 'IMG_E7184.jpg', 'IMG_E7187.jpg', 'IMG_E7190.jpg', 'IMG_E7194.jpg', 'IMG_E7196.jpg',
        'IMG_E7201.jpg', 'IMG_E7204.jpg', 'IMG_E7207.jpg', 'IMG_E7208.jpg', 'IMG_E7210.jpg', 'IMG_E7212.jpg',
        'IMG_E7214.jpg', 'IMG_E7216.jpg', 'IMG_E7220.jpg', 'IMG_E7222.jpg', 'IMG_E7224.jpg', 'IMG_E7226.jpg',
        'IMG_E7230.jpg', 'IMG_E7231.jpg', 'IMG_E7232.jpg', 'IMG_E7238.jpg', 'IMG_E7241.jpg', 'IMG_E7242.jpg',
        'IMG_E7244.jpg', 'IMG_E7246.jpg'
    ];

    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (portfolioGrid) {
        // Criar os itens do carrossel
        portfolioImages.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'portfolio-item-carousel';
            item.innerHTML = `<img src="assets/images/portfolio/${img}" alt="Auge7 Work ${index + 1}" loading="lazy">`;
            portfolioGrid.appendChild(item);
        });

        // Duplicar os itens para loop infinito suave
        portfolioImages.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'portfolio-item-carousel';
            item.innerHTML = `<img src="assets/images/portfolio/${img}" alt="Auge7 Work ${index + 1}" loading="lazy">`;
            portfolioGrid.appendChild(item);
        });
    }

    // Intersection Observer for Opacity Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.glass-card, .section-label').forEach(el => {
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

    // ===== CLIENTS LOGOS CAROUSEL =====
    const clientLogos = [
        'Agrupar 1.png', 'Camada 1.png', 'Gympass.png', 'Logo_Algar.png', 
        'Logo_FGV_-_FundaÔö£┬║Ôö£├║o_Getulio_Vargas.png', 'Objeto Inteligente de Vetor-01.png',
        'Objeto Inteligente de Vetor-02.png', 'Objeto Inteligente de Vetor-03.png',
        'Objeto Inteligente de Vetor-04.png', 'Objeto Inteligente de Vetor-05.png',
        'Objeto Inteligente de Vetor-06.png', 'Objeto Inteligente de Vetor-07.png',
        'Objeto Inteligente de Vetor-08.png', 'Objeto Inteligente de Vetor-09.png',
        'Objeto Inteligente de Vetor.png', 'V Mais Company Logo.png',
        'cropped-Logo-Be-Clinic.png', 'logo-bm.png', 'logo-branca copiar.png',
        'logo_caderno_virtual_horiz_semfundo.png'
    ];

    const clientsGrid = document.getElementById('clientsGrid');
    if (clientsGrid) {
        // Adicionar logos originais
        clientLogos.forEach(logo => {
            const item = document.createElement('div');
            item.className = 'client-logo-item';
            item.innerHTML = `<img src="assets/images/clients/${logo}" alt="Cliente Auge7" loading="lazy">`;
            clientsGrid.appendChild(item);
        });

        // Duplicar para loop infinito
        clientLogos.forEach(logo => {
            const item = document.createElement('div');
            item.className = 'client-logo-item';
            item.innerHTML = `<img src="assets/images/clients/${logo}" alt="Cliente Auge7" loading="lazy">`;
            clientsGrid.appendChild(item);
        });
    }

    // ===== ELEGANT AUTO-SCROLL CAROUSEL (PORTFOLIO & CLIENTS) =====
    function initAutoScroll(elementId, speed) {
        const carousel = document.getElementById(elementId);
        if (!carousel) return;

        let scrollSpeed = speed;
        let isPaused = false;

        function smoothScroll() {
            if (!isPaused) {
                carousel.scrollLeft += scrollSpeed;
                if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                    carousel.scrollLeft = 0;
                }
            }
            requestAnimationFrame(smoothScroll);
        }

        carousel.addEventListener('mouseenter', () => isPaused = true);
        carousel.addEventListener('mouseleave', () => isPaused = false);
        carousel.addEventListener('touchstart', () => isPaused = true, { passive: true });
        carousel.addEventListener('touchend', () => {
            setTimeout(() => isPaused = false, 1000);
        });

        smoothScroll();
    }

    // Iniciar carrosséis
    initAutoScroll('portfolioGrid', 0.8);
    initAutoScroll('clientsGrid', 0.5); // Logos rolam um pouco mais devagar para sutileza
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
