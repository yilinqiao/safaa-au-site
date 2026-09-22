export type Locale = 'en' | 'zh';

export type EventItem = {
  slug: string;
  date: string;
  dateZh: string;
  city: string;
  cityZh: string;
  type: string;
  typeZh: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  image: string;
};

export const events: EventItem[] = [
  { slug: 'linkedin-profile-reset', date: '12 Jan 2025', dateZh: '2025年1月12日', city: 'Online', cityZh: '线上', type: 'Career', typeZh: '职场', title: 'LinkedIn Profile Reset', titleZh: 'LinkedIn 个人主页爆改指南', summary: 'Practical career coaching for a profile that sounds like you and opens more conversations.', summaryZh: '从 headline 到个人品牌，用实用方法让你的主页更有表达力。', image: '/images/career-talk.jpg' },
  { slug: 'spring-hiking', date: '25 Oct 2025', dateZh: '2025年10月25日', city: 'Sydney', cityZh: '悉尼', type: 'Wellbeing', typeZh: '身心健康', title: 'Spring Hiking & Meditation', titleZh: '春日徒步与冥想会', summary: 'A gentle outdoor reset for women who want a little more breathing room.', summaryZh: '给自己一点呼吸的空间，在自然里重新连接身心。', image: '/images/spring-hike.jpg' },
  { slug: 'pilates-social', date: '28 Sep 2025', dateZh: '2025年9月28日', city: 'Melbourne', cityZh: '墨尔本', type: 'Movement', typeZh: '运动', title: 'Pilates & Community Morning', titleZh: '普拉提与社区早晨', summary: 'Move, meet and make new connections with our Melbourne volunteers.', summaryZh: '和墨尔本志愿者一起运动、认识新朋友。', image: '/images/pilates.png' },
  { slug: 'ai-for-workshop', date: '16 Aug 2025', dateZh: '2025年8月16日', city: 'Sydney', cityZh: '悉尼', type: 'Workshop', typeZh: '工作坊', title: 'AI for Work & Life', titleZh: 'AI 让工作与生活更进一步', summary: 'A practical workshop for using AI with more confidence and intention.', summaryZh: '一场注重实践的工作坊，帮助你更自信、有意识地使用 AI。', image: '/images/vision-mission.png' },
  { slug: 'perth-coffee-chat', date: '2 Aug 2025', dateZh: '2025年8月2日', city: 'Perth', cityZh: '珀斯', type: 'Community', typeZh: '社群', title: 'Perth Coffee Chat', titleZh: '珀斯咖啡聊天局', summary: 'A relaxed table for stories, questions and kind introductions.', summaryZh: '在轻松的桌边分享故事、问题和真诚的自我介绍。', image: '/images/career-talk.jpg' },
  { slug: 'brisbane-newcomers', date: '19 Jul 2025', dateZh: '2025年7月19日', city: 'Brisbane', cityZh: '布里斯班', type: 'Community', typeZh: '社群', title: 'Brisbane Newcomers Meetup', titleZh: '布里斯班新朋友见面会', summary: 'A warm welcome for women building a new chapter in Queensland.', summaryZh: '为正在昆士兰开启新篇章的女性准备的友好见面会。', image: '/images/finance-talk.jpg' },
  { slug: 'adelaide-career-stories', date: '21 Jun 2025', dateZh: '2025年6月21日', city: 'Adelaide', cityZh: '阿德莱德', type: 'Career', typeZh: '职场', title: 'Career Stories, Adelaide', titleZh: '阿德莱德职场故事会', summary: 'Real stories about changing direction, finding mentors and staying curious.', summaryZh: '聊聊转向、寻找导师，以及保持好奇心的真实故事。', image: '/images/career-talk.jpg' },
  { slug: 'personal-branding', date: '7 Jun 2025', dateZh: '2025年6月7日', city: 'Online', cityZh: '线上', type: 'Workshop', typeZh: '工作坊', title: 'Personal Branding Without the Noise', titleZh: '不喧哗的个人品牌', summary: 'A thoughtful session on showing your strengths without performing.', summaryZh: '不表演、不喧哗，也能清晰表达自己的优势。', image: '/images/audience.png' },
  { slug: 'melbourne-dentistry', date: '11 Dec 2024', dateZh: '2024年12月11日', city: 'Melbourne', cityZh: '墨尔本', type: 'Learning', typeZh: '学习', title: 'A Healthier Smile', titleZh: '呵护牙齿健康：你的微笑指南', summary: 'Bilingual health education with Dr Jenny Liu from Happy Dentistry.', summaryZh: '与 Happy Dentistry Jenny 医师一起了解口腔护理与健康。', image: '/images/pilates.png' },
  { slug: 'women-in-finance', date: '9 Nov 2024', dateZh: '2024年11月9日', city: 'Sydney', cityZh: '悉尼', type: 'Learning', typeZh: '学习', title: 'Women, Wealth & Super', titleZh: '女性、财富与养老金', summary: 'An accessible conversation about superannuation and long-term choices.', summaryZh: '用容易理解的方式聊聊养老金与长期财务选择。', image: '/images/finance-talk.jpg' },
  { slug: 'design-your-life', date: '20 Oct 2024', dateZh: '2024年10月20日', city: 'Sydney', cityZh: '悉尼', type: 'Workshop', typeZh: '工作坊', title: 'Design Your Life', titleZh: '设计你的人生', summary: 'A hands-on reflection workshop for building a life that feels well lived.', summaryZh: '通过练习和反思，设计一段更有方向感的生活。', image: '/images/vision-mission.png' },
  { slug: 'job-search-toolkit', date: '15 Sep 2024', dateZh: '2024年9月15日', city: 'Online', cityZh: '线上', type: 'Career', typeZh: '职场', title: 'Job Search Toolkit', titleZh: '求职大礼包', summary: 'A community workshop on applications, interviews and thoughtful follow-up.', summaryZh: '围绕申请、面试与跟进的实用求职工作坊。', image: '/images/career-talk.jpg' },
];

