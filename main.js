/* ========================================
   MAIN.JS - GLOBAL NAVIGATION & SHARED LOGIC
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Smooth scroll behavior
    initSmoothScroll();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Resume button handler
    initResumeButton();
});

/* ========================================
   NAVIGATION ACTIVE STATE
   ======================================== */

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = getCurrentPage();
    
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    
    if (path.includes('projects.html')) return 'projects';
    if (path.includes('about.html')) return 'about';
    if (path.includes('contact.html')) return 'contact';
    return 'home';
}

/* ========================================
   MOBILE MENU
   ======================================== */

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('menuOverlay');
    
    if (!menuToggle || !navMenu) return;

    // Toggle menu on button click
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when overlay is clicked
    if (overlay) {
        overlay.addEventListener('click', function() {
            closeMenu();
        });
    }

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Close menu on window resize (if crossing the breakpoint)
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        }, 100);
    });

    function toggleMenu() {
        const isOpen = navMenu.classList.contains('active');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        navMenu.classList.add('active');
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
        if (overlay) {
            overlay.classList.add('active');
        }
    }

    function closeMenu() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */

function initScrollAnimations() {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all scroll-animate elements
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });

    // Observe stat cards
    document.querySelectorAll('.stat-card').forEach(el => {
        observer.observe(el);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(el => {
        observer.observe(el);
    });

    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach(el => {
        observer.observe(el);
    });
}

/* ========================================
   RESUME BUTTON HANDLER
   ======================================== */

function initResumeButton() {
    const resumeBtns = document.querySelectorAll('.nav-cta');
    if (resumeBtns) {
        resumeBtns.forEach(resumeBtn => {
            resumeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Resume file path
                const resumeUrl = 'Shivam Kharal resume.pdf';
                
                // Open resume in new tab
                window.open(resumeUrl, '_blank');
            });
        });
    }
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Debounce function for scroll events
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle function for frequent events
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Format date helper
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// Add animation class to element
function animateElement(element, animationName, duration = 600) {
    element.style.animation = `${animationName} ${duration}ms ease-out`;
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

/* ========================================
   PAGE LOAD ANIMATION
   ======================================== */

window.addEventListener('load', function() {
    // Add fade-in to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease-out';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.opacity = '1';
    
    // Stagger animations
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

/* ========================================
   PERFORMANCE OPTIMIZATION
   ======================================== */

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ========================================
   ERROR HANDLING
   ======================================== */

window.addEventListener('error', function(event) {
    console.error('Error:', event.error);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled Rejection:', event.reason);
});

console.log('✨ Shivam Kharal Portfolio - Initialized Successfully');
