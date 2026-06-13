export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    vi: string;
  };
  tech: string[];
  platform: 'Android' | 'iOS' | 'Both';
  image: string;
  links?: {
    appStore?: string;
    playStore?: string;
    github?: string;
    website?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'dalathasfarm',
    title: 'Dalat Hasfarm B2B',
    description: {
      en: 'A comprehensive B2B ordering system with advanced features: Order Management, Allocation system (Allocate Seller & Manager) developed with ReactJS, Livestream integration with OBS, Real-time Comments, and Push Notifications. Implemented Native handling for OTA (Over-The-Air) updates.',
      vi: 'Hệ thống đặt hàng B2B toàn diện với các tính năng nâng cao: Quản lý đơn hàng, Hệ thống phân bổ (Allocate Seller & Manager) phát triển bằng ReactJS, tích hợp Livestream với OBS, Bình luận thời gian thực và Thông báo đẩy. Triển khai xử lý Native cho các bản cập nhật OTA (Over-The-Air).',
    },
    tech: ['React Native', 'ReactJS', 'Firebase', 'TypeScript', 'Redux', 'React query', 'OBS Integration', 'Native Modules'],
    platform: 'Both',
    image: '/assets/dalathasfarm.png',
    links: {
      appStore: 'https://apps.apple.com/vn/app/dalat-hasfarm-b2b/id6446385785',
      playStore: 'https://play.google.com/store/apps/details?id=com.hasfarm.customer',
    }
  },
  {
    id: 'delivery',
    title: 'Internal Delivery',
    description: {
      en: 'Internal delivery management system using VueJs for managing trip creation forms and developing a dedicated driver application for internal logistics.',
      vi: 'Hệ thống quản lý giao nhận nội bộ sử dụng VueJs để quản lý phiếu tạo chuyến giao và phát triển ứng dụng tài xế cho hoạt động giao hàng nội bộ.',
    },
    tech: ['VueJS', 'Google Maps API', 'Node.js', 'Internal Logistics'],
    platform: 'Both',
    image: '/assets/internaldelivery.jpeg',
  },
  {
    id: 'meji',
    title: 'Meiji (Mẹ Easy)',
    description: {
      en: 'Health advice platform for pregnancy and post-pregnancy care, featuring personalized notification schedules and health statistics.',
      vi: 'Nền tảng tư vấn sức khỏe cho thời kỳ mang thai và sau sinh, có tính năng lịch thông báo cá nhân hóa và thống kê sức khỏe.',
    },
    tech: ['React Native', 'Firebase', 'Javascript'],
    platform: 'Both',
    image: '/assets/meji.png',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=vn.kbm.meiji&hl=vi',
    }
  },
  {
    id: 'novelapp',
    title: 'Mê Truyện Sáng Tác',
    description: {
      en: 'A platform for creative story writers and readers built with PHP and SQL backend with a React Native mobile application.',
      vi: 'Nền tảng dành cho những người sáng tác và đọc truyện, được xây dựng với Backend PHP/SQL và ứng dụng di động React Native.',
    },
    tech: ['React Native', 'PHP', 'SQL', 'MySQL', 'Fullstack'],
    platform: 'Both',
    image: '/assets/mtst.png',
    links: {
      website: 'https://metruyensangtac.com/',
    }
  },
  {
    id: 'superdelivery',
    title: 'Super Delivery System',
    description: {
      en: 'Complete ecosystem with Driver, Merchant, and Customer apps for Food, Courier, and Ride-hailing services. Features a robust ReactJS Admin dashboard.',
      vi: 'Hệ sinh thái hoàn chỉnh với các ứng dụng Tài xế, Đối tác và Khách hàng cho các dịch vụ Đồ ăn, Giao nhận và Gọi xe. Bao gồm bảng điều khiển Admin ReactJS mạnh mẽ.',
    },
    tech: ['React Native', 'ReactJS', 'Node.js', 'PostgreSQL', 'Google Maps', 'Socket.io', 'Fullstack'],
    platform: 'Both',
    image: '/assets/processing.png',
  },
];

export const SKILLS = {
  languages: ['Typescript', 'Javascript', 'Dart', 'Java', 'SQL'],
  platforms: ['React Native', 'Flutter', 'ReactJS', 'NextJs', 'NodeJs'],
  tools: ['Redux', 'React Query', 'Firebase', 'Google Maps', 'PostgreSQL', 'Appcenter', 'REST APIs'],
};

