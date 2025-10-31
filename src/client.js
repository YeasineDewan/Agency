// Client-side JavaScript for AgencyPro
// This file contains client-side functionality like analytics, tracking, etc.

(function() {
  'use strict';

  // Initialize client-side functionality
  function initClient() {
    console.log('AgencyPro client.js loaded successfully');

    // Basic analytics tracking
    trackPageView();

    // Initialize any client-side features
    initScrollTracking();
    initFormValidation();
  }

  // Track page views
  function trackPageView() {
    // Example: Send page view to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Custom tracking
    const trackingData = {
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    // Store in localStorage for demo purposes
    const existingData = JSON.parse(localStorage.getItem('agencypro_tracking') || '[]');
    existingData.push(trackingData);
    localStorage.setItem('agencypro_tracking', JSON.stringify(existingData.slice(-100))); // Keep last 100 entries
  }

  // Initialize scroll tracking
  function initScrollTracking() {
    let scrollDepth = 0;
    const trackScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrolled > scrollDepth + 10) { // Track every 10% increase
        scrollDepth = Math.floor(scrolled / 10) * 10;
        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: scrollDepth + '%'
          });
        }
      }
    };

    window.addEventListener('scroll', trackScroll);
  }

  // Initialize form validation enhancements
  function initFormValidation() {
    // Add real-time validation to forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', function() {
          validateField(this);
        });
      });
    });
  }

  // Validate individual field
  function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    const type = field.type;

    // Remove existing error messages
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }

    let isValid = true;
    let errorMessage = '';

    if (isRequired && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (type === 'email' && value && !isValidEmail(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    } else if (type === 'url' && value && !isValidUrl(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid URL';
    }

    if (!isValid) {
      field.classList.add('border-red-500');
      const errorDiv = document.createElement('div');
      errorDiv.className = 'field-error text-red-500 text-sm mt-1';
      errorDiv.textContent = errorMessage;
      field.parentNode.appendChild(errorDiv);
    } else {
      field.classList.remove('border-red-500');
    }
  }

  // Email validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // URL validation
  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClient);
  } else {
    initClient();
  }

  // Expose some functions globally if needed
  window.AgencyProClient = {
    trackEvent: function(eventName, parameters) {
      if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
      }
      console.log('Tracked event:', eventName, parameters);
    }
  };

})();
