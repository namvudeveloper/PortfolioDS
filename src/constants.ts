export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    vi: string;
  };
  tech: string[];
  platform: string;
  image: string;
  images?: string[];
  model?: string;
  video?: string;
  links?: {
    appStore?: string;
    playStore?: string;
    github?: string;
    website?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'quang-cao-san-pham-3d',
    title: 'Quảng cáo sản phẩm bằng 3D',
    description: {
      en: 'A 3D product presentation for a printed piece about 3D printing. I built the scene in Blender, set up materials, lighting and cameras, then animated the package opening to reveal the character. Explore the model or watch the eight-second render.',
      vi: 'Tôi dựng một cảnh 3D để giới thiệu ấn phẩm về nhựa in 3D. Trong Blender, tôi sắp xếp chất liệu, ánh sáng và camera, rồi làm chuyển động mở hộp để nhân vật xuất hiện. Người xem có thể xoay mô hình hoặc xem video dài 8 giây.',
    },
    tech: ['Blender', '3D Modeling', 'Lighting', 'Camera', 'Animation'],
    platform: '3D / Animation',
    image: '/assets/quang-cao-san-pham-3d.jpg',
    model: '/assets/quang-cao-san-pham-3d.glb',
    video: '/assets/quang-cao-san-pham-3d.mp4',
  },
  {
    id: 'dan-gian-cung-giai-dieu',
    title: 'Dân Gian Cùng Giai Điệu',
    description: {
      en: 'A catalogue design project introducing Vietnamese folk musical instruments through traditional-inspired imagery, warm colors, and balanced editorial layouts. The project combines cultural research with modern graphic design to create a polished visual publication.',
      vi: 'Dự án thiết kế catalogue giới thiệu các loại nhạc cụ dân gian Việt Nam thông qua hình ảnh, màu sắc và bố cục mang hơi hướng truyền thống. Trong quá trình thực hiện, tôi tập trung khai thác chất liệu văn hóa dân tộc, kết hợp cùng phong cách thiết kế hiện đại để tạo nên một ấn phẩm gần gũi, có tính thẩm mỹ và truyền tải được tinh thần âm nhạc dân gian Việt Nam.',
    },
    tech: ['Catalogue Design', 'Brand Identity', 'Layout', 'Typography', 'Adobe Photoshop', 'Adobe Illustrator'],
    platform: 'Graphic Design',
    image: '/assets/dan-gian-cung-giai-dieu-0001.jpg',
    images: [
      '/assets/dan-gian-cung-giai-dieu-0001.jpg',
      '/assets/dan-gian-cung-giai-dieu-0002.jpg',
      '/assets/dan-gian-cung-giai-dieu-0003.jpg',
      '/assets/dan-gian-cung-giai-dieu-0004.jpg',
      '/assets/dan-gian-cung-giai-dieu-0005.jpg',
      '/assets/dan-gian-cung-giai-dieu-0006.jpg',
      '/assets/dan-gian-cung-giai-dieu-0007.jpg',
      '/assets/dan-gian-cung-giai-dieu-0008.jpg',
      '/assets/dan-gian-cung-giai-dieu-0009.jpg',
      '/assets/dan-gian-cung-giai-dieu-0010.jpg',
      '/assets/dan-gian-cung-giai-dieu-0011.jpg',
      '/assets/dan-gian-cung-giai-dieu-0012.jpg',
      '/assets/dan-gian-cung-giai-dieu-0013.jpg',
      '/assets/dan-gian-cung-giai-dieu-0014.jpg',
      '/assets/dan-gian-cung-giai-dieu-0015.jpg',
    ],
  },
  {
    id: 'hoi-uc-dau-thuong',
    title: 'Hồi Ức Đau Thương',
    description: {
      en: 'A book cover design concept using layered illustration, muted green tones, and strong red accents to express nostalgia, sadness, and emotional memory.',
      vi: 'Dự án thiết kế bìa sách với hình ảnh minh họa giàu cảm xúc, sử dụng tông xanh trầm kết hợp sắc đỏ nổi bật để gợi cảm giác hoài niệm, nỗi đau và chiều sâu ký ức.',
    },
    tech: ['Book Cover', 'Illustration', 'Typography', 'Layout', 'Adobe Photoshop', 'Adobe Illustrator'],
    platform: 'Cover Design',
    image: '/assets/hoi-uc-dau-thuong-book-cover.jpeg',
    images: ['/assets/hoi-uc-dau-thuong-book-cover.jpeg'],
  },
  {
    id: 'trung-thu-packaging',
    title: 'Thiết Kế Bao Bì Bánh Trung Thu',
    description: {
      en: 'A Mid-Autumn mooncake packaging design project for the THƯƠNG brand, including concept research, dieline layouts, box structures, decorative illustration, and product mockups.',
      vi: 'Dự án thiết kế bao bì bánh Trung Thu cho thương hiệu THƯƠNG, bao gồm nghiên cứu ý tưởng, triển khai khuôn bế, bố cục hộp, minh họa trang trí và mockup sản phẩm.',
    },
    tech: ['Packaging Design', 'Dieline', 'Mockup', 'Illustration', 'Adobe Illustrator', 'Adobe Photoshop'],
    platform: 'Packaging',
    image: '/assets/thiet-ke-bao-bi-banh-trung-thu.jpeg',
    images: ['/assets/thiet-ke-bao-bi-banh-trung-thu.jpeg'],
  },
  {
    id: 'brochure',
    title: 'Brochure',
    description: {
      en: 'A brochure design project for a Mid-Autumn theme, using festive illustrations, product information sections, and a decorative layout to present the concept clearly.',
      vi: 'Dự án thiết kế brochure chủ đề Trung Thu, sử dụng minh họa lễ hội, các phần thông tin sản phẩm và bố cục trang trí để trình bày ý tưởng một cách rõ ràng, sinh động.',
    },
    tech: ['Brochure Design', 'Editorial Layout', 'Illustration', 'Typography', 'Adobe Illustrator'],
    platform: 'Brochure',
    image: '/assets/trung-thu-packaging.jpg',
    images: ['/assets/trung-thu-packaging.jpg'],
  },
  {
    id: 'dien-sac-dien-hon',
    title: 'Diện Sắc - Diện Hồn',
    description: {
      en: 'A poster mockup for a Vietnamese opera-inspired visual campaign, combining theatrical masks, floral details, contrast colors, and outdoor advertising presentation.',
      vi: 'Dự án thiết kế poster/mockup lấy cảm hứng từ nghệ thuật hát bội Việt Nam, kết hợp hình ảnh mặt nạ sân khấu, họa tiết hoa, màu sắc tương phản và cách trình bày trên bảng quảng cáo ngoài trời.',
    },
    tech: ['Poster Design', 'Mockup', 'Vietnamese Culture', 'Visual Campaign', 'Adobe Photoshop'],
    platform: 'Poster',
    image: '/assets/dien-sac-dien-hon-poster-mockup.jpg',
    images: ['/assets/dien-sac-dien-hon-poster-mockup.jpg'],
  },
];

