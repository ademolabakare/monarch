document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menu-icon');
    
    // Toggle menu visibility
    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });

    // Dismiss menu on page click
    document.body.addEventListener('click', function(e) {
        if (e.target.id !== 'menu-icon' && !menu.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
});

// Section transitions
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Hide the menu
        document.getElementById('menu').classList.add('hidden');

        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the target section
        const targetSection = document.getElementById(link.dataset.target);
        targetSection.classList.remove('hidden');
        targetSection.classList.add('fade-in'); // Add smooth transition effect
    });
});

// Back to Hero functionality
document.querySelectorAll('[id^="back-to-hero"]').forEach(backButton => {
    backButton.addEventListener('click', function() {
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the hero section
        document.getElementById('hero').classList.remove('hidden');
    });
});

// CSS for smooth transition
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

//people
document.addEventListener("DOMContentLoaded", () => {
const people = document.querySelectorAll('.person');
people.forEach((person, index) => {
setTimeout(() => {
    person.classList.remove('scale-90');
    person.classList.add('scale-100');
}, index * 300); // Each person drops in after 300ms interval
});
});

