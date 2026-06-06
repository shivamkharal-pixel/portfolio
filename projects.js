/* ========================================
   PROJECTS.JS - DYNAMIC PROJECT RENDERING
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    initProjectAnimations();
});

/* ========================================
   RENDER PROJECTS
   ======================================== */

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid || !portfolioData.projects) return;

    // Clear existing content
    projectsGrid.innerHTML = '';

    // Render each project
    portfolioData.projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });

    // Add stagger animation
    const cards = projectsGrid.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

/* ========================================
   CREATE PROJECT CARD
   ======================================== */

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card animate-fade-in-up';
    card.innerHTML = `
        <span class="project-category">${project.category}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        
        <div class="tech-stack" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
            ${project.technologies.map(tech => `
                <span style="
                    display: inline-block;
                    padding: 4px 8px;
                    background: rgba(0, 217, 255, 0.08);
                    border: 1px solid rgba(0, 217, 255, 0.2);
                    border-radius: 4px;
                    font-size: 0.75rem;
                    color: #A1A1A6;
                    white-space: nowrap;
                ">${tech}</span>
            `).join('')}
        </div>
        
        <a href="${project.link}" class="project-link">
            View Case Study
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13M13 8L10 5M13 8L10 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    `;

    // Add hover effects
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });

    return card;
}

/* ========================================
   PROJECT ANIMATIONS
   ======================================== */

function initProjectAnimations() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        // Hover scale animation is handled by event listeners in createProjectCard
        
        // Add intersection observer for scroll animation
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animate', 'active');
                }
            });
        }, { threshold: 0.1 });

        observer.observe(card);
    });
}

/* ========================================
   FILTER PROJECTS (Optional)
   ======================================== */

function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        const cardCategory = card.querySelector('.project-category').textContent;
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.6s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

/* ========================================
   SEARCH PROJECTS (Optional)
   ======================================== */

function searchProjects(query) {
    const cards = document.querySelectorAll('.project-card');
    const searchTerm = query.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('.project-title').textContent.toLowerCase();
        const description = card.querySelector('.project-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.opacity = '1';
        } else {
            card.style.display = 'none';
            card.style.opacity = '0.3';
        }
    });
}

/* ========================================
   PROJECT INTERACTION
   ========================================*/

document.addEventListener('click', function(e) {
    if (e.target.closest('.project-link')) {
        e.preventDefault();
        const projectLink = e.target.closest('.project-link');
        const href = projectLink.getAttribute('href');
        
        // Add click animation
        projectLink.style.transform = 'scale(0.95)';
        setTimeout(() => {
            projectLink.style.transform = '';
            
            // Navigate or open link
            if (href && href !== '#') {
                window.open(href, '_blank');
            }
        }, 150);
    }
});

console.log('✨ Projects page initialized - Total projects: ' + portfolioData.projects.length);
