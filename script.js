document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for ghost buttons
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.scroll);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Metric count up animation
  const metric = document.querySelector('[data-metric]');
  if (metric) {
    const finalValue = parseInt(metric.dataset.metric, 10) || 0;
    let current = 0;
    const increment = Math.ceil(finalValue / 80);

    const tick = () => {
      current += increment;
      if (current >= finalValue) {
        current = finalValue;
        metric.textContent = finalValue.toLocaleString();
      } else {
        metric.textContent = current.toLocaleString();
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }

  // Demo form handling via EmailJS
  const demoForm = document.getElementById('demo-form');
  const statusEl = document.getElementById('demo-form-status');

  const setStatus = (message, variant = '') => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = variant ? `form-status ${variant}` : 'form-status';
  };

  if (window.emailjs) {
    emailjs.init('wlNmTdBaCqgUoZs7D');
  }

  if (demoForm) {
    demoForm.addEventListener('submit', async event => {
      event.preventDefault();

      if (!window.emailjs) {
        setStatus('Email service unavailable. Please try again later.', 'error');
        return;
      }

      const submitButton = demoForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      const templateParams = {
        from_name: document.getElementById('demo-name').value,
        from_email: document.getElementById('demo-email').value,
        company: document.getElementById('demo-company').value,
        headcount: document.getElementById('demo-headcount').value,
        timeframe: document.getElementById('demo-timeframe').value,
        message: document.getElementById('demo-message').value || 'Not specified'
      };

      try {
        await emailjs.send('service_kq3aj8n', 'template_82xfjuy', templateParams);
        setStatus('Thanks! Your demo request is on its way. We will reach out soon.', 'success');
        demoForm.reset();
      } catch (error) {
        console.error('Error sending demo request', error);
        setStatus('Unable to send your request. Please email sales@kalankriti.in.', 'error');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    });
  }
});