export const copy = {
  en: {
    home: 'Home', events: 'Events', about: 'About', language: '中文',
    eyebrow: 'Starleap Asian Female Association Of Australia Inc',
    heroTitle: 'Driven. Open-minded. Independent.',
    heroBody: 'A welcoming community for Asian women in Australia to learn, connect and grow — together.',
    explore: 'Explore our community', vision: 'Our vision',
    members: 'Members', cities: 'Major cities', volunteers: 'Volunteers', years: 'Years of community',
    featured: 'Featured activities', seeAll: 'View all activities →',
    missionTitle: 'A community that makes room for every chapter.',
    missionBody: 'SAFAA brings together women with different stories, industries and ambitions. Through practical workshops, open conversations and local gatherings, we make support feel tangible.',
    learn: 'Learn more about SAFAA', contact: 'Say hello',
    eventsTitle: 'Activities, across Australia.', eventsBody: 'A selection of workshops, conversations and gatherings created by our volunteers and community.',
    aboutTitle: 'A community built on curiosity and care.', aboutBody: 'We are an Australian not-for-profit community for Asian women — welcoming, practical and proudly independent.',
    mission: 'Mission', missionText: 'To create a safe, inclusive and empowering community where Asian women can connect, learn and thrive.',
    visionText: 'A future where every Asian woman feels seen, supported and confident to pursue her own path.',
    email: 'info@safaa-nonprofit.org',
  },
  zh: {
    home: '首页', events: '活动', about: '关于我们', language: 'EN',
    eyebrow: '澳洲星跃亚裔女性协会', heroTitle: '积极进取 · 开放包容 · 独立自信',
    heroBody: '一个让在澳洲的亚裔女性学习、连接、共同成长的友好社群。', explore: '认识我们的社群', vision: '我们的愿景',
    members: '社群成员', cities: '主要城市', volunteers: '志愿者', years: '社群建设年数', featured: '精选活动', seeAll: '查看全部活动 →',
    missionTitle: '让每一种人生阶段，都有被理解的空间。', missionBody: 'SAFAA 汇聚来自不同城市、行业和人生阶段的女性。我们通过实用工作坊、真诚对话和本地聚会，让支持真正发生。', learn: '了解 SAFAA', contact: '联系我们',
    eventsTitle: '来自澳洲各地的活动。', eventsBody: '由志愿者和社群共同创造的工作坊、对话与聚会精选。', aboutTitle: '一个由好奇与关怀建立的社群。', aboutBody: '我们是一个面向亚裔女性的澳洲非营利社群——友善、实用，也保持独立。', mission: '使命', missionText: '建立安全、包容、充满力量的社群，让亚裔女性连接彼此、持续学习、自在成长。', visionText: '让每一位亚裔女性都被看见、被支持，并有信心走出自己的道路。', email: 'info@safaa-nonprofit.org',
  },
} as const;

export const cities = ['All', 'Sydney', 'Melbourne', 'Adelaide', 'Perth', 'Brisbane', 'Online'];