export const SKILLS = {
  languages: ['Bố cục', 'Màu sắc', 'Typography', 'Tư duy thẩm mỹ'],
  platforms: ['Thiết kế đồ họa', 'Nhận diện thương hiệu', 'Thiết kế ấn phẩm', 'Biên tập hình ảnh'],
  tools: ['Adobe Photoshop', 'Adobe Illustrator', 'After Effects', 'Blender', 'Làm việc nhóm', 'Sáng tạo', 'Tiếp thu góp ý'],
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
      status: 'Graphic Design Student',
      title: 'Đỗ Thị Sáu',
      role: 'Graphic Designer',
      exp: '',
      desc: 'I am studying Graphic Design at Thu Duc College of Technology, with a foundation in layout, color, visual composition, and creative design tools.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      tag: 'About Me',
      title: 'Designing visual stories with care and creativity.',
      desc1: 'I am Đỗ Thị Sáu, a second-year Graphic Design student at Thu Duc College of Technology. Through my studies, I have built a foundation in design principles, layout, color, and visual communication.',
      desc2: 'I can work with tools such as Adobe Photoshop, Illustrator, and After Effects. I learn quickly, stay creative, and actively receive feedback to improve my skills.',
      desc3: 'Although my practical business experience is still limited, I proactively learn new knowledge, work on personal projects, and am ready to adapt to a professional working environment.',
      yearsTag: 'Year Student',
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
      desc: 'A selection of design projects where I apply layout, color, and visual storytelling.',
      view3D: 'Explore in 3D',
      viewAnimation: 'Watch animation',
      rotateHint: 'Drag to rotate · Scroll to zoom',
      loading3D: 'Loading 3D model…',
      close3D: 'Close viewer',
    },
    contact: {
      title: "Let's create meaningful visuals.",
      desc: 'I am ready to learn, collaborate, and contribute to professional design projects.',
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
      status: 'Sinh viên Thiết kế Đồ họa',
      title: 'Đỗ Thị Sáu',
      role: 'Graphic Designer',
      exp: '',
      desc: 'Tôi đang theo học ngành Thiết kế Đồ họa tại Trường Cao đẳng Công nghệ Thủ Đức, với nền tảng về thiết kế, bố cục, màu sắc và tư duy thẩm mỹ.',
      viewProjects: 'Xem dự án',
      contactMe: 'Liên hệ với tôi',
    },
    about: {
      tag: 'Về tôi',
      title: 'Sáng tạo câu chuyện thị giác bằng sự chỉn chu.',
      desc1: 'Tôi là Đỗ Thị Sáu, hiện là sinh viên năm 2 ngành Thiết kế Đồ họa tại Trường Cao đẳng Công nghệ Thủ Đức. Trong quá trình học tập, tôi đã được trang bị kiến thức nền tảng về thiết kế, bố cục, màu sắc và tư duy thẩm mỹ trong sản phẩm truyền thông.',
      desc2: 'Tôi có khả năng sử dụng các phần mềm thiết kế như Adobe Photoshop, Illustrator, After Effects và luôn chủ động học hỏi để nâng cao kỹ năng chuyên môn. Bên cạnh đó, tôi là người có tinh thần sáng tạo, tiếp thu góp ý tốt, có trách nhiệm trong công việc và có khả năng làm việc nhóm hiệu quả.',
      desc3: 'Tuy kinh nghiệm làm việc thực tế tại doanh nghiệp của tôi còn hạn chế do vẫn đang trong quá trình học tập, tôi luôn chủ động tìm hiểu kiến thức mới, thực hiện các dự án cá nhân và sẵn sàng học hỏi để nhanh chóng thích nghi với môi trường làm việc chuyên nghiệp.',
      yearsTag: 'Sinh viên năm',
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
      desc: 'Một số dự án tôi đã áp dụng kiến thức về bố cục, màu sắc và thiết kế thị giác.',
      view3D: 'Xem mô hình 3D',
      viewAnimation: 'Xem chuyển động',
      rotateHint: 'Kéo để xoay · Cuộn để phóng to',
      loading3D: 'Đang tải mô hình 3D…',
      close3D: 'Đóng mô hình',
    },
    contact: {
      title: 'Hãy cùng tạo nên những thiết kế ý nghĩa.',
      desc: 'Tôi sẵn sàng học hỏi, hợp tác và đóng góp trong các dự án thiết kế chuyên nghiệp.',
    },
    footer: {
      rights: 'Bản quyền được bảo lưu.',
      backToTop: 'Quay lại đầu trang',
      builtWith: 'Xây dựng bằng React & Framer Motion',
    },
  },
};
