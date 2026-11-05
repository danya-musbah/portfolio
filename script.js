(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ------------------------------------------------------------------
     Edit this block. Empty values are hidden on the page.
     ------------------------------------------------------------------ */
  var CONTACT = {
    github: 'https://github.com/danya-musbah',
    linkedin: 'https://linkedin.com/in/danya-musbah-87098838b/',
    youtube: 'https://youtube.com/@danya-musbah',
    email: 'danyamusbah8@gmail.com'
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Interface text, Arabic and English
     ------------------------------------------------------------------ */
  var S = {
    ar: {
      cv_btn: 'تحميل السيرة الذاتية',
      grp_feat: 'مشاريع مختارة', grp_more: 'مشاريع أخرى',
      all_repos: 'كل المستودعات على GitHub',
      journey_title: 'المسار',
      b_guided: 'دروس موجّهة مع تعديلاتي',
      brand_label: 'الصفحة الرئيسية',
      nav_about: 'نبذة', nav_work: 'المشاريع', nav_bg: 'المسار', nav_stack: 'المهارات', nav_contact: 'التواصل',
      eyebrow: 'ملف أعمال · الإصدار 2050',
      tagline: 'برمجيات مبنية على ظروف ليبيا الحقيقية.',
      sub: 'خريجة هندسة البرمجيات من جامعة طرابلس، الأولى بين جميع خريجي فصل خريف 2025 بتقدير ممتاز (92.78%). أبني منصات ويب عربية RTL وأنظمة بيانات وأدوات ذكاء اصطناعي، وأتقدم لمنح ماجستير ممولة بالكامل في مجال الحوسبة.',
      cta_work: 'استعرض المشاريع',
      clock_label: 'طرابلس',
      orbit_hint: 'مرّر على مشروع أو اضغط عليه',
      orbit_aria: 'مخطط مداري تفاعلي للمشاريع. القائمة الكاملة في قسم المشاريع.',
      st_grade: 'المعدل العام، تقدير ممتاز', st_db: 'درجة كل من مقرري قواعد البيانات (من 100)',
      st_tables: 'جدولاً في قاعدة بيانات Junto', st_req: 'متطلباً وظيفياً موثّقاً في Junto',
      about_title: 'نبذة',
      about_p: 'بدأت جونتو (Junto) من مشكلة يومية: حين ينقطع الاتصال في ليبيا تضيع المحاضرة ولا يبقى ما يُراجَع. بنيتها لتبقى خفيفة مع الإنترنت الضعيف. وتتبع مشاريع أخرى النهج نفسه: أبسط تقنية تؤدي الغرض، ووضوح في وصف البيانات، وواجهة عربية أولًا. أتطلع الآن إلى ماجستير ممول بالكامل لتعميق الأساس النظري وتطوير مهارات البحث.',
      f_uni: 'الجامعة', v_uni: 'جامعة طرابلس',
      f_field: 'الدرجة', v_field: 'بكالوريوس تقنية المعلومات، تخصص هندسة البرمجيات',
      f_grad: 'التخرج', v_grad: 'فصل خريف 2025',
      f_rank: 'الترتيب', v_rank: 'الأولى بين جميع خريجي فصل خريف 2025',
      f_focus: 'التركيز', v_focus: 'منصات عربية RTL، قواعد بيانات، أدوات ذكاء اصطناعي',
      f_lang: 'اللغات', v_lang: 'العربية (الأم) · الإنجليزية متوسط متقدم، تقدير ذاتي ≈ IELTS 6.0، والاختبار الرسمي عند الحاجة',
      f_goal: 'أبحث عن', v_goal: 'ماجستير ممول بالكامل في الحوسبة',
      work_title: 'المشاريع',
      work_intro: 'كل بطاقة تنقلب لتعرض التفاصيل ودوري الفعلي. الوسوم تبيّن هل المشروع فردي أو بمساعدة أدوات ذكاء اصطناعي أو جماعي أو تطوعي.',
      work_of: '{n} من {t}',
      filter_aria: 'تصنيف',
      cat_all: 'الكل', cat_ai: 'ذكاء اصطناعي', cat_data: 'بيانات وتحليل', cat_platform: 'منصات', cat_tool: 'أدوات',
      b_ind: 'فردي', b_ai: 'بمساعدة أدوات ذكاء اصطناعي', b_team: 'فريق', b_vol: 'تطوعي', b_grad: 'مشروع تخرج', b_use: 'قيد الاستخدام الفعلي',
      flip_hint: 'مرّر أو اضغط لقلب البطاقة', back: 'رجوع', flip_label: 'اقلب البطاقة',
      lbl_note: 'ملاحظة',
      clear_tech: 'إلغاء تصفية {x}',
      archive_title: 'الأرشيف',
      edu_title: 'التعليم والتكريم', exp_title: 'الخبرة',
      skills_title: 'المهارات', skills_intro: 'لكل مهارة المستوى الذي استخدمتها به فعلاً. اختر مستوى لإبراز مهاراته فقط.',
      lvl_all: 'الكل',
      lv_A: 'مستقل في مشروع حقيقي', lv_B: 'مشروع حقيقي بمساعدة ذكاء اصطناعي أو ضمن فريق', lv_C: 'مقرر أو دروس', lv_D: 'معرفة أساسية',
      stack_title: 'التقنيات في المشاريع',
      stack_intro: 'الرقم هو عدد المشاريع الرئيسية التي تستخدم التقنية. اضغط على تقنية لتصفية المشاريع.',
      ev_title: 'الأدلة', ev_intro: 'المستندات التي تسند ما ورد في هذه الصفحة. مخططات Junto علنية في المستودع، والباقي متاح عند الطلب.',
      ev_req: 'عند الطلب', ev_pub: 'علني',
      contact_title: 'التواصل',
      contact_p: 'أتقدم لمنح ماجستير ممولة بالكامل في علوم الحاسب وهندسة البرمجيات والذكاء الاصطناعي، وأرحب بأي فرصة تدريب أو عمل. طرابلس، ليبيا.',
      copy: 'نسخ البريد', copied: 'تم النسخ', copy_fail: 'حدّدتُ البريد، انسخه من جهازك',
      lang_btn: 'EN', lang_aria: 'Switch to English', theme_aria: 'تبديل المظهر'
    },
    en: {
      cv_btn: 'Download CV',
      grp_feat: 'Selected projects', grp_more: 'More projects',
      all_repos: 'All repositories on GitHub',
      journey_title: 'Journey',
      b_guided: 'Guided, with my own changes',
      brand_label: 'Home',
      nav_about: 'About', nav_work: 'Work', nav_bg: 'Background', nav_stack: 'Skills', nav_contact: 'Contact',
      eyebrow: 'Portfolio · Edition 2050',
      tagline: 'Software built around Libya’s real conditions.',
      sub: 'Software Engineering graduate of the University of Tripoli, first among all Fall 2025 graduates with an Excellent grade (92.78%). I build Arabic RTL web platforms, data systems and AI tools, and I am applying for fully funded Master’s programmes in computing.',
      cta_work: 'See the work',
      clock_label: 'Tripoli',
      orbit_hint: 'Hover or tap a project',
      orbit_aria: 'Interactive orbit diagram of the projects. The full list is in the Work section.',
      st_grade: 'Overall grade, Excellent', st_db: 'Mark in each of the two database courses (out of 100)',
      st_tables: 'Tables in the Junto database', st_req: 'Functional requirements documented for Junto',
      about_title: 'About',
      about_p: 'Junto started from an everyday problem: when the connection drops in Libya, a lecture is lost and nothing is left to review. I built it to stay light on weak internet. Other projects follow the same approach: the simplest stack that works, clear statements about what the data is, and an Arabic-first interface. I now want a fully funded Master’s to deepen my theoretical foundation and develop research skills.',
      f_uni: 'University', v_uni: 'University of Tripoli',
      f_field: 'Degree', v_field: 'Bachelor’s in Information Technology, Software Engineering major',
      f_grad: 'Completed', v_grad: 'Fall 2025 semester',
      f_rank: 'Standing', v_rank: 'First among all Fall 2025 graduates',
      f_focus: 'Focus', v_focus: 'Arabic RTL platforms, databases, AI tools',
      f_lang: 'Languages', v_lang: 'Arabic (native) · English upper-intermediate, self-assessed ≈ IELTS 6.0; official test on request',
      f_goal: 'Looking for', v_goal: 'A fully funded Master’s in computing',
      work_title: 'Work',
      work_intro: 'Each card turns over to show the detail and my actual role. The tags say whether a project is individual, AI-assisted, a team effort or volunteer work.',
      work_of: '{n} of {t}',
      filter_aria: 'Category',
      cat_all: 'All', cat_ai: 'AI', cat_data: 'Data & analytics', cat_platform: 'Platforms', cat_tool: 'Tools',
      b_ind: 'Individual', b_ai: 'AI-assisted coding', b_team: 'Team', b_vol: 'Volunteer', b_grad: 'Graduation project', b_use: 'In real use',
      flip_hint: 'Hover or tap to flip', back: 'Back', flip_label: 'Flip card',
      lbl_note: 'Note',
      clear_tech: 'Clear {x}',
      archive_title: 'Archive',
      edu_title: 'Education & recognition', exp_title: 'Experience',
      skills_title: 'Skills', skills_intro: 'Each skill carries the level at which I have actually used it. Select a level to highlight only those.',
      lvl_all: 'All',
      lv_A: 'Used independently in a real project', lv_B: 'Real project, with AI help or in a team', lv_C: 'Course or tutorial', lv_D: 'Basic familiarity',
      stack_title: 'Technologies in projects',
      stack_intro: 'The number is how many of the main projects use each technology. Select one to filter the projects.',
      ev_title: 'Evidence', ev_intro: 'The documents behind the claims on this page. The Junto diagrams are public in the repository; the rest is available on request.',
      ev_req: 'on request', ev_pub: 'public',
      contact_title: 'Contact',
      contact_p: 'I am applying for fully funded Master’s programmes in computer science, software engineering and AI, and I welcome internships or work. Tripoli, Libya.',
      copy: 'Copy email', copied: 'Copied', copy_fail: 'Email selected, copy it from your device',
      lang_btn: 'عربي', lang_aria: 'التبديل إلى العربية', theme_aria: 'Toggle theme'
    }
  };

  /* ------------------------------------------------------------------
     Projects. Only facts from the work itself.
     badges: ind, ai, team, vol, grad, use (shown only where known).
     ------------------------------------------------------------------ */
  var PROJECTS = [
    {
      id: 'junto', feat: true, name: 'Junto', cats: ['ai', 'platform'], badges: ['grad', 'ind'],
      type: { ar: 'تعاون افتراضي ذكي لحظي', en: 'Real-time smart virtual collaboration' },
      desc: {
        ar: 'منصة تعاون افتراضي لحظي ثنائية اللغة (عربي RTL وإنجليزي LTR) مصممة لإنترنت غير مستقر، حتى لا يعني انقطاع الاتصال ضياع المحاضرة. تضم مساحات عمل، وغرف اجتماعات WebRTC، ودردشة لحظية، وتقويماً مشتركاً، ومشاركة ملفات، وميزات بحث واجتماعات بالذكاء الاصطناعي (RAG).',
        en: 'A bilingual (Arabic RTL and English LTR) real-time collaboration platform designed for unreliable internet, so a dropped connection does not mean a lost lecture. It has workspaces, WebRTC meeting rooms, real-time chat, a shared calendar, file sharing, and AI-assisted search and meeting features (RAG).'
      },
      points: {
        ar: ['نفّذتُ التحليل والتصميم وقاعدة البيانات والواجهة والخلفية والذكاء الاصطناعي والاختبار والتوثيق بمفردي.',
             'مصادقة JWT مع تسجيل الدخول عبر OAuth (Google وGitHub وDiscord) وإدارة الأجهزة النشطة.',
             'التوثيق: مخطط ERD ومخططات حالات الاستخدام و20 مخطط نشاط و17 مخطط تسلسل.',
             'الواجهة الخفيفة قرار تصميمي لتحمّل ضعف الاتصال ولم تُقَس أداءً.'],
        en: ['I carried out the analysis, design, database, frontend, backend, AI integration, testing and documentation on my own.',
             'JWT authentication with OAuth login (Google, GitHub, Discord) and active-device management.',
             'Documentation: an ERD, use-case diagrams, 20 activity diagrams and 17 sequence diagrams.',
             'The lightweight frontend is a design decision for weak connections; it has not been benchmarked.']
      },
      metrics: [['88', { ar: 'جدولاً', en: 'tables' }], ['102', { ar: 'متطلباً', en: 'requirements' }], ['94%', { ar: 'درجة المشروع', en: 'project grade' }]],
      note: { ar: 'مشروع التخرج، بإشراف د. محمد إ. جمعة عبد الرحمن، وعُرض في المعرض الأكاديمي لجامعة طرابلس.', en: 'Graduation project, supervised by Dr. Mohamed E. Gumah Abdulrahman, presented at the University of Tripoli academic exhibition.' },
      stack: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Socket.io', 'WebRTC', 'Gemini API'],
      links: [{ l: { ar: 'الكود', en: 'Source' }, u: 'https://github.com/danya-musbah/Junto' }, { l: { ar: 'عرض توضيحي', en: 'Demo' }, u: 'https://youtu.be/K1SkB1EjjYQ' }]
    },
    {
      id: 'jobs', feat: true, name: 'Libya Jobs Intelligence', cats: ['data', 'ai'], badges: ['ind', 'ai', 'vol'],
      type: { ar: 'بحث وتحليلات لسوق العمل الليبي', en: 'Libyan job-market search and analytics' },
      desc: {
        ar: 'منصة عربية RTL مجانية ومفتوحة بلا تسجيل دخول، تحوّل إعلانات الوظائف المنشورة على تيليجرام إلى وظائف منظمة قابلة للبحث. تصنّف المنشورات (وظيفة، غير وظيفة، غير مؤكد)، وتستخرج الحقول بالقواعد ومعالجة اللغة، وتدمج الإعلانات المكررة، وتعرض تحليلات وتوقعات ترفض التخمين حين تكون البيانات غير كافية.',
        en: 'A free, public, no-login Arabic RTL platform that turns job ads posted on Telegram into structured, searchable jobs. It classifies posts (JOB, NON_JOB, UNCERTAIN), extracts fields with rules and NLP, merges duplicate ads, and shows analytics and forecasts that refuse to guess when the data is too thin.'
      },
      points: {
        ar: ['كتبتُ منطق الاستخراج الأول، ثم قارنتُ الحقول المستخرجة يدوياً بكل منشور أصلي وحدّدتُ الأخطاء المتكررة، ونفّذتُ الإصلاحات بمساعدة GitHub Copilot على أكثر من 30 دورة تحسين.',
             'مخطط PostgreSQL/Supabase يفصل المنشورات الأصلية عن سجلات الوظائف المطبّعة.'],
        en: ['I wrote the first extraction logic, then compared the extracted fields by hand with each original post, identified the recurring errors, and used GitHub Copilot to implement fixes over 30+ refinement cycles.',
             'A PostgreSQL/Supabase schema separates the original posts from normalized job records.']
      },
      note: { ar: 'التحقق يدوي وليس اختباراً معيارياً رسمياً.', en: 'Quality was checked by manual review, not by a formal benchmark.' },
      stack: ['Python', 'Telethon', 'scikit-learn', 'JavaScript', 'PostgreSQL', 'Supabase', 'GitHub Actions', 'Pytest']
    },
    {
      id: 'animal', feat: true, name: 'Animal Rights AI', cats: ['ai'], badges: ['ind', 'ai'],
      type: { ar: 'مساعد RAG مبني على الأدلة', en: 'Evidence-grounded RAG assistant' },
      desc: {
        ar: 'مساعد استرجاع معزّز (RAG) فوق مدوّنة منتقاة من قوانين رفق الحيوان. يجمع بين البحث الدلالي والنصي الكامل بدمج Reciprocal Rank Fusion، ويقتبس مصادره، ويردّ صراحةً حين لا تكفي الأدلة.',
        en: 'A retrieval-augmented assistant over a curated animal-welfare law corpus. It combines semantic and full-text retrieval with Reciprocal Rank Fusion, cites its sources, and says so when the evidence is insufficient.'
      },
      points: {
        ar: ['صمّمتُ المعمارية والقرارات التقنية، وكتبت أدوات ذكاء اصطناعي جزءاً كبيراً من الكود وراجعتُه.',
             'يضم اختبارات pytest ومجموعة أسئلة تقييم صغيرة، ولا أعرض نتائج معيارية.'],
        en: ['I designed the architecture and the technical decisions; AI coding tools wrote a large part of the code and I reviewed it.',
             'It includes a pytest suite and a small evaluation question set. I report no benchmark results.']
      },
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Supabase', 'Pytest'],
      links: [{ l: { ar: 'الكود', en: 'Source' }, u: 'https://github.com/danya-musbah/animal-rights-ai' }]
    },
    {
      id: 'school', feat: true, name: 'School Management System', cats: ['platform'], badges: ['ind', 'vol', 'use'],
      type: { ar: 'نظام إدارة مدرسية وبوابة طلاب', en: 'School management system and student portal' },
      desc: {
        ar: 'نظام بنيتُه ونشرتُه ووثّقتُه لمدرسة Pioneers of Science، يغطي سجلات الطلاب وأولياء الأمور، والسنوات والفصول، والجداول، والامتحانات والنتائج، والحضور، وشؤون الموظفين، والرسوم، والتقارير والمستندات. جمعتُ المتطلبات من اجتماعات مع الإدارة ومقابلات مع كل قسم.',
        en: 'A system I built, deployed and documented for Pioneers of Science School. It covers student and guardian records, academic years and classes, timetables, exams and results, attendance, staff records, fees, reports and documents. I gathered requirements through meetings with the management and interviews with each department.'
      },
      points: {
        ar: ['بوابة للطلاب (الملف الشخصي والحضور والنتائج المعتمدة والرسوم والجدول): أصدرتُ بيانات الدخول داخل الفصول ودرّبتُ الطلاب والموظفين على الاستخدام.'],
        en: ['A student portal (profile, attendance, approved results, fees, timetable): I issued credentials in classrooms and trained students and staff to use it.']
      },
      note: { ar: 'تطوعي وبلا أجر، خارج مهام وظيفتي المدفوعة. بعض الوحدات لم تُختبر بعد بالكامل في الإنتاج.', en: 'Volunteer and unpaid, outside my paid duties. Some modules are not yet fully verified in production.' },
      stack: ['HTML/CSS', 'JavaScript', 'Supabase', 'PostgreSQL', 'Cloudflare Pages'],
      links: [{ l: { ar: 'المستودع', en: 'Repository' }, u: 'https://github.com/danya-musbah/Pioneers-School' }]
    },
    {
      id: 'electrohub', name: 'Electrohub Online Store', cats: ['platform'], badges: ['team'],
      type: { ar: 'متجر إلكتروني (الفصل 5، فريق من 6)', en: 'Online store (semester 5, team of 6)' },
      desc: {
        ar: 'متجر إلكتروني بمشروع جماعي. كنتُ قائدة الفريق: وزّعتُ المهام وسددتُ الثغرات في العمل.',
        en: 'An online store built as a team project. I was team lead: I distributed the tasks and covered gaps in the work.'
      },
      points: {
        ar: ['صمّمتُ قاعدة بيانات MySQL (نحو 30 جدولاً).', 'بنيتُ الخلفية بـ Laravel/PHP مع أدوار (زائر ومستخدم ومدير) وحماية من SQL injection وXSS وCSRF.'],
        en: ['I designed the MySQL database (about 30 tables).', 'I built the Laravel/PHP backend with guest, user and admin roles and protection against SQL injection, XSS and CSRF.']
      },
      stack: ['Laravel', 'PHP', 'MySQL']
    },
    {
      id: 'bike', name: 'Java Bike Store', cats: ['platform'], badges: ['team'],
      type: { ar: 'تطبيق متجر (الفصل 3، فريق من 3)', en: 'Store application (semester 3, team of 3)' },
      desc: {
        ar: 'مشروع مقرر جماعي. كنتُ قائدة الفريق: بنيتُ أساس المشروع ثم وزّعتُ المهام.',
        en: 'A team course project. I was team lead: I built the foundation of the project, then assigned the tasks.'
      },
      points: {
        ar: ['طوّرتُ الخلفية وتكامل النظام بلغة Java مع Microsoft SQL Server، واخترناه لسهولة تكامله مع Java.'],
        en: ['I developed the backend and system integration in Java with Microsoft SQL Server, chosen for its integration with Java.']
      },
      stack: ['Java', 'SQL Server']
    },
    {
      id: 'wonder', name: 'Wonder Libya', cats: ['platform'], badges: ['team'],
      type: { ar: 'منصة سياحية (الفصل 4)', en: 'Tourism platform (semester 4)' },
      desc: {
        ar: 'مشروع جماعي. كنتُ مسؤولة عن مخططات التصميم وتصميم الواجهة ووثيقة تصميم البرمجيات.',
        en: 'A team project. I was responsible for the design diagrams, the UI design and the Software Design Document.'
      },
      points: {
        ar: ['صمّمتُ وبرمجتُ ميزة إدارة الحجوزات (إنشاء وعرض وتعديل وحذف).'],
        en: ['I designed and coded the booking management feature (create, view, edit, delete).']
      },
      stack: ['UML', 'UI design']
    },
    {
      id: 'nexa', name: 'NEXA AI', cats: ['ai', 'platform'], badges: [],
      type: { ar: 'منصة مساحات عمل بالذكاء الاصطناعي', en: 'AI workspace platform' },
      desc: {
        ar: 'منصة متكاملة: يسجّل المستخدم دخوله، ويرفع مستندات ويحاورها عبر التوليد المعزّز بالاسترجاع (RAG)، ويستخدم مساحات مخصصة للبيانات وتعلّم الآلة، والمسار المهني، والبرمجة، والكتابة والبريد، والدراسة، والبحث، والمقابلات، والاجتماعات، والترجمة.',
        en: 'A full-stack platform. Users sign in, upload documents and chat with them through retrieval-augmented generation, and use dedicated workspaces for data and ML, career, code, writing and email, study, research, interviews, meetings and translation.'
      },
      stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vite', 'Tailwind', 'PostgreSQL', 'Supabase']
    },
    {
      id: 'traffic', name: 'Libya Traffic Intelligence', cats: ['data'], badges: [],
      type: { ar: 'تحليلات حوادث المرور وتقييم المخاطر', en: 'Traffic accident analytics and risk' },
      desc: {
        ar: 'منصة لتحليل حوادث المرور وتقدير المخاطر في ليبيا بلا أطر عمل ولا مكتبات رسوم: مؤشرات أداء، ورسوم SVG، وخريطة SVG مبنية يدويًا بالتحريك والتكبير ووضع الخرائط الحرارية، ونقاط الخطورة، ودرجة مخاطر قائمة على قواعد معلنة، وتصدير CSV.',
        en: 'A traffic accident analytics and risk platform for Libya with no frameworks and no chart libraries: KPIs, SVG charts, a hand-built pan-and-zoom SVG map with a heatmap mode, hotspots, a transparent rule-based risk score and CSV export.'
      },
      note: { ar: 'تعمل على مجموعة بيانات تركيبية من 2,000 سجل. هي بيانات تجريبية وليست إحصاءات رسمية.', en: 'Runs on a synthetic dataset of 2,000 records. It is demo data, not official statistics.' },
      stack: ['JavaScript', 'HTML/CSS', 'SVG']
    },
    {
      id: 'pharmacy', name: 'Pharmacy Intelligence', cats: ['data'], badges: [],
      type: { ar: 'ذكاء الأعمال للصيدليات', en: 'Business intelligence for pharmacies' },
      desc: {
        ar: 'عرض تجاري لمنصة تحليلات ذكاء أعمال عربية RTL لأصحاب الصيدليات في ليبيا. خلفية بايثون تُبقي منطق التحليل والبيانات بعيدًا عن جهة العميل، وواجهة بجافاسكربت خالصة.',
        en: 'A commercial demo of an Arabic RTL business-intelligence platform for pharmacy owners in Libya. A Python backend keeps the analytics logic and datasets off the client, with a plain JavaScript frontend.'
      },
      note: { ar: 'نسخة عرض تجاري.', en: 'Commercial demo build.' },
      stack: ['Python', 'Flask', 'pandas', 'JavaScript']
    },
    {
      id: 'muntazahat', name: 'Muntazahat منتزهات', cats: ['platform'], badges: [],
      type: { ar: 'اكتشاف وحجز المتنزهات الترفيهية', en: 'Amusement park discovery and booking' },
      desc: {
        ar: 'منصة عربية RTL لاكتشاف المتنزهات الترفيهية وحجزها في السوق الليبي. ثلاثة أدوار مستخدمين مفصولة بصرامة، وواجهة ثابتة فوق طبقة وصول للبيانات قابلة للاستبدال.',
        en: 'An Arabic RTL platform for discovering and booking amusement parks in the Libyan market. Three strictly separated user roles share a static frontend built on a swappable data access layer.'
      },
      stack: ['HTML/CSS', 'JavaScript']
    },
    {
      id: 'password', name: 'Secure Password Generator', cats: ['tool'], badges: [],
      type: { ar: 'مولّد كلمات مرور من جهة العميل', en: 'Client-side password generator' },
      desc: {
        ar: 'مولّد كلمات مرور بـ HTML وCSS وجافاسكربت خالصة يعتمد Web Crypto API: عشوائية بالعيّنة المرفوضة، وخلط Fisher-Yates آمن، وضمان وجود كل فئة من الحروف، وتقدير للقوة والإنتروبيا، وسجل يبقى في الذاكرة فقط.',
        en: 'A password generator in plain HTML, CSS and JavaScript built on the Web Crypto API: rejection-sampled randomness, a secure Fisher-Yates shuffle, guaranteed character categories, a strength and entropy estimate and an in-memory-only history.'
      },
      stack: ['JavaScript', 'HTML/CSS', 'Web Crypto API']
    },
    {
      id: 'days100', name: '100 Days, 100 Projects', cats: ['tool'], badges: ['guided'],
      type: { ar: 'تحدٍّ مستمر لبناء 100 مشروع', en: 'An ongoing 100-project challenge' },
      desc: {
        ar: 'تحدٍّ لبناء 100 مشروع عبر الويب والجوال وتحليل البيانات وتعلّم الآلة والذكاء الاصطناعي. أنفّذ المشاريع بدروس موجّهة ثم أوسّعها بتعديلاتي الخاصة.',
        en: 'A challenge to build 100 projects across web, mobile, data analytics, machine learning and AI. I follow guided tutorials and then extend each project with my own modifications.'
      },
      note: { ar: 'أعمال تعلّم موجّهة وليست مشاريع مستقلة التصميم.', en: 'Guided learning work, not independently designed projects.' },
      stack: ['JavaScript'],
      links: [{ l: { ar: 'المستودع', en: 'Repository' }, u: 'https://github.com/danya-musbah/100-Days-100-Projects' }]
    }
  ];

  var ARCHIVE = [
    { name: 'FinanceIQ', ar: 'لوحة تحكم للمالية الشخصية.', en: 'Personal finance dashboard.' },
    { name: 'Netflix EDA', ar: 'مشروع تحليل استكشافي للبيانات.', en: 'Exploratory data analysis project.' },
    { name: 'Smart Data Entry', ar: 'نظام إدخال بيانات ذكي مدعوم بالذكاء الاصطناعي.', en: 'AI-powered smart data entry system.' },
    { name: 'Municipal Complaints', ar: 'تطوّع في نظام رقمي لإدارة الشكاوى البلدية.', en: 'Volunteer work on a municipal digital complaint management system.' }
  ];

  var CVS = [
    { f: 'cv/CV_1_Software_Engineering.pdf', ar: 'هندسة البرمجيات', en: 'Software Engineering' },
    { f: 'cv/CV_2_Computer_Science_Theory_Systems.pdf', ar: 'علوم الحاسب: نظري ونظم', en: 'Computer Science: theory & systems' },
    { f: 'cv/CV_3_AI_and_Data_Science.pdf', ar: 'الذكاء الاصطناعي وعلوم البيانات', en: 'AI & Data Science' },
    { f: 'cv/CV_4_General_Computer_Science.pdf', ar: 'علوم الحاسب العامة', en: 'General Computer Science' }
  ];

  var JOURNEY = [
    { d: { ar: '2021 – 2023', en: '2021 – 2023' }, t: { ar: 'دبلوم عالٍ في الصيدلة', en: 'Higher Diploma in Pharmacy' }, x: { ar: 'المعهد العالي للعلوم الطبية، تاجوراء. المعدل 86%.', en: 'Tripoli Higher Institute of Medical Sciences, Tajoura. GPA 86%.' } },
    { d: { ar: '2023', en: '2023' }, t: { ar: 'بحث أكاديمي', en: 'Academic research' }, x: { ar: 'تأثيرات ليفوثيروكسين على كثافة العظام (غير منشور).', en: 'The Effects of Levothyroxine on Bone Density (unpublished).' } },
    { d: { ar: 'فصل خريف 2025', en: 'Fall 2025' }, t: { ar: 'إتمام البكالوريوس في هندسة البرمجيات', en: 'Completed the Bachelor’s in Software Engineering' }, x: { ar: 'معدل 92.78% والأولى بين جميع الخريجين. مشروع التخرج Junto بدرجة 94%، نفّذتُه بمفردي.', en: '92.78%, first among all graduates. Graduation project Junto: 94%, built on my own.' } },
    { d: { ar: '7 مايو 2026', en: '7 May 2026' }, t: { ar: 'شهادة تقدير للتفوق الأكاديمي', en: 'Certificate of Appreciation for Academic Excellence' }, x: { ar: 'من مجلس كلية تقنية المعلومات.', en: 'From the Faculty of Information Technology Council.' } },
    { d: { ar: 'يونيو 2026', en: 'June 2026' }, t: { ar: 'خطابا توصية للدراسات العليا', en: 'Recommendation letters for postgraduate study' }, x: { ar: 'من رئيس قسم هندسة البرمجيات وأحد ممتحني مشروع التخرج.', en: 'From the Head of the Software Engineering Department and a graduation-project examiner.' } },
    { d: { ar: 'سبتمبر 2026', en: 'Sep 2026' }, t: { ar: 'بداية العمل في Pioneers of Science School', en: 'Started at Pioneers of Science School' }, x: { ar: 'مدخلة بيانات ومسؤولة النظام بأجر، وتطوير نظام المدرسة تطوعاً.', en: 'Paid data entry and system administration, plus volunteer development of the school system.' } }
  ];

  /* ------------------------------------------------------------------
     Education, recognition and experience (flip cards)
     ------------------------------------------------------------------ */
  var MARKS = [['Introduction to Databases', 100], ['Advanced Databases', 100], ['Information Security', 98], ['Algorithms (Design & Analysis)', 96], ['Operating Systems', 96], ['Numerical Analysis', 96], ['Data Structures', 93]];

  var EDU = [
    {
      id: 'bsc', kicker: { ar: 'فصل خريف 2025', en: 'Fall 2025' },
      title: { ar: 'بكالوريوس تقنية المعلومات، تخصص هندسة البرمجيات', en: 'Bachelor’s in Information Technology, Software Engineering' },
      sub: { ar: 'جامعة طرابلس · ممتاز 92.78%', en: 'University of Tripoli · Excellent, 92.78%' },
      back: {
        ar: '<p>الأولى بين جميع خريجي فصل خريف 2025. مشروع التخرج Junto بدرجة 94% (فردي).</p><div class="marks" dir="ltr">%MARKS%</div>',
        en: '<p>First among all graduates of the Fall 2025 semester. Graduation project Junto: 94% (individual).</p><div class="marks" dir="ltr">%MARKS%</div>'
      }
    },
    {
      id: 'cert', kicker: { ar: '7 مايو 2026', en: '7 May 2026' },
      title: { ar: 'شهادة تقدير للتفوق الأكاديمي', en: 'Certificate of Appreciation for Academic Excellence' },
      sub: { ar: 'كلية تقنية المعلومات، جامعة طرابلس', en: 'Faculty of Information Technology, University of Tripoli' },
      back: {
        ar: '<p>منحها مجلس الكلية للتميز الأكاديمي في الفصل الدراسي خريف للعام 2025/2026، وسُلّمت في حفل تكريم بحضور رئيس الجامعة وعميد الكلية.</p>',
        en: '<p>Awarded by the Faculty Council for outstanding academic achievement in the Fall semester of the 2025/2026 academic year, presented at a recognition ceremony with the University President and the Dean.</p>'
      }
    },
    {
      id: 'rec', kicker: { ar: 'يونيو 2026', en: 'June 2026' },
      title: { ar: 'خطابا توصية من أعضاء هيئة التدريس', en: 'Two faculty recommendation letters' },
      sub: { ar: 'للقبول في الدراسات العليا', en: 'For postgraduate admission' },
      back: {
        ar: '<p>صادران عن رئيس قسم هندسة البرمجيات وأحد ممتحني مشروع التخرج، ويوصيان بقبولي في الدراسات العليا. ويوصي أحدهما أيضاً بتعييني معيدة.</p><p class="note">الخطابان متاحان عند الطلب.</p>',
        en: '<p>From the Head of the Software Engineering Department and a graduation-project examiner, both recommending postgraduate admission. One also recommends a Teaching Assistant appointment.</p><p class="note">Both letters are available on request.</p>'
      }
    },
    {
      id: 'dip', kicker: { ar: '2021 – 2023', en: '2021 – 2023' },
      title: { ar: 'دبلوم عالٍ في الصيدلة', en: 'Higher Diploma in Pharmacy' },
      sub: { ar: 'المعهد العالي للعلوم الطبية، تاجوراء · المعدل 86%', en: 'Tripoli Higher Institute of Medical Sciences, Tajoura · GPA 86%' },
      back: {
        ar: '<p>برنامج مدته سنتان.</p><p>بحث أكاديمي: «تأثيرات ليفوثيروكسين على كثافة العظام» (2023، غير منشور).</p>',
        en: '<p>Two-year programme.</p><p>Academic research: “The Effects of Levothyroxine on Bone Density” (2023, unpublished).</p>'
      }
    }
  ];

  var EXP = [
    {
      id: 'job', kicker: { ar: 'سبتمبر 2026 – الآن', en: 'Sep 2026 – now' },
      title: { ar: 'مدخلة بيانات ومسؤولة النظام', en: 'Data Entry Operator & System Administrator' },
      sub: { ar: 'Pioneers of Science School، ليبيا · وظيفة مدفوعة', en: 'Pioneers of Science School, Libya · paid role' },
      back: {
        ar: '<ul><li>إدخال بيانات الطلاب في منظومة الشاطئ التابعة لوزارة التعليم.</li><li>دعم تقني للمدرسة (276 طالباً و96 موظفاً).</li><li>إعداد التقارير والمراسلات الرسمية والمستندات المنسّقة ومواد التصميم.</li><li>اقتراح تحسينات على إدارة المدرسة وتنفيذها.</li></ul>',
        en: '<ul><li>Entering student data into the Ministry of Education’s Al-Shati system.</li><li>IT troubleshooting for the school (276 students, 96 employees).</li><li>Preparing reports, official correspondence, formatted documents and design materials.</li><li>Proposing improvements to school management and implementing them.</li></ul>'
      }
    },
    {
      id: 'vol', kicker: { ar: 'مستمر', en: 'Ongoing' },
      title: { ar: 'مطوّرة برمجيات متطوعة', en: 'Volunteer Software Developer' },
      sub: { ar: 'المدرسة نفسها · بلا أجر وخارج مهام الوظيفة', en: 'Same school · unpaid, outside the paid duties' },
      back: {
        ar: '<ul><li>صمّمتُ وبنيتُ ونشرتُ ووثّقتُ نظام الإدارة المدرسية وبوابة الطلاب بمفردي.</li><li>درّبتُ الموظفين والطلاب على الاستخدام.</li><li>الحزمة: Supabase وCloudflare Pages وJavaScript.</li></ul>',
        en: '<ul><li>Independently designed, built, deployed and documented the school management system and the student portal.</li><li>Trained staff and students to use them.</li><li>Stack: Supabase, Cloudflare Pages, JavaScript.</li></ul>'
      }
    }
  ];

  /* Skill levels are my own ratings: A independent real project, B real project with AI help or in a team, C course/tutorial, D basic. */
  var SKILLS = [
    { g: { ar: 'اللغات', en: 'Languages' }, items: [['Python', 'A/B'], ['JavaScript', 'A/B'], ['TypeScript', 'A'], ['PHP', 'A/B'], ['Java', 'B'], ['SQL', 'A'], ['HTML5', 'A/B'], ['CSS3', 'A/B'], ['C', 'C'], ['C#', 'C'], ['C++ (Unity)', 'C'], ['JavaFX', 'C']] },
    { g: { ar: 'الخلفية والويب', en: 'Backend & web' }, items: [['Node.js', 'A/B'], ['Express.js', 'A/B'], ['FastAPI', 'A/B'], ['Laravel', 'B'], ['Socket.io', 'A'], ['JWT', 'A'], ['EJS', 'A/B'], ['Chart.js', 'A/B'], ['Context API', 'A/B'], ['React', 'D'], ['Bootstrap', 'D'], ['Flask', 'D'], ['Django', 'D']] },
    { g: { ar: 'قواعد البيانات والبيانات', en: 'Databases & data' }, items: [['PostgreSQL', 'A/B'], ['Supabase', 'A/B'], ['MySQL', 'B'], ['SQL Server', 'B'], ['NumPy', 'A/B'], ['pandas', 'A/B'], ['TensorFlow', 'C'], ['scikit-learn', 'C'], ['Oracle', 'D'], ['Neo4j', 'D']] },
    { g: { ar: 'السحابة والأدوات', en: 'Cloud & tools' }, items: [['Git / GitHub', 'A/B'], ['GitHub Actions', 'A/B'], ['Cloudflare', 'A/B'], ['Vercel', 'A'], ['Render', 'B'], ['AWS', 'A/B'], ['Azure', 'B'], ['Google Cloud', 'B'], ['ESLint', 'A/B'], ['Figma', 'A/B'], ['FFmpeg', 'B'], ['Jira', 'C'], ['Apache', 'C'], ['GitLab', 'D']] }
  ];

  var EVIDENCE = [
    { t: { ar: 'كشف الدرجات الرسمي', en: 'Official transcript' }, pub: false },
    { t: { ar: 'شهادة البكالوريوس', en: 'Bachelor’s degree certificate' }, pub: false },
    { t: { ar: 'شهادة التقدير، 7 مايو 2026', en: 'Certificate of Appreciation, 7 May 2026' }, pub: false },
    { t: { ar: 'خطابا التوصية من هيئة التدريس', en: 'Two faculty recommendation letters' }, pub: false },
    { t: { ar: 'مخططات Junto: ERD وحالات الاستخدام والنشاط والتسلسل', en: 'Junto ERD, use-case, activity and sequence diagrams' }, pub: true },
    { t: { ar: 'فيديوهات عرض Junto', en: 'Junto demo videos' }, pub: true }
  ];

  var RING = { ai: 0, data: 1, platform: 2, tool: 3 };
  var CATS = ['all', 'ai', 'data', 'platform', 'tool'];
  var LVLS = ['all', 'A', 'B', 'C', 'D'];

  /* ------------------------------------------------------------------
     State and small helpers
     ------------------------------------------------------------------ */
  var state = { lang: 'ar', cat: 'all', tech: null, lvl: 'all' };

  function t(key) { return S[state.lang][key]; }
  function L(o) { return o[state.lang]; }
  function fill(str, map) { return str.replace(/\{(\w+)\}/g, function (_, k) { return map[k]; }); }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function dots(p) { return p.cats.map(function (c) { return '<i class="dot dot-' + c + '"></i>'; }).join(''); }

  function matches(p) {
    if (state.cat !== 'all' && p.cats.indexOf(state.cat) === -1) return false;
    if (state.tech && p.stack.indexOf(state.tech) === -1) return false;
    return true;
  }

  /* ------------------------------------------------------------------
     Rendering
     ------------------------------------------------------------------ */
  function flipCard(id, front, back, label, delay) {
    return '<article class="flip rv" id="c-' + id + '" data-id="' + id + '" style="--d:' + (delay || 0) + 's">' +
      '<div class="inner">' +
      '<div class="front">' + front + '</div>' +
      '<div class="back"><div class="back-top"><span class="b-title">' + label + '</span>' +
      '<button class="flip-btn" type="button" data-flip="' + id + '">' + t('back') + '</button></div>' + back + '</div>' +
      '</div></article>';
  }

  function renderStatic() {
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $('#about-p').textContent = t('about_p');
    $('#brand').setAttribute('aria-label', t('brand_label'));
    $('#orbit').setAttribute('aria-label', t('orbit_aria'));
    $('#filters').setAttribute('aria-label', t('filter_aria'));
    $('#lang').textContent = t('lang_btn');
    $('#lang').setAttribute('aria-label', t('lang_aria'));
    $('#theme').setAttribute('aria-label', t('theme_aria'));
    $('#facts').innerHTML = ['uni', 'field', 'grad', 'rank', 'focus', 'lang', 'goal'].map(function (k) {
      return '<div><dt>' + t('f_' + k) + '</dt><dd>' + t('v_' + k) + '</dd></div>';
    }).join('');
    $('#archive-list').innerHTML = ARCHIVE.map(function (a) {
      return '<li><strong dir="ltr">' + a.name + '</strong><span>' + a[state.lang] + '</span></li>';
    }).join('');
    $('#ev-list').innerHTML = EVIDENCE.map(function (e) {
      return '<li class="' + (e.pub ? 'pub' : '') + '"><span>' + L(e.t) + '</span><em>' + t(e.pub ? 'ev_pub' : 'ev_req') + '</em></li>';
    }).join('');
  }

  function renderFilters() {
    $('#filters').innerHTML = CATS.map(function (c) {
      var dot = c === 'all' ? '' : '<i class="dot dot-' + c + '"></i>';
      return '<button class="chip" type="button" data-cat="' + c + '" aria-pressed="' + (state.cat === c) + '">' + dot + '<span>' + t('cat_' + c) + '</span></button>';
    }).join('');
  }

  function projectCard(p, i) {
    var badges = p.badges.map(function (b) { return '<span class="badge b-' + b + '">' + t('b_' + b) + '</span>'; }).join('');
    var tags = p.stack.slice(0, 4).map(function (s) { return '<span class="tag">' + s + '</span>'; }).join('');
    var fm = p.metrics && p.feat ? '<div class="f-metrics">' + p.metrics.map(function (m) { return '<div class="metric"><b>' + m[0] + '</b><span>' + L(m[1]) + '</span></div>'; }).join('') + '</div>' : '';
    var front =
      '<div class="f-top"><span class="row-dots" aria-hidden="true">' + dots(p) + '</span></div>' +
      '<h3 class="f-name" dir="ltr">' + p.name + '</h3>' +
      '<p class="f-sub">' + L(p.type) + '</p>' +
      '<p class="f-sum">' + firstSentence(L(p.desc)) + '</p>' + fm +
      '<div class="f-foot">' + (badges ? '<div class="badges">' + badges + '</div>' : '') +
      '<div class="tags" dir="ltr">' + tags + '</div>' +
      '<span class="hint">' + t('flip_hint') + '</span></div>';

    var pts = p.points ? '<ul>' + L(p.points).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' : '';
    var metrics = p.metrics ? '<div class="metrics">' + p.metrics.map(function (m) { return '<div class="metric"><b>' + m[0] + '</b><span>' + L(m[1]) + '</span></div>'; }).join('') + '</div>' : '';
    var note = p.note ? '<p class="note">' + L(p.note) + '</p>' : '';
    var links = p.links ? '<div class="b-links">' + p.links.map(function (x) { return '<a href="' + x.u + '" target="_blank" rel="noopener">' + L(x.l) + ' ↗</a>'; }).join('') + '</div>' : '';
    var back =
      '<div class="b-scroll"><p>' + L(p.desc) + '</p>' + metrics + pts + note +
      '<div class="tags" dir="ltr">' + p.stack.map(function (s) { return '<span class="tag">' + s + '</span>'; }).join('') + '</div></div>' + links;
    return flipCard(p.id, front, back, '<bdi dir="ltr">' + p.name + '</bdi>', Math.min(i, 5) * 0.06);
  }

  function firstSentence(s) { var m = s.match(/^.*?[.。](?:\s|$)/); return m ? m[0].trim() : s; }

  function renderProjects() {
    var list = PROJECTS.filter(matches);
    var feat = list.filter(function (p) { return p.feat; }), more = list.filter(function (p) { return !p.feat; });
    $('#work-count').textContent = fill(t('work_of'), { n: list.length, t: PROJECTS.length });
    $('#project-feat').innerHTML = feat.map(projectCard).join('');
    $('#project-list').innerHTML = more.map(projectCard).join('');
    $('#grp-feat').hidden = !feat.length; $('#grp-more').hidden = !more.length;
    var clear = $('#clear');
    clear.hidden = !state.tech;
    if (state.tech) clear.textContent = '✕ ' + fill(t('clear_tech'), { x: state.tech });
    watchReveal();
  }

  function infoCard(c, i) {
    var marks = MARKS.map(function (m) { return '<div><span>' + m[0] + '</span><b>' + m[1] + '</b></div>'; }).join('');
    var front =
      '<div class="f-top"><span class="f-kicker">' + L(c.kicker) + '</span></div>' +
      '<h3 class="f-name">' + L(c.title) + '</h3>' +
      '<p class="f-sub">' + L(c.sub) + '</p>' +
      '<p class="f-sum">' + teaser(L(c.back)) + '</p>' +
      '<div class="f-foot"><span class="hint">' + t('flip_hint') + '</span></div>';
    var back = '<div class="b-scroll">' + L(c.back).replace('%MARKS%', marks) + '</div>';
    return flipCard(c.id, front, back, L(c.title), Math.min(i, 4) * 0.07);
  }
  function teaser(html) {
    var m = html.match(/<(?:p|li)>(.*?)<\/(?:p|li)>/);
    return m ? m[1].replace(/<[^>]+>/g, '') : '';
  }
  function renderJourney() {
    $('#journey').innerHTML = JOURNEY.map(function (j, i) {
      return '<li class="j rv" style="--d:' + (i % 3) * 0.06 + 's"><div class="j-date">' + L(j.d) + '</div><div class="j-title">' + L(j.t) + '</div><p class="j-text">' + L(j.x) + '</p></li>';
    }).join('');
    $('#cvlist').innerHTML = CVS.map(function (c) { return '<li><a href="' + c.f + '" download>' + L(c) + ' · PDF</a></li>'; }).join('');
  }
  function renderBackground() {
    renderJourney();
    $('#edu-list').innerHTML = EDU.map(infoCard).join('');
    $('#exp-list').innerHTML = EXP.map(infoCard).join('');
    watchReveal();
  }

  function renderSkills() {
    $('#lvl-filters').innerHTML = LVLS.map(function (l) {
      var label = l === 'all' ? t('lvl_all') : l;
      return '<button class="chip" type="button" data-lvl="' + l + '" aria-pressed="' + (state.lvl === l) + '">' + label + '</button>';
    }).join('');
    $('#lvl-legend').innerHTML = ['A', 'B', 'C', 'D'].map(function (l) {
      return '<li><span class="lv">' + l + '</span><span>' + t('lv_' + l) + '</span></li>';
    }).join('');
    $('#skill-groups').innerHTML = SKILLS.map(function (g, i) {
      return '<div class="sk rv" style="--d:' + i * 0.07 + 's"><h3>' + L(g.g) + '</h3><div class="sk-chips">' + g.items.map(function (it) {
        var dim = state.lvl !== 'all' && it[1].indexOf(state.lvl) === -1;
        return '<span class="sk-chip' + (dim ? ' dim' : '') + '">' + it[0] + '<i>' + it[1] + '</i></span>';
      }).join('') + '</div></div>';
    }).join('');
    watchReveal();
  }

  function renderStack() {
    var counts = {};
    PROJECTS.forEach(function (p) { p.stack.forEach(function (s) { counts[s] = (counts[s] || 0) + 1; }); });
    var names = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b); });
    $('#stack-chips').innerHTML = names.map(function (n) {
      return '<button class="chip" type="button" dir="ltr" data-tech="' + n + '" aria-pressed="' + (state.tech === n) + '"><span>' + n + '</span><b>' + counts[n] + '</b></button>';
    }).join('');
  }

  function renderContact() {
    var out = [];
    if (CONTACT.github) out.push('<a class="big-link" dir="ltr" href="' + CONTACT.github + '" target="_blank" rel="noopener">' + CONTACT.github.replace(/^https?:\/\//, '') + '</a>');
    var small = [];
    if (CONTACT.linkedin) small.push('<a class="chip" dir="ltr" href="' + CONTACT.linkedin + '" target="_blank" rel="noopener">LinkedIn ↗</a>');
    if (CONTACT.youtube) small.push('<a class="chip" dir="ltr" href="' + CONTACT.youtube + '" target="_blank" rel="noopener">YouTube ↗</a>');
    if (small.length) out.push('<div class="filters">' + small.join('') + '</div>');
    if (CONTACT.email) out.push('<div class="mail-row"><span class="mail" id="mail" dir="ltr">' + CONTACT.email + '</span><button class="chip" id="copy" type="button">' + t('copy') + '</button><span class="copied" id="copied" role="status"></span></div>');
    $('#contact-links').innerHTML = out.join('');
    if (CONTACT.github) $('#cta-github').setAttribute('href', CONTACT.github);
  }

  function renderAll() {
    var root = document.documentElement;
    root.lang = state.lang;
    root.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    renderStatic(); renderFilters(); renderProjects(); renderBackground(); renderSkills(); renderStack(); renderContact();
    orbit.hudReset();
  }

  /* ------------------------------------------------------------------
     Scroll reveal, counters, progress bar, active nav
     ------------------------------------------------------------------ */
  var io = null;
  function watchReveal() {
    if (!('IntersectionObserver' in window) || reduceMotion) { $$('.rv').forEach(function (e) { e.classList.add('in'); }); return; }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.classList.add('in');
          io.unobserve(en.target);
          $$('.num', en.target).forEach(countUp);
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    }
    $$('.rv:not(.in)').forEach(function (e) { io.observe(e); });
  }

  function countUp(el) {
    if (reduceMotion || el.__done) return;
    el.__done = true;
    var to = parseFloat(el.getAttribute('data-to')), dec = parseInt(el.getAttribute('data-dec') || '0', 10), suf = el.getAttribute('data-suf') || '';
    var t0 = null, dur = 1400;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var k = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - k, 3);
      el.textContent = (to * e).toFixed(dec) + suf;
      if (k < 1) requestAnimationFrame(step); else el.textContent = to.toFixed(dec) + suf;
    }
    requestAnimationFrame(step);
  }

  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    h.style.setProperty('--p', max > 0 ? Math.min(h.scrollTop / max, 1).toFixed(4) : 0);
    var jr = $('#journey');
    if (jr) {
      var r = jr.getBoundingClientRect();
      var f = (window.innerHeight * 0.7 - r.top) / r.height;
      jr.style.setProperty('--jp', Math.max(0, Math.min(f, 1)).toFixed(3));
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  function watchNav() {
    if (!('IntersectionObserver' in window)) return;
    var links = $$('#nav a');
    var secs = links.map(function (a) { return $(a.getAttribute('href')); }).filter(Boolean);
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + en.target.id)); });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    secs.forEach(function (s) { nio.observe(s); });
  }

  /* ------------------------------------------------------------------
     Interactions
     ------------------------------------------------------------------ */
  function setFlip(card, on) { if (card) card.classList.toggle('is-flipped', on); }

  function openProject(id) {
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    if (!matches(p)) { state.cat = 'all'; state.tech = null; renderFilters(); renderStack(); renderProjects(); }
    var card = $('#c-' + id);
    if (!card) return;
    card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    card.classList.add('in');
    setTimeout(function () {
      setFlip(card, true);
      card.classList.remove('flash'); void card.offsetWidth; card.classList.add('flash');
    }, reduceMotion ? 0 : 450);
  }

  var canHover = window.matchMedia('(hover: hover)').matches;
  document.addEventListener('click', function (e) {
    var fb = e.target.closest('[data-flip]');
    if (fb) { e.stopPropagation(); var c = $('#c-' + fb.getAttribute('data-flip')); setFlip(c, !c.classList.contains('is-flipped')); return; }
    var card = e.target.closest('.flip');
    if (card && !e.target.closest('a') && !canHover) { setFlip(card, !card.classList.contains('is-flipped')); return; }
    var cat = e.target.closest('[data-cat]');
    if (cat) { state.cat = cat.getAttribute('data-cat'); renderFilters(); renderProjects(); return; }
    var lvl = e.target.closest('[data-lvl]');
    if (lvl) { state.lvl = lvl.getAttribute('data-lvl'); renderSkills(); return; }
    var tech = e.target.closest('[data-tech]');
    if (tech) {
      var n = tech.getAttribute('data-tech');
      state.tech = state.tech === n ? null : n;
      renderStack(); renderProjects();
      if (state.tech) $('#work').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      return;
    }
    if (e.target.closest('#clear')) { state.tech = null; renderStack(); renderProjects(); return; }
    if (e.target.closest('#copy')) copyMail();
  });

  /* Card glow follows the pointer */
  document.addEventListener('pointermove', function (e) {
    var f = e.target.closest ? e.target.closest('.flip') : null;
    if (!f) return;
    var r = f.getBoundingClientRect();
    f.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    f.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  function copyMail() {
    var note = $('#copied');
    function done(msg) { note.textContent = msg; setTimeout(function () { note.textContent = ''; }, 2600); }
    function fallback() {
      var r = document.createRange(); r.selectNodeContents($('#mail'));
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); done(t('copy_fail'));
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(CONTACT.email).then(function () { done(t('copied')); }, fallback);
    } else fallback();
  }

  $('#lang').addEventListener('click', function () {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    store('lang', state.lang);
    renderAll();
  });

  function effectiveTheme() {
    var set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  $('#theme').addEventListener('click', function () {
    var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store('theme', next);
    orbit.recolor();
  });
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () { orbit.recolor(); });

  /* Tripoli clock */
  var fmt;
  try { fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Tripoli', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); } catch (e) { fmt = null; }
  function tick() { if (fmt) $('#clock').textContent = fmt.format(new Date()); }

  /* ------------------------------------------------------------------
     Orbit scene (canvas). Each project is a body on its category's orbit.
     ------------------------------------------------------------------ */
  var orbit = (function () {
    var cv = $('#orbit');
    var ctx = cv.getContext('2d');
    var W = 0, H = 0, hover = -1, running = false, visible = true, last = 0, time = 0, col = {};
    var TILT = -0.3, FLAT = 0.42;
    var RADII = [0.3, 0.5, 0.7, 0.9];

    var nodes = [];
    var perRing = {};
    PROJECTS.forEach(function (p) { var r = RING[p.cats[0]]; perRing[r] = (perRing[r] || 0) + 1; });
    var seen = {};
    PROJECTS.forEach(function (p) {
      var r = RING[p.cats[0]];
      seen[r] = (seen[r] || 0);
      nodes.push({ id: p.id, name: p.name, cat: p.cats[0], ring: r, rad: RADII[r],
        phase: (seen[r] / perRing[r]) * Math.PI * 2 + r * 0.9, speed: 0.2 / (1 + r * 0.75) });
      seen[r]++;
    });

    var stars = [];
    for (var i = 0; i < 90; i++) {
      var a = Math.sin(i * 12.9898) * 43758.5453, b = Math.sin(i * 78.233) * 12345.6789, c = Math.sin(i * 39.346) * 9876.543;
      stars.push({ x: a - Math.floor(a), y: b - Math.floor(b), r: 0.4 + (c - Math.floor(c)) * 1.1, a: 0.2 + (c - Math.floor(c)) * 0.5 });
    }

    function css(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
    function recolor() {
      col = { ion: css('--ion'), sun: css('--sun'), fg: css('--fg'), muted: css('--muted'), line: css('--line-2'), bg: css('--bg') };
      draw();
    }

    function resize() {
      var r = cv.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      if (!W || !H) return;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function pos(n) {
      var a = n.phase + time * n.speed;
      var R = n.rad * Math.min(W, H) / 2;
      var x = Math.cos(a) * R, y = Math.sin(a) * R * FLAT;
      var c = Math.cos(TILT), s = Math.sin(TILT);
      return { x: W / 2 + x * c - y * s, y: H / 2 + x * s + y * c, depth: Math.sin(a) };
    }

    function nodeColor(n) { return n.cat === 'ai' ? col.ion : n.cat === 'data' ? col.sun : n.cat === 'platform' ? col.fg : col.ion; }

    function draw() {
      if (!W || !H || !col.ion) return;
      ctx.clearRect(0, 0, W, H);
      var half = Math.min(W, H) / 2;

      ctx.fillStyle = col.fg;
      stars.forEach(function (s) { ctx.globalAlpha = s.a; ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, 6.2832); ctx.fill(); });
      ctx.globalAlpha = 1;

      ctx.strokeStyle = col.line; ctx.lineWidth = 1;
      RADII.forEach(function (rad) {
        ctx.save(); ctx.translate(W / 2, H / 2); ctx.rotate(TILT);
        ctx.beginPath(); ctx.ellipse(0, 0, rad * half, rad * half * FLAT, 0, 0, 6.2832); ctx.stroke();
        ctx.restore();
      });

      var g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, half * 0.34);
      g.addColorStop(0, col.sun); g.addColorStop(0.18, col.sun); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalAlpha = 0.5; ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(W / 2, H / 2, half * 0.34, 0, 6.2832); ctx.fill();
      ctx.globalAlpha = 1; ctx.fillStyle = col.sun;
      ctx.beginPath(); ctx.arc(W / 2, H / 2, Math.max(7, half * 0.045), 0, 6.2832); ctx.fill();

      var placed = nodes.map(function (n, idx) { var p = pos(n); p.n = n; p.idx = idx; return p; })
        .sort(function (a, b) { return a.depth - b.depth; });
      placed.forEach(function (p) {
        var hot = p.idx === hover;
        var r = 5 + (p.depth + 1) * 1.8 + (hot ? 3 : 0);
        var color = nodeColor(p.n);
        ctx.globalAlpha = hot ? 1 : 0.62 + 0.38 * (p.depth + 1) / 2;
        if (p.n.cat === 'tool') {
          ctx.strokeStyle = color; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 6.2832); ctx.stroke();
        } else {
          ctx.fillStyle = color;
          ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 6.2832); ctx.fill();
        }
        if (hot) {
          ctx.strokeStyle = col.fg; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.arc(p.x, p.y, r + 6, 0, 6.2832); ctx.stroke();
          ctx.font = '500 12px "JetBrains Mono", monospace';
          var right = p.x < W * 0.58;
          ctx.textAlign = right ? 'left' : 'right';
          ctx.textBaseline = 'middle';
          var tx = p.x + (right ? 16 : -16);
          ctx.lineWidth = 4; ctx.strokeStyle = col.bg; ctx.lineJoin = 'round';
          ctx.strokeText(p.n.name, tx, p.y); ctx.fillStyle = col.fg; ctx.fillText(p.n.name, tx, p.y);
        }
        ctx.globalAlpha = 1;
      });
    }

    function frame(now) {
      if (!running) return;
      var dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
      last = now; time += dt;
      draw();
      requestAnimationFrame(frame);
    }
    function start() {
      if (reduceMotion || running || !visible || document.hidden) return;
      running = true; last = 0; requestAnimationFrame(frame);
    }
    function stop() { running = false; }

    function hit(e) {
      var r = cv.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top, best = -1, bd = 24;
      nodes.forEach(function (n, i) { var p = pos(n); var d = Math.hypot(p.x - x, p.y - y); if (d < bd) { bd = d; best = i; } });
      return best;
    }
    function setHover(i) {
      if (i === hover) return;
      hover = i;
      cv.classList.toggle('is-hot', i >= 0);
      $('#orbit-name').textContent = i >= 0 ? nodes[i].name : t('orbit_hint');
      if (reduceMotion || !running) draw();
    }

    cv.addEventListener('pointermove', function (e) { setHover(hit(e)); });
    cv.addEventListener('pointerdown', function (e) { setHover(hit(e)); });
    cv.addEventListener('pointerleave', function () { setHover(-1); });
    cv.addEventListener('click', function (e) { var i = hit(e); if (i >= 0) openProject(nodes[i].id); });

    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(cv); else window.addEventListener('resize', resize);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; visible ? start() : stop(); }).observe(cv);
    }
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });

    return {
      recolor: recolor,
      hudReset: function () { hover = -1; $('#orbit-name').textContent = t('orbit_hint'); },
      init: function () { recolor(); resize(); start(); }
    };
  })();

  /* ------------------------------------------------------------------
     Start
     ------------------------------------------------------------------ */
  var savedLang = load('lang');
  if (savedLang === 'en' || savedLang === 'ar') state.lang = savedLang;
  var savedTheme = load('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') document.documentElement.setAttribute('data-theme', savedTheme);

  renderAll();
  watchReveal(); watchNav(); onScroll();
  tick(); setInterval(tick, 1000);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { orbit.init(); }); else orbit.init();
})();
