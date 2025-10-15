/**
 * Responsive Navigation Menu Script
 * Handles hamburger menu toggle and keyboard accessibility
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');
    
    // Toggle menu function
    function toggleMenu() {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        
        // Toggle active classes
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Update ARIA attribute
        hamburger.setAttribute('aria-expanded', !isExpanded);
        
        // Manage focus
        if (!isExpanded) {
            // When opening menu, focus on first link
            navLinks[0].focus();
        } else {
            // When closing menu, return focus to hamburger
            hamburger.focus();
        }
    }
    
    // Hamburger click event
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
        
        // Keyboard support for hamburger (Enter and Space)
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }
    
    // Close menu when clicking outside (mobile only)
    document.addEventListener('click', function(e) {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        const isMenuOpen = navMenu.classList.contains('active');
        
        // Close menu if clicking outside and menu is open
        if (!isClickInsideMenu && !isClickOnHamburger && isMenuOpen) {
            toggleMenu();
        }
    });
    
    // Close menu when a link is clicked (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Handle Escape key to close menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Keyboard navigation within menu
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            // Only handle keyboard navigation when menu is active (mobile)
            if (!navMenu.classList.contains('active')) return;
            
            let nextIndex;
            
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    nextIndex = (index + 1) % navLinks.length;
                    navLinks[nextIndex].focus();
                    break;
                    
                case 'ArrowUp':
                    e.preventDefault();
                    nextIndex = (index - 1 + navLinks.length) % navLinks.length;
                    navLinks[nextIndex].focus();
                    break;
                    
                case 'Home':
                    e.preventDefault();
                    navLinks[0].focus();
                    break;
                    
                case 'End':
                    e.preventDefault();
                    navLinks[navLinks.length - 1].focus();
                    break;
            }
        });
    });
    
    // Handle window resize - close menu and reset on desktop
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // If window is resized to desktop, close mobile menu
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }, 250);
    });
    
    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an anchor link
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without jumping
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // ===== THEME SWITCHER FUNCTIONALITY =====
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Theme toggle function
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        
        // Save theme preference
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        
        // Update ARIA label
        const newLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
        themeToggle.setAttribute('aria-label', newLabel);
    }
    
    // Theme toggle click event
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        
        // Keyboard support for theme toggle
        themeToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTheme();
            }
        });
        
        // Set initial ARIA label
        const initialLabel = currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
        themeToggle.setAttribute('aria-label', initialLabel);
    }
});

/**
 * Additional Features:
 * - Trap focus within mobile menu when open
 * - Prevent body scroll when mobile menu is open
 */

// Trap focus within mobile menu
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    });
}
