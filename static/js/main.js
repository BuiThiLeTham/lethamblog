document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('#name')?.value?.trim() || '';
    const email = form.querySelector('#email')?.value?.trim() || '';
    const message = form.querySelector('#message')?.value?.trim() || '';

    if (!name || !email || !message) {
      status.textContent = 'Vui lòng điền đầy đủ thông tin.';
      status.style.color = '#fca5a5';
      return;
    }

    status.textContent = 'Tin nhắn đã được ghi nhận. Bạn có thể tích hợp email/backend sau nếu muốn.';
    status.style.color = '#7dd3fc';
    form.reset();
  });
});