export const TRANSLATIONS = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      status: 'Based in Ho Chi Minh City',
      title: 'Vũ Thành Nam',
      role: 'Mobile Developer',
      exp: '5 years experience',
      desc: 'Specializing in React Native, Flutter, and Backend development. I build high-performance mobile solutions with a sharp eye for UX/UI design.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      tag: 'About Me',
      title: 'Crafting seamless mobile experiences.',
      desc1: 'I am a dedicated Mobile Developer with 5 years of expertise in React Native, complemented by experience in Flutter and Full-stack development. My goal is to provide elegant solutions to complex application problems.',
      desc2: 'With a strong foundation in UX/UI design, I ensure that every product I build not only functions perfectly but also provides an exceptional user experience.',
      desc3: 'I have a proven track record of deploying applications to both CH Play and AppStore, managing everything from initial design to OTA code push deployments.',
      yearsTag: 'Years React Native',
    },
    expertise: {
      tag: 'Expertise',
      title: 'Technical Stack',
      platforms: 'Platforms & Frameworks',
      languages: 'Languages',
      tools: 'Other Tools & Skills',
    },
    portfolio: {
      tag: 'Portfolio',
      title: 'Selected Works',
      desc: 'A selection of projects where I\'ve applied my expertise in mobile development.',
    },
    contact: {
      title: "Let's build something extraordinary.",
      desc: 'Ready to bring your mobile app ideas to life? Get in touch and let\'s start a conversation.',
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
      builtWith: 'Built with React & Framer Motion',
    },
  },
  vi: {
    nav: {
      about: 'Giới thiệu',
      skills: 'Kỹ năng',
      projects: 'Dự án',
      contact: 'Liên hệ',
    },
    hero: {
      status: 'Đống trú tại TP. Hồ Chí Minh',
      title: 'Vũ Thành Nam',
      role: 'Lập trình viên Mobile',
      exp: '5 năm kinh nghiệm',
      desc: 'Chuyên sâu về React Native, Flutter và phát triển Backend. Tôi xây dựng các giải pháp di động hiệu suất cao với con mắt tinh tường về thiết kế UX/UI.',
      viewProjects: 'Xem dự án',
      contactMe: 'Liên hệ với tôi',
    },
    about: {
      tag: 'Về tôi',
      title: 'Tạo ra những trải nghiệm di động liền mạch.',
      desc1: 'Tôi là Lập trình viên Mobile tận tâm với 5 năm chuyên môn về React Native, bổ sung bởi kinh nghiệm trong Flutter và phát triển Full-stack. Mục tiêu của tôi là cung cấp các giải pháp thanh lịch cho các vấn đề ứng dụng phức tạp.',
      desc2: 'Với nền tảng vững chắc về thiết kế UX/UI, tôi đảm bảo rằng mọi sản phẩm tôi xây dựng không chỉ hoạt động hoàn hảo mà còn cung cấp trải nghiệm người dùng đặc biệt.',
      desc3: 'Tôi có bề dày thành tích trong việc triển khai ứng dụng cho cả CH Play và AppStore, quản lý mọi thứ từ thiết kế ban đầu đến triển khai đẩy mã OTA.',
      yearsTag: 'Năm làm React Native',
    },
    expertise: {
      tag: 'Chuyên môn',
      title: 'Kỹ năng công nghệ',
      platforms: 'Nền tảng & Framework',
      languages: 'Ngôn ngữ',
      tools: 'Công cụ & Kỹ năng khác',
    },
    portfolio: {
      tag: 'Hồ sơ năng lực',
      title: 'Dự án tiêu biểu',
      desc: 'Một số dự án tiêu biểu mà tôi đã áp dụng chuyên môn của mình trong phát triển di động.',
    },
    contact: {
      title: 'Hãy cùng xây dựng điều gì đó phi thường.',
      desc: 'Sẵn sàng đưa ý tưởng ứng dụng di động của bạn vào cuộc sống? Hãy liên hệ và chúng ta cùng trò chuyện.',
    },
    footer: {
      rights: 'Bản quyền được bảo lưu.',
      backToTop: 'Quay lại đầu trang',
      builtWith: 'Xây dựng bằng React & Framer Motion',
    },
  },
};
