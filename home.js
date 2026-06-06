/* ========================================
   HOME.JS - HERO PAGE ANIMATIONS
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    loadHeroImage();
    initHeroAnimations();
    initTypingEffect();
    initScrollIndicator();
});

/* ========================================
   LOAD HERO IMAGE FROM DATA
   ======================================== */

function loadHeroImage() {
    const heroImg = document.getElementById('heroImage');
    if (heroImg && portfolioData.homeImage) {
        heroImg.src = portfolioData.homeImage;
        heroImg.alt = portfolioData.name;
    }
}

/* ========================================
   HERO ANIMATIONS
   ======================================== */

function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    
    // Ensure hero content is visible
    if (heroContent) {
        heroContent.style.opacity = '1';
    }

    // Add stagger animations to hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCTA = document.querySelector('.hero-cta');

    if (heroTitle) {
        heroTitle.style.animation = 'slideDownText 0.8s ease-out';
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'fadeInUp 0.8s ease-out 0.3s backwards';
    }
    
    if (heroCTA) {
        heroCTA.style.animation = 'fadeInUp 0.8s ease-out 0.4s backwards';
    }
}

/* ========================================
   TYPING EFFECT
   ======================================== */

function initTypingEffect() {
    const roleSpan = document.querySelector('.gradient-text');
    
    if (!roleSpan) return;

    const roles = [
        'Frontend Developer',
        'UI/UX Designer',
        'Digital Creator',
        'AI Enthusiast'
    ];

    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseTime = 2000;

    function type() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            // Delete characters
            if (currentCharIndex > 0) {
                currentCharIndex--;
                roleSpan.textContent = currentRole.substring(0, currentCharIndex);
                setTimeout(type, deletingSpeed);
            } else {
                // Move to next role
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                setTimeout(type, 500);
            }
        } else {
            // Type characters
            if (currentCharIndex < currentRole.length) {
                currentCharIndex++;
                roleSpan.textContent = currentRole.substring(0, currentCharIndex);
                setTimeout(type, typingSpeed);
            } else {
                // Pause before deleting
                isDeleting = true;
                setTimeout(type, pauseTime);
            }
        }
    }

    // Start typing effect
    type();
}

/* ========================================
   SCROLL INDICATOR ANIMATION
   ======================================== */

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (!scrollIndicator) return;

    // Hide scroll indicator after user starts scrolling
    window.addEventListener('scroll', function handleScroll() {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
            scrollIndicator.style.transition = 'opacity 0.6s ease-out';
            window.removeEventListener('scroll', handleScroll);
        }
    }, { once: false });

    // Scroll indicator animation is handled in animations.css
}

/* ========================================
   PARALLAX EFFECT
   ======================================== */

function initParallaxEffect() {
    const heroVisual = document.querySelector('.hero-visual');
    const glowOrbs = document.querySelectorAll('.glow-orb');
    
    if (!heroVisual || glowOrbs.length === 0) return;

    window.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            glowOrbs.forEach((orb, index) => {
                const offsetX = mouseX * (index + 1) * 10;
                const offsetY = mouseY * (index + 1) * 10;
                
                orb.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        }
    });
}

// Initialize parallax after page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallaxEffect);
} else {
    initParallaxEffect();
}

/* ========================================
   STATS COUNTER ANIMATION
   ======================================== */

function initStatsCounter() {
    const statCards = document.querySelectorAll('.stat-card h3');
    
    statCards.forEach(card => {
        const text = card.textContent;
        
        // Check if it's a number that can be animated
        const match = text.match(/(\d+)/);
        if (match) {
            const targetNumber = parseInt(match[1]);
            let currentNumber = 0;
            const increment = targetNumber / 30; // Animation duration
            
            // Intersection Observer to trigger animation on scroll
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && currentNumber === 0) {
                        animateCounter(card, currentNumber, targetNumber, increment);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(card);
        }
    });
}

function animateCounter(element, current, target, increment) {
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = element.textContent.replace(/\d+/, Math.floor(current));
    }, 50);
}

// Initialize stats counter
if (document.querySelector('.stat-card')) {
    window.addEventListener('load', initStatsCounter);
}

console.log('✨ Home page animations initialized');
