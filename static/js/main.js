document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = 'Đang gửi...';
    status.style.color = '#7dd3fc';

    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Có lỗi xảy ra.');
      }

      status.textContent = result.message || 'Gửi tin nhắn thành công!';
      status.style.color = '#7dd3fc';
      form.reset();
    } catch (error) {
      status.textContent = error.message || 'Gửi tin nhắn thất bại.';
      status.style.color = '#fca5a5';
    }
  });
});
