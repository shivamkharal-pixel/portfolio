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
            link: "#",
            image: "https://via.placeholder.com/400x250?text=AI+Study+Assistant"
        },
        {
            id: 2,
            title: "Smart To-Do List",
            category: "Web App",
            description: "Advanced task management application with priority levels, due dates, categories, and smart suggestions powered by AI.",
            technologies: ["JavaScript", "HTML/CSS", "LocalStorage", "Vanilla JS"],
            link: "#",
            image: "https://via.placeholder.com/400x250?text=To-Do+List"
        },
        {
            id: 3,
            title: "Student Marks Analyzer",
            category: "Python",
            description: "Data analysis tool for processing and visualizing student performance. Generates reports and insights from academic data.",
            technologies: ["Python", "Pandas", "Matplotlib", "Data Science"],
            link: "#",
            image: "https://via.placeholder.com/400x250?text=Marks+Analyzer"
        },
        {
            id: 4,
            title: "Portfolio Website",
            category: "Frontend",
            description: "Modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations and premium design.",
            technologies: ["HTML", "CSS", "JavaScript", "Design System"],
            link: "#",
            image: "https://via.placeholder.com/400x250?text=Portfolio"
        },
        {
            id: 5,
            title: "Weather Dashboard",
            category: "Web App",
            description: "Real-time weather application with location-based forecasts, interactive maps, and detailed meteorological data.",
            technologies: ["JavaScript", "APIs", "HTML/CSS", "Responsive Design"],
            link: "#",
            image: "https://via.placeholder.com/400x250?text=Weather+App"
        },
        {
            id: 6,
            title: "Content Creator Hub",
            category: "Full Stack",
            description: "Platform for digital creators to manage content, track analytics, and monetize their work. Features dashboard and analytics.",
            technologies: ["Frontend", "Backend", "Database", "Analytics"],
            link: "#",
            image: "https://via.placeholder.com/400x250?text=Creator+Hub"
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
