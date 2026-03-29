// Mobile navigation toggle
var navToggle = document.querySelector('.nav-toggle');
var navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });
}

// Close mobile menu when a link is clicked
var allNavLinks = document.querySelectorAll('.nav-links a');
allNavLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});

// Character counter for message textarea
var messageBox = document.getElementById('message');
var charCount = document.getElementById('char-count');

if (messageBox) {
  messageBox.addEventListener('input', function() {
    var count = messageBox.value.length;
    charCount.textContent = count + ' / 500 characters';
    if (count >= 450) {
      charCount.style.color = '#ef4444';
    } else {
      charCount.style.color = '#94a3b8';
    }
  });
}

// Form validation
var form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var valid = true;

    // Clear all previous errors
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('phone-error').textContent = '';
    document.getElementById('subject-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    // Remove red borders
    document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(function(field) {
      field.style.borderColor = '#e2e8f0';
    });

    // Validate name
    var nameField = document.getElementById('name');
    var name = nameField.value.trim();
    if (name === '') {
      document.getElementById('name-error').textContent = 'Please enter your full name.';
      nameField.style.borderColor = '#ef4444';
      valid = false;
    }

    // Validate email
    var emailField = document.getElementById('email');
    var email = emailField.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      document.getElementById('email-error').textContent = 'Please enter your email address.';
      emailField.style.borderColor = '#ef4444';
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email address.';
      emailField.style.borderColor = '#ef4444';
      valid = false;
    }

    // Validate phone if filled
    var phoneField = document.getElementById('phone');
    var phone = phoneField.value.trim();
    var phonePattern = /^[0-9\s\+\-]{7,15}$/;
    if (phone !== '' && !phonePattern.test(phone)) {
      document.getElementById('phone-error').textContent = 'Please enter a valid phone number.';
      phoneField.style.borderColor = '#ef4444';
      valid = false;
    }

    // Validate subject
    var subjectField = document.getElementById('subject');
    var subject = subjectField.value;
    if (subject === '') {
      document.getElementById('subject-error').textContent = 'Please select a subject.';
      subjectField.style.borderColor = '#ef4444';
      valid = false;
    }

    // Validate message
    var messageField = document.getElementById('message');
    var message = messageField.value.trim();
    if (message === '') {
      document.getElementById('message-error').textContent = 'Please write a message before sending.';
      messageField.style.borderColor = '#ef4444';
      valid = false;
    }

    // Show success if all valid
    if (valid) {
      form.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }
  });
}

// Fade in sections on scroll
var fadeSections = document.querySelectorAll('section');

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

fadeSections.forEach(function(section) {
  section.style.opacity = '0';
  section.style.transform = 'translateY(24px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});