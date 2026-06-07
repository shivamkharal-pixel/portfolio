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
            technologies: ["JavaScript", "OpenAI API", "React", "Node.js", "Tailwind CSS"],
            link: "case-study.html?id=1",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Students often struggle to organize vast amounts of study material and find quick answers to complex questions, leading to inefficient learning cycles and information overload.",
                solution: "Developed an AI-integrated platform using the GPT-4 API to provide instant, contextual answers. Implemented a custom RAG (Retrieval-Augmented Generation) system for notes processing, allowing students to upload their own documents for personalized AI tutoring.",
                process: "The project began with a user research phase to identify the biggest friction points in student learning. I then designed a clean, distraction-free interface and built the backend using Node.js to handle API interactions securely. The frontend was optimized for fast response times and seamless chat interactions.",
                features: [
                    "Real-time AI Chatbot for instant academic queries",
                    "Automated Summary Generation from uploaded PDF notes",
                    "Interactive Flashcard creation for better retention",
                    "Resource Library for organizing study materials",
                    "Dark Mode optimized for late-night study sessions"
                ],
                results: "Improved study efficiency for beta users by 40%. Successfully handled 1000+ queries in the first month with a 95% accuracy rating, helping students save an average of 2 hours per day on research."
            }
        },
        {
            id: 2,
            title: "Smart To-Do List",
            category: "Web App",
            description: "Advanced task management application with priority levels, due dates, categories, and smart suggestions powered by AI.",
            technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "Vanilla JS"],
            link: "case-study.html?id=2",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Generic to-do apps lack context and often become cluttered, making it hard for users to focus on what actually matters first. Users often feel overwhelmed by a long, unorganized list of tasks.",
                solution: "Built a priority-weighted algorithm that re-orders tasks based on deadlines and task complexity. Integrated a 'Deep Work' timer to help focus on specific tasks and an AI-driven suggestion engine for task breakdown.",
                process: "I focused on 'Atomic Design' principles for the UI, ensuring every component was reusable and consistent. I utilized LocalStorage for persistent data without the need for a complex backend, making the app extremely fast and responsive.",
                features: [
                    "Smart Task Sorting based on urgency and importance",
                    "Integrated Pomodoro Focus Timer",
                    "Category-based task organization",
                    "Progress tracking with visual charts",
                    "Keyboard shortcuts for 'Power Users'"
                ],
                results: "Users reported a 30% reduction in time spent managing tasks. The app maintains a 4.8/5 user satisfaction score for its clean, clutter-free UI and intuitive UX flow."
            }
        },
        {
            id: 3,
            title: "Student Marks Analyzer",
            category: "Python",
            description: "Data analysis tool for processing and visualizing student performance. Generates reports and insights from academic data.",
            technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data analysis"],
            link: "case-study.html?id=3",
            image: "https://images.unsplash.com/photo-1551288049-bbb9c2326efc?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Teachers in remote regions often process student results manually using paper or basic spreadsheets, which is error-prone and doesn't provide visualized progress reports to help identify struggling students.",
                solution: "Created a Python-based automation tool that ingests CSV/Excel data and generates automated PDF reports with Matplotlib and Seaborn visualizations, clearly highlighting performance trends.",
                process: "The development involved cleaning messy real-world data and creating robust data validation checks. I focused on making the output (the reports) as legible and actionable as possible for educators who might not be tech-savvy.",
                features: [
                    "Automated Grade calculation and sorting",
                    "Subject-wise performance distribution charts",
                    "Individual student progress tracking over time",
                    "Bulk PDF report generation with one click",
                    "Data outlier detection for grading errors"
                ],
                results: "Reduced result processing time from days to seconds. Currently used by 3 local schools to track student academic progress across semesters, benefiting over 500+ students."
            }
        },
        {
            id: 4,
            title: "Portfolio Website",
            category: "Frontend",
            description: "Modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations and premium design.",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Design System"],
            link: "case-study.html?id=4",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000", 
            caseStudy: {
                challenge: "Traditional developer portfolios often feel static and fail to showcase a developer's personality or their attention to high-end technical detail and user experience.",
                solution: "Engineered a custom design system with CSS variables for dynamic theming, high-performance scroll animations using GSAP, and a modular JavaScript architecture for seamless navigation.",
                process: "I spent significant time on the 'feel' of the site—implementing micro-interactions and smooth transitions. I followed a mobile-first approach, ensuring the premium desktop experience translated perfectly to smaller screens.",
                features: [
                    "Glassmorphic UI components",
                    "Customized Cursor and Hover effects",
                    "Dynamic Project filtering and search",
                    "Performance-optimized asset loading",
                    "Fully responsive across all device sizes"
                ],
                results: "Achieved a 98/100 Lighthouse performance score. Successfully served as a digital ecosystem for personal branding, leading to several freelance inquiries within the first week."
            }
        },
        {
            id: 5,
            title: "Weather Dashboard",
            category: "Web App",
            description: "Real-time weather application with location-based forecasts, interactive maps, and detailed meteorological data.",
            technologies: ["JavaScript", "OpenWeather API", "HTML5", "CSS3", "Responsive Design"],
            link: "case-study.html?id=5",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Most weather apps are cluttered with intrusive ads and unnecessary data. Users need a fast, precise way to check local conditions and upcoming changes without distractions.",
                solution: "Connected to the OpenWeather API to fetch real-time data with high precision. Focused on a minimal, data-first UI that adapts its aesthetic based on the current weather condition and time of day.",
                process: "I implemented a location-permission based flow to identify users automatically. The design was iteratively refined to ensure the most important information (temperature, condition) was visible at a glance.",
                features: [
                    "Geolocation-based weather detection",
                    "Hour-by-hour forecast for 48 hours",
                    "7-day detailed meteorological outlook",
                    "Dynamic backgrounds matching current weather",
                    "Air Quality and UV Index tracking"
                ],
                results: "Fast load times under 200ms. Provides 100% accurate real-time data across global coordinates, serving as a reliable daily tool for a growing user base."
            }
        },
        {
            id: 6,
            title: "Content Creator Hub",
            category: "Full Stack",
            description: "Platform for digital creators to manage content, track analytics, and monetize their work. Features dashboard and analytics.",
            technologies: ["Node.js", "Express", "MongoDB", "Charts.js", "Analytics"],
            link: "case-study.html?id=6",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
            caseStudy: {
                challenge: "Creators have to switch between multiple apps to track performance across different platforms like YouTube, Instagram, and Blog, making it difficult to see the 'big picture' of their growth.",
                solution: "Developed a unified dashboard that aggregates API data from various platforms into a single, intuitive interface for simplified growth tracking and content planning.",
                process: "Used MongoDB for flexible data storage for different content types. I implemented a secure authentication system and built a custom aggregator that fetches and normalizes data from disparate social media APIs.",
                features: [
                    "Unified Analytics Dashboard with Charts.js",
                    "Content Calendar for cross-platform planning",
                    "Monetization and Revenue tracker",
                    "AI-powered content idea generator",
                    "Automated performance report emails"
                ],
                results: "Beta users saved an average of 5 hours per week on analytics. The platform supports integration with 4 major social media APIs and has been praised for its data visualization."
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
