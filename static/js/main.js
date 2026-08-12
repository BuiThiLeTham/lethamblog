const translations = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    'hero.eyebrow': 'Hello, I am',
    'hero.name': 'Bùi Thị Lệ Thắm',
    'hero.role': 'Developer • Web Developer • Problem Solver',
    'hero.description': 'I build modern, meaningful digital experiences that are clear, fast, and user-friendly.',
    'hero.cta.primary': 'View Projects',
    'hero.cta.secondary': 'Contact',
    'hero.available': 'Available for work',
    'hero.projects': 'Projects',
    'showcase.kicker': 'Study • Build • Grow',
    'showcase.university': 'Viet Nam Korea University',
    'about.eyebrow': 'About me',
    'about.title': 'Introduction',
    'about.text1': 'I am a young developer with a passion for creating elegant web products that solve real problems and deliver memorable user experiences.',
    'about.text2': 'I enjoy learning new technologies, building scalable interfaces, and turning ideas into practical digital solutions.',
    'info.role': 'Role:',
    'info.roleValue': 'Developer',
    'info.location': 'Location:',
    'info.locationValue': 'Da Nang, Vietnam',
    'info.phone': 'Phone:',
    'skills.eyebrow': 'Skills',
    'skills.title': 'Core capabilities',
    'experience.eyebrow': 'Experience',
    'experience.title': 'Learning & growth',
    'experience.item1': 'Focused on software engineering, web development, systems thinking, and UI/UX design.',
    'experience.item2Title': 'Frontend & Backend Practice',
    'experience.item2': 'Building projects with HTML, CSS, JavaScript, PHP, Go and improving software architecture.',
    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Featured projects',
    'projects.p1': 'An e-commerce website designed to deliver a smooth shopping experience with a clean interface.',
    'projects.p2': 'A real-time messaging application focused on communication, speed, and usability.',
    'projects.p3': 'A Go-powered backend for portfolio content, contact handling, and maintainable project structure.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let’s build something great',
    'contact.description': 'I’m open to collaborations, freelance opportunities, and product ideas that need a thoughtful front-end and backend approach.',
    'contact.location': 'Location:',
    'contact.locationValue': 'Da Nang, Vietnam',
    'form.name': 'Full name',
    'form.namePlaceholder': 'Enter your name',
    'form.email': 'Email',
    'form.emailPlaceholder': 'Enter your email',
    'form.message': 'Message',
    'form.messagePlaceholder': 'What would you like to discuss?',
    'form.submit': 'Send message',
    'form.status.empty': 'Please fill in all fields.',
    'form.status.success': 'Your message has been received. You can connect your email or backend next.'
  },
  vi: {
    'nav.about': 'Giới thiệu',
    'nav.skills': 'Kỹ năng',
    'nav.experience': 'Kinh nghiệm',
    'nav.projects': 'Dự án',
    'nav.contact': 'Liên hệ',
    'nav.hire': 'Thuê tôi',
    'hero.eyebrow': 'Xin chào, tôi là',
    'hero.name': 'Bùi Thị Lệ Thắm',
    'hero.role': 'Developer • Web Developer • Problem Solver',
    'hero.description': 'Tôi xây dựng những trải nghiệm số hiện đại, rõ ràng, nhanh và thân thiện với người dùng.',
    'hero.cta.primary': 'Xem dự án',
    'hero.cta.secondary': 'Liên hệ',
    'hero.available': 'Sẵn sàng làm việc',
    'hero.projects': 'Dự án',
    'showcase.kicker': 'Học • Xây dựng • Phát triển',
    'showcase.university': 'Đại học Việt Nam - Hàn Quốc',
    'about.eyebrow': 'Về tôi',
    'about.title': 'Giới thiệu',
    'about.text1': 'Tôi là một lập trình viên trẻ với niềm đam mê tạo ra những sản phẩm web đẹp, sáng tạo và giải quyết vấn đề thực tế.',
    'about.text2': 'Tôi thích học hỏi công nghệ mới, xây dựng giao diện dễ mở rộng và biến ý tưởng thành giải pháp số hữu ích.',
    'info.role': 'Vị trí:',
    'info.roleValue': 'Developer',
    'info.location': 'Địa điểm:',
    'info.locationValue': 'Đà Nẵng, Việt Nam',
    'info.phone': 'Điện thoại:',
    'skills.eyebrow': 'Kỹ năng',
    'skills.title': 'Năng lực chính',
    'experience.eyebrow': 'Kinh nghiệm',
    'experience.title': 'Học tập & phát triển',
    'experience.item1': 'Tập trung vào kỹ thuật phần mềm, phát triển web, tư duy hệ thống và thiết kế UI/UX.',
    'experience.item2Title': 'Luyện tập Frontend & Backend',
    'experience.item2': 'Xây dựng dự án bằng HTML, CSS, JavaScript, PHP, Go và cải thiện kiến trúc phần mềm.',
    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Dự án tiêu biểu',
    'projects.p1': 'Website thương mại điện tử với trải nghiệm mua sắm mượt mà và giao diện sạch đẹp.',
    'projects.p2': 'Ứng dụng nhắn tin thời gian thực tập trung vào giao tiếp nhanh chóng và dễ dùng.',
    'projects.p3': 'Backend được xây dựng bằng Go để hỗ trợ nội dung portfolio, form liên hệ và cấu trúc dự án dễ duy trì.',
    'contact.eyebrow': 'Liên hệ',
    'contact.title': 'Hãy cùng tạo nên điều tuyệt vời',
    'contact.description': 'Tôi sẵn sàng hợp tác, làm việc freelance và đồng hành cùng những ý tưởng cần sự đầu tư về UI/UX và backend.',
    'contact.location': 'Địa điểm:',
    'contact.locationValue': 'Đà Nẵng, Việt Nam',
    'form.name': 'Họ tên',
    'form.namePlaceholder': 'Nhập tên của bạn',
    'form.email': 'Email',
    'form.emailPlaceholder': 'Nhập email của bạn',
    'form.message': 'Tin nhắn',
    'form.messagePlaceholder': 'Bạn muốn nói về điều gì?',
    'form.submit': 'Gửi tin nhắn',
    'form.status.empty': 'Vui lòng điền đầy đủ thông tin.',
    'form.status.success': 'Tin nhắn của bạn đã được ghi nhận. Bạn có thể tích hợp email hoặc backend tiếp theo.'
  },
  ja: {
    'nav.about': '自己紹介',
    'nav.skills': 'スキル',
    'nav.experience': '経験',
    'nav.projects': 'プロジェクト',
    'nav.contact': 'お問い合わせ',
    'nav.hire': '依頼する',
    'hero.eyebrow': 'こんにちは、私は',
    'hero.name': 'Bùi Thị Lệ Thắm',
    'hero.role': 'Developer • Web Developer • Problem Solver',
    'hero.description': '使いやすく速く、分かりやすい現代的なデジタル体験を作ります。',
    'hero.cta.primary': 'プロジェクトを見る',
    'hero.cta.secondary': 'お問い合わせ',
    'hero.available': '対応可能',
    'hero.projects': 'プロジェクト',
    'showcase.kicker': '学ぶ • 作る • 成長する',
    'showcase.university': 'ベトナム・韓国大学',
    'about.eyebrow': '私について',
    'about.title': '紹介',
    'about.text1': '私は現実の問題を解決し、魅力的なユーザー体験を提供する優れたWeb製品を作ることに情熱を持つ若手開発者です。',
    'about.text2': '新しい技術の学習、拡張しやすいインターフェースの構築、アイデアを実用的なデジタルソリューションに変えることを好みます。',
    'info.role': '役職:',
    'info.roleValue': 'Developer',
    'info.location': '所在地:',
    'info.locationValue': 'ダナン、ベトナム',
    'info.phone': '電話:',
    'skills.eyebrow': 'スキル',
    'skills.title': '主要スキル',
    'experience.eyebrow': '経験',
    'experience.title': '学びと成長',
    'experience.item1': 'ソフトウェアエンジニアリング、Web開発、システム思考、UI/UXデザインに取り組んでいます。',
    'experience.item2Title': 'フロントエンド＆バックエンド学習',
    'experience.item2': 'HTML、CSS、JavaScript、PHP、Goでプロジェクトを構築し、ソフトウェア設計を改善しています。',
    'projects.eyebrow': 'ポートフォリオ',
    'projects.title': '注目プロジェクト',
    'projects.p1': '清潔で使いやすいインターフェースを備えたECサイトです。',
    'projects.p2': 'コミュニケーションのスピードと使いやすさを重視したリアルタイムチャットアプリです。',
    'projects.p3': 'ポートフォリオのコンテンツやお問い合わせ処理を支えるGo製バックエンドです。',
    'contact.eyebrow': 'お問い合わせ',
    'contact.title': '素晴らしいものを一緒に作りましょう',
    'contact.description': '共同制作、フリーランス案件、UI/UXとバックエンドを重視する製品アイデアを歓迎します。',
    'contact.location': '所在地:',
    'contact.locationValue': 'ダナン、ベトナム',
    'form.name': '氏名',
    'form.namePlaceholder': 'お名前を入力してください',
    'form.email': 'メール',
    'form.emailPlaceholder': 'メールアドレスを入力してください',
    'form.message': 'メッセージ',
    'form.messagePlaceholder': 'どのようなご相談ですか？',
    'form.submit': 'メッセージを送る',
    'form.status.empty': '必須項目をすべて入力してください。',
    'form.status.success': 'メッセージを受け取りました。次にメールやバックエンド連携を行えます。'
  }
};

