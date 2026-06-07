/* ========================================
   CASE-STUDY.JS - DYNAMIC CONTENT INJECTION
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    renderCaseStudy();
});

function renderCaseStudy() {
    const contentContainer = document.getElementById('caseStudyContent');
    if (!contentContainer) return;

    // Get Project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));

    if (!projectId) {
        showError("Invalid Project ID");
        return;
    }

    // Find Project in Data
    const project = portfolioData.projects.find(p => p.id === projectId);

    if (!project) {
        showError("Project not found");
        return;
    }

    // Find Next Project
    const currentIndex = portfolioData.projects.findIndex(p => p.id === projectId);
    const nextProject = portfolioData.projects[(currentIndex + 1) % portfolioData.projects.length];

    // Generate HTML Content
    contentContainer.innerHTML = `
        <div class="case-study-header animate-fade-in">
            <span class="case-study-category">${project.category}</span>
            <h1 class="case-study-title">${project.title}</h1>
        </div>

        <div class="case-study-image-wrapper animate-fade-in-up">
            <img src="${project.image}" alt="${project.title}" class="case-study-image">
        </div>

        <div class="case-study-grid">
            <div class="case-study-main">
                <section class="case-study-section">
                    <h2>The Challenge</h2>
                    <p style="font-size: 1.2rem; line-height: 1.8; color: var(--text-secondary);">${project.caseStudy.challenge}</p>
                </section>

                <section class="case-study-section">
                    <h2>The Solution</h2>
                    <p style="font-size: 1.2rem; line-height: 1.8; color: var(--text-secondary);">${project.caseStudy.solution}</p>
                </section>

                <section class="case-study-section">
                    <h2>The Process</h2>
                    <p style="font-size: 1.2rem; line-height: 1.8; color: var(--text-secondary);">${project.caseStudy.process}</p>
                </section>

                <section class="case-study-section">
                    <h2>Key Features</h2>
                    <ul class="features-list" style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        ${project.caseStudy.features.map(feature => `
                            <li style="padding: 20px; background: rgba(255,255,255,0.03); border-radius: 16px; border: 1px solid var(--border-white); display: flex; align-items: flex-start; gap: 12px; transition: var(--transition-smooth);" onmouseover="this.style.borderColor='var(--accent-blue)'; this.style.transform='translateY(-5px)'" onmouseout="this.style.borderColor='var(--border-white)'; this.style.transform='translateY(0)'">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex-shrink: 0; margin-top: 2px;">
                                    <path d="M5 13L9 17L19 7" stroke="var(--accent-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span style="font-weight: 500; color: var(--text-primary);">${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                </section>

                <section class="case-study-section">
                    <h2>The Results</h2>
                    <p style="font-size: 1.2rem; line-height: 1.8; color: var(--text-secondary);">${project.caseStudy.results}</p>
                </section>
            </div>

            <aside class="case-study-sidebar animate-fade-in-right">
                <div class="sidebar-item">
                    <h4>Overview</h4>
                    <p style="color: var(--text-secondary); line-height: 1.6;">${project.description}</p>
                </div>

                <div class="sidebar-item">
                    <h4>Tech Stack</h4>
                    <div class="tech-tags" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top:15px;">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="sidebar-item" style="margin-top: 40px; padding-top: 30px; border-top: 1px solid var(--border-white);">
                    <a href="${project.link === '#' ? 'javascript:void(0)' : project.link}" 
                       class="btn btn-primary" 
                       style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; padding: 18px; border-radius: 16px; font-weight: 700;"
                       ${project.link !== '#' ? 'target="_blank"' : ''}>
                        ${project.link === '#' ? 'Coming Soon' : 'Launch Live Demo'}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                    </a>
                </div>
            </aside>
        </div>

        <div class="next-project-card animate-fade-in-up">
            <p style="color: var(--accent-blue); font-weight: 700; text-transform: uppercase; letter-spacing: 3px; font-size: 0.8rem; margin-bottom: 20px;">Up Next</p>
            <h2 style="font-size: 3rem; margin-bottom: 30px; letter-spacing: -1px;">${nextProject.title}</h2>
            <a href="case-study.html?id=${nextProject.id}" class="btn btn-secondary" style="padding: 15px 40px; border-radius: 100px; display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-weight: 600; transition: var(--transition-smooth);">
                View Case Study
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    `;

    // Initialize Reading Progress Bar
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const bar = document.getElementById("progressBar");
        if(bar) bar.style.width = scrolled + "%";
    });

    // Initialize Scroll Animations for sections
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.case-study-section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Sidebar Stagger
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach((item, index) => {
        item.style.animationDelay = `${0.3 + (index * 0.1)}s`;
    });
}

function showError(message) {
    const contentContainer = document.getElementById('caseStudyContent');
    contentContainer.innerHTML = `
        <div class="text-center" style="padding: var(--spacing-3xl) 0;">
            <h2 style="color: #ff4d4d; margin-bottom: var(--spacing-md);">${message}</h2>
            <p style="margin-bottom: var(--spacing-xl);">We couldn't load the details for this project.</p>
            <a href="projects.html" class="btn btn-primary">Back to Projects</a>
        </div>
    `;
}
