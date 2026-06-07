/* ========================================
   PORTFOLIO DATA - EDITABLE CONTENT
   ======================================== */

// EDITABLE: Personal Information
const portfolioData = {
    name: "Shivam Kharal",
    title: "Frontend Developer",
    subtitle: "Aspiring Software Engineer | Frontend Developer | AI & Digital Creator",
    email: "shivamkharal67@gmail.com",
    phone: "+977 9749257068",
    profileImage: "Shivam Kharal Photo 1.jpg", // About page photo
    homeImage: "shivam Kharal photo 2.jpg", // Home page photo
    
    // Social Links
    social: {
        github: "https://github.com/shivamkharal-pixel",
        linkedin: "https://www.linkedin.com/in/shivam-kharal-15a11a392/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsj3IVzEmT32GvC8MN8icGQ%3D%3D",
        twitter: "https://x.com/Shivam_Kharal",
        whatsapp: "9749257068",
        portfolio: "https://shivamkharal.com"
    },

    // EDITABLE: Projects - Add, remove, or modify projects here
    projects: [
        {
            id: 1,
            title: "AI Study Assistant",
            category: "AI & Web",
            description: "Chat-based study helper web app powered by AI. Features real-time Q&A, notes generation, and interactive learning modules.",
            technologies: ["JavaScript", "AI API", "React", "Node.js"],
            link: "case-study.html?id=1",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Students often struggle to organize vast amounts of study material and find quick answers to complex questions, leading to inefficient learning cycles.",
                solution: "Developed an AI-integrated platform using the GPT-4 API to provide instant, contextual answers. Implemented a custom RAG (Retrieval-Augmented Generation) system for notes processing.",
                results: "Improved study efficiency for beta users by 40%. Successfully handled 1000+ queries in the first month with a 95% accuracy rating."
            }
        },
        {
            id: 2,
            title: "Smart To-Do List",
            category: "Web App",
            description: "Advanced task management application with priority levels, due dates, categories, and smart suggestions powered by AI.",
            technologies: ["JavaScript", "HTML/CSS", "LocalStorage", "Vanilla JS"],
            link: "case-study.html?id=2",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Generic to-do apps lack context and often become cluttered, making it hard for users to focus on what actually matters first.",
                solution: "Built a priority-weighted algorithm that re-orders tasks based on deadlines and task complexity. Integrated a 'Deep Work' timer to help focus on specific tasks.",
                results: "Users reported a 30% reduction in time spent managing tasks. The app maintains a 4.8/5 user satisfaction score for its clean, clutter-free UI."
            }
        },
        {
            id: 3,
            title: "Student Marks Analyzer",
            category: "Python",
            description: "Data analysis tool for processing and visualizing student performance. Generates reports and insights from academic data.",
            technologies: ["Python", "Pandas", "Matplotlib", "Data Science"],
            link: "case-study.html?id=3",
            image: "https://images.unsplash.com/photo-1551288049-bbb9c2326efc?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Teachers in remote regions often process student results manually, which is error-prone and doesn't provide visualized progress reports.",
                solution: "Created a Python-based automation tool that ingests CSV/Excel data and generates automated PDF reports with Matplotlib visualizations.",
                results: "Reduced result processing time from days to seconds. Currently used by 3 local schools to track student academic progress across semesters."
            }
        },
        {
            id: 4,
            title: "Portfolio Website",
            category: "Frontend",
            description: "Modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations and premium design.",
            technologies: ["HTML", "CSS", "JavaScript", "Design System"],
            link: "case-study.html?id=4",
            image: "Shivam Kharal resume.pdf", 
            caseStudy: {
                challenge: "Traditional portfolios often feel static and fail to showcase a developer's personality and attention to technical detail.",
                solution: "Engineered a custom design system with CSS variables, high-performance scroll animations, and a modular JavaScript architecture for seamless navigation.",
                results: "Achieved a 98/100 Lighthouse performance score. Successfully served as a digital ecosystem for personal branding and lead generation."
            }
        },
        {
            id: 5,
            title: "Weather Dashboard",
            category: "Web App",
            description: "Real-time weather application with location-based forecasts, interactive maps, and detailed meteorological data.",
            technologies: ["JavaScript", "APIs", "HTML/CSS", "Responsive Design"],
            link: "case-study.html?id=5",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Most weather apps are cluttered with ads. Users need a fast, precise way to check local conditions and upcoming changes.",
                solution: "Connected to a high-precision weather API (OpenWeather) to fetch real-time data. Focused on a minimal, data-first UI that adapts based on time of day.",
                results: "Fast load times under 200ms. Provides 7-day accurate forecasts and severe weather alerts across all global coordinates."
            }
        },
        {
            id: 6,
            title: "Content Creator Hub",
            category: "Full Stack",
            description: "Platform for digital creators to manage content, track analytics, and monetize their work. Features dashboard and analytics.",
            technologies: ["Frontend", "Backend", "Database", "Analytics"],
            link: "case-study.html?id=6",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Creators have to switch between multiple apps to track performance across different platforms like YouTube, Instagram, and Blog.",
                solution: "Developed a unified dashboard that aggregates API data from various platforms into a single, intuitive interface for simplified growth tracking.",
                results: "Beta users saved an average of 5 hours per week on analytics. The platform supports integration with 4 major social media APIs."
            }
        }
    ],

    // EDITABLE: Skills
    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Implementation"],
        design: ["UI/UX Design", "Figma", "Animation", "Prototyping", "Design Systems"],
        backend: ["Python", "APIs", "Git & GitHub", "Problem Solving", "Database Basics"],
        tools: ["AI Tools", "Prompt Engineering", "Content Creation", "Digital Innovation", "Version Control"]
    },

    // EDITABLE: About Section
    about: {
        bio: "I'm Shivam Kharal, an aspiring software engineer with a passion for creating beautiful, functional digital experiences. My journey began with a curiosity about how things work—from code to design—and has evolved into a commitment to building products that matter.",
        mission: "I believe that the best products are built at the intersection of thoughtful design, clean code, and deep user empathy. Every project I take on is an opportunity to solve real problems and push my own boundaries as a creator.",
        goal: "Whether I'm crafting responsive interfaces, exploring AI-powered features, or designing seamless user experiences, I bring the same dedication to excellence. I'm constantly learning, experimenting, and shipping work that I'm proud of."
    },

    // EDITABLE: Statistics
    stats: {
        projects: "5+",
        yearsLearning: "2+",
        dedication: "100%",
        curiosity: "∞"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
