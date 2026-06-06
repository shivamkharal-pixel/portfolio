/* ========================================
   CONTACT.JS - FORM HANDLING & INTERACTIONS
   ======================================== */

// ⚠️ SETUP REQUIRED:
// 1. Go to https://www.emailjs.com/
// 2. Sign up for free account
// 3. Set up Email Service (Gmail, Outlook, etc)
// 4. Create Email Template
// 5. Replace the IDs below with your own:

const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE"; // Get from EmailJS Account Settings
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID_HERE"; // Get from Email Service setup
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE"; // Get from Email Template setup
const RECIPIENT_EMAIL = "shivamkharal67@gmail.com"; // Your email address

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFormValidation();
    initSocialLinks();
    initContactAnimations();
});

/* ========================================
   CONTACT FORM INITIALIZATION
   ======================================== */

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!validateForm(formData)) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Log form data (In production, send to backend)
        console.log('Form submitted:', formData);

        // Simulate form submission
        submitForm(form, formData);
    });
}

/* ========================================
   FORM VALIDATION
   ======================================== */

function initFormValidation() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    inputs.forEach(input => {
        // Real-time validation
        input.addEventListener('blur', function() {
            validateField(this);
        });

        // Clear error on input
        input.addEventListener('input', function() {
            if (this.parentElement.classList.contains('error')) {
                this.parentElement.classList.remove('error');
            }
        });
    });
}

function validateField(field) {
    const fieldName = field.name;
    let isValid = true;

    if (fieldName === 'name') {
        isValid = field.value.trim().length >= 2;
    } else if (fieldName === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(field.value);
    } else if (fieldName === 'message') {
        isValid = field.value.trim().length >= 10;
    }

    if (!isValid) {
        field.parentElement.classList.add('error');
        field.style.borderColor = 'rgba(255, 0, 110, 0.5)';
    } else {
        field.parentElement.classList.remove('error');
        field.style.borderColor = '';
    }

    return isValid;
}

function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return (
        data.name && data.name.trim().length >= 2 &&
        data.email && emailRegex.test(data.email) &&
        data.message && data.message.trim().length >= 10
    );
}

/* ========================================
   FORM SUBMISSION WITH EMAIL
   ======================================== */

function submitForm(form, formData) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="display: flex; align-items: center; gap: 8px;"><span style="display: inline-block; animation: spin 1s linear infinite;">⏳</span> Sending...</span>';

    // Check if EmailJS is properly configured
    if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY_HERE" || EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID_HERE" || EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID_HERE") {
        showFormMessage('⚠️ Email service not configured. Please set up EmailJS (see console for instructions).', 'error');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        console.error('EmailJS Configuration Required:');
        console.error('1. Visit: https://www.emailjs.com/');
        console.error('2. Create a free account and set up an Email Service');
        console.error('3. Create an Email Template');
        console.error('4. Copy your Public Key, Service ID, and Template ID into contact.js');
        return;
    }

    // Send email using EmailJS
    const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "New Portfolio Contact",
        message: formData.message,
        reply_to: formData.email
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            // Success
            showFormMessage('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            // Clear message after 5 seconds
            setTimeout(() => {
                clearFormMessage();
            }, 5000);
        }, function(error) {
            // Error
            console.error('Email sending failed:', error);
            showFormMessage('❌ Failed to send message. Please try again or contact directly.', 'error');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
}

        // Clear message after 5 seconds
        setTimeout(() => {
            clearFormMessage();
        }, 5000);

    }, 1500);
}

/* ========================================
   FORM MESSAGES
   ======================================== */

function showFormMessage(message, type) {
    let messageBox = document.querySelector('.form-message');
    
    if (!messageBox) {
        const form = document.getElementById('contactForm');
        messageBox = document.createElement('div');
        messageBox.className = 'form-message';
        form.insertBefore(messageBox, form.firstChild);
    }

    messageBox.textContent = message;
    messageBox.style.cssText = `
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 0.875rem;
        animation: slideDownText 0.3s ease-out;
        ${type === 'success' 
            ? 'background: rgba(0, 217, 255, 0.1); border-left: 3px solid #00D9FF; color: #00D9FF;' 
            : 'background: rgba(255, 0, 110, 0.1); border-left: 3px solid #FF006E; color: #FF006E;'}
    `;
}

function clearFormMessage() {
    const messageBox = document.querySelector('.form-message');
    if (messageBox) {
        messageBox.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => messageBox.remove(), 300);
    }
}

/* ========================================
   SOCIAL LINKS
   ======================================== */

function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });

        // Add hover tooltip
        link.addEventListener('mouseenter', function() {
            const ariaLabel = this.getAttribute('aria-label');
            if (ariaLabel) {
                this.title = ariaLabel;
            }
        });
    });
}

/* ========================================
   CONTACT PAGE ANIMATIONS
   ======================================== */

function initContactAnimations() {
    // Animate form fields
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.animation = `fadeInUp 0.6s ease-out ${0.1 + index * 0.05}s backwards`;
    });

    // Animate contact info sections
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.animation = `fadeInUp 0.6s ease-out ${0.1 + index * 0.1}s backwards`;
    });
}

/* ========================================
   EMAIL LINK
   ======================================== */

document.addEventListener('click', function(e) {
    if (e.target.matches('.contact-link')) {
        // Email link is handled by default browser behavior
        console.log('Email link clicked');
    }
});

/* ========================================
   QUICK LINKS INTERACTION
   ======================================== */

document.addEventListener('click', function(e) {
    if (e.target.matches('.quick-link')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
        }
    }
});

/* ========================================
   FORM KEYBOARD SHORTCUTS
   ======================================== */

document.addEventListener('keydown', function(e) {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    // Submit form with Ctrl/Cmd + Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn && !submitBtn.disabled) {
            submitBtn.click();
        }
    }
});

/* ========================================
   FORM FIELD FOCUS EFFECTS
   ======================================== */

document.addEventListener('focus', function(e) {
    if (e.target.matches('.form-group input, .form-group textarea')) {
        e.target.parentElement.style.animation = 'glow 0.3s ease-out';
    }
}, true);

/* ========================================
   HELPER FUNCTION - SEND EMAIL (Optional)
   ======================================== */

// EDITABLE: Connect with email service (EmailJS, Formspree, etc.)
function sendEmailToBackend(formData) {
    // Option 1: Using EmailJS (free service)
    // Install EmailJS: https://www.emailjs.com/
    /*
    emailjs.init('YOUR_PUBLIC_KEY');
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_email: portfolioData.email,
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
    });
    */

    // Option 2: Using Formspree (free service)
    // https://formspree.io/
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    */

    // Option 3: Send to your own backend
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    */

    console.log('Form data prepared for sending:', formData);
}

console.log('✨ Contact page initialized');
