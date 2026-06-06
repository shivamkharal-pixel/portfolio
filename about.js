/* ========================================
   ABOUT.JS - ABOUT PAGE INTERACTIONS
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    loadProfileImage();
    initSkillsAnimation();
    initAboutPageAnimations();
});

/* ========================================
   LOAD PROFILE IMAGE FROM DATA
   ======================================== */

function loadProfileImage() {
    const profileImg = document.getElementById('profileImage');
    if (profileImg && portfolioData.profileImage) {
        profileImg.src = portfolioData.profileImage;
        profileImg.alt = portfolioData.name;
    }
}

/* ========================================
   SKILLS ANIMATION
   ======================================== */

function initSkillsAnimation() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    // Add animation delay to each skill tag
    skillTags.forEach((tag, index) => {
        tag.style.animation = `fadeInUp 0.6s ease-out ${0.1 * index}s backwards`;
        
        // Add hover effect
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/* ========================================
   ABOUT PAGE ANIMATIONS
   ======================================== */

function initAboutPageAnimations() {
    // Animate profile placeholder on scroll
    const profilePlaceholder = document.querySelector('.profile-placeholder');
    
    if (profilePlaceholder) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animate', 'active');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(profilePlaceholder);
    }

    // Animate skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animate', 'active');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(category);
    });

    // Animate about story paragraphs
    const storyParagraphs = document.querySelectorAll('.about-story p');
    storyParagraphs.forEach((para, index) => {
        para.style.animation = `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s backwards`;
    });
}

/* ========================================
   SKILL CATEGORIES INTERACTION
   ======================================== */

function initSkillCategoryHover() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            // Highlight this category
            this.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.3)';
            
            // Dim other categories
            skillCategories.forEach(other => {
                if (other !== this) {
                    other.style.opacity = '0.6';
                }
            });
        });
        
        category.addEventListener('mouseleave', function() {
            // Reset all categories
            skillCategories.forEach(other => {
                other.style.opacity = '1';
                other.style.boxShadow = '';
            });
        });
    });
}

// Initialize skill category hover
if (document.querySelector('.skill-category')) {
    initSkillCategoryHover();
}

/* ========================================
   PROFILE IMAGE INTERACTION
   ======================================== */

function initProfileInteraction() {
    const profilePlaceholder = document.querySelector('.profile-placeholder');
    
    if (profilePlaceholder) {
        profilePlaceholder.addEventListener('click', function() {
            // Add pulse animation on click
            this.style.animation = 'pulse 0.6s ease-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    }
}

// Initialize profile interaction
if (document.querySelector('.profile-placeholder')) {
    initProfileInteraction();
}

/* ========================================
   STATISTICS DISPLAY
   ======================================== */

function displayStatistics() {
    const stats = portfolioData.stats;
    
    // You can add stats rendering logic here if needed
    // For now, stats are displayed in HTML
    console.log('Portfolio Statistics:', stats);
}

// Display statistics on page load
displayStatistics();

/* ========================================
   ABOUT PAGE SCROLL PARALLAX
   ======================================== */

function initAboutParallax() {
    const aboutVisual = document.querySelector('.about-visual');
    
    if (!aboutVisual) return;
    
    window.addEventListener('scroll', function() {
        if (window.innerWidth > 768) {
            const scrollY = window.scrollY;
            const offset = scrollY * 0.5; // Parallax speed
            
            aboutVisual.style.transform = `translateY(${offset}px)`;
        }
    });
}

// Parallax effect disabled - image stays fixed while scrolling

console.log('✨ About page interactions initialized');
