// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize skill tabs
    initSkillTabs();
    
    // Initialize progress bars
    initProgressBars();
    
    // Initialize sticky header
    initStickyHeader();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize cursor follower
    initCursorFollower();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize back to top button
    initBackToTop();
});

// Initialize animations
function initAnimations() {
    // Hero section animations
    const animateText = document.querySelectorAll('.animate-text');
    const animateTextDelay = document.querySelectorAll('.animate-text-delay');
    const animateTextDelay2 = document.querySelectorAll('.animate-text-delay-2');
    const animateTextDelay3 = document.querySelectorAll('.animate-text-delay-3');
    const animateFloat = document.querySelectorAll('.animate-float');
    
    // Add animation classes with delays
    setTimeout(() => {
        animateText.forEach(el => el.classList.add('fade-in'));
    }, 300);
    
    setTimeout(() => {
        animateTextDelay.forEach(el => el.classList.add('fade-in'));
    }, 600);
    
    setTimeout(() => {
        animateTextDelay2.forEach(el => el.classList.add('fade-in'));
    }, 900);
    
    setTimeout(() => {
        animateTextDelay3.forEach(el => el.classList.add('fade-in'));
    }, 1200);
    
    // Float animation
    animateFloat.forEach(el => el.classList.add('floating'));
    
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe all skill items
    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe all certification cards
    document.querySelectorAll('.certification-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Initialize skill tabs
function initSkillTabs() {
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillGroups = document.querySelectorAll('.skill-group');
    
    skillCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            skillCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            category.classList.add('active');
            
            // Get category data
            const categoryData = category.getAttribute('data-category');
            
            // Hide all skill groups
            skillGroups.forEach(group => group.classList.remove('active'));
            
            // Show selected skill group
            document.getElementById(categoryData).classList.add('active');
        });
    });
}

// Initialize progress bars
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    // Create percentage labels for each progress bar
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        const percentLabel = document.createElement('span');
        percentLabel.className = 'percent-label';
        percentLabel.textContent = value + '%';
        percentLabel.style.opacity = '0';
        percentLabel.style.transition = 'opacity 0.5s ease';
        bar.parentElement.appendChild(percentLabel);
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const value = progressBar.getAttribute('data-value');
                
                // Reset width to 0 before animation starts
                progressBar.style.width = '0%';
                
                // Use setTimeout to create a slight delay before animation
                setTimeout(() => {
                    // Animate the progress bar
                    progressBar.style.width = `${value}%`;
                    
                    // Show the percentage label
                    const percentLabel = progressBar.parentElement.querySelector('.percent-label');
                    if (percentLabel) {
                        percentLabel.style.opacity = '1';
                    }
                }, 200);
            }
        });
    }, { threshold: 0.2 }); // Lower threshold to trigger animation earlier
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize sticky header
function initStickyHeader() {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                document.querySelector('nav').classList.remove('active');
                document.querySelector('.menu-toggle i').classList.remove('fa-times');
                document.querySelector('.menu-toggle i').classList.add('fa-bars');
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active link
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Toggle icon
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Initialize cursor follower
function initCursorFollower() {
    const cursor = document.querySelector('.cursor-follower');
    
    if (window.innerWidth > 768) {
        cursor.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .skill-category, .project-card, .certification-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('expand');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('expand');
            });
        });
    }
}

// Initialize contact form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showFormMessage('Sending message...', 'info');
            
            // Simulate API call
            setTimeout(() => {
                showFormMessage('Message sent successfully!', 'success');
                contactForm.reset();
            }, 2000);
        });
    }
}

// Show form message
function showFormMessage(message, type) {
    const formMessage = document.createElement('div');
    formMessage.className = `form-message ${type}`;
    formMessage.textContent = message;
    
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Add new message
    const contactForm = document.getElementById('contactForm');
    contactForm.appendChild(formMessage);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        formMessage.remove();
    }, 3000);
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize back to top button
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
}

// Typing animation for hero section
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    
    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
        
        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        
        // Initial Type Speed
        let typeSpeed = 300;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', function() {
    // Init TypeWriter
    const txtElement = document.querySelector('.txt-type');
    if (txtElement) {
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        // Init TypeWriter
        new TypeWriter(txtElement, words, wait);
    }
});

// Add CSS animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        /* Fade in animation */
        .fade-in {
            animation: fadeIn 1s ease forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Floating animation */
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
        
        /* Section animation */
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: all 1s ease;
        }
        
        section.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Skill item animation */
        .skill-item {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
            transition-delay: calc(var(--i) * 0.1s);
        }
        
        .skill-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Project card animation */
        .project-card {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
            transition-delay: calc(var(--i) * 0.1s);
        }
        
        .project-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Certification card animation */
        .certification-card {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
            transition-delay: calc(var(--i) * 0.1s);
        }
        
        .certification-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Timeline item animation */
        .timeline-item {
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.5s ease;
        }
        
        .timeline-item:nth-child(even) {
            transform: translateX(30px);
        }
        
        .timeline-item.animate {
            opacity: 1;
            transform: translateX(0);
        }
        
        /* Mobile menu */
        nav {
            transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
            nav {
                position: fixed;
                top: 0;
                right: -100%;
                width: 70%;
                height: 100vh;
                background: var(--light-color);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: var(--shadow);
                z-index: 999;
            }
            
            nav.active {
                right: 0;
            }
            
            nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            nav ul li {
                margin: 1.5rem 0;
            }
            
            .menu-toggle {
                display: block;
                z-index: 1000;
            }
        }
        
        /* Cursor follower */
        .cursor-follower {
            transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease, background 0.3s ease;
        }
        
        .cursor-follower.expand {
            transform: translate(-50%, -50%) scale(1.5);
            background: rgba(245, 0, 87, 0.3);
        }
        
        /* Back to top button */
        .back-to-top {
            position: fixed;
            bottom: 3rem;
            right: 3rem;
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            background: var(--primary-color);
            color: var(--light-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            box-shadow: var(--shadow);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 99;
        }
        
        .back-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            background: var(--secondary-color);
            transform: translateY(-3px);
        }
        
        /* Form message */
        .form-message {
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 0.5rem;
            font-size: 1.4rem;
        }
        
        .form-message.success {
            background: rgba(76, 175, 80, 0.1);
            color: #4caf50;
            border: 1px solid #4caf50;
        }
        
        .form-message.error {
            background: rgba(244, 67, 54, 0.1);
            color: #f44336;
            border: 1px solid #f44336;
        }
        
        .form-message.info {
            background: rgba(33, 150, 243, 0.1);
            color: #2196f3;
            border: 1px solid #2196f3;
        }
    `;
    document.head.appendChild(style);
});