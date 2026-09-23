export type Locale = 'en' | 'zh';
export type City = 'Sydney' | 'Melbourne' | 'Adelaide' | 'Perth' | 'Brisbane' | 'Online';

export type EventItem = {
  slug: string;
  date: string;
  city: City;
  type: string;
  typeZh: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  imageAltZh?: string;
  sourceUrl: string;
};

export const activityBoard = 'https://iced-beryl-997.notion.site/SAFAA-54391bb39be34aa88dcefa446a4fe2f4';

// Verified against SAFAA's public activity board and local export. A cover
// image is only assigned when it belongs to the exact activity.
export const events: EventItem[] = [
  { slug: 'sydney-weekend-hike-2026', date: '2026-09-20', city: 'Sydney', type: 'Wellbeing', typeZh: '身心健康', title: 'A Weekend Walk Together', titleZh: '周末走一走，烦恼都带走', summary: 'A Sydney community walk for conversation, fresh air and a gentler pace.', summaryZh: '在悉尼相约徒步，边走边聊，给周末一点松弛感。', sourceUrl: activityBoard },
  { slug: 'sydney-tax-tips-dinner', date: '2026-09-19', city: 'Sydney', type: 'Learning', typeZh: '学习', title: 'Tax Tips over Dinner', titleZh: '晚餐中的税务交流', summary: 'An informal dinner conversation about practical tax questions.', summaryZh: '在轻松的晚餐交流中讨论实用的税务问题。', sourceUrl: activityBoard },
  { slug: 'sydney-learning-tools', date: '2026-09-13', city: 'Sydney', type: 'Learning', typeZh: '学习', title: 'Learning Never Stops', titleZh: '学无止境：学习工具分享 2.0', summary: 'Community members shared the tools and habits that help them keep learning.', summaryZh: '群友分享帮助自己持续学习的工具与习惯。', sourceUrl: activityBoard },
  { slug: 'sydney-winter-pilates-2026', date: '2026-08-23', city: 'Sydney', type: 'Movement', typeZh: '运动', title: 'Winter Pilates Together', titleZh: '冬日燃脂普拉提：中文私教包场体验', summary: 'A small-group Pilates session organised by SAFAA volunteers in Sydney.', summaryZh: '由 SAFAA 悉尼志愿者组织的中文小组普拉提体验。', featured: true, image: '/images/sydney-pilates-2026.webp', imageAlt: 'SAFAA Sydney Pilates participants standing together after class, with illustrated face stickers', imageAltZh: 'SAFAA 悉尼普拉提活动后合照，面部有卡通贴纸', sourceUrl: activityBoard },
  { slug: 'perth-finance-book-club', date: '2025-10-26', city: 'Perth', type: 'Book club', typeZh: '读书会', title: 'The Wisdom of Money', titleZh: '“搞钱”的智慧：投资理财主题读书会', summary: 'A Perth reading circle exploring money, investment and everyday choices.', summaryZh: '珀斯的主题读书会，一起讨论金钱、投资与日常选择。', sourceUrl: activityBoard },
  { slug: 'sydney-spring-hike', date: '2025-10-25', city: 'Sydney', type: 'Wellbeing', typeZh: '身心健康', title: 'Spring Hiking & Meditation', titleZh: '春日徒步冥想会', summary: 'A small-group hike and meditation session in northern Sydney.', summaryZh: '在悉尼北部的小组徒步与冥想活动。', image: '/images/hiking.png', imageAlt: 'SAFAA Spring Mindful Hiking event poster', imageAltZh: 'SAFAA 春日徒步冥想会活动海报', sourceUrl: activityBoard },
  { slug: 'perth-connect-unwine', date: '2025-10-24', city: 'Perth', type: 'Networking', typeZh: '交流', title: 'Connect, Network & “Unwine”', titleZh: '月度社交局：Connect, Network & “Unwine”', summary: 'A relaxed Friday evening for meeting and talking with other women in Perth.', summaryZh: '珀斯的周五晚间聚会，在轻松交流中认识彼此。', sourceUrl: activityBoard },
  { slug: 'perth-liveability-book-club', date: '2025-09-21', city: 'Perth', type: 'Book club', typeZh: '读书会', title: 'Who Defines Liveability?', titleZh: '谁来定义宜居性？珀斯城市建设主题读书会', summary: 'A reading-circle conversation about how cities are built and experienced.', summaryZh: '围绕城市建设与生活体验展开的珀斯读书会。', sourceUrl: activityBoard },
  { slug: 'adelaide-sing-your-story', date: '2025-09-13', city: 'Adelaide', type: 'Community', typeZh: '社群', title: 'Sing Your Story', titleZh: '唱出我人生', summary: 'An Adelaide gathering centred on music and personal stories.', summaryZh: '阿德莱德的一场音乐与个人故事相遇的聚会。', sourceUrl: activityBoard },
  { slug: 'melbourne-friendship-brunch', date: '2025-09-07', city: 'Melbourne', type: 'Community', typeZh: '社群', title: 'Friendship in Adulthood', titleZh: '成年之后的好朋友到底都是谁在交啊', summary: 'A Melbourne brunch about making and keeping meaningful friendships.', summaryZh: '在墨尔本早午餐中聊聊成年后的友谊与连接。', featured: true, image: '/images/melbourne-friendship.webp', imageAlt: 'SAFAA Melbourne Make a Friend Day event poster', imageAltZh: 'SAFAA 墨尔本 Make a Friend Day 活动海报', sourceUrl: activityBoard },
  { slug: 'adelaide-healing-yoga', date: '2025-08-23', city: 'Adelaide', type: 'Wellbeing', typeZh: '身心健康', title: 'Restorative Yoga', titleZh: '疗愈瑜伽', summary: 'An Adelaide afternoon making space for movement and rest.', summaryZh: '在阿德莱德用一个下午练习运动、休息与放松。', sourceUrl: activityBoard },
  { slug: 'brisbane-pilates-august', date: '2025-08-23', city: 'Brisbane', type: 'Movement', typeZh: '运动', title: 'Pilates Together', titleZh: '一起来学普拉提', summary: 'A small-group Pilates session organised by the Brisbane community.', summaryZh: '由布里斯班社群组织的小组普拉提活动。', featured: true, image: '/images/brisbane-pilates.webp', imageAlt: 'SAFAA Brisbane Pilates Class event poster', imageAltZh: 'SAFAA 布里斯班普拉提活动海报', sourceUrl: activityBoard },
  { slug: 'melbourne-boxing', date: '2025-08-16', city: 'Melbourne', type: 'Movement', typeZh: '运动', title: 'Small-group Boxing', titleZh: '小班精细体验拳击', summary: 'A welcoming small-group introduction to boxing in Melbourne.', summaryZh: '在墨尔本体验友好的小班拳击运动。', sourceUrl: activityBoard },
  { slug: 'brisbane-boxing', date: '2025-07-12', city: 'Brisbane', type: 'Movement', typeZh: '运动', title: 'Boxing with Brisbane', titleZh: '热辣滚烫打拳击', summary: 'A lively Brisbane boxing session bringing movement and community together.', summaryZh: '布里斯班的拳击运动局，在运动中认识新朋友。', sourceUrl: activityBoard },
  { slug: 'sydney-pilates-flow', date: '2025-06-14', city: 'Sydney', type: 'Movement', typeZh: '运动', title: 'Pilates Flow & Restore', titleZh: 'Pilates Flow & Restore 普拉提', summary: 'A small, restorative Pilates session at Macquarie Park.', summaryZh: '在 Macquarie Park 举办的小组舒缓普拉提活动。', image: '/images/pilates.png', imageAlt: 'SAFAA Pilates Flow & Restore event poster', imageAltZh: 'SAFAA Pilates Flow & Restore 活动海报', sourceUrl: activityBoard },
  { slug: 'linkedin-profile-reset', date: '2025-01-12', city: 'Online', type: 'Career', typeZh: '职场', title: 'LinkedIn Profile Reset', titleZh: 'LinkedIn Profile 爆改指南', summary: 'An online career-coaching session on presenting experience clearly on LinkedIn.', summaryZh: '线上职场讲座，学习如何更清晰地呈现 LinkedIn 个人经历。', sourceUrl: activityBoard },
  { slug: 'sydney-financial-planning', date: '2024-09-09', city: 'Sydney', type: 'Learning', typeZh: '学习', title: 'Financial & Retirement Planning', titleZh: '财务与退休规划', summary: 'A practical financial-literacy session presented with Fiducian Financial Services.', summaryZh: '与 Fiducian Financial Services 合办的实用财务知识活动。', image: '/images/finance-2024.webp', imageAlt: 'Financial and retirement planning event poster', imageAltZh: '财务与退休规划活动海报', sourceUrl: activityBoard },
];

