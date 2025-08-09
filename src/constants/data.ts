import {
  ChefHat,
  Clock,
  Facebook,
  Heart,
  Instagram,
  LucideIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Twitter,
  Users,
} from "lucide-react";

export interface INavigationItem {
  label: string;
  href: string;
}

export const navigationItems: INavigationItem[] = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Tentang Kami",
    href: "#about",
  },
  {
    label: "Galeri",
    href: "#gallery",
  },
  {
    label: "Reservasi",
    href: "/reservation",
  },
  {
    label: "Kontak",
    href: "#contact",
  },
];

// Contact data for restaurant
export interface IContactInfo {
  id: number;
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export const contactData: IContactInfo[] = [
  {
    id: 1,
    icon: MapPin,
    title: "Alamat",
    value: "Jl. Raya Kuliner No. 123",
    description: "Jakarta Selatan, DKI Jakarta 12345",
  },
  {
    id: 2,
    icon: Phone,
    title: "Telepon",
    value: "+62 21 1234 5678",
    description: "Buka setiap hari 08:00 - 22:00",
  },
  {
    id: 3,
    icon: Mail,
    title: "Email",
    value: "info@rasakita.com",
    description: "Untuk reservasi dan pertanyaan",
  },
  {
    id: 4,
    icon: Clock,
    title: "Jam Operasional",
    value: "08:00 - 22:00",
    description: "Senin - Minggu (Buka setiap hari)",
  },
];

// Restaurant specific info
export const restaurantInfo = {
  name: "Rasa Kita Restaurant",
  tagline: "Authentic Indonesian Cuisine",
  description:
    "Experience the authentic taste of Indonesia with our traditional recipes and warm hospitality.",
  phone: "+62 21 1234 5678",
  email: "info@rasakita.com",
  address: "Jl. Kuliner No. 123, Jakarta Selatan",
};

// Features data for restaurant
export interface IFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const featuresData: IFeature[] = [
  {
    icon: ChefHat,
    title: "Masakan Autentik",
    description:
      "Hidangan tradisional Indonesia yang diolah dengan resep turun temurun dan bumbu pilihan.",
  },
  {
    icon: Users,
    title: "Suasana Keluarga",
    description:
      "Tempat yang nyaman dan hangat untuk berkumpul bersama keluarga dan teman-teman.",
  },
  {
    icon: Clock,
    title: "Pelayanan Cepat",
    description:
      "Layanan yang ramah dan cepat untuk memastikan pengalaman makan yang menyenangkan.",
  },
  {
    icon: Star,
    title: "Kualitas Terjamin",
    description:
      "Menggunakan bahan-bahan segar berkualitas tinggi untuk cita rasa yang tak terlupakan.",
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description:
      "Terletak di pusat kota dengan akses mudah dan area parkir yang luas.",
  },
  {
    icon: Heart,
    title: "Dibuat dengan Cinta",
    description:
      "Setiap hidangan disiapkan dengan penuh perhatian dan cinta untuk kepuasan Anda.",
  },
];

// Testimonials data for restaurant
export interface ITestimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonialsData: ITestimonial[] = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Food Blogger",
    content:
      "Rasa Kita benar-benar memberikan pengalaman kuliner yang autentik! Rendang mereka adalah yang terbaik yang pernah saya coba di Jakarta. Suasana restoran juga sangat nyaman untuk keluarga.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Pelanggan Setia",
    content:
      "Sudah 3 tahun menjadi pelanggan setia Rasa Kita. Kualitas makanan selalu konsisten dan pelayanannya sangat ramah. Tempat favorit keluarga untuk makan bersama!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Maya Sari",
    role: "Chef Profesional",
    content:
      "Sebagai sesama chef, saya sangat menghargai dedikasi Rasa Kita dalam mempertahankan cita rasa tradisional. Bumbu-bumbu yang digunakan sangat berkualitas dan teknik memasaknya sempurna.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Ahmad Rahman",
    role: "Pengusaha",
    content:
      "Lokasi yang strategis dan makanan yang lezat membuat Rasa Kita menjadi pilihan utama untuk meeting bisnis. Nasi gudeg dan ayam bakar mereka tidak pernah mengecewakan.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Dewi Lestari",
    role: "Ibu Rumah Tangga",
    content:
      "Anak-anak saya sangat suka dengan gado-gado dan soto ayam di Rasa Kita. Porsinya pas, harganya terjangkau, dan rasanya seperti masakan rumah. Highly recommended!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Rizki Pratama",
    role: "Mahasiswa",
    content:
      "Sebagai mahasiswa, saya sangat terbantu dengan harga yang terjangkau tapi rasa yang tidak murahan. Nasi campur mereka lengkap dan mengenyangkan. Perfect untuk kantong mahasiswa!",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

// Footer data
interface IFooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface IFooterData {
  sections: IFooterSection[];
  socialMedia: { name: string; href: string; icon: LucideIcon }[];
  copyright: string;
}

// Menu data for restaurant
export interface IMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface IMenuCategory {
  id: string;
  name: string;
  description: string;
}

export const menuCategories: IMenuCategory[] = [
  {
    id: "makanan-utama",
    name: "Makanan Utama",
    description: "Hidangan utama khas Indonesia yang menggugah selera"
  },
  {
    id: "minuman",
    name: "Minuman",
    description: "Minuman segar dan tradisional untuk menemani santapan"
  },
  {
    id: "dessert",
    name: "Dessert",
    description: "Penutup manis khas Indonesia yang tak terlupakan"
  },
  {
    id: "snack",
    name: "Snack",
    description: "Camilan ringan dan gorengan tradisional"
  }
];

export const menuData: IMenuItem[] = [
  // Makanan Utama
  {
    id: 1,
    name: "Nasi Gudeg Yogya",
    description: "Gudeg khas Yogyakarta dengan nangka muda, ayam, dan telur pindang",
    price: 25000,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop",
    category: "makanan-utama",
    isPopular: true
  },
  {
    id: 2,
    name: "Rendang Daging Sapi",
    description: "Rendang daging sapi empuk dengan bumbu rempah khas Padang",
    price: 35000,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    category: "makanan-utama",
    isPopular: true,
    isSpicy: true
  },
  {
    id: 3,
    name: "Ayam Bakar Taliwang",
    description: "Ayam bakar khas Lombok dengan sambal taliwang yang pedas",
    price: 28000,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
    category: "makanan-utama",
    isSpicy: true
  },
  {
    id: 4,
    name: "Soto Ayam Lamongan",
    description: "Soto ayam dengan kuah bening, telur, dan kerupuk",
    price: 20000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    category: "makanan-utama"
  },
  {
    id: 5,
    name: "Gado-Gado Jakarta",
    description: "Sayuran segar dengan bumbu kacang dan kerupuk",
    price: 18000,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    category: "makanan-utama"
  },
  {
    id: 6,
    name: "Nasi Campur Bali",
    description: "Nasi dengan lauk pauk khas Bali: ayam betutu, sayur urab, sambal matah",
    price: 30000,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
    category: "makanan-utama",
    isPopular: true
  },
  
  // Minuman
  {
    id: 7,
    name: "Es Teh Manis",
    description: "Teh manis dingin yang menyegarkan",
    price: 8000,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    category: "minuman"
  },
  {
    id: 8,
    name: "Es Jeruk Nipis",
    description: "Jeruk nipis segar dengan es batu",
    price: 10000,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
    category: "minuman"
  },
  {
    id: 9,
    name: "Es Cendol",
    description: "Minuman tradisional dengan cendol, santan, dan gula merah",
    price: 12000,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop",
    category: "minuman",
    isPopular: true
  },
  {
    id: 10,
    name: "Jus Alpukat",
    description: "Jus alpukat segar dengan susu kental manis",
    price: 15000,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=300&fit=crop",
    category: "minuman"
  },
  
  // Dessert
  {
    id: 11,
    name: "Es Pisang Ijo",
    description: "Pisang dengan tepung hijau, es serut, dan sirup",
    price: 15000,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    category: "dessert",
    isPopular: true
  },
  {
    id: 12,
    name: "Klepon",
    description: "Kue tradisional dengan isian gula merah dan kelapa parut",
    price: 12000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "dessert"
  },
  {
    id: 13,
    name: "Es Krim Durian",
    description: "Es krim dengan rasa durian asli yang creamy",
    price: 18000,
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop",
    category: "dessert"
  },
  
  // Snack
  {
    id: 14,
    name: "Kerupuk Udang",
    description: "Kerupuk udang renyah sebagai pelengkap",
    price: 5000,
    image: "https://images.unsplash.com/photo-1601314002957-dd7f6d1d3d8c?w=400&h=300&fit=crop",
    category: "snack"
  },
  {
    id: 15,
    name: "Tempe Mendoan",
    description: "Tempe goreng tepung khas Purwokerto yang renyah",
    price: 8000,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    category: "snack"
  },
  {
    id: 16,
    name: "Pisang Goreng",
    description: "Pisang goreng crispy dengan tepung renyah",
    price: 10000,
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&h=300&fit=crop",
    category: "snack",
    isPopular: true
  }
];

export const footerData = {
  sections: [
    {
      title: "Menu",
      links: [
        { label: "Makanan Utama", href: "/menu" },
        { label: "Minuman", href: "/menu" },
        { label: "Dessert", href: "/menu" },
        { label: "Paket Keluarga", href: "/menu" },
      ],
    },
    {
      title: "Layanan",
      links: [
        { label: "Reservasi", href: "/reservation" },
        { label: "Catering", href: "/" },
        { label: "Delivery", href: "/" },
        { label: "Private Event", href: "/" },
      ],
    },
    {
      title: "Informasi",
      links: [
        { label: "Tentang Kami", href: "/" },
        { label: "Karir", href: "/" },
        { label: "Blog", href: "/" },
        { label: "FAQ", href: "/" },
      ],
    },
  ],
  socialMedia: [
    {
      name: "Facebook",
      href: "https://facebook.com/ansoridev",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/ansoridev",
      icon: Instagram,
    },
    { name: "Twitter", href: "https://twitter.com/ansoridev", icon: Twitter },
    {
      name: "WhatsApp",
      href: "https://wa.me/6285738224566",
      icon: MessageCircle,
    },
  ],
  copyright: "© 2024 Ansori Dev. All rights reserved.",
};
