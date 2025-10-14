// Schedule Form Handling
document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const inputs = this.querySelectorAll('input');
    const fullName = inputs[0].value;
    const gradeLevel = inputs[1].value;
    const englishLevel = inputs[2].value;
    const contactNumber = inputs[3].value;
    const preferredDateTime = inputs[4].value;
    
    // Simple validation
    if (fullName && gradeLevel && contactNumber && preferredDateTime) {
        // Show success message
        alert('Thank you for scheduling a level test! A message will be sent after reviewing the information.');
        
        // Reset form
        this.reset();
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', {
            fullName,
            gradeLevel,
            englishLevel,
            contactNumber,
            preferredDateTime
        });
    } else {
        alert('Please fill in all required fields.');
    }
});

// Add date/time picker functionality for Preferred Date & Time field
const dateTimeInput = document.querySelector('input[placeholder="Preferred Date & Time"]');
if (dateTimeInput) {
    dateTimeInput.addEventListener('click', function() {
        // Change type to datetime-local on click for better UX
        this.type = 'datetime-local';
    });
    
    dateTimeInput.addEventListener('blur', function() {
        // If no value, change back to text
        if (!this.value) {
            this.type = 'text';
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
    lastScroll = currentScroll;
});

// Input focus effects
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.color = '#333';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.style.color = '#999';
        }
    });
});