function detectLanguage() {
  const languages = navigator.languages || [navigator.language || 'en'];
  const normalized = languages.map((lang) => lang.toLowerCase());

  if (normalized.some((lang) => lang.startsWith('vi'))) return 'vi';
  if (normalized.some((lang) => lang.startsWith('ja'))) return 'ja';
  return 'en';
}

function setTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.body.dataset.theme = nextTheme;
  localStorage.setItem('themeMode', nextTheme);

  const toggleButton = document.getElementById('themeToggle');
  if (toggleButton) {
    toggleButton.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
    toggleButton.setAttribute('aria-label', nextTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function applyTranslations(lang) {
  const currentLang = translations[lang] ? lang : 'en';
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[currentLang][key];
    if (translation) element.textContent = translation;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translation = translations[currentLang][key];
    if (translation) element.placeholder = translation;
  });

  const select = document.getElementById('languageSelect');
  if (select) select.value = currentLang;

  localStorage.setItem('selectedLanguage', currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const languageSelect = document.getElementById('languageSelect');
  const themeToggle = document.getElementById('themeToggle');

  const preferredLang = localStorage.getItem('selectedLanguage') || detectLanguage();
  const preferredTheme = localStorage.getItem('themeMode') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTranslations(preferredLang);
  setTheme(preferredTheme);

  if (languageSelect) {
    languageSelect.addEventListener('change', (event) => {
      applyTranslations(event.target.value);
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('#name')?.value?.trim() || '';
    const email = form.querySelector('#email')?.value?.trim() || '';
    const message = form.querySelector('#message')?.value?.trim() || '';

    if (!name || !email || !message) {
      const currentLang = document.documentElement.lang || 'en';
      status.textContent = translations[currentLang]['form.status.empty'];
      status.style.color = '#f26b6b';
      return;
    }

    const currentLang = document.documentElement.lang || 'en';
    status.textContent = translations[currentLang]['form.status.success'];
    status.style.color = '#3ecf9d';
    form.reset();
  });
});
