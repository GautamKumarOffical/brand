/**
 * Toast notification component
 * Three variants: success, warning, error
 * Uses design tokens from tokens.css
 */

function showToast(message, variant = 'success', duration = 3000) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) {
    existing.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast toast-${variant}`;

  const msg = document.createElement('p');
  msg.className = 'toast-message';
  msg.textContent = message;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'toast-close';
  closeBtn.textContent = '\u00d7';
  closeBtn.addEventListener('click', () => toast.remove());

  toast.appendChild(msg);
  toast.appendChild(closeBtn);

  document.body.appendChild(toast);

  // Show animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto-hide after duration
  if (duration > 0) {
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 200);
    }, duration);
  }
}

// Convenience functions
function toastSuccess(message, duration) {
  showToast(message, 'success', duration);
}

function toastWarning(message, duration) {
  showToast(message, 'warning', duration);
}

function toastError(message, duration) {
  showToast(message, 'error', duration);
}

export { showToast, toastSuccess, toastWarning, toastError };
