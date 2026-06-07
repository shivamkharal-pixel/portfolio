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

    // Generate HTML Content
    contentContainer.innerHTML = `
        <div class="case-study-header animate-fade-in">
            <span class="case-study-category">${project.category}</span>
            <h1 class="case-study-title">${project.title}</h1>
        </div>

        <img src="${project.image}" alt="${project.title}" class="case-study-image animate-fade-in-up">

        <div class="case-study-grid">
            <div class="case-study-main animate-fade-in-up">
                <section class="case-study-section">
                    <h2>The Challenge</h2>
                    <p>${project.caseStudy.challenge}</p>
                </section>

                <section class="case-study-section">
                    <h2>The Solution</h2>
                    <p>${project.caseStudy.solution}</p>
                </section>

                <section class="case-study-section">
                    <h2>The Results</h2>
                    <p>${project.caseStudy.results}</p>
                </section>
            </div>

            <aside class="case-study-sidebar animate-fade-in-right">
                <div class="sidebar-item">
                    <h4>Description</h4>
                    <p>${project.description}</p>
                </div>

                <div class="sidebar-item">
                    <h4>Technologies Used</h4>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="sidebar-item">
                    <h4>Live Project</h4>
                    <a href="${project.link === '#' ? 'javascript:void(0)' : project.link}" 
                       class="btn btn-primary" 
                       style="width: 100%; display: block; text-align: center; margin-top: 10px;"
                       ${project.link !== '#' ? 'target="_blank"' : ''}>
                        ${project.link === '#' ? 'Coming Soon' : 'View Demo'}
                    </a>
                </div>
            </aside>
        </div>
    `;

    // Stagger Sidebar Animation
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach((item, index) => {
        item.style.animationDelay = `${0.2 + (index * 0.1)}s`;
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
