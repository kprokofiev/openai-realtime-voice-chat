// Полифилл для process
if (typeof process === 'undefined') {
  window.process = {
    env: {
      NODE_ENV: 'development'
    }
  };
}

// Полифилл для globalThis
if (typeof globalThis === 'undefined') {
  window.globalThis = window;
} 