export const featuredEvents = events.filter((event) => event.featured);
export const cities: Array<'All' | City> = ['All', 'Sydney', 'Melbourne', 'Adelaide', 'Perth', 'Brisbane', 'Online'];
export const cityZh: Record<City, string> = { Sydney: '悉尼', Melbourne: '墨尔本', Adelaide: '阿德莱德', Perth: '珀斯', Brisbane: '布里斯班', Online: '线上' };
export const formatDate = (date: string, locale: Locale) => new Intl.DateTimeFormat(locale === 'en' ? 'en-AU' : 'zh-CN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));

export const copy = {
  en: {
    home: 'Home', events: 'Activities', about: 'About', language: '中文',
    eyebrow: 'Starleap Asian Female Association Of Australia Inc',
    heroTitle: 'Driven. Open-minded. Independent.',
    heroBody: 'A volunteer-led community where Asian women across Australia meet, learn and support one another.',
    explore: 'Explore activities', vision: 'Our vision',
    members: 'Community members', cities: 'Australian cities', volunteers: 'Volunteers', network: 'Community network',
    featured: 'Selected activities', seeAll: 'See all activities',
    missionTitle: 'Achieve. Inspire. Connect.',
    missionBody: 'Through practical workshops, professional conversations and welcoming social events, SAFAA creates space for Asian women to exchange knowledge, build confidence and form genuine connections.',
    learn: 'More about SAFAA', contact: 'Get in touch',
    eventsTitle: 'Activities across Australia.', eventsBody: 'A selection from our volunteer-led workshops, conversations and gatherings. Explore the public activity board for the full archive.',
    aboutTitle: 'A community built on curiosity and care.', aboutBody: 'We are a registered Australian not-for-profit community for Asian women — welcoming, practical and proudly independent.',
    mission: 'Our mission', missionText: 'To help Asian women unlock their potential in work, entrepreneurship and personal life through practical learning, genuine connection and mutual support.',
    visionText: 'More representation, stronger confidence and broader possibilities for Asian women across Australia.',
    email: 'info@safaa-nonprofit.org',
  },
  zh: {
    home: '首页', events: '活动', about: '关于我们', language: 'EN',
    eyebrow: '澳洲星跃亚裔女性协会', heroTitle: '积极进取 · 开放包容 · 独立自信',
    heroBody: '由志愿者共同建设，让澳大利亚各地的亚裔女性相聚、学习并彼此支持。', explore: '浏览活动', vision: '我们的愿景',
    members: '社群成员', cities: '澳洲城市', volunteers: '志愿者', network: '全澳社群网络', featured: '精选活动', seeAll: '查看全部活动',
    missionTitle: '成长 · 启发 · 连接', missionBody: '通过实用工作坊、职场对话和友善的社群活动，SAFAA 让亚裔女性有空间交流知识、建立信心，形成真诚的连接。', learn: '了解 SAFAA', contact: '联系我们',
    eventsTitle: '来自澳洲各地的活动。', eventsBody: '这里精选了由志愿者组织的工作坊、对话与聚会。完整记录请查看公开活动看板。', aboutTitle: '一个由好奇与关怀建立的社群。', aboutBody: '我们是一个在澳洲注册的非营利亚裔女性社群——友善、实用，也保持独立。', mission: '我们的使命', missionText: '通过实用学习、真诚连接与互相支持，帮助亚裔女性在职场、创业和个人生活中释放潜力。', visionText: '让澳洲各地的亚裔女性拥有更多代表性、更坚定的自信和更广阔的可能。', email: 'info@safaa-nonprofit.org',
  },
} as const;
