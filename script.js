document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = 'Copied ✓';
      setTimeout(() => button.textContent = original, 1600);
    } catch {
      button.textContent = 'Copy unavailable';
      setTimeout(() => button.textContent = original, 1600);
    }
  });
});
