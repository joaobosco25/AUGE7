// ===========================
// Navigation & Scroll Effects
// ===========================

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Observe sections
document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// ===========================
// Counter Animation
// ===========================

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ===========================
// Portfolio Gallery
// ===========================

const portfolioImages = [
    '01.png', '02.png', '03.png', '04.png', '05.png', '06.png', 
    '07.png', '08.png', '09.png', '10.png', '11.png',
    'DSC00025.jpg', 'DSC00030.jpg', 'DSC00034.jpg', 'DSC01964.jpg',
    'DSC02315.jpg', 'DSC02860.JPG', 'DSC02948.JPG', 'DSC03047.jpg',
    'DSC03059.jpg', 'DSC03491.jpg', 'DSC03532.jpg', 'DSC03715.jpg',
    'DSC03808.jpg', 'DSC04605.jpg', 'DSC04842.jpg', 'DSC05089.jpg',
    'DSC05096.jpg', 'DSC05111.jpg', 'DSC05233.jpg', 'DSC05551.jpg',
    'DSC05891.jpg', 'DSC05909.jpg', 'DSC06036.jpg', 'DSC06301.jpg',
    'DSC09980.jpg', 'DSC09988.jpg'
];

const portfolioGrid = document.getElementById('portfolioGrid');
let allPortfolioImages = [];

// Load portfolio images
portfolioImages.forEach((image, index) => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item fade-in';
    portfolioItem.innerHTML = `
        <img src="assets/images/portfolio/${image}" alt="Trabalho ${index + 1}" loading="lazy">
        <div class="portfolio-overlay">
            <svg class="portfolio-overlay-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
        </div>
    `;
    
    portfolioItem.addEventListener('click', () => {
        openLightbox(index);
    });
    
    portfolioGrid.appendChild(portfolioItem);
    allPortfolioImages.push(`assets/images/portfolio/${image}`);
    
    // Observe for animation
    observer.observe(portfolioItem);
});

// ===========================
// Lightbox
// ===========================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = allPortfolioImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + allPortfolioImages.length) % allPortfolioImages.length;
    lightboxImage.src = allPortfolioImages[currentImageIndex];
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % allPortfolioImages.length;
    lightboxImage.src = allPortfolioImages[currentImageIndex];
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

// ===========================
// Clients Carousel
// ===========================

const clientLogos = [
    'Agrupar 1.png',
    'Camada 1.png',
    'cropped-Logo-Be-Clinic.png',
    'Gympass.png',
    'logo-bm.png',
    'logo-branca copiar.png',
    'Logo_Algar.png',
    'logo_caderno_virtual_horiz_semfundo.png',
    'Logo_FGV_-_Fundação_Getulio_Vargas.png',
    'Objeto Inteligente de Vetor-01.png',
    'Objeto Inteligente de Vetor-02.png',
    'Objeto Inteligente de Vetor-03.png',
    'Objeto Inteligente de Vetor-04.png',
    'Objeto Inteligente de Vetor-05.png',
    'Objeto Inteligente de Vetor-06.png',
    'Objeto Inteligente de Vetor-07.png',
    'Objeto Inteligente de Vetor-08.png',
    'Objeto Inteligente de Vetor-09.png',
    'Objeto Inteligente de Vetor.png',
    'V Mais Company Logo.png'
];

const clientsTrack = document.getElementById('clientsTrack');

// Duplicate logos for infinite scroll effect
const duplicatedLogos = [...clientLogos, ...clientLogos];

duplicatedLogos.forEach(logo => {
    const clientLogo = document.createElement('div');
    clientLogo.className = 'client-logo';
    clientLogo.innerHTML = `<img src="assets/images/clients/${logo}" alt="Cliente">`;
    clientsTrack.appendChild(clientLogo);
});

// Pause animation on hover
clientsTrack.addEventListener('mouseenter', () => {
    clientsTrack.style.animationPlayState = 'paused';
});

clientsTrack.addEventListener('mouseleave', () => {
    clientsTrack.style.animationPlayState = 'running';
});

// ===========================
// Parallax Effect
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===========================
// Loading Animation
// ===========================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===========================
// Service Cards Hover Effect
// ===========================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// Image Lazy Loading Fallback
// ===========================

if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===========================
// Performance Optimization
// ===========================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    highlightNavLink();
}));

// ===========================
// Console Message
// ===========================

console.log('%cAuge7 Filmes', 'font-size: 24px; font-weight: bold; color: #FF0066;');
console.log('%cProdução Audiovisual de Alta Qualidade', 'font-size: 14px; color: #CCCCCC;');
console.log('%cDesenvolvido com ❤️ para transformar momentos em obras de arte', 'font-size: 12px; color: #999999;